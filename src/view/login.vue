<template>
  <div>

  </div>
</template>


<script type="text/javascript">
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  }
};
</script>


<style scoped>
/* .wrapper {
  overflow: hidden;
} */
ul li {
  height: 400px;
  background-color: pink;
}
</style>
