<template>
    <div class="page" id="city">
         <ul class="city_head">
            <li>
                <i class="iconfont">&#xe605;</i>
                <span>选择城市</span>
            </li>
            <li>当前定位城市：<span>{{city}}</span></li>
        </ul>
        
        <ul class="city_list">          
            <li v-for="(value,prop) in cityList" :key="prop">
                 <h2>{{prop.toUpperCase()}}</h2>
                 <ul>                  
                     <v-touch tag="li" @tap="handleJump(item)" v-for="(item,index) in value" :key="index">{{item.areaName}}</v-touch>
                 </ul>
            </li>
        </ul>
    </div>

</template>
<script>
import api from "@api/index.js"
export default {
    name:"Destinations",
    data(){
        return {
            cityList:{},
            city:"北京",
            areaCode:"010"
        }
    },
    async created(){
        let cityList =await api.cityList();
        this.cityList=cityList.result;
        console.log(cityList)
    },
    methods:{
        handleJump(item){
        this.city=item.areaName;
        }
    }
}
</script>
<style lang="scss">
#city{
    height:100%;
    .city_head{
        width:100%;
        height:1.76rem;
        position: fixed;
        top:0;
        left:0;
        background:#fff;
        li:nth-of-type(1){
            height:.96rem;
            padding:.26rem;
            justify-content: center;
            display: flex;
            align-items: center;
            border-bottom:1px solid #ccc;
            font-size:.3rem;
            .iconfont{
                position: absolute;
                left:.26rem;
            }
        }
        li:nth-of-type(2){
            height:.8rem;
            padding:.2rem .34rem;
            justify-content: space-around;
            color:#999;
            span{
                color:#333;
            }
        }
    }
    .city_list{
        width:100%;
        height:100%;
        overflow:auto;
        padding-bottom:1.4rem;
        position:relative;
        top:1.76rem;
        bottom:1rem;
        h2{
            padding:.3rem .34rem;
            font-size:.3rem;
            background:#f3f3f3;
            font-weight:100;
        }
        ul{
            padding-left:.34rem;
            li{
                height:1.02rem;
                padding:.34rem 0;
            }
            background:#fff;
        }
    }
}
</style>
