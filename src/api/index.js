import axios from "axios";
import request from "@utils/request.js";
import qs from "qs"
 //首页-当期狂欢
const homeNow = ()=>{
      return request({
            method:"get",
            url: "/m/home/queryContent",
            data:{
                cityId:"145",
                positionId:"99",
                t:"202002251754",
                springsign: "9F828673245274FCD5CFFDDAB1BC7DE011F27964"
            }
        })
      
}
 //首页-品质出境
  const overseas=()=>{
       return request({
            method:"get",
            url: "/m/home/queryContent",
            data:{
                "cityId":"145",
                "positionId":"102",
                "t":"" ,
                "springsign":"D4C5CEA1D7F48821072A99C0DBD4AD58853B4712"
            }
        })
        
   }
  // 首页-省心国内
  const inland=async function(){
       var data=await request({
            url:"/m/home/queryContent",
            method:"get",
            data:{
                cityId:"145",
                positionId:"104",
                t: "",
                springsign:"71A47D0FC58E3C910F27003230E3E17FBF1D2690"
            }
      });
      return data;
  }   

 //首页-猜你喜欢
  const likeData=()=>{
        return request({
            url:"/m/home/queryContent",
            methods:"get",
            data:{
                cityId: '145',
                positionId:  '101',
                t:'',
                springsign: '51C048D3A3623B0BDC692A243662AF073A00504F'
            }
      });
   
  }
//本季热推
const hotSeason =()=>{
        return request({
            url:"/m/home/queryContent",
            methods:"get",
            data:{
                cityId: '145',
                positionId:  '103',
                t:'',
                springsign: 'ABFF5848BF1E807374DFA4ED9DE9882398C1FA55'
            }
      });
   
  }
//热门搜索
const hotSearch=()=>{
    return request({
        url:"/m/",
        data:{
            cityId: '1279',
            positionId: '3059',
            t:'',
            springsign: 'B2F46F84197A1A7AFB434FD368BF3423224166BC'
        }
    })
}
//详情
const details=(url)=>{
    return request({
        methods:"get",
        url:url
    })
}
//artical
const artical=(optiond)=>{
    return request({
        method:"post",
        url:"/m/find/queryFindArticle",
        headers: {
            'Content-Type': 'application/json'
        },       
        data:optiond      
    })
}
//details
const goosdetails =(id)=>{
    return request({
        method:"get",
        url:" http://localhost:3000/goodlist?Id="+id,
    })
}
const cityList=()=>{
    return request({
        method:"get",
        url:"/ajax/home/cityList"
    })
}
//西十区票务
const partyList=(data)=>{
    return request({
        method:"get",
        url:"/ajax/activity/list",
        data:{
            "frontCate": data,
            "date": "",
            "order": -1,
            "page": 1
        }
    })
}
const partyListDetails=(data)=>{
     return request({
        method:"get",
        url:"/ajax/activity/detail",
        data:{
            pinyinName:data
        }
    })
}
const search =(data)=>{
    return request({
        method:"get",
        url:"/ajax/activity/search"
    })
}
const serachKey=(keywords)=>{
    return request({
        methods:"get",
        url:"/ajax/keywords",
        data:{
            q:keywords
        }
    })
}
export default {
    homeNow,
    overseas,
    inland,
    hotSeason,
    likeData,
    details,
    artical,
    goosdetails,
    cityList,
    partyList,
    partyListDetails,
    search,
    serachKey
}