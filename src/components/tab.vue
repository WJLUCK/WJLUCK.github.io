<template>
  <div class="tab">
    <div class="header">
      <ul class="nav">
        <li class="douban" @click="douban">豆瓣</li>
        <li class="movie" @click="movie">电影</li>
        <li class="read" @click="read">图书</li>
        <li class="board" @click="board">广播</li>
        <li class="group" @click="group">小组</li>
        <li class="search" @click="login">
          <img src="../assets/search.png">登
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    douban() {
      this.$router.push({
        path: "/"
      });
    },
    movie() {
      this.$router.push({
        path: "/movie"
      });
    },
    read() {
      this.$router.push({
        path: "/read"
      });
    },
    board() {
      this.$router.push({
        path: "/board"
      });
    },
    group() {
      this.$router.push({
        path: "/group"
      });
    },
    login() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>


<style  lang="less" scoped>
.header {
  width: 100%;
  height: 47px;
  border-bottom: 1px solid #ececec;
  z-index: 100;
  .nav {
    list-style-type: none;
    line-height: 47px;
    float: left;
    li {
      width: 40px;
      float: left;
      height: 47px;
      &.douban {
        color: #00b600;
        margin-left: 10px;
        font-size: 24px;
        font-weight: normal;
        width: 60px;
      }
      &.movie {
        color: #2384e8;
        margin-left: 45px;
        font-size: 15px;
      }
      &.read {
        color: #9f7860;
        margin-left: 10px;
        font-size: 15px;
      }
      &.board {
        color: #e4a813;
        margin-left: 10px;
        font-size: 15px;
      }
      &.group {
        color: #2ab8cc;
        margin-left: 10px;
        font-size: 15px;
      }
      &.search {
        margin-left: 10px;
        margin-top: 5px;
        img {
          width: 20px;
        }
      }
    }
  }
}
</style>