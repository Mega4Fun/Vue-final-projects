<template>
  <div>
    <ul class="trend-now-list">
      <li v-for="(item, index) in trendNow" :key="index" @click="item.open = !item.open">
        <div>
          {{ item.title }}
          <i class="fas fa-caret-right" :class="{ open: item.open }"></i>
        </div>
        <TrendNowListItem :list="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import TrendNowListItem from "@/components/TrendNowListItem";
export default {
  data() {
    return {
      trendNow: [
        {
          title: "#Trend Now",
          open: true,
          sublist: [
            "maecenas commodos",
            "malesuada sarcus",
            "fermentturm loremous",
            "habnitiass molateas",
            "fermentum loemousa",
            "maecenas commodos"
          ]
        },
        {
          title: "#brands",
          open: true,
          sublist: [
            "coco lee",
            "collette",
            "anna",
            "frech conecton",
            "jimmy choo",
            "mango",
            "sass & bide",
            "burberry"
          ]
        },
        {
          title: "#beauty accessories",
          open: true,
          sublist: ["nail", "beauty accessories", "body art", "makeup tools", "fragrance"]
        }
      ]
    };
  },
  components: {
    TrendNowListItem
  }
};
</script>

<style scoped lang="scss">
.trend-now-list {
  li {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px 0;
      font-size: 13px;
      color: #000;
      text-transform: uppercase;
      font-weight: 600;
      border-top: 2px solid #000;
      cursor: pointer;
      padding: 10px 0;
    }
    i {
      color: #777;
      font-size: 12px;
      transition: all 0.5s ease-in-out;

      &.open {
        transform: rotateZ(90deg);
      }
    }
  }
}
</style>
