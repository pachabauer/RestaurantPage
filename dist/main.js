(()=>{"use strict";var e,t,n,r,o,i,a,c,s,d,u,l,p,f,m={426:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),d=new URL(n(236),n.b),u=new URL(n(550),n.b),l=new URL(n(485),n.b),p=a()(o()),f=s()(d),m=s()(u),v=s()(l);p.push([e.id,"@font-face {\n  font-family: food;\n  src: url("+f+");\n}\n\n@font-face {\n  font-family: tasty-food;\n  src: url("+m+');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "food", sans-serif;\n  text-align: center;\n}\n\nnav {\n  background-color: #1b4d3e;\n  height: 5vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 4px solid #ffc0cb;\n}\n\nul {\n  width: 100%;\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  font-size: 2rem;\n}\n\nul li {\n  margin: 0 20px;\n  color: #ffc0cb;\n  text-transform: uppercase;\n}\nul li:hover {\n  border-bottom: 2px solid #ffc0cb;\n  padding-bottom: 4px;\n  cursor: pointer;\n}\n\n#content {\n  background-color: #1b4d3e;\n  display: inline-grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: 1fr auto;\n}\n\n#column1 {\n  background-image: url('+v+");\n  background-size: cover;\n  justify-content: space-between;\n  height: 94.55vh;\n  width: 50vw;\n  background-repeat: no-repeat;\n  background-size: contain;\n  grid-column:1;\n  grid-row:1/3;\n}\n\n#column2 {\n    display: inline-grid;\n    grid-column:2;\n    width: 50vw;\n    grid-row: 1/1;\n    color: #E37383;\n    font-family: tasty-food;\n    font-size: 60px;\n    margin-top: 30px;\n}\n\n#column3 {\n    display: inline-grid;\n    align-items: center;\n    grid-column:2;\n    width: 50vw;\n    grid-row: 2/2;\n    color: #E37383;\n    font-family: tasty-food;\n    font-size: 30px;\n\n}\n\n#menu1,\n#menu2,\n#menu3,\n#menu4 {\n  background-color: #121212; \n  color: white;\n  font-size: 30px;\n}\n",""]);const b=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},236:(e,t,n)=>{e.exports=n.p+"450c9519f3be2d17da9f.otf"},550:(e,t,n)=>{e.exports=n.p+"0e2cc57440bd796ec2cd.ttf"},485:(e,t,n)=>{e.exports=n.p+"87461459e20bd8d3e3ad.jpg"}},v={};function b(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return m[e](n,n.exports,b),n.exports}b.m=m,b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var t=b.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),b.b=document.baseURI||self.location.href,b.nc=void 0,e=b(379),t=b.n(e),n=b(795),r=b.n(n),o=b(569),i=b.n(o),a=b(565),c=b.n(a),s=b(216),d=b.n(s),u=b(589),l=b.n(u),p=b(426),(f={}).styleTagTransform=l(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){console.log("Hi, I'm a sasa page");let e=document.createElement("nav"),t=document.createElement("ul"),n=document.createElement("li"),r=document.createElement("li"),o=document.createElement("li"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div");n.setAttribute("id","home"),r.setAttribute("id","menu"),o.setAttribute("id","promos"),i.setAttribute("id","content"),a.setAttribute("id","column1"),c.setAttribute("id","column2"),s.setAttribute("id","column3"),n.textContent="HOME",r.textContent="MENU",o.textContent="PROMOS",c.textContent="BIENVENIDOS",s.textContent="CONTACTO",t.append(n,r,o),e.appendChild(t),i.append(a,c,s),n.addEventListener("click",(()=>{c.textContent="BIENVENIDOS"})),r.addEventListener("click",(()=>{c.textContent="";let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");e.setAttribute("id","menu1"),e.textContent="PIZZA MUZARELLA - $2000",t.setAttribute("id","menu2"),t.textContent="EMPANADAS DOCENA - $2500",n.setAttribute("id","menu3"),n.textContent="TORTILLA PAPA - $1200",r.setAttribute("id","menu4"),r.textContent="POLLO CON PAPAS - $2400",c.append(e,t,n,r)})),o.addEventListener("click",(()=>{c.textContent=""})),window.onload=function(){document.body.append(e,i)}}()})();