(this.webpackJsonpswd=this.webpackJsonpswd||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/logo.faa1ee06.png"},29:function(e,a,t){e.exports=t(44)},34:function(e,a,t){},39:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(16),c=t.n(s),o=(t(34),t(18)),l=t(8),i=(t(39),t(3)),d=t(5),u=t(6);var m=function(e){var a=r.a.useState("loading"),t=Object(i.a)(a,2),n=t[0],s=t[1],c=r.a.useState({img:!1,load:!0,error:!1}),o=Object(i.a)(c,2),l=o[0],m=o[1],p=r.a.useState(0),f=Object(i.a)(p,2),g=f[0],v=f[1];return r.a.useEffect((function(){var a;return a=setInterval((function(){v((function(e){return e+1})),n?null===e.imagesrc?m({img:!1,load:!1,error:!0}):m({img:!0,load:!1,error:!1}):m(g>3?{img:!1,load:!1,error:!0}:{img:!1,load:!0,error:!1})}),1e3),function(){return clearInterval(a)}}),[g,n,e.imagesrc]),r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,e.name),r.a.createElement("div",{className:"cardWrapper"},l.img&&r.a.createElement("img",{alt:e.name,onLoad:function(){s(!0)},onError:function(){s(!1)},src:e.imagesrc}),r.a.createElement("div",null,l.load&&r.a.createElement(d.a,{icon:u.f,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&r.a.createElement(d.a,{icon:u.c,style:{color:"red"},size:"6x"}))))};var p=function(e){return r.a.createElement("div",{className:"button",onClick:e.handleClick.bind(this)},e.text)},f=t(13);var g=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted,name:e.name}}),(function(e){return{changeLimit:function(){e({type:"INCREASE_LIMIT"})}}}))((function(e){var a,t=r.a.useState([]),n=Object(i.a)(t,2),s=n[0],c=n[1],o=r.a.useState(!0),l=Object(i.a)(o,2),d=l[0],u=l[1],g=r.a.useState(!1),v=Object(i.a)(g,2),h=v[0],E=v[1];function y(){var a=s,t=function(t){e.sorted[t].toggle&&(a=e.sorted.points.toggle?a.filter((function(a){return a.points.includes(e.sorted[t].val)&&null!=a.points})):a.filter((function(a){return a[t]===e.sorted[t].val})))};for(var n in e.sorted)t(n);return""!==e.name&&(a=a.filter((function(a){return!!a.name.includes(e.name)||(!!a.name.toLowerCase().includes(e.name)||!!a.name.toUpperCase().includes(e.name))}))),a}return r.a.useEffect((function(){fetch("https://swdestinydb.com/api/public/cards/").then((function(e){return e.json()})).then((function(e){u(!1),c(e)})).catch((function(){E(!0)}))}),[s,d]),0!==y().length?a=y().slice(0,e.itemLimit).map((function(e,a){return r.a.createElement(f.b,{to:"/"+e.code,key:a},r.a.createElement(m,{name:e.name,imagesrc:e.imagesrc,code:e.code,loadColor:"#343740"}))})):d||h?d&&!h?a=r.a.createElement("h1",null,"Fetching Cards..."):d&&h&&(a=r.a.createElement("h1",null,"Loading Cards failed. Refresh page...")):a=r.a.createElement("h1",null,"No cards in search"),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"wrapper"},a),function(){if(e.itemLimit<y().length&&y().length>10)return r.a.createElement(p,{handleClick:function(){return e.changeLimit()},text:"Load More"})}())}));var v=function(e){var a;function t(){return e.sd.includes("+")?"+ "+e.sd[1]:e.sd.includes("Sp")?"":e.sd[0]}function n(){return!!e.sd.includes("+")}return a=e.sd.includes("RD")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-ranged '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-ranged '></span></span>":e.sd.includes("Sh")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-shield '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-shield '></span></span>":e.sd.includes("MD")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-melee '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-melee '></span></span>":e.sd.includes("ID")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-indirect '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-indirect '></span></span>":e.sd.includes("Dc")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-discard '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-discard '></span></span>":e.sd.includes("Dr")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-disrupt '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-disrupt '></span></span>":e.sd.includes("F")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-focus '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-focus '></span></span>":e.sd.includes("Sp")?"<span class='sd'>"+t()+" <span class='icon icon-special '></span></span>":e.sd.includes("R")?n()?"<span class='sd modify'>"+t()+" <span class='icon icon-resource '></span></span>":"<span class='sd'>"+t()+" <span class='icon icon-resource '></span></span>":"<span class='blank'>-</span>",isNaN(e.sd[e.sd.length-1])||"-"===e.sd[e.sd.length-1]||(a=a+"<span class='res'> <span>"+e.sd[e.sd.length-1]+"</span> <span class='icon icon-resource'></span></span>"),r.a.createElement("div",{className:"side",dangerouslySetInnerHTML:{__html:a}})};var h=function(e){var a=r.a.useState([{format:"trilogy",restricted:!1,balance:"--",legal:!1},{format:"standard",restricted:!1,balance:"--",legal:!1},{format:"infinite",restricted:!1,balance:"--",legal:!0}]),t=Object(i.a)(a,2),n=t[0],s=t[1],c=r.a.useState({rst:!1,load:!0,error:!1}),o=Object(i.a)(c,2),l=o[0],m=o[1];r.a.useEffect((function(){var a=new AbortController,t=a.signal;var n=function(){fetch("https://swdestinydb.com/api/public/formats/",{signal:t}).then((function(e){return e.json()})).then((function(a){var t=[];a.map((function(a){var n={name:a.name,restricted:!1,balance:"--",legal:!1};return e.code in a.data.balance&&(n.balance=a.data.balance[e.code]),a.data.restricted.includes(e.code)&&(n.restricted=!0),a.data.sets.includes(e.crd.set_code)&&(n.legal=!0),m({rst:!0,load:!1,error:!1}),t.push(n)})),s(t)})).catch((function(){return m({rst:!1,load:!1,error:!0})}))};return n(),function(){n(),a.abort()}}),[e.code,e.crd.set_code]);var p=n.map((function(e,a){return r.a.createElement("div",{key:a,className:"format"},r.a.createElement("h3",null,e.name),r.a.createElement("h3",null,e.restricted?"Restricted":null),r.a.createElement("h3",null,e.balance),r.a.createElement("h6",null,"Legal: ",e.legal?"Playable":"Unplayable"))}));return r.a.createElement("div",{className:"cardInfo"},r.a.createElement("h1",null,e.crd.is_unique&&"\u25c6 ",e.crd.name),e.crd.health&&r.a.createElement("h2",null,r.a.createElement(d.a,{icon:u.d,size:"lg",style:{color:"red"}})," ",e.crd.health),e.crd.cost&&r.a.createElement("h2",{className:"cost"}," ",r.a.createElement("span",{className:"icon icon-resource "})," ",e.crd.cost," "),r.a.createElement("h2",null,e.crd.points&&"Points:",e.crd.points),r.a.createElement("h2",null,e.crd.type_name),r.a.createElement("div",{className:"subtypes"},void 0!==e.crd.subtypes&&e.crd.subtypes.map((function(a,t){return r.a.createElement("h3",{key:t},a.name,t!==e.crd.subtypes.length-1&&"-")}))),r.a.createElement("div",{className:"sides"},void 0!==e.crd.sides&&e.crd.sides.map((function(e,a){return r.a.createElement(v,{key:a,sd:e})}))),r.a.createElement("h3",null,e.crd.has_errata&&"This card has an errata"),r.a.createElement("div",{className:"formats"},l.rst&&p),r.a.createElement("div",null,l.load&&r.a.createElement(d.a,{icon:u.f,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&r.a.createElement(d.a,{icon:u.c,style:{color:"red"},size:"6x"})),r.a.createElement("div",{className:"text"},null!==e.crd.text&&r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.crd.text.replace("[special]","<span class='icon icon-special '></span>")}}),r.a.createElement("i",null,null!==e.crd.flavor&&e.crd.flavor.replace("<cite>","-").replace("</cite>","")),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"affl "+e.crd.affiliation_name},e.crd.affiliation_name),r.a.createElement("div",{className:"rr "+e.crd.rarity_name},e.crd.rarity_name),r.a.createElement("div",null,e.crd.set_name,": ",e.crd.position))))};var E=function(e){var a=r.a.useState(""),t=Object(i.a)(a,2),n=t[0],s=t[1];r.a.useEffect((function(){var a=new AbortController,t=a.signal;var n=function(){fetch("https://swdestinydb.com/api/public/cards/",{signal:t}).then((function(e){return e.json()})).then((function(a){var t,n=a.filter((function(a){return e.match.params.id===a.code}));t=n[0],s(t)})).catch((function(e){return console.log()}))};return n(),function(){n(),a.abort()}}),[e.match.params.id]);var c=n.code;return r.a.createElement(f.b,{className:e.match.params.id?"cardPageWrapper":void 0,to:"/"},r.a.createElement(m,{name:n.name,imagesrc:n.imagesrc,code:n.code,loadColor:"white"}),c&&r.a.createElement(h,{crd:n,code:c}))};var y=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted}}),(function(e){return{setName:function(a){e(function(e){return{type:"SET_NAME",name:e}}(a))}}}))((function(e){var a=r.a.useState(""),t=Object(i.a)(a,2),n=t[0],s=t[1];return r.a.createElement("input",{placeholder:"Search for a Card by Name...",onChange:function(a){s(a.target.value),e.setName(n)},className:"search"})})),b=t(28),O=t.n(b);var N=Object(l.b)((function(e){return{options:e.options}}),(function(e){return{toggleOptions:function(){e({type:"TOGGLE_OPTIONS"})},clearOptions:function(){e({type:"CLEAR_OPTIONS"})}}}))((function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"logo",onClick:function(){return e.clearOptions()}},r.a.createElement("img",{alt:"logo",src:O.a})),r.a.createElement(y,null),r.a.createElement("div",{className:"ham",onClick:function(){return e.toggleOptions()}},!e.options&&r.a.createElement(d.a,{icon:u.e,size:"2x"}),e.options&&r.a.createElement(d.a,{icon:u.g,size:"2x"})))}));var S=Object(l.b)((function(e){return{sorted:e.sorted}}),(function(e){return{setSort:function(a,t,n){e(function(e,a,t){return{type:"SET_SORT",prop:e,toggle:a,val:t}}(a,t,n))}}}))((function(e){var a,t=function(a,t){e.setSort(a,function(a,t){return!(e.sorted[a].toggle&&e.sorted[a].val===t)}(a,t),t)};return e.sorted[e.type].val===e.value&&e.sorted[e.type].toggle&&(a={backgroundColor:"#343740"}),r.a.createElement("div",{className:"item",style:a,onClick:function(){return t(e.type,e.value)}},isNaN(e.value)?e.value.charAt(0).toUpperCase()+e.value.substring(1):e.value)}));var _=function(e){var a,t=r.a.useState(!1),n=Object(i.a)(t,2),s=n[0],c=n[1];a=s?{minHeight:25*e.opt.values.length+"px",maxHeight:25*e.opt.values.length+"px"}:{minHeight:"0px",maxHeight:"0px"};var o=e.opt.values.map((function(a,t){return r.a.createElement(S,{key:t,type:e.opt.type,value:a})}));return r.a.createElement("div",{className:"option"},r.a.createElement("h3",{className:"optHead",onClick:function(){return c(!s)}},e.opt.name,!s&&r.a.createElement(d.a,{icon:u.a}),s&&r.a.createElement(d.a,{icon:u.b})),r.a.createElement("div",{className:"listOpt",style:a},o))};var j=[{name:"Affiliations",type:"affiliation_code",values:["hero","villain","neutral"]},{name:"Colors",type:"faction_code",values:["red","blue","yellow","gray"]},{name:"Rarity",type:"rarity_name",values:["Starter","Common","Uncommon","Rare","Legendary"]},{name:"Health",type:"health",values:[4,5,6,7,8,9,10,11,12,13,14,15]},{name:"Cost",type:"cost",values:[0,1,2,3,4,5,6]},{name:"Set",type:"set_name",values:function(){var e=[];return fetch("https://swdestinydb.com/api/public/sets/").then((function(e){return e.json()})).then((function(a){return a.map((function(a){return e.push(a.name)})),e})).catch((function(){console.log("error loading sets")})),e}()},{name:"Points",type:"points",values:["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]},{name:"Type",type:"type_code",values:["character","upgrade","support","event","downgrade","plot"]}];var C=Object(l.b)((function(e){return{options:e.options}}),(function(e){return{clearOptions:function(){e({type:"CLEAR_OPTIONS"})}}}))((function(e){var a;a=e.options?{right:"0"}:{right:"-100%"};var t=j.map((function(e,a){return r.a.createElement(_,{key:a,opt:e})}));return r.a.createElement("div",{className:"options",style:a},r.a.createElement("h1",null,"Sort Cards"),r.a.createElement("div",{className:"wrapper"},t),r.a.createElement(p,{handleClick:function(){return e.clearOptions()},text:"Clear Search Query"}))})),L=t(12);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(C,null),r.a.createElement("div",{className:"mainWrapper"},r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/",component:g})),r.a.createElement(L.a,{path:"/:id",component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=t(24);function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(k.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var I={itemLimit:10,sorted:{rarity_name:{toggle:!1,val:"Starter"},affiliation_code:{toggle:!1,val:"villain"},type_code:{toggle:!1,val:"character"},faction_code:{toggle:!1,val:"red"},set_name:{toggle:!1,val:"Way of the Force"},health:{toggle:!1,val:10},cost:{toggle:!1,val:0},points:{toggle:!1,val:"7"}},name:"",options:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;if("INCREASE_LIMIT"===a.type){var t=e.itemLimit;return x({},e,{itemLimit:t+=10})}return"SET_SORT"===a.type?x({},e,{itemLimit:10,sorted:x({},e.sorted,Object(k.a)({},a.prop,{toggle:a.toggle,val:a.val}))}):"SET_NAME"===a.type?x({},e,{name:a.name}):"TOGGLE_OPTIONS"===a.type?x({},e,{options:!e.options}):"CLEAR_OPTIONS"===a.type?x({},e,{itemLimit:10,sorted:{rarity_name:{toggle:!1,val:"Starter"},affiliation_code:{toggle:!1,val:"villain"},type_code:{toggle:!1,val:"character"},faction_code:{toggle:!1,val:"red"},set_name:{toggle:!1,val:"Way of the Force"},health:{toggle:!1,val:10},cost:{toggle:!1,val:0},points:{toggle:!1,val:"7"}},name:"",options:!1}):e},R=Object(o.b)(P);c.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(f.a,{basename:"/star-wars-destiny-database"},r.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.7afc313b.chunk.js.map