// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import resource from 'vue-resource'
Vue.use(resource)
// import firstclick from './assets/js/fastclick'
Vue.config.productionTip = false
import './assets/css/iconfont.css';
import './assets/css/reset.css';
import 'mint-ui/lib/style.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
