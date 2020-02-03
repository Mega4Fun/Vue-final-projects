<template>
  <div class="home">
    <!-- Limited time -->
    <div class="limited-time">
      <div class="container">
        <p>
          LIMITED-TIME OFFERS: MID-SEASON SALE UP TO 70% OFF ON SELECTED ITEMS.
          <router-link tag="a" to="/show">SHOP NOW</router-link>
        </p>
      </div>
    </div>
    <!-- Limited time -->
    <div class="container-fluid">
      <!-- Slider -->
      <div id="slider">
        <carousel
          :items="1"
          :dots="false"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="3000"
          :autoplayHoverPause="true"
        >
          <div class="item">
            <img :src="require('@/assets/images/home-slide-1.jpg')" alt="" />
            <div class="slide-content">
              <div class="heroCarousel-content-inner animated fadeIn delay-1s">
                <h1>
                  Beautifully Bare Collection
                </h1>
                <p class="mr-t-20">
                  It’s the Lightweight, Natural-Looking Collection You Love
                </p>
                <a href="#" class="shop-now">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
          <div class="item"><img :src="require('@/assets/images/home-slide-2.jpg')" alt="" /></div>
          <div class="item">
            <img :src="require('@/assets/images/home-slide-3.jpg')" alt="" />
            <div class="slide-content-last">
              <div class="heroCarousel-content-inner animated fadeIn delay-1s">
                <h1>
                  Beautifully Bare Collection
                </h1>
                <p class="mr-t-20">
                  It’s the Lightweight, Natural-Looking Collection You Love
                </p>
                <a href="#" class="shop-now">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
          <template slot="prev">
            <span class="prev"><i class="fas fa-long-arrow-alt-left"></i></span>
          </template>

          <template slot="next">
            <span class="next"><i class="fas fa-long-arrow-alt-right"></i></span>
          </template>
        </carousel>
      </div>
      <!-- Slider -->
    </div>

    <div class="container">
      <!-- Banner items -->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <div class="banner-items">
            <a href="#">
              <img :src="require('@/assets/images/fluid-grid/item-1.jpg')" alt="" />
              <span class="banner-title">lips</span>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="banner-items">
            <a href="#">
              <img :src="require('@/assets/images/fluid-grid/item-2.jpg')" alt="" />
              <span class="banner-title">tools</span>
            </a>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="banner-items">
            <a href="#">
              <img :src="require('@/assets/images/fluid-grid/item-3.jpg')" alt="" />
              <span class="banner-title">face</span>
            </a>
          </div>
        </div>
      </div>
      <!-- Banner items -->

      <!-- Just arrived products -->
      <div class="just-arrived text-center">
        <h2 class="text-center font-size-25 text-uppercase">just arrived</h2>
        <p class="text-center font-size-14">
          Magnis de darturien eros laciniados de cosmopolis dinterdum
        </p>
        <carousel
          :items="3"
          :responsive="{
            0: { items: 2, nav: false },
            600: { items: 3, nav: false },
            1200: { items: 5, nav: false }
          }"
          :margin="10"
          :dots="false"
          :autoplay="true"
          :autoplayTimeout="3000"
          :autoplayHoverPause="true"
        >
          <div v-for="product in justArrived" :key="product.id">
            <div class="item">
              <SingleProduct
                @openModal="fadeModal($event)"
                :imgSrc="product.imgSrc"
                :brandName="product.name"
                :brodName="product.details"
                :productPrice="product.price"
              >
              </SingleProduct>
            </div>
          </div>
        </carousel>
      </div>
      <!-- Just arrived products -->

      <!-- Home custom banner -->
      <div class="home-custom-banner">
        <div class="row">
          <div class="col-md-6 col-sm-12 mr-b-20">
            <div class="banner-item">
              <img :src="require('@/assets/images/home-custom-banner-1.jpg')" alt="" />
              <a href="#" class="shop-now">shop now</a>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="banner-item">
              <img :src="require('@/assets/images/home-custom-banner-2.jpg')" alt="" />
              <a href="#" class="shop-now">shop now</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Home custom banner -->

      <!-- Just arrived products -->
      <div class="just-arrived mr-t-40  text-center">
        <h2 class="text-center font-size-25 text-uppercase">
          FEATURED PRODUCTS
        </h2>
        <p class="text-center font-size-14">
          Magnis de darturien eros laciniados de cosmopolis dinterdum
        </p>
        <carousel
          :items="3"
          :responsive="{
            0: { items: 2, nav: false },
            600: { items: 3, nav: false },
            1200: { items: 5, nav: false }
          }"
          :margin="10"
          :dots="false"
          :autoplay="true"
          :autoplayTimeout="300000"
          :autoplayHoverPause="true"
        >
          <div v-for="product in justArrived" :key="product.id">
            <div class="item">
              <SingleProduct
                @openModal="fadeModal($event)"
                :imgSrc="product.imgSrc"
                :brandName="product.name"
                :brodName="product.details"
                :productPrice="product.price"
              >
              </SingleProduct>
            </div>
          </div>
        </carousel>
      </div>
      <!-- Just arrived products -->

      <div class="from-our-blog">
        <h4 class="text-center text-uppercase mr-b-20">from our blog</h4>
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <BlogItem :imgSrc="require('@/assets/images/blogs/blog.jpg')">
              <template slot="postedTime">Posted by ThemeVale on 31st Aug 2017 </template>
              <template slot="postedBy">Pellentesque posuere morci. …</template>
              <template slot="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum
                in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed
                non erat. Nulla no...
              </template>
            </BlogItem>
          </div>
          <div class="col-md-6 col-sm-12">
            <BlogItem :imgSrc="require('@/assets/images/blogs/blog1.jpg')">
              <template slot="postedTime">Posted by ThemeVale on 31st Aug 2017 </template>
              <template slot="postedBy">Pellentesque posuere morci. …</template>
              <template slot="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum
                in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed
                non erat. Nulla no...
              </template>
            </BlogItem>
          </div>
        </div>
      </div>
    </div>

    <!-- Product modal -->
    <div class="product-modal" v-show="showModal">
      <div class="modal-content">
        <div class="row">
          <div class="col-md-6">
            <div class="modal-left-side">
              <div class="orignal-img">
                <img id="active-img" :src="require('@/assets/images/modal/modal-1.webp')" alt="" />
              </div>
              <div class="product-img-gallary">
                <div class="custom-row">
                  <img id="sub-img" :src="require('@/assets/images/modal/modal-1.webp')" alt="" />
                  <img id="sub-img" :src="require('@/assets/images/modal/modal-2.webp')" alt="" />
                  <img id="sub-img" :src="require('@/assets/images/modal/modal-3.webp')" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="modal-right-side">
              <a href="#" class="product-name">FRENCH CONNECTION</a>
              <div class="product-category">
                [Sample] French Connection, Sunday bliss bag
              </div>
              <div class="customer-review">
                <div class="product-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <a href="" class="customer-review-count">1 Customer Review</a>
                <a href="#" class="write-review">Write a Review</a>
              </div>
              <div class="product-price">$40.00</div>

              <div class="more-details-about-product">
                <ul>
                  <li>
                    <span>sku:</span>
                    <span>FCSBB</span>
                  </li>
                  <li>
                    <span>weight:</span>
                    <span>2.00 LBS</span>
                  </li>
                  <li>
                    <span>gift wrapping:</span>
                    <span>Option available</span>
                  </li>
                  <li>
                    <span>shipping:</span>
                    <span>free shipping</span>
                  </li>
                </ul>
              </div>

              <div class="product-quantity">
                <button @click="productQty--"><i class="fas fa-minus"></i></button>
                <span class="quantity font-size-14">{{ productQty }}</span>
                <button @click="productQty++"><i class="fas fa-plus"></i></button>
              </div>

              <form action="" method="post">
                <button type="submit" id="add-to-cart">add to cart</button>
              </form>
            </div>
          </div>
        </div>
        <button id="closeModal" @click="showModal = false">X</button>
      </div>
    </div>
    <!-- Product modal -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import SingleProduct from "@/components/SingleProduct";
import BlogItem from "@/components/BlogItem";
import shop from "@/api/shop";

export default {
  name: "home",
  components: {
    carousel,
    SingleProduct,
    BlogItem
  },
  data() {
    return {
      productQty: 1,
      showModal: false
    };
  },
  methods: {
    fadeModal(imgSrc) {
      this.showModal = true;
      const bigImg = document.getElementById("active-img");
      bigImg.src = imgSrc;
      console.log(imgSrc);
    }
  },
  computed: {
    justArrived() {
      return this.$store.state.justArrived;
    }
  },
  created() {
    shop.getProducts(justArrived => {
      this.$store.commit("setProducts", justArrived);
    });
  }
};
</script>
