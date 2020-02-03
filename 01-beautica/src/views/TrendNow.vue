<template>
  <div class="makeup-page">
    <div class="container">
      <div class="project-navigation">
        <router-link tag="a" to="/">Home</router-link>
        <i class="fas fa-caret-right"></i>
        <router-link tag="a" to="/">Makeup</router-link>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="page-sidebar">
            <!-- All categories -->
            <div class="sidebar-all-categories">
              <h5>categories</h5>
              <ul class="all-categories-list">
                <li>
                  <router-link tag="a" to="/trend-now">#trend now</router-link>
                  <i
                    class="fas fa-chevron-right"
                    @click="trendNow = !trendNow"
                    :class="{ openSubList: trendNow }"
                  ></i>
                  <!-- Trend now sub list -->
                  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <ul class="trend-now-sub-list" v-show="trendNow">
                      <li>
                        <a href="#">Maecenas commodos</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Fermentum loremous</a>
                      </li>
                      <li>
                        <a href="#">Habitasse molateas</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodosa</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodoso</a>
                      </li>
                    </ul>
                  </transition>
                  <!-- Trend now sub list -->
                </li>
                <li>
                  <router-link tag="a" to="/makeup">makeup</router-link>
                </li>
                <li>
                  <router-link tag="a" to="/nail">nail</router-link>
                </li>
                <li>
                  <router-link tag="a" to="/accessories">beauty accessories</router-link>
                  <i
                    class="fas fa-chevron-right"
                    :class="{ openSubList: accessories }"
                    @click="accessories = !accessories"
                  ></i>
                  <!-- Beauty accessories list -->
                  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <ul class="trend-now-sub-list" v-show="accessories">
                      <li>
                        <a href="#">Maecenas commodos</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Fermentum loremous</a>
                      </li>
                      <li>
                        <a href="#">Habitasse molateas</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodosa</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodoso</a>
                      </li>
                    </ul>
                  </transition>
                  <!-- Beauty accessories list -->
                </li>
                <li>
                  <router-link tag="a" to="/body-art">body art</router-link>
                  <i
                    class="fas fa-chevron-right"
                    :class="{ openSubList: bodyArt }"
                    @click="bodyArt = !bodyArt"
                  ></i>
                  <!-- Body art list -->
                  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <ul class="trend-now-sub-list" v-show="bodyArt">
                      <li>
                        <a href="#">Maecenas commodos</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Malesuada sarcus</a>
                      </li>
                      <li>
                        <a href="#">Fermentum loremous</a>
                      </li>
                      <li>
                        <a href="#">Habitasse molateas</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodosa</a>
                      </li>
                      <li>
                        <a href="#">Maecenas commodoso</a>
                      </li>
                    </ul>
                  </transition>
                  <!-- Body art list -->
                </li>
                <li>
                  <router-link tag="a" to="/makeup-tools">make tools</router-link>
                </li>
                <li>
                  <router-link tag="a" to="/fragance">fragance</router-link>
                </li>
              </ul>
            </div>
            <!-- All categories -->

            <!-- Refine by -->
            <div class="sidebar-refineBy">
              <h5>refine by</h5>

              <ul class="filterTag" v-if="filterColors.length > 0">
                <li v-for="(item, index) in filterColors" :key="index">
                  {{ item }}
                  <i class="fas fa-times"></i>
                </li>
              </ul>
              <div class="unfiltered" v-else>No filters applied</div>
              <div class="clear-all" v-if="filterColors.length > 0" @click="filterColors = []">
                clear all
              </div>
            </div>
            <!-- Refine by -->

            <!-- Filter colors -->
            <div class="sidebar-filter-colors">
              <h5>colors</h5>
              <div>
                <input type="checkbox" id="blue" value="blue" v-model="filterColors" />
                <label for="blue">Blue <span class="count">(1)</span></label>
              </div>
              <div>
                <input type="checkbox" id="green" value="green" v-model="filterColors" />
                <label for="green">Green <span class="count">(4)</span></label>
              </div>
              <div>
                <input type="checkbox" id="black" value="black" v-model="filterColors" />
                <label for="black">Black <span class="count">(6)</span></label>
              </div>
            </div>
            <!-- Filter colors -->

            <!-- Filter by rating -->
            <div class="filter-by-rating">
              <h5>rating</h5>
              <div class="rating-starts-wrapper">
                <div>
                  <input type="checkbox" id="one" />
                  <div class="rating-box">
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="and-up">& up (10)</span>
                  </div>
                </div>

                <div>
                  <input type="checkbox" id="two" />
                  <div class="rating-box">
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="and-up">& up (13)</span>
                  </div>
                </div>

                <div>
                  <input type="checkbox" id="three" />
                  <div class="rating-box">
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="and-up">& up (10)</span>
                  </div>
                </div>

                <div>
                  <input type="checkbox" id="four" />
                  <div class="rating-box">
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star"></i>
                    <span class="and-up">& up (3)</span>
                  </div>
                </div>

                <div>
                  <input type="checkbox" id="five" />
                  <div class="rating-box">
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <i class="fas fa-star active-star"></i>
                    <span class="and-up">& up (7)</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Filter by rating -->

            <!-- Top seller -->
            <div class="top-seller text-center">
              <h5>top seller</h5>
              <carousel
                :items="1"
                :nav="false"
                :autoplay="true"
                :autoplayTimeout="5000"
                :autoplayHoverPause="true"
              >
                <div class="item" v-for="product in justArrived" :key="product.id">
                  <SingleProduct
                    @openModal="fadeModal($event)"
                    :imgSrc="product.imgSrc"
                    :brandName="product.name"
                    :brodName="product.details"
                    :productPrice="product.price"
                  >
                  </SingleProduct>
                  <hr />
                </div>
              </carousel>
            </div>
            <!-- Top seller -->

            <!-- Custom CMS block -->
            <div class="custom-cms-block">
              <h5>custom cms block</h5>
              <p>
                Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own
                content here: text, html, images, media... whatever you like
              </p>

              <p>
                There are many similar sample content placeholders across the store. All editable
                from Theme Editor.
              </p>
            </div>
            <!-- Custom CMS block -->
          </div>
        </div>
        <div class="col-md-9">
          <div class="page-content">
            <!-- Makeup page bannger -->
            <div class="makeup-page-banner">
              <a href="#">
                <img
                  src="https://cdn11.bigcommerce.com/s-tphjucml/images/stencil/1280x1280/r/category-banner-compressor__45321.original.jpg"
                  alt=""
                />
              </a>
            </div>
            <!-- Makeup page bannger -->

            <div class="quick-banner">
              <h5>makeup</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque non nulla nulla, nec
                tincidunt risus morbi ultricies est ditae odio ultrices imperdiet. Cras accumsan
                dorci maces consequat blandi susto dusto elementum libero non honcus purus sem sit
                amet enimos.
              </p>
            </div>

            <!-- Product pagination top -->
            <div class="product-pagination-top">
              <div class="view-as">
                <span>view as</span>
                <div class="change-grid-layout">
                  <button @click="showFourColumns">
                    <i class="fas fa-grip-horizontal inactive-layout"></i>
                  </button>

                  <button @click="showOneColumn">
                    <i class="fas fa-grip-lines"></i>
                  </button>
                </div>
              </div>

              <div class="sort-by">
                <span>sort by</span>
                <select>
                  <option value="features items">features items</option>
                  <option value="best selling">best selling</option>
                  <option value="new items">new items</option>
                  <option value="by review">by review</option>
                </select>
              </div>
            </div>
            <!-- Product pagination top -->

            <!-- Makeup products -->
            <div class="makeup-products text-center">
              <div id="show-four-columns">
                <div class="row">
                  <div class="col-lg-3 col-sm-6" v-for="product in justArrived" :key="product.id">
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
              </div>

              <div id="show-one-column">
                <div class="row">
                  <div class="col-md-12" v-for="product in justArrived" :key="product.id">
                    <SingleProduct
                      @openModal="fadeModal($event)"
                      :imgSrc="product.imgSrc"
                      :brandName="product.name"
                      :brodName="product.details"
                      :productPrice="product.price"
                    >
                    </SingleProduct>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <!-- Makeup products -->
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
                  <img
                    id="active-img"
                    :src="require('@/assets/images/modal/modal-1.webp')"
                    alt=""
                  />
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
                <div class="product-price">$470.00</div>

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
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import SingleProduct from "@/components/SingleProduct";
import shop from "@/api/shop";

