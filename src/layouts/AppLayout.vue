<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <div class="app class_a">
    <Sidebar />
    <div class="main class_b">
      <section class="home">
        <Topbar />
        <slot />
      </section>
    </div>
  </div>
</template>
