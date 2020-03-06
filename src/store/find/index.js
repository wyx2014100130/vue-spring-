import http from "../../utils/request.js";
import api from "../../api/index.js";
export default {
    state:{
        articals:localStorage.getItem("articals")?JSON.parse(localStorage.getItem("articals")):[],
           
    },
    mutations:{
        getArticals(state,data){
            state.articals=data;    
        },
    },
    actions:{
        async Articals({commit},params){
            let articals=await api.artical(params);
            commit("getArticals",articals.data);
            localStorage.setItem("articals",JSON.stringify(articals.data));
        }
                 
    },
    namespaced:true
}