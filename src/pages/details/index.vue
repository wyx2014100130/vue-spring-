<template>
    <div id="details" >
        <!-- <Swiper/> -->
        <div class="findVue_head">
            <v-touch tag="i" class="iconfont" @tap="handleTap">&#xe605;</v-touch>
            <span>发现</span>
        </div>
        <div id="details_center">
            <div class="details_image" ref="scroll">          
               <div>
                    <img :src="detailsList.Pictures[0].Url"/>           
                    <!-- <img :src="detailsList.Pictures[1].Url"/>
                    <img :src="detailsList.Pictures[2].Url"/>   -->
                </div>          
                 <div class="details_titles">
                <span>北京春秋 | 产品编号 207988</span>
                
        </div>    
        </div>    
        <div class="details_info">
            <h2>{{detailsList.Name}}</h2>
            <p>￥<small>{{detailsList.MinPrice}} </small> <label>起/人</label></p>
            <span>{{detailsList.DestinationCity.Name}}</span>
        </div>  
        <div class="find_content_head" id="details_head">
            <ul id="tabHeader" ref="dom">
                <v-touch tag="li" v-for="(item,index) in lis" :key="index" :class="active==index?'on':''" @tap="handle(index)">{{item}}
                <i v-show="active==index" class="i-tag"></i>
                </v-touch>
            </ul>
          
       </div>
       <Price :product="detailsList" v-if="active==1"/>
       <Buy :product="detailsList" v-if="active==2"/>
       <Product :product="detailsList" v-if="active==0"/>
        </div>       
       <div id="footer">
        <ul>
            <button>收藏</button>
            <v-touch tag="button" @tap="handleCart(detailsList)">立即预定</v-touch>
        </ul>
        </div>
    </div>
</template>

<script>
import Swiper from "@components/home/swipper.vue";
import api from "@api/index.js";
import Dhead from "@components/find/head.vue";
import Product from "./product.vue";
import Price from "./price.vue";
import Buy from "./buy.vue";
import http from "@/utils/request.js";
// import Footer from "./footer.vue";
export default {
    name:"Details",
    data(){
        return {
            detailsList:{},
            lis:["产品描述","费用说明","预订须知"],
            active:0,
            id:"",
            
        }
    },
    components:{
        Swiper,
        Dhead,
        Product,
        Price,
        Buy,
        // Footer


    },
    async created(){
        let id=this.$route.params.id;
        let data=await api.goosdetails(id);
        this.detailsList=data[0];
        console.log( data) ;
       //console.log(data);
    },
    methods:{
        handle(index){
            this.active=index;
           // this.getArticalData(index);
        },
        handleTap(){
           this.$router.back();
        },
        async handleCart(item){
            let data = await http({
                method:"post",
                url:" http://localhost:3000/cartList",
                data:{
                    img:item.Pictures[0].Url,
                    nane:item.Name,
                    price:item.MinPrice,
                    id:item.Id
                }
            })
        }
    }

}
</script>

<style lang="scss">
#details{
    height:100%;
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
    #details_center{
        position:fixed;
        top:.8rem;
        bottom:.8rem;
        overflow: auto;

    }

    #details_head{
        height:.8rem;
    }
    .details_image{
       
        height:4.1rem;
        div{
            display:flex;
            width:100%;
            img{
            width:100%;
            height:205px;
            }
        
        }
    }
    .details_titles{
        color:#fff;
        position: relative;
        font-weight: 800;
        top:-0.5rem;
        font-size:.28rem;
        left:.2rem;
    }
    .details_info{
        width:100%;
        height:auto;
        padding:.28rem;
        background: #fff;
        margin-bottom:.2rem;
        h2{
            color:#333;
            font-size:.32rem;
            font-weight:100;
            margin-bottom:.1rem;
        }
        p{
            color:#ff6666;
            font-size:.3rem;
            margin-bottom:.1rem;
            small{
                font-size:.46rem;
            }
            label{
                color:#333;
            }
        }
        span{
            border:1px solid #ccc;
            padding:.03rem .04rem;
        }
    }
    .find_content_head{
        height:100%;
        #tabHeader{
            width:100%;
            height:.84rem;
            position: relative;
            background-color: #fff;
            display:flex;     
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 1px solid #e8e8e8;
            li{
                color:#555;
                font-size:14px;
                width:100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .on{
                color:#00be88;
            }
            .i-tag{
                display: inline-block;
                width:1rem;
                height: .04rem;
                border-bottom:2px solid #00be88;
                position: absolute;
                bottom:0;
            }
        }     
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

</style>