export default {
  data() {
    return {
      trendNow: false,
      accessories: false,
      bodyArt: false,
      filterColors: [],
      showModal: false,
      productQty: 1
    };
  },
  methods: {
    // Sidebar expand transition
    enter(el) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      setTimeout(() => {
        el.style.height = height;
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    },

    // Show product modal
    fadeModal(imgSrc) {
      this.showModal = true;
      const bigImg = document.getElementById("active-img");
      bigImg.src = imgSrc;
    },

    // Show one column
    showOneColumn() {
      const oneColumn = document.getElementById("show-one-column");
      const fourColumns = document.getElementById("show-four-columns");
      fourColumns.style.display = "none";
      oneColumn.style.display = "block";
    },

    // Show four columns
    showFourColumns() {
      const oneColumn = document.getElementById("show-one-column");
      const fourColumns = document.getElementById("show-four-columns");
      oneColumn.style.display = "none";
      fourColumns.style.display = "block";
    }
  },
  components: {
    carousel,
    SingleProduct
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

<style scoped lang="scss">
.product-modal {
  background-color: rgba(45, 45, 50, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: #ffffff;
    max-width: 70vw;
    padding: 30px;
    position: relative;
    border-radius: 0 !important;
    border: none;
    overflow: hidden;

    // Left slide (product image)
    .modal-left-side {
      text-align: center;

      .orignal-img {
        #active-img {
          width: 400px;
          height: 400px;
        }
      }

      .product-img-gallary {
        margin-top: 15px;
        overflow: hidden;

        .custom-row {
          display: flex;
          align-items: center;
          justify-content: center;

          #sub-img {
            max-width: 70px;
            cursor: pointer;
            margin: 0 3px;
          }
        }
      }
    }

    // Right side (product details)
    .modal-right-side {
      transition: all 0.4s ease-in-out;

      .product-name {
        color: #000;
        font-weight: 600;
        font-size: 15px;
      }
      .product-category {
        color: #000;
        margin: 10px 0;
      }

      .customer-review {
        display: flex;
        align-items: center;

        .product-rating {
          i {
            color: #e7040f;
            margin-right: 3px;
            font-size: 12px;
          }
        }
        .customer-review-count {
          font-size: 14px;
          margin: 0 10px;
          color: #000;
          font-weight: 400;
        }
        .write-review {
          color: #000;
          border-bottom: 1px dotted #000;
          font-size: 14px;
        }
      }
      .product-price {
        font-size: 25px;
        font-weight: 600;
        margin: 15px 0;
      }
      .more-details-about-product {
        ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 250px;

            span:first-of-type {
              font-size: 14px;
              font-weight: 500;
              text-transform: capitalize;
            }

            span:last-of-type {
              font-size: 12px;
              text-transform: uppercase;
            }
          }
        }
      }

      .product-quantity {
        border: 1px solid #80808085;
        max-width: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;

        button:first-of-type {
          border: none;
          background-color: transparent;
          color: #3333337d;
          border-right: 1px solid #80808085;
          padding: 8px;
          outline: 0;
        }

        button:last-of-type {
          border: none;
          background-color: transparent;
          color: #3333337d;
          border-left: 1px solid #80808085;
          padding: 8px;
          outline: 0;
        }
      }

      form {
        #add-to-cart {
          background-color: #000;
          color: #fff;
          text-transform: uppercase;
          border: none;
          font-size: 14px;
          outline: 0;
          font-weight: 600;
          padding: 10px 40px;
          border-radius: 4px;
          margin: 30px 0;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: #e7040f;
          }
        }
      }
    }

    // Close modal
    #closeModal {
      position: absolute;
      right: 0;
      top: 0;
      background-color: #000;
      color: #fff;
      border: none;
      outline: 0;
      padding: 3px 10px;
    }
  }
}

.single-product {
  .add-to-cart {
    button {
      opacity: 1 !important;
    }
  }

  .product-rating {
    opacity: 1 !important;
  }
}
</style>
