<script setup>
//import router
import { useRouter } from "vue-router";
const router = useRouter();
const setPage = (e) => {
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
            <input required type="text" id="name" placeholder="0" />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Sell Tax</label>
            <input required type="text" id="token_symbol" placeholder="0" />
          </div>
          <div class="single_input_group">
            <label for="number">Revenue Wallet</label>
            <input type="number" id="number" placeholder="0x" />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Liquidity Tax</label>
            <input type="text" id="token_symbol" placeholder="0" />
          </div>
          <div class="single_input_group">
            <label for="number">Reflections Tax</label>
            <input type="number" id="number" placeholder="0x" />
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
