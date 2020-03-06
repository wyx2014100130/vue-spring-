<template>
    <div class="page">
         <div id="mine-head">
             <ul v-if="$store.state.user===''">
                  <router-link tag="li" to="/login">登录 /</router-link>
                  <router-link tag="li" to="/register"> 注册</router-link>
             </ul>
             <ul v-if="$store.state.user!==''">
                  <li>尊敬的会员：{{$store.state.user}}, 祝您购物愉快！ </li>
             </ul>
         </div>
         <div id="mine_info">
             <ul>            
                <li>我的收藏</li>
                <router-link tag="li" to="/cart" >我的购物车</router-link>
                <li>我的订单</li>
                <router-link tag="li" to="/address" >常用地址</router-link>
             </ul>
         </div>
         <div id="mine_info">
             <button id="mine_btn">退出登录</button>
         </div>
    </div>

</template>
<script>
import vuex from "vuex";
export default {
    name:"Mine",
    components:{
        
    },
    created(){
        console.log($store.state.user)
    }
   
}
</script>

<style lang="scss" >
.page{
    height:100%;
}
#mine-head{
    height:3rem;
    width:100%;
    background-color: aqua;
    ul{
        width:100%;
        height:100%;
        display:flex;
        align-items: center;
        padding:.4rem .6rem;
        font-size:16px;
    }
}
#mine_info{
    width:100%;
    padding:.4rem;
    ul{
        background:#fff;
        padding:.2rem;
        li{
            line-height: .6rem;
            font-size:.32rem;
            margin-bottom:.3rem;
        }
    }
}
#mine_btn{
    width:100%;
    height:1rem;
    background-color: #fff;
    border: 0;
    border-radius: .1rem;
    font-size:.32rem;
    color:red;
}
</style>