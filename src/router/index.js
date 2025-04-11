import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import AboutUs from "@/components/AboutUs.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage }, // Homepage route
  { path: "/about", name: "About", component: AboutUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
