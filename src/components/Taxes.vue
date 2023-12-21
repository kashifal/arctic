<script setup>
//import router
import { useRouter } from "vue-router";
import { useStepStore } from "../store/step";

import { ref } from "vue";
const router = useRouter();
const buyTax = ref("");
const sellTax = ref("");
const revWallet = ref("");
const liqTax = ref("");
const refTax = ref("");
const step = useStepStore();
const setPage = (e) => {
  step.setTax({
    buyTax: buyTax.value,
    sellTax: sellTax.value,
    revWallet: revWallet.value,
    liqTax: liqTax.value,
    refTax: refTax.value,
  });
  e.preventDefault();
  router.push({ name: "review-your-token" });
};
</script>

<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form>
          <h5 class="heading5">3. Taxes</h5>
          <div class="single_input_group">
            <label for="name">Buy Tax</label>
            <input
              v-model="buyTax"
              required
              type="text"
              id="name"
              placeholder="0"
            />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Sell Tax</label>
            <input
              v-model="sellTax"
              required
              type="text"
              id="token_symbol"
              placeholder="0"
            />
          </div>
          <div class="single_input_group">
            <label for="number">Revenue Wallet</label>
            <input
              v-model="revWallet"
              type="number"
              id="number"
              placeholder="0x"
            />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Liquidity Tax</label>
            <input
              v-model="liqTax"
              type="text"
              id="token_symbol"
              placeholder="0"
            />
          </div>
          <div class="single_input_group">
            <label for="number">Reflections Tax</label>
            <input
              v-model="refTax"
              type="number"
              id="number"
              placeholder="0x"
            />
          </div>
          <div class="token_btn_area">
            <button
              class="continue_btn hover"
              @click="setPage"
              style="text-align: center: color: #fff;"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
