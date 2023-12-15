<script setup>
import { useStepStore } from "../store/step";
const step = useStepStore();
import { ref } from "vue";
const borrowEth = ref(0);
const contributeEth = ref(0);
const totalEth = ref(1.0);
const error = ref(null);
</script>
<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form action="" method="GET">
          <h5 class="heading5">1. Borrow Liquidity</h5>
          <div class="single_input_group">
            <div class="token_borrow_item">
              <p>Total Liquidity to add</p>
              <span>{{ totalEth }} eth</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success"
                :style="{ width: borrowEth * 100 + '%' }"
              ></div>
            </div>
            <div class="token_borrow_text">
              <div class="borrow_text_left">
                <p>Borrow</p>
                <span>{{ borrowEth }} eth</span>
              </div>
              <div class="borrow_text_left">
                <p>Contribute</p>
                <span>{{ contributeEth }} eth</span>
              </div>
            </div>
          </div>
          <div class="single_input_group">
            <label for="name">Amount of Eth to borrow</label>
            <input v-model="borrowEth" type="text" id="name" placeholder="0" />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Amount of Eth to contribute</label>
            <input
              v-model="contributeEth"
              type="text"
              id="token_symbol"
              placeholder="0"
            />
          </div>
          <div class="loan_fee">
            <div class="borrow_text_left">
              <p>Loan Fee</p>
            </div>
            <div class="borrow_text_left">
              <p>0.02 eth</p>
            </div>
          </div>
          <div class="total_payment token_borrow_text">
            <div class="borrow_text_left">
              <p>Total Payment</p>
            </div>
            <div class="borrow_text_left">
              <p>0.28 eth</p>
            </div>
          </div>
          <div class="token_btn_area">
            <button
              @click="step.changeStep(2)"
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
