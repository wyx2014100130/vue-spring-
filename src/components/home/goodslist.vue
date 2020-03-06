<template>
    <div id="goodList">
        <ul>
            <router-link
            tag="li" :to="'/details/'+item.productId"
            @click="handleDetails(item.productId)"
            v-for="(item) in goodslist.data.products" 
            :key="item.productId" class="goodList_item">
                <img :src="item.imgurl"/>
                <div class="goodList_inner">
                    <h2>{{item.productName}}</h2>
                    <p>
                        <span>￥<small>{{item.price}}</small>起</span>
                        <span>{{item.cityName}}{{item.cityType}}</span>
                    </p>
                </div>
            </router-link> 
        </ul>
    </div>
</template>
<script>
import api from "@api/index.js";
export default {
    name:"Goodslist",
    props:["goodslist"],

    methods:{
        // async handleDetails(id){
        //     this.$router.push("/details/"+id);
        //     // let idx=path.match(/\/(.*)\/(.*)/)[2];
        //     // let goodsList=await api.details(path);
        //     // console.log(goodsList);
        // }

    }
}
</script>
<style lang="scss">
#goodList{
    width:100%;
    height:auto;
    ul{
        display:flex;
        flex-wrap: wrap;
        
         li:nth-of-type(2n+1){
               margin:0 .28rem .28rem 0;
         }
        li{
            width:3.4rem;
            height:3.94rem;
            margin:0  0 .28rem 0;
            background-color: #fff;
            img{
                width:100%;
                height:2.4rem;
            }
            .goodList_inner{
                padding:7.5px;
                h2{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-bottom: .14rem;
                    font-weight:100;
                    font-size:.26rem;
                }
                p{
                    font-size:.2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span:nth-of-type(1){
                        color:#f66;
                        small{
                            font-size:.35rem;
                        }
                    }
                }
            }
        }
    }

}
</style>
