import React, { useContext, useState } from "react";
import poolConfig from "../../config/constants/pools";
import erc20 from "../../config/abi/erc20.json";
import { getAddress } from "../../utils/addressHelpers";
import multicall from "../../utils/multicall";
import { useSigner, useNetwork } from "wagmi";
import { ethers } from "ethers";
import { getProvider } from "@wagmi/core";
import { getBalance } from "@/utils/callFunctions";

const fetchPools = async () => {
  const data = await Promise.all(
    poolConfig.map(async (poolsConfigs) => {
      const lpAddress = getAddress(poolsConfigs.stakingToken);
      const result = await getBalance(
        getAddress(poolsConfigs.contractAddress),
        lpAddress,
        56
      );
      return {
        ...poolsConfigs,
        tokenAmount: Number(result.balance),
        tvlToken: 0,
        tvlInUSD: 0,
        apr: 0,
      };
    })
  );
  console.log(data);

  return data;
};

export default fetchPools;
