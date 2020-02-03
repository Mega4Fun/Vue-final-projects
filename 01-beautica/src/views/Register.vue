<template>
  <div class="register-page">
    <div class="container">
      <div class="register-page-content">
        <div class="project-navigation">
          <router-link tag="a" to="/">Home</router-link>
          <i class="fas fa-caret-right"></i>
          <router-link tag="a" to="/">Create Account</router-link>
        </div>
      </div>

      <h5>new account</h5>

      <!-- Register inputs -->
      <form action="" method="post">
        <div class="row mr-t-40">
          <div class="col-md-6">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="emailAddress">Eamil Address</label>
                <input type="email" class="form-control" id="emailAddress" />
              </div>
              <div class="form-group col-md-12">
                <label for="confirmPwd">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPwd" />
              </div>
              <div class="form-group col-md-12">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" />
              </div>
              <div class="form-group col-md-12">
                <label for="addressLine1">Address Line 1</label>
                <input type="text" class="form-control" id="addressLine1" />
              </div>
              <div class="form-group col-md-12">
                <label for="companyName">Company Name</label>
                <input type="text" class="form-control" id="companyName" />
              </div>
              <div class="form-group col-md-12">
                <label for="province">State/Province</label>
                <select id="province" class="form-control">
                  <option value="choose a state" disabled>Choose a state</option>
                  <option value="america">America</option>
                  <option value="germany">Germany</option>
                  <option value="egypt">Egypt</option>
                  <option value="canda">Canda</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="phone">Phone Number</label>
                <input type="text" class="form-control" id="phone" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="form-group col-md-12">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="form-group col-md-12">
                <label for="country">Country</label>
                <input type="text" class="form-control" id="country" />
              </div>
              <div class="form-group col-md-12">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" />
              </div>
              <div class="form-group col-md-12">
                <label for="addressLine2">Address Line 2</label>
                <input type="text" class="form-control" id="addressLine2" />
              </div>
              <div class="form-group col-md-12">
                <label for="city">Suburb/City</label>
                <input type="text" class="form-control" id="city" />
              </div>
              <div class="form-group col-md-12">
                <label for="postcode">Zip/Postcode</label>
                <input type="text" class="form-control" id="postcode" />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" id="creat-account">create account</button>
      </form>
      <!-- Register inputs -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.register-page {
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

  label {
    font-size: 13px;
    color: #000;
    font-weight: 500;
  }

  #creat-account {
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
}
</style>
