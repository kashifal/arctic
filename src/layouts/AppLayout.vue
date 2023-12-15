<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <div class="app">
    <Sidebar />
    <div class="main">
      <section class="home">
        <Topbar />
        <slot />
      </section>
    </div>
  </div>
</template>
