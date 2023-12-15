<template>
  <section class="review_token">
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
                  <li>Pepetoshi100xinu</li>
                  <li>PEPETOSHI100XINU</li>
                  <li>100,000,000</li>
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
                  <li>2,000,000 (2%)</li>
                  <li>1,000,000 (1%)</li>
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
                  <li>2%</li>
                  <li>1 %</li>
                  <li>1 %</li>
                  <li>0%</li>
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
                  <span>0.8 eth</span>
                </div>
                <div class="borrow_text_left">
                  <p>Contribute</p>
                  <span>0.2 eth</span>
                </div>
              </div>
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
              <button class="continue_btn" type="submit">Continue</button>
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
</script>
