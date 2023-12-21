<script setup>
import token1 from "../assets/images/token/1.svg";
import token2 from "../assets/images/token/2.svg";
import token3 from "../assets/images/token/3.svg";
import token4 from "../assets/images/token/4.svg";
import token5 from "../assets/images/token/5.svg";
import nft from "../assets/images/token/nft.png";
import { onMounted } from "vue";

import { ref } from "vue";
const dropdown = ref(false);
const changeDropdown = () => {
  dropdown.value = !dropdown.value;
};
const selected = ref(1);
const token = ref("");

onMounted(() => {
  console.log("====================================");
  console.log(localStorage.getItem("walletAddress"));
  token.value = localStorage.getItem("walletAddress");
  console.log("====================================");
});
var walletAddress;

//connect..
async function connect() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    const account = web3.eth.accounts;
    // Get the current MetaMask selected/active wallet
    walletAddress = account.givenProvider.selectedAddress;
    console.log("wallet address is : " + walletAddress);
    walletAddress = format_address(walletAddress);
    console.log("====================================");
    console.log(walletAddress);
    console.log("====================================");
    localStorage.setItem("walletAddress", walletAddress);
  } else {
    console.log("No wallet");
  }
}

function format_address(address) {
  var mystring = String(address);

  const start = mystring.substring(0, 8);
  const end = mystring.substring(38, 42);
  return start + " .... " + end;
}

async function isConnected() {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  if (accounts.length) {
    console.log(`You're connected to: ${accounts[0]}`);

    // make accounts[0] the vlue of the connect box
  } else {
    // make connect btn default..
  }
}

const setSelected = (index) => {
  // selected.value = index;
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
    img: nft,
  },
];
</script>
<template>
  <section class="header-button main-top token_header_button">
    <div @click="connect" class="custom_btn_1" style="cursor: pointer">
      <span v-if="token === null">Connect</span>
      <span v-else>{{ token }}</span>
    </div>

    <div class="token_dropdown">
      <div class="dropdown">
        <a
          @click="changeDropdown"
          class="btn btn-secondary flex items-center whitespace-nowrap dropdown-toggle"
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
          style="z-index: 999"
          class="position-absolute px-2 dropi top-12 bg-black left-0 w-100 rounded-2 py-2"
        >
          <!-- Goerli -->
          <li
            v-for="(item, index) in items"
            :key="item"
            @click="setSelected(index)"
          >
            <a class="dropdown-item whitespace-nowrap" href="#">
              <img :src="item.img" alt="" />{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
