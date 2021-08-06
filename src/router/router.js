import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Works from "../components/Works.vue";
import Services from "../components/Services.vue";
import Contact from "../components/Contact.vue";
import NotFound from "../components/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      footer: false,
      onPage: "home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      onPage: "about",
    },
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
    meta: {
      onPage: "works",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      onPage: "contact",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: {
      onPage: "services",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Home,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: "smooth" });
      }, 300);
    });
  },
});

export default router;
