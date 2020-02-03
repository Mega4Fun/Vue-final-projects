<template>
  <button id="scrollToTop" @click="goToTop">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped lang="scss">
#scrollToTop {
  position: fixed;
  right: 40px;
  bottom: 50px;
  background-color: #000;
  color: #fff;
  border: none;
  width: 60px;
  height: 60px;
  outline: none;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  z-index: 2000;
}
</style>
