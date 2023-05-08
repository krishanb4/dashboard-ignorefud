import Image from "next/image";
import React from "react";

const StakingCards = () => {
  return (
    <>
      <div className="mx-auto flex justify-center text-center max-w-[840px]">
        <div className="w-full text-black dark:text-white m-3 ">
          <div className="flex items-center  mt-4 ">
            <span className="font-medium text-black dark:text-white flex-none ml-[20px]">
              Token
            </span>
            <div className="flex flex-1 ml-[60px] justify-center space-x-4">
              <span className="px-4 py-2 text-black dark:text-white   flex justify-center">
                TVL
              </span>
              <span className="px-4 py-2 text-black dark:text-white    flex justify-center">
                APR
              </span>
              <span className="px-4 py-2 text-black dark:text-white   flex justify-center">
                Earned
              </span>
            </div>
          </div>
          <div className="items-center justify-center">
            <div className="block p-2 mt-5  border bg-[#115657] border-gray-200 rounded-[1.5rem] shadow hover:bg-gray-700  dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src="/images/4logo.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="font-medium text-white flex-none">
                    4token (No Lock)
                  </span>
                </div>
                <div className="flex flex-1 justify-center space-x-4">
                  <span className="px-4 py-2 text-white  mt-5flex justify-center">
                    $536k
                  </span>
                  <span className="px-4 py-2 text-white    flex justify-center">
                    38%
                  </span>
                  <span className="px-4 py-2 text-white   flex justify-center">
                    $150
                  </span>
                </div>
                <div className="flex items-center  mr-4">
                  <Image
                    src="/images/down-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="block p-2 mt-5  border bg-[#115657] border-gray-200 rounded-[1.5rem] shadow hover:bg-gray-700  dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src="/images/4logo.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="font-medium text-white flex-none">
                    4token (15D Lock)
                  </span>
                </div>
                <div className="flex flex-1 justify-center space-x-4 -ml-[10px]">
                  <span className="px-4 py-2 text-white   flex justify-center">
                    $536k
                  </span>
                  <span className="px-4 py-2 text-white    flex justify-center">
                    38%
                  </span>
                  <span className="px-4 py-2 text-white   flex justify-center">
                    $150
                  </span>
                </div>
                <div className="flex items-center  mr-4">
                  <Image
                    src="/images/down-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <div className="block mt-5 p-2  border bg-[#115657] border-gray-200 rounded-[1.5rem] shadow hover:bg-gray-700  dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src="/images/4logo.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                  <span className="font-medium text-white flex-none">
                    4token (1Y Lock)
                  </span>
                </div>
                <div className="flex flex-1 justify-center space-x-4">
                  <span className="px-4 py-2 text-white   flex justify-center">
                    $536k
                  </span>
                  <span className="px-4 py-2 text-white    flex justify-center">
                    38%
                  </span>
                  <span className="px-4 py-2 text-white   flex justify-center">
                    $150
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <Image
                    src="/images/down-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingCards;
