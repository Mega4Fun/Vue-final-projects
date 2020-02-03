<template>
  <div>
    <div class="main-header">
      <div class="container">
        <div class="main-header-content">
          <div class="search-products">
            <input type="text" id="searchForProduct" placeholder="Search for products" />
          </div>
          <div class="logo">
            <router-link tag="a" to="/">
              <img :src="require('@/assets/logo.webp')" alt="" />
            </router-link>
          </div>
          <div class="user-actions">
            <div class="hi-customer">
              <div>Hi Customer</div>
              <span @click="toggleLoginForm = !toggleLoginForm">Login</span>

              <!-- Login from -->
              <form
                action=""
                method="POST"
                id="loginFrom"
                autocomplete="off"
                v-show="toggleLoginForm"
              >
                <h5>login</h5>
                <div class="form-group">
                  <div class="email-input">
                    <input type="email" name="email" id="useremail" placeholder="Email address" />
                  </div>

                  <div class="password-input">
                    <input type="password" name="password" id="userpwd" placeholder="Password" />
                  </div>

                  <button type="submit" id="login-button">login</button>

                  <!-- Forget your password -->
                  <a href="#" id="forget-password">forget your password</a>
                  <!-- Forget your password -->

                  <!-- Create new accoutn -->
                  <router-link tag="a" to="/register" id="create-new-account"
                    >create new account</router-link
                  >
                  <!-- Create new accoutn -->
                </div>
              </form>
              <!-- Login from -->

              or
              <router-link tag="a" to="/register">Register</router-link>
            </div>
            <div class="vertical-line"></div>
            <div class="shopping-cart">
              <router-link tag="a" to="/wishlist" class="wishlist">
                <i class="fas fa-heart"></i>
              </router-link>
              <div class="in-your-cart" @click="showCartMenu = !showCartMenu">
                <img
                  :src="require('@/assets/images/shopping-bag.png')"
                  id="header-shopping-cart"
                  alt=""
                />
                <span class="cart-products">1</span>

                <!-- Show product in the cart -->
                <div class="product-in-your-cart" v-show="showCartMenu">
                  <div class="cart-product-details">
                    <div class="product-img">
                      <img
                        :src="require('@/assets/images/products/product-1.webp')"
                        id="product-example-img"
                        alt=""
                      />
                    </div>

                    <div class="product-details">
                      <div class="product-name">coco lee</div>
                      <a href="#" class="product-category">
                        [sanple] coco lee, coins are humis brown leather bag
                      </a>
                      <div class="product-qty">
                        <span>1 X</span>
                        <span class="product-price"> $200.00</span>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <router-link tag="a" to="checkout" id="checkout-now">check out now</router-link>
                  <router-link tag="a" to="/cart" id="view-your-cart">view cart</router-link>

                  <span class="or-use">-- or use --</span>
                  <a href="#" class="checkout-with-paypal">
                    <img :src="require('@/assets/images/checkout-logo-small.png')" alt="" />
                  </a>
                </div>
                <!-- Show product in the cart -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-main-header">
      <div class="open-side-bar" @click="showSideNav">
        <i class="fas fa-bars"></i>
      </div>
      <router-link tag="a" to="/" class="logo">
        <img :src="require('@/assets/logo.webp')" alt="" />
      </router-link>

      <div class="shopping-cart" @click="showCartMenu = !showCartMenu">
        <img :src="require('@/assets/images/shopping-bag.png')" alt="" />
        <!-- Show product in the cart -->
        <div class="product-in-your-cart" v-show="showCartMenu">
          <div class="cart-product-details">
            <div class="product-img">
              <img
                :src="require('@/assets/images/products/product-1.webp')"
                id="product-example-img"
                alt=""
              />
            </div>

            <div class="product-details">
              <div class="product-name">coco lee</div>
              <a href="#" class="product-category">
                [sanple] coco lee, coins are humis brown leather bag
              </a>
              <div class="product-qty">
                <span>1 X</span>
                <span class="product-price"> $200.00</span>
              </div>
            </div>
          </div>

          <hr />

          <router-link tag="a" to="checkout" id="checkout-now">check out now</router-link>
          <router-link tag="a" to="/cart" id="view-your-cart">view cart</router-link>

          <span class="or-use">-- or use --</span>
          <a href="#" class="checkout-with-paypal">
            <img :src="require('@/assets/images/checkout-logo-small.png')" alt="" />
          </a>
        </div>
        <!-- Show product in the cart -->
        <span class="cart-products">1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSideNav() {
      document.getElementById("sideNav").style.width = "350px";
    }
  },
  data() {
    return {
      toggleLoginForm: false,
      showCartMenu: false
    };
  }
};
</script>

