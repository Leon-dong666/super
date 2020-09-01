<template>
  <div id="home">
    <navi-bar class="nav-home">
      <div slot="center">购物街</div>
    </navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
    </ul>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import HomeSwiper from './childComps/HomeSwiper'

import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home';

export default {
  name: "home",
  components: {
    NaviBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  data(){
    return{
     // result:null
     banners:[],
     recommends:[],
     goods:{
       'pop':{psge:0,list:[]},
       'new':{psge:0,list:[]},
       'sell':{psge:0,list:[]},
     }
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
    }),
    getHomeGoods('pop',1).then(res=>{
      console.log(res);
    })
  }


}
</script>

<style scoped>
#home{
  padding-top: 44px;
  padding-bottom: 49px;
}
.nav-home {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right:0 ;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>