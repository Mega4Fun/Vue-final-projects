<template>
  <div class="sideNav" id="sideNav">
    <ul>
      <div class="close-side-nav" @click="close">x</div>
      <li>
        <a href="#">trend now</a>
        <i class="fas fa-chevron-down" @click="showTrendNowMenu = !showTrendNowMenu"></i>
        <div class="trend-now-menu" v-show="showTrendNowMenu">
          <a href="#">cosoplios</a>
          <a href="#">destibukum maruris</a>
          <a href="#">fermentum loremous</a>
          <a href="#">habitasse molateas</a>
          <a href="#">maecenase commodos</a>
          <a href="#">malesuada sarcus</a>
          <a href="#">mallancelos</a>
        </div>
      </li>
      <li>
        <a href="#">makeup</a>
      </li>
      <li>
        <a href="#">nail</a>
      </li>
      <li>
        <a href="#">beauty accessories</a>
        <i class="fas fa-chevron-down" @click="showAccessoriesMenu = !showAccessoriesMenu"></i>
        <div class="trend-now-menu" v-show="showAccessoriesMenu">
          <a href="#">cosoplios</a>
          <a href="#">destibukum maruris</a>
          <a href="#">fermentum loremous</a>
          <a href="#">habitasse molateas</a>
          <a href="#">maecenase commodos</a>
          <a href="#">malesuada sarcus</a>
          <a href="#">mallancelos</a>
        </div>
      </li>
      <li>
        <a href="#">body art</a>
        <i class="fas fa-chevron-down" @click="showBodyArtMenu = !showBodyArtMenu"></i>
        <div class="trend-now-menu" v-show="showBodyArtMenu">
          <a href="#">cosoplios</a>
          <a href="#">destibukum maruris</a>
          <a href="#">fermentum loremous</a>
          <a href="#">habitasse molateas</a>
          <a href="#">maecenase commodos</a>
          <a href="#">malesuada sarcus</a>
          <a href="#">mallancelos</a>
        </div>
      </li>
      <li>
        <a href="#">makeup tools</a>
      </li>
      <li>
        <a href="#">fragrance</a>
      </li>
      <li>
        <a href="#">lookbook</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTrendNowMenu: false,
      showAccessoriesMenu: false,
      showBodyArtMenu: false,
      closeSideNav: false
    };
  },
  methods: {
    close() {
      document.getElementById("sideNav").style.width = "0";
    }
  }
};
</script>

<style scoped lang="scss">
.sideNav {
  background-color: #ffffff;
  max-width: 250px;
  border-right: 1px solid #80808063;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;

  ul {
    .close-side-nav {
      width: 100%;
      margin-bottom: 8px;
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
    li {
      border-bottom: 1px solid #e5e5e5;
      padding: 10px;
      position: relative;
      overflow: hidden;

      a {
        color: #000;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
      }

      i {
        font-size: 10px;
        position: absolute;
        top: 15px;
        right: 10px;
      }
    }
    .trend-now-menu {
      display: flex;
      flex-direction: column;
      padding: 0 10px;

      a {
        font-size: 11px;
        border-bottom: 1px solid #e5e5e5;
        padding: 7px 5px;
        font-weight: 600;
      }

      a:last-of-type {
        border-bottom: none !important;
      }
    }
  }
}
</style>
