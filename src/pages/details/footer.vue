<template>
    <div id="footer">
        <ul>
            <button>收藏</button>
            <v-touch tag="button" @tap="handleCart">立即预定</v-touch>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Footer",
    props:["product"],
    methods:{
        handleCart(){
            console.log(product)
        }
    }
}
</script>

<style lang="scss">
#footer{
    height:1rem;
    width:100%;
    position: fixed;;
    bottom:0;
    left:0;
    background:#fff;
    z-index:10;
    ul{
       display:flex;
       justify-content: space-around;
       align-items: center;
       height:100%;
       button{
           font-size:.32rem;
           border:0px;
           width:1.8rem;
           height: .8rem;
           background: #fff;
       }

    }
}
</style>