<template>
  <div class="group">
    group
    <div v-for="item in hotmovies" :key="item.id">
      <img :src="item.images.small" alt="">
    </div>
  </div>
</template>

<script>
import http from "../utils/request.js";
import api from "../utils/api.js";
export default {
  data() {
    return {
      hotmovies: []
    };
  },
  mounted() {
    this.getIntheaters();
  },
  methods: {
    getIntheaters() {
      http.get(api.intheaters).then(res => {
        this.hotmovies = res.subjects;
      });
    }
  }
};
</script>


<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>
