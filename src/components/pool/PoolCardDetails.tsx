import { BigNumber } from "ethers";

interface PoolCardDetailsProps {
  tvl?: BigNumber;
  displayApr: number | undefined;
  account?: string;
}

const PoolCardDetails: React.FC<
  React.PropsWithChildren<PoolCardDetailsProps>
> = ({ tvl, displayApr, account }) => {
  return (
    <div className="flex justify-center col-span-2 space-x-4">
      <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
        ${Number(tvl)}
      </span>
      <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
        {displayApr}%
      </span>
      <span className="px-4 py-2 text-white hidden md:flex col-span-2 justify-center">
        ${account}
      </span>
    </div>
  );
};

export default PoolCardDetails;
