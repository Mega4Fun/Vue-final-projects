<template>
  <div id="from-new-caslte">
    <div class="img-wrapper">
      <img :src="require('@/assets/images/products/product-5.jpg')" alt="" />
    </div>
    <div class="product-quick-details">
      <p>Someone recently bought a [Sample]</p>
      <a href="#">French Connection, straw bag</a>
      <div class="posted-time">
        35 minutes ago, from Penrith
      </div>

      <div id="close">X</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNewCaslteMsg: false
    };
  }
};

// Show the message every 1
setInterval(() => {
  const msg = document.querySelector("#from-new-caslte");
  msg.style.bottom = "30px";
}, 1000 * 60);

setTimeout(() => {
  const closeBtn = document.querySelector("#close");
  closeBtn.addEventListener("click", () => {
    const msg = document.querySelector("#from-new-caslte");
    msg.style.bottom = "-100px";
  });
}, 100);
</script>

<style scoped lang="scss">
#from-new-caslte {
  position: fixed;
  bottom: -100px;
  right: 20px;
  background-color: #fff;
  display: flex;
  width: 400px;
  z-index: 9999;
  transition: all 0.3s ease-in-out;

  .img-wrapper {
    img {
      max-width: 100px;
      max-height: 100px;
      margin-right: 5px;
    }
  }

  .product-quick-details {
    padding: 10px 0;
    width: 100%;
    position: relative;

    p {
      font-size: 12px;
      margin: 0;
    }

    a {
      color: #000;
      font-size: 14px;
      font-weight: 600;
      margin: 3px 0;
      display: block;
    }

    .posted-time {
      font-size: 10px;
      font-style: italic;
    }

    #close {
      position: absolute;
      right: 0;
      top: 0;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      padding: 5px 10px;
    }
  }
}
</style>
