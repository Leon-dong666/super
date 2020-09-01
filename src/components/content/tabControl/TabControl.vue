<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item">
      <span  :class="{isActive:currentIndex===index}" @click="btnClick(index)" class="title-item">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return{
      currentIndex:0,
      isActive: true
    
    }
  },
  methods: { 
    btnClick(index){
      this.currentIndex=index
    }
   }

}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
  .tab-control-item{
    flex: 1;
    
  }
  .title-item{
    padding: 5px;
  }
  .isActive{
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>