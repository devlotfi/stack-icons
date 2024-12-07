var Mi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);import{r as ki,g as sa,R as ca,a as x,j as g,p as Ri,b as $i,c as Di,d as mn,s as la,e as pn,f as hn,h as zi,i as Ui,k as fa,l as Kn,n as Vi,m as Wi,o as Bi,N as Hi}from"./nextui-BCgTCoA-.js";var Yd=Mi((W,B)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Zt={},Xn;function Yi(){if(Xn)return Zt;Xn=1;var t=ki();return Zt.createRoot=t.createRoot,Zt.hydrateRoot=t.hydrateRoot,Zt}var Gi=Yi();const Zn="data:image/svg+xml,%3csvg%20width='395'%20height='280'%20viewBox='0%200%20395%20280'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M218.704%20275.419L386.217%20188.058C397.928%20181.951%20397.928%20172.049%20386.217%20165.942L369.072%20157L218.704%20235.419C206.993%20241.527%20188.007%20241.527%20176.296%20235.419L25.9285%20157L8.78305%20165.942C-2.92768%20172.049%20-2.92768%20181.951%208.78305%20188.058L176.296%20275.419C188.007%20281.527%20206.993%20281.527%20218.704%20275.419Z'%20fill='%233AA9A9'/%3e%3cpath%20d='M218.704%20235.419L369.072%20157L336.475%20140L218.704%20201.419C206.993%20207.527%20188.007%20207.527%20176.296%20201.419L58.5255%20140L25.9285%20157L176.296%20235.419C188.007%20241.527%20206.993%20241.527%20218.704%20235.419Z'%20fill='%232E8383'/%3e%3cpath%20d='M386.217%2091.9416L218.704%204.58053C206.993%20-1.52684%20188.007%20-1.52684%20176.296%204.58052L8.78305%2091.9416C-2.92768%2098.049%20-2.92768%20107.951%208.78305%20114.058L58.5255%20140L176.296%20201.419C188.007%20207.527%20206.993%20207.527%20218.704%20201.419L336.475%20140L386.217%20114.058C397.928%20107.951%20397.928%2098.049%20386.217%2091.9416Z'%20fill='%2345D9D9'/%3e%3c/svg%3e";/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function qi(t,e,n){return(e=Xi(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Jn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jn(Object(n),!0).forEach(function(r){qi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ki(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xi(t){var e=Ki(t,"string");return typeof e=="symbol"?e:e+""}const Qn=()=>{};let gn={},ua={},da=null,ma={mark:Qn,measure:Qn};try{typeof window<"u"&&(gn=window),typeof document<"u"&&(ua=document),typeof MutationObserver<"u"&&(da=MutationObserver),typeof performance<"u"&&(ma=performance)}catch{}const{userAgent:tr=""}=gn.navigator||{},ot=gn,R=ua,er=da,Jt=ma;ot.document;const rt=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",pa=~tr.indexOf("MSIE")||~tr.indexOf("Trident/");var Zi=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Ji=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ha={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],U="classic",ce="duotone",to="sharp",eo="sharp-duotone",ya=[U,ce,to,eo],no={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ro={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ao=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),io={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},oo=["fak","fa-kit","fakd","fa-kit-duotone"],nr={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},so=["kit"],co={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},lo=["fak","fakd"],fo={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},rr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Qt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},uo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mo=["fak","fa-kit","fakd","fa-kit-duotone"],po={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ho={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},go={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ue={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},yo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ve=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...uo,...yo],bo=["solid","regular","light","thin","duotone","brands"],ba=[1,2,3,4,5,6,7,8,9,10],vo=ba.concat([11,12,13,14,15,16,17,18,19,20]),xo=[...Object.keys(go),...bo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qt.GROUP,Qt.SWAP_OPACITY,Qt.PRIMARY,Qt.SECONDARY].concat(ba.map(t=>"".concat(t,"x"))).concat(vo.map(t=>"w-".concat(t))),So={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const et="___FONT_AWESOME___",We=16,va="fa",xa="svg-inline--fa",gt="data-fa-i2svg",Be="data-fa-pseudo-element",Ao="data-fa-pseudo-element-pending",yn="data-prefix",bn="data-icon",ar="fontawesome-i2svg",To="async",Eo=["HTML","HEAD","STYLE","SCRIPT"],Sa=(()=>{try{return!0}catch{return!1}})();function Ht(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[U]}})}const Aa=d({},ha);Aa[U]=d(d(d(d({},{"fa-duotone":"duotone"}),ha[U]),nr.kit),nr["kit-duotone"]);const wo=Ht(Aa),He=d({},io);He[U]=d(d(d(d({},{duotone:"fad"}),He[U]),rr.kit),rr["kit-duotone"]);const ir=Ht(He),Ye=d({},Ue);Ye[U]=d(d({},Ye[U]),fo.kit);const vn=Ht(Ye),Ge=d({},ho);Ge[U]=d(d({},Ge[U]),co.kit);Ht(Ge);const Oo=Zi,Ta="fa-layers-text",_o=Ji,Po=d({},no);Ht(Po);const Co=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],we=Qi,Io=[...so,...xo],kt=ot.FontAwesomeConfig||{};function jo(t){var e=R.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function No(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}R&&typeof R.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=No(jo(n));a!=null&&(kt[r]=a)});const Ea={styleDefault:"solid",familyDefault:U,cssPrefix:va,replacementClass:xa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kt.familyPrefix&&(kt.cssPrefix=kt.familyPrefix);const Pt=d(d({},Ea),kt);Pt.autoReplaceSvg||(Pt.observeMutations=!1);const y={};Object.keys(Ea).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){Pt[t]=e,Rt.forEach(n=>n(y))},get:function(){return Pt[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Rt.forEach(e=>e(y))},get:function(){return Pt.cssPrefix}});ot.FontAwesomeConfig=y;const Rt=[];function Fo(t){return Rt.push(t),()=>{Rt.splice(Rt.indexOf(t),1)}}const it=We,X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lo(t){if(!t||!rt)return;const e=R.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=R.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return R.head.insertBefore(e,r),t}const Mo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zt(){let t=12,e="";for(;t-- >0;)e+=Mo[Math.random()*62|0];return e}function It(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xn(t){return t.classList?It(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function wa(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ko(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(wa(t[n]),'" '),"").trim()}function le(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Sn(t){return t.size!==X.size||t.x!==X.x||t.y!==X.y||t.rotate!==X.rotate||t.flipX||t.flipY}function Ro(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:u,path:l}}function $o(t){let{transform:e,width:n=We,height:r=We,startCentered:a=!1}=t,i="";return a&&pa?i+="translate(".concat(e.x/it-n/2,"em, ").concat(e.y/it-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/it,"em), calc(-50% + ").concat(e.y/it,"em)) "):i+="translate(".concat(e.x/it,"em, ").concat(e.y/it,"em) "),i+="scale(".concat(e.size/it*(e.flipX?-1:1),", ").concat(e.size/it*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Do=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Oa(){const t=va,e=xa,n=y.cssPrefix,r=y.replacementClass;let a=Do;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let or=!1;function Oe(){y.autoAddCss&&!or&&(Lo(Oa()),or=!0)}var zo={mixout(){return{dom:{css:Oa,insertCss:Oe}}},hooks(){return{beforeDOMElementCreation(){Oe()},beforeI2svg(){Oe()}}}};const nt=ot||{};nt[et]||(nt[et]={});nt[et].styles||(nt[et].styles={});nt[et].hooks||(nt[et].hooks={});nt[et].shims||(nt[et].shims=[]);var Z=nt[et];const _a=[],Pa=function(){R.removeEventListener("DOMContentLoaded",Pa),ae=1,_a.map(t=>t())};let ae=!1;rt&&(ae=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),ae||R.addEventListener("DOMContentLoaded",Pa));function Uo(t){rt&&(ae?setTimeout(t,0):_a.push(t))}function Yt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?wa(t):"<".concat(e," ").concat(ko(n),">").concat(r.map(Yt).join(""),"</").concat(e,">")}function sr(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var _e=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=n,u,l,p;for(r===void 0?(u=1,p=e[i[0]]):(u=0,p=r);u<o;u++)l=i[u],p=s(p,e[l],l,e);return p};function Vo(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function qe(t){const e=Vo(t);return e.length===1?e[0].toString(16):null}function Wo(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function cr(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ke(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=cr(e);typeof Z.hooks.addPack=="function"&&!r?Z.hooks.addPack(t,cr(e)):Z.styles[t]=d(d({},Z.styles[t]||{}),a),t==="fas"&&Ke("fa",e)}const{styles:Ut,shims:Bo}=Z,Ca=Object.keys(vn),Ho=Ca.reduce((t,e)=>(t[e]=Object.keys(vn[e]),t),{});let An=null,Ia={},ja={},Na={},Fa={},La={};function Yo(t){return~Io.indexOf(t)}function Go(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Yo(a)?a:null}const Ma=()=>{const t=r=>_e(Ut,(a,i,o)=>(a[o]=_e(i,r,{}),a),{});Ia=t((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),ja=t((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),La=t((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const e="far"in Ut||y.autoFetchSvg,n=_e(Bo,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Na=n.names,Fa=n.unicodes,An=fe(y.styleDefault,{family:y.familyDefault})};Fo(t=>{An=fe(t.styleDefault,{family:y.familyDefault})});Ma();function Tn(t,e){return(Ia[t]||{})[e]}function qo(t,e){return(ja[t]||{})[e]}function pt(t,e){return(La[t]||{})[e]}function ka(t){return Na[t]||{prefix:null,iconName:null}}function Ko(t){const e=Fa[t],n=Tn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function st(){return An}const Ra=()=>({prefix:null,iconName:null,rest:[]});function Xo(t){let e=U;const n=Ca.reduce((r,a)=>(r[a]="".concat(y.cssPrefix,"-").concat(a),r),{});return ya.forEach(r=>{(t.includes(n[r])||t.some(a=>Ho[r].includes(a)))&&(e=r)}),e}function fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=U}=e,r=wo[n][t];if(n===ce&&!t)return"fad";const a=ir[n][t]||ir[n][r],i=t in Z.styles?t:null;return a||i||null}function Zo(t){let e=[],n=null;return t.forEach(r=>{const a=Go(y.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function lr(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=Ve.concat(mo),i=lr(t.filter(v=>a.includes(v))),o=lr(t.filter(v=>!Ve.includes(v))),s=i.filter(v=>(r=v,!ga.includes(v))),[u=null]=s,l=Xo(i),p=d(d({},Zo(o)),{},{prefix:fe(u,{family:l})});return d(d(d({},p),es({values:t,family:l,styles:Ut,config:y,canonical:p,givenPrefix:r})),Jo(n,r,p))}function Jo(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const i=e==="fa"?ka(a):{},o=pt(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!Ut.far&&Ut.fas&&!y.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Qo=ya.filter(t=>t!==U||t!==ce),ts=Object.keys(Ue).filter(t=>t!==U).map(t=>Object.keys(Ue[t])).flat();function es(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=t,s=n===ce,u=e.includes("fa-duotone")||e.includes("fad"),l=o.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(u||l||p)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Qo.includes(n)&&(Object.keys(i).find(f=>ts.includes(f))||o.autoFetchSvg)){const f=ao.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=pt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=st()||"fas"),r}class ns{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=d(d({},this.definitions[i]||{}),a[i]),Ke(i,a[i]);const o=vn[U][i];o&&Ke(o,a[i]),Ma()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(e[i][l]=s)}),e[i][o]=s}),e}}let fr=[],wt={};const _t={},rs=Object.keys(_t);function as(t,e){let{mixoutsTo:n}=e;return fr=t,wt={},Object.keys(_t).forEach(r=>{rs.indexOf(r)===-1&&delete _t[r]}),fr.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{wt[o]||(wt[o]=[]),wt[o].push(i[o])})}r.provides&&r.provides(_t)}),n}function Xe(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(wt[t]||[]).forEach(o=>{e=o.apply(null,[e,...r])}),e}function yt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(wt[t]||[]).forEach(i=>{i.apply(null,n)})}function ct(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _t[t]?_t[t].apply(null,e):void 0}function Ze(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||st();if(e)return e=pt(n,e)||e,sr($a.definitions,n,e)||sr(Z.styles,n,e)}const $a=new ns,is=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,yt("noAuto")},os={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(yt("beforeI2svg",t),ct("pseudoElements2svg",t),ct("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Uo(()=>{cs({autoReplaceSvgRoot:e}),yt("watch",t)})}},ss={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=fe(t[0]);return{prefix:n,iconName:pt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Oo))){const e=ue(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||st(),iconName:pt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=st();return{prefix:e,iconName:pt(e,t)||t}}}},H={noAuto:is,config:y,dom:os,parse:ss,library:$a,findIconDefinition:Ze,toHtml:Yt},cs=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=R}=t;(Object.keys(Z.styles).length>0||y.autoFetchSvg)&&rt&&y.autoReplaceSvg&&H.dom.i2svg({node:e})};function de(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Yt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!rt)return;const n=R.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ls(t){let{children:e,main:n,mask:r,attributes:a,styles:i,transform:o}=t;if(Sn(o)&&n.found&&!r.found){const{width:s,height:u}=n,l={x:s/u/2,y:.5};a.style=le(d(d({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function fs(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function En(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:u,titleId:l,extra:p,watchable:v=!1}=t,{width:f,height:T}=n.found?n:e,O=lo.includes(r),C=[y.replacementClass,a?"".concat(y.cssPrefix,"-").concat(a):""].filter(m=>p.classes.indexOf(m)===-1).filter(m=>m!==""||!!m).concat(p.classes).join(" ");let A={children:[],attributes:d(d({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:C,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(T)})};const E=O&&!~p.classes.indexOf("fa-fw")?{width:"".concat(f/T*16*.0625,"em")}:{};v&&(A.attributes[gt]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||zt())},children:[s]}),delete A.attributes.title);const I=d(d({},A),{},{prefix:r,iconName:a,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:d(d({},E),p.styles)}),{children:j,attributes:z}=n.found&&e.found?ct("generateAbstractMask",I)||{children:[],attributes:{}}:ct("generateAbstractIcon",I)||{children:[],attributes:{}};return I.children=j,I.attributes=z,o?fs(I):ls(I)}function ur(t){const{content:e,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=t,u=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[gt]="");const l=d({},o.styles);Sn(a)&&(l.transform=$o({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const p=le(l);p.length>0&&(u.style=p);const v=[];return v.push({tag:"span",attributes:u,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function us(t){const{content:e,title:n,extra:r}=t,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=le(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Pe}=Z;function Je(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(we.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(we.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(we.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const ds={found:!1,width:512,height:512};function ms(t,e){!Sa&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qe(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=st()),new Promise((r,a)=>{if(n==="fa"){const i=ka(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Pe[e]&&Pe[e][t]){const i=Pe[e][t];return r(Je(i))}ms(t,e),r(d(d({},ds),{},{icon:y.showMissingIcons&&t?ct("missingIconAbstract")||{}:{}}))})}const dr=()=>{},tn=y.measurePerformance&&Jt&&Jt.mark&&Jt.measure?Jt:{mark:dr,measure:dr},Mt='FA "6.7.1"',ps=t=>(tn.mark("".concat(Mt," ").concat(t," begins")),()=>Da(t)),Da=t=>{tn.mark("".concat(Mt," ").concat(t," ends")),tn.measure("".concat(Mt," ").concat(t),"".concat(Mt," ").concat(t," begins"),"".concat(Mt," ").concat(t," ends"))};var wn={begin:ps,end:Da};const ne=()=>{};function mr(t){return typeof(t.getAttribute?t.getAttribute(gt):null)=="string"}function hs(t){const e=t.getAttribute?t.getAttribute(yn):null,n=t.getAttribute?t.getAttribute(bn):null;return e&&n}function gs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function ys(){return y.autoReplaceSvg===!0?re.replace:re[y.autoReplaceSvg]||re.replace}function bs(t){return R.createElementNS("http://www.w3.org/2000/svg",t)}function vs(t){return R.createElement(t)}function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?bs:vs}=e;if(typeof t=="string")return R.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(za(i,{ceFn:n}))}),r}function xs(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const re={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(za(n),e)}),e.getAttribute(gt)===null&&y.keepOriginalSource){let n=R.createComment(xs(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xn(e).indexOf(y.replacementClass))return re.replace(t);const r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===y.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Yt(i)).join(`
`);e.setAttribute(gt,""),e.innerHTML=a}};function pr(t){t()}function Ua(t,e){const n=typeof e=="function"?e:ne;if(t.length===0)n();else{let r=pr;y.mutateApproach===To&&(r=ot.requestAnimationFrame||pr),r(()=>{const a=ys(),i=wn.begin("mutate");t.map(a),i(),n()})}}let On=!1;function Va(){On=!0}function en(){On=!1}let ie=null;function hr(t){if(!er||!y.observeMutations)return;const{treeCallback:e=ne,nodeCallback:n=ne,pseudoElementsCallback:r=ne,observeMutationsRoot:a=R}=t;ie=new er(i=>{if(On)return;const o=st();It(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!mr(s.addedNodes[0])&&(y.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&y.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&mr(s.target)&&~Co.indexOf(s.attributeName))if(s.attributeName==="class"&&hs(s.target)){const{prefix:u,iconName:l}=ue(xn(s.target));s.target.setAttribute(yn,u||o),l&&s.target.setAttribute(bn,l)}else gs(s.target)&&n(s.target)})}),rt&&ie.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ss(){ie&&ie.disconnect()}function As(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ts(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=ue(xn(t));return a.prefix||(a.prefix=st()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=qo(a.prefix,t.innerText)||Tn(a.prefix,qe(t.innerText))),!a.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Es(t){const e=It(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(r||zt()):(e["aria-hidden"]="true",e.focusable="false")),e}function ws(){return{iconName:null,title:null,titleId:null,prefix:null,transform:X,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Ts(t),i=Es(t),o=Xe("parseNodeAttributes",{},t);let s=e.styleParser?As(t):[];return d({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:X,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:Os}=Z;function Wa(t){const e=y.autoReplaceSvg==="nest"?gr(t,{styleParser:!1}):gr(t);return~e.extra.classes.indexOf(Ta)?ct("generateLayersText",t,e):ct("generateSvgReplacementMutation",t,e)}function _s(){return[...oo,...Ve]}function yr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();const n=R.documentElement.classList,r=p=>n.add("".concat(ar,"-").concat(p)),a=p=>n.remove("".concat(ar,"-").concat(p)),i=y.autoFetchSvg?_s():ga.concat(Object.keys(Os));i.includes("fa")||i.push("fa");const o=[".".concat(Ta,":not([").concat(gt,"])")].concat(i.map(p=>".".concat(p,":not([").concat(gt,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=It(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const u=wn.begin("onTree"),l=s.reduce((p,v)=>{try{const f=Wa(v);f&&p.push(f)}catch(f){Sa||f.name==="MissingIcon"&&console.error(f)}return p},[]);return new Promise((p,v)=>{Promise.all(l).then(f=>{Ua(f,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),u(),p()})}).catch(f=>{u(),v(f)})})}function Ps(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wa(t).then(n=>{n&&Ua([n],e)})}function Cs(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Ze(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Ze(a||{})),t(r,d(d({},n),{},{mask:a}))}}const Is=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=X,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:l={},styles:p={}}=e;if(!t)return;const{prefix:v,iconName:f,icon:T}=t;return de(d({type:"icon"},t),()=>(yt("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(o?l["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(s||zt()):(l["aria-hidden"]="true",l.focusable="false")),En({icons:{main:Je(T),mask:a?Je(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:f,transform:d(d({},X),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:p,classes:u}})))};var js={mixout(){return{icon:Cs(Is)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=yr,t.nodeCallback=Ps,t}}},provides(t){t.i2svg=function(e){const{node:n=R,callback:r=()=>{}}=e;return yr(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:u,mask:l,maskId:p,extra:v}=n;return new Promise((f,T)=>{Promise.all([Qe(r,o),l.iconName?Qe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[C,A]=O;f([e,En({icons:{main:C,mask:A},prefix:o,iconName:r,transform:s,symbol:u,maskId:p,title:a,titleId:i,extra:v,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:i,styles:o}=e;const s=le(o);s.length>0&&(r.style=s);let u;return Sn(i)&&(u=ct("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(u||a.icon),{children:n,attributes:r}}}},Ns={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return de({type:"layer"},()=>{yt("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Fs={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=e;return de({type:"counter",content:t},()=>(yt("beforeDOMElementCreation",{content:t,params:e}),us({content:t.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...r]}})))}}}},Ls={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=X,title:r=null,classes:a=[],attributes:i={},styles:o={}}=e;return de({type:"text",content:t},()=>(yt("beforeDOMElementCreation",{content:t,params:e}),ur({content:t,transform:d(d({},X),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(y.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(pa){const u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/u,s=l.height/u}return y.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,ur({content:e.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const Ms=new RegExp('"',"ug"),br=[1105920,1112319],vr=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),ro),So),po),nn=Object.keys(vr).reduce((t,e)=>(t[e.toLowerCase()]=vr[e],t),{}),ks=Object.keys(nn).reduce((t,e)=>{const n=nn[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Rs(t){const e=t.replace(Ms,""),n=Wo(e,0),r=n>=br[0]&&n<=br[1],a=e.length===2?e[0]===e[1]:!1;return{value:qe(a?e[0]:e),isSecondary:r||a}}function $s(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(nn[n]||{})[a]||ks[n]}function xr(t,e){const n="".concat(Ao).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const o=It(t.children).filter(f=>f.getAttribute(Be)===e)[0],s=ot.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),l=u.match(_o),p=s.getPropertyValue("font-weight"),v=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&v!=="none"&&v!==""){const f=s.getPropertyValue("content");let T=$s(u,p);const{value:O,isSecondary:C}=Rs(f),A=l[0].startsWith("FontAwesome");let E=Tn(T,O),I=E;if(A){const j=Ko(O);j.iconName&&j.prefix&&(E=j.iconName,T=j.prefix)}if(E&&!C&&(!o||o.getAttribute(yn)!==T||o.getAttribute(bn)!==I)){t.setAttribute(n,I),o&&t.removeChild(o);const j=ws(),{extra:z}=j;z.attributes[Be]=e,Qe(E,T).then(m=>{const w=En(d(d({},j),{},{icons:{main:m,mask:Ra()},prefix:T,iconName:I,extra:z,watchable:!0})),N=R.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=w.map(Nt=>Yt(Nt)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ds(t){return Promise.all([xr(t,"::before"),xr(t,"::after")])}function zs(t){return t.parentNode!==document.head&&!~Eo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Be)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Sr(t){if(rt)return new Promise((e,n)=>{const r=It(t.querySelectorAll("*")).filter(zs).map(Ds),a=wn.begin("searchPseudoElements");Va(),Promise.all(r).then(()=>{a(),en(),e()}).catch(()=>{a(),en(),n()})})}var Us={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Sr,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=R}=e;y.searchPseudoElements&&Sr(n)}}};let Ar=!1;var Vs={mixout(){return{dom:{unwatch(){Va(),Ar=!0}}}},hooks(){return{bootstrap(){hr(Xe("mutationObserverCallbacks",{}))},noAuto(){Ss()},watch(t){const{observeMutationsRoot:e}=t;Ar?en():hr(Xe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Tr=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ws={mixout(){return{parse:{transform:t=>Tr(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Tr(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:i}=e;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(s," ").concat(u," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},f={outer:o,inner:p,path:v};return{tag:"g",attributes:d({},f.outer),children:[{tag:"g",attributes:d({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),f.path)}]}]}}}};const Ce={x:0,y:0,width:"100%",height:"100%"};function Er(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Bs(t){return t.tag==="g"?t.children:[t]}var Hs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ue(n.split(" ").map(a=>a.trim())):Ra();return r.prefix||(r.prefix=st()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=e;const{width:u,icon:l}=a,{width:p,icon:v}=i,f=Ro({transform:s,containerWidth:p,iconWidth:u}),T={tag:"rect",attributes:d(d({},Ce),{},{fill:"white"})},O=l.children?{children:l.children.map(Er)}:{},C={tag:"g",attributes:d({},f.inner),children:[Er(d({tag:l.tag,attributes:d(d({},l.attributes),f.path)},O))]},A={tag:"g",attributes:d({},f.outer),children:[C]},E="mask-".concat(o||zt()),I="clip-".concat(o||zt()),j={tag:"mask",attributes:d(d({},Ce),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,A]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Bs(v)},j]};return n.push(z,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(E,")")},Ce)}),{children:n,attributes:r}}}},Ys={provides(t){let e=!1;ot.matchMedia&&(e=ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=d(d({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Gs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},qs=[zo,js,Ns,Fs,Ls,Us,Vs,Ws,Hs,Ys,Gs];as(qs,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;const rn=H.parse;H.findIconDefinition;H.toHtml;const Ks=H.icon;H.layer;H.text;H.counter;var Ie={exports:{}},je,wr;function Xs(){if(wr)return je;wr=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return je=t,je}var Ne,Or;function Zs(){if(Or)return Ne;Or=1;var t=Xs();function e(){}function n(){}return n.resetWarningCache=e,Ne=function(){function r(o,s,u,l,p,v){if(v!==t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i},Ne}var _r;function Js(){return _r||(_r=1,Ie.exports=Zs()()),Ie.exports}var Qs=Js();const P=sa(Qs);function Pr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pr(Object(n),!0).forEach(function(r){Ot(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oe(t){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(t)}function Ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tc(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ec(t,e){if(t==null)return{};var n=tc(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function an(t){return nc(t)||rc(t)||ac(t)||ic()}function nc(t){if(Array.isArray(t))return on(t)}function rc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ac(t,e){if(t){if(typeof t=="string")return on(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return on(t,e)}}function on(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ic(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oc(t){var e,n=t.beat,r=t.fade,a=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,u=t.spin,l=t.spinPulse,p=t.spinReverse,v=t.pulse,f=t.fixedWidth,T=t.inverse,O=t.border,C=t.listItem,A=t.flip,E=t.size,I=t.rotation,j=t.pull,z=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":u,"fa-spin-reverse":p,"fa-spin-pulse":l,"fa-pulse":v,"fa-fw":f,"fa-inverse":T,"fa-border":O,"fa-li":C,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},Ot(e,"fa-".concat(E),typeof E<"u"&&E!==null),Ot(e,"fa-rotate-".concat(I),typeof I<"u"&&I!==null&&I!==0),Ot(e,"fa-pull-".concat(j),typeof j<"u"&&j!==null),Ot(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(z).map(function(m){return z[m]?m:null}).filter(function(m){return m})}function sc(t){return t=t-0,t===t}function Ba(t){return sc(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var cc=["style"];function lc(t){return t.charAt(0).toUpperCase()+t.slice(1)}function fc(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ba(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?e[lc(a)]=i:e[a]=i,e},{})}function Ha(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return Ha(t,u)}),a=Object.keys(e.attributes||{}).reduce(function(u,l){var p=e.attributes[l];switch(l){case"class":u.attrs.className=p,delete e.attributes.class;break;case"style":u.attrs.style=fc(p);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?u.attrs[l.toLowerCase()]=p:u.attrs[Ba(l)]=p}return u},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=ec(n,cc);return a.attrs.style=K(K({},a.attrs.style),o),t.apply(void 0,[e.tag,K(K({},a.attrs),s)].concat(an(r)))}var Ya=!1;try{Ya=!0}catch{}function uc(){if(!Ya&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Cr(t){if(t&&oe(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(rn.icon)return rn.icon(t);if(t===null)return null;if(t&&oe(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Fe(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ot({},t,e):{}}var Ir={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},lt=ca.forwardRef(function(t,e){var n=K(K({},Ir),t),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,u=n.titleId,l=n.maskId,p=Cr(r),v=Fe("classes",[].concat(an(oc(n)),an((o||"").split(" ")))),f=Fe("transform",typeof n.transform=="string"?rn.transform(n.transform):n.transform),T=Fe("mask",Cr(a)),O=Ks(p,K(K(K(K({},v),f),T),{},{symbol:i,title:s,titleId:u,maskId:l}));if(!O)return uc("Could not find icon",p),null;var C=O.abstract,A={ref:e};return Object.keys(n).forEach(function(E){Ir.hasOwnProperty(E)||(A[E]=n[E])}),dc(C[0],A)});lt.displayName="FontAwesomeIcon";lt.propTypes={beat:P.bool,border:P.bool,beatFade:P.bool,bounce:P.bool,className:P.string,fade:P.bool,flash:P.bool,mask:P.oneOfType([P.object,P.array,P.string]),maskId:P.string,fixedWidth:P.bool,inverse:P.bool,flip:P.oneOf([!0,!1,"horizontal","vertical","both"]),icon:P.oneOfType([P.object,P.array,P.string]),listItem:P.bool,pull:P.oneOf(["right","left"]),pulse:P.bool,rotation:P.oneOf([0,90,180,270]),shake:P.bool,size:P.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:P.bool,spinPulse:P.bool,spinReverse:P.bool,symbol:P.oneOfType([P.bool,P.string]),title:P.string,titleId:P.string,transform:P.oneOfType([P.string,P.object]),swapOpacity:P.bool};var dc=Ha.bind(null,ca.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const mc={prefix:"fas",iconName:"text-height",icon:[576,512,[],"f034","M64 128l0-32 64 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L160 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 192-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-192 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},pc={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},hc={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},gc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},yc=gc,bc={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},vc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},xc={selectedIcons:[],setSelectedIcons(){},height:50,setHeight(){}},Gt=x.createContext(xc);function Sc({selectedIcon:t}){const{selectedIcons:e,setSelectedIcons:n,height:r}=x.useContext(Gt),a=o=>{n([...e.map(s=>s.icon.id===t.icon.id?{showLabel:o,icon:s.icon}:s)])},i=()=>{n([...e.filter(o=>o.icon.id!==t.icon.id).map(o=>({...o}))])};return g.jsxs(Ri,{showArrow:!0,offset:10,placement:"bottom",children:[g.jsx($i,{className:"cursor-pointer",children:g.jsx("img",{style:{height:`${r}px`},src:t.showLabel?`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${t.icon.id}.svg`:`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${t.icon.id}-compact.svg`,alt:t.icon.id},t.icon.id)}),g.jsxs(Di,{className:"p-[1rem] flex flex-row space-x-3",children:[g.jsx(mn,{color:"danger",variant:"bordered",isIconOnly:!0,onPress:i,children:g.jsx(lt,{icon:pc})}),g.jsx(la,{isSelected:t.showLabel,onValueChange:()=>a(!t.showLabel),children:"Show label"})]})]})}function Ac(){const{selectedIcons:t,height:e}=x.useContext(Gt),n=()=>`<div float="left">
  ${t.map(r=>`<img height="${e}px" src="https://github.com/devlotfi/stack-icons/blob/main/icons/${r.icon.id}.svg">`).join(`
  `)}
</div>`;return g.jsx(pn,{shadow:"none",className:"bg-content2 border border-divider",children:g.jsx(hn,{children:g.jsxs("div",{className:"flex",children:[g.jsx("pre",{className:"flex flex-1",children:n()}),g.jsx(mn,{variant:"bordered",className:"bg-background",isIconOnly:!0,size:"sm",onPress:()=>navigator.clipboard.writeText(n()),children:g.jsx(lt,{icon:bc})})]})})})}function Tc(){const{selectedIcons:t,height:e,setHeight:n}=x.useContext(Gt);return g.jsxs(pn,{shadow:"none",className:"border border-divider",children:[g.jsx(zi,{children:g.jsx("div",{className:"flex font-medium text-[13pt]",children:"Result"})}),g.jsx(Ui,{}),g.jsx(hn,{children:g.jsx("div",{className:"flex flex-col space-y-3",children:t.length>0?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"flex flex-wrap gap-1",children:t.map(r=>g.jsx(Sc,{selectedIcon:r}))}),g.jsx(fa,{name:"height",type:"number",min:0,max:99,step:1,value:e,onChange:r=>{const a=r.target.value;a>=0&&a<100&&n(r.target.value)},label:"Height",classNames:{inputWrapper:"border border-divider shadow-none bg-content2"},startContent:g.jsx(lt,{icon:mc}),endContent:g.jsx("div",{className:"flex",children:"px"})}),g.jsx(Ac,{})]}):g.jsx("div",{className:"flex p-[1rem]",children:"Select icons to get started"})})})]})}const Ec=[{id:"html",displayName:"HTML"},{id:"css",displayName:"CSS"},{id:"js",displayName:"Javascript"},{id:"ts",displayName:"Typescript"}];function wc({icon:t,showLabel:e}){const{selectedIcons:n,setSelectedIcons:r}=x.useContext(Gt),a=()=>n.find(s=>s.icon.id===t.id)!==void 0,i=()=>{a()?r([...n.filter(o=>o.icon.id!==t.id).map(o=>({...o}))]):r([...n.map(o=>({...o})),{icon:t,showLabel:e}])};return g.jsx(pn,{onPress:i,shadow:"none",isPressable:!0,className:Kn("border border-divider",a()&&"border-[2px] border-primary bg-[hsl(var(--nextui-primary)/0.2)]"),children:g.jsxs(hn,{className:"flex-col",children:[g.jsx("img",{className:"h-[3rem] my-[1rem]",src:e?`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${t.id}.svg`:`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${t.id}-compact.svg`,alt:t.id}),g.jsx("div",{className:Kn("flex font-medium self-start",a()&&"text-primary"),children:t.displayName})]})})}var Oc=function(e){return _c(e)&&!Pc(e)};function _c(t){return!!t&&typeof t=="object"}function Pc(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||jc(t)}var Cc=typeof Symbol=="function"&&Symbol.for,Ic=Cc?Symbol.for("react.element"):60103;function jc(t){return t.$$typeof===Ic}function Nc(t){return Array.isArray(t)?[]:{}}function se(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Vt(Nc(t),t,e):t}function Fc(t,e,n){return t.concat(e).map(function(r){return se(r,n)})}function Lc(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(a){r[a]=se(t[a],n)}),Object.keys(e).forEach(function(a){!n.isMergeableObject(e[a])||!t[a]?r[a]=se(e[a],n):r[a]=Vt(t[a],e[a],n)}),r}function Vt(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Fc,n.isMergeableObject=n.isMergeableObject||Oc;var r=Array.isArray(e),a=Array.isArray(t),i=r===a;return i?r?n.arrayMerge(t,e,n):Lc(t,e,n):se(e,n)}Vt.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,a){return Vt(r,a,n)},{})};var sn=Vt,Ga=typeof global=="object"&&global&&global.Object===Object&&global,Mc=typeof self=="object"&&self&&self.Object===Object&&self,J=Ga||Mc||Function("return this")(),ft=J.Symbol,qa=Object.prototype,kc=qa.hasOwnProperty,Rc=qa.toString,Lt=ft?ft.toStringTag:void 0;function $c(t){var e=kc.call(t,Lt),n=t[Lt];try{t[Lt]=void 0;var r=!0}catch{}var a=Rc.call(t);return r&&(e?t[Lt]=n:delete t[Lt]),a}var Dc=Object.prototype,zc=Dc.toString;function Uc(t){return zc.call(t)}var Vc="[object Null]",Wc="[object Undefined]",jr=ft?ft.toStringTag:void 0;function vt(t){return t==null?t===void 0?Wc:Vc:jr&&jr in Object(t)?$c(t):Uc(t)}function Ka(t,e){return function(n){return t(e(n))}}var _n=Ka(Object.getPrototypeOf,Object);function xt(t){return t!=null&&typeof t=="object"}var Bc="[object Object]",Hc=Function.prototype,Yc=Object.prototype,Xa=Hc.toString,Gc=Yc.hasOwnProperty,qc=Xa.call(Object);function Nr(t){if(!xt(t)||vt(t)!=Bc)return!1;var e=_n(t);if(e===null)return!0;var n=Gc.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Xa.call(n)==qc}function Kc(){this.__data__=[],this.size=0}function Za(t,e){return t===e||t!==t&&e!==e}function me(t,e){for(var n=t.length;n--;)if(Za(t[n][0],e))return n;return-1}var Xc=Array.prototype,Zc=Xc.splice;function Jc(t){var e=this.__data__,n=me(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Zc.call(e,n,1),--this.size,!0}function Qc(t){var e=this.__data__,n=me(e,t);return n<0?void 0:e[n][1]}function tl(t){return me(this.__data__,t)>-1}function el(t,e){var n=this.__data__,r=me(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function at(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}at.prototype.clear=Kc;at.prototype.delete=Jc;at.prototype.get=Qc;at.prototype.has=tl;at.prototype.set=el;function nl(){this.__data__=new at,this.size=0}function rl(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function al(t){return this.__data__.get(t)}function il(t){return this.__data__.has(t)}function qt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ol="[object AsyncFunction]",sl="[object Function]",cl="[object GeneratorFunction]",ll="[object Proxy]";function Ja(t){if(!qt(t))return!1;var e=vt(t);return e==sl||e==cl||e==ol||e==ll}var Le=J["__core-js_shared__"],Fr=function(){var t=/[^.]+$/.exec(Le&&Le.keys&&Le.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fl(t){return!!Fr&&Fr in t}var ul=Function.prototype,dl=ul.toString;function St(t){if(t!=null){try{return dl.call(t)}catch{}try{return t+""}catch{}}return""}var ml=/[\\^$.*+?()[\]{}|]/g,pl=/^\[object .+?Constructor\]$/,hl=Function.prototype,gl=Object.prototype,yl=hl.toString,bl=gl.hasOwnProperty,vl=RegExp("^"+yl.call(bl).replace(ml,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xl(t){if(!qt(t)||fl(t))return!1;var e=Ja(t)?vl:pl;return e.test(St(t))}function Sl(t,e){return t==null?void 0:t[e]}function At(t,e){var n=Sl(t,e);return xl(n)?n:void 0}var Wt=At(J,"Map"),Bt=At(Object,"create");function Al(){this.__data__=Bt?Bt(null):{},this.size=0}function Tl(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var El="__lodash_hash_undefined__",wl=Object.prototype,Ol=wl.hasOwnProperty;function _l(t){var e=this.__data__;if(Bt){var n=e[t];return n===El?void 0:n}return Ol.call(e,t)?e[t]:void 0}var Pl=Object.prototype,Cl=Pl.hasOwnProperty;function Il(t){var e=this.__data__;return Bt?e[t]!==void 0:Cl.call(e,t)}var jl="__lodash_hash_undefined__";function Nl(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Bt&&e===void 0?jl:e,this}function bt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}bt.prototype.clear=Al;bt.prototype.delete=Tl;bt.prototype.get=_l;bt.prototype.has=Il;bt.prototype.set=Nl;function Fl(){this.size=0,this.__data__={hash:new bt,map:new(Wt||at),string:new bt}}function Ll(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pe(t,e){var n=t.__data__;return Ll(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Ml(t){var e=pe(this,t).delete(t);return this.size-=e?1:0,e}function kl(t){return pe(this,t).get(t)}function Rl(t){return pe(this,t).has(t)}function $l(t,e){var n=pe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function ut(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ut.prototype.clear=Fl;ut.prototype.delete=Ml;ut.prototype.get=kl;ut.prototype.has=Rl;ut.prototype.set=$l;var Dl=200;function zl(t,e){var n=this.__data__;if(n instanceof at){var r=n.__data__;if(!Wt||r.length<Dl-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ut(r)}return n.set(t,e),this.size=n.size,this}function jt(t){var e=this.__data__=new at(t);this.size=e.size}jt.prototype.clear=nl;jt.prototype.delete=rl;jt.prototype.get=al;jt.prototype.has=il;jt.prototype.set=zl;function Ul(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var Lr=function(){try{var t=At(Object,"defineProperty");return t({},"",{}),t}catch{}}();function Qa(t,e,n){e=="__proto__"&&Lr?Lr(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Vl=Object.prototype,Wl=Vl.hasOwnProperty;function ti(t,e,n){var r=t[e];(!(Wl.call(t,e)&&Za(r,n))||n===void 0&&!(e in t))&&Qa(t,e,n)}function he(t,e,n,r){var a=!n;n||(n={});for(var i=-1,o=e.length;++i<o;){var s=e[i],u=void 0;u===void 0&&(u=t[s]),a?Qa(n,s,u):ti(n,s,u)}return n}function Bl(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Hl="[object Arguments]";function Mr(t){return xt(t)&&vt(t)==Hl}var ei=Object.prototype,Yl=ei.hasOwnProperty,Gl=ei.propertyIsEnumerable,ql=Mr(function(){return arguments}())?Mr:function(t){return xt(t)&&Yl.call(t,"callee")&&!Gl.call(t,"callee")},Kt=Array.isArray;function Kl(){return!1}var ni=typeof W=="object"&&W&&!W.nodeType&&W,kr=ni&&typeof B=="object"&&B&&!B.nodeType&&B,Xl=kr&&kr.exports===ni,Rr=Xl?J.Buffer:void 0,Zl=Rr?Rr.isBuffer:void 0,ri=Zl||Kl,Jl=9007199254740991,Ql=/^(?:0|[1-9]\d*)$/;function tf(t,e){var n=typeof t;return e=e??Jl,!!e&&(n=="number"||n!="symbol"&&Ql.test(t))&&t>-1&&t%1==0&&t<e}var ef=9007199254740991;function ai(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ef}var nf="[object Arguments]",rf="[object Array]",af="[object Boolean]",of="[object Date]",sf="[object Error]",cf="[object Function]",lf="[object Map]",ff="[object Number]",uf="[object Object]",df="[object RegExp]",mf="[object Set]",pf="[object String]",hf="[object WeakMap]",gf="[object ArrayBuffer]",yf="[object DataView]",bf="[object Float32Array]",vf="[object Float64Array]",xf="[object Int8Array]",Sf="[object Int16Array]",Af="[object Int32Array]",Tf="[object Uint8Array]",Ef="[object Uint8ClampedArray]",wf="[object Uint16Array]",Of="[object Uint32Array]",k={};k[bf]=k[vf]=k[xf]=k[Sf]=k[Af]=k[Tf]=k[Ef]=k[wf]=k[Of]=!0;k[nf]=k[rf]=k[gf]=k[af]=k[yf]=k[of]=k[sf]=k[cf]=k[lf]=k[ff]=k[uf]=k[df]=k[mf]=k[pf]=k[hf]=!1;function _f(t){return xt(t)&&ai(t.length)&&!!k[vt(t)]}function Pn(t){return function(e){return t(e)}}var ii=typeof W=="object"&&W&&!W.nodeType&&W,$t=ii&&typeof B=="object"&&B&&!B.nodeType&&B,Pf=$t&&$t.exports===ii,Me=Pf&&Ga.process,Ct=function(){try{var t=$t&&$t.require&&$t.require("util").types;return t||Me&&Me.binding&&Me.binding("util")}catch{}}(),$r=Ct&&Ct.isTypedArray,Cf=$r?Pn($r):_f,If=Object.prototype,jf=If.hasOwnProperty;function oi(t,e){var n=Kt(t),r=!n&&ql(t),a=!n&&!r&&ri(t),i=!n&&!r&&!a&&Cf(t),o=n||r||a||i,s=o?Bl(t.length,String):[],u=s.length;for(var l in t)(e||jf.call(t,l))&&!(o&&(l=="length"||a&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||tf(l,u)))&&s.push(l);return s}var Nf=Object.prototype;function Cn(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Nf;return t===n}var Ff=Ka(Object.keys,Object),Lf=Object.prototype,Mf=Lf.hasOwnProperty;function kf(t){if(!Cn(t))return Ff(t);var e=[];for(var n in Object(t))Mf.call(t,n)&&n!="constructor"&&e.push(n);return e}function si(t){return t!=null&&ai(t.length)&&!Ja(t)}function In(t){return si(t)?oi(t):kf(t)}function Rf(t,e){return t&&he(e,In(e),t)}function $f(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var Df=Object.prototype,zf=Df.hasOwnProperty;function Uf(t){if(!qt(t))return $f(t);var e=Cn(t),n=[];for(var r in t)r=="constructor"&&(e||!zf.call(t,r))||n.push(r);return n}function jn(t){return si(t)?oi(t,!0):Uf(t)}function Vf(t,e){return t&&he(e,jn(e),t)}var ci=typeof W=="object"&&W&&!W.nodeType&&W,Dr=ci&&typeof B=="object"&&B&&!B.nodeType&&B,Wf=Dr&&Dr.exports===ci,zr=Wf?J.Buffer:void 0,Ur=zr?zr.allocUnsafe:void 0;function Bf(t,e){if(e)return t.slice();var n=t.length,r=Ur?Ur(n):new t.constructor(n);return t.copy(r),r}function li(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function Hf(t,e){for(var n=-1,r=t==null?0:t.length,a=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[a++]=o)}return i}function fi(){return[]}var Yf=Object.prototype,Gf=Yf.propertyIsEnumerable,Vr=Object.getOwnPropertySymbols,Nn=Vr?function(t){return t==null?[]:(t=Object(t),Hf(Vr(t),function(e){return Gf.call(t,e)}))}:fi;function qf(t,e){return he(t,Nn(t),e)}function ui(t,e){for(var n=-1,r=e.length,a=t.length;++n<r;)t[a+n]=e[n];return t}var Kf=Object.getOwnPropertySymbols,di=Kf?function(t){for(var e=[];t;)ui(e,Nn(t)),t=_n(t);return e}:fi;function Xf(t,e){return he(t,di(t),e)}function mi(t,e,n){var r=e(t);return Kt(t)?r:ui(r,n(t))}function Zf(t){return mi(t,In,Nn)}function Jf(t){return mi(t,jn,di)}var cn=At(J,"DataView"),ln=At(J,"Promise"),fn=At(J,"Set"),un=At(J,"WeakMap"),Wr="[object Map]",Qf="[object Object]",Br="[object Promise]",Hr="[object Set]",Yr="[object WeakMap]",Gr="[object DataView]",tu=St(cn),eu=St(Wt),nu=St(ln),ru=St(fn),au=St(un),tt=vt;(cn&&tt(new cn(new ArrayBuffer(1)))!=Gr||Wt&&tt(new Wt)!=Wr||ln&&tt(ln.resolve())!=Br||fn&&tt(new fn)!=Hr||un&&tt(new un)!=Yr)&&(tt=function(t){var e=vt(t),n=e==Qf?t.constructor:void 0,r=n?St(n):"";if(r)switch(r){case tu:return Gr;case eu:return Wr;case nu:return Br;case ru:return Hr;case au:return Yr}return e});var iu=Object.prototype,ou=iu.hasOwnProperty;function su(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&ou.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var qr=J.Uint8Array;function Fn(t){var e=new t.constructor(t.byteLength);return new qr(e).set(new qr(t)),e}function cu(t,e){var n=e?Fn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var lu=/\w*$/;function fu(t){var e=new t.constructor(t.source,lu.exec(t));return e.lastIndex=t.lastIndex,e}var Kr=ft?ft.prototype:void 0,Xr=Kr?Kr.valueOf:void 0;function uu(t){return Xr?Object(Xr.call(t)):{}}function du(t,e){var n=e?Fn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var mu="[object Boolean]",pu="[object Date]",hu="[object Map]",gu="[object Number]",yu="[object RegExp]",bu="[object Set]",vu="[object String]",xu="[object Symbol]",Su="[object ArrayBuffer]",Au="[object DataView]",Tu="[object Float32Array]",Eu="[object Float64Array]",wu="[object Int8Array]",Ou="[object Int16Array]",_u="[object Int32Array]",Pu="[object Uint8Array]",Cu="[object Uint8ClampedArray]",Iu="[object Uint16Array]",ju="[object Uint32Array]";function Nu(t,e,n){var r=t.constructor;switch(e){case Su:return Fn(t);case mu:case pu:return new r(+t);case Au:return cu(t,n);case Tu:case Eu:case wu:case Ou:case _u:case Pu:case Cu:case Iu:case ju:return du(t,n);case hu:return new r;case gu:case vu:return new r(t);case yu:return fu(t);case bu:return new r;case xu:return uu(t)}}var Zr=Object.create,Fu=function(){function t(){}return function(e){if(!qt(e))return{};if(Zr)return Zr(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Lu(t){return typeof t.constructor=="function"&&!Cn(t)?Fu(_n(t)):{}}var Mu="[object Map]";function ku(t){return xt(t)&&tt(t)==Mu}var Jr=Ct&&Ct.isMap,Ru=Jr?Pn(Jr):ku,$u="[object Set]";function Du(t){return xt(t)&&tt(t)==$u}var Qr=Ct&&Ct.isSet,zu=Qr?Pn(Qr):Du,Uu=1,Vu=2,Wu=4,pi="[object Arguments]",Bu="[object Array]",Hu="[object Boolean]",Yu="[object Date]",Gu="[object Error]",hi="[object Function]",qu="[object GeneratorFunction]",Ku="[object Map]",Xu="[object Number]",gi="[object Object]",Zu="[object RegExp]",Ju="[object Set]",Qu="[object String]",td="[object Symbol]",ed="[object WeakMap]",nd="[object ArrayBuffer]",rd="[object DataView]",ad="[object Float32Array]",id="[object Float64Array]",od="[object Int8Array]",sd="[object Int16Array]",cd="[object Int32Array]",ld="[object Uint8Array]",fd="[object Uint8ClampedArray]",ud="[object Uint16Array]",dd="[object Uint32Array]",M={};M[pi]=M[Bu]=M[nd]=M[rd]=M[Hu]=M[Yu]=M[ad]=M[id]=M[od]=M[sd]=M[cd]=M[Ku]=M[Xu]=M[gi]=M[Zu]=M[Ju]=M[Qu]=M[td]=M[ld]=M[fd]=M[ud]=M[dd]=!0;M[Gu]=M[hi]=M[ed]=!1;function Dt(t,e,n,r,a,i){var o,s=e&Uu,u=e&Vu,l=e&Wu;if(o!==void 0)return o;if(!qt(t))return t;var p=Kt(t);if(p){if(o=su(t),!s)return li(t,o)}else{var v=tt(t),f=v==hi||v==qu;if(ri(t))return Bf(t,s);if(v==gi||v==pi||f&&!a){if(o=u||f?{}:Lu(t),!s)return u?Xf(t,Vf(o,t)):qf(t,Rf(o,t))}else{if(!M[v])return a?t:{};o=Nu(t,v,s)}}i||(i=new jt);var T=i.get(t);if(T)return T;i.set(t,o),zu(t)?t.forEach(function(A){o.add(Dt(A,e,n,A,t,i))}):Ru(t)&&t.forEach(function(A,E){o.set(E,Dt(A,e,n,E,t,i))});var O=l?u?Jf:Zf:u?jn:In,C=p?void 0:O(t);return Ul(C||t,function(A,E){C&&(E=A,A=t[E]),ti(o,E,Dt(A,e,n,E,t,i))}),o}var md=1,pd=4;function te(t){return Dt(t,md|pd)}var ke,ta;function hd(){if(ta)return ke;ta=1;var t=Array.isArray,e=Object.keys,n=Object.prototype.hasOwnProperty,r=typeof Element<"u";function a(i,o){if(i===o)return!0;if(i&&o&&typeof i=="object"&&typeof o=="object"){var s=t(i),u=t(o),l,p,v;if(s&&u){if(p=i.length,p!=o.length)return!1;for(l=p;l--!==0;)if(!a(i[l],o[l]))return!1;return!0}if(s!=u)return!1;var f=i instanceof Date,T=o instanceof Date;if(f!=T)return!1;if(f&&T)return i.getTime()==o.getTime();var O=i instanceof RegExp,C=o instanceof RegExp;if(O!=C)return!1;if(O&&C)return i.toString()==o.toString();var A=e(i);if(p=A.length,p!==e(o).length)return!1;for(l=p;l--!==0;)if(!n.call(o,A[l]))return!1;if(r&&i instanceof Element&&o instanceof Element)return i===o;for(l=p;l--!==0;)if(v=A[l],!(v==="_owner"&&i.$$typeof)&&!a(i[v],o[v]))return!1;return!0}return i!==i&&o!==o}return ke=function(o,s){try{return a(o,s)}catch(u){if(u.message&&u.message.match(/stack|recursion/i)||u.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",u.name,u.message),!1;throw u}},ke}var gd=hd();const mt=sa(gd);var yd=4;function ea(t){return Dt(t,yd)}function yi(t,e){for(var n=-1,r=t==null?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}var bd="[object Symbol]";function Ln(t){return typeof t=="symbol"||xt(t)&&vt(t)==bd}var vd="Expected a function";function Mn(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(vd);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=t.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Mn.Cache||ut),n}Mn.Cache=ut;var xd=500;function Sd(t){var e=Mn(t,function(r){return n.size===xd&&n.clear(),r}),n=e.cache;return e}var Ad=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Td=/\\(\\)?/g,Ed=Sd(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ad,function(n,r,a,i){e.push(a?i.replace(Td,"$1"):r||n)}),e}),wd=1/0;function Od(t){if(typeof t=="string"||Ln(t))return t;var e=t+"";return e=="0"&&1/t==-wd?"-0":e}var _d=1/0,na=ft?ft.prototype:void 0,ra=na?na.toString:void 0;function bi(t){if(typeof t=="string")return t;if(Kt(t))return yi(t,bi)+"";if(Ln(t))return ra?ra.call(t):"";var e=t+"";return e=="0"&&1/t==-_d?"-0":e}function Pd(t){return t==null?"":bi(t)}function vi(t){return Kt(t)?yi(t,Od):Ln(t)?[t]:li(Ed(Pd(t)))}var Re={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa;function Cd(){if(aa)return F;aa=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,i=t?Symbol.for("react.profiler"):60114,o=t?Symbol.for("react.provider"):60109,s=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,l=t?Symbol.for("react.concurrent_mode"):60111,p=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,f=t?Symbol.for("react.suspense_list"):60120,T=t?Symbol.for("react.memo"):60115,O=t?Symbol.for("react.lazy"):60116,C=t?Symbol.for("react.block"):60121,A=t?Symbol.for("react.fundamental"):60117,E=t?Symbol.for("react.responder"):60118,I=t?Symbol.for("react.scope"):60119;function j(m){if(typeof m=="object"&&m!==null){var w=m.$$typeof;switch(w){case e:switch(m=m.type,m){case u:case l:case r:case i:case a:case v:return m;default:switch(m=m&&m.$$typeof,m){case s:case p:case O:case T:case o:return m;default:return w}}case n:return w}}}function z(m){return j(m)===l}return F.AsyncMode=u,F.ConcurrentMode=l,F.ContextConsumer=s,F.ContextProvider=o,F.Element=e,F.ForwardRef=p,F.Fragment=r,F.Lazy=O,F.Memo=T,F.Portal=n,F.Profiler=i,F.StrictMode=a,F.Suspense=v,F.isAsyncMode=function(m){return z(m)||j(m)===u},F.isConcurrentMode=z,F.isContextConsumer=function(m){return j(m)===s},F.isContextProvider=function(m){return j(m)===o},F.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},F.isForwardRef=function(m){return j(m)===p},F.isFragment=function(m){return j(m)===r},F.isLazy=function(m){return j(m)===O},F.isMemo=function(m){return j(m)===T},F.isPortal=function(m){return j(m)===n},F.isProfiler=function(m){return j(m)===i},F.isStrictMode=function(m){return j(m)===a},F.isSuspense=function(m){return j(m)===v},F.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===l||m===i||m===a||m===v||m===f||typeof m=="object"&&m!==null&&(m.$$typeof===O||m.$$typeof===T||m.$$typeof===o||m.$$typeof===s||m.$$typeof===p||m.$$typeof===A||m.$$typeof===E||m.$$typeof===I||m.$$typeof===C)},F.typeOf=j,F}var ia;function Id(){return ia||(ia=1,Re.exports=Cd()),Re.exports}var $e,oa;function jd(){if(oa)return $e;oa=1;var t=Id(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[t.ForwardRef]=r,i[t.Memo]=a;function o(O){return t.isMemo(O)?a:i[O.$$typeof]||e}var s=Object.defineProperty,u=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,f=Object.prototype;function T(O,C,A){if(typeof C!="string"){if(f){var E=v(C);E&&E!==f&&T(O,E,A)}var I=u(C);l&&(I=I.concat(l(C)));for(var j=o(O),z=o(C),m=0;m<I.length;++m){var w=I[m];if(!n[w]&&!(A&&A[w])&&!(z&&z[w])&&!(j&&j[w])){var N=p(C,w);try{s(O,w,N)}catch{}}}}return O}return $e=T,$e}jd();function D(){return D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)}function xi(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}var ge=x.createContext(void 0);ge.displayName="FormikContext";ge.Provider;ge.Consumer;function Nd(){var t=x.useContext(ge);return t}var q=function(e){return typeof e=="function"},ye=function(e){return e!==null&&typeof e=="object"},Fd=function(e){return String(Math.floor(Number(e)))===e},De=function(e){return Object.prototype.toString.call(e)==="[object String]"},ze=function(e){return ye(e)&&q(e.then)};function V(t,e,n,r){r===void 0&&(r=0);for(var a=vi(e);t&&r<a.length;)t=t[a[r++]];return r!==a.length&&!t||t===void 0?n:t}function ht(t,e,n){for(var r=ea(t),a=r,i=0,o=vi(e);i<o.length-1;i++){var s=o[i],u=V(t,o.slice(0,i+1));if(u&&(ye(u)||Array.isArray(u)))a=a[s]=ea(u);else{var l=o[i+1];a=a[s]=Fd(l)&&Number(l)>=0?[]:{}}}return(i===0?t:a)[o[i]]===n?t:(n===void 0?delete a[o[i]]:a[o[i]]=n,i===0&&n===void 0&&delete r[o[i]],r)}function Si(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var a=0,i=Object.keys(t);a<i.length;a++){var o=i[a],s=t[o];ye(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},Si(s,e,n,r[o])):r[o]=e}return r}function Ld(t,e){switch(e.type){case"SET_VALUES":return D({},t,{values:e.payload});case"SET_TOUCHED":return D({},t,{touched:e.payload});case"SET_ERRORS":return mt(t.errors,e.payload)?t:D({},t,{errors:e.payload});case"SET_STATUS":return D({},t,{status:e.payload});case"SET_ISSUBMITTING":return D({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return D({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return D({},t,{values:ht(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return D({},t,{touched:ht(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return D({},t,{errors:ht(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return D({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return D({},t,{touched:Si(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return D({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return D({},t,{isSubmitting:!1});default:return t}}var dt={},ee={};function Md(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,a=r===void 0?!0:r,i=t.validateOnMount,o=i===void 0?!1:i,s=t.isInitialValid,u=t.enableReinitialize,l=u===void 0?!1:u,p=t.onSubmit,v=xi(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=D({validateOnChange:n,validateOnBlur:a,validateOnMount:o,onSubmit:p},v),T=x.useRef(f.initialValues),O=x.useRef(f.initialErrors||dt),C=x.useRef(f.initialTouched||ee),A=x.useRef(f.initialStatus),E=x.useRef(!1),I=x.useRef({});x.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var j=x.useState(0),z=j[1],m=x.useRef({values:te(f.initialValues),errors:te(f.initialErrors)||dt,touched:te(f.initialTouched)||ee,status:te(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),w=m.current,N=x.useCallback(function(c){var h=m.current;m.current=Ld(h,c),h!==m.current&&z(function(b){return b+1})},[]),Nt=x.useCallback(function(c,h){return new Promise(function(b,S){var _=f.validate(c,h);_==null?b(dt):ze(_)?_.then(function(L){b(L||dt)},function(L){S(L)}):b(_)})},[f.validate]),be=x.useCallback(function(c,h){var b=f.validationSchema,S=q(b)?b(h):b,_=h&&S.validateAt?S.validateAt(h,c):Rd(c,S);return new Promise(function(L,$){_.then(function(){L(dt)},function(Q){Q.name==="ValidationError"?L(kd(Q)):$(Q)})})},[f.validationSchema]),kn=x.useCallback(function(c,h){return new Promise(function(b){return b(I.current[c].validate(h))})},[]),Rn=x.useCallback(function(c){var h=Object.keys(I.current).filter(function(S){return q(I.current[S].validate)}),b=h.length>0?h.map(function(S){return kn(S,V(c,S))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(b).then(function(S){return S.reduce(function(_,L,$){return L==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||L&&(_=ht(_,h[$],L)),_},{})})},[kn]),Ai=x.useCallback(function(c){return Promise.all([Rn(c),f.validationSchema?be(c):{},f.validate?Nt(c):{}]).then(function(h){var b=h[0],S=h[1],_=h[2],L=sn.all([b,S,_],{arrayMerge:$d});return L})},[f.validate,f.validationSchema,Rn,Nt,be]),G=Y(function(c){return c===void 0&&(c=w.values),N({type:"SET_ISVALIDATING",payload:!0}),Ai(c).then(function(h){return E.current&&(N({type:"SET_ISVALIDATING",payload:!1}),N({type:"SET_ERRORS",payload:h})),h})});x.useEffect(function(){o&&E.current===!0&&mt(T.current,f.initialValues)&&G(T.current)},[o,G]);var Ft=x.useCallback(function(c){var h=c&&c.values?c.values:T.current,b=c&&c.errors?c.errors:O.current?O.current:f.initialErrors||{},S=c&&c.touched?c.touched:C.current?C.current:f.initialTouched||{},_=c&&c.status?c.status:A.current?A.current:f.initialStatus;T.current=h,O.current=b,C.current=S,A.current=_;var L=function(){N({type:"RESET_FORM",payload:{isSubmitting:!!c&&!!c.isSubmitting,errors:b,touched:S,status:_,values:h,isValidating:!!c&&!!c.isValidating,submitCount:c&&c.submitCount&&typeof c.submitCount=="number"?c.submitCount:0}})};if(f.onReset){var $=f.onReset(w.values,Gn);ze($)?$.then(L):L()}else L()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);x.useEffect(function(){E.current===!0&&!mt(T.current,f.initialValues)&&l&&(T.current=f.initialValues,Ft(),o&&G(T.current))},[l,f.initialValues,Ft,o,G]),x.useEffect(function(){l&&E.current===!0&&!mt(O.current,f.initialErrors)&&(O.current=f.initialErrors||dt,N({type:"SET_ERRORS",payload:f.initialErrors||dt}))},[l,f.initialErrors]),x.useEffect(function(){l&&E.current===!0&&!mt(C.current,f.initialTouched)&&(C.current=f.initialTouched||ee,N({type:"SET_TOUCHED",payload:f.initialTouched||ee}))},[l,f.initialTouched]),x.useEffect(function(){l&&E.current===!0&&!mt(A.current,f.initialStatus)&&(A.current=f.initialStatus,N({type:"SET_STATUS",payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var $n=Y(function(c){if(I.current[c]&&q(I.current[c].validate)){var h=V(w.values,c),b=I.current[c].validate(h);return ze(b)?(N({type:"SET_ISVALIDATING",payload:!0}),b.then(function(S){return S}).then(function(S){N({type:"SET_FIELD_ERROR",payload:{field:c,value:S}}),N({type:"SET_ISVALIDATING",payload:!1})})):(N({type:"SET_FIELD_ERROR",payload:{field:c,value:b}}),Promise.resolve(b))}else if(f.validationSchema)return N({type:"SET_ISVALIDATING",payload:!0}),be(w.values,c).then(function(S){return S}).then(function(S){N({type:"SET_FIELD_ERROR",payload:{field:c,value:V(S,c)}}),N({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ti=x.useCallback(function(c,h){var b=h.validate;I.current[c]={validate:b}},[]),Ei=x.useCallback(function(c){delete I.current[c]},[]),Dn=Y(function(c,h){N({type:"SET_TOUCHED",payload:c});var b=h===void 0?a:h;return b?G(w.values):Promise.resolve()}),zn=x.useCallback(function(c){N({type:"SET_ERRORS",payload:c})},[]),Un=Y(function(c,h){var b=q(c)?c(w.values):c;N({type:"SET_VALUES",payload:b});var S=h===void 0?n:h;return S?G(b):Promise.resolve()}),Xt=x.useCallback(function(c,h){N({type:"SET_FIELD_ERROR",payload:{field:c,value:h}})},[]),Tt=Y(function(c,h,b){N({type:"SET_FIELD_VALUE",payload:{field:c,value:h}});var S=b===void 0?n:b;return S?G(ht(w.values,c,h)):Promise.resolve()}),Vn=x.useCallback(function(c,h){var b=h,S=c,_;if(!De(c)){c.persist&&c.persist();var L=c.target?c.target:c.currentTarget,$=L.type,Q=L.name,Te=L.id,Ee=L.value,Fi=L.checked,Gd=L.outerHTML,qn=L.options,Li=L.multiple;b=h||Q||Te,S=/number|range/.test($)?(_=parseFloat(Ee),isNaN(_)?"":_):/checkbox/.test($)?zd(V(w.values,b),Fi,Ee):qn&&Li?Dd(qn):Ee}b&&Tt(b,S)},[Tt,w.values]),ve=Y(function(c){if(De(c))return function(h){return Vn(h,c)};Vn(c)}),Et=Y(function(c,h,b){h===void 0&&(h=!0),N({type:"SET_FIELD_TOUCHED",payload:{field:c,value:h}});var S=b===void 0?a:b;return S?G(w.values):Promise.resolve()}),Wn=x.useCallback(function(c,h){c.persist&&c.persist();var b=c.target,S=b.name,_=b.id,L=b.outerHTML,$=h||S||_;Et($,!0)},[Et]),xe=Y(function(c){if(De(c))return function(h){return Wn(h,c)};Wn(c)}),Bn=x.useCallback(function(c){q(c)?N({type:"SET_FORMIK_STATE",payload:c}):N({type:"SET_FORMIK_STATE",payload:function(){return c}})},[]),Hn=x.useCallback(function(c){N({type:"SET_STATUS",payload:c})},[]),Yn=x.useCallback(function(c){N({type:"SET_ISSUBMITTING",payload:c})},[]),Se=Y(function(){return N({type:"SUBMIT_ATTEMPT"}),G().then(function(c){var h=c instanceof Error,b=!h&&Object.keys(c).length===0;if(b){var S;try{if(S=Oi(),S===void 0)return}catch(_){throw _}return Promise.resolve(S).then(function(_){return E.current&&N({type:"SUBMIT_SUCCESS"}),_}).catch(function(_){if(E.current)throw N({type:"SUBMIT_FAILURE"}),_})}else if(E.current&&(N({type:"SUBMIT_FAILURE"}),h))throw c})}),wi=Y(function(c){c&&c.preventDefault&&q(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&q(c.stopPropagation)&&c.stopPropagation(),Se().catch(function(h){console.warn("Warning: An unhandled error was caught from submitForm()",h)})}),Gn={resetForm:Ft,validateForm:G,validateField:$n,setErrors:zn,setFieldError:Xt,setFieldTouched:Et,setFieldValue:Tt,setStatus:Hn,setSubmitting:Yn,setTouched:Dn,setValues:Un,setFormikState:Bn,submitForm:Se},Oi=Y(function(){return p(w.values,Gn)}),_i=Y(function(c){c&&c.preventDefault&&q(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&q(c.stopPropagation)&&c.stopPropagation(),Ft()}),Pi=x.useCallback(function(c){return{value:V(w.values,c),error:V(w.errors,c),touched:!!V(w.touched,c),initialValue:V(T.current,c),initialTouched:!!V(C.current,c),initialError:V(O.current,c)}},[w.errors,w.touched,w.values]),Ci=x.useCallback(function(c){return{setValue:function(b,S){return Tt(c,b,S)},setTouched:function(b,S){return Et(c,b,S)},setError:function(b){return Xt(c,b)}}},[Tt,Et,Xt]),Ii=x.useCallback(function(c){var h=ye(c),b=h?c.name:c,S=V(w.values,b),_={name:b,value:S,onChange:ve,onBlur:xe};if(h){var L=c.type,$=c.value,Q=c.as,Te=c.multiple;L==="checkbox"?$===void 0?_.checked=!!S:(_.checked=!!(Array.isArray(S)&&~S.indexOf($)),_.value=$):L==="radio"?(_.checked=S===$,_.value=$):Q==="select"&&Te&&(_.value=_.value||[],_.multiple=!0)}return _},[xe,ve,w.values]),Ae=x.useMemo(function(){return!mt(T.current,w.values)},[T.current,w.values]),ji=x.useMemo(function(){return typeof s<"u"?Ae?w.errors&&Object.keys(w.errors).length===0:s!==!1&&q(s)?s(f):s:w.errors&&Object.keys(w.errors).length===0},[s,Ae,w.errors,f]),Ni=D({},w,{initialValues:T.current,initialErrors:O.current,initialTouched:C.current,initialStatus:A.current,handleBlur:xe,handleChange:ve,handleReset:_i,handleSubmit:wi,resetForm:Ft,setErrors:zn,setFormikState:Bn,setFieldTouched:Et,setFieldValue:Tt,setFieldError:Xt,setStatus:Hn,setSubmitting:Yn,setTouched:Dn,setValues:Un,submitForm:Se,validateForm:G,validateField:$n,isValid:ji,dirty:Ae,unregisterField:Ei,registerField:Ti,getFieldProps:Ii,getFieldMeta:Pi,getFieldHelpers:Ci,validateOnBlur:a,validateOnChange:n,validateOnMount:o});return Ni}function kd(t){var e={};if(t.inner){if(t.inner.length===0)return ht(e,t.path,t.message);for(var a=t.inner,n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var i;if(n){if(r>=a.length)break;i=a[r++]}else{if(r=a.next(),r.done)break;i=r.value}var o=i;V(e,o.path)||(e=ht(e,o.path,o.message))}}return e}function Rd(t,e,n,r){n===void 0&&(n=!1);var a=dn(t);return e[n?"validateSync":"validate"](a,{abortEarly:!1,context:a})}function dn(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(a){return Array.isArray(a)===!0||Nr(a)?dn(a):a!==""?a:void 0}):Nr(t[r])?e[r]=dn(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function $d(t,e,n){var r=t.slice();return e.forEach(function(i,o){if(typeof r[o]>"u"){var s=n.clone!==!1,u=s&&n.isMergeableObject(i);r[o]=u?sn(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[o]=sn(t[o],i,n):t.indexOf(i)===-1&&r.push(i)}),r}function Dd(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function zd(t,e,n){if(typeof t=="boolean")return!!e;var r=[],a=!1,i=-1;if(Array.isArray(t))r=t,i=t.indexOf(n),a=i>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!a?r.concat(n):a?r.slice(0,i).concat(r.slice(i+1)):r}var Ud=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?x.useLayoutEffect:x.useEffect;function Y(t){var e=x.useRef(t);return Ud(function(){e.current=t}),x.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e.current.apply(void 0,r)},[])}var Vd=x.forwardRef(function(t,e){var n=t.action,r=xi(t,["action"]),a=n??"#",i=Nd(),o=i.handleReset,s=i.handleSubmit;return x.createElement("form",D({onSubmit:s,ref:e,onReset:o,action:a},r))});Vd.displayName="Form";function Wd(){const[t,e]=x.useState(!0);x.useEffect(()=>{},[t]);const{values:n,handleChange:r}=Md({initialValues:{search:""},onSubmit(){}});return g.jsxs("div",{className:"flex flex-col space-y-3",children:[g.jsx(fa,{name:"search",value:n.search,onChange:r,variant:"bordered",classNames:{inputWrapper:"bg-background"},label:"Search",startContent:g.jsx(lt,{icon:yc})}),g.jsx(la,{isSelected:t,onValueChange:e,children:"Show label"}),g.jsx("div",{className:"grid grid-cols-3 gap-3",children:Ec.filter(a=>a.displayName.toLowerCase().includes(n.search.toLowerCase())).map(a=>g.jsx(wc,{icon:a,showLabel:t},a.id))})]})}function Bd(){return g.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-content2 pb-[5rem]",children:[g.jsxs(Vi,{className:"bg-content2",isBlurred:!1,children:[g.jsx(Wi,{children:g.jsx("img",{className:"h-[2.5rem]",src:Zn,alt:"logo"})}),g.jsx(Bi,{justify:"end",children:g.jsx(mn,{isIconOnly:!0,variant:"bordered",className:"bg-background",children:g.jsx(lt,{icon:hc})})})]}),g.jsxs("div",{className:"flex flex-col w-full max-w-screen-lg space-y-5 px-[1rem]",children:[g.jsxs("div",{className:"flex flex-col items-center p-[2rem] text-center space-y-3",children:[g.jsxs("div",{className:"flex items-center space-x-3",children:[g.jsx("img",{className:"h-[3.2rem]",src:Zn,alt:"logo"}),g.jsx("div",{className:"flex font-black text-[30pt]",children:"Stack Icons"})]}),g.jsx("div",{className:"flex font-medium text-[15pt]",children:"Technology icons for github markdown"})]}),g.jsx(Tc,{}),g.jsxs("div",{className:"flex space-x-3 items-center text-[20pt]",children:[g.jsx(lt,{className:"text-primary",icon:vc}),g.jsx("div",{className:"flex font-bold",children:"Add icons"})]}),g.jsx(Wd,{})]})]})}function Hd({children:t}){const[e,n]=x.useState([]),[r,a]=x.useState(50);return g.jsx(Gt.Provider,{value:{selectedIcons:e,setSelectedIcons:n,height:r,setHeight:a},children:t})}Gi.createRoot(document.getElementById("root")).render(g.jsx(x.StrictMode,{children:g.jsx(Hi,{children:g.jsx(Hd,{children:g.jsx(Bd,{})})})}))});export default Yd();
