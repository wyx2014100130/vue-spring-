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
    <a href="##">结算</a>
  </div>
</template>

<script>

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
  height: 100%;
  width: 94px;
  color: #fff;
  text-align: center;
  display: block;
  background: #c33;
  line-height: 52px;
  font-size: 18px;
}
.footer > .total,
.footer > .count {
  width: 200px;
  text-align: center;
}
</style>