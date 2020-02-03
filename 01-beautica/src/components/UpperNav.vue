<template>
  <div>
    <div class="upper-nav">
      <div class="container">
        <div class="upper-nav-content">
          <div class="left-side">
            <i class="fas fa-search" @click="showSearchInput = !showSearchInput"></i>
            <p>3 Free Samples with any Purchase</p>
          </div>
          <div class="right-side">
            <p>
              Order Online 0800 108 8822 (UK) or + 44 203 471 3000
            </p>
            <a href="#" class="mr-r-30 mr-l-30">Gift Certifitions</a>
            <a href="#">My Account</a>
          </div>
        </div>
      </div>
    </div>
    <div class="search-input" v-show="showSearchInput">
      <input type="text" placeholder="Search for products" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchInput: false
    };
  }
};
</script>

<style scoped lang="scss">
.upper-nav {
  background-color: #000000;
  color: #fff;

  .upper-nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    font-size: 13px;

    p {
      margin: 0;
    }
    .left-side {
      i {
        cursor: pointer;
        font-size: 15px;
        display: none;
      }
    }
    .right-side {
      display: flex;
      a {
        color: #ffffff;
      }
    }
  }
}
.search-input {
  input {
    display: block;
    padding: 15px 5px;
    width: 100%;
    border: 1px solid #9e9e9e57;
  }
}

@media screen and(max-width: 992px) {
  .upper-nav-content {
    .left-side {
      p {
        display: none;
      }
      i {
        display: block !important;
      }
    }

    .right-side {
      p {
        display: none !important;
      }
    }
  }
}
</style>
