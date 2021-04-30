import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init()
createApp(App).use(router).mount('#app')
