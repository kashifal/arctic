<script setup>
import { ref } from "vue";
const tokenName = ref("");
const tokenSymbol = ref("");
const totalSupply = ref(null);

import { useStepStore } from "../store/step";

const step = useStepStore();

const setTokeon = () => {
  step.changeStep(3);
  step.setTokens({
    tokenName: tokenName.value,
    tokenSymbol: tokenSymbol.value,
    totalSupply: totalSupply.value,
  });
};
</script>

<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form @submit="setTokeon" action="" method="GET">
          <h5 class="heading5">1. Token info</h5>
          <div class="single_input_group">
            <label for="name">Token name</label>
            <input
              required
              type="text"
              id="name"
              v-model="tokenName"
              placeholder="Enter your token name"
            />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Token Symbol</label>
            <input
              required
              type="text"
              id="token_symbol"
              v-model="tokenSymbol"
              placeholder="Enter your token Symbol"
            />
          </div>
          <div class="single_input_group">
            <label for="number">Total Supply</label>
            <input
              v-model="totalSupply"
              required
              type="number"
              id="number"
              placeholder="0"
            />
          </div>
          <div class="token_btn_area">
            <button class="continue_btn" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
