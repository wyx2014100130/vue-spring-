<template>
    <div id="party">
        <div id="party_head">
            <div class="left">
                <i class="iconfont">&#xe605;</i>
                <span>北京</span>
                <i class="iconfont">&#xe604;</i>
            </div>
            <router-link tag="div" to="/search" class="center" >
                <i class="iconfont">&#xe68f;</i>
                <input type="text" placeholder="搜索明星，演出，场馆"/>
            </router-link >
            <div class="right">
                 <button>排序</button>
            </div>
        </div>
        <div id="party_scroll">
            <scroll ref="scroll">
                <div id="scroll_list">
                    <v-touch tag="div" @tap="handle(item)"
                     :class="active==item.id?'Partyactive':''"
                     v-for="(item,index) in category" :key="index">
                            {{item.cname}}
                    </v-touch>
                </div>
            </scroll>
        </div>
        <Partylist :partyData="partyData"/>
        <p class="party_info" v-if="tag">暂无{{type}}</p>
        <router-view></router-view>
    </div>
    
</template>

<script>
import Partylist from "@components/party/list.vue";
import api from "@api/index.js"
export default {
    name:"Party",
    components:{
        Partylist,
       
    },
    data(){
        return{
            category:[
                {cname:"全部",pin:"",id:1},
                {cname:"演唱会",pin:"yanchanghui",id:2},
                {cname:"话剧歌剧",pin:"huajugeju",id:3},
                {cname:"休闲娱乐",pin:"xiuxianyule",id:4},
                {cname:"电影",pin:"film",id:5},
                {cname:"体育赛事",pin:"tiyusaishi",id:6},
                {cname:"儿童亲子",pin:"ertongqinzi",id:7},
                {cname:"音乐会",pin:"yinyuehui",id:8},
                {cname:"曲艺杂技",pin:"quyizaji",id:9},
                {cname:"芭蕾舞蹈",pin:"wudaobalei",id:10},
            ],
            partyData:[],
            tag:false,
            type:"",
            active:false
            
        }
    },
    methods:{
        async handle(params){
            this.tag=false;
            this.active=params.id;
            let data=await api.partyList(params.pin);
            console.log(data.result.list.length)
            if(data.result.list.length==0){
                this.tag=true;
                this.type=params.cname;
            }
                this.partyData=data.result.list;

        }
    },
    async created(){
        this.handle( {cname:"全部",pin:"",id:1});
    }
}
</script>

<style lang="scss">
#party{
    width:100%;
    height:100%;
    position:relative;
    #party_head{
        padding:0 .2rem;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        background: #fff;
        position: fixed;
        z-index:10;
        .left{
            height:.9rem;
            width:1.7rem;
            line-height: .9rem;
            font-size:.32rem;
            color:#333;
            .iconfont{
                margin:0 .1rem;
            }
        }
        .center{
            display:flex;
            width:4.36rem;
            height:.48rem;
            border-radius: .2rem;
            background:#f4f4f4;
            text-indent: .1rem;

            .iconfont{
                margin-top:.06rem
            }
            input{
                border:0;
                text-indent: .08rem;
                 background:#f4f4f4;
            }

        }
        .right{
            margin-left:.1rem;
            button{
                background: #fff;
                border:0;
            }
        }     
    }
    #party_scroll{
        width:100%;
        height:1.38rem;
        position:fixed;
        z-index:10;
        top:.9rem;
        background:#fff;
        // overflow: auto;
        #scroll_list{
            display:flex;
            align-items: center;
            width:11.16rem;
            div{
                width:1.04rem;
                height:1.38rem ;
                word-break: keep-all;
                text-align: center;
                line-height: 1.38rem;
                margin:0 .1rem;
            }
        }
    }
    .party_info{
        font-size:.4rem;
        text-align:center;
        text-indent:.4rem;
        margin-top:1rem;
    }
    .Partyactive{
        color: #ff5400;
        border-bottom: 2px solid #ff5400;
    }
}
</style>