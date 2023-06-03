import Image from "next/image";
import { use, useContext, useEffect, useState } from "react";
import PoolCardDetails from "./PoolCardDetails";
import { Pool } from "../../state/types";
import BigNumber from "bignumber.js";
import useCharts from "@/hooks/useCharts";
import { toast } from "react-toastify";
import { approve, ApprovalResult } from "@/utils/callFunctions";
import { ethers } from "ethers";
import { useAccount, useBalance, useContractRead, useSigner } from "wagmi";
import { getAddress } from "@/utils/addressHelpers";
import TokenABI from "@/config/abi/bscUSDT.json";
import stakeContract from "@/config/abi/stakeContract.json";
import { useAppDispatch } from "../../state/index";
import { Modal } from "flowbite-react";
import pools from "@/state/pools";
export interface PoolsWithStakedValue extends Pool {
  liquidity?: BigNumber;
}

interface PoolCardProps {
  pool: PoolsWithStakedValue;
}

const PoolCard: React.FC<React.PropsWithChildren<PoolCardProps>> = ({
  pool,
}) => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const dispatch = useAppDispatch();
  const [expandCard, setExpandCard] = useState(false);
  const [earned, setEarned] = useState(0);
  const [allowanceFrom, setAllowanceFrom] = useState(0);
  const [staked, setStaked] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [tvlInUSD, setTvlInUSD] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const { archerswapPrice } = useCharts();

  const contractReadAllowance = useContractRead({
    address: getAddress(pool.stakingToken) as `0x${string}`,
    abi: TokenABI,
    functionName: "allowance",
    args: [address, getAddress(pool.contractAddress)],
    watch: true,
  });

  const contractReadStakedBalance = useContractRead({
    address: getAddress(pool.contractAddress) as `0x${string}`,
    abi: TokenABI,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  const contractReadEarned = useContractRead({
    address: getAddress(pool.contractAddress) as `0x${string}`,
    abi: stakeContract,
    functionName: "earned",
    args: [address],
    watch: true,
  });

  const contractReadTotalSupply = useContractRead({
    address: getAddress(pool.contractAddress) as `0x${string}`,
    abi: stakeContract,
    functionName: "totalSupply",
    watch: true,
  });

  const userTokenBalance = useBalance({
    address: address,
    token: getAddress(pool.stakingToken) as `0x${string}`,
    watch: true,
  });

  // console.log("contractReadSupply", Number(contractReadTotalSupply.data));
  // // console.log("contractReadEarned", Number(contractReadEarned.data));
  // // console.log("contractReadStaked", Number(contractReadStakedBalance.data));
  // console.log("contractReadAllowance", Number(contractReadAllowance.data));
  // console.log("userTokenBalance", Number(userTokenBalance.data?.formatted));

  useEffect(() => {
    const allowanceGet = (
      Number(contractReadAllowance.data) /
      10 ** 18
    ).toFixed(2);
    setAllowanceFrom(Number(allowanceGet));
  }, [contractReadAllowance]);
  useEffect(() => {
    setStaked(Number(contractReadStakedBalance.data) / 10 ** 18);
  }, [contractReadStakedBalance]);

  useEffect(() => {
    setEarned(Number(contractReadEarned.data) / 10 ** 18);
  }, [contractReadEarned]);

  useEffect(() => {
    setTotalSupply(Number(contractReadTotalSupply.data) / 10 ** 18);
  }, [contractReadTotalSupply]);

  useEffect(() => {
    setUserBalance(Number(userTokenBalance.data?.formatted));
  }, [userTokenBalance]);

  const [approving, setApproving] = useState(false);
  const { data: signer } = useSigner();

  async function approveTokens() {
    const amount = ethers.utils.parseUnits(
      "115792089237316195423570985008687907853269984665640564039457",
      18
    );
    const signer_from = signer;
    try {
      setApproving(true);
      const approvalResult: ApprovalResult = await approve(
        getAddress(pool.stakingToken),
        getAddress(pool.contractAddress),
        TokenABI,
        amount,
        signer_from
      );
      if (approvalResult.status == "mined") {
        setApproving(false);
        const address_to = address as `0x${string}`;
      }
      await toast.promise(Promise.resolve(), {
        pending: "Approving tokens...",
        success: "Tokens approved successfully 👌",
        error: "Failed to approve tokens",
      });
      setApproving(false);
    } catch (error) {
      const theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "default";
      if (theme === "default") {
        toast.error("Failed to approve tokens: " + error, {
          theme: "light",
        });
      } else {
        toast.error("Failed to approve tokens: " + error, {
          theme: "dark",
        });
      }
      console.error(`Failed to approve tokens: ${error}`);
      setApproving(false);
    }
  }
  const HanddleApprove = () => {
    if (approving) return;
    if (!isConnected) return;
    approveTokens().catch((error) => console.log(error));
  };

  const [enableButton, setEnableButton] = useState("Enable");

  useEffect(() => {
    if (isConnected) {
      setEnableButton("Enable");
    } else {
      setEnableButton("Connect Wallet");
    }
  }, [enableButton, isConnected]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenUnstake, setModalOpenUnstake] = useState(false); //
  const [depositAmount, setDepositAmount] = useState("");
  const setMax = () => {
    setDepositAmount(userBalance.toString());
  };

  let buttonElement;
  if (userBalance > 0) {
    if (Number(depositAmount) > 0) {
      buttonElement = (
        <button
          data-modal-hide="popup-modal"
          type="button"
          className="bg-gradient-to-br from-green-400 to-yellow-300 text-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        >
          Deposit
        </button>
      );
    } else {
      buttonElement = (
        <button
          data-modal-hide="popup-modal"
          type="button"
          className="opacity-25 bg-gradient-to-br from-green-400 to-yellow-300 text-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        >
          Deposit
        </button>
      );
    }
  } else {
    buttonElement = (
      <button
        data-modal-hide="popup-modal"
        type="button"
        className="opacity-25 bg-gradient-to-br from-green-400 to-yellow-300 text-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
      >
        Wallet {pool.name} balance is too low
      </button>
    );
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;
    if (value === "" || regex.test(value)) {
      setDepositAmount(value);
    }
  };

  return (
    <>
      <Modal
        dismissible={true}
        show={modalOpen}
        size="md"
        onClose={() => setModalOpen(false)}
      >
        <Modal.Header className="border-b-0">
          Deposit ({pool.name})
        </Modal.Header>
        <Modal.Body className="p-6 ">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Available amount: {userBalance} {pool.name}
          </p>
          <div className="relative">
            <input
              type="text"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              min="0"
              minLength={1}
              maxLength={79}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Deposit Amount"
              value={depositAmount}
              onChange={handleInputChange}
            />
            <button
              onClick={() => setMax()}
              type="button"
              className="bg-gradient-to-br from-green-400 to-yellow-300 text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
            >
              Max
            </button>
          </div>
          <div className="p-6 text-center">{buttonElement}</div>
        </Modal.Body>
      </Modal>
      <Modal
        dismissible={true}
        show={modalOpenUnstake}
        size="md"
        onClose={() => setModalOpenUnstake(false)}
      >
        <Modal.Header className="border-b-0">
          Withdraw ({pool.name})
        </Modal.Header>
        <Modal.Body className="p-6 ">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Available amount: {staked} {pool.name}
          </p>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Withdraw Amount"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-green-400 to-yellow-300 text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
            >
              Max
            </button>
          </div>
          <div className="p-6 text-center">
            {staked > 0 ? (
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="bg-gradient-to-br from-green-400 to-yellow-300 text-white  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Withdraw
              </button>
            ) : (
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="opacity-25 bg-gradient-to-br from-green-400 to-yellow-300 text-white  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Wallet {pool.name} balance is too low
              </button>
            )}
          </div>
        </Modal.Body>
      </Modal>
      <div
        key={pool.poolId}
        className={`p-2 mt-5 border bg-[#115657]  border-gray-200 rounded-[1.5rem] shadow dark:border-gray-700 `}
      >
        <div
          className={`grid grid-cols-5`}
          onClick={() => setExpandCard(!expandCard)}
        >
          <div className="flex items-center col-span-1">
            <Image src="/images/4logo.png" alt="" width={30} height={30} />
            <span className="font-medium text-white flex-none ml-[10px]">
              {pool.name}
            </span>
          </div>

          <PoolCardDetails
            earn={earned}
            tvl={totalSupply}
            displayApr={pool.apr}
          />
          <div className="flex justify-center col-1">
            {Number(earned) > 0 ? (
              <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
                Claim
              </button>
            ) : (
              <button className="bg-gradient-to-br disabled from-gray-400 opacity-25 to-gray-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
                Claim
              </button>
            )}
          </div>
          <div className="flex items-center col-span-1 justify-end p-4">
            <button
              onClick={
                expandCard
                  ? () => setExpandCard(false)
                  : () => setExpandCard(true)
              }
            >
              {expandCard ? (
                <Image
                  src="/images/up-arrow.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/images/down-arrow.svg"
                  alt=""
                  className="transform rotate-360"
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
        </div>
        {expandCard ? (
          ""
        ) : (
          <div>
            <div className="grid  justify-center gap-4 grid-cols-3 space-x-4">
              <span className="px-4 py-2 text-black dark:text-white md:hidden flex justify-center">
                TVL
              </span>
              <span className="px-4 py-2 text-black dark:text-white flex md:hidden justify-center">
                APR
              </span>
              <span className="px-4 py-2 text-black dark:text-white flex md:hidden justify-center">
                Earned
              </span>
            </div>
            <div className="grid grid-cols-3 justify-center space-x-4">
              <span className="px-4 py-2 text-white flex md:hidden  justify-center">
                ${Number(totalSupply * archerswapPrice).toFixed(2)}
              </span>
              <span className="px-4 py-2 text-white flex md:hidden  justify-center">
                {pool.apr}%
              </span>
              <span className="px-4 py-2 text-white flex md:hidden justify-center">
                ${earned > 0 ? earned : 0}
              </span>
            </div>
          </div>
        )}
        {expandCard ? (
          <div className="border-b border-[#1e6365] my-4"></div>
        ) : (
          ""
        )}
        {expandCard ? (
          <div className="grid grid-cols-3 ">
            <div className="col-1">
              <div className="text-[#669ca0]">Your deposit</div>
              <div className="text-white text-[3rem]">
                {staked > 0 ? staked.toFixed(3) : 0}
                <span className="text-sm grid">
                  (${staked > 0 ? (staked * archerswapPrice).toFixed(3) : 0})
                </span>
              </div>
            </div>
            <div className="col-1">
              <div className="text-[#669ca0]">APR%</div>
              <div className="text-white text-[3rem]">{pool.apr}%</div>
            </div>
            <div className="col-1">
              <div className="text-[#669ca0]">Earning</div>
              <div className="text-green-400 text-[3rem] text-gradient-to-b">
                {earned > 0 ? earned.toFixed(3) : 0}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {expandCard ? (
          <div>
            <div className="grid-cols-3 hidden md:grid mt-[20px]">
              <div className="col-1">
                <div className="text-[#669ca0]">
                  {Number(allowanceFrom) > 0 ? (
                    <>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]"
                      >
                        Deposit
                      </button>
                      {staked > 0 ? (
                        <button
                          onClick={() => setModalOpenUnstake(true)}
                          className="bg-gradient-to-br from-green-400 ml-1 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]"
                        >
                          -
                        </button>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => HanddleApprove()}
                      className={`${approving ? "opacity-25" : ""} ${
                        isConnected ? "" : "opacity-25"
                      } bg-gradient-to-br w-[120px] from-green-400 ml-1 to-yellow-300 text-black text-sm  p-3 pl-5 pr-5 rounded-[1rem]`}
                    >
                      {approving ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="hidden md:block">Enable </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="m-0 bg-transparent block antialiased"
                            width="18px"
                            height="18px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                            style={{ shapeRendering: "auto" }}
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="0"
                              fill="none"
                              stroke="#300313"
                              strokeWidth="2"
                            >
                              <animate
                                attributeName="r"
                                repeatCount="indefinite"
                                dur="1s"
                                values="0;51"
                                keyTimes="0;1"
                                keySplines="0 0.2 0.8 1"
                                calcMode="spline"
                                begin="0s"
                              ></animate>
                              <animate
                                attributeName="opacity"
                                repeatCount="indefinite"
                                dur="1s"
                                values="1;0"
                                keyTimes="0;1"
                                keySplines="0.2 0 0.8 1"
                                calcMode="spline"
                                begin="0s"
                              ></animate>
                            </circle>
                            <circle
                              cx="50"
                              cy="50"
                              r="0"
                              fill="none"
                              stroke="#46dff0"
                              strokeWidth="2"
                            >
                              <animate
                                attributeName="r"
                                repeatCount="indefinite"
                                dur="1s"
                                values="0;51"
                                keyTimes="0;1"
                                keySplines="0 0.2 0.8 1"
                                calcMode="spline"
                                begin="-0.5s"
                              ></animate>
                              <animate
                                attributeName="opacity"
                                repeatCount="indefinite"
                                dur="1s"
                                values="1;0"
                                keyTimes="0;1"
                                keySplines="0.2 0 0.8 1"
                                calcMode="spline"
                                begin="-0.5s"
                              ></animate>
                            </circle>
                          </svg>
                        </div>
                      ) : (
                        <span className="hidden md:block">{enableButton} </span>
                      )}
                    </button>
                  )}
                </div>
              </div>
              <div className="col-1">
                <div className="text-[#669ca0] mt-[20px]">
                  <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]">
                    Buy {pool.name}
                  </button>
                </div>
              </div>
              <div className="col-1">
                <div className="text-[#669ca0] mt-[20px]">
                  <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]">
                    Contract Address
                  </button>
                </div>
              </div>
            </div>
            <div className="md:hidden mt-[20px] ">
              <div className="col-1">
                <div className="text-[#669ca0]">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]"
                  >
                    Deposit
                  </button>
                  {staked > 0 ? (
                    <button className="bg-gradient-to-br from-green-400 ml-1 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]">
                      -
                    </button>
                  ) : (
                    ""
                  )}
                  <button className="bg-gradient-to-br from-green-400 ml-1 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]">
                    -
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-1">
                  <div className="text-[#669ca0] mt-[20px]">
                    <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]">
                      Token Address
                    </button>
                  </div>
                </div>
                <div className="col-1">
                  <div className="text-[#669ca0] mt-[20px]">
                    <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pl-5 pr-5 rounded-[1rem]">
                      Contract Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PoolCard;
