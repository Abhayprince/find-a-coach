import { createRouter, createWebHistory } from "vue-router";
import CoachList from "./pages/CoachList.vue";
import RequestsList from "./pages/RequestsList.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    { path: "/requests", component: RequestsList },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
