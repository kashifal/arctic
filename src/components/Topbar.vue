<script setup>
import token1 from "../assets/images/token/1.svg";
import token2 from "../assets/images/token/2.svg";
import token3 from "../assets/images/token/3.svg";
import token4 from "../assets/images/token/4.svg";
import token5 from "../assets/images/token/5.svg";
import { ref } from "vue";
const dropdown = ref(false);
const changeDropdown = () => {
  dropdown.value = !dropdown.value;
  if (dropdown.value) {
    document.querySelector(".token_dropdown").classList.add("show");
  } else {
    document.querySelector(".token_dropdown").classList.remove("show");
  }
};
</script>
<template>
  <section class="header-button token_header_button">
    <a class="custom_btn_1" href="#">Connect</a>

    <div class="token_dropdown">
      <div class="dropdown">
        <a
          @click="changeDropdown"
          class="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img :src="token1" alt="" />BSC</a
        >

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">
              <img :src="token2" alt="" />Ethereum</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <img :src="token3" alt="" />Arb</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <img :src="token4" alt="" />Polygon</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <img :src="token5" alt="" />Avalanche</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
