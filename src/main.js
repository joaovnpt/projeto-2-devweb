import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import DataComponent from './components/DataComponent.vue'

const app = createApp(App);
app.component('RegisterComponent', RegisterComponent);
app.component('DataComponent', DataComponent);
createApp(App).mount('#app')
