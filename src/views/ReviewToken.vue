<template>
  <section class="review_token">
    <div
      v-if="showAlert"
      class="alert text-center position-fixed top-0 w-100 alert-success"
      role="alert"
    >
      Token Launched Successfully
    </div>
    <div class="container">
      <div class="review_token_contain">
        <div class="review_token_header">
          <img :src="revew" alt="" />
          <h2>Review your Token</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- end review token -->

  <!-- start tokent info review -->
  <div class="tokent_info_review">
    KT
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- tokent review left -->
          <div class="tokent_review_left">
            <div class="tokent_review_item">
              <div class="review_text_box1">
                <h4>Token Info</h4>
                <ul>
                  <li>Token Name</li>
                  <li>Token Symbol</li>
                  <li>Total Supply</li>
                </ul>
              </div>
              <div class="review_text_box1">
                <h4>&nbsp;</h4>
                <ul>
                  <li>{{ step.tokenData.tokenName }}</li>
                  <li>{{ step.tokenData.tokenSymbol }}</li>
                  <li>{{ step.tokenData.totalSupply }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- tokent review left -->
          <div class="tokent_review_left mt-5 mb-5">
            <div class="tokent_review_item">
              <div class="review_text_box1">
                <h4>Max wallets</h4>
                <ul>
                  <li>Max wallet size</li>
                  <li>Max Transaction</li>
                </ul>
              </div>
              <div class="review_text_box1">
                <h4>&nbsp;</h4>
                <ul>
                  <li>{{ step.walletData.maxTransaction }}</li>
                  <li>{{ step.walletData.maxWalletSize }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <!-- tokent review left -->
          <div class="tokent_review_left">
            <div class="tokent_review_item">
              <div class="review_text_box1">
                <h4>Taxes</h4>
                <ul>
                  <li>Buy Tax</li>
                  <li>Sell Tax</li>
                  <li>Reflections</li>
                  <li>Liquidity Tax</li>
                </ul>
              </div>
              <div class="review_text_box1">
                <h4>&nbsp;</h4>
                <ul>
                  <li>{{ step.taxData.buyTax }}</li>
                  <li>{{ step.taxData.sellTax }}</li>
                  <li>{{ step.taxData.refTax }}</li>
                  <li>{{ step.taxData.liqTax }}</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- total payment reviw -->
          <div class="total_payment_token_reviw">
            <div class="single_input_group">
              <div class="token_borrow_text">
                <div class="borrow_text_left">
                  <p>Borrow</p>
                  <span>{{ step.borrowData.borrowEth }} eth</span>
                </div>
                <div class="borrow_text_left">
                  <p>Contribute</p>
                  <span>{{ step.borrowData.contributeEth }} eth</span>
                </div>
              </div>
            </div>
            <div class="loan_fee">
              <div class="borrow_text_left">
                <p>Loan Fee</p>
              </div>
              <div class="borrow_text_left">
                <p>
                  {{ ((10 / 100) * step.borrowData.borrowEth).toFixed(2) }} eth
                </p>
              </div>
            </div>
            <div class="total_payment token_borrow_text">
              <div class="borrow_text_left">
                <p>Total Payment</p>
              </div>
              <div class="borrow_text_left">
                <p>
                  {{
                    (
                      Number((10 / 100) * step.borrowData.borrowEth) +
                      Number(step.borrowData.contributeEth)
                    ).toFixed(2)
                  }}
                </p>
              </div>
            </div>
            <div class="token_btn_area">
              <div @click="setPage" class="continue_btn" type="submit">
                <span v-if="animate === false"> Launch a token</span>
                <div v-else class="loader m-lg-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end tokent info review -->
</template>

<script setup>
import revew from "../assets/images/revew.svg";
import { useStepStore } from "../store/step";
import { useRouter } from "vue-router";
import { ref } from "vue";

const animate = ref(false);
const showAlert = ref(false);

const router = useRouter();

const step = useStepStore();

function setPage(e) {
  e.preventDefault();
  animate.value = true;

  setTimeout(() => {
    animate.value = false;

    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
      router.push({ name: "home" });
      step.changeStep(1);
    }, 2000);
  }, 2000);
  // router.push({ name: "home" });
  // step.changeStep(1);
}
</script>
