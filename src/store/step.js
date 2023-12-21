import { defineStore } from "pinia";

export const useStepStore = defineStore("step", {
  state: () => ({
    step: 1,
    borrowData: {},
    tokenData: {},
    walletData: {},
    taxData: {},
  }),
  actions: {
    changeStep(step) {
      this.step = step;
    },
    setBorrows(data) {
      console.log(data);
      this.borrowData = data;
    },
    setTokens(data) {
      console.log(data);
      this.tokenData = data;
    },
    setWallet(data) {
      console.log(data);
      this.walletData = data;
    },
    setTax(data) {
      console.log(data);
      this.taxData = data;
    },
  },
});
