(this.webpackJsonpswd=this.webpackJsonpswd||[]).push([[0],{28:function(e,n,a){e.exports=a(47)},33:function(e,n,a){},38:function(e,n,a){},43:function(e,n,a){var t={"./awakeningslogo.svg":44,"./convergencelogo.svg":45,"./legacieslogo.svg":46};function s(e){var n=c(e);return a(n)}function c(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=c,e.exports=s,s.id=43},44:function(e,n,a){e.exports=a.p+"static/media/awakeningslogo.519004a1.svg"},45:function(e,n,a){e.exports=a.p+"static/media/convergencelogo.f7ca2921.svg"},46:function(e,n,a){e.exports=a.p+"static/media/legacieslogo.f7ca2921.svg"},47:function(e,n,a){"use strict";a.r(n);var t=a(0),s=a.n(t),c=a(16),r=a.n(c),o=(a(33),a(18)),l=a(3),i=(a(38),a(4)),d=a(5),p=a(6);var u=Object(l.b)((function(e){return{style:e.style}}))((function(e){var n=s.a.useState("loading"),a=Object(i.a)(n,2),t=a[0],c=a[1],r=s.a.useState({img:!1,load:!0,error:!1}),o=Object(i.a)(r,2),l=o[0],u=o[1],m=s.a.useState(0),y=Object(i.a)(m,2),f=y[0],g=y[1];return s.a.useEffect((function(){var n;return n=setInterval((function(){g((function(e){return e+1})),t?null===e.imagesrc?u({img:!1,load:!1,error:!0}):u({img:!0,load:!1,error:!1}):u(f>3?{img:!1,load:!1,error:!0}:{img:!1,load:!0,error:!1})}),1e3),function(){return clearInterval(n)}}),[f,t,e.imagesrc]),s.a.createElement("div",{className:"card"},e.bod&&s.a.createElement("h1",{style:{color:e.style.bodyText}},e.name),s.a.createElement("div",{className:"cardWrapper"},l.img&&s.a.createElement("img",{alt:e.name,onLoad:function(){c(!0)},onError:function(){c(!1)},src:e.imagesrc}),s.a.createElement("div",null,l.load&&s.a.createElement(d.a,{icon:p.g,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&s.a.createElement(d.a,{icon:p.c,style:{color:"red"},size:"6x"}))))}));var m=Object(l.b)((function(e){return{style:e.style}}))((function(e){var n={color:e.style.navText,backgroundColor:e.style.nav};return s.a.createElement("div",{className:"button",style:n,onClick:e.handleClick.bind(this)},e.text)})),y=a(13);var f=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted,name:e.name,style:e.style}}),(function(e){return{changeLimit:function(){e({type:"INCREASE_LIMIT"})}}}))((function(e){var n,a=s.a.useState([]),t=Object(i.a)(a,2),c=t[0],r=t[1],o=s.a.useState(!0),l=Object(i.a)(o,2),d=l[0],p=l[1],f=s.a.useState(!1),g=Object(i.a)(f,2),v=g[0],h=g[1];function b(){var n=c,a=function(a){e.sorted[a].toggle&&("points"===e.sorted[a]?function(){for(var a=[],t=function(n){c.filter((function(t){return t.points,null!==t.points&&t.points.split("/").includes(""+e.sorted.points.val[n])?a.push(t):null}))},s=0;s<e.sorted.points.val.length;s++)t(s);for(var r=0;r<a.length;r++)n.push(a[r])}():n=n.filter((function(n){return e.sorted[a].val.includes(n[a])})))};for(var t in e.sorted)a(t);return""!==e.name&&(n=n.filter((function(n){return!!n.name.includes(e.name)||(!!n.name.toLowerCase().includes(e.name)||!!n.name.toUpperCase().includes(e.name))}))),n}return s.a.useEffect((function(){fetch("https://swdestinydb.com/api/public/cards/").then((function(e){return e.json()})).then((function(e){p(!1),r(e)})).catch((function(){h(!0)}))}),[d]),0!==b().length?n=b().slice(0,e.itemLimit).map((function(e,n){return s.a.createElement(y.b,{to:"/"+e.code,key:n},s.a.createElement(u,{name:e.name,bod:!0,imagesrc:e.imagesrc,code:e.code,loadColor:"#343740"}))})):d||v?d&&!v?n=s.a.createElement("h1",null,"Fetching Cards..."):d&&v&&(n=s.a.createElement("h1",null,"Loading Cards failed. Refresh page...")):n=s.a.createElement("h1",null,"No cards in search"),s.a.createElement("div",{className:"list"},s.a.createElement("div",{className:"wrapper"},n),function(){if(e.itemLimit<b().length&&b().length>10)return s.a.createElement(m,{handleClick:function(){return e.changeLimit()},text:"Load More"})}())}));var g=function(e){var n;function a(){return e.sd.includes("+")?"+ "+e.sd[1]:e.sd.includes("Sp")?"":e.sd[0]}function t(){return!!e.sd.includes("+")}return n=e.sd.includes("RD")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-ranged '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-ranged '></span></span>":e.sd.includes("Sh")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-shield '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-shield '></span></span>":e.sd.includes("MD")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-melee '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-melee '></span></span>":e.sd.includes("ID")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-indirect '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-indirect '></span></span>":e.sd.includes("Dc")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-discard '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-discard '></span></span>":e.sd.includes("Dr")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-disrupt '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-disrupt '></span></span>":e.sd.includes("F")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-focus '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-focus '></span></span>":e.sd.includes("Sp")?"<span class='sd'>"+a()+" <span class='icon icon-special '></span></span>":e.sd.includes("R")?t()?"<span class='sd modify'>"+a()+" <span class='icon icon-resource '></span></span>":"<span class='sd'>"+a()+" <span class='icon icon-resource '></span></span>":"<span class='blank'>-</span>",isNaN(e.sd[e.sd.length-1])||"-"===e.sd[e.sd.length-1]||(n=t()?n+"<span class='res modify'> <span>"+e.sd[e.sd.length-1]+"</span> <span class='icon icon-resource'></span></span>":n+"<span class='res'> <span>"+e.sd[e.sd.length-1]+"</span> <span class='icon icon-resource'></span></span>"),s.a.createElement("div",{className:"side",dangerouslySetInnerHTML:{__html:n}})};var v=function(e){var n=s.a.useState([{format:"trilogy",restricted:!1,balance:"--",legal:!1},{format:"standard",restricted:!1,balance:"--",legal:!1},{format:"infinite",restricted:!1,balance:"--",legal:!0}]),a=Object(i.a)(n,2),t=a[0],c=a[1],r=s.a.useState({rst:!1,load:!0,error:!1}),o=Object(i.a)(r,2),l=o[0],u=o[1];s.a.useEffect((function(){var n=new AbortController,a=n.signal;return fetch("https://swdestinydb.com/api/public/formats/",{signal:a}).then((function(e){return e.json()})).then((function(n){var a=[];n.map((function(n){var t={name:n.name,restricted:!1,balance:"--",legal:!1};return e.code in n.data.balance&&(t.balance=n.data.balance[e.code]),n.data.restricted.includes(e.code)&&(t.restricted=!0),n.data.sets.includes(e.crd.set_code)&&(t.legal=!0),u({rst:!0,load:!1,error:!1}),a.push(t)})),c(a)})).catch((function(){return u({rst:!1,load:!1,error:!0})})),function(){n.abort()}}),[e.code,e.crd.set_code]);var m=t.map((function(e,n){return s.a.createElement("div",{key:n,className:"format"},s.a.createElement("h3",null,e.name),s.a.createElement("h3",null,e.restricted?"Restricted":null),s.a.createElement("h3",null,e.balance),s.a.createElement("h6",null,"Legal: ",e.legal?"Playable":"Unplayable"))}));return s.a.createElement("div",{className:"cardInfo"},s.a.createElement("h1",null,e.crd.is_unique&&"\u25c6 ",e.crd.name),e.crd.health&&s.a.createElement("h2",null,s.a.createElement(d.a,{icon:p.d,size:"lg",style:{color:"red"}})," ",e.crd.health),e.crd.cost&&s.a.createElement("h2",{className:"cost"}," ",s.a.createElement("span",{className:"icon icon-resource "})," ",e.crd.cost," "),s.a.createElement("h2",null,e.crd.points&&"Points:",e.crd.points),s.a.createElement("h2",null,e.crd.type_name),s.a.createElement("div",{className:"subtypes"},void 0!==e.crd.subtypes&&e.crd.subtypes.map((function(n,a){return s.a.createElement("h3",{key:a},n.name,a!==e.crd.subtypes.length-1&&"-")}))),s.a.createElement("div",{className:"sides"},void 0!==e.crd.sides&&e.crd.sides.map((function(e,n){return s.a.createElement(g,{key:n,sd:e})}))),s.a.createElement("h3",null,e.crd.has_errata&&"This card has an errata"),s.a.createElement("div",{className:"formats"},l.rst&&m),s.a.createElement("div",null,l.load&&s.a.createElement(d.a,{icon:p.g,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&s.a.createElement(d.a,{icon:p.c,style:{color:"red"},size:"6x"})),s.a.createElement("div",{className:"text"},null!==e.crd.text&&s.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.crd.text.replace("[special]","<span class='icon icon-special '></span>").replace("([special])","(<span class='icon icon-special '></span>)").replace("([indirect])","(<span class='icon icon-indirect '></span>)").replace("([melee])","(<span class='icon icon-melee '></span>)").replace("([ranged])","(<span class='icon icon-ranged '></span>)").replace("([discard])","(<span class='icon icon-discard '></span>)").replace("([focus])","(<span class='icon icon-focus '></span>)").replace("([disrupt])","(<span class='icon icon-disrupt '></span>)").replace("([shield])","(<span class='icon icon-shield '></span>)").replace("([resource])","(<span class='icon icon-resource '></span>)").replace("([blank])","(<span class='icon icon-blank '></span>)").replace("([ranged] or [melee])","(<span class='icon icon-ranged '></span> or <span class='icon icon-melee '></span>)").replace("([melee] or [ranged])","(<span class='icon icon-ranged '></span> or <span class='icon icon-melee '></span>)").replace("([ranged] or [melee])","(<span class='icon icon-ranged '></span> or <span class='icon icon-melee '></span>)").replace("([ranged], [melee] or [indirect])","(<span class='icon icon-ranged '></span>, <span class='icon icon-melee '></span> or <span class='icon icon-indirect '></span>)").replace("([ranged], [melee], or [indirect])","(<span class='icon icon-ranged '></span>, <span class='icon icon-melee '></span> or <span class='icon icon-indirect '></span>)").replace("[AW]","<span class='icon icon-set-AW'></span>").replace("[WotF]","<span class='icon icon-set-WotF'></span>").replace("[RIV]","<span class='icon icon-set-RIV'></span>").replace("[SoR]","<span class='icon icon-set-SoR'></span>").replace("[LEG]","<span class='icon icon-set-LEG'></span>").replace("[EaW]","<span class='icon icon-set-EaW'></span>").replace("[AtG]","<span class='icon icon-set-AtG'></span>").replace("[CONV]","<span class='icon icon-set-CONV'></span>").replace("[AoN]","<span class='icon icon-set-AoN'></span>").replace("[SoH]","<span class='icon icon-set-SoH'></span>")},className:"effects"}),s.a.createElement("i",null,null!==e.crd.flavor&&e.crd.flavor.replace("<cite>","-").replace("</cite>","")),s.a.createElement("div",{className:"bottom"},s.a.createElement("div",{className:"affl "+e.crd.affiliation_name},e.crd.affiliation_name),s.a.createElement("div",{className:"rr "+e.crd.rarity_name},e.crd.rarity_name),s.a.createElement("div",{className:"color",style:{backgroundColor:e.crd.faction_code,color:"black"}},e.crd.faction_code.toUpperCase()),s.a.createElement("div",null,s.a.createElement("span",{className:"icon icon-set-"+e.crd.set_code}),e.crd.set_name,": ",e.crd.position))))};var h=function(e){var n=s.a.useState(""),a=Object(i.a)(n,2),t=a[0],c=a[1],r=s.a.useState({crd:!1,load:!0,error:!1}),o=Object(i.a)(r,2),l=o[0],m=o[1];s.a.useEffect((function(){var n=new AbortController,a=n.signal;var t=function(){fetch("https://swdestinydb.com/api/public/cards/",{signal:a}).then((function(e){return e.json()})).then((function(n){var a,t=n.filter((function(n){return e.match.params.id===n.code}));a=t[0],m({crd:!0,load:!1,error:!1}),c(a)})).catch((function(){return m({crd:!1,load:!1,error:!0})}))};return t(),function(){t(),n.abort()}}),[e.match.params.id]);var f=t.code;return s.a.createElement(y.b,{className:e.match.params.id?"cardPageWrapper":void 0,to:"/"},l.load&&s.a.createElement(d.a,{icon:p.g,spin:!0,size:"lg",style:{color:e.loadColor}}),l.error&&s.a.createElement(d.a,{icon:p.c,style:{color:"red"},size:"6x"}),l.crd&&s.a.createElement(u,{name:t.name,bod:!1,imagesrc:t.imagesrc,code:t.code,loadColor:"white"}),f&&s.a.createElement(v,{crd:t,code:f}))};var b=Object(l.b)((function(e){return{displayedSet:e.displayedSet,itemLimit:e.itemLimit,setLimit:e.setLimit,sorted:e.sorted}}),(function(e){return{setName:function(n){e(function(e){return{type:"SET_NAME",name:e}}(n))}}}))((function(e){var n=s.a.useState(""),a=Object(i.a)(n,2),t=a[0],c=a[1];return s.a.createElement("input",{placeholder:"Search for a Card by Name...",onChange:function(n){c(n.target.value),e.setName(t)},className:"search"})}));var E=Object(l.b)((function(e){return{options:e.options,styles:e.styles,style:e.style}}),(function(e){return{toggleOptions:function(){e({type:"TOGGLE_OPTIONS"})},clearOptions:function(){e({type:"CLEAR_OPTIONS"})},toggleStyles:function(){e({type:"TOGGLE_STYLES"})}}}))((function(e){var n={color:e.style.navText,backgroundColor:e.style.nav};return s.a.createElement("nav",{style:n},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{alt:"logo",src:a(43)("./"+e.style.name.toLowerCase()+"logo.svg"),onClick:function(){return e.clearOptions()}})),s.a.createElement(b,null),s.a.createElement("div",{className:"ham"},!e.styles&&s.a.createElement(d.a,{icon:p.e,size:"2x",onClick:function(){return e.toggleStyles()}}),e.styles&&s.a.createElement(d.a,{icon:p.h,size:"2x",onClick:function(){return e.toggleStyles()}}),!e.options&&s.a.createElement(d.a,{icon:p.f,size:"2x",onClick:function(){return e.toggleOptions()}}),e.options&&s.a.createElement(d.a,{icon:p.h,size:"2x",onClick:function(){return e.toggleOptions()}})))}));var O=Object(l.b)((function(e){return{sorted:e.sorted,style:e.style}}),(function(e){return{setSort:function(n,a,t){e(function(e,n,a){return{type:"SET_SORT",prop:e,toggle:n,val:a}}(n,a,t))}}}))((function(e){var n,a=function(n,a){e.setSort(n,function(n,a){return!(e.sorted[n].toggle&&e.sorted[n].val===a)}(n,a),a)};return n=e.sorted[e.type].val.includes(e.value)&&e.sorted[e.type].toggle?{backgroundColor:e.style.navText,color:e.style.nav}:{backgroundColor:e.style.nav,color:e.style.navText},s.a.createElement("div",{className:"item",style:n,onClick:function(){return a(e.type,e.value)}},isNaN(e.value)?e.value.charAt(0).toUpperCase()+e.value.substring(1):e.value)}));var S=Object(l.b)((function(e){return{style:e.style}}))((function(e){var n,a=s.a.useState(!1),t=Object(i.a)(a,2),c=t[0],r=t[1];n=c?{minHeight:25*e.opt.values.length+"px",maxHeight:25*e.opt.values.length+"px"}:{minHeight:"0px",maxHeight:"0px"};var o=e.opt.values.map((function(n,a){return s.a.createElement(O,{key:a,type:e.opt.type,value:n})}));return s.a.createElement("div",{className:"option"},s.a.createElement("h3",{className:"optHead",style:{color:e.style.nav},onClick:function(){return r(!c)}},e.opt.name,!c&&s.a.createElement(d.a,{icon:p.a}),c&&s.a.createElement(d.a,{icon:p.b})),s.a.createElement("div",{className:"listOpt",style:n},o))}));var C=[{name:"Affiliations",type:"affiliation_code",values:["hero","villain","neutral"]},{name:"Colors",type:"faction_code",values:["red","blue","yellow","gray"]},{name:"Rarity",type:"rarity_name",values:["Starter","Common","Uncommon","Rare","Legendary"]},{name:"Health",type:"health",values:[4,5,6,7,8,9,10,11,12,13,14,15]},{name:"Cost",type:"cost",values:[0,1,2,3,4,5,6]},{name:"Set",type:"set_name",values:function(){var e=[];return fetch("https://swdestinydb.com/api/public/sets/").then((function(e){return e.json()})).then((function(n){return n.map((function(n){return e.push(n.name)})),e})).catch((function(){console.log("error loading sets")})),e}()},{name:"Points",type:"points",values:["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28"]},{name:"Type",type:"type_code",values:["character","upgrade","support","event","downgrade","plot"]}];var N=Object(l.b)((function(e){return{options:e.options,style:e.style}}),(function(e){return{clearOptions:function(){e({type:"CLEAR_OPTIONS"})}}}))((function(e){var n;n=e.options?{right:"0",backgroundColor:e.style.navText,color:e.style.nav}:{right:"-100%",backgroundColor:e.style.navText,color:e.style.nav};var a=C.map((function(e,n){return s.a.createElement(S,{key:n,opt:e})}));return s.a.createElement("div",{className:"options",style:n},s.a.createElement("h1",{style:{color:e.style.nav}},"Sort Cards"),s.a.createElement("div",{className:"wrapper"},a),s.a.createElement(m,{handleClick:function(){return e.clearOptions()},text:"Clear Search Query"}))}));var k=Object(l.b)((function(e){return{style:e.style}}),(function(e){return{setStyles:function(n){e(function(e){return{type:"SET_STYLE",style:e}}(n))}}}))((function(e){var n;return n=e.opt.name===e.style.name?{backgroundColor:e.style.nav,color:e.style.navText}:{backgroundColor:e.style.navText,color:e.style.nav},s.a.createElement("div",{className:"item",style:n,onClick:function(){return e.setStyles(e.opt)}},e.opt.name)})),T=[{name:"Awakenings",nav:"white",body:"black",navText:"black",bodyText:"white"},{name:"Legacies",nav:"red",body:"white",navText:"white",bodyText:"red"},{name:"Convergence",nav:"#343740",body:"#ededed",navText:"white",bodyText:"#343740"}];var _=Object(l.b)((function(e){return{styles:e.styles,style:e.style}}))((function(e){var n;n=e.styles?{right:"0",backgroundColor:e.style.nav,color:e.style.navText}:{right:"-100%",backgroundColor:e.style.nav,color:e.style.navText};var a=T.map((function(e,n){return s.a.createElement(k,{key:n,opt:e})}));return s.a.createElement("div",{className:"navOptions",style:n},s.a.createElement("h1",{style:{color:e.style.navText}},"Change Style"),s.a.createElement("div",{className:"wrapper"},a))})),x=a(12);var w=Object(l.b)((function(e){return{style:e.style}}))((function(e){return document.documentElement.style.backgroundColor=e.style.body,s.a.createElement("div",{className:"App",style:{backgroundColor:e.style.body}},s.a.createElement(E,null),s.a.createElement(N,null),s.a.createElement(_,null),s.a.createElement("div",{className:"mainWrapper",style:{color:e.style.bodyText,backgroundColor:e.style.body}},s.a.createElement(x.c,null,s.a.createElement(x.a,{path:"/",component:f}))),s.a.createElement(x.a,{path:"/:id",component:h}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(24);function j(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function A(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?j(a,!0).forEach((function(n){Object(L.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var I={itemLimit:10,sorted:{rarity_name:{toggle:!1,val:[]},affiliation_code:{toggle:!1,val:[]},type_code:{toggle:!1,val:[]},faction_code:{toggle:!1,val:[]},set_name:{toggle:!1,val:[]},health:{toggle:!1,val:[]},cost:{toggle:!1,val:[]},points:{toggle:!1,val:[]}},style:{name:"Awakenings",nav:"white",body:"black",navText:"black",bodyText:"white"},name:"",options:!1,styles:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1?arguments[1]:void 0;if("INCREASE_LIMIT"===n.type){var a=e.itemLimit;return A({},e,{itemLimit:a+=10})}if("SET_SORT"===n.type){var t=e.sorted[n.prop].val;if(t.includes(n.val)){var s=t.indexOf(n.val);t.splice(s,1)}else t.push(n.val);var c=t.length>0;return A({},e,{itemLimit:10,sorted:A({},e.sorted,Object(L.a)({},n.prop,{toggle:c,val:t}))})}return"SET_NAME"===n.type?A({},e,{name:n.name}):"SET_STYLE"===n.type?(document.documentElement.style.backgroundColor=n.style.body,A({},e,{style:n.style})):"TOGGLE_OPTIONS"===n.type?A({},e,{options:!e.options,styles:!1}):"TOGGLE_STYLES"===n.type?A({},e,{styles:!e.styles,options:!1}):"CLEAR_OPTIONS"===n.type?A({},e,{itemLimit:10,sorted:{rarity_name:{toggle:!1,val:[]},affiliation_code:{toggle:!1,val:[]},type_code:{toggle:!1,val:[]},faction_code:{toggle:!1,val:[]},set_name:{toggle:!1,val:[]},health:{toggle:!1,val:[]},cost:{toggle:!1,val:[]},points:{toggle:!1,val:[]}},name:"",options:!1}):e},R=Object(o.b)(P);r.a.render(s.a.createElement(l.a,{store:R},s.a.createElement(y.a,{basename:"/star-wars-destiny-database"},s.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9d0f9690.chunk.js.map