<template>
  <div class="cart-page">
    <div class="container">
      <div class="project-navigation">
        <router-link tag="a" to="/">Home</router-link>
        <i class="fas fa-caret-right"></i>
        <router-link tag="a" to="/">Your Cart</router-link>
      </div>
      <h5>Your Cart</h5>
      <span class="cart-product-items">(2 items)</span>

      <div class="banner-message mr-t-20" v-show="bannerMsg">
        <div class="alert alert-primary alert-dismissible fade show  font-size-12" role="alert">
          Congratulations Banner Message VN
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            @click="bannerMsg = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <!-- Show all product in the cart -->
      <div class="shopping-cart-products">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="product-wrapper">
              <img :src="require('@/assets/images/products/product-1.webp')" alt="" />
              <div class="product-details">
                <div class="product-name">coco lee</div>
                <div class="product-category">
                  [Sample] Coco Lee, coins are Kumis brown leather bag
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="product-details-wrapper">
              <div class="product-net-price">$200.00</div>

              <div class="product-quantity">
                <button @click="productQty--"><i class="fas fa-minus"></i></button>
                <span class="quantity font-size-14">{{ productQty }}</span>
                <button @click="productQty++"><i class="fas fa-plus"></i></button>
              </div>

              <div class="cart-total">$430.00</div>
              <form action="" method="post">
                <button type="submit" id="remove-product">
                  <i class="far fa-trash-alt"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Show all product in the cart -->

      <!-- Checkout details -->
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="checkout-details">
            <ul>
              <li>
                <span>subtotal:</span>
                <span>$430.00</span>
              </li>
              <li>
                <span>shipping:</span>
                <span>add info</span>
              </li>
              <li>
                <span>coupon code:</span>
                <span>add coupon</span>
              </li>
              <li>
                <span>gift certificate:</span>
                <span>gift certificate</span>
              </li>
              <li>
                <span>grand total:</span>
                <span>$450.00</span>
              </li>
            </ul>

            <router-link tag="a" to="/checkout" class="proceed-to-checkout"
              >proceed to checkout</router-link
            >
          </div>
        </div>
      </div>
      <!-- Checkout details -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerMsg: true,
      productQty: 2
    };
  }
};
</script>

<style scoped lang="scss">
.cart-page {
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
    font-weight: 600;
    font-size: 15px;
    display: inline-block;
  }
  .cart-product-items {
    color: #777;
    font-size: 12px;
    margin-left: 10px;
    text-transform: uppercase;
  }

  .shopping-cart-products {
    margin: 40px 0;
    background: #fafafa;
    padding: 60px;

    & > .row {
      background-color: #fff;
      padding: 30px 0;

      .product-wrapper {
        display: flex;
        align-items: center;

        img {
          width: 118px;
          height: 118px;
          border: 1px solid #ebebeb;
          margin-right: 30px;
        }

        .product-name {
          text-transform: uppercase;
          font-size: 12px;
          color: #000;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .product-category {
          font-size: 15px;
        }
      }

      .product-details-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;

        .product-net-price {
          color: #000;
          font-size: 15px;
          font-weight: 600;
        }

        .product-quantity {
          border: 1px solid #80808085;
          max-width: 150px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;

          span {
            padding: 10px 20px;
          }

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

        .cart-total {
          color: #000;
          font-size: 15px;
          font-weight: 600;
        }

        #remove-product {
          background-color: transparent;
          border: 0;
          outline: 0;
          i {
            color: red;
            font-size: 20px;
          }
        }
      }
    }
  }

  .checkout-details {
    background-color: #fafafa;
    padding: 20px;

    ul {
      background-color: #fff;
      padding: 20px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #9e9e9e5c;
        padding: 10px 0;
        margin-bottom: 6px;

        span:first-of-type {
          color: #000;
          text-transform: capitalize;
          font-weight: 500;
          font-size: 14px;
        }
        span:last-of-type {
          color: #000;
          text-transform: capitalize;
          font-size: 12px;
        }
      }

      li:last-of-type {
        border: none;
      }
    }

    .proceed-to-checkout {
      display: block;
      background: #000;
      color: #fff !important;
      text-align: center;
      padding: 13px 0;
      border-radius: 2px;
      margin-top: 15px;
      transition: all 0.4s ease-in-out;
      text-transform: uppercase;
      font-weight: 800;

      &:hover {
        background-color: #e82b1a !important;
      }
    }
  }
}

@media screen and(max-width: 552px) {
  .cart-page {
    .shopping-cart-products {
      padding: 0 !important;
    }
  }
}
</style>
