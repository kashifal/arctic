<script setup>
import { useStepStore } from "../store/step";

const step = useStepStore();
</script>

<template>
  <div class="token-step-area">
    <div class="token-step-single">
      <h4 :class="[step.step >= 1 ? '' : 'complete', 'number']">1</h4>
      <p class="info">Borrow Liquidity</p>
    </div>
    <div class="token-step-single">
      <h4 :class="[step.step >= 2 ? '' : 'complete', 'number']">2</h4>
      <p class="info">Token Info</p>
    </div>
    <div class="token-step-single">
      <h4 :class="[step.step >= 3 ? '' : 'complete', 'number']">3</h4>
      <p class="info">Wallet setting</p>
    </div>
    <div class="token-step-single">
      <h4 :class="[step.step >= 4 ? '' : 'complete', 'number']">4</h4>
      <p class="info">Tax</p>
    </div>
  </div>
</template>
