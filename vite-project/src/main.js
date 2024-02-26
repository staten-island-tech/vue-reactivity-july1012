

// document.querySelector(".btn").addEventListener("click", function () {
//     if (document.body.classList.contains("greenn")) {
//       document.body.classList.add("pinkk");
//       document.body.classList.remove("greenn");
//     } else {
//       document.body.classList.add("greenn");
//       document.body.classList.remove("pinkk");
//     }
//   });

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue ({
    router,
    render: h=> h(App)
}).$mount('#app')