<style scoped lang="scss">
.main-header {
  padding: 40px 0;

  .main-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search-products {
      input {
        border: 1px solid #8080806e;
        padding: 10px 25px;
        font-size: 13px;
        color: #333;

        &:focus {
          outline: 0;
        }
      }
    }

    .user-actions {
      display: flex;

      .hi-customer {
        position: relative;

        div:first-of-type {
          color: #000;
          font-weight: 500;
          font-size: 16px;
          text-transform: uppercase;
        }

        span {
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
        }
        a {
          color: #000;
          font-size: 12px;
          font-weight: 500;

          &:hover {
            text-decoration: none;
            color: #e9446e;
          }
        }
      }

      // Login from
      #loginFrom {
        position: absolute;
        right: 0;
        top: 65px;
        padding: 20px;
        z-index: 3000;
        background: #fff;
        min-width: 280px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

        h5 {
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 600;
        }

        .email-input {
          margin: 10px 0;

          #useremail {
            padding: 12px 15px;
            outline: 0;
            font-size: 12px;
            width: 100%;
            color: #333;
            border: 1px solid #cbcbcb;
            border-radius: 2px;
          }
        }

        .password-input {
          margin: 10px 0;

          #userpwd {
            padding: 12px 15px;
            outline: 0;
            font-size: 12px;
            width: 100%;
            color: #333;
            border: 1px solid #cbcbcb;
            border-radius: 2px;
          }
        }

        #login-button {
          display: block;
          width: 100%;
          background: #fff;
          color: #000;
          text-transform: uppercase;
          padding: 10px 0;
          border: 1px solid #cbcbcb;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.4s ease-in-out;
          border-radius: 2px;

          &:hover {
            background-color: #000 !important;
            color: #fff !important;
          }

          &:focus {
            outline: 0;
          }
        }

        #forget-password {
          display: inline-block;
          margin: 15px 0;
          color: #000;
          text-transform: capitalize;
          border-bottom: 1px dotted #000;
        }

        #create-new-account {
          display: block;
          background: #000;
          color: #fff !important;
          text-align: center;
          padding: 13px 0;
          border-radius: 2px;
          margin-top: 15px;
          transition: all 0.4s ease-in-out;

          &:hover {
            background-color: #e82b1a !important;
          }
        }
      }

      .vertical-line {
        width: 1px;
        background-color: #9e9e9e2b;
        margin: 0 20px;
      }

      .shopping-cart {
        display: flex;
        align-items: center;

        .wishlist {
          margin-right: 20px;
          font-size: 25px;
          cursor: pointer;

          i {
            color: #000;
            transition: all 0.2s ease-in-out;

            &:hover {
              color: #e9446e;
            }
          }
        }

        .in-your-cart {
          position: relative;

          #header-shopping-cart {
            cursor: pointer;
            max-width: 30px;
            max-height: 30px;
          }

          .product-in-your-cart {
            position: absolute;
            background: #fff;
            top: 50px;
            right: 0;
            z-index: 9999;
            width: 320px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;

            #product-example-img {
              width: 65px;
              height: 65px;
              margin-right: 10px;
              border: 1px solid #ebebeb;
            }

            .cart-product-details {
              display: flex;
              justify-content: space-between;

              .product-name {
                text-transform: uppercase;
                font-size: 11px;
                font-weight: 600;
                margin-bottom: 10px;
              }

              .product-category {
                color: #000;
                font-size: 13px;

                &:hover {
                  color: #e7040f;
                }
              }

              .product-qty {
                font-size: 12px;
                color: #000;
                margin-top: 10px;

                span:last-of-type {
                  font-weight: 500;
                }
              }
            }

            #checkout-now {
              background-color: #000;
              color: #fff;
              width: 100%;
              border-radius: 4px;
              padding: 13px 0;
              display: block;
              text-align: center;
              text-transform: uppercase;
              font-size: 12px;
              font-weight: 500;
              margin-bottom: 15px;
              transition: all 0.3s ease-in-out;

              &:hover {
                background-color: #e82b1a;
              }
            }

            #view-your-cart {
              display: block;
              width: 100%;
              background: #fff;
              color: #000;
              text-transform: uppercase;
              padding: 10px 0;
              border: 1px solid #cbcbcb;
              font-size: 13px;
              font-weight: 600;
              transition: all 0.4s ease-in-out;
              border-radius: 2px;
              text-align: center;
              margin-bottom: 15px;

              &:hover {
                background-color: #000;
                color: #fff;
              }
            }

            .or-use {
              display: block;
              text-align: center;
              font-size: 12px;
              margin-bottom: 15px;
            }
          }
          .cart-products {
            position: absolute;
            top: -14px;
            left: 13px;
            background-color: #e7040f;
            color: #fff;
            border-radius: 50%;
            display: block;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 13px;
          }
          .checkout-with-paypal {
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
.mobile-main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none !important;
  .open-side-bar {
    i {
      font-size: 20px;
      color: #333;
      cursor: pointer;
    }
  }
  .logo {
    img {
      max-width: 120px;
    }
  }
  .shopping-cart {
    position: relative;

    .product-in-your-cart {
      position: absolute;
      background: #fff;
      top: 50px;
      right: 0;
      z-index: 9999;
      width: 320px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      padding: 20px;

      #product-example-img {
        width: 65px;
        height: 65px;
        margin-right: 10px;
        border: 1px solid #ebebeb;
      }

      .cart-product-details {
        display: flex;
        justify-content: space-between;

        .product-name {
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .product-category {
          color: #000;
          font-size: 13px;

          &:hover {
            color: #e7040f;
          }
        }

        .product-qty {
          font-size: 12px;
          color: #000;
          margin-top: 10px;

          span:last-of-type {
            font-weight: 500;
          }
        }
      }

      #checkout-now {
        background-color: #000;
        color: #fff;
        width: 100%;
        border-radius: 4px;
        padding: 13px 0;
        display: block;
        text-align: center;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 15px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #e82b1a;
        }
      }

      #view-your-cart {
        display: block;
        width: 100%;
        background: #fff;
        color: #000;
        text-transform: uppercase;
        padding: 10px 0;
        border: 1px solid #cbcbcb;
        font-size: 13px;
        font-weight: 600;
        transition: all 0.4s ease-in-out;
        border-radius: 2px;
        text-align: center;
        margin-bottom: 15px;

        &:hover {
          background-color: #000;
          color: #fff;
        }
      }

      .or-use {
        display: block;
        text-align: center;
        font-size: 12px;
        margin-bottom: 15px;
      }
    }
    img {
      max-width: 30px !important;
    }

    .cart-products {
      position: absolute;
      top: -14px;
      left: 13px;
      background-color: #e7040f;
      color: #fff;
      border-radius: 50%;
      display: block;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 13px;
    }
  }
}

@media screen and(max-width: 991px) {
  .main-header {
    display: none !important;
  }
  .mobile-main-header {
    display: flex !important;
    padding: 20px;
  }
}
</style>
