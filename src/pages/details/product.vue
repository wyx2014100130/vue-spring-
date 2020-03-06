<template>
    <div id="product">
        <h2>产品描述</h2>
        <p><span></span>亮点推荐</p>
        <ul>
            <li v-for="(item,index) in product.Recommend" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Product",
    props:["product"]
}
</script>

<style lang="scss">
#product{
    padding:.3rem;
    width:100%;
    height:auto;
    h2{
        font-size:.3rem;
        text-indent: .2rem;

        border-left:2px solid #00be88;
        line-height:1;
        margin-bottom:.3rem;
    }
    p{
        font-size:.28rem;
        span{
            display: inline-block;
            width:.14rem;
            height:.14rem;
            background: #00be88;
            border-radius: 50%;
            margin-right:.2rem;
        }
    }
    ul{
        margin-top:.3rem;
        font-size:.28rem;
        li{
            letter-spacing: .05rem;
            color:#666;
            line-height:.4rem;
            margin-bottom:.1rem;
        }
    }
}
</style>