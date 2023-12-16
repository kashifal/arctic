<script setup>
import { useStepStore } from "../store/step";
import { computed } from "vue";
const step = useStepStore();
import { ref, watch } from "vue";

const borrowEth = ref(0);
const contributeEth = ref(0);
const totalEth = ref(1.0);
const error = ref(null);

const handleClickContinue = () => {
  step.changeStep(2);
};

const progress = computed(() => {
  const contribute = parseFloat(contributeEth.value);
  const borrow = parseFloat(borrowEth.value);
  return (borrow / (contribute + borrow)) * 100;
});
</script>
<template>
  <div class="token_page_content">
    <div class="Communities_right">
      <div class="token_info_box">
        <form @submit="handleClickContinue" action="" method="GET">
          <h5 class="heading5">1. Borrow Liquidity</h5>
          <div class="single_input_group">
            <div class="token_borrow_item">
              <p>Total Liquidity to add</p>
              <span>{{ Number(contributeEth) + Number(borrowEth) }} eth</span>
            </div>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
            <div class="token_borrow_text">
              <div class="borrow_text_left">
                <p>Borrow {{ borrowProgress }}</p>
                <span>{{ borrowEth === "" ? 0 : borrowEth }} eth</span>
              </div>
              <div class="borrow_text_left">
                <p>Contribute</p>
                <span>{{ contributeEth === "" ? 0 : contributeEth }} eth</span>
              </div>
            </div>
          </div>
          <div class="single_input_group">
            <label for="name">Amount to borrow</label>
            <input
              v-model="borrowEth"
              max="{{ totalEth }}"
              @input="handleChangeBorrow"
              type="text"
              id="name"
              required
              placeholder="0"
            />
          </div>
          <div class="single_input_group">
            <label for="token_symbol">Amount to contribute</label>
            <input
              v-model="contributeEth"
              type="text"
              id="token_symbol"
              required
              placeholder="0"
              max="{{ totalEth }}"
              @input="handleChangeContribute"
            />
          </div>
          <div class="loan_fee">
            <div class="borrow_text_left">
              <p>Loan Fee</p>
            </div>
            <div class="borrow_text_left">
              <p>{{ (10 / 100) * borrowEth }}</p>
            </div>
          </div>
          <div class="total_payment token_borrow_text">
            <div class="borrow_text_left">
              <p>Total Payment</p>
            </div>
            <div class="borrow_text_left">
              <p>
                {{ Number((10 / 100) * borrowEth) + Number(contributeEth) }}
              </p>
            </div>
          </div>
          <div class="token_btn_area">
            <button
              :class="[
                borrowEth && contributeEth === '' ? ' disabled' : '',
                'continue_btn',
              ]"
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

<style scoped>
.disabled {
  pointer-events: none;
  cursor: default;
}
</style>
