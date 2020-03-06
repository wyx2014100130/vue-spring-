<template>
    <div id="search">
         <div id="search_head">
            <v-touch  tag="div"  class="center"  >
                <i class="iconfont">&#xe68f;</i>
                <input v-model="dataChange" type="text" placeholder="搜索明星，演出，场馆"/>
            </v-touch >
            <v-touch tag="span" class="search_quit" @tap="handleSearch" >取消</v-touch>
        </div>
        <div id="search_content" v-show="!flag">
            <h2>热门演出</h2>
            <ul>
                <v-touch tag="li" @tap="handleHot(item)" v-for="(item,index) in hotlist" :key="index" >{{item}}</v-touch>
            </ul>
            <div id="search_history" v-show="this.history.length>0">
                <h2>历史记录</h2>
                <ul>
                    <v-touch tag="li" v-for="(item,index) in history" :key="index" >{{item}}</v-touch>
                </ul>
            </div>
        </div>
        <div id="search_list" v-show="flag">
            <ul>
                <v-touch tag="li" @tap="handleHotDetails(item)" v-for="(item,index) in searchKeywordList" :key="index" >
                   <span>{{item.result}}</span> 
                   <span>{{item.area}}</span> 
                </v-touch>
            </ul>
        </div>
        
    </div>
</template>

<script>
import api from "@api/index.js"
import {throttle} from "@utils/utils.js"
import { mapState } from 'vuex';

export default {
    name:"Search",
    data(){
        return {
            hotlist:[],
            dataChange:"",
            searchKeywordList:[],
            flag:false,
            history:[]
            
        }
    },
   
    methods:{
        handleSearch(){
            this.history.push(this.dataChange);         
            this.flag=false;         
        },
       
        async handlefocus(){
           
            let data=await api.search();
            this.hotlist=data.result.hotSearches;
        },
        handleHot(item){
            this.dataChange=item;
            this.flag=true
        },
        handleHotDetails(item){
            this.$router.push("/partylist?pinyinName="+item.pinyinName)
        }
    },
    created(){
       this.handlefocus();
    },
    watch:{
        dataChange(newVal){
            this.flag=true;
            throttle( async ()=>{
                let data = await api.serachKey(newVal);
                this.searchKeywordList = data.result;
                console.log(data)
            })
        },
        // history(newVal){        
        //     console.log(this.newVal)
        // }
    }
}
</script>

<style lang="scss">
#search{
    background:#fff;
    width:100%;
    height: 100%;
    #search_head{
        width:100%;
        height:.94rem;
        padding:.18rem .34rem;
        background:#fff;
        display:flex;
        align-items: center;
        position: fixed;
        top:0;
        z-index:10;
        box-shadow: 0 2px 5px #f4f4f4;
        .center{
            width:5.98rem;
            height:.58rem;                
            display:flex;
            background:#f4f4f4;
            text-indent: .1rem;
            line-height: .58rem;
            margin-right:.2rem;
            input{
                border:0;
                text-indent:.08rem;
                background:#f4f4f4;
                margin-left:.2rem;
                outline:none;
            }
        } 
        .search_quit{
            font-size:.3rem;
        }
    }
    #search_content{
        padding:.56rem .34rem .2rem;
        margin-top: .94rem;
        ul{
            margin-top:.48rem;
            display: flex;
            flex-wrap: wrap;
            li{

                height:.7rem;
                padding:.16rem .12rem;
                background:#efefef;
                word-break: keep-all;
                margin:0 .24rem .2rem 0;
                border-radius: .08rem;
            }
        }
        #search_history{
            ul{
            margin-top:.48rem;
            display: flex;
            flex-wrap: wrap;
            li{

                height:.7rem;
                padding:.16rem .12rem;
                background:#efefef;
                word-break: keep-all;
                margin:0 .24rem .2rem 0;
                border-radius: .08rem;
            }
        }
        }
    }
   #search_list{
            padding:.56rem .34rem;
            width:100%;
            height:100%;
            margin-top: .94rem;
            font-size:.26rem;
            color:#666;
            ul{
                li{
                    width:100%;
                    height:.96rem;
                    padding:.3rem 0;
                    display: flex;
                    justify-content: space-between;
                    span:nth-of-type(1){
                        display:inline-block;
                        width:5.78rem;
                        height:.36rem;
                        overflow: hidden;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    span:nth-of-type(2){
                        width:1.04rem;
                        height:.36rem;
                        text-align:right;
                    }
                }
            }
        }
}
</style>