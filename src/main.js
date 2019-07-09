import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import '@/assets/style.css';

Vue.config.productionTip = false

Vue.use( CKEditor );

new Vue({
  render: h => h(App),
}).$mount('#app')
