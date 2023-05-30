import { getAddress } from "../../utils/addressHelpers";
import { checkApprovedBalance } from "../../utils/callFunctions";
import poolsConfig from "../../config/constants/pools";
import tokenABI from "../../config/abi/erc20.json";

export const fetchFarmUserAllowances = async (account: string) => {
  const data = poolsConfig.map((pool) => {
    const lpContractAddress = getAddress(pool.stakingToken);
    const ContractAddress = getAddress(pool.contractAddress);
    const approveBalance = checkApprovedBalance(
      lpContractAddress,
      ContractAddress,
      account,
      tokenABI,
      56
    );
    return approveBalance;
  });
  return data;
};
