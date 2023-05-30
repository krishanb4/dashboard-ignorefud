import tokens from "./tokens";
import { PoolConfig, PoolCategory } from "./types";

const pools: PoolConfig[] = [
  {
    poolId: 1,
    name: "NO LOCK",
    token: tokens.fourtoken,
    locked: false,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    contractAddress: {
      56: "0xA4e5854C6a01C50b4951534233A38718127D0335",
    },

    poolCategory: PoolCategory.NO_LOCK,
    harvest: true,
    sortOrder: 1,
    isFinished: false,
  },
  {
    poolId: 2,
    name: "15D LOCK",
    token: tokens.fourtoken,
    locked: true,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    contractAddress: {
      56: "0xA4e5854C6a01C50b4951534233A38718127D0335",
    },
    poolCategory: PoolCategory["15D_LOCK"],
    harvest: true,
    sortOrder: 1,
    isFinished: false,
  },
  {
    poolId: 3,
    name: "1Y LOCK",
    token: tokens.fourtoken,
    locked: true,
    stakingToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    earningToken: {
      56: "0x61B83eDF87Ea662C695439A807c386455c9E797C",
    },
    contractAddress: {
      56: "0xA4e5854C6a01C50b4951534233A38718127D0335",
    },
    poolCategory: PoolCategory["1Y_LOCK"],
    harvest: true,
    sortOrder: 1,
    isFinished: false,
  },
];

export default pools;
