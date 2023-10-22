import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TransactionDetailView from "../views/TransactionDetailView.vue";
import NotFoundComponent from "../views/404Page.vue";

const routes = [
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
  {
    path: "/transaction/:idKien",
    name: "transaction-detail",
    component: TransactionDetailView,
  },
  {
    path: "/transactions",
    name: "transactions-kien",
    component: TransactionDetailView,
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
