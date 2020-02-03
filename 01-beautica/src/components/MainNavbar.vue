<template>
  <div class="main-navbar">
    <div class="container">
      <div class="main-navbar-content">
        <ul>
          <li @mouseover="showtrendNowMenu = true" @mouseleave="showtrendNowMenu = false">
            <router-link tag="a" to="/trend-now">
              #trend now
              <i class="fas fa-chevron-down"></i>
            </router-link>
            <div class="trend-now-menu" v-show="showtrendNowMenu">
              <ul class="trend-now-submenu">
                <li>
                  <a href="#">maecenas commodos</a>
                </li>
                <li>
                  <a href="#">malesuada sarcus</a>
                </li>
                <li>
                  <a href="#">banitasse milateas</a>
                </li>
                <li>
                  <a href="#">maecenas commodoso</a>
                </li>
                <li>
                  <a href="#">fermentum loremousa</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <router-link tag="a" to="/makeup">makeup</router-link>
          </li>
          <li>
            <router-link tag="a" to="/nail">nail</router-link>
          </li>

          <li @mouseover="showMegaMenu = true" @mouseleave="showMegaMenu = false">
            <router-link tag="a" to="/beauty-accessories">
              beauty accessories
              <i class="fas fa-chevron-down"></i>
            </router-link>
          </li>

          <li @mouseover="showMegaMenu = true" @mouseleave="showMegaMenu = false">
            <router-link tag="a" to="/body-art">
              body art
              <i class="fas fa-chevron-down"></i>
            </router-link>
            <div class="beauty-accessories-menu" v-show="showMegaMenu">
              <ul class="beauty-accessories-mega-menu">
                <div class="container">
                  <div class="custom-row">
                    <div class="column">
                      <div class="column-title">lorem de dorus</div>
                      <a href="#">cosoplios</a>
                      <a href="#">destibukum maruris</a>
                      <a href="#">fermentum loremous</a>
                      <a href="#">habitasse molateas</a>
                      <a href="#">maecenase commodos</a>
                      <a href="#">malesuada sarcus</a>
                      <a href="#">mallancelos</a>
                    </div>
                    <div class="column">
                      <div class="column-title">millancelos a lanos</div>
                      <a href="#">commopolis</a>
                      <a href="#">fermentum loremous</a>
                      <a href="#">malesuade sarcus</a>
                      <a href="#">maliesauad srcusso</a>
                      <a href="#">millancelos</a>
                    </div>
                    <div class="column">
                      <div class="column-title">lynn cospoplis</div>
                      <a href="#">cosmmpols</a>
                      <a href="#">destubulum maruies</a>
                      <a href="#">dermentum lroemou</a>
                      <a href="#">habbtasse molateas</a>
                      <a href="#">maecenas commodos</a>
                      <a href="#">malesuada sarcus</a>
                      <a href="#">mailanceol</a>
                    </div>
                    <div class="column">
                      <div class="column-title">nor loremirus</div>
                      <a href="#">cosmpoplis</a>
                      <a href="#">fermentum loremous</a>
                      <a href="#">habitasse molateas</a>
                      <a href="#">maescenas commodos</a>
                      <a href="#">malesuada sarcus</a>
                      <a href="#">milcelos</a>
                    </div>
                    <div class="column">
                      <div class="column-title">accessories</div>
                      <a href="#">cosmmpols</a>
                      <a href="#">destubulum maruies</a>
                      <a href="#">dermentum lroemou</a>
                      <a href="#">mailanceol</a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </li>
          <li>
            <router-link tag="a" to="/makeup-tools">makeup tools</router-link>
          </li>
          <li>
            <router-link tag="a" to="/fragance">fragance</router-link>
          </li>
          <li>
            <router-link tag="a" to="/lookbook">lookbook</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showtrendNowMenu: false,
      showMegaMenu: false
    };
  }
};
</script>

<style scoped lang="scss">
.main-navbar {
  .main-navbar-content {
    ul {
      list-style: none;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      li {
        padding: 10px;
        margin: 0 5px;

        a {
          color: #000;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.1s ease-in-out;

          &:hover {
            text-decoration: none;
            color: #e9446e;
          }

          i {
            font-size: 10px;
            color: #656464e0;
            margin-left: 6px;
          }
        }
      }

      .trend-now-menu {
        .trend-now-submenu {
          position: absolute;
          display: flex;
          flex-direction: column;
          min-width: 200px;
          background: #fff;
          border: 1px solid #9e9e9e2b;
          z-index: 100;

          li {
            border-top: 1px solid #9e9e9e2b;
            width: 100%;
            padding: 7px;

            &:hover {
              background-color: #80808017;
            }
            a {
              color: #000;
              font-weight: 400;
              text-transform: capitalize;
              font-size: 11px;

              &:hover {
                color: #e9446e;
                border-bottom: 1px dotted #e9446e;
              }
            }
          }
        }
      }

      .beauty-accessories-menu {
        .beauty-accessories-mega-menu {
          position: absolute;
          left: 0;
          width: 100%;
          padding: 20px 0;
          z-index: 100;

          .custom-row {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            padding: 40px 20px;
            box-shadow: 0 0 2px 1px #cecece6b;
            background: #fff;

            .column {
              display: flex;
              flex-direction: column;

              .column-title {
                text-transform: uppercase;
                font-weight: 600;
                font-size: 12px;
                color: #000;
                margin-bottom: 10px;
              }

              a {
                color: #333333bf;
                font-weight: 500;
                text-transform: capitalize;
                margin: 8px 0;
                font-size: 13px;

                &:hover {
                  color: #e9446e;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and(max-width: 992px) {
  .main-navbar {
    display: none !important;
  }
}
</style>
