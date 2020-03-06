<template>
    <div id="tabbar">
        <ul>
             <router-link v-for="(item,index) in tabs" :key="index" :to="item.path" tag="li">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.text}}</span>
             </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabs:[
                {
                    icon:"&#xe603;",
                    text:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe602;",
                    text:"分类",
                    path:"/destination"
                },
                {
                    icon:"&#xe602;",
                    text:"门票",
                    path:"/party"
                },
                {
                    icon:"&#xe638;",
                    text:"发现",
                    path:"/find"
                },
                {
                    icon:"&#xe614;",
                    text:"我的",
                    path:"/mine"
                },
                
               
            ]
        }
    }
}
</script>

<style>
    #tabbar{
        width:100%;
        height: 1rem;
        position: fixed;
        left:0;
        bottom: 0;
        background: #fff;
    }
    #tabbar  ul{
            width:100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
    }
     #tabbar ul .router-link-active{
            color:#00be88;
        }
     #tabbar ul li{
            width:100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size:.3rem;
            color:#333;
           
        }
     #tabbar ul li .iconfont{
          font-size:.4rem;
     }
</style>