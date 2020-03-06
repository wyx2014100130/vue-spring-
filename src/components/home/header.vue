<template>
    <div id="search" ref="head">
        <div class="cities"> 
            <span>{{city}}</span>
            <i class="iconfont">&#xe604;</i>
            <i class="tag">|</i>
        </div>
        <div class="searchcontent">
            <i class="iconfont">&#xe68f;</i>
            <input type="text" placeholder="搜索你想去的地方">
        </div>
    </div>
</template>

<script>
export default {
    name:"Search",
    data(){
        return {
           city:"上海",
        }
    },
    created(){
        //  console.log(this.$refs.head);
    }    
}
</script>

<style>
    #search{
        position: absolute;
        z-index: 1;
        top:2.68rem;
        left:.2rem;
        width:7.1rem;
        height:.84rem ;
        padding: 0 .3rem;
        border:0;
        background:#fff;
        display:flex;
        border-radius:3px;
        box-shadow: 0 .04rem .1rem rgba(0,0,0,.1);
    }
    #search .cities{
            width:1.3rem;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            color:#666;
            padding:.1rem;
        }
    #search span{
                margin-right:.1rem;
    }
     #search  .iconfont{
                font-size:.16rem;
    }
    #search  .tag{
                font-style: normal;
                position:absolute;
                right:0;
                color:#ccc;
    }
    .searchcontent{
            width:5.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#ccc;
        }
    .searchcontent  .iconfont{
                margin-right:.2rem;
            }
    .searchcontent  input{
                font-size: .2rem;
                border:0;
            }
</style>