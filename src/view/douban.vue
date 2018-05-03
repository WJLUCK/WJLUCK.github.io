<template>
  <div class="douban">
    <div>
      <ul class="douban-header">
        <li>
          <span>
            <strong>影院热映</strong>
          </span>
          <span>
            <strong>豆瓣日历</strong>
          </span>
          <span>
            <strong>豆瓣时间</strong>
          </span>
          <span>
            <strong>使用豆瓣App</strong>
          </span>
        </li>
      </ul>
    </div>
    <div class="wrapper" ref="wrapper">
      <div>
        <ul class="douban-content">
          <li class="douban-content-item" v-for="item in articleList" :key="item.id">
            <div class="douban-content-item-top">
              <div class="douban-content-item-top-left">
                {{item.title}}
              </div>
              <div class="douban-content-item-top-right">
                <img :src="item.image" style="width:86px;
              height:86px;">
              </div>
            </div>
            <div class="douban-content-item-footer">
              by {{item.owner.name}}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import api from "../utils/api.js";
import http from "../utils/request.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      articleList: []
    };
  },
  created() {
    this.getCity();
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  methods: {
    getCity() {
      http.get(api.cityHot).then(res => {
        this.articleList = res.data.events;
        // console.log(res);
      });
    }
  }
};
</script>


<style lang="less" scoped>
.douban-header {
  width: 100%;
  height: 160px;
  list-style-type: none;
  span {
    display: inline-block;
    height: 50px;
    width: 45%;
    background-color: #f6f6f6;
    color: #494949;
    text-align: center;
    line-height: 50px;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 2px;
  }
}
.wrapper {
  // overflow: hidden;
  height: 100vh;
}
.douban-content {
  margin-top: 40px;
  &-item {
    width: 100%;
    height: 130px;
    margin-top: -10px;
    &-top {
      width: 100%;
      height: 80px;
      margin-top: -20px;
      float: left;
      &-left {
        width: 60%;
        float: left;
        height: 90px;
        margin-left: 15px;
        text-align: left;
      }
      &-right {
        width: 30%;
        height: 90px;
        float: right;
      }
    }
    &-footer {
      margin-left: 14px;
      text-align: left;
      color: #ccc;
    }
  }
}
</style>



