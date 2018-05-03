import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import DOUBAN from "@/view/douban.vue";
import MOVIE from "@/view/movie.vue";
import READ from "@/view/read.vue";
import BOARD from "@/view/board.vue";
import GROUP from "@/view/group.vue";
import LOGIN from "@/view/login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: DOUBAN
    },
    {
      path: "/read",
      component: READ
    },
    {
      path: "/movie",
      component: MOVIE
    },
    {
      path: "/board",
      component: BOARD
    },
    {
      path: "/group",
      component: GROUP
    },
    {
      path: "/login",
      component: LOGIN
    }
  ]
});
