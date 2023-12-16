import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import YieldPool from "../views/YieldPool.vue";
import ReviewToken from "../views/ReviewToken.vue";
const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/yield-pool",
      name: "yield-pool",
      component: YieldPool,
    },
    {
      path: "/review-your-token",
      name: "review-your-token",
      component: ReviewToken,
    },
  ],
});

export default router;
