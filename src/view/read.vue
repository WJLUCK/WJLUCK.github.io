<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <ul>
        <li>
          <section>
            <div class="popular">
              <div class="popular-title">
                <div class="popular-title-left">
                  <strong>最受关注图书 | 虚构类</strong>
                </div>
                <div class="popular-title-right">
                  <strong>更多</strong>
                </div>
              </div>
              <div class="popular-content">
                <ul>
                  <li v-for="item in bookList" :key="item.id">
                    <img :src="item.images.small" style="width:100px;height:142px;">
                    <div>{{item.title}}</div>
                    <div>{{item.rating.average}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>


<script type="text/javascript">
import http from "../utils/request.js";
import api from "../utils/api.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bookList: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  created() {
    // this.getbooks();
  },
  methods: {
    getbooks() {
      http.get(api.books).then(res => {
        this.bookList = res.subjects;
      });
    }
  }
};
</script>

<style lang="less">
.popular {
  width: 100%;
  height: 270px;
  // background-color: yellow;
  &-title {
    height: 47px;
    width: 100%;
    line-height: 47px;
    // background-color: pink;
    float: left;
    &-left {
      float: left;
      font-size: 17px;
      margin-left: 20px;
    }
    &-right {
      float: right;
      margin-right: 30px;
      color: #00b600;
    }
  }
  &-content {
    width: 100%;
    // height: 230px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px solid #ececec;
    ul {
      list-style-type: none;
      display: inline;
      li {
        width: 120px;
        height: 200px;
        display: inline-block;
        margin: 10px;
        text-align: center;
      }
    }
  }
}
ul {
  list-style-type: none;
}
</style>
