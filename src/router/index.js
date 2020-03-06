import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./home"
import find from "./find"
import mine from "./mine"
import destination from "./destination"
import details from "./details";
import login from "./login";
import register from "./register";
import party from "./party";
import partylist from "./partylist";
import search from "./search"
import cart from "./cart"
import address from "./address"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  home,
  find,
  mine,
  destination,
  details,
  login,
  register,
  party,
  partylist,
  search,
  cart,
  address
]

const router = new VueRouter({
  routes
})

export default router
