<template>
    <div  class="partyDetails">
        <div id="details"  >
            <div class="findVue_head">
                <v-touch tag="i" class="iconfont" @tap="handleTap">&#xe605;</v-touch>
                <span>演出详情</span>
            </div>
        </div>
        <div id="partylist_center">
            <div id="partylist_center_img">
                <img :src="details.thumbnail"/>
                <div id="partylist_center_info">
                    <p>{{details.actName}}</p>
                    <h3>{{details.actDate}}</h3>
                    <h4>西市区指数：{{details.hotLevel}}</h4>
                    <h5>{{details.minPrice}}<small>起</small></h5>
                </div>
            </div>
            <p class="partylist_center__city">
                <i class="iconfont">&#xe602;</i>
                <span>{{details.veName}}</span>
            </p>
        </div>
        <div id="partylist_content" >
            <h2>演出介绍</h2>
            <div v-html="details.content" :class="flag?'moreactive':''"></div>
            <v-touch tag="h3" @tap="getMore"> 展开更多 </v-touch>
        </div>
        <div id="footer">
        <ul>
            <button>收藏</button>
            <v-touch tag="button" @tap="handleCart(details)">立即预定</v-touch>
        </ul>
        </div>
    </div>

</template>

<script>
import api from "@api/index.js";
import http from "@utils/request.js"
export default {
    name:"partydetails",
    data(){
        return {
            details:{},
            flag:false
        }
    },
    methods:{
        handleTap(){
           this.$router.back();
        },
        getMore(){
            this.flag=!this.flag;
        },
        async handleCart(item){
            let data = await http({
                method:"post",
                url:" http://localhost:3000/cartList",
                data:{
                    img:item.thumbnail,
                    nane:item.actName,
                    price:item.minPrice,
                    id:item.actCode
                }
            })
        }
    },
    async created(){
       let pinyinName=this.$router.currentRoute.query.pinyinName;
       let details=await api.partyListDetails(pinyinName);     
       this.details=details.result.activity;
    }
}
</script>

<style lang="scss">
.partyDetails{
    position: relative;
    width:100%;
    top:.8rem;
    #details{
       
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
    #partylist_center{
        position: relative;
        width:100%;
        height:auto;
        #partylist_center_img{
        //    position: absolute;
        //     top:.8rem;
            padding:.4rem;
            display: flex;
            width:100%;
            background:#ddd;
            img{
                height:2.92rem;
                margin-right:.4rem;
            }
            #partylist_center_info{
                p{
                    font-size:.32rem;
                    margin-bottom: .2rem;
                }
                h3{
                    font-size:.28rem;
                    margin-bottom:.2rem;
                    font-weight:100;
                }
                h4{
                    font-size:.24rem;
                    font-weight:100;
                    margin-bottom:.2rem;
                }
                h5{
                    font-size:.4rem;
                    small{
                        font-size:.28rem;
                    }

                }
            }
        }
        .partylist_center__city{
                height:1.18rem;
                width:100%;
                padding:.2rem .4rem;
                background: #fff;
                line-height: .78rem;
                .iconfont{
                    color:red;
                }
                span{
                    font-size:.32rem;
                    color:#666;
                    font-weight:700;
                    margin-left:.4rem;
                }
        }
    }
    #partylist_content{
        margin-top:.2rem;
        padding:.2rem .3rem;
        padding-bottom:1rem;
        background:#fff;
        width:100%;
        height:auto;
        h2{
            font-size:.32rem;
        }
        div{
            height:10rem;
            overflow: hidden;
            font-family: "宋体";
            strong{
                font-size:.3rem;
                font-weight:600;
            }
            p,span{
                line-height:.5rem;
                font-family: "宋体";
            }
            img{
                width:6.7rem;
                height:2.46rem;
            }
        }
        h3{
            font-size:.32rem;
            text-align: center;
            margin-top:.2rem;
        }
    }
    .moreactive{
        height:100% !important;
        overflow: auto !important;
    }
     #footer{
    height:1rem;
    width:100%;
    position: fixed;;
    bottom:0;
    left:0;
    background:#fff;
    z-index:10;
    ul{
       display:flex;
       justify-content: space-around;
       align-items: center;
       height:100%;
       button{
           font-size:.32rem;
           border:0px;
           width:1.8rem;
           height: .8rem;
           background: #fff;
       }

    }
     }
}
</style>