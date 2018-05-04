<template>
  <div>
    <div>hhhhhh</div>
    <div class="wrapper" ref="wrapper">
      <ul>
        <li>
          <section>
            <div class="hot">
              <div class="hot-title">
                <div class="hot-title-left">影院热映</div>
                <div class="hot-title-right">更多</div>
              </div>
              <div class="hot-content">
                <ul>
                  <li v-for="item in hotmovies" :key="item.id">
                    <img class="hot-content-item-images" :src="item.images.small" style="width:100px;height:142px;">
                    <div class="hot-content-item-title">{{item.title}}</div>
                    <div class="hot-content-item-score" id="hh">{{item.rating.average}}</div>
                    <div class="hot-content-item-rank" :style="styleObject">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section>
            <div class="hot">
              <div class="hot-title">
                <div class="hot-title-left">影院热映</div>
                <div class="hot-title-right">更多</div>
              </div>
              <div class="hot-content">
                <ul>
                  <li v-for="item in hotmovies" :key="item.id">
                    <img class="hot-content-item-images" :src="item.images.small" style="width:100px;height:142px;">
                    <div class="hot-content-item-title">{{item.title}}</div>
                    <div class="hot-content-item-score">{{item.rating.average}}</div>
                    <div class="hot-content-item-rank" :style="styleObject">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section>
            <div class="hot">
              <div class="hot-title">
                <div class="hot-title-left">影院热映</div>
                <div class="hot-title-right">更多</div>
              </div>
              <div class="hot-content">
                <ul>
                  <li v-for="item in hotmovies" :key="item.id">
                    <img class="hot-content-item-images" :src="item.images.small" style="width:100px;height:142px;">
                    <div class="hot-content-item-title">{{item.title}}</div>
                    <div class="hot-content-item-score">{{item.rating.average}}</div>
                    <div class="hot-content-item-rank" :style="styleObject">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section>
            <div class="findgood">
              <div class="findgood-title">发现好电影</div>
              <div class="findgood-content">
                <ul>
                  <li style="margin-bottom:10px;margin-top:10px;">
                    <a href="#" style="color: #FFC46C;border:1px solid #FFC46C">同时入选IMDB250和豆瓣电影250的电影</a>
                    <a href="#" style="color: #4F9DED;border:1px solid #4F9DED">带你进入不正常的世界</a>
                    <a href="#" style="color: #FFC46C;border:1px solid #FFC46C">用电【影】来祭奠逝去的岁月</a>
                    <a href="#" style="color: #FF4055;border:1px solid #FF4055">女孩们的故事【电影】</a>
                  </li>
                  <li>
                    <a href="#" style="color: #42BD56;border:1px solid #42BD56">使用 App 【找电影】功能</a>
                    <a href="#" style="color: #2384E8;border:1px solid #2384E8">科幻是未来的钥匙——科幻启示录【科幻题材】</a>
                    <a href="#" style="color: #CC3344;border:1px solid #CC3344">美国生活面面观</a>
                    <a href="#" style="color: #42BD56;border:1px solid #42BD56">2015终极期待</a>
                    <a href="#" style="color: #3BA94D;border:1px solid #3BA94D">经典韩国电影——收集100部</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section>
            <div style="margin-top:70px;">
              <div class="classify">分类浏览</div>
              <div>
                <ul class="groups">
                  <li class="group">
                    <a href="#">经典</a>
                    <a href="#">冷门佳片</a>
                  </li>
                  <li class="group">
                    <a href="#">豆瓣高分</a>
                    <a href="#">动作</a>
                  </li>
                  <li class="group">
                    <a href="#">喜剧</a>
                    <a href="#">爱情</a>
                  </li>
                  <li class="group">
                    <a href="#">悬疑</a>
                    <a href="#">恐怖</a>
                  </li>
                  <li class="group">
                    <a href="#">科幻</a>
                    <a href="#">治愈</a>
                  </li>
                  <li class="group">
                    <a href="#">文艺</a>
                    <a href="#">成长</a>
                  </li>
                  <li class="group">
                    <a href="#">动画</a>
                    <a href="#">华语</a>
                  </li>
                  <li class="group">
                    <a href="#">欧美</a>
                    <a href="#">韩国</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section>
            <span class="footer-icon">
              <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png">
              <span class="footer-icon-text">豆瓣</span>
            </span>
            <div class="footer-detail">去 App Store 免费下载 iOS 客户端</div>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>




