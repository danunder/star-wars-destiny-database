(this.webpackJsonpswd=this.webpackJsonpswd||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/logo.faa1ee06.png"},29:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(34),n(18)),l=n(6),s=(n(39),n(3)),u=n(13),m=n(10),p=n(11),d=n(12);var f=function(e){var t=r.a.useState("loading"),n=Object(s.a)(t,2),a=n[0],o=n[1],i=r.a.useState({img:!1,load:!0,error:!1}),c=Object(s.a)(i,2),l=c[0],f=c[1],g=r.a.useState(0),v=Object(s.a)(g,2),h=v[0],E=v[1];r.a.useEffect((function(){var t;return t=setInterval((function(){E((function(e){return e+1})),a?null===e.imagesrc?f({img:!1,load:!1,error:!0}):f({img:!0,load:!1,error:!1}):f(h>3?{img:!1,load:!1,error:!0}:{img:!1,load:!0,error:!1})}),1e3),function(){return clearInterval(t)}}),[h]);var y=Object(d.f)();return r.a.createElement(u.b,{className:"card",to:{pathname:"/"+e.code,state:{background:y}}},r.a.createElement("h1",null,e.name),r.a.createElement("div",{className:"cardWrapper"},l.img&&r.a.createElement("img",{alt:e.name,onLoad:function(){o(!0)},onError:function(){o(!1)},src:e.imagesrc}),r.a.createElement("div",null,l.load&&r.a.createElement(m.a,{icon:p.e,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&r.a.createElement(m.a,{icon:p.c,style:{color:"red"},size:"6x"}))))};var g=function(e){return r.a.createElement("div",{className:"button",onClick:e.handleClick.bind(this)},e.text)};var v=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted,name:e.name}}),(function(e){return{changeLimit:function(){e({type:"INCREASE_LIMIT"})}}}))((function(e){var t,n=r.a.useState([]),a=Object(s.a)(n,2),o=a[0],i=a[1],c=r.a.useState(!0),l=Object(s.a)(c,2),u=l[0],m=l[1],p=r.a.useState(!1),d=Object(s.a)(p,2),v=d[0],h=d[1];function E(){var t=o,n=function(n){e.sorted[n].toggle&&(t=e.sorted.points.toggle?t.filter((function(t){return console.log(t,e.sorted[n].val),null!=t.points?t.points.includes(e.sorted[n].val):void 0})):t.filter((function(t){return t[n]===e.sorted[n].val})))};for(var a in e.sorted)n(a);return""!==e.name&&(t=t.filter((function(t){return!!t.name.includes(e.name)||(!!t.name.toLowerCase().includes(e.name)||!!t.name.toUpperCase().includes(e.name))}))),t}return r.a.useEffect((function(){fetch("https://swdestinydb.com/api/public/cards/").then((function(e){return e.json()})).then((function(e){console.log(e),m(!1),i(e)})).catch((function(){h(!0)}))}),[o,u]),0!==E().length?t=E().slice(0,e.itemLimit).map((function(e,t){return r.a.createElement(f,{key:t,name:e.name,imagesrc:e.imagesrc,code:e.code,loadColor:"#343740"})})):u||v?u&&!v?t=r.a.createElement("h1",null,"Fetching Cards..."):u&&v&&(t=r.a.createElement("h1",null,"Loading Cards failed. Refresh page...")):t=r.a.createElement("h1",null,"No cards in search"),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},t),function(){if(e.itemLimit<E().length&&E().length>10)return r.a.createElement(g,{handleClick:function(){return e.changeLimit()},text:"Load More"})}())}));var h=function(){var e=r.a.useState(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=r.a.useState("loading"),i=Object(s.a)(o,2),c=(i[0],i[1],Object(d.e)()),l=Object(d.g)().id;return r.a.useEffect((function(){var e=function(){fetch("https://swdestinydb.com/api/public/cards/").then((function(e){return e.json()})).then((function(e){var t,n=e.filter((function(e){return l===e.code}));t=n[0],a(t)}))};return e(),function(){return e()}}),[l]),r.a.createElement("div",{className:l?"cardPageWrapper":void 0,onClick:function(e){e.stopPropagation(),c.goBack()}},r.a.createElement(f,{name:n.name,imagesrc:n.imagesrc,code:n.code,loadColor:"white"}))};var E=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted}}),(function(e){return{setName:function(t){e(function(e){return{type:"SET_NAME",name:e}}(t))}}}))((function(e){var t=r.a.useState(""),n=Object(s.a)(t,2),a=n[0],o=n[1];return r.a.createElement("input",{placeholder:"Search for a Card by Name...",onChange:function(t){o(t.target.value),e.setName(a)},className:"search"})})),y=n(28),b=n.n(y);var O=Object(l.b)((function(e){return{options:e.options}}),(function(e){return{toggleOptions:function(){e({type:"TOGGLE_OPTIONS"})},clearOptions:function(){e({type:"CLEAR_OPTIONS"})}}}))((function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"logo",onClick:function(){return e.clearOptions()}},r.a.createElement("img",{alt:"logo",src:b.a})),r.a.createElement(E,null),r.a.createElement("div",{className:"ham",onClick:function(){return e.toggleOptions()}},!e.options&&r.a.createElement(m.a,{icon:p.d,size:"2x"}),e.options&&r.a.createElement(m.a,{icon:p.f,size:"2x"})))}));var S=Object(l.b)((function(e){return{sorted:e.sorted}}),(function(e){return{setSort:function(t,n,a){e(function(e,t,n){return{type:"SET_SORT",prop:e,toggle:t,val:n}}(t,n,a))}}}))((function(e){var t,n=function(t,n){e.setSort(t,function(t,n){return!(e.sorted[t].toggle&&e.sorted[t].val===n)}(t,n),n)};return e.sorted[e.type].val===e.value&&e.sorted[e.type].toggle&&(t={backgroundColor:"#343740"}),r.a.createElement("div",{className:"item",style:t,onClick:function(){return n(e.type,e.value)}},isNaN(e.value)?e.value.charAt(0).toUpperCase()+e.value.substring(1):e.value)}));var j=function(e){var t,n=r.a.useState(!1),a=Object(s.a)(n,2),o=a[0],i=a[1];t=o?{minHeight:25*e.opt.values.length+"px",maxHeight:25*e.opt.values.length+"px"}:{minHeight:"0px",maxHeight:"0px"};var c=e.opt.values.map((function(t,n){return r.a.createElement(S,{key:n,type:e.opt.type,value:t})}));return r.a.createElement("div",{className:"option"},r.a.createElement("h3",{className:"optHead",onClick:function(){return i(!o)}},e.opt.name,!o&&r.a.createElement(m.a,{icon:p.a}),o&&r.a.createElement(m.a,{icon:p.b})),r.a.createElement("div",{className:"listOpt",style:t},c))};var N=[{name:"Affiliations",type:"affiliation_code",values:["hero","villain","neutral"]},{name:"Colors",type:"faction_code",values:["red","blue","yellow","gray"]},{name:"Rarity",type:"rarity_name",values:["Starter","Common","Uncommon","Rare","Legendary"]},{name:"Health",type:"health",values:[4,5,6,7,8,9,10,11,12,13,15]},{name:"Cost",type:"cost",values:[0,1,2,3,4,5,6]},{name:"Set",type:"set_name",values:function(){var e=[];return fetch("https://swdestinydb.com/api/public/sets/").then((function(e){return e.json()})).then((function(t){return t.map((function(t){e.push(t.name)})),e})).catch((function(){console.log("error loading sets")})),e}()},{name:"Points",type:"points",values:["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]},{name:"Type",type:"type_code",values:["character","upgrade","support","event","downgrade","plot"]}];var C=Object(l.b)((function(e){return{options:e.options}}),(function(e){return{clearOptions:function(){e({type:"CLEAR_OPTIONS"})}}}))((function(e){var t;t=e.options?{right:"0"}:{right:"-100%"};var n=N.map((function(e,t){return r.a.createElement(j,{key:t,opt:e})}));return r.a.createElement("div",{className:"options",style:t},r.a.createElement("h1",null,"Sort Cards"),r.a.createElement("div",{className:"wrapper"},n),r.a.createElement(g,{handleClick:function(){return e.clearOptions()},text:"Clear Search Query"}))}));var L=function(){var e=Object(d.f)(),t=e.state&&e.state.background;return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(C,null),r.a.createElement("div",{className:"mainWrapper"},r.a.createElement(v,null),t&&r.a.createElement(d.a,{path:"/:id",children:r.a.createElement(h,null)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(24);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(_.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={itemLimit:10,sorted:{rarity_name:{toggle:!1,val:"Starter"},affiliation_code:{toggle:!1,val:"villain"},type_code:{toggle:!1,val:"character"},faction_code:{toggle:!1,val:"red"},set_name:{toggle:!1,val:"Way of the Force"},health:{toggle:!1,val:10},cost:{toggle:!1,val:0},points:{toggle:!1,val:"7"}},name:"",options:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;if("INCREASE_LIMIT"===t.type){var n=e.itemLimit;return k({},e,{itemLimit:n+=10})}return"SET_SORT"===t.type?k({},e,{itemLimit:10,sorted:k({},e.sorted,Object(_.a)({},t.prop,{toggle:t.toggle,val:t.val}))}):"SET_NAME"===t.type?k({},e,{name:t.name}):"TOGGLE_OPTIONS"===t.type?k({},e,{options:!e.options}):"CLEAR_OPTIONS"===t.type?k({},e,{itemLimit:10,sorted:{rarity_name:{toggle:!1,val:"Starter"},affiliation_code:{toggle:!1,val:"villain"},type_code:{toggle:!1,val:"character"},faction_code:{toggle:!1,val:"red"},set_name:{toggle:!1,val:"Way of the Force"},health:{toggle:!1,val:10},cost:{toggle:!1,val:0},points:{toggle:!1,val:"7"}},name:"",options:!1}):e},x=Object(c.b)(T);i.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(u.a,null,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.413b9d25.chunk.js.map