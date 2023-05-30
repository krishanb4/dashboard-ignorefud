import { BigNumber } from "ethers";
import Image from "next/image";
import { useContext, useState } from "react";
import PoolCardDetails from "./PoolCardDetails";
import FetchPools from "../../state/pools/fetchPools";
import { MyContext } from "@/components/context";
import { usePools } from "@/state/hooks";
import { Pool } from "../../state/types";

export interface PoolsWithStakedValue extends Pool {
  liquidity?: BigNumber;
}

interface PoolCardProps {
  pool: PoolsWithStakedValue;
}

const PoolCard: React.FC<React.PropsWithChildren<PoolCardProps>> = ({
  pool,
}) => {
  const [expandCard, setExpandCard] = useState(false);

  return (
    <div
      key={pool.poolId}
      className={`p-2 mt-5 border bg-[#115657]  border-gray-200 rounded-[1.5rem] shadow dark:border-gray-700 `}
    >
      <div className={`grid grid-cols-5`}>
        <div className="flex items-center col-span-1">
          <Image src="/images/4logo.png" alt="" width={30} height={30} />
          <span className="font-medium text-white flex-none ml-[10px]">
            {pool.name}
          </span>
        </div>

        <PoolCardDetails tvl={pool.tvlInUSD} displayApr={pool.apr} />
        <div className="flex justify-center col-1">
          <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
            Claim
          </button>
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
              <Image src="/images/up-arrow.svg" alt="" width={20} height={20} />
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
              ${Number(pool.tvlInUSD)}
            </span>
            <span className="px-4 py-2 text-white flex md:hidden  justify-center">
              {pool.apr}%
            </span>
            <span className="px-4 py-2 text-white flex md:hidden justify-center">
              ${0}
            </span>
          </div>
        </div>
      )}
      {expandCard ? <div className="border-b border-[#1e6365] my-4"></div> : ""}
      {expandCard ? (
        <div className="grid grid-cols-3 ">
          <div className="col-1">
            <div className="text-[#669ca0]">Your deposit</div>
            <div className="text-white text-[3rem]">
              400k
              <span className="text-sm grid">($4000)</span>
            </div>
          </div>
          <div className="col-1">
            <div className="text-[#669ca0]">APR%</div>
            <div className="text-white text-[3rem]">{pool.apr}%</div>
          </div>
          <div className="col-1">
            <div className="text-[#669ca0]">Earning</div>
            <div className="text-green-400 text-[3rem] text-gradient-to-b">
              $150
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
                <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]">
                  Deposit
                </button>
                <button className="bg-gradient-to-br from-green-400 ml-1 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]">
                  -
                </button>
              </div>
            </div>
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
          <div className="md:hidden mt-[20px] ">
            <div className="col-1">
              <div className="text-[#669ca0]">
                <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm p-3 pl-5 pr-5 rounded-[1rem]">
                  Deposit
                </button>
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
  );
};

export default PoolCard;
