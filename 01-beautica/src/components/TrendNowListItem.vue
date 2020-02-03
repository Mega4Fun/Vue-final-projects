<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <ul v-show="list.open">
      <li v-for="(item, index) in list.sublist" :key="index">
        <a href="#">
          {{ item }}
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    enter(el) {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      setTimeout(() => {
        el.style.height = height;
      });
    },

    afterEnter(el) {
      el.style.height = "auto";
    },

    leave(el) {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    }
  }
};
</script>

<style scoped lang="scss">
ul {
  li {
    border-top: 1px solid #77777730;
    font-size: 13px;
    padding: 7px 15px;

    a {
      color: #616161;
      text-transform: capitalize;
      font-size: 11px;
      &:hover {
        color: #e9446e;
      }
    }
  }
}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
