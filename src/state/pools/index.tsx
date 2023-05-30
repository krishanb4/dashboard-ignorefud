import { createSlice } from "@reduxjs/toolkit";
import PoolConfig from "../../config/constants/pools";
import { PoolsState, Pool } from "../types";
import fetchPools from "./fetchPools";
import { fetchFarmUserAllowances } from "./fetchPoolUser";
import { useSigner, useNetwork } from "wagmi";

const initialState: PoolsState = { data: [...PoolConfig] };
export const farmsSlice = createSlice({
  name: "Pools",
  initialState,
  reducers: {
    setPoolsPublicData: (state, action) => {
      const liveFarmsData: Pool[] = action.payload;
      state.data = state.data.map((pool) => {
        const liveFarmData = liveFarmsData.find(
          (f) => f.poolId === pool.poolId
        );
        return { ...pool, ...liveFarmData };
      });
    },
    setPoolsUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload;
      arrayOfUserDataObjects.forEach((userDataEl: any) => {
        const { index } = userDataEl;
        state.data[index] = { ...state.data[index], userData: userDataEl };
      });
    },
  },
});

export const fetchPoolsPublicDataAsync = () => async (dispatch: any) => {
  const pools = await fetchPools();
  dispatch(setPoolsPublicData(pools));
};

export const fetchPoolsUserDataAsync =
  (account: string) => async (dispatch: any) => {
    const userFarmAllowances = await fetchFarmUserAllowances(account);
    // const userFarmTokenBalances = await fetchFarmUserTokenBalancesBHC(account);
    // const userStakedBalances = await fetchFarmUserStakedBalancesBHC(account);
    // const userFarmEarnings = await fetchFarmUserEarningsBHC(account);
    // const userFarmDualEarnings = await fetchFarmUserEarningsBHCDual(account);
    // const userConstraintBalances = await fetchFarmUserConstraintBalancesBHC(
    //   account
    // );

    const arrayOfUserDataObjects = userFarmAllowances.map(
      (farmAllowance, index) => {
        return {
          index,
          allowance: userFarmAllowances[index],
          // tokenBalance: userFarmTokenBalances[index],
          // stakedBalance: userStakedBalances[index],
          // earnings: userFarmEarnings[index],
          // dualEarnings: userFarmDualEarnings[index],
          // constraintBalances: userConstraintBalances[index],
        };
      }
    );

    dispatch(setPoolsUserData({ arrayOfUserDataObjects }));
  };

export const { setPoolsPublicData, setPoolsUserData } = farmsSlice.actions;

export default farmsSlice.reducer;