<script type="text/javascript">
import BScroll from "better-scroll";
import http from "../utils/request.js";
import api from "../utils/api.js";
export default {
  data() {
    return {
      hotmovies: [],
      position: -60
      // styleObject: {
      //   backgroundPositionY: "-30px"
      // }
    };
  },
  computed: {
    styleObject: function() {
      return {
        backgroundPositionY: this.position + "px"
      };
    }
  },
  created() {
    this.getIntheaters();
    // setTimeout(() => {
    //   this.getStar();
    // }, 5000);
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  },
  methods: {
    getIntheaters() {
      http.get(api.intheaters).then(res => {
        this.hotmovies = res.subjects;
      });
    },
    getStar() {
      var star = document.getElementsByClassName("hot-content-item-score");
      for (var i = 0; i < star.length; i++) {
        if (star[i].innerHTML >= 8.5 && star[i].innerHTML <= 10) {
          this.position = 0;
        } else if (star[i].innerHTML >= 6.5 && star[i].innerHTML <= 8.5) {
          this.position = -30;
        } else {
          this.position = -45;
        }
      }
    }
  }
};
</script>


<style lang="less" scoped>
.wrapper {
  // overflow: hidden;
  height: 100vh;
}
.hot {
  width: 100%;
  height: 280px;
  &-title {
    width: 100%;
    height: 27px;
    font-size: 18px;
    color: #111;
    line-height: 27px;
    clear: both;
    &-left {
      float: left;
      margin-left: 30px;
      line-height: 27px;
    }
    &-right {
      float: right;
      margin-right: 30px;
      color: #00b600;
    }
  }
  &-content {
    width: 100%;
    height: 230px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    // border-bottom: 1px solid #ececec;
    margin-left: 10px;
    ul {
      list-style-type: none;
      display: inline;
      li {
        width: 100px;
        height: 200px;
        display: inline-block;
        margin: 10px;
        text-align: center;
      }
    }
    &-item {
      width: 100%;
      height: 10px;
      background-color: goldenrod;
      &-rank {
        display: inline-block;
        width: 75px;
        height: 15px;
        background-image: url("../assets/star.png");
        // background-position: 0 0px;
      }
    }
  }
}
.findgood {
  width: 100%;
  height: 100px;
  &-title {
    width: 100%;
    height: 27px;
    font-size: 18px;
    color: #111;
    line-height: 27px;
    text-align: left;
    margin-left: 30px;
  }
  &-content {
    margin-left: 10px;
    width: 100%;
    height: 140px;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    a {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      padding-left: 15px;
      padding-right: 15px;
      text-decoration: none;
      border-radius: 10px;
      font-size: 20px;
    }
  }
}

.classify {
  width: 100%;
  height: 27px;
  font-size: 18px;
  color: #111;
  line-height: 27px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 40px;
}
.groups {
  margin-left: 30px;
  list-style-type: none;
  text-align: left;
  margin-top: -30px;
}
.group {
  width: 100%;
  a {
    text-decoration: none;
    display: inline-block;
    width: 48%;
    height: 45px;
    color: #42bd56;
    font-size: 18px;
    line-height: 45px;
    border-bottom: 1px solid #ececec;
    border-right: 1px solid #ececec;
  }
}

.footer {
  width: 100%;
  height: 400px;
  &-icon {
    display: inline-block;
    width: 100%;
    height: 50px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    img {
      width: 48px;
    }
    &-text {
      display: inline-block;
      font-size: 24px;
      height: 48px;
      vertical-align: bottom;
    }
  }
  &-detail {
    text-align: center;
    font-size: 18px;
    color: #42bd56;
  }
}

//隐藏滚动条
::-webkit-scrollbar {
  display: none;
}

ul {
  list-style-type: none;
}
</style>
