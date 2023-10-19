import { createApp } from 'vue'
// import './style.css'
import router from './router/index.js'
import App from './App.vue'
import { createPinia } from 'pinia'
// import bootstrap
import { Drawer , Button , message , List , Menu  } from 'ant-design-vue'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'



const app = createApp(App);
app.use(router);
app.use(Menu);
app.use(List);
app.use(Button);
app.use(Drawer);
app.use(createPinia());
app.mount('#app')

