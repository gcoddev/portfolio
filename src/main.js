import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

window.redirectTo = (path) => {
    router.push(path);
};

axios.defaults.baseURL = process.env.VUE_APP_URL_API;
axios.defaults.headers = {
    Accept: "application/json",
    "content-type": "application/json",
};

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
