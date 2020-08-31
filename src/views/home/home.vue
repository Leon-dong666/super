<template>
  <div id="home">
    <navi-bar class="nav-home">
      <div slot="center">购物街</div>
    </navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import {getHomeMultidata} from 'network/home';
import RecommendView from './childComps/RecommendView'

import HomeSwiper from './childComps/HomeSwiper'

export default {
  name: "home",
  components: {
    NaviBar,
    HomeSwiper,
    RecommendView,
  },
  data(){
    return{
     // result:null
     banners:[],
     recommends:[]
    }
  },
  //函数调用-》压入函数栈（保存函数调用过程中所有变量），临时的
  //函数调用结束，-》弹出函数栈（释放函数所有的变量）
  created(){
    //1.请求多个数据
    getHomeMultidata().then(res=>{
      //console.log(res);

      //this.result = res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }


}
</script>

<style scoped>
.nav-home {
  background-color: var(--color-tint);
  color: white;
}
</style>