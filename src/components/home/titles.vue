<template>
    <div id="titles">
        <ul>
            <li v-for="(item,index) in titlesOne" :key="index">
                <img :src="item.imgUrl"/>
                <span>{{item.name}}</span>
            </li>
            <br/>
            <li v-for="(item,index) in titlesTwo" :key="index+5">
                <img :src="item.imgUrl"/>
                <span>{{item.name}}</span>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    name:"Titles",
    data(){
        return {
            titlesOne:[
                {
                    imgUrl:"./img/11.png",
                    name:"国内游"
                },
                {
                    imgUrl:"./img/22.png",
                    name:"出境游"
                },
                {
                    imgUrl:"./img/33.png",
                    name:"跟团游"
                },
                {
                    imgUrl:"./img/44.png",
                    name:"自由行"
                },
                {
                    imgUrl:"./img/55.png",
                    name:"超级会员"
                },
            ],
            titlesTwo:[
                {
                    imgUrl:"./img/66.png",
                    name:"周边游"
                },
                {
                    imgUrl:"./img/77.png",
                    name:"签证"
                },
                {
                    imgUrl:"./img/88.png",
                    name:"日本游"
                },
                {
                    imgUrl:"./img/99.png",
                    name:"欧美非"
                },
                {
                    imgUrl:"./img/100.png",
                    name:"生活+"
                },
            ]
        }
    }
}
</script>
<style lang="scss">
#titles{
    width:100%;
    height: 4.28rem;
    // position: absolute;
    // top:3.2rem;
    padding:.46rem .2rem .2rem;
    margin:0 0 .2rem;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        flex-wrap: wrap;
        li{
            width:1.22rem;
            height:1.32rem;
            text-align:center;
            margin:.28rem .2rem 0 0;
            img{
                width:1.26rem;
                height:1rem;
            }
            &:nth-of-type(5){
                word-wrap:break-word;
            }
        }
    }
}
</style>