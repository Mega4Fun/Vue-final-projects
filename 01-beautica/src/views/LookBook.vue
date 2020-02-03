<template>
  <div class="look-book">
    <div class="container">
      <!-- Quick navigation -->
      <div class="project-navigation">
        <router-link tag="a" to="/">Home</router-link>
        <i class="fas fa-caret-right"></i>
        <router-link tag="a" to="/">LookBook</router-link>
      </div>
      <!-- Quick navigation -->
      <h5>lookbook</h5>

      <!-- Lookbook carousel -->
      <carousel
        :items="1"
        :dots="false"
        :nav="false"
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
      >
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/lookbook/slideshow-1.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/lookbook/slideshow-2.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/lookbook/slideshow-3.jpg')" alt="" />
          </a>
        </div>
      </carousel>
      <!-- Lookbook carousel -->

      <!-- Follow us -->
      <div class="follow-us">
        <ul class="social-media">
          <li class="facebook">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="twitter">
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="pinterest">
            <a href="#">
              <i class="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li class="instagram">
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- Follow us -->
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel
  }
};
</script>

<style scoped lang="scss">
.look-book {
  .project-navigation {
    display: flex;
    align-items: center;
    margin: 20px 0;

    i {
      margin: 0 10px;
      color: #777;
      font-size: 13px;
    }
    a {
      color: #777;
      font-size: 12px;
      &:hover {
        color: #464646;
        text-decoration: underline;
      }
    }
  }

  h5 {
    text-transform: uppercase;
    color: #000;
    margin: 15px 0;
    font-weight: 600;
  }
  .item {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    li {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      margin-right: 15px;
      line-height: 40px;

      a {
        font-size: 14px !important;
        color: #fff;
        &:hover {
          border: none !important;
        }
      }
    }
    .facebook {
      background-color: #3b5998;
    }
    .twitter {
      background-color: #1da1f2;
    }
    .pinterest {
      background-color: #bd081c;
    }
    .instagram {
      background-color: #c32aa3;
    }
  }
}
</style>
