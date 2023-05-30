import { ethers, BigNumber } from "ethers";
import { getProvider } from "@wagmi/core";
import { usePrepareContractWrite, useContractWrite, useBalance } from "wagmi";
import bscUSDT from "@/config/abi/bscUSDT.json";
export interface ApprovalResult {
  txHash: string;
  status: "mined" | "failed";
}

export interface BalanceResult {
  balance: any;
}

export async function getBalance(
  ContractAddress: string,
  token: string,
  chainId: number
): Promise<BalanceResult> {
  try {
    const contract_address = ContractAddress as `0x${string}`;
    const token_address = token as `0x${string}`;
    const provider = getProvider({
      chainId: chainId,
    });
    const tokenContract = new ethers.Contract(
      contract_address,
      bscUSDT,
      provider
    );

    const balance = await tokenContract.balanceOf(token_address);

    return {
      balance: balance,
    };
  } catch (error) {
    console.error(`Failed to approve tokens: ${error}`);
    throw error;
  }
}

export async function approve(
  tokenContractAddress: string,
  spender: string,
  TokenABI: any,
  amount: ethers.BigNumber,
  signer: any
): Promise<ApprovalResult> {
  try {
    // Create an instance of the ERC20 token contract
    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      TokenABI,
      signer
    );

    // Estimate the gas limit for the approval transaction
    const gasLimit = await tokenContract.estimateGas.approve(spender, amount);

    // Build the approval transaction
    const transaction = await tokenContract.populateTransaction.approve(
      spender,
      amount,
      { gasLimit }
    );

    const signedTransaction = await signer.sendTransaction(transaction);
    const transactionReceipt = await signedTransaction.wait();

    return {
      txHash: transactionReceipt.transactionHash,
      status: transactionReceipt.status === 1 ? "mined" : "failed",
    };
  } catch (error) {
    console.error(`Failed to approve tokens: ${error}`);
    throw error;
  }
}

export const checkApprovedBalance = async (
  tokenContractAddress: string,
  spenderAddress: string,
  userAddress: string,
  tokenABI: any,
  chainId: number
) => {
  try {
    // Create ethers provider
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    const provider = getProvider({
      chainId: chainId,
    });
    // Create token contract instance
    const tokenContract = new ethers.Contract(
      tokenContractAddress,
      tokenABI,
      provider
    );

    // Check approved balance
    const approvedBalance = await tokenContract.allowance(
      userAddress,
      spenderAddress
    );

    // Return approved balance
    return approvedBalance;
  } catch (error) {
    console.error("Failed to check approved balance:", error);
    throw error;
  }
};
