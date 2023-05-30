import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import PoolCard from "./pool/PoolCard";
import pools from "@/config/constants/pools";
import { useSigner } from "wagmi";
import { MyContext } from "@/components/context";
import { usePools } from "@/state/hooks";

const StakingCards = () => {
  const poolsFrom = usePools();
  console.log(poolsFrom);

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
            {poolsFrom.map((pool) => (
              <PoolCard key={pool.poolId} pool={pool} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingCards;
