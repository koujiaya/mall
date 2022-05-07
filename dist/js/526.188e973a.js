"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[526],{526:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{staticClass:"cart"},[s("h4",[t._v("全部商品")]),s("div",{staticClass:"cart-main"},[t._m(0),s("div",{staticClass:"cart-body"},t._l(t.cartInfoList,(function(a){return s("ul",{key:a.skuId,staticClass:"cart-list"},[s("li",{staticClass:"cart-list-con1"},[s("input",{attrs:{type:"checkbox",name:"chk_list"},domProps:{checked:1===a.isChecked},on:{change:function(s){return t.updateChecked(a.skuId,a.isChecked)}}})]),s("li",{staticClass:"cart-list-con2"},[s("img",{attrs:{src:a.imgUrl},on:{click:function(s){return t.jumpDetail(a.skuId)}}}),s("div",{staticClass:"item-msg",on:{click:function(s){return t.jumpDetail(a.skuId)}}},[t._v(t._s(a.skuName))])]),s("li",{staticClass:"cart-list-con4"},[s("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(a.cartPrice,"￥")))])]),s("li",{staticClass:"cart-list-con5"},[s("button",{staticClass:"mins",attrs:{disabled:1===a.skuNum},on:{click:function(s){return t.updateSkuNum("minus",-1,a)}}},[t._v(" - ")]),s("input",{staticClass:"itxt",attrs:{type:"text",minnum:"1",autocomplete:"off"},domProps:{value:a.skuNum},on:{input:function(s){return t.updateSkuNum("input",1*s.target.value,a)}}}),s("button",{staticClass:"plus",on:{click:function(s){return t.updateSkuNum("plus",1,a)}}},[t._v(" + ")])]),s("li",{staticClass:"cart-list-con6"},[s("span",{staticClass:"sum"},[t._v(t._s(t._f("currency")(a.cartPrice*a.skuNum,"￥")))])]),s("li",{staticClass:"cart-list-con7"},[s("a",{staticClass:"sindelet",on:{click:function(s){return t.deleteCart(a.skuId)}}},[t._v("删除")]),s("br"),s("a",{attrs:{href:"#none"}},[t._v("移到收藏")])])])})),0)]),s("div",{staticClass:"cart-tool"},[s("div",{staticClass:"select-all"},[s("input",{staticClass:"chooseAll",attrs:{type:"checkbox",disabled:0===t.cartInfoList.length},domProps:{checked:t.isAllChecked&&t.cartInfoList.length>0},on:{change:t.updateAllChecked}}),s("span",[t._v("全选")])]),s("div",{staticClass:"option"},[s("a",{on:{click:t.deleteAllChecked}},[t._v("删除选中的商品")]),s("a",{attrs:{href:"#none"}},[t._v("移到我的关注")]),s("a",{attrs:{href:"#none"}},[t._v("清除下柜商品")])]),s("div",{staticClass:"money-box"},[s("div",{staticClass:"chosed"},[t._v(" 已选择 "),s("span",[t._v(t._s(t.totalItem))]),t._v("件商品 ")]),s("div",{staticClass:"sumprice"},[s("em",[t._v("总价（不含运费） ：")]),s("i",{staticClass:"summoney"},[t._v(t._s(t._f("currency")(t.totalPrice,"￥"))+"元")])]),s("div",{staticClass:"sumbtn"},[s("a",{staticClass:"sum-btn",on:{click:t.jumpTrade}},[t._v("结算")])])])])])])},c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart-th"},[s("div",{staticClass:"cart-th1"},[t._v("全部")]),s("div",{staticClass:"cart-th2"},[t._v("商品")]),s("div",{staticClass:"cart-th3"},[t._v("单价（元）")]),s("div",{staticClass:"cart-th4"},[t._v("数量")]),s("div",{staticClass:"cart-th5"},[t._v("小计（元）")]),s("div",{staticClass:"cart-th6"},[t._v("操作")])])}],i=s(2196),r=s(4665),l={name:"ShopCart",methods:{...(0,r.nv)("shopcart",["getCartList","deleteCartById","updateCheckedById","deleteAllCheckedCart","updateAllCheckedCart"]),...(0,r.nv)("detail",["addOrUpdateShopCart"]),getCartData(){this.getCartList()},updateSkuNum:(0,i.debounce)((async function(t,a,s){switch(t){case"plus":a=1;break;case"minus":a=s.skuNum>1?-1:0;break;case"input":a=isNaN(a)||a<1?0:parseInt(a-s.skuNum)}try{await this.addOrUpdateShopCart({skuId:s.skuId,skuNum:a}),this.getCartData()}catch(e){alert(e.message)}}),500),async deleteCart(t){try{await this.deleteCartById(t),this.getCartData()}catch(a){alert(a.message)}},async updateChecked(t,a){try{a=0===a?1:0,await this.updateCheckedById({skuId:t,isChecked:a}),this.getCartData()}catch(s){alert(s.message)}},async deleteAllChecked(){try{await this.deleteAllCheckedCart(),this.getCartData()}catch(t){alert(t.message)}},async updateAllChecked(){try{let t=this.isAllChecked?0:1;await this.updateAllCheckedCart(t),this.getCartData()}catch(t){alert(t.message)}},jumpDetail(t){this.$router.push({name:"detail",params:{skuid:t}})},jumpTrade(){this.$router.push("/trade")}},computed:{...(0,r.Se)("shopcart",["cartList"]),cartInfoList(){return this.cartList.cartInfoList||[]},totalPrice(){let t=0;return this.cartInfoList.forEach((a=>{t+=a.skuNum*a.cartPrice})),t},totalItem(){let t=0;return this.cartInfoList.forEach((a=>{1===a.isChecked&&t++})),t},isAllChecked(){return this.cartInfoList.every((t=>1===t.isChecked))}},created(){this.getCartData()}},n=l,u=s(1001),d=(0,u.Z)(n,e,c,!1,null,"7d68a715",null),h=d.exports}}]);