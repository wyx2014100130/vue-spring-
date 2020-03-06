<template>
   <div id="address">
      <div id="findVue_head">
            <v-touch tag="i" class="iconfont" @tap="handleTap">&#xe605;</v-touch>
            <span>常用地址</span>
      </div>
      <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            add-button-text="选择地址"
    />
   </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit,Toast,Area,AddressList    } from 'vant';
Vue.use(Area);
Vue.use(AddressList);
Vue.use(AddressEdit);
export default {
     data() {
    return {
      chosenAddressId: '1',
      addButtonText:"选择地址",
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    onAdd() {
     Toast('结算成功');
    //  this.$router.push()
    },
    onEdit(item, index) {
     // Toast('编辑地址:' + index);
    },
   handleTap(){
     this.$router.back();
   }
  }
}
</script>

<style lang="scss">
#address{
  width:100%;
  height:.8rem;
  #findVue_head{
     position: relative;
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
   .van-address-list{
     padding-top:1.5rem;
   }   
   .van-address-list__bottom{
     bottom:2rem;
   }
}
 
</style>