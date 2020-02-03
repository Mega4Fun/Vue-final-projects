<template>
  <div class="wishlist-page">
    <div class="container">
      <div class="project-navigation">
        <router-link tag="a" to="/">Home</router-link>
        <i class="fas fa-caret-right"></i>
        <router-link tag="a" to="/">Wishlist</router-link>
      </div>
      <h5>wishlist</h5>

      <div class="row mr-t-40">
        <div class="col-md-6">
          <!-- Login form -->
          <form action="" method="post" autocomplete="off">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" class="form-control" id="email" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" required />
            </div>

            <button type="submit" id="sign-in">sign in</button>
          </form>
          <!-- Login form -->
        </div>
        <div class="col-md-6">
          <div class="new-customer">
            <h5>new customer</h5>
            <p>Create an account with us and you'll be able to:</p>
            <ul>
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your wish list</li>
            </ul>

            <router-link tag="a" to="/register" id="createAcouunt">create acccount</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wishlist-page {
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
  }

  #sign-in {
    display: block;
    background: #000;
    color: #fff;
    text-align: center;
    padding: 15px 30px;
    border-radius: 2px;
    margin-top: 15px;
    transition: all 0.4s ease-in-out;
    text-transform: uppercase;
    border: none;
    font-size: 12px;
    font-weight: 600;

    &:hover {
      background-color: #e82b1a !important;
    }
  }

  .new-customer {
    background: #fafafa;
    padding: 30px 40px;

    h5 {
      color: #e82b1a;
    }

    p {
      font-size: 13px;
      margin: 15px 0;
    }

    ul {
      list-style: disc !important;

      li {
        font-size: 14px;
        margin: 5px 0;
      }
    }

    #createAcouunt {
      display: inline-block;
      background: #000;
      color: #fff;
      text-align: center;
      padding: 15px 30px;
      border-radius: 2px;
      margin-top: 15px;
      transition: all 0.4s ease-in-out;
      text-transform: uppercase;
      border: none;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        background-color: #e82b1a !important;
      }
    }
  }
}
</style>
