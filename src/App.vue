<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import tabBarItem from "components/common/tabbar/tabBarItem";

export default {
  name: "app",
  components: {
    tabBar: Tabbar,
    tabBarItem,
  },
};
</script>

<style>
@import "assets/css/base.css";

</style>
