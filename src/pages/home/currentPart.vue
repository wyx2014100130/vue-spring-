import { mapState } from 'vuex';
<template>
    <div class="current_part">
            <div id="tabcontent">
                <div>
                    <img :src="homeNow.imgurl"/>
                    <span>当期狂欢</span>
                </div>
                <div>
                    <p class="p1">
                        {{homeNow.productName}}
                    </p>
                    <h4>
                        <span>￥<em>{{homeNow.price}}</em>起</span>
                        <span>{{homeNow.cityName}}{{homeNow.cityType}}</span>
                    </h4>
                </div>
            </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    name:"CurrnetParty",
    computed:{
        ...mapState({
            homeNow:state=>state.homepage.homeNow.data.products[0],
        })
    },
}
</script>
<style lang="scss">
 .current_part{
    padding:.2rem;
    width: 100%;
    height:2rem;
    background-color: #fff;
    display: flex;
    margin-bottom:.2rem;
    #tabcontent{
        display: flex;           
        div:nth-of-type(1){
                width:2.3rem;
                height:2rem;
                margin-right: .3rem;
                position:relative;
            img{
                    width:2.4rem;
                    height:1.58rem;
                }
            span{
                    border-radius: .09rem 0 .43rem 0;
                    position: absolute;
                    top:0;
                    left:0;
                    display: inline-block;
                    width:1.3rem;
                    height:.38rem ;
                    background-color: #314e56;
                    color:#fff;
                    text-align:center;
                    line-height: .38rem;
                }
            h2{
                    font-size: .24rem;
                    font-weight: 100;
                    background-color: #667384;
                    color:#fff;
                    position: absolute;
                    bottom:0;
                    width:100%;
                    text-align:center;
                }
            }
            div:nth-of-type(2){
                position:relative;
                color:#333;
                font-size:12px;
                font-family: "-apple-system",Helvetica,"Microsoft YaHei","Ping Hei",Arial;
                .p1{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                ul{
                    display:flex;
                    margin-top:.1rem;
                    li{
                        border:1px solid #ccc;
                        color:#999;
                        font-size:.24rem;
                        border-radius: .1rem;
                        padding:0 .06rem;
                        margin:0 .1rem .1rem 0;
                    }
                    
                }
                .p2{
                    color:#999;
                    font-size:12px;
                }
                h4{
                    position: absolute;
                    bottom: 0;
                    width:100%;
                    display:flex;
                    justify-content: space-between;
                    color:#999;
                    span:nth-of-type(1){
                        color:#f66;
                        em{
                            font-style: normal;
                            font-size:.32rem;
                            font-weight: 100;
                        }
                    }
                }
            }
        }
    }
</style>