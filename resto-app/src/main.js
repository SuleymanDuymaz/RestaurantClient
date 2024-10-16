/*import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

orj
createApp(App).use(router).mount('#app');
app.use(VueSweetalert2);*/

//burada use alanından sonra import edilen sweet alerti çağırdım routerdan sonra. orj js te yok . 


import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// Vue uygulamasını oluşturup SweetAlert2 ve router ile kullanıyoruz
const app = createApp(App);


app.use(router);
app.use(VueSweetalert2);

app.mount('#app');

