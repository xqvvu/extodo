import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "@/app.vue";
import router from "@/router";
import "virtual:uno.css";

createApp(App)
  .use(createPinia())
  .use(router)
  .mount("#app");
