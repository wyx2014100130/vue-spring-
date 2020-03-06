<template>
  <div class="footer">
    <label>
      <input type="checkbox" :checked="$store.state.selectedAll"/>全选
    </label>
    <p>删除所有商品</p>
    <p class="count">
      已选择
      <span>{{$store.getters.goodsCount.goodsNum}}</span>商品
    </p>
    <p class="total">总价:{{$store.getters.goodsCount.goodsPrice}}</p>
    <router-link tag="a" to="/address" href="">结算</router-link>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
    name:"bottom",
 
   
};
</script>

<style>
.footer {
  margin-top: 5px;
  display: flex;
  height: 52px;
  width: 100%;
  align-items: center;
  border: 1px solid #f3f3f3;
  justify-content: space-between;
}
.footer > a {
  height: .8rem;
  width:1rem;
  color: #fff;
  text-align: center;
  display: block;
  background: #c33;
  line-height: 52px;
  font-size: 18px;
  line-height: .8rem;
}
.footer > .total,
.footer > .count {
  /* width: 2rem; */
  text-align: center;
}
</style>