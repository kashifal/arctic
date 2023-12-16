<script setup>
import WalletLimits from "../components/WalletLimits.vue";
import Taxes from "../components/Taxes.vue";
import Steps from "../components/Steps.vue";
import BorrowLiqu from "../components/BorrowLiqu.vue";
import TokenInfo from "../components/TokenInfo.vue";
import { ref } from "vue";
import AppLayout from "../layouts/AppLayout.vue";
import { useStepStore } from "../store/step";
const stepStore = useStepStore();
</script>

<template>
  <AppLayout>
    <div class="arctic_toket_background"></div>
    <section class="Communities-area" data-aos="fade-up">
      <Steps :step="stepStore.step" />
      <div class="container">
        <div class="cursor-pointer" v-if="stepStore.step === 1">
          <BorrowLiqu />
        </div>
        <div v-else-if="stepStore.step === 2">
          <TokenInfo />
        </div>
        <div v-else-if="stepStore.step === 3">
          <WalletLimits />
        </div>
        <div v-else-if="stepStore.step === 4">
          <Taxes />
        </div>
      </div>
    </section>
  </AppLayout>
</template>
