import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/router.js";
import "./assets/tailwind.css";
import "./assets/tailwind.css";

const app = createApp(App);

app.use(router).mount("#app");
