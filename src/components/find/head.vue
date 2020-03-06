<template>
    <div id="findVue">    
        <div class="findVue_head">
            <v-touch tag="i" class="iconfont" @tap="handle">&#xe605;</v-touch>
            <span>发现</span>
        </div>
         <!-- <div class="findVue_contain">
            <div class="findVue_search">
                <i class="iconfont">&#xe68f;</i>
                <input type="text" placeholder="按关键词搜索一下">
                <i class="iconfont"></i>
            </div>
        </div> -->
    </div>
</template>
<script>

export default {
    name:"FindHead",
    components:{
        
    },
    methods:{
        handle(){
            this.$router.back();
        }
    }
}
</script>
<style lang="scss">
#findVue{
    position: relative;
    height:.8rem;
        .findVue_head{
        height:.8rem;
        width:100%;
        padding:0 .3rem;
        display: flex;
        justify-content: center;
        background:#fff;
        position:fixed;
        top:0;
        left:0;
        z-index:12;
        .iconfont{
            position: absolute;;
            left:.3rem;
            color:#00be88;
        }
        align-items: center;
        font-size:.32rem;
        }
        // .findVue_contain{
        //     height:.96rem;
        //     width:100%;
        //     padding:.18rem .28rem;
        //     position:absolute;
        //     top:.8rem;
        //     .findVue_search{
        //         background: #fff;
        //        width: 6.92rem;
        //        height:.6rem;
        //        border:1px solid #ccc;
        //        padding:0 .3rem;
        //        border-radius: .3rem;         
        //        display: flex;
        //        align-items: center;
        //        input{
        //            width:5.6rem;
        //            margin-left:.2rem;
        //            border:0;
        //        }

                
        //     }
    // }
    
}
</style>