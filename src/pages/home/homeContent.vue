import { mapState } from 'vuex';
<template>
    <div id="contentbox">
        <img class="imgpost" :src="hotdata.data.banners[0].imgurl"/>        
        <router-link tag="li" class="tabcontent" :to="'/details/'+item.productId"
        
        v-for="(item,index) in hotdata.data.products.slice(0,3)" :key="index">
            <div>
                <img :src="item.imgurl"/>
                <span>{{item.productTypeName}}</span>
                <h2>{{item.cityName+item.cityType}} </h2>
            </div>
            <div>
                <p class="p1">
                    {{item.productName}}
                </p>
                <ul>
                    <li v-for="(tags,ids) in item.productThemeList " :key="ids">{{tags.themeName}}</li>
                </ul>
                <p class="p2">班期：
                    <span v-for="(times,idx) in item.scheduleDateList" :key="idx">{{times}}</span>
                </p>
                    <h4>
                        <span>￥<em>{{item.price}}</em>起</span>
                        <span v-if="item.averageScore!=0">评分：{{item.averageScore}}</span>
                    </h4>
            </div>
        </router-link >
    </div>
</template>
<script>
export default {
    name:"HomeContent",
    props:["hotdata"],
    
}
</script>
<style lang="scss">
#contentbox{
         padding:.2rem .2rem 0;
         margin-bottom:.2rem;
         background-color: #fff;
        .imgpost{
            width:7.14rem;
            height:1.68rem;
            // margin-bottom:.3rem;
        }
        .tabcontent{
            display: flex;
            padding:.2rem 0 ;
            border-bottom: 1px solid #e8e8e8;
            div:nth-of-type(1){
                width:2.3rem;
                height:2rem;
                margin-right: .3rem;
                position:relative;
                img{
                    width:2.3rem;
                    height:2rem;
                }
                span{
                    border-radius: .09rem 0 .43rem 0;
                    position: absolute;
                    top:0;
                    left:0;
                    display: inline-block;
                    width:1rem;
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
                    height:.46rem;
                    overflow: hidden;
                    flex-wrap: wrap;
                    li{
                        border:1px solid #ccc;
                        height:.4rem;
                        width:auot;
                        color:#999;
                        font-size:.24rem;
                        border-radius: .1rem;
                        padding:0 .06rem;
                        margin:0 .1rem .1rem 0;
                        white-space:nowrap;
                        
                    }
                    
                }
                .p2{
                    color:#999;
                    font-size:12px;
                    width:100%;
                    height:.32rem;
                    overflow: hidden;
                    span{
                        margin-right:.2rem;
                    }
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