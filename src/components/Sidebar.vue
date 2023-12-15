<script setup>
import tokenLogo from "../assets/images/token_logo.jpg";
import funds from "../assets/images/funds 1.svg";
import profile from "../assets/images/profile-user 1.svg";
import cube from "../assets/images/cube 1.svg";
import { ref } from "vue";

const sidebar = ref(false);
const changeSidebar = () => {
  sidebar.value = !sidebar.value;
  if (sidebar.value) {
    document.querySelector(".sidebar").classList.add("expand");
    document.querySelector(".btn-menu").classList.add("bx-x");
  } else {
    document.querySelector(".sidebar").classList.remove("expand");
    document.querySelector(".btn-menu").classList.remove("bx-x");
  }
};
</script>

<template>
  <section class="sidebar">
    <div class="nav_header">
      <a class="token_logo_brand" href="#"> <img :src="tokenLogo" alt="" /></a>
      <i @click="changeSidebar" class="bx bx-menu btn-menu"></i>
    </div>
    <ul class="box_1">
      <li>
        <a href="#">
          <i class="bx bxs-rocket"></i>
          <span class="title">Get Liquidity</span>
        </a>
        <span class="tooltip">Get Liquidity</span>
      </li>
      <li>
        <router-link to="yield-pool">
          <img :src="funds" alt="" />
          <span class="title">Yield Pool</span>
        </router-link>
        <span class="tooltip">Yield Pool</span>
      </li>
      <li>
        <a href="#">
          <img :src="profile" alt="" />
          <span class="title">My Tokens</span>
        </a>
        <span class="tooltip">My Tokens</span>
      </li>
      <li>
        <a href="#">
          <img :src="cube" alt="" />
          <span class="title">Launched Tokens</span>
        </a>
        <span class="tooltip">Launched Tokens</span>
      </li>
    </ul>
  </section>
</template>
