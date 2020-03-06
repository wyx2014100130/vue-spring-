<template>
    <div class="page">
        <Swiper/>
        <Header />
        <Titles />
        <CurrentParty/>
        <div id="hometab">
            <ul id="tabHeader">
                <v-touch tag="li" v-for="(item,index) in lis" :key="index" :class="active==index?'on':''" @tap="handle(index)">{{item}}
                <i v-show="active==index" class="i-tag"></i>
                </v-touch>
            </ul>
            <HomeContent :hotdata="hotdata" />     
            <HomeContent :hotdata="overseas" />    
            <HomeContent :hotdata="inland" />    
        </div>
        <div id="mayLike">
            <div class="mayLike_header">
                <i>--</i>猜你喜欢<i>--</i>
            </div>
            <GoodsList :goodslist="likeData"/>
        </div>
    </div>

</template>
<script>
import Header from "../../components/home/header.vue";
import Swiper from "@components/home/swipper.vue";
import Titles from "@components/home/titles.vue";
import CurrentParty from "./currentPart.vue";
import HomeContent from "./homeContent.vue";
import GoodsList from "@components/home/goodslist.vue";
import { mapState } from 'vuex';

export default {
    name:"Home",
    components:{
        Header,
        Swiper,
        Titles,
        CurrentParty,
        HomeContent,
        GoodsList
    },
    data(){
        return {
            lis:["本季热推","品质出境","省心国内"],
            active:"0",            
        }
    },
    computed:{
        ...mapState({
            hotdata:state=>state.homepage.hotSeason,
            overseas:state=>state.homepage.overseas,
            inland:state=>state.homepage.inland,
            likeData:state=>state.homepage.likeData
        })
    },
    methods:{
        handle(index){
            this.active=index;
        }
    },
    created(){
        if(!localStorage.getItem("homeData")){
            this.$store.dispatch("homepage/gethomeNow");
        }
       
    }
}
</script>
<style lang="scss">
#hometab{
    width:100%;
    height:auto;
    
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
#mayLike{
    padding:0 .2rem .2rem;
    .mayLike_header{
        height:.84rem;
        text-align:center;
        line-height:.84rem;
        font-size:.28rem;
        color:#333;
        i{
            margin:0rem .2rem;
           
        }
    }
}
   


</style>