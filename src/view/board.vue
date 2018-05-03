<template>
  <div class="board">
    <div style="width:100%;height:5px;"></div>
    <div class="wrapper" ref="wrapper">
      <div>
        <section>
          <div class="banner">
            <div class="banner-left">
              <strong>打开App,回复广播</strong>
            </div>
            <div class="banner-right">
              <div class="banner-right-download">打开</div>
              <div class="banner-right-open">极速下载</div>
            </div>
          </div>
        </section>
        <section>
          <div class="content">
            <div class="content-title">
              <div class="content-title-left">
                <img src="https://img1.doubanio.com/icon/user_normal.jpg">
                <div style="margin-top:-15px;margin-left:5px;">
                  <strong> 登录发广播</strong>
                </div>
              </div>
              <div class="content-title-right"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
import BScroll from "better-scroll";
export default {
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {});
    });
  }
};
</script>


<style lang="less">
.banner {
  width: 100%;
  height: 80px;
  background-size: 100%;
  background-image: url("https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg");
  &-left {
    float: left;
    color: #42bd56;
    font-size: 900;
    margin-top: 20px;
    margin-left: 20px;
  }
  &-right {
    float: right;
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    &-download {
      float: right;
      width: 55px;
      height: 28px;
      border: 1px solid #42bd56;
      border-radius: 5px;
      margin-left: 10px;
      color: #42bd56;
    }
    &-open {
      float: right;
      width: 86px;
      height: 28px;
      background-color: #42bd56;
      border-radius: 5px;
      color: #fff;
    }
  }
}
.content {
  width: 100%;
  &-title {
    height: 60px;
    border-bottom: 1px solid #ececec;
    &-left {
      height: 45px;
      float: left;
      margin-left: 10px;
      margin-top: 10px;
      img {
        width: 45px;
        height: 45px;
        border-radius: 45px;
      }
      & > div {
        display: inline-block;
        color: #aaa;
        height: 45px;
        vertical-align: middle;
      }
    }
    &-right {
      color: #aaa;
    }
  }
}
.wrapper {
  overflow: hidden;
  height: 100vh;
}
ul {
  list-style: none;
}
</style>
