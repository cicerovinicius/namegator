(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),i("div",{attrs:{id:"main"}},[i("DomainList")],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center-align",attrs:{id:"slogan"}},[i("h1",[t._v("NameGator")]),i("h6",[t._v("Gerador de domínios")])])}],r=(i("dc53"),i("4d5c"),i("7f10"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col s6"},[i("AppItemList",{attrs:{items:t.prefixes,title:"Prefixos"},on:{addItem:t.addPrefix,deleteItem:t.deletePrefix}})],1),i("div",{staticClass:"col s6"},[i("AppItemList",{attrs:{items:t.sufixes,title:"Sufixos"},on:{addItem:t.addSufix,deleteItem:t.deleteSufix}})],1),i("div",{staticClass:"col s12"},[i("h5",[t._v("Domínios "),i("span",{staticClass:"badge"},[t._v(t._s(t.domains.length))])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("ul",{staticClass:"collection"},t._l(t.domains,(function(e){return i("li",{key:e,staticClass:"row collection-item"},[i("div",{staticClass:"col s9"},[t._v(t._s(e.name))]),i("div",{staticClass:"col s3 right-align"},[i("a",{staticClass:"btn green accent-3",attrs:{href:e.checkout,target:"_blank"}},[i("i",{staticClass:"fa fa-shopping-cart"})])])])})),0)])])])])])])}),o=[],c=i("b85c"),l=(i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",[t._v(t._s(t.title)+" "),i("span",{staticClass:"badge"},[t._v(t._s(t.items.length))])]),i("div",{staticClass:"card"},[i("div",{staticClass:"card-content"},[i("ul",{staticClass:"collection"},t._l(t.items,(function(e){return i("li",{key:e,staticClass:"row collection-item"},[i("div",{staticClass:"col s9"},[t._v(t._s(e))]),i("div",{staticClass:"col s3 right-align"},[i("button",{staticClass:"btn red darken-4",on:{click:function(i){return t.deleteItem(e)}}},[i("i",{staticClass:"fa fa-trash"})])])])})),0),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item"}],attrs:{id:"item_input",type:"text"},domProps:{value:t.item},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(t.item)},input:function(e){e.target.composing||(t.item=e.target.value)}}}),i("label",{attrs:{for:"item_input"}},[t._v("Digite o item")])]),i("div",{staticClass:"input-field col s3"},[i("button",{staticClass:"btn waves-effect waves-light",on:{click:function(e){return t.addItem(t.item)}}},[i("i",{staticClass:"fa fa-plus"})])])])])])])}),u=[],d={name:"AppItemList",props:["items","title"],data:function(){return{item:""}},methods:{addItem:function(t){this.$emit("addItem",t),this.item=""},deleteItem:function(t){this.$emit("deleteItem",t)}}},f=d,p=i("2877"),m=Object(p["a"])(f,l,u,!1,null,"07144c1c",null),v=m.exports,h={name:"app",components:{AppItemList:v},data:function(){return{prefixes:["Air","Jet","Flight"],sufixes:["Hub","Station","Mart"]}},methods:{addPrefix:function(t){this.prefixes.push(t)},addSufix:function(t){this.sufixes.push(t)},deletePrefix:function(t){this.prefixes.splice(this.prefixes.indexOf(t),1)},deleteSufix:function(t){this.sufixes.splice(this.sufixes.indexOf(t),1)},generate:function(){this.domains=[];var t,e=Object(c["a"])(this.prefixes);try{for(e.s();!(t=e.n()).done;){var i,s=t.value,n=Object(c["a"])(this.sufixes);try{for(n.s();!(i=n.n()).done;){var a=i.value;this.domains.push(s+a)}}catch(r){n.e(r)}finally{n.f()}}}catch(r){e.e(r)}finally{e.f()}}},computed:{domains:function(){var t,e=[],i=Object(c["a"])(this.prefixes);try{for(i.s();!(t=i.n()).done;){var s,n=t.value,a=Object(c["a"])(this.sufixes);try{for(a.s();!(s=a.n()).done;){var r=s.value,o=n+r,l=o.toLowerCase(),u="https://checkout.hostgator.com.br/?a=add&sld=".concat(l,"&tld=.com.br");e.push({name:o,checkout:u})}}catch(d){a.e(d)}finally{a.f()}}}catch(d){i.e(d)}finally{i.f()}return e}}},b=h,x=Object(p["a"])(b,r,o,!1,null,null,null),_=x.exports,g={name:"app",components:{DomainList:_}},y=g,C=(i("034f"),Object(p["a"])(y,n,a,!1,null,null,null)),O=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.e4652d5d.js.map