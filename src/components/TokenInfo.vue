<script setup>
import { useStepStore } from "../store/step";

const step = useStepStore();
</script>

<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form action="" method="GET">
          <h5 class="heading5">1. Token info</h5>
          <div class="single_input_group">
            <label for="name">Token name</label>
            <input type="text" id="name" placeholder="Enter your token name" />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Token Symbol</label>
            <input
              type="text"
              id="token_symbol"
              placeholder="Enter your token Symbol"
            />
          </div>
          <div class="single_input_group">
            <label for="number">Total Supply</label>
            <input type="number" id="number" placeholder="0" />
          </div>
          <div class="token_btn_area">
            <button
              @click="step.changeStep(3)"
              class="continue_btn"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
