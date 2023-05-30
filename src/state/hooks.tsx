import { useAppDispatch } from "./index";
import { fetchPoolsPublicDataAsync } from "./actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Pool, State } from "./types";

export const useFetchPublicData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPoolsPublicDataAsync());
  }, [dispatch]);
};

export const usePools = (): Pool[] => {
  const farms = useSelector((state: State) => state.pools.data);
  return farms;
};
