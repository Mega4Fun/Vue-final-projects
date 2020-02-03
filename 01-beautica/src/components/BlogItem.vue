<template>
  <div class="blog-item text-center">
    <a href="#">
      <img :src="imgSrc" alt="" />
    </a>
    <p>
      <slot name="postedTime"></slot>
    </p>
    <a href="#" id="postBy">
      <slot name="postedBy"></slot>
    </a>
    <p>
      <slot name="description"></slot>
    </p>
    <a href="#" class="read-more">read more</a>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.blog-item {
  img {
    width: 100%;
    height: 100%;
  }
  p:first-of-type {
    color: #777;
    font-size: 13px;
    margin: 7px 0;
  }
  p:last-of-type {
    font-size: 13px;
    color: #525252;
    margin: 27px 0;
  }
  #postBy {
    color: #000;
    font-weight: bold;
    font-size: 22px;
  }
  .read-more {
    background: #000;
    color: #fff;
    padding: 10px 52px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #e7040f;
    }
  }
}

@media screen and(max-width: 552px) {
  .blog-item {
    margin-bottom: 30px;
  }
}
</style>
