import { useAppDispatch } from "./index";
import { fetchPoolsPublicDataAsync } from "./actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Pool, State } from "./types";
import { BigNumber } from "ethers";

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPoolsPublicDataAsync()).catch((error) => {
      // Handle the error here
      console.error("An error occurred:", error);
    });
  }, [dispatch]);
};

export const usePools = (): Pool[] => {
  const farms = useSelector((state: State) => state.pools.data);
  return farms;
};

export const useFarmFromPid = (pid: number): Pool => {
  const farm = useSelector((state: State) =>
    state.pools.data.find((f) => f.poolId === pid)
  );
  return farm;
};

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid);

  return {
    allowance: farm.userData
      ? new BigNumber(farm.userData.allowance)
      : new BigNumber(0),
    tokenBalance: farm.userData
      ? new BigNumber(farm.userData.tokenBalance)
      : new BigNumber(0),
    stakedBalance: farm.userData
      ? new BigNumber(farm.userData.stakedBalance)
      : new BigNumber(0),
    earnings: farm.userData
      ? new BigNumber(farm.userData.earnings)
      : new BigNumber(0),
    dualEarnings: farm.userData
      ? farm.userData.dualEarnings
      : [new BigNumber(0), new BigNumber(0), new BigNumber(0)],
    constraintBalances: farm.userData
      ? farm.userData.constraintBalances
      : [new BigNumber(0), new BigNumber(0)],
  };
};
