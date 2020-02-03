<template>
  <div class="product-page font">
    <div class="container">
      <div class="project-navigation">
        <router-link tag="a" to="/">Home</router-link>
        <i class="fas fa-caret-right"></i>
        <router-link tag="a" to="/">#Trend Now</router-link>
      </div>
      <div class="product-page-wrapper">
        <!-- Show by categories -->
        <div class="show-by-categories">
          <ul class="our-categories-list">
            <!-- Trend now menu -->
            <TrendNow></TrendNow>
            <!-- Trend now menu -->
          </ul>
        </div>
        <!-- Show by categories -->

        <!-- Product details section -->
        <div class="mega-wrapper">
          <div class="all-about-product">
            <div class="product-img-wrapper">
              <img :src="require('@/assets/images/products/product-4.webp')" alt="" />
            </div>
            <div class="product-details-wrapper">
              <h3>[Sample] Coco Lee, gladiator bag</h3>
              <div class="product-rating">
                <div class="stars-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <a href="#" class="customer-review-count">
                  2 customer review
                </a>
                <a href="#" class="write-review">
                  write a review
                </a>
              </div>
              <div class="product-price">$92.00</div>
              <div class="product-shipping-details">
                <ul>
                  <li>
                    <span>sku</span>
                    <span>CLGB</span>
                  </li>
                  <li>
                    <span>weight</span>
                    <span>2.00 LBS</span>
                  </li>
                  <li>
                    <span>gift wrapping</span>
                    <span>option available</span>
                  </li>
                  <li>
                    <span>shipping</span>
                    <span>$10.00 (Fixed Shipping Cost)</span>
                  </li>
                </ul>
              </div>
              <div class="product-quantity">
                <button @click="productQty--"><i class="fas fa-minus"></i></button>
                <span class="quantity font-size-14">{{ productQty }}</span>
                <button @click="productQty++"><i class="fas fa-plus"></i></button>
              </div>
              <div class="product-cart-actions">
                <form action="" method="post">
                  <button type="submit" id="add-to-cart">add to cart</button>
                </form>
              </div>
            </div>
          </div>
          <div class="features-products-tabs">
            <ul>
              <li @click="activeTab = '1'" :class="{ active: activeTab === '1' }">description</li>
              <li @click="activeTab = '2'" :class="{ active: activeTab === '2' }">reviews</li>
              <li @click="activeTab = '3'" :class="{ active: activeTab === '3' }">
                shipping & returns
              </li>
            </ul>
            <!-- Tabs content -->
            <div class="product-tab-content">
              <div class="tab-1 mr-t-30" v-if="activeTab === '1'">
                <div class="tab-1-content">
                  <dd>How to write product descriptions that sell</dd>
                  <span>
                    One of the best things you can do to make your store successful is invest some
                    time in writing great product descriptions. You want to provide detailed yet
                    concise information that will entice potential customers to buy.
                  </span>

                  <dd class="mr-t-30">Think like a consumer</dd>
                  <span>
                    Think about what you as a consumer would want to know, then include those
                    features in your description. For clothes: materials and fit. For food:
                    ingredients and how it was prepared. Bullets are your friends when listing
                    features — try to limit each one to 5-8 words.
                  </span>

                  <dd class="mr-t-30">Keep it simple</dd>
                  <span>
                    Provide enough detail to help consumers make an informed decision, but don’t
                    overwhelm with a laundry list of features or flowery language. Densely pack your
                    descriptions with useful information and watch products fly off the shelf.
                  </span>
                </div>
              </div>
              <div class="tab-2 mr-t-30" v-if="activeTab === '2'">
                <a href="#" class="write-review">write a review</a>
                <div class="product-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="mr-t-10 font-size-13">Posted by holaaaa on 29th Aug 2019</p>
                <p class="mr-t-10 font-size-13">EWRwe sf sd f SFWEQWE ASD</p>
                <div class="custom-hr mr-t-10"></div>
                <div class="product-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p class="mr-t-10 font-size-13">Posted by dfsvc on 22nd Jan 2018</p>
                <p class="mr-t-10 font-size-13">dvdsv</p>
              </div>
              <div class="tab-3 mr-t-30" v-if="activeTab === '3'">
                <div class="tab-3-content">
                  <dd>RETURNS POLICY</dd>
                  <span>
                    You may return most new, unopened items within 30 days of delivery for a full
                    refund. We'll also pay the return shipping costs if the return is a result of
                    our error (you received an incorrect or defective item, etc.).
                  </span>
                  <span class="mr-t-15 d-block">
                    You should expect to receive your refund within four weeks of giving your
                    package to the return shipper, however, in many cases you will receive a refund
                    more quickly. This time period includes the transit time for us to receive your
                    return from the shipper (5 to 10 business days), the time it takes us to process
                    your return once we receive it (3 to 5 business days), and the time it takes
                    your bank to process our refund request (5 to 10 business days).
                  </span>
                  <span class="mr-t-15 d-block">
                    If you need to return an item, simply login to your account, view the order
                    using the "Complete Orders" link under the My Account menu and click the Return
                    Item(s) button. We'll notify you via e-mail of your refund once we've received
                    and processed the returned item.
                  </span>

                  <dd class="mr-t-30">SHIPPING</dd>
                  <span>
                    We can ship to virtually any address in the world. Note that there are
                    restrictions on some products, and some products cannot be shipped to
                    international destinations.
                  </span>

                  <dd class="mr-t-30">Keep it simple</dd>
                  <span>
                    Provide enough detail to help consumers make an informed decision, but don’t
                    overwhelm with a laundry list of features or flowery language. Densely pack your
                    descriptions with useful information and watch products fly off the shelf.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Product details section -->
    </div>
  </div>
</template>

<script>
import TrendNow from "@/components/TrendNow";

export default {
  name: "productPage",
  data() {
    return {
      productQty: 1,
      activeTab: "1"
    };
  },
  components: {
    TrendNow
  }
};
</script>

<style scoped lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
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
</style>
