<template>
   <div id="login">
      <div>
           <input type="text" placeholder="手机号/邮箱"  v-model="num" />
      </div>
      <div>
           <input type="text" placeholder="密码（8-16位）" v-model="psd"/>
      </div>
      <v-touch tag="button" id="login_btn"  @tap="handleRegister">注册</v-touch>
   </div>
</template>

<script>
import Vue from 'vue';
import { Toast,Dialog } from 'vant';

Vue.use(Toast);
Vue.use(Dialog);

import http from "@utils/request.js"
export default {
    name:"Login",
    data(){
       return{
            num:"",
            psd:""
       }
    },
    methods:{
       async  handleRegister(){
            let data =await http({
                method:"get",
                url:"http://localhost:3000/userdata?username="+this.num,
            });
            
            if(data.length>0){
                 this.$toast("用户名已注册！");
            }else{
                 var that=this;
                 this.$dialog.confirm({
                        title: '提示',
                        message: '注册成功，是否登录？'
                    }).then(() => {
                        that.$router.push("/login")
                    }).catch(() => {

                    });
            }
        }
    }
}
</script>

<style lang="scss">
    #login{
        width:100%;
        height:100%;
        background-color: #fff;
        padding:2rem .6rem;
        div{
            width:100%;
            height:1rem;
            margin-bottom:.8rem;
            input{
                width:100%;
                height:100%;
                border:0;
                
            }
            border-bottom:1px solid #ccc;
        }
        #login_btn{
            width:100%;
            height:1rem;
            border:0;
            border-radius:10px;
            background-color:#00be88;
            color:#fff;
            font-size:.32rem;

        }
    }
</style>