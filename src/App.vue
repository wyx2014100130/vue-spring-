import { default } from './views/Home.vue';
<template>
  <div id="app">
   
    <router-view/>
    <Tabbar v-if="$route.meta.flag"/>
  </div>
</template>
<script>

import Tabbar from "./components/tabbar";
import Vue from "vue";
import vant from "vant";
import vueTouch from "vue-touch";
Vue.use(vueTouch);

export default{
  name:"App",
  components:{
    Tabbar
  },
  
}
</script>
<style>
.page{
  height:auto;
  padding-bottom:1rem;
}
</style>
