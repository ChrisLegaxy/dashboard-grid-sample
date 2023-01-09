import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const MainDashboardPage = () => import("../pages/MainDashboardPage.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainDashboardPage,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
