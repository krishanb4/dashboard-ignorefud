import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import axios from "axios";
import numeral from "numeral";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChartCard = ({ children }: { children: React.ReactNode }) => (
  <div className="border-2 border-gray-300 rounded-lg m-10 bg-[#f0ffff]">
    {children}
  </div>
);

const ExampleCharts = () => {
  const [tokenData, setTokenData] = useState(0);
  const [tokenBurnData, setTokenBurnData] = useState(0);
  const [tokenBurnDataAuto, setTokenBurnDataAuto] = useState(0);
  const [dataCategories, setDataCategories] = useState<string[]>([]);
  const [autoburnData, setautoburnData] = useState([]);
  const [manualBurnDatanew, setmanualBurnData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingPrices, setLoadingPrices] = useState(true);
  const [archerswapPrice, setArcherswapPrice] = useState(0);
  const [iceCreamswapPrice, setIceCreamswapPrice] = useState(0);
  useEffect(() => {
    axios
      .post(
        "https://ignorefud-price-tracker-devcresix-krishanb4-s-team.vercel.app/prices"
      )
      .then((response) => {
        if (response.status === 200) {
          setLoadingPrices(false);
        }
        setArcherswapPrice(response.data["prices"]["archerswapPrice"]);
        setIceCreamswapPrice(response.data["prices"]["icecreameswapPrice"]);
      })
      .catch((error) => {
        console.error(error); // handle error
      });
  }, []);

  useEffect(() => {
    function getTokenData() {
      axios
        .post(
          "https://ignorefud-price-tracker-devcresix-krishanb4-s-team.vercel.app/burn"
        )
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
          }
          setTokenData(response.data["burnData"]["currentSupply"]);
          setTokenBurnData(response.data["burnData"]["manualBurn"]);
          setTokenBurnDataAuto(response.data["burnData"]["autoBurn"]);
          const autoBurns = response.data["burnData"]["autoBurns"];

          const manualBurns = response.data["burnData"]["manualBurns"];
          const categories = autoBurns.map((item: { date: string }) =>
            new Date(item.date).toLocaleDateString()
          );
          setDataCategories(categories);
          const autoBurndata = autoBurns.map(
            (item: { cumulative_sum: number }) => item.cumulative_sum.toFixed(0)
          );
          setautoburnData(autoBurndata);
          const autoBurnLength = autoBurndata.length;
          const manualBurnData = manualBurns.map(
            (item: { cumulative_sum: number }) => item.cumulative_sum.toFixed(0)
          );
          const manualBurnLength = manualBurnData.length;
          const dataShort = autoBurnLength - manualBurnLength;
          const lastManualBurnValue = manualBurnData.pop();
          for (let i = 0; i < dataShort; i++) {
            manualBurnData.push(lastManualBurnValue);
          }
          setmanualBurnData(manualBurnData);
        })
        .catch((error) => {
          console.error(error); // handle error
        });
    }
    getTokenData();
  }, []);
  console.log(Object.values(tokenData)[0]);

  const options = {
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#34545f",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#34545f",
        },
      },
    },
  };
  const options4 = {
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      categories: dataCategories,
      labels: {
        style: {
          colors: "#34545f",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#34545f",
        },
      },
    },
  };
  const series1 = [
    {
      name: "token-price",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];
  const series2 = [
    {
      name: "liquidity",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];
  const series3 = [
    {
      name: "usdt-rewards",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];
  const series4 = [
    {
      name: "manual-burn",
      data: manualBurnDatanew,
    },
    {
      name: "auto-burn",
      data: autoburnData,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center mt-10 text-center">
        <div className="p-4 w-[20rem] max-w-sm ">
          <div className="rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39]  p-8 flex-col text-center">
            <div className="items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                4TOKEN
              </h2>
            </div>
            <div className="flex flex-col text-black dark:text-white justify-between flex-grow text-center">
              {isLoading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={2} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <ul>
                  <li>
                    Current Supply :{" "}
                    {numeral(tokenData).format("0.0a").toUpperCase()}
                  </li>
                  <li>
                    Price : $
                    {(
                      (Number(archerswapPrice) + Number(iceCreamswapPrice)) /
                      2
                    ).toFixed(6)}
                  </li>
                </ul>
              )}

              {/* <p className="leading-relaxed text-base text-black dark:text-white">
                $0.0007336
              </p> */}
            </div>
          </div>
        </div>

        <div className="p-4 w-[20rem] max-w-sm">
          <div className="flex rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                Total Liquidity
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow text-center">
              {isLoading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={1} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <p className="leading-relaxed text-base text-black dark:text-white">
                  $539.05K
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 w-[20rem] max-w-sm">
          <div className="flex rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                Token Burned
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow text-center">
              {isLoading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={1} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <p className="leading-relaxed text-base text-black dark:text-white">
                  {numeral(tokenBurnData + tokenBurnDataAuto)
                    .format("0.0a")
                    .toUpperCase()}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 w-[20rem] max-w-sm">
          <div className="flex rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                Total USDT Rewards
              </h2>
            </div>
            <div className="flex flex-col justify-between flex-grow text-center ">
              {isLoading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={1} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <p className="leading-relaxed text-base text-black dark:text-white">
                  $1M
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 text-center">
        <div className="p-4 w-[20rem] max-w-sm">
          <div className=" rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                ArcherSwap
              </h2>
            </div>
            <div className="flex flex-col justify-between text-black dark:text-white flex-grow text-center">
              {isLoadingPrices ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={2} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <ul>
                  <li>Price : ${archerswapPrice}</li>
                  <li>Liquidity : $539.05K</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 w-[20rem] max-w-sm">
          <div className="flex rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                IceCreamSwap
              </h2>
            </div>
            <div className="flex flex-col justify-between text-black dark:text-white flex-grow text-center">
              {isLoadingPrices ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={2} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <ul>
                  <li>Price : ${iceCreamswapPrice}</li>
                  <li>Liquidity : $539.05K</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 w-[20rem] max-w-sm">
          <div className="flex rounded-lg h-full bg-[#e5e5e5] shadow shadow-[#02ad02]/50 dark:bg-[#272e39] p-8 flex-col text-center">
            <div className=" items-center mb-3">
              <h2 className="text-black dark:text-white text-lg font-medium">
                Burned Details
              </h2>
            </div>
            <div className="flex flex-col justify-between text-black dark:text-white flex-grow text-center">
              {isLoading ? (
                <SkeletonTheme baseColor="#202020" highlightColor="#a9b7c1">
                  <p>
                    <Skeleton count={2} duration={2} />
                  </p>
                </SkeletonTheme>
              ) : (
                <ul>
                  <li>
                    Manual :{" "}
                    {numeral(tokenBurnData).format("0.0a").toUpperCase()}
                  </li>
                  <li>
                    Auto :{" "}
                    {numeral(tokenBurnDataAuto).format("0.0a").toUpperCase()}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:grid-cols-2 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-2 dark:border-black  border-gray-300 rounded-lg m-10 dark:bg-slate-900 bg-[#f0ffff] chart-container">
            <p className="text-center text-black dark:text-white">
              4TOKEN Price
            </p>
            {isLoading ? (
              <SkeletonTheme baseColor="#e3dede" highlightColor="#a9b7c1">
                <p>
                  <Skeleton count={1} height={350} duration={2} />
                </p>
              </SkeletonTheme>
            ) : (
              <Chart options={options} series={series1} type="area" />
            )}
          </div>
          <div className="border-2 dark:border-black border-gray-300 rounded-lg m-10 dark:bg-slate-900 bg-[#f0ffff] chart-container">
            <p className="text-center text-black dark:text-white">Liquidity</p>
            {isLoading ? (
              <SkeletonTheme baseColor="#e3dede" highlightColor="#a9b7c1">
                <p>
                  <Skeleton count={1} height={350} duration={2} />
                </p>
              </SkeletonTheme>
            ) : (
              <Chart options={options} series={series2} type="area" />
            )}
          </div>
          <div className="border-2 dark:border-black border-gray-300 rounded-lg m-10 dark:bg-slate-900 bg-[#f0ffff] chart-container">
            <p className="text-center text-black dark:text-white">
              USDT Rewards
            </p>
            {isLoading ? (
              <SkeletonTheme baseColor="#e3dede" highlightColor="#a9b7c1">
                <p>
                  <Skeleton count={1} height={350} duration={2} />
                </p>
              </SkeletonTheme>
            ) : (
              <Chart options={options} series={series3} type="area" />
            )}
          </div>
          <div className="border-2 dark:border-black border-gray-300 rounded-lg m-10 dark:bg-slate-900 bg-[#f0ffff] chart-container">
            <p className="text-center text-black dark:text-white">Token Burn</p>
            {isLoading ? (
              <SkeletonTheme baseColor="#e3dede" highlightColor="#a9b7c1">
                <p>
                  <Skeleton count={1} height={350} duration={2} />
                </p>
              </SkeletonTheme>
            ) : (
              <Chart options={options4} series={series4} type="area" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleCharts;
