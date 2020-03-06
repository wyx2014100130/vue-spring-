import { mapActions, mapState, mapMutations } from 'vuex';
<template>
   <div id="login">
      <div>
           <input type="text" placeholder="手机号/邮箱" v-model="user"/>
      </div>
      <div>
           <input type="text" placeholder="密码（8-16位）" v-model="pwd"/>
      </div>
      <v-touch tag="button"  @tap="handleLogin" id="login_btn">登录</v-touch>
   </div>
</template>

<script>
import Vue from 'vue';
import {mapActions,mapState,mapMutations} from "vuex";
import { Toast,Dialog } from 'vant';

Vue.use(Toast);
Vue.use(Dialog);
export default {
    name:"Login",
    data(){
        return{
            user:"",
            pwd:""
        }
    },
    methods:{    
        async handleLogin(){           
            let code=await this.loginEvent({name:this.user,pwd:this.pwd});
            console.log(code)
            if(code=="err"){
                 this.$toast("密码错误！");
               
            }else{
                this.$router.push("/")
            }
        },
        ...mapActions({
            loginEvent:"loginEvent"
        })
    

    },

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