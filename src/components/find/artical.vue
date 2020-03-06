<template>
    <div id="artical">
        <ul>       
             <li v-for="(item,index) in articals" :key="index">
                  <h2>{{item.detail.title}}</h2>
                  <img :src="item.pictures[0].url" />
                 <p class="author">{{item.detail.articleTag}}</p>
                <div class="info"> 
                    <div class="info_one">
                        <img :src="item.author.url">
                        <span>{{item.author.name}}</span>
                    </div>
                    <div class="info_two">
                        <span>阅读：{{item.detail.articleBrowseCount}}</span>
                        <span>喜欢：{{item.detail.articleLikeRecordCount}}</span>
                    </div>
                </div>
            </li> 
        </ul>
    </div>
</template>
<script>
import api from "@api/index.js";


export default {
    name:"Artical",
    props:["articals"],
   
    
}
</script>
<style lang="scss">
#artical{
    width:100%;
    padding-bottom:1rem;
    ul{
        width:100%;
        height:100%;
        li{
            width:100%;
            height:100%;
            padding:.28rem .28rem .12rem;
            border-bottom:1px solid #e8e8e8;
            h2{
                margin-bottom:.3rem;
                font-weight:100;
                font-size:.32rem;
            }
            img{
                width:6.92rem;
                height:3.9rem;
            }
            .author{
                height:.38rem;
                width:1.2rem;
                background-color:#00be88;
                color:#fff;
                border-radius: .16rem;
                margin:.2rem 0;
                text-align:center;
            }
            .info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                word-wrap: none;
                .info_one{
                    height:.6rem;
                    display: flex;
                    align-items: center;
                    img{
                        width:.6rem;
                        height:.6rem;
                        border-radius: 50%;
                        margin-right:.2rem;
                    }
                }
                .info_two{
                    font-size:.28rem;
                    span{
                        margin-left:.2rem
                    }
                }
               
            }
        }
    }
}
</style>