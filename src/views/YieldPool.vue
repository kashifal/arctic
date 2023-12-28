<script setup>
import AppLayout from "../layouts/AppLayout.vue";
</script>
<template>
  <AppLayout>
    <div class="arctic_toket_background"></div>

    <div class="token_yiend_Pool w-100">
      <div class="container">
        <div class="yield_pool_contain">
          <div class="yield_pool_item">
            <h5 class="heading5">Yield Pool</h5>
            <div class="button_yield">
              <a href="" class="custom_btn_2">Supply</a>
              <a href="" class="custom_btn_2">Withdraw</a>
            </div>
          </div>
          <div class="yield_pool_item_2">
            <p>Total Value Locked</p>
            <span>$ 5,200, 100</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Communities area -->
    <section class="Communities-area">
      <div class="container">
        <!-- <div class="token_page_content"> -->
        <div class="Communities_right">
          <div class="token_info_contain_item">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Asset</th>
                    <th scope="col">TVL</th>
                    <th scope="col">Borrowed</th>
                    <th scope="col">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Ethereum</th>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th>BNB</th>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th>SOL</th>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th>Optimism</th>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <th>Ethereum</th>
                    <td>$0.00</td>
                    <td>$0.00</td>
                    <td>$0.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </section>
  </AppLayout>
  <!-- end Communities area -->
</template>
