import Head from "next/head";
import Header from "@/components/Header";
import Swap from "@/components/Swap";
import Theme from "@/components/Theme";
import { useAccount, useConnect, useNetwork, useSwitchNetwork } from "wagmi";
import { useEffect } from "react";
import { InjectedConnector } from "wagmi/connectors/injected";
import SelectButtons from "@/components/SelectButtons";

export default function Home() {
  return (
    <>
      <Head>
        <title>IgnoreFud Dashboard</title>
        <meta name="description" content="IgnoreFud Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SelectButtons />
      {/* <Swap /> */}
      <Theme />
    </>
  );
}
