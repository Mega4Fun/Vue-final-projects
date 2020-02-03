<template>
  <div class="footer mr-t-50">
    <!-- Follow us -->
    <div class="follow-us text-center">
      <h5>
        <span>FOLLOW US ON INSTAGRAM</span>
      </h5>
      <h3 class="mr-b-20">
        <span>#BEAUTICACOSMETICS</span>
      </h3>

      <carousel
        :items="10"
        :dots="false"
        :nav="false"
        :loop="true"
        :autoplay="true"
        :autoplayHoverPause="true"
        :autoplayTimeout="5000"
        :margin="2"
        :responsive="{
          0: { items: 1, nav: false },
          375: { items: 3, nav: false },
          552: { items: 6, nav: false },
          1200: { items: 10, nav: false }
        }"
      >
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-1.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-2.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-3.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-4.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-5.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-6.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-7.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-1.jpg')" alt="" />
          </a>
        </div>
        <div class="item">
          <a href="#">
            <img :src="require('@/assets/images/follow-us/follow-us-2.jpg')" alt="" />
          </a>
        </div>
      </carousel>
    </div>
    <!-- Follow us -->
    <!-- Footer content -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="col-head">shop</div>
            <ul>
              <li>
                <a href="#">#trend now</a>
              </li>
              <li>
                <a href="#">makeup</a>
              </li>
              <li>
                <a href="#">nail</a>
              </li>
              <li>
                <a href="#">beauty accessories</a>
              </li>
              <li>
                <a href="#">body art</a>
              </li>
              <li>
                <a href="#">makeup tools</a>
              </li>
              <li>
                <a href="#">fragrance</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <div class="col-head">information</div>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">theme FAQS</a>
              </li>
              <li>
                <a href="#">new collection</a>
              </li>
              <li>
                <a href="#">best sellers</a>
              </li>
              <li>
                <a href="#">manufactures</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">terms & conditions</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <div class="col-head">customer service</div>
            <ul>
              <li>
                <a href="#">search terms</a>
              </li>
              <li>
                <a href="#">advanced search</a>
              </li>
              <li>
                <a href="#">order and return search</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
              <li>
                <a href="#">RSS</a>
              </li>
              <li>
                <a href="#">help & FAQS</a>
              </li>
              <li>
                <a href="#">consutant</a>
              </li>
              <li>
                <a href="#">store locations</a>
              </li>
            </ul>
          </div>
          <div class="column">
            <div class="col-head">SIGN UP FOR OUR NEWSLETTER</div>
            <p class="mr-b-10 font-size-12">
              Receive our latest updates about our products and promotion
            </p>
            <div class="subscribe">
              <input type="text" name="" id="" placeholder="Enter your email address" />
              <button type="submit">subscribe</button>
            </div>
            <h4>
              <span>STAY CONNECTED</span>
            </h4>

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
        </div>
        <div class="custom-hr mr-t-20"></div>
        <div class="built-by">
          <p class="font-size-13 mr-t-20">
            © 2020 Beautica All Rights Reserved. Ecommerce Software by <a href="#">M.Mega</a>
          </p>
          <p class="font-size-13">BigCommerce Themes & Templates by <a href="#">Code4Fun</a></p>
        </div>
      </div>
    </footer>
    <!-- Footer content -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel }
};
</script>

<style scoped lang="scss">
.follow-us {
  h3 {
    color: red;
  }
}

footer {
  background-color: #0f0f0f;
  padding: 60px 0;
  color: #fff;
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-gap: 60px;
    .column {
      .col-head {
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      ul {
        li {
          a {
            color: #fff;
            text-transform: capitalize;
            font-size: 11px;

            &:hover {
              border-bottom: 1px solid #fff;
            }
          }
        }
      }
    }
    .subscribe {
      border: 1px solid #fff;
      display: flex;
      margin: 20px 0;

      input {
        width: 80%;
        border: none;
        padding: 10px;
        background: #0f0f0f;
        color: #fff;
      }
      button {
        background: #fff;
        border: none;
        padding: 10px 0;
        width: 20%;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        &:focus {
          outline: 0;
        }
      }
    }
    .social-media {
      display: flex;
      margin-top: 15px;

      li {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        margin-right: 15px;
        line-height: 40px;

        a {
          font-size: 14px !important;
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
  .built-by {
    p {
      a {
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: #fff;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  footer {
    .row {
      grid-template-columns: 1fr 2fr !important;
    }
  }
}
@media screen and(max-width: 552px) {
  footer {
    .row {
      grid-template-columns: 1fr 2fr !important;
    }
  }
}

@media screen and(max-width: 375px) {
  footer {
    text-align: center;
    .row {
      grid-template-columns: 1fr !important;
      .social-media {
        justify-content: center !important;
      }
    }
  }
}
</style>
