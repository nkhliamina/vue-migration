import { createRouter as _createRouter, createWebHistory } from "vue-router";
// import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
    ],
  });
}
