import { createRouter as _createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import("../views/AboutView.vue"),
      },
    ],
  });
}
