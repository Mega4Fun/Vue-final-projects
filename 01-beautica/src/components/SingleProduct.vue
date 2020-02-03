<template>
  <div class="single-product">
    <div>
      <div class="img-wrapper">
        <img :src="imgSrc" alt="" id="singleProductImg" />
        <div class="quick-view" @click="emitModal">quick view</div>
        <div class="new-offer">
          new
        </div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column" class="product-details">
      <router-link tag="a" to="/product" class="brandName">{{ brandName }}</router-link>
      <a href="#" class="font-size-14" v-text="brodName"></a>
      <span class="product-price"
        ><b>${{ productPrice }}</b></span
      >
      <p class="product-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis accusamus
        molestias quod quidem laudantium porro iure. At, commodi porro.
      </p>
      <p class="product-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis accusamus
        molestias quod quidem laudantium porro iure. At, commodi porro.
      </p>
      <div class="product-rating">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="add-to-cart">
        <form action="" method="post">
          <button type="submit" class="single-product-cart">add to cart</button>
        </form>
      </div>
    </div>
    <!-- <a href="#" class="out-of-stock">out of stock</a> -->
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    brandName: {
      type: String,
      required: false
    },
    brodName: {
      type: String,
      required: false
    },
    productPrice: {
      type: Number,
      required: false
    },
    inventory: {
      type: Number,
      required: false
    }
  },
  methods: {
    emitModal() {
      this.$emit("openModal", this.imgSrc);
    }
  }
};
</script>

<style scoped lang="scss">
.hooper {
  .hooper-slide {
    display: flex;
    flex-direction: column;

    img {
      width: 200px !important;
      height: 100%;
    }
  }
}
.single-product {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    .add-to-cart {
      button {
        opacity: 1;
      }
    }
    .out-of-stock {
      opacity: 1;
    }
    .img-wrapper {
      .quick-view {
        opacity: 1;
      }
    }
    .product-rating {
      opacity: 1;
    }
  }

  .img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .quick-view {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff;
      text-transform: uppercase;
      padding: 5px 7px;
      font-weight: 600;
      color: #000;
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      font-size: 12px;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
    .new-offer {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #000;
      color: #fff;
      text-transform: uppercase;
      font-size: 12px;
      padding: 2px 5px;
      font-weight: 600;
    }
  }
  .brandName {
    font-weight: 600;
    color: #000000;
    font-size: 13px;
  }

  a {
    color: #232323;
    font-size: 11px;
    margin: 10px 0;
    &:nth-child(3) {
      margin: 0 !important;
    }
    &:hover {
      text-decoration: none;
    }
  }
  .product-price {
    margin-bottom: 20px;
    margin-top: 5px;
  }
  .product-description {
    display: none;
  }
  .product-rating {
    font-size: 11px;
    margin-bottom: 10px;
    opacity: 0;

    i {
      margin-right: 2px;
      color: #e7040f;
    }
  }

  .add-to-cart {
    button {
      background-color: #000000;
      color: #ffffff;
      display: inline-block;
      padding: 10px 20px;
      font-weight: bold;
      border: none;
      text-transform: uppercase;
      font-size: 12px;
      opacity: 0;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      border-radius: 4px;

      &:hover {
        background-color: #e82b1a;
      }
    }
  }
  .out-of-stock {
    background-color: #f2f2f2;
    color: #777;
    display: inline-block;
    padding: 13px 50px;
    font-weight: bold;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0;
    cursor: pointer;
    opacity: 0;
  }
}

@media screen and(max-width: 552px) {
  .single-product {
    .product-rating {
      opacity: 1 !important;
    }
    .add-to-cart {
      button {
        opacity: 1 !important;
      }
    }
  }
}
</style>
