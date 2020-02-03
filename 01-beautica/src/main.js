import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

setTimeout(() => {
  // Go to top button
  const goToTop = document.getElementById("scrollToTop");
  window.onscroll = function() {
    if (window.pageYOffset >= 300) {
      goToTop.style.opacity = "1";
    } else {
      goToTop.style.opacity = "0";
    }

    // Scroll Navbar
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      document.querySelector("#scrollNavbar").style.top = "0";
    } else {
      document.querySelector("#scrollNavbar").style.top = "-64px";
    }

    // Product Modal
    const bigImg = document.getElementById("active-img");
    const subImg = document.querySelectorAll("#sub-img");

    subImg.forEach(element => {
      element.addEventListener("click", function() {
        bigImg.src = element.src;
      });
    });
  };
}, 100);
