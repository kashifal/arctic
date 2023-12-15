import { defineStore } from "pinia";

export const useStepStore = defineStore("step", {
  state: () => ({
    step: 1,
  }),
  actions: {
    changeStep(step) {
      this.step = step;
    },
  },
});
