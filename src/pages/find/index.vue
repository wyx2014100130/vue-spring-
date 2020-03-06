<template>
    <div class="find " >
       <FindHead/>
       <div id="fint_content">
        <div class="findVue_contain">
            <div class="findVue_search">
                <i class="iconfont">&#xe68f;</i>
                <input type="text" placeholder="按关键词搜索一下">
                <i class="iconfont"></i>
            </div>
        </div>

       <Swiper />
       <div class="find_content_head">
            <ul id="tabHeader" ref="dom">
                <v-touch tag="li" v-for="(item,index) in lis" :key="index" :class="active==index?'on':''" @tap="handle(index)">{{item}}
                <i v-show="active==index" class="i-tag"></i>
                </v-touch>
            </ul>
            <scroll ref="scroll">
                 <Artical :articals="this.articals" />
            </scroll>
       </div>
    </div>
    </div>


</template>
<script>
import FindHead from "@components/find/head.vue";
import Swiper from "@components/home/swipper.vue";
import Artical from "@components/find/artical.vue";
import {mapState} from "vuex";
import api from "@api/index.js";
export default {
    name:"Find",
    components:{
        FindHead,
        Swiper,
        Artical
    },
    data(){
        return {
            lis:["最新","达人游记","官方推荐"],
            active:"0",  
            page:1  ,
            type:"",
            sign:"1B7186DB0DC1A4D5725C8CC557FB8C78B5476B1E",
            articals:[],
            
        }
    },
    methods:{
        handle(index){
            this.active=index;
            this.getArticalData(index);
        },
        getArticalData(index){
            switch(index){
                case 0:
                    this.type="";
                    this.sign="1B7186DB0DC1A4D5725C8CC557FB8C78B5476B1E"
                break;
                case 1:
                    this.type=3;
                    this.sign="9FA767828FDED387283C4F4672125073DB5B128A"
                break;
                case 2:
                    this.type=7;
                    this.sign="87EBA1B7687691B4E376D2AA122720481B0BFA5C"
                break;
            }
            var obj={
                "reqDtos":{"keyword":"","articleType":this.type},
                "paginationDTO":{"pageNumber":this.page,"pageSize":20},
                "springsign":this.sign
            }
            this.dataRequire(obj);
        },
        async dataRequire(obj){
            let data=await api.artical(obj);
            this.articals=data.data;
        },
        async handleMore(){
            this.page++;
            var obj={
                "reqDtos":{"keyword":"","articleType":this.type},
                "paginationDTO":{"pageNumber":this.page,"pageSize":20},
                "springsign":this.sign
            }
            let data=await api.artical(obj);
            console.log(this.page,data);
            this.articals=[...this.articals,...data.data];
        }
    },
    watch:{
        articals:{
            handler(){
                if(this.page !=1){
                    console.log(this.$refs.scroll.handlefinishPullUp())
                    this.$refs.scroll.handlefinishPullUp();
                }
            },
            deep:true
        }
    },   
    created(){
            var obj={
                "reqDtos":{"keyword":"","articleType":this.type},
                "paginationDTO":{"pageNumber":this.page,"pageSize":20},
                "springsign":this.sign
            }
            this.getArticalData(obj);    
    },
    mounted(){
        //上拉加载更多
        this.$refs.scroll.handlepullingUp(this.handleMore);
        var that=this;
        window.onscroll = function () {
            // 滚动时当前位置距顶部的距离
            var topScroll = document.documentElement.scrollTop;
            console.log(topScroll);
            // 获取导航id
            var nav = that.$refs.dom;
            // 滚动距离大于多少时执行下面事件
            if (topScroll > 208) {
                // console.log(ihkh)
                // 到了那个距离相当于给了导航定位
                nav.style.position = 'fixed';
                nav.style.top = '.8rem';
                nav.style.zIndex = '99'
            } else {
                // 小于的时候让他恢复原状
                nav.style = ''
            }
        }

    }
}
</script>
<style lang="scss">
.find{
    height:100%;
    #fint_content{
        height:100%;
    }

    .findVue_contain{
            height:.96rem;
            width:100%;
            padding:.18rem .28rem;
            .findVue_search{
                background: #fff;
               width: 6.92rem;
               height:.6rem;
               border:1px solid #ccc;
               padding:0 .3rem;
               border-radius: .3rem;         
               display: flex;
               align-items: center;
               input{
                   width:5.6rem;
                   margin-left:.2rem;
                   border:0;
               }

                
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

}

</style>