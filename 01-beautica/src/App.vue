<template>
  <div id="app">
    <scroll-nav></scroll-nav>
    <upper-nav></upper-nav>
    <main-header></main-header>
    <main-navbar></main-navbar>
    <side-nav></side-nav>
    <transition name="fade">
      <router-view />
    </transition>
    <ScrollTotop />
    <NewCaslte />
    <Footer />
  </div>
</template>

<script>
import UpperNav from "@/components/UpperNav";
import MainHeader from "@/components/MainHeader";
import MainNavbar from "@/components/MainNavbar";
import SideNav from "@/components/SideNav";
import ScrollNav from "@/components/ScrollNav";
import Footer from "@/components/Footer";
import ScrollTotop from "@/components/ScrollToTop";
import NewCaslte from "@/components/NewCaslte";

export default {
  components: {
    UpperNav,
    MainHeader,
    MainNavbar,
    SideNav,
    ScrollNav,
    Footer,
    ScrollTotop,
    NewCaslte
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Active class by router
.active-link {
  color: #e9446e !important;
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.4s ease-in-out;
}
</style>
