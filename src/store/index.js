import Vue from 'vue'
import Vuex from 'vuex'
import homepage from "./homepage";
import find from "./find";
import cart from "./cart"
import http from "@/utils/request.js";
import api from "@/api/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      goods:[],
      selectedAll:true,
      user:"",
  },
  actions:{
        async getAsyncGoods({commit}){
            let data = await http({
                method:"get",
                url:" http://localhost:3000/cartList"
            })
            data.forEach(item=>{
                item.flag = true;
            })
            commit("handleAsyncMutaionGoods",data)
        },
        async loginEvent({commit},user){
            let data = await http({
                 method:"get",
                 url:" http://localhost:3000/userdata?username="+user.name
            })
            console.log(data);
            if(user.pwd===data[0].password){
                 commit("loginEventData",name);
                //  return 200;
            }else{
                return "err"
            }
           
        }
    },
    mutations:{
        handleAsyncMutaionGoods(state,data){
            state.goods = data;        
        },
        loginEventData(state,data){
            state.user=data;
        },
       
        handleToggleAll(state){
            state.selectedAll = !state.selectedAll;

            state.goods.forEach(item=>{
                item.flag = state.selectedAll
            })
        },
        handleGoodsSelected(state,id){
            state.goods.forEach(item=>{
                if(item.id == id){
                    item.flag = !item.flag;
                }
            })

            var bStop = true;
            //检测如果商品中有一个元素为选中则selectedAll为false  都被选中为true
            for(var i=0;i<state.goods.length;i++){
                if(!state.goods[i].flag){
                    bStop = false;
                    break;
                }
            }

            state.selectedAll = bStop;
        },
        handleReduce(state,id){
           for(var i=0;i<state.goods.length;i++){
               if(state.goods[i].id == id){
                   if(state.goods[i].num <= 1){
                     state.goods[i].num = 1
                   }else{
                    state.goods[i].num--
                   }

                   break;
               }
           }
        },
        handleAdd(state,id){
            for(var i=0;i<state.goods.length;i++){
                if(state.goods[i].id == id){
                    
                     state.goods[i].num++;
                     break;
                    
                }
            }
        },
         handleDelete(state,id){
            for(let i=0;i<state.goods.length;i++){
                if(state.goods[i].id==id){                  
                    state.goods.splice(i,1);
                    break;
                }
            }
            
        }
    },
    getters:{
        goodsCount(state){
            let goodsNum = 0,goodsPrice = 0;
            for(var i=0;i<state.goods.length;i++){
                if(state.goods[i].flag){
                    goodsNum += state.goods[i].num;
                    goodsPrice += state.goods[i].num * state.goods[i].price;
                }
            }

            return {
                goodsNum,
                goodsPrice
            }
        }
    },
  modules: {
    homepage,
    find,
    cart
  }
})
