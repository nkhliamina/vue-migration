import { createApp } from "vue";
import { createRouter } from "./router";
import { createPinia } from 'pinia'
import App from "./App.vue";

const router = createRouter();
const pinia = createPinia()

const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");
