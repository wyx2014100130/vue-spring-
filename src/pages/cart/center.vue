
<template>
  <div class="content">
    <div class="goods" v-for="(item) in goods" :key="item.id">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsSelected(item.id)"/>
      </label>
      <div class="goodsImg">
        <img :src="item.img" alt />
      </div>
      <div class="goodsInfo">{{item.nane}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReduce(item.id)">-</button>
        <input type="text"  :value="item.num"  />
        <button @click="handleAdd(item.id)">+</button>
      </div>
      <p class="Subtotal">{{item.num*item.price}}</p>
      <p class="operation"  @click="handleDelete(item.id)">删除</p>
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
      handleAdd:"handleAdd",
       handleTotal:"handleTotal",
      handleDelete:"handleDelete",
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
  background: #fff;
}
.goods > label {
  width: 118px;
  text-align: center;
}
.goods > .goodsInfo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height:1rem;
  width: 200px;
  line-height:1rem;
}
.goods > .goodsPrice {
 
  width: 200px;
  text-align: center;
}
.goods > .num {
 
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
  width: .8rem;
  height: .8rem;
}
</style>