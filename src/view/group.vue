<template>
  <div class="group">
    group
    <!-- <img src="https://img3.doubanio.com/view/subject/s/public/s29479476.jpg" style="width: 100px; height: 142px;"> -->
    <!-- <img src="../assets/apple-icon-114.png" alt=""> -->
    <div v-for="item in hotmovies" :key="item.id">
      <!-- <p>{{item.title}}</p> -->
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
