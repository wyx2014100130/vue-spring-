import http from "../../utils/request.js";
import api from "../../api/index.js";
export default {
    state:{
        homeNow:localStorage.getItem("homeData")?JSON.parse(localStorage.getItem("homeData")).homeNow:[],
        overseas:localStorage.getItem("homeData")?JSON.parse(localStorage.getItem("homeData")).overseas:[],
        inland:localStorage.getItem("homeData")?JSON.parse(localStorage.getItem("homeData")).inland:[],
        likeData:localStorage.getItem("homeData")?JSON.parse(localStorage.getItem("homeData")).likeData:[],
        hotSeason:localStorage.getItem("homeData")?JSON.parse(localStorage.getItem("homeData")).hotSeason:[],
    },
    mutations:{
        gethomeData(state,data){
            state.homeNow=data.homeNow;
            state.overseas=data.overseas;
            state.inland=data.inland;
            state.likeData=data.likeData;
            state.hotSeason=data.hotSeason;
        },
    },
    actions:{
        async gethomeNow({commit}){
            let homeNow_data=await api.homeNow();
            let overseas_data=await api.overseas();
            let inland_data=await api.inland();
            let like_data=await api.likeData();
            let hotseason_data=await api.hotSeason();
            let data={
                homeNow:homeNow_data.data,
                overseas:overseas_data.data,
                inland:inland_data.data,
                likeData:like_data.data,
                hotSeason:hotseason_data.data
            }
           
            commit("gethomeData",data);
            localStorage.setItem("homeData",JSON.stringify(data));
        },
                 
    },
    namespaced:true
}