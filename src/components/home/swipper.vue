<template>
    <swiper :options="swiperOption" class="homeBanner" ref="mySwiper" >
    <!-- slides -->
        <swiper-slide v-for="(item,index) in banners" :key="index"> 
            <img :src="item" />
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

</template>
<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
export default {
    name:"Swiper",
    data(){
        return{
            banners:["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.png","./img/5.jpg"],
            swiperOption:{
                autoplay: {
                    disableOnInteraction: false,
                 },
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    },
    components: {
    swiper,
    swiperSlide
  }
}
    
</script>
<style scoped>
.homeBanner{
    width:100%;
    height:3.2rem;
}
.homeBanner img{
    width:100%;
    height:100%;
}
.swiper-pagination{
    bottom:.8rem !important;
    text-align: right;
    padding-right:.4rem;
}

</style>