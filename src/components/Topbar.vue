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
};
const selected = ref(1);

const setSelected = (index) => {
  selected.value = index;
  dropdown.value = false;
};

const items = [
  {
    name: "BSC",
    img: token1,
  },
  {
    name: "Goerli",
    img: token2,
  },
  {
    name: "Ethereum",
    img: token2,
  },
  {
    name: "Arb",
    img: token3,
  },
  {
    name: "Polygon",
    img: token4,
  },
  {
    name: "Avalanche",
    img: token5,
  },
];
</script>
<template>
  <section class="header-button main-top token_header_button">
    <router-link class="custom_btn_1" to="/">Connect</router-link>

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
          <img :src="token1" alt="" />{{ items[selected].name }}</a
        >

        <ul
          v-if="dropdown"
          class="position-absolute px-2 dropi top-8 bg-black left-0 w-100 rounded-2 py-2"
        >
          <!-- Goerli -->
          <li
            v-for="(item, index) in items"
            :key="item"
            @click="setSelected(index)"
          >
            <a class="dropdown-item" href="#">
              <img :src="item.img" alt="" />{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
