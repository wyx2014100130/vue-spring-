
<template>
  <div class="content">
    <div class="goods" v-for="(item) in goods" :key="item.id">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsSelected(item.id)"/>
      </label>
      <div class="goodsImg">
        <img :src="item.imgUrl" alt />
      </div>
      <div class="goodsInfo">{{item.goodsName}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReduce(item.id)">-</button>
        <input type="text"  :value="item.num"/>
        <button @click="handleAdd(item.id)">+</button>
      </div>
      <p class="Subtotal">11</p>
      <p class="operation">删除</p>
    </div>
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from "vuex";
export default {
  name: "center",
  created() {
    this.getAsyncGoods();
  },
  computed: {
    ...mapState({
      goods:state=>state.goods
    })
  },
  methods: {
    ...mapActions({
      getAsyncGoods:"getAsyncGoods"
    }),
    ...mapMutations({
      handleGoodsSelected:"handleGoodsSelected",
      handleReduce:"handleReduce",
      handleAdd:"handleAdd"
    })
  },

};
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  height: 107px;
  align-items: center;
  background: #ccc;
}
.goods > label {
  width: 118px;
  text-align: center;
}
.goods > .goodsInfo {
  width: 200px;
}
.goods > .goodsPrice {
  width: 200px;
  text-align: center;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  width: 20px;
  height: 20px;
  border: 0;
}
.goods > .num > input {
  width: 40px;
}

.goods > .Subtotal {
  width: 200px;
  text-align: center;
}

.goods > .operation {
  width: 86px;
  text-align: center;
}
.goodsImg img {
  width: 80px;
  height: 80px;
}
</style>