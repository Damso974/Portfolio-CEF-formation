import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';  // Importation du routeur

const app = createApp(App);

app.use(router);  // Activation du routeur
app.mount('#app');  // Montage de l'application


