import { createApp, configureCompat } from "vue";
import { createStore } from "./store";
import { createRouter } from "./router";
import App from "./App.vue";

configureCompat({
  MODE: 3,
});

const router = createRouter();
const store = createStore();

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
