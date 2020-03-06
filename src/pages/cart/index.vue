<template>
    <div id="cart">
        <div class="findVue_head">
            <v-touch tag="i" class="iconfont" @tap="handleTap">&#xe605;</v-touch>
            <span>我的购物车</span>
        </div>
        <top />
        <center />
        <bottom />
    </div>
</template>

<script>
import top from "./top.vue";
import center from "./center.vue";
import bottom from "./bottom.vue";
export default {
    name:"Cart",
    components:{
        top,
        center,
        bottom
    },
    methods:{
        handleTap(){
            this.$router.back();
        }
    }
}
</script>

<style lang="scss">
#cart{
    padding:.8rem .2rem;
    width:100%;
    height: 100%;
  .findVue_head{
     position: relative;
        height:.8rem;
        width:100%;
        padding:0 .3rem;
        display: flex;
        justify-content: center;
        background:#fff;
        position:fixed;
        top:0;
        left:0;
        z-index:12;
        .iconfont{
            position: absolute;;
            left:.3rem;
            color:#00be88;
        }
        align-items: center;
        font-size:.32rem;
        }
}

</style>