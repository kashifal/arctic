<script setup>
import { useStepStore } from "../store/step";
const step = useStepStore();

const setWallet = () => {
  step.changeStep(4);
};
</script>

<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form @submit="setWallet" action="" method="GET">
          <h5 class="heading5">2. Wallet Limits</h5>
          <div class="single_input_group">
            <label for="name">Max Transaction</label>
            <input required type="text" id="name" placeholder="0" />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Max Wallet size</label>
            <input required type="text" id="token_symbol" placeholder="0" />
          </div>
          <div class="token_btn_area">
            <button class="continue_btn" type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
