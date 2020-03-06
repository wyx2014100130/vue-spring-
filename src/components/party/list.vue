<template>
    <div id="partylist">
        <ul v-for="(item,index) in partyData" :key="index">
            <v-touch tag="li" @tap="handle(item.pinyinName)">
                <img :src="item.actImgUrl"/>
                <div>
                    <h2>{{item.actName}}</h2>
                    <p>
                        <span>{{item.actFrom}} ~ </span>
                        <span>{{item.actTo}}</span>
                    </p>
                    <h3>{{item.veName}}</h3>
                    <h4> <span v-show="item.lowPrice!=0">￥{{item.lowPrice}}<small>起</small></span><span class="status"> {{item.actStatusName}}</span></h4>
                   
                    <h5>{{item.intro}}</h5>
                </div>
            </v-touch>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Partylist",
    props:["partyData"],
    data(){
        return {
            
        }
    },
    methods:{
        handle(data){
            this.$router.push("/partylist?pinyinName="+data)
        }
    }
}
</script>

<style lang="scss">
#partylist{
    padding:2.28rem .24rem 1rem ;
    width:100%;
    ul{
        width:100%;
        height:100%;
        li{
            padding:.2rem 0;
            margin-bottom:.2rem;
            display:flex;
            border-bottom:1px solid #999;
            img{
                width:1.4rem;
                height:1.96rem;
                margin-right:.4rem;
                
            }
            div{
                flex:1;
                h2{
                    font-size:.28rem;
                    color:#333;
                    margin-bottom:.1rem;
                }
                p,h3{
                    color:#999;
                    margin-bottom:.1rem;
                    font-size:.24rem;
                }
                h4{
                    font-size:.32rem;
                    margin-bottom:.1rem;
                    color:#ff5400;
                    position: relative;
                    span{
                        small{
                        font-weight:100;
                        font-size:.24rem;
                        
                    }
                    }
                    .status{
                            color: #ff5400;
                            border: 1px solid #ff5400;
                            border-radius:.1rem;
                            opacity:.5;
                            padding:.01rem;
                            margin-left:2.5rem;
                            font-size:.24rem;
                            position: absolute;
                            right:10px;
                        }
                }
                h5{
                    font-size:.24rem;
                    color:#999;
                    font-weight: 100;
                }
            }
        }
    }
}
</style>