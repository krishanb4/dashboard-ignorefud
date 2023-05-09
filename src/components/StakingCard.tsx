import Image from "next/image";
import React, { useState } from "react";

const StakingCards = () => {
  const [expandCard, setExpandCard] = useState(0);
  const stakingCards = [
    {
      id: 1,
      name: "4token (No Lock)",
      tvl: 300,
      apr: 30,
      earned: 150,
    },
    {
      id: 2,
      name: "4token (15D Lock)",
      tvl: 300,
      apr: 30,
      earned: 150,
    },
    {
      id: 3,
      name: "4token (1Y Lock)",
      tvl: 300,
      apr: 30,
      earned: 150,
    },
  ];
  return (
    <>
      <div className="mx-auto flex justify-center text-center max-w-[840px]">
        <div className="w-full text-black dark:text-white m-3 ">
          <div className="grid-cols-5 hidden md:grid  items-center  mt-4">
            <div className="justify-normal">
              <span className="font-medium text-black justify-start dark:text-white flex-none ml-[20px]">
                Token
              </span>
            </div>

            <div className="flex flex-1 col-span-2 justify-center space-x-4 ml-5">
              <span className="px-4 py-2 text-black dark:text-white flex justify-center">
                TVL
              </span>
              <span className="px-4 py-2 text-black dark:text-white flex justify-center">
                APR
              </span>
              <span className="px-4 py-2 text-black dark:text-white flex justify-center">
                Earned
              </span>
            </div>
          </div>
          <div className="items-center justify-center">
            {stakingCards.map((card, index) => (
              <div
                key={index}
                className={`p-2 mt-5 border bg-[#115657]  border-gray-200 rounded-[1.5rem] shadow dark:border-gray-700 `}
              >
                <div className={`grid grid-cols-5`}>
                  <div className="flex items-center col-span-1">
                    <Image
                      src="/images/4logo.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <span className="font-medium text-white flex-none ml-[10px]">
                      {card.name}
                    </span>
                  </div>

                  <div className="flex justify-center col-span-2 space-x-4">
                    <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
                      ${card.tvl}
                    </span>
                    <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
                      {card.apr}%
                    </span>
                    <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
                      ${card.earned}
                    </span>
                  </div>
                  <div className="flex justify-center col-1">
                    <button className="bg-gradient-to-br from-green-400 to-yellow-300 text-black text-sm pt-0 pl-5 pr-5 rounded-[1rem]">
                      Claim
                    </button>
                  </div>
                  <div className="flex items-center col-span-1 justify-end p-4">
                    <button
                      onClick={
                        expandCard
                          ? () =>
                              setExpandCard(expandCard == card.id ? 0 : card.id)
                          : () => setExpandCard(card.id)
                      }
                    >
                      {expandCard == card.id ? (
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
                {expandCard == card.id ? (
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
                        ${card.tvl}
                      </span>
                      <span className="px-4 py-2 text-white flex md:hidden  justify-center">
                        {card.apr}%
                      </span>
                      <span className="px-4 py-2 text-white flex md:hidden justify-center">
                        ${card.earned}
                      </span>
                    </div>
                  </div>
                )}
                {expandCard == card.id ? (
                  <div className="border-b border-[#1e6365] my-4"></div>
                ) : (
                  ""
                )}
                {expandCard == card.id ? (
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
                      <div className="text-white text-[3rem]">30%</div>
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
                {expandCard == card.id ? (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingCards;
