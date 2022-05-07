"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[804],{54804:function(a,t,s){s.r(t),s.d(t,{default:function(){return p}});var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("section",[s("TypeNav"),s("div",{staticClass:"main"},[s("div",{staticClass:"py-container"},[s("div",{staticClass:"bread"},[a._m(0),s("ul",{staticClass:"fl sui-tag"},[a.searchParams.categoryName?s("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.categoryName)),s("i",{on:{click:a.removeCategoryName}},[a._v("×")])]):a._e(),a.searchParams.keyword?s("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.keyword)),s("i",{on:{click:a.removeKeyword}},[a._v("×")])]):a._e(),a.searchParams.trademark?s("li",{staticClass:"with-x"},[a._v(" "+a._s(a.searchParams.trademark.split(":")[1])),s("i",{on:{click:a.removeTradeMark}},[a._v("×")])]):a._e(),a._l(a.searchParams.props,(function(t,e){return s("li",{key:t,staticClass:"with-x"},[a._v(" "+a._s(t.split(":")[1])),s("i",{on:{click:function(t){return a.removeAttr(e)}}},[a._v("×")])])}))],2)]),s("SearchSelector",{on:{getTradeMarkInfo:a.getTradeMarkInfo,getAttrInfo:a.getAttrInfo}}),s("div",{staticClass:"details clearfix"},[s("div",{staticClass:"sui-navbar"},[s("div",{staticClass:"navbar-inner filter"},[s("ul",{staticClass:"sui-nav"},[s("li",{class:{active:a.isActive("1")},on:{click:function(t){return a.changeOrder("1")}}},[s("a",[a._v("综合 "),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isActive("1"),expression:"isActive('1')"}],staticClass:"iconfont",class:{"icon-down":a.isDesc,"icon-up":!a.isDesc}})])]),s("li",{class:{active:a.isActive("2")},on:{click:function(t){return a.changeOrder("2")}}},[s("a",[a._v("价格"),s("span",{directives:[{name:"show",rawName:"v-show",value:a.isActive("2"),expression:"isActive('2')"}],staticClass:"iconfont",class:{"icon-down":a.isDesc,"icon-up":!a.isDesc}})])])])])]),s("div",{staticClass:"goods-list",on:{click:a.jumpDetail}},[s("ul",{staticClass:"yui3-g"},a._l(a.goodsList,(function(t){return s("li",{key:t.id,staticClass:"yui3-u-1-5"},[s("div",{staticClass:"list-wrap"},[s("div",{staticClass:"p-img"},[s("a",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.defaultImg,expression:"goods.defaultImg"}],attrs:{"data-goodsId":t.id}})])]),s("div",{staticClass:"price"},[s("strong",[s("em",[a._v("¥")]),s("i",[a._v(" "+a._s(t.price))])])]),s("div",{staticClass:"attr"},[s("a",{attrs:{title:t.title}},[a._v(a._s(t.title))])]),a._m(1,!0),a._m(2,!0)])])})),0)]),s("Pagination",{attrs:{pageNo:a.searchParams.pageNo,pageSize:a.searchParams.pageSize,total:a.total,continues:5},on:{jumpPageNo:a.jumpPageNo,changePageSize:a.changePageSize}})],1)],1)])],1)},r=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ul",{staticClass:"fl sui-breadcrumb"},[s("li",[s("a",{attrs:{href:"#"}},[a._v("全部结果")])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"commit"},[s("i",{staticClass:"command"},[a._v("已有"),s("span",[a._v("2000")]),a._v("人评价")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"operate"},[s("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[a._v("加入购物车")]),s("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[a._v("收藏")])])}],i=s(93019),c=(s(92222),s(26699),s(32023),s(47941),s(40561),s(74916),s(23123),function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"clearfix selector"},[s("div",{staticClass:"type-wrap logo"},[s("div",{staticClass:"fl key brand"},[a._v("品牌")]),s("div",{staticClass:"value logos"},[s("ul",{staticClass:"logo-list"},a._l(a.trademarkList,(function(t){return s("li",{key:t.tmId,on:{click:function(s){return a.clickTradeMark(t)}}},[a._v(" "+a._s(t.tmName)+" ")])})),0)]),a._m(0)]),a._l(a.attrsList,(function(t){return s("div",{key:t.attrId,staticClass:"type-wrap"},[s("div",{staticClass:"fl key"},[a._v(a._s(t.attrName))]),s("div",{staticClass:"fl value"},[s("ul",{staticClass:"type-list"},a._l(t.attrValueList,(function(e,r){return s("li",{key:r,on:{click:function(s){return a.clickAttr(t,e)}}},[s("a",[a._v(a._s(e))])])})),0)]),s("div",{staticClass:"fl ext"})])}))],2)}),n=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"ext"},[s("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[a._v("多选")]),s("a",{attrs:{href:"javascript:void(0);"}},[a._v("更多")])])}],o=s(34665),l={name:"SearchSelector",methods:{clickTradeMark:function(a){this.$emit("getTradeMarkInfo",a)},clickAttr:function(a,t){this.$emit("getAttrInfo",a,t)}},computed:(0,i.Z)({},(0,o.Se)("search",["trademarkList","attrsList"]))},h=l,u=s(1001),d=(0,u.Z)(h,c,n,!1,null,"83309c02",null),m=d.exports,v={name:"Search",components:{SearchSelector:m},data:function(){return{searchParams:{category1Id:void 0,category2Id:void 0,category3Id:void 0,categoryName:void 0,keyword:void 0,order:"1:desc",pageNo:1,pageSize:10,props:[],trademark:void 0}}},methods:(0,i.Z)((0,i.Z)({},(0,o.nv)("search",["getSearchInfo"])),{},{assignSearData:function(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},getSearchData:function(){this.getSearchInfo(this.searchParams),this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0},getTradeMarkInfo:function(a){this.searchParams.trademark="".concat(a.tmId,":").concat(a.tmName),this.getSearchData()},getAttrInfo:function(a,t){var s="".concat(a.attrId,":").concat(t,":").concat(a.attrName);this.searchParams.props.includes(s)||(this.searchParams.props.push(s),this.getSearchData())},removeCategoryName:function(){this.searchParams.categoryName=void 0;var a={name:"search"};0!==Object.keys(this.$route.params).length&&(a.params=this.$route.params),this.$router.push(a)},removeKeyword:function(){this.searchParams.keyword=void 0;var a={name:"search"};0!==Object.keys(this.$route.query).length&&(a.query=this.$route.query),this.$bus.$emit("clear"),this.$router.push(a)},removeTradeMark:function(){this.searchParams.trademark=void 0,this.getSearchData()},removeAttr:function(a){this.searchParams.props.splice(a,1),this.getSearchData()},changeOrder:function(a){var t=this.searchParams.order.split(":")[0],s=this.searchParams.order.split(":")[1],e="";e=a===t&&"desc"===s?"asc":"desc",this.searchParams.order=a+":"+e,this.getSearchData()},changePageSize:function(a){this.searchParams.pageNo=1,this.searchParams.pageSize=a,this.getSearchData()},jumpPageNo:function(a){this.searchParams.pageNo=a,this.getSearchData()},jumpDetail:function(a){var t=a.target,s=t.dataset.goodsid;s&&this.$router.push({name:"detail",params:{skuid:s}})}}),computed:(0,i.Z)((0,i.Z)({},(0,o.Se)("search",["goodsList","total"])),{},{isActive:function(){return function(a){return this.searchParams.order.includes(a)}},isDesc:function(){return this.searchParams.order.includes("desc")}}),watch:{$route:function(a,t){this.assignSearData(),this.getSearchData()}},created:function(){this.assignSearData(),this.getSearchData()}},g=v,f=(0,u.Z)(g,e,r,!1,null,"32e66bab",null),p=f.exports}}]);