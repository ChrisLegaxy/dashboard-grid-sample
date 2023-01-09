import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

/**
 * * Code Splitting
 */
const MainDashboardPage = () => import("../pages/MainDashboardPage.vue");
const ManageProductPage = () => import("../pages/ManageProductPage.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainDashboardPage,
  },
  {
    path: "/products/manage",
    component: ManageProductPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
