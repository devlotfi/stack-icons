var zi=Object.defineProperty;var Ui=(e,t,n)=>t in e?zi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Hi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Zn=(e,t,n)=>Ui(e,typeof t!="symbol"?t+"":t,n);import{r as Vi,g as ua,R as da,a as y,j as h,p as Gi,b as Yi,c as Wi,d as it,s as ma,e as yn,f as bn,h as Bi,i as Ki,k as pa,l as Qn,n as qi,m as Xi,o as Ji,N as Zi}from"./nextui-BCgTCoA-.js";var sm=Hi((G,Y)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Ze={},er;function Qi(){if(er)return Ze;er=1;var e=Vi();return Ze.createRoot=e.createRoot,Ze.hydrateRoot=e.hydrateRoot,Ze}var eo=Qi();const tr="data:image/svg+xml,%3csvg%20width='395'%20height='280'%20viewBox='0%200%20395%20280'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M218.704%20275.419L386.217%20188.058C397.928%20181.951%20397.928%20172.049%20386.217%20165.942L369.072%20157L218.704%20235.419C206.993%20241.527%20188.007%20241.527%20176.296%20235.419L25.9285%20157L8.78305%20165.942C-2.92768%20172.049%20-2.92768%20181.951%208.78305%20188.058L176.296%20275.419C188.007%20281.527%20206.993%20281.527%20218.704%20275.419Z'%20fill='%233AA9A9'/%3e%3cpath%20d='M218.704%20235.419L369.072%20157L336.475%20140L218.704%20201.419C206.993%20207.527%20188.007%20207.527%20176.296%20201.419L58.5255%20140L25.9285%20157L176.296%20235.419C188.007%20241.527%20206.993%20241.527%20218.704%20235.419Z'%20fill='%232E8383'/%3e%3cpath%20d='M386.217%2091.9416L218.704%204.58053C206.993%20-1.52684%20188.007%20-1.52684%20176.296%204.58052L8.78305%2091.9416C-2.92768%2098.049%20-2.92768%20107.951%208.78305%20114.058L58.5255%20140L176.296%20201.419C188.007%20207.527%20206.993%20207.527%20218.704%20201.419L336.475%20140L386.217%20114.058C397.928%20107.951%20397.928%2098.049%20386.217%2091.9416Z'%20fill='%2345D9D9'/%3e%3c/svg%3e";/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function to(e,t,n){return(t=ro(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nr(Object(n),!0).forEach(function(r){to(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function no(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ro(e){var t=no(e,"string");return typeof t=="symbol"?t:t+""}const rr=()=>{};let vn={},ha={},ga=null,ya={mark:rr,measure:rr};try{typeof window<"u"&&(vn=window),typeof document<"u"&&(ha=document),typeof MutationObserver<"u"&&(ga=MutationObserver),typeof performance<"u"&&(ya=performance)}catch{}const{userAgent:ar=""}=vn.navigator||{},ce=vn,$=ha,ir=ga,Qe=ya;ce.document;const ie=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",ba=~ar.indexOf("MSIE")||~ar.indexOf("Trident/");var ao=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,io=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,va={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},oo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],H="classic",ft="duotone",so="sharp",co="sharp-duotone",Sa=[H,ft,so,co],lo={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},fo={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},uo=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mo={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},po=["fak","fa-kit","fakd","fa-kit-duotone"],or={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ho=["kit"],go={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yo=["fak","fakd"],bo={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},sr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vo=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],xo=["fak","fa-kit","fakd","fa-kit-duotone"],So={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},To={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ao={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Eo=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Yt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vo,...Eo],wo=["solid","regular","light","thin","duotone","brands"],Ta=[1,2,3,4,5,6,7,8,9,10],Oo=Ta.concat([11,12,13,14,15,16,17,18,19,20]),_o=[...Object.keys(Ao),...wo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Ta.map(e=>"".concat(e,"x"))).concat(Oo.map(e=>"w-".concat(e))),Io={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const re="___FONT_AWESOME___",Wt=16,Aa="fa",Ea="svg-inline--fa",ye="data-fa-i2svg",Bt="data-fa-pseudo-element",Po="data-fa-pseudo-element-pending",xn="data-prefix",Sn="data-icon",cr="fontawesome-i2svg",Co="async",No=["HTML","HEAD","STYLE","SCRIPT"],wa=(()=>{try{return!0}catch{return!1}})();function We(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[H]}})}const Oa=d({},va);Oa[H]=d(d(d(d({},{"fa-duotone":"duotone"}),va[H]),or.kit),or["kit-duotone"]);const jo=We(Oa),Kt=d({},mo);Kt[H]=d(d(d(d({},{duotone:"fad"}),Kt[H]),sr.kit),sr["kit-duotone"]);const lr=We(Kt),qt=d({},Gt);qt[H]=d(d({},qt[H]),bo.kit);const Tn=We(qt),Xt=d({},To);Xt[H]=d(d({},Xt[H]),go.kit);We(Xt);const Mo=ao,_a="fa-layers-text",Lo=io,ko=d({},lo);We(ko);const Fo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],It=oo,Ro=[...ho,..._o],Re=ce.FontAwesomeConfig||{};function $o(e){var t=$.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Do(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}$&&typeof $.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Do($o(n));a!=null&&(Re[r]=a)});const Ia={styleDefault:"solid",familyDefault:H,cssPrefix:Aa,replacementClass:Ea,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Re.familyPrefix&&(Re.cssPrefix=Re.familyPrefix);const Pe=d(d({},Ia),Re);Pe.autoReplaceSvg||(Pe.observeMutations=!1);const b={};Object.keys(Ia).forEach(e=>{Object.defineProperty(b,e,{enumerable:!0,set:function(t){Pe[e]=t,$e.forEach(n=>n(b))},get:function(){return Pe[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(e){Pe.cssPrefix=e,$e.forEach(t=>t(b))},get:function(){return Pe.cssPrefix}});ce.FontAwesomeConfig=b;const $e=[];function zo(e){return $e.push(e),()=>{$e.splice($e.indexOf(e),1)}}const se=Wt,Z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uo(e){if(!e||!ie)return;const t=$.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=$.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $.head.insertBefore(t,r),e}const Ho="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ue(){let e=12,t="";for(;e-- >0;)t+=Ho[Math.random()*62|0];return t}function Ne(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function An(e){return e.classList?Ne(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Pa(e[n]),'" '),"").trim()}function ut(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function En(e){return e.size!==Z.size||e.x!==Z.x||e.y!==Z.y||e.rotate!==Z.rotate||e.flipX||e.flipY}function Go(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Yo(e){let{transform:t,width:n=Wt,height:r=Wt,startCentered:a=!1}=e,i="";return a&&ba?i+="translate(".concat(t.x/se-n/2,"em, ").concat(t.y/se-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/se,"em), calc(-50% + ").concat(t.y/se,"em)) "):i+="translate(".concat(t.x/se,"em, ").concat(t.y/se,"em) "),i+="scale(".concat(t.size/se*(t.flipX?-1:1),", ").concat(t.size/se*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Wo=`:root, :host {
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
}`;function Ca(){const e=Aa,t=Ea,n=b.cssPrefix,r=b.replacementClass;let a=Wo;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let fr=!1;function Pt(){b.autoAddCss&&!fr&&(Uo(Ca()),fr=!0)}var Bo={mixout(){return{dom:{css:Ca,insertCss:Pt}}},hooks(){return{beforeDOMElementCreation(){Pt()},beforeI2svg(){Pt()}}}};const ae=ce||{};ae[re]||(ae[re]={});ae[re].styles||(ae[re].styles={});ae[re].hooks||(ae[re].hooks={});ae[re].shims||(ae[re].shims=[]);var Q=ae[re];const Na=[],ja=function(){$.removeEventListener("DOMContentLoaded",ja),ot=1,Na.map(e=>e())};let ot=!1;ie&&(ot=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),ot||$.addEventListener("DOMContentLoaded",ja));function Ko(e){ie&&(ot?setTimeout(e,0):Na.push(e))}function Be(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?Pa(e):"<".concat(t," ").concat(Vo(n),">").concat(r.map(Be).join(""),"</").concat(t,">")}function ur(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ct=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,f,l,p;for(r===void 0?(f=1,p=t[i[0]]):(f=0,p=r);f<o;f++)l=i[f],p=s(p,t[l],l,t);return p};function qo(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Jt(e){const t=qo(e);return t.length===1?t[0].toString(16):null}function Xo(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function dr(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=dr(t);typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(e,dr(t)):Q.styles[e]=d(d({},Q.styles[e]||{}),a),e==="fas"&&Zt("fa",t)}const{styles:He,shims:Jo}=Q,Ma=Object.keys(Tn),Zo=Ma.reduce((e,t)=>(e[t]=Object.keys(Tn[t]),e),{});let wn=null,La={},ka={},Fa={},Ra={},$a={};function Qo(e){return~Ro.indexOf(e)}function es(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qo(a)?a:null}const Da=()=>{const e=r=>Ct(He,(a,i,o)=>(a[o]=Ct(i,r,{}),a),{});La=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=i}),r)),ka=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=i}),r)),$a=e((r,a,i)=>{const o=a[2];return r[i]=i,o.forEach(s=>{r[s]=i}),r});const t="far"in He||b.autoFetchSvg,n=Ct(Jo,(r,a)=>{const i=a[0];let o=a[1];const s=a[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Fa=n.names,Ra=n.unicodes,wn=dt(b.styleDefault,{family:b.familyDefault})};zo(e=>{wn=dt(e.styleDefault,{family:b.familyDefault})});Da();function On(e,t){return(La[e]||{})[t]}function ts(e,t){return(ka[e]||{})[t]}function he(e,t){return($a[e]||{})[t]}function za(e){return Fa[e]||{prefix:null,iconName:null}}function ns(e){const t=Ra[e],n=On("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function le(){return wn}const Ua=()=>({prefix:null,iconName:null,rest:[]});function rs(e){let t=H;const n=Ma.reduce((r,a)=>(r[a]="".concat(b.cssPrefix,"-").concat(a),r),{});return Sa.forEach(r=>{(e.includes(n[r])||e.some(a=>Zo[r].includes(a)))&&(t=r)}),t}function dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=H}=t,r=jo[n][e];if(n===ft&&!e)return"fad";const a=lr[n][e]||lr[n][r],i=e in Q.styles?e:null;return a||i||null}function as(e){let t=[],n=null;return e.forEach(r=>{const a=es(b.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function mr(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=Yt.concat(xo),i=mr(e.filter(x=>a.includes(x))),o=mr(e.filter(x=>!Yt.includes(x))),s=i.filter(x=>(r=x,!xa.includes(x))),[f=null]=s,l=rs(i),p=d(d({},as(o)),{},{prefix:dt(f,{family:l})});return d(d(d({},p),cs({values:e,family:l,styles:He,config:b,canonical:p,givenPrefix:r})),is(n,r,p))}function is(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?za(a):{},o=he(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!He.far&&He.fas&&!b.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const os=Sa.filter(e=>e!==H||e!==ft),ss=Object.keys(Gt).filter(e=>e!==H).map(e=>Object.keys(Gt[e])).flat();function cs(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:o={}}=e,s=n===ft,f=t.includes("fa-duotone")||t.includes("fad"),l=o.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!s&&(f||l||p)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&os.includes(n)&&(Object.keys(i).find(u=>ss.includes(u))||o.autoFetchSvg)){const u=uo.get(n).defaultShortPrefixId;r.prefix=u,r.iconName=he(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=le()||"fas"),r}class ls{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=d(d({},this.definitions[i]||{}),a[i]),Zt(i,a[i]);const o=Tn[H][i];o&&Zt(o,a[i]),Da()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:o,icon:s}=r[a],f=s[2];t[i]||(t[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(t[i][l]=s)}),t[i][o]=s}),t}}let pr=[],Oe={};const Ie={},fs=Object.keys(Ie);function us(e,t){let{mixoutsTo:n}=t;return pr=e,Oe={},Object.keys(Ie).forEach(r=>{fs.indexOf(r)===-1&&delete Ie[r]}),pr.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{Oe[o]||(Oe[o]=[]),Oe[o].push(i[o])})}r.provides&&r.provides(Ie)}),n}function Qt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Oe[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Oe[e]||[]).forEach(i=>{i.apply(null,n)})}function fe(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ie[e]?Ie[e].apply(null,t):void 0}function en(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||le();if(t)return t=he(n,t)||t,ur(Ha.definitions,n,t)||ur(Q.styles,n,t)}const Ha=new ls,ds=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,be("noAuto")},ms={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ie?(be("beforeI2svg",e),fe("pseudoElements2svg",e),fe("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Ko(()=>{hs({autoReplaceSvgRoot:t}),be("watch",e)})}},ps={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:he(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=dt(e[0]);return{prefix:n,iconName:he(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(b.cssPrefix,"-"))>-1||e.match(Mo))){const t=mt(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||le(),iconName:he(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=le();return{prefix:t,iconName:he(t,e)||e}}}},W={noAuto:ds,config:b,dom:ms,parse:ps,library:Ha,findIconDefinition:en,toHtml:Be},hs=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=$}=e;(Object.keys(Q.styles).length>0||b.autoFetchSvg)&&ie&&b.autoReplaceSvg&&W.dom.i2svg({node:t})};function pt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Be(n))}}),Object.defineProperty(e,"node",{get:function(){if(!ie)return;const n=$.createElement("div");return n.innerHTML=e.html,n.children}}),e}function gs(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:o}=e;if(En(o)&&n.found&&!r.found){const{width:s,height:f}=n,l={x:s/f/2,y:.5};a.style=ut(d(d({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ys(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},a),{},{id:o}),children:r}]}]}function _n(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:o,title:s,maskId:f,titleId:l,extra:p,watchable:x=!1}=e,{width:u,height:A}=n.found?n:t,O=yo.includes(r),P=[b.replacementClass,a?"".concat(b.cssPrefix,"-").concat(a):""].filter(m=>p.classes.indexOf(m)===-1).filter(m=>m!==""||!!m).concat(p.classes).join(" ");let T={children:[],attributes:d(d({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:P,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(A)})};const E=O&&!~p.classes.indexOf("fa-fw")?{width:"".concat(u/A*16*.0625,"em")}:{};x&&(T.attributes[ye]=""),s&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(l||Ue())},children:[s]}),delete T.attributes.title);const C=d(d({},T),{},{prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:i,symbol:o,styles:d(d({},E),p.styles)}),{children:N,attributes:U}=n.found&&t.found?fe("generateAbstractMask",C)||{children:[],attributes:{}}:fe("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=N,C.attributes=U,o?ys(C):gs(C)}function hr(e){const{content:t,width:n,height:r,transform:a,title:i,extra:o,watchable:s=!1}=e,f=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[ye]="");const l=d({},o.styles);En(a)&&(l.transform=Yo({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const p=ut(l);p.length>0&&(f.style=p);const x=[];return x.push({tag:"span",attributes:f,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function bs(e){const{content:t,title:n,extra:r}=e,a=d(d(d({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ut(r.styles);i.length>0&&(a.style=i);const o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Nt}=Q;function tn(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(It.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(It.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(It.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const vs={found:!1,width:512,height:512};function xs(e,t){!wa&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function nn(e,t){let n=t;return t==="fa"&&b.styleDefault!==null&&(t=le()),new Promise((r,a)=>{if(n==="fa"){const i=za(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Nt[t]&&Nt[t][e]){const i=Nt[t][e];return r(tn(i))}xs(e,t),r(d(d({},vs),{},{icon:b.showMissingIcons&&e?fe("missingIconAbstract")||{}:{}}))})}const gr=()=>{},rn=b.measurePerformance&&Qe&&Qe.mark&&Qe.measure?Qe:{mark:gr,measure:gr},Fe='FA "6.7.1"',Ss=e=>(rn.mark("".concat(Fe," ").concat(e," begins")),()=>Va(e)),Va=e=>{rn.mark("".concat(Fe," ").concat(e," ends")),rn.measure("".concat(Fe," ").concat(e),"".concat(Fe," ").concat(e," begins"),"".concat(Fe," ").concat(e," ends"))};var In={begin:Ss,end:Va};const rt=()=>{};function yr(e){return typeof(e.getAttribute?e.getAttribute(ye):null)=="string"}function Ts(e){const t=e.getAttribute?e.getAttribute(xn):null,n=e.getAttribute?e.getAttribute(Sn):null;return t&&n}function As(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Es(){return b.autoReplaceSvg===!0?at.replace:at[b.autoReplaceSvg]||at.replace}function ws(e){return $.createElementNS("http://www.w3.org/2000/svg",e)}function Os(e){return $.createElement(e)}function Ga(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?ws:Os}=t;if(typeof e=="string")return $.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Ga(i,{ceFn:n}))}),r}function _s(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const at={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ga(n),t)}),t.getAttribute(ye)===null&&b.keepOriginalSource){let n=$.createComment(_s(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~An(t).indexOf(b.replacementClass))return at.replace(e);const r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===b.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Be(i)).join(`
`);t.setAttribute(ye,""),t.innerHTML=a}};function br(e){e()}function Ya(e,t){const n=typeof t=="function"?t:rt;if(e.length===0)n();else{let r=br;b.mutateApproach===Co&&(r=ce.requestAnimationFrame||br),r(()=>{const a=Es(),i=In.begin("mutate");e.map(a),i(),n()})}}let Pn=!1;function Wa(){Pn=!0}function an(){Pn=!1}let st=null;function vr(e){if(!ir||!b.observeMutations)return;const{treeCallback:t=rt,nodeCallback:n=rt,pseudoElementsCallback:r=rt,observeMutationsRoot:a=$}=e;st=new ir(i=>{if(Pn)return;const o=le();Ne(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!yr(s.addedNodes[0])&&(b.searchPseudoElements&&r(s.target),t(s.target)),s.type==="attributes"&&s.target.parentNode&&b.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&yr(s.target)&&~Fo.indexOf(s.attributeName))if(s.attributeName==="class"&&Ts(s.target)){const{prefix:f,iconName:l}=mt(An(s.target));s.target.setAttribute(xn,f||o),l&&s.target.setAttribute(Sn,l)}else As(s.target)&&n(s.target)})}),ie&&st.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Is(){st&&st.disconnect()}function Ps(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Cs(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=mt(An(e));return a.prefix||(a.prefix=le()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ts(a.prefix,e.innerText)||On(a.prefix,Jt(e.innerText))),!a.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Ns(e){const t=Ne(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||Ue()):(t["aria-hidden"]="true",t.focusable="false")),t}function js(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Cs(e),i=Ns(e),o=Qt("parseNodeAttributes",{},e);let s=t.styleParser?Ps(e):[];return d({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}const{styles:Ms}=Q;function Ba(e){const t=b.autoReplaceSvg==="nest"?xr(e,{styleParser:!1}):xr(e);return~t.extra.classes.indexOf(_a)?fe("generateLayersText",e,t):fe("generateSvgReplacementMutation",e,t)}function Ls(){return[...po,...Yt]}function Sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ie)return Promise.resolve();const n=$.documentElement.classList,r=p=>n.add("".concat(cr,"-").concat(p)),a=p=>n.remove("".concat(cr,"-").concat(p)),i=b.autoFetchSvg?Ls():xa.concat(Object.keys(Ms));i.includes("fa")||i.push("fa");const o=[".".concat(_a,":not([").concat(ye,"])")].concat(i.map(p=>".".concat(p,":not([").concat(ye,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Ne(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const f=In.begin("onTree"),l=s.reduce((p,x)=>{try{const u=Ba(x);u&&p.push(u)}catch(u){wa||u.name==="MissingIcon"&&console.error(u)}return p},[]);return new Promise((p,x)=>{Promise.all(l).then(u=>{Ya(u,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),p()})}).catch(u=>{f(),x(u)})})}function ks(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ba(e).then(n=>{n&&Ya([n],t)})}function Fs(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:en(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:en(a||{})),e(r,d(d({},n),{},{mask:a}))}}const Rs=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Z,symbol:r=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:f=[],attributes:l={},styles:p={}}=t;if(!e)return;const{prefix:x,iconName:u,icon:A}=e;return pt(d({type:"icon"},e),()=>(be("beforeDOMElementCreation",{iconDefinition:e,params:t}),b.autoA11y&&(o?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(s||Ue()):(l["aria-hidden"]="true",l.focusable="false")),_n({icons:{main:tn(A),mask:a?tn(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:u,transform:d(d({},Z),n),symbol:r,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:p,classes:f}})))};var $s={mixout(){return{icon:Fs(Rs)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Sr,e.nodeCallback=ks,e}}},provides(e){e.i2svg=function(t){const{node:n=$,callback:r=()=>{}}=t;return Sr(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:o,transform:s,symbol:f,mask:l,maskId:p,extra:x}=n;return new Promise((u,A)=>{Promise.all([nn(r,o),l.iconName?nn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(O=>{let[P,T]=O;u([t,_n({icons:{main:P,mask:T},prefix:o,iconName:r,transform:s,symbol:f,maskId:p,title:a,titleId:i,extra:x,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:o}=t;const s=ut(o);s.length>0&&(r.style=s);let f;return En(i)&&(f=fe("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Ds={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return pt({type:"layer"},()=>{be("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},zs={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return pt({type:"counter",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),bs({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(b.cssPrefix,"-layers-counter"),...r]}})))}}}},Us={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Z,title:r=null,classes:a=[],attributes:i={},styles:o={}}=t;return pt({type:"text",content:e},()=>(be("beforeDOMElementCreation",{content:e,params:t}),hr({content:e,transform:d(d({},Z),n),title:r,extra:{attributes:i,styles:o,classes:["".concat(b.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let o=null,s=null;if(ba){const f=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();o=l.width/f,s=l.height/f}return b.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,hr({content:t.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}};const Hs=new RegExp('"',"ug"),Tr=[1105920,1112319],Ar=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),fo),Io),So),on=Object.keys(Ar).reduce((e,t)=>(e[t.toLowerCase()]=Ar[t],e),{}),Vs=Object.keys(on).reduce((e,t)=>{const n=on[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Gs(e){const t=e.replace(Hs,""),n=Xo(t,0),r=n>=Tr[0]&&n<=Tr[1],a=t.length===2?t[0]===t[1]:!1;return{value:Jt(a?t[0]:t),isSecondary:r||a}}function Ys(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(on[n]||{})[a]||Vs[n]}function Er(e,t){const n="".concat(Po).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const o=Ne(e.children).filter(u=>u.getAttribute(Bt)===t)[0],s=ce.getComputedStyle(e,t),f=s.getPropertyValue("font-family"),l=f.match(Lo),p=s.getPropertyValue("font-weight"),x=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&x!=="none"&&x!==""){const u=s.getPropertyValue("content");let A=Ys(f,p);const{value:O,isSecondary:P}=Gs(u),T=l[0].startsWith("FontAwesome");let E=On(A,O),C=E;if(T){const N=ns(O);N.iconName&&N.prefix&&(E=N.iconName,A=N.prefix)}if(E&&!P&&(!o||o.getAttribute(xn)!==A||o.getAttribute(Sn)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);const N=js(),{extra:U}=N;U.attributes[Bt]=t,nn(E,A).then(m=>{const w=_n(d(d({},N),{},{icons:{main:m,mask:Ua()},prefix:A,iconName:C,extra:U,watchable:!0})),j=$.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=w.map(Me=>Be(Me)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ws(e){return Promise.all([Er(e,"::before"),Er(e,"::after")])}function Bs(e){return e.parentNode!==document.head&&!~No.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Bt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wr(e){if(ie)return new Promise((t,n)=>{const r=Ne(e.querySelectorAll("*")).filter(Bs).map(Ws),a=In.begin("searchPseudoElements");Wa(),Promise.all(r).then(()=>{a(),an(),t()}).catch(()=>{a(),an(),n()})})}var Ks={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=wr,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=$}=t;b.searchPseudoElements&&wr(n)}}};let Or=!1;var qs={mixout(){return{dom:{unwatch(){Wa(),Or=!0}}}},hooks(){return{bootstrap(){vr(Qt("mutationObserverCallbacks",{}))},noAuto(){Is()},watch(e){const{observeMutationsRoot:t}=e;Or?an():vr(Qt("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const _r=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var Xs={mixout(){return{parse:{transform:e=>_r(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=_r(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(s," ").concat(f," ").concat(l)},x={transform:"translate(".concat(i/2*-1," -256)")},u={outer:o,inner:p,path:x};return{tag:"g",attributes:d({},u.outer),children:[{tag:"g",attributes:d({},u.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),u.path)}]}]}}}};const jt={x:0,y:0,width:"100%",height:"100%"};function Ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Js(e){return e.tag==="g"?e.children:[e]}var Zs={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?mt(n.split(" ").map(a=>a.trim())):Ua();return r.prefix||(r.prefix=le()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:o,transform:s}=t;const{width:f,icon:l}=a,{width:p,icon:x}=i,u=Go({transform:s,containerWidth:p,iconWidth:f}),A={tag:"rect",attributes:d(d({},jt),{},{fill:"white"})},O=l.children?{children:l.children.map(Ir)}:{},P={tag:"g",attributes:d({},u.inner),children:[Ir(d({tag:l.tag,attributes:d(d({},l.attributes),u.path)},O))]},T={tag:"g",attributes:d({},u.outer),children:[P]},E="mask-".concat(o||Ue()),C="clip-".concat(o||Ue()),N={tag:"mask",attributes:d(d({},jt),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,T]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Js(x)},N]};return n.push(U,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(E,")")},jt)}),{children:n,attributes:r}}}},Qs={provides(e){let t=!1;ce.matchMedia&&(t=ce.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=d(d({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:d(d({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ec={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},tc=[Bo,$s,Ds,zs,Us,Ks,qs,Xs,Zs,Qs,ec];us(tc,{mixoutsTo:W});W.noAuto;W.config;W.library;W.dom;const sn=W.parse;W.findIconDefinition;W.toHtml;const nc=W.icon;W.layer;W.text;W.counter;var Mt={exports:{}},Lt,Pr;function rc(){if(Pr)return Lt;Pr=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lt=e,Lt}var kt,Cr;function ac(){if(Cr)return kt;Cr=1;var e=rc();function t(){}function n(){}return n.resetWarningCache=t,kt=function(){function r(o,s,f,l,p,x){if(x!==e){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},kt}var Nr;function ic(){return Nr||(Nr=1,Mt.exports=ac()()),Mt.exports}var oc=ic();const I=ua(oc);function jr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jr(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ct(e){"@babel/helpers - typeof";return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ct(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sc(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function cc(e,t){if(e==null)return{};var n=sc(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function cn(e){return lc(e)||fc(e)||uc(e)||dc()}function lc(e){if(Array.isArray(e))return ln(e)}function fc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uc(e,t){if(e){if(typeof e=="string")return ln(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ln(e,t)}}function ln(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,f=e.spin,l=e.spinPulse,p=e.spinReverse,x=e.pulse,u=e.fixedWidth,A=e.inverse,O=e.border,P=e.listItem,T=e.flip,E=e.size,C=e.rotation,N=e.pull,U=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":p,"fa-spin-pulse":l,"fa-pulse":x,"fa-fw":u,"fa-inverse":A,"fa-border":O,"fa-li":P,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},_e(t,"fa-".concat(E),typeof E<"u"&&E!==null),_e(t,"fa-rotate-".concat(C),typeof C<"u"&&C!==null&&C!==0),_e(t,"fa-pull-".concat(N),typeof N<"u"&&N!==null),_e(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(U).map(function(m){return U[m]?m:null}).filter(function(m){return m})}function pc(e){return e=e-0,e===e}function Ka(e){return pc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var hc=["style"];function gc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function yc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ka(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[gc(a)]=i:t[a]=i,t},{})}function qa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return qa(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,l){var p=t.attributes[l];switch(l){case"class":f.attrs.className=p,delete t.attributes.class;break;case"style":f.attrs.style=yc(p);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=p:f.attrs[Ka(l)]=p}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=cc(n,hc);return a.attrs.style=J(J({},a.attrs.style),o),e.apply(void 0,[t.tag,J(J({},a.attrs),s)].concat(cn(r)))}var Xa=!1;try{Xa=!0}catch{}function bc(){if(!Xa&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mr(e){if(e&&ct(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(sn.icon)return sn.icon(e);if(e===null)return null;if(e&&ct(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ft(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}var Lr={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K=da.forwardRef(function(e,t){var n=J(J({},Lr),e),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,f=n.titleId,l=n.maskId,p=Mr(r),x=Ft("classes",[].concat(cn(mc(n)),cn((o||"").split(" ")))),u=Ft("transform",typeof n.transform=="string"?sn.transform(n.transform):n.transform),A=Ft("mask",Mr(a)),O=nc(p,J(J(J(J({},x),u),A),{},{symbol:i,title:s,titleId:f,maskId:l}));if(!O)return bc("Could not find icon",p),null;var P=O.abstract,T={ref:t};return Object.keys(n).forEach(function(E){Lr.hasOwnProperty(E)||(T[E]=n[E])}),vc(P[0],T)});K.displayName="FontAwesomeIcon";K.propTypes={beat:I.bool,border:I.bool,beatFade:I.bool,bounce:I.bool,className:I.string,fade:I.bool,flash:I.bool,mask:I.oneOfType([I.object,I.array,I.string]),maskId:I.string,fixedWidth:I.bool,inverse:I.bool,flip:I.oneOf([!0,!1,"horizontal","vertical","both"]),icon:I.oneOfType([I.object,I.array,I.string]),listItem:I.bool,pull:I.oneOf(["right","left"]),pulse:I.bool,rotation:I.oneOf([0,90,180,270]),shake:I.bool,size:I.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:I.bool,spinPulse:I.bool,spinReverse:I.bool,symbol:I.oneOfType([I.bool,I.string]),title:I.string,titleId:I.string,transform:I.oneOfType([I.string,I.object]),swapOpacity:I.bool};var vc=qa.bind(null,da.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const xc={prefix:"fas",iconName:"text-height",icon:[576,512,[],"f034","M64 128l0-32 64 0 0 320-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320 64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-26.5-21.5-48-48-48L160 32 48 32C21.5 32 0 53.5 0 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 192-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-192 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"]},Sc={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Tc={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},Ac={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ec=Ac,wc={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]},Oc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},_c={prefix:"fas",iconName:"computer",icon:[640,512,[],"e4e5","M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ic={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Pc={selectedIcons:[],setSelectedIcons(){},height:50,setHeight(){}},Ke=y.createContext(Pc);function Cc({selectedIcon:e}){const{selectedIcons:t,setSelectedIcons:n,height:r}=y.useContext(Ke),a=o=>{n([...t.map(s=>s.icon.id===e.icon.id?{showLabel:o,icon:s.icon}:s)])},i=()=>{n([...t.filter(o=>o.icon.id!==e.icon.id).map(o=>({...o}))])};return h.jsxs(Gi,{showArrow:!0,offset:10,placement:"bottom",children:[h.jsx(Yi,{className:"cursor-pointer",children:h.jsx("img",{style:{height:`${r}px`},src:e.showLabel?`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${e.icon.id}.svg`:`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${e.icon.id}-compact.svg`,alt:e.icon.id},e.icon.id)}),h.jsxs(Wi,{className:"p-[0.5rem] flex flex-row space-x-3",children:[h.jsx(it,{color:"danger",variant:"bordered",isIconOnly:!0,onPress:i,children:h.jsx(K,{icon:Sc})}),h.jsx(ma,{isSelected:e.showLabel,onValueChange:()=>a(!e.showLabel),children:"Show label"})]})]})}function Nc(){const{selectedIcons:e,height:t}=y.useContext(Ke),n=()=>`<div float="left">
  ${e.map(r=>r.showLabel?`<img height="${t}px" src="https://github.com/devlotfi/stack-icons/blob/main/icons/${r.icon.id}.svg">`:`<img height="${t}px" src="https://github.com/devlotfi/stack-icons/blob/main/icons/${r.icon.id}-compact.svg">`).join(`
  `)}
</div>`;return h.jsx(yn,{shadow:"none",className:"bg-content2 border border-divider",children:h.jsx(bn,{children:h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"flex pr-[1rem]",children:h.jsx(it,{variant:"bordered",className:"bg-background",isIconOnly:!0,size:"sm",onPress:()=>navigator.clipboard.writeText(n()),children:h.jsx(K,{icon:wc})})}),h.jsx("pre",{className:"flex flex-1",children:n()})]})})})}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const jc={prefix:"fab",iconName:"markdown",icon:[640,512,[],"f60f","M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"]},Mc={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Lc(){const{selectedIcons:e,height:t,setHeight:n}=y.useContext(Ke);return h.jsxs(yn,{shadow:"none",className:"border border-divider",children:[h.jsx(Bi,{children:h.jsxs("div",{className:"flex space-x-2 items-center text-[12pt]",children:[h.jsx(K,{className:"text-primary",icon:jc}),h.jsx("div",{className:"flex font-medium",children:"Result"}),h.jsx("div",{className:"flex text-[11pt]",children:"(Click icons to edit)"})]})}),h.jsx(Ki,{}),h.jsx(bn,{children:h.jsx("div",{className:"flex flex-col space-y-3",children:e.length>0?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"flex flex-wrap gap-1",children:e.map(r=>h.jsx(Cc,{selectedIcon:r},r.icon.id))}),h.jsx(pa,{name:"height",type:"number",min:0,max:99,step:1,value:t,onChange:r=>{const a=r.target.value;a>=0&&a<100&&n(r.target.value)},label:"Height",classNames:{inputWrapper:"border border-divider shadow-none bg-content2"},startContent:h.jsx(K,{icon:xc}),endContent:h.jsx("div",{className:"flex",children:"px"})}),h.jsx(Nc,{})]}):h.jsx("div",{className:"flex p-[1rem]",children:"Select icons to get started"})})})]})}const kc=[{id:"html",displayName:"HTML"},{id:"css",displayName:"CSS"},{id:"js",displayName:"Javascript"},{id:"ts",displayName:"Typescript"},{id:"tailwind",displayName:"Tailwind"},{id:"redis",displayName:"Redis"},{id:"nodejs",displayName:"Node JS"},{id:"react",displayName:"React JS"},{id:"postman",displayName:"Postman"},{id:"nextjs",displayName:"Next JS"},{id:"nextui",displayName:"Next UI"},{id:"nestjs",displayName:"Nest JS"},{id:"postgres",displayName:"Postgres"},{id:"i18n",displayName:"I18next"},{id:"prisma",displayName:"Prisma"},{id:"tauri",displayName:"Tauri"},{id:"rust",displayName:"Rust"},{id:"electron",displayName:"Electron"},{id:"sqlite",displayName:"SQLite"},{id:"cloudinary",displayName:"Cloudinary"},{id:"python",displayName:"Python"},{id:"arduino",displayName:"Arduino"},{id:"graphql",displayName:"Graphql"},{id:"figma",displayName:"Figma"},{id:"django",displayName:"Django"},{id:"vite",displayName:"Vite"},{id:"reactquery",displayName:"React Query"},{id:"apollo",displayName:"Apollo"},{id:"java",displayName:"Java"},{id:"daisyui",displayName:"Daisy UI"},{id:"zod",displayName:"Zod"},{id:"fontawesome",displayName:"Fontawesome"},{id:"jwt",displayName:"JWT"},{id:"motion",displayName:"Motion"},{id:"formik",displayName:"Formik"},{id:"drawio",displayName:"Draw.io"},{id:"socketio",displayName:"Socket.io"},{id:"expo",displayName:"Expo"},{id:"reactnative",displayName:"React Native"},{id:"reactnavigation",displayName:"React Navigation"},{id:"chargily",displayName:"Chargily"},{id:"googleoauth",displayName:"Google OAuth"},{id:"googlemapsapi",displayName:"Google Maps API"},{id:"fritzing",displayName:"Fritzing"},{id:"kotlin",displayName:"Kotlin"},{id:"spring",displayName:"spring"},{id:"cs",displayName:"C#"},{id:"cpp",displayName:"C++"},{id:"c",displayName:"C"},{id:"dotnet-core",displayName:".NET Core"},{id:"asp-dotnet-core",displayName:"ASP.NET Core"}];function Fc({icon:e,showLabel:t}){const{selectedIcons:n,setSelectedIcons:r}=y.useContext(Ke),a=()=>n.find(s=>s.icon.id===e.id)!==void 0,i=()=>{a()?r([...n.filter(o=>o.icon.id!==e.id).map(o=>({...o}))]):r([...n.map(o=>({...o})),{icon:e,showLabel:t}])};return h.jsx(yn,{onPress:i,shadow:"none",isPressable:!0,className:Qn("border border-divider",a()&&"border-[2px] border-primary bg-[hsl(var(--nextui-primary)/0.2)]"),children:h.jsxs(bn,{className:"flex-col",children:[h.jsx("img",{className:"h-[3rem] my-[1rem]",src:t?`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${e.id}.svg`:`https://raw.githubusercontent.com/devlotfi/stack-icons/main/icons/${e.id}-compact.svg`,alt:e.id}),h.jsx("div",{className:Qn("flex font-medium self-start",a()&&"text-primary"),children:e.displayName})]})})}var Rc=function(t){return $c(t)&&!Dc(t)};function $c(e){return!!e&&typeof e=="object"}function Dc(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Hc(e)}var zc=typeof Symbol=="function"&&Symbol.for,Uc=zc?Symbol.for("react.element"):60103;function Hc(e){return e.$$typeof===Uc}function Vc(e){return Array.isArray(e)?[]:{}}function lt(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ve(Vc(e),e,t):e}function Gc(e,t,n){return e.concat(t).map(function(r){return lt(r,n)})}function Yc(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(a){r[a]=lt(e[a],n)}),Object.keys(t).forEach(function(a){!n.isMergeableObject(t[a])||!e[a]?r[a]=lt(t[a],n):r[a]=Ve(e[a],t[a],n)}),r}function Ve(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Gc,n.isMergeableObject=n.isMergeableObject||Rc;var r=Array.isArray(t),a=Array.isArray(e),i=r===a;return i?r?n.arrayMerge(e,t,n):Yc(e,t,n):lt(t,n)}Ve.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,a){return Ve(r,a,n)},{})};var fn=Ve,Ja=typeof global=="object"&&global&&global.Object===Object&&global,Wc=typeof self=="object"&&self&&self.Object===Object&&self,ee=Ja||Wc||Function("return this")(),ue=ee.Symbol,Za=Object.prototype,Bc=Za.hasOwnProperty,Kc=Za.toString,ke=ue?ue.toStringTag:void 0;function qc(e){var t=Bc.call(e,ke),n=e[ke];try{e[ke]=void 0;var r=!0}catch{}var a=Kc.call(e);return r&&(t?e[ke]=n:delete e[ke]),a}var Xc=Object.prototype,Jc=Xc.toString;function Zc(e){return Jc.call(e)}var Qc="[object Null]",el="[object Undefined]",kr=ue?ue.toStringTag:void 0;function xe(e){return e==null?e===void 0?el:Qc:kr&&kr in Object(e)?qc(e):Zc(e)}function Qa(e,t){return function(n){return e(t(n))}}var Cn=Qa(Object.getPrototypeOf,Object);function Se(e){return e!=null&&typeof e=="object"}var tl="[object Object]",nl=Function.prototype,rl=Object.prototype,ei=nl.toString,al=rl.hasOwnProperty,il=ei.call(Object);function Fr(e){if(!Se(e)||xe(e)!=tl)return!1;var t=Cn(e);if(t===null)return!0;var n=al.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&ei.call(n)==il}function ol(){this.__data__=[],this.size=0}function ti(e,t){return e===t||e!==e&&t!==t}function ht(e,t){for(var n=e.length;n--;)if(ti(e[n][0],t))return n;return-1}var sl=Array.prototype,cl=sl.splice;function ll(e){var t=this.__data__,n=ht(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():cl.call(t,n,1),--this.size,!0}function fl(e){var t=this.__data__,n=ht(t,e);return n<0?void 0:t[n][1]}function ul(e){return ht(this.__data__,e)>-1}function dl(e,t){var n=this.__data__,r=ht(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function oe(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}oe.prototype.clear=ol;oe.prototype.delete=ll;oe.prototype.get=fl;oe.prototype.has=ul;oe.prototype.set=dl;function ml(){this.__data__=new oe,this.size=0}function pl(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function hl(e){return this.__data__.get(e)}function gl(e){return this.__data__.has(e)}function qe(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var yl="[object AsyncFunction]",bl="[object Function]",vl="[object GeneratorFunction]",xl="[object Proxy]";function ni(e){if(!qe(e))return!1;var t=xe(e);return t==bl||t==vl||t==yl||t==xl}var Rt=ee["__core-js_shared__"],Rr=function(){var e=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sl(e){return!!Rr&&Rr in e}var Tl=Function.prototype,Al=Tl.toString;function Te(e){if(e!=null){try{return Al.call(e)}catch{}try{return e+""}catch{}}return""}var El=/[\\^$.*+?()[\]{}|]/g,wl=/^\[object .+?Constructor\]$/,Ol=Function.prototype,_l=Object.prototype,Il=Ol.toString,Pl=_l.hasOwnProperty,Cl=RegExp("^"+Il.call(Pl).replace(El,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Nl(e){if(!qe(e)||Sl(e))return!1;var t=ni(e)?Cl:wl;return t.test(Te(e))}function jl(e,t){return e==null?void 0:e[t]}function Ae(e,t){var n=jl(e,t);return Nl(n)?n:void 0}var Ge=Ae(ee,"Map"),Ye=Ae(Object,"create");function Ml(){this.__data__=Ye?Ye(null):{},this.size=0}function Ll(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var kl="__lodash_hash_undefined__",Fl=Object.prototype,Rl=Fl.hasOwnProperty;function $l(e){var t=this.__data__;if(Ye){var n=t[e];return n===kl?void 0:n}return Rl.call(t,e)?t[e]:void 0}var Dl=Object.prototype,zl=Dl.hasOwnProperty;function Ul(e){var t=this.__data__;return Ye?t[e]!==void 0:zl.call(t,e)}var Hl="__lodash_hash_undefined__";function Vl(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ye&&t===void 0?Hl:t,this}function ve(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=Ml;ve.prototype.delete=Ll;ve.prototype.get=$l;ve.prototype.has=Ul;ve.prototype.set=Vl;function Gl(){this.size=0,this.__data__={hash:new ve,map:new(Ge||oe),string:new ve}}function Yl(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function gt(e,t){var n=e.__data__;return Yl(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Wl(e){var t=gt(this,e).delete(e);return this.size-=t?1:0,t}function Bl(e){return gt(this,e).get(e)}function Kl(e){return gt(this,e).has(e)}function ql(e,t){var n=gt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function de(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}de.prototype.clear=Gl;de.prototype.delete=Wl;de.prototype.get=Bl;de.prototype.has=Kl;de.prototype.set=ql;var Xl=200;function Jl(e,t){var n=this.__data__;if(n instanceof oe){var r=n.__data__;if(!Ge||r.length<Xl-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new de(r)}return n.set(e,t),this.size=n.size,this}function je(e){var t=this.__data__=new oe(e);this.size=t.size}je.prototype.clear=ml;je.prototype.delete=pl;je.prototype.get=hl;je.prototype.has=gl;je.prototype.set=Jl;function Zl(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var $r=function(){try{var e=Ae(Object,"defineProperty");return e({},"",{}),e}catch{}}();function ri(e,t,n){t=="__proto__"&&$r?$r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ql=Object.prototype,ef=Ql.hasOwnProperty;function ai(e,t,n){var r=e[t];(!(ef.call(e,t)&&ti(r,n))||n===void 0&&!(t in e))&&ri(e,t,n)}function yt(e,t,n,r){var a=!n;n||(n={});for(var i=-1,o=t.length;++i<o;){var s=t[i],f=void 0;f===void 0&&(f=e[s]),a?ri(n,s,f):ai(n,s,f)}return n}function tf(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var nf="[object Arguments]";function Dr(e){return Se(e)&&xe(e)==nf}var ii=Object.prototype,rf=ii.hasOwnProperty,af=ii.propertyIsEnumerable,of=Dr(function(){return arguments}())?Dr:function(e){return Se(e)&&rf.call(e,"callee")&&!af.call(e,"callee")},Xe=Array.isArray;function sf(){return!1}var oi=typeof G=="object"&&G&&!G.nodeType&&G,zr=oi&&typeof Y=="object"&&Y&&!Y.nodeType&&Y,cf=zr&&zr.exports===oi,Ur=cf?ee.Buffer:void 0,lf=Ur?Ur.isBuffer:void 0,si=lf||sf,ff=9007199254740991,uf=/^(?:0|[1-9]\d*)$/;function df(e,t){var n=typeof e;return t=t??ff,!!t&&(n=="number"||n!="symbol"&&uf.test(e))&&e>-1&&e%1==0&&e<t}var mf=9007199254740991;function ci(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=mf}var pf="[object Arguments]",hf="[object Array]",gf="[object Boolean]",yf="[object Date]",bf="[object Error]",vf="[object Function]",xf="[object Map]",Sf="[object Number]",Tf="[object Object]",Af="[object RegExp]",Ef="[object Set]",wf="[object String]",Of="[object WeakMap]",_f="[object ArrayBuffer]",If="[object DataView]",Pf="[object Float32Array]",Cf="[object Float64Array]",Nf="[object Int8Array]",jf="[object Int16Array]",Mf="[object Int32Array]",Lf="[object Uint8Array]",kf="[object Uint8ClampedArray]",Ff="[object Uint16Array]",Rf="[object Uint32Array]",R={};R[Pf]=R[Cf]=R[Nf]=R[jf]=R[Mf]=R[Lf]=R[kf]=R[Ff]=R[Rf]=!0;R[pf]=R[hf]=R[_f]=R[gf]=R[If]=R[yf]=R[bf]=R[vf]=R[xf]=R[Sf]=R[Tf]=R[Af]=R[Ef]=R[wf]=R[Of]=!1;function $f(e){return Se(e)&&ci(e.length)&&!!R[xe(e)]}function Nn(e){return function(t){return e(t)}}var li=typeof G=="object"&&G&&!G.nodeType&&G,De=li&&typeof Y=="object"&&Y&&!Y.nodeType&&Y,Df=De&&De.exports===li,$t=Df&&Ja.process,Ce=function(){try{var e=De&&De.require&&De.require("util").types;return e||$t&&$t.binding&&$t.binding("util")}catch{}}(),Hr=Ce&&Ce.isTypedArray,zf=Hr?Nn(Hr):$f,Uf=Object.prototype,Hf=Uf.hasOwnProperty;function fi(e,t){var n=Xe(e),r=!n&&of(e),a=!n&&!r&&si(e),i=!n&&!r&&!a&&zf(e),o=n||r||a||i,s=o?tf(e.length,String):[],f=s.length;for(var l in e)(t||Hf.call(e,l))&&!(o&&(l=="length"||a&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||df(l,f)))&&s.push(l);return s}var Vf=Object.prototype;function jn(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Vf;return e===n}var Gf=Qa(Object.keys,Object),Yf=Object.prototype,Wf=Yf.hasOwnProperty;function Bf(e){if(!jn(e))return Gf(e);var t=[];for(var n in Object(e))Wf.call(e,n)&&n!="constructor"&&t.push(n);return t}function ui(e){return e!=null&&ci(e.length)&&!ni(e)}function Mn(e){return ui(e)?fi(e):Bf(e)}function Kf(e,t){return e&&yt(t,Mn(t),e)}function qf(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Xf=Object.prototype,Jf=Xf.hasOwnProperty;function Zf(e){if(!qe(e))return qf(e);var t=jn(e),n=[];for(var r in e)r=="constructor"&&(t||!Jf.call(e,r))||n.push(r);return n}function Ln(e){return ui(e)?fi(e,!0):Zf(e)}function Qf(e,t){return e&&yt(t,Ln(t),e)}var di=typeof G=="object"&&G&&!G.nodeType&&G,Vr=di&&typeof Y=="object"&&Y&&!Y.nodeType&&Y,eu=Vr&&Vr.exports===di,Gr=eu?ee.Buffer:void 0,Yr=Gr?Gr.allocUnsafe:void 0;function tu(e,t){if(t)return e.slice();var n=e.length,r=Yr?Yr(n):new e.constructor(n);return e.copy(r),r}function mi(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function nu(e,t){for(var n=-1,r=e==null?0:e.length,a=0,i=[];++n<r;){var o=e[n];t(o,n,e)&&(i[a++]=o)}return i}function pi(){return[]}var ru=Object.prototype,au=ru.propertyIsEnumerable,Wr=Object.getOwnPropertySymbols,kn=Wr?function(e){return e==null?[]:(e=Object(e),nu(Wr(e),function(t){return au.call(e,t)}))}:pi;function iu(e,t){return yt(e,kn(e),t)}function hi(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}var ou=Object.getOwnPropertySymbols,gi=ou?function(e){for(var t=[];e;)hi(t,kn(e)),e=Cn(e);return t}:pi;function su(e,t){return yt(e,gi(e),t)}function yi(e,t,n){var r=t(e);return Xe(e)?r:hi(r,n(e))}function cu(e){return yi(e,Mn,kn)}function lu(e){return yi(e,Ln,gi)}var un=Ae(ee,"DataView"),dn=Ae(ee,"Promise"),mn=Ae(ee,"Set"),pn=Ae(ee,"WeakMap"),Br="[object Map]",fu="[object Object]",Kr="[object Promise]",qr="[object Set]",Xr="[object WeakMap]",Jr="[object DataView]",uu=Te(un),du=Te(Ge),mu=Te(dn),pu=Te(mn),hu=Te(pn),ne=xe;(un&&ne(new un(new ArrayBuffer(1)))!=Jr||Ge&&ne(new Ge)!=Br||dn&&ne(dn.resolve())!=Kr||mn&&ne(new mn)!=qr||pn&&ne(new pn)!=Xr)&&(ne=function(e){var t=xe(e),n=t==fu?e.constructor:void 0,r=n?Te(n):"";if(r)switch(r){case uu:return Jr;case du:return Br;case mu:return Kr;case pu:return qr;case hu:return Xr}return t});var gu=Object.prototype,yu=gu.hasOwnProperty;function bu(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&yu.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Zr=ee.Uint8Array;function Fn(e){var t=new e.constructor(e.byteLength);return new Zr(t).set(new Zr(e)),t}function vu(e,t){var n=t?Fn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var xu=/\w*$/;function Su(e){var t=new e.constructor(e.source,xu.exec(e));return t.lastIndex=e.lastIndex,t}var Qr=ue?ue.prototype:void 0,ea=Qr?Qr.valueOf:void 0;function Tu(e){return ea?Object(ea.call(e)):{}}function Au(e,t){var n=t?Fn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Eu="[object Boolean]",wu="[object Date]",Ou="[object Map]",_u="[object Number]",Iu="[object RegExp]",Pu="[object Set]",Cu="[object String]",Nu="[object Symbol]",ju="[object ArrayBuffer]",Mu="[object DataView]",Lu="[object Float32Array]",ku="[object Float64Array]",Fu="[object Int8Array]",Ru="[object Int16Array]",$u="[object Int32Array]",Du="[object Uint8Array]",zu="[object Uint8ClampedArray]",Uu="[object Uint16Array]",Hu="[object Uint32Array]";function Vu(e,t,n){var r=e.constructor;switch(t){case ju:return Fn(e);case Eu:case wu:return new r(+e);case Mu:return vu(e,n);case Lu:case ku:case Fu:case Ru:case $u:case Du:case zu:case Uu:case Hu:return Au(e,n);case Ou:return new r;case _u:case Cu:return new r(e);case Iu:return Su(e);case Pu:return new r;case Nu:return Tu(e)}}var ta=Object.create,Gu=function(){function e(){}return function(t){if(!qe(t))return{};if(ta)return ta(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Yu(e){return typeof e.constructor=="function"&&!jn(e)?Gu(Cn(e)):{}}var Wu="[object Map]";function Bu(e){return Se(e)&&ne(e)==Wu}var na=Ce&&Ce.isMap,Ku=na?Nn(na):Bu,qu="[object Set]";function Xu(e){return Se(e)&&ne(e)==qu}var ra=Ce&&Ce.isSet,Ju=ra?Nn(ra):Xu,Zu=1,Qu=2,ed=4,bi="[object Arguments]",td="[object Array]",nd="[object Boolean]",rd="[object Date]",ad="[object Error]",vi="[object Function]",id="[object GeneratorFunction]",od="[object Map]",sd="[object Number]",xi="[object Object]",cd="[object RegExp]",ld="[object Set]",fd="[object String]",ud="[object Symbol]",dd="[object WeakMap]",md="[object ArrayBuffer]",pd="[object DataView]",hd="[object Float32Array]",gd="[object Float64Array]",yd="[object Int8Array]",bd="[object Int16Array]",vd="[object Int32Array]",xd="[object Uint8Array]",Sd="[object Uint8ClampedArray]",Td="[object Uint16Array]",Ad="[object Uint32Array]",F={};F[bi]=F[td]=F[md]=F[pd]=F[nd]=F[rd]=F[hd]=F[gd]=F[yd]=F[bd]=F[vd]=F[od]=F[sd]=F[xi]=F[cd]=F[ld]=F[fd]=F[ud]=F[xd]=F[Sd]=F[Td]=F[Ad]=!0;F[ad]=F[vi]=F[dd]=!1;function ze(e,t,n,r,a,i){var o,s=t&Zu,f=t&Qu,l=t&ed;if(o!==void 0)return o;if(!qe(e))return e;var p=Xe(e);if(p){if(o=bu(e),!s)return mi(e,o)}else{var x=ne(e),u=x==vi||x==id;if(si(e))return tu(e,s);if(x==xi||x==bi||u&&!a){if(o=f||u?{}:Yu(e),!s)return f?su(e,Qf(o,e)):iu(e,Kf(o,e))}else{if(!F[x])return a?e:{};o=Vu(e,x,s)}}i||(i=new je);var A=i.get(e);if(A)return A;i.set(e,o),Ju(e)?e.forEach(function(T){o.add(ze(T,t,n,T,e,i))}):Ku(e)&&e.forEach(function(T,E){o.set(E,ze(T,t,n,E,e,i))});var O=l?f?lu:cu:f?Ln:Mn,P=p?void 0:O(e);return Zl(P||e,function(T,E){P&&(E=T,T=e[E]),ai(o,E,ze(T,t,n,E,e,i))}),o}var Ed=1,wd=4;function tt(e){return ze(e,Ed|wd)}var Dt,aa;function Od(){if(aa)return Dt;aa=1;var e=Array.isArray,t=Object.keys,n=Object.prototype.hasOwnProperty,r=typeof Element<"u";function a(i,o){if(i===o)return!0;if(i&&o&&typeof i=="object"&&typeof o=="object"){var s=e(i),f=e(o),l,p,x;if(s&&f){if(p=i.length,p!=o.length)return!1;for(l=p;l--!==0;)if(!a(i[l],o[l]))return!1;return!0}if(s!=f)return!1;var u=i instanceof Date,A=o instanceof Date;if(u!=A)return!1;if(u&&A)return i.getTime()==o.getTime();var O=i instanceof RegExp,P=o instanceof RegExp;if(O!=P)return!1;if(O&&P)return i.toString()==o.toString();var T=t(i);if(p=T.length,p!==t(o).length)return!1;for(l=p;l--!==0;)if(!n.call(o,T[l]))return!1;if(r&&i instanceof Element&&o instanceof Element)return i===o;for(l=p;l--!==0;)if(x=T[l],!(x==="_owner"&&i.$$typeof)&&!a(i[x],o[x]))return!1;return!0}return i!==i&&o!==o}return Dt=function(o,s){try{return a(o,s)}catch(f){if(f.message&&f.message.match(/stack|recursion/i)||f.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",f.name,f.message),!1;throw f}},Dt}var _d=Od();const pe=ua(_d);var Id=4;function ia(e){return ze(e,Id)}function Si(e,t){for(var n=-1,r=e==null?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}var Pd="[object Symbol]";function Rn(e){return typeof e=="symbol"||Se(e)&&xe(e)==Pd}var Cd="Expected a function";function $n(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Cd);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new($n.Cache||de),n}$n.Cache=de;var Nd=500;function jd(e){var t=$n(e,function(r){return n.size===Nd&&n.clear(),r}),n=t.cache;return t}var Md=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ld=/\\(\\)?/g,kd=jd(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Md,function(n,r,a,i){t.push(a?i.replace(Ld,"$1"):r||n)}),t}),Fd=1/0;function Rd(e){if(typeof e=="string"||Rn(e))return e;var t=e+"";return t=="0"&&1/e==-Fd?"-0":t}var $d=1/0,oa=ue?ue.prototype:void 0,sa=oa?oa.toString:void 0;function Ti(e){if(typeof e=="string")return e;if(Xe(e))return Si(e,Ti)+"";if(Rn(e))return sa?sa.call(e):"";var t=e+"";return t=="0"&&1/e==-$d?"-0":t}function Dd(e){return e==null?"":Ti(e)}function Ai(e){return Xe(e)?Si(e,Rd):Rn(e)?[e]:mi(kd(Dd(e)))}var zt={exports:{}},M={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca;function zd(){if(ca)return M;ca=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,x=e?Symbol.for("react.suspense"):60113,u=e?Symbol.for("react.suspense_list"):60120,A=e?Symbol.for("react.memo"):60115,O=e?Symbol.for("react.lazy"):60116,P=e?Symbol.for("react.block"):60121,T=e?Symbol.for("react.fundamental"):60117,E=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function N(m){if(typeof m=="object"&&m!==null){var w=m.$$typeof;switch(w){case t:switch(m=m.type,m){case f:case l:case r:case i:case a:case x:return m;default:switch(m=m&&m.$$typeof,m){case s:case p:case O:case A:case o:return m;default:return w}}case n:return w}}}function U(m){return N(m)===l}return M.AsyncMode=f,M.ConcurrentMode=l,M.ContextConsumer=s,M.ContextProvider=o,M.Element=t,M.ForwardRef=p,M.Fragment=r,M.Lazy=O,M.Memo=A,M.Portal=n,M.Profiler=i,M.StrictMode=a,M.Suspense=x,M.isAsyncMode=function(m){return U(m)||N(m)===f},M.isConcurrentMode=U,M.isContextConsumer=function(m){return N(m)===s},M.isContextProvider=function(m){return N(m)===o},M.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===t},M.isForwardRef=function(m){return N(m)===p},M.isFragment=function(m){return N(m)===r},M.isLazy=function(m){return N(m)===O},M.isMemo=function(m){return N(m)===A},M.isPortal=function(m){return N(m)===n},M.isProfiler=function(m){return N(m)===i},M.isStrictMode=function(m){return N(m)===a},M.isSuspense=function(m){return N(m)===x},M.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===r||m===l||m===i||m===a||m===x||m===u||typeof m=="object"&&m!==null&&(m.$$typeof===O||m.$$typeof===A||m.$$typeof===o||m.$$typeof===s||m.$$typeof===p||m.$$typeof===T||m.$$typeof===E||m.$$typeof===C||m.$$typeof===P)},M.typeOf=N,M}var la;function Ud(){return la||(la=1,zt.exports=zd()),zt.exports}var Ut,fa;function Hd(){if(fa)return Ut;fa=1;var e=Ud(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=r,i[e.Memo]=a;function o(O){return e.isMemo(O)?a:i[O.$$typeof]||t}var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,u=Object.prototype;function A(O,P,T){if(typeof P!="string"){if(u){var E=x(P);E&&E!==u&&A(O,E,T)}var C=f(P);l&&(C=C.concat(l(P)));for(var N=o(O),U=o(P),m=0;m<C.length;++m){var w=C[m];if(!n[w]&&!(T&&T[w])&&!(U&&U[w])&&!(N&&N[w])){var j=p(P,w);try{s(O,w,j)}catch{}}}}return O}return Ut=A,Ut}Hd();function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function Ei(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var bt=y.createContext(void 0);bt.displayName="FormikContext";bt.Provider;bt.Consumer;function Vd(){var e=y.useContext(bt);return e}var X=function(t){return typeof t=="function"},vt=function(t){return t!==null&&typeof t=="object"},Gd=function(t){return String(Math.floor(Number(t)))===t},Ht=function(t){return Object.prototype.toString.call(t)==="[object String]"},Vt=function(t){return vt(t)&&X(t.then)};function V(e,t,n,r){r===void 0&&(r=0);for(var a=Ai(t);e&&r<a.length;)e=e[a[r++]];return r!==a.length&&!e||e===void 0?n:e}function ge(e,t,n){for(var r=ia(e),a=r,i=0,o=Ai(t);i<o.length-1;i++){var s=o[i],f=V(e,o.slice(0,i+1));if(f&&(vt(f)||Array.isArray(f)))a=a[s]=ia(f);else{var l=o[i+1];a=a[s]=Gd(l)&&Number(l)>=0?[]:{}}}return(i===0?e:a)[o[i]]===n?e:(n===void 0?delete a[o[i]]:a[o[i]]=n,i===0&&n===void 0&&delete r[o[i]],r)}function wi(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var a=0,i=Object.keys(e);a<i.length;a++){var o=i[a],s=e[o];vt(s)?n.get(s)||(n.set(s,!0),r[o]=Array.isArray(s)?[]:{},wi(s,t,n,r[o])):r[o]=t}return r}function Yd(e,t){switch(t.type){case"SET_VALUES":return z({},e,{values:t.payload});case"SET_TOUCHED":return z({},e,{touched:t.payload});case"SET_ERRORS":return pe(e.errors,t.payload)?e:z({},e,{errors:t.payload});case"SET_STATUS":return z({},e,{status:t.payload});case"SET_ISSUBMITTING":return z({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return z({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return z({},e,{values:ge(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return z({},e,{touched:ge(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return z({},e,{errors:ge(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return z({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return z({},e,{touched:wi(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return z({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return z({},e,{isSubmitting:!1});default:return e}}var me={},nt={};function Wd(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,a=r===void 0?!0:r,i=e.validateOnMount,o=i===void 0?!1:i,s=e.isInitialValid,f=e.enableReinitialize,l=f===void 0?!1:f,p=e.onSubmit,x=Ei(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),u=z({validateOnChange:n,validateOnBlur:a,validateOnMount:o,onSubmit:p},x),A=y.useRef(u.initialValues),O=y.useRef(u.initialErrors||me),P=y.useRef(u.initialTouched||nt),T=y.useRef(u.initialStatus),E=y.useRef(!1),C=y.useRef({});y.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var N=y.useState(0),U=N[1],m=y.useRef({values:tt(u.initialValues),errors:tt(u.initialErrors)||me,touched:tt(u.initialTouched)||nt,status:tt(u.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),w=m.current,j=y.useCallback(function(c){var g=m.current;m.current=Yd(g,c),g!==m.current&&U(function(v){return v+1})},[]),Me=y.useCallback(function(c,g){return new Promise(function(v,S){var _=u.validate(c,g);_==null?v(me):Vt(_)?_.then(function(L){v(L||me)},function(L){S(L)}):v(_)})},[u.validate]),St=y.useCallback(function(c,g){var v=u.validationSchema,S=X(v)?v(g):v,_=g&&S.validateAt?S.validateAt(g,c):Kd(c,S);return new Promise(function(L,D){_.then(function(){L(me)},function(te){te.name==="ValidationError"?L(Bd(te)):D(te)})})},[u.validationSchema]),Dn=y.useCallback(function(c,g){return new Promise(function(v){return v(C.current[c].validate(g))})},[]),zn=y.useCallback(function(c){var g=Object.keys(C.current).filter(function(S){return X(C.current[S].validate)}),v=g.length>0?g.map(function(S){return Dn(S,V(c,S))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(v).then(function(S){return S.reduce(function(_,L,D){return L==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||L&&(_=ge(_,g[D],L)),_},{})})},[Dn]),_i=y.useCallback(function(c){return Promise.all([zn(c),u.validationSchema?St(c):{},u.validate?Me(c):{}]).then(function(g){var v=g[0],S=g[1],_=g[2],L=fn.all([v,S,_],{arrayMerge:qd});return L})},[u.validate,u.validationSchema,zn,Me,St]),q=B(function(c){return c===void 0&&(c=w.values),j({type:"SET_ISVALIDATING",payload:!0}),_i(c).then(function(g){return E.current&&(j({type:"SET_ISVALIDATING",payload:!1}),j({type:"SET_ERRORS",payload:g})),g})});y.useEffect(function(){o&&E.current===!0&&pe(A.current,u.initialValues)&&q(A.current)},[o,q]);var Le=y.useCallback(function(c){var g=c&&c.values?c.values:A.current,v=c&&c.errors?c.errors:O.current?O.current:u.initialErrors||{},S=c&&c.touched?c.touched:P.current?P.current:u.initialTouched||{},_=c&&c.status?c.status:T.current?T.current:u.initialStatus;A.current=g,O.current=v,P.current=S,T.current=_;var L=function(){j({type:"RESET_FORM",payload:{isSubmitting:!!c&&!!c.isSubmitting,errors:v,touched:S,status:_,values:g,isValidating:!!c&&!!c.isValidating,submitCount:c&&c.submitCount&&typeof c.submitCount=="number"?c.submitCount:0}})};if(u.onReset){var D=u.onReset(w.values,Xn);Vt(D)?D.then(L):L()}else L()},[u.initialErrors,u.initialStatus,u.initialTouched,u.onReset]);y.useEffect(function(){E.current===!0&&!pe(A.current,u.initialValues)&&l&&(A.current=u.initialValues,Le(),o&&q(A.current))},[l,u.initialValues,Le,o,q]),y.useEffect(function(){l&&E.current===!0&&!pe(O.current,u.initialErrors)&&(O.current=u.initialErrors||me,j({type:"SET_ERRORS",payload:u.initialErrors||me}))},[l,u.initialErrors]),y.useEffect(function(){l&&E.current===!0&&!pe(P.current,u.initialTouched)&&(P.current=u.initialTouched||nt,j({type:"SET_TOUCHED",payload:u.initialTouched||nt}))},[l,u.initialTouched]),y.useEffect(function(){l&&E.current===!0&&!pe(T.current,u.initialStatus)&&(T.current=u.initialStatus,j({type:"SET_STATUS",payload:u.initialStatus}))},[l,u.initialStatus,u.initialTouched]);var Un=B(function(c){if(C.current[c]&&X(C.current[c].validate)){var g=V(w.values,c),v=C.current[c].validate(g);return Vt(v)?(j({type:"SET_ISVALIDATING",payload:!0}),v.then(function(S){return S}).then(function(S){j({type:"SET_FIELD_ERROR",payload:{field:c,value:S}}),j({type:"SET_ISVALIDATING",payload:!1})})):(j({type:"SET_FIELD_ERROR",payload:{field:c,value:v}}),Promise.resolve(v))}else if(u.validationSchema)return j({type:"SET_ISVALIDATING",payload:!0}),St(w.values,c).then(function(S){return S}).then(function(S){j({type:"SET_FIELD_ERROR",payload:{field:c,value:V(S,c)}}),j({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ii=y.useCallback(function(c,g){var v=g.validate;C.current[c]={validate:v}},[]),Pi=y.useCallback(function(c){delete C.current[c]},[]),Hn=B(function(c,g){j({type:"SET_TOUCHED",payload:c});var v=g===void 0?a:g;return v?q(w.values):Promise.resolve()}),Vn=y.useCallback(function(c){j({type:"SET_ERRORS",payload:c})},[]),Gn=B(function(c,g){var v=X(c)?c(w.values):c;j({type:"SET_VALUES",payload:v});var S=g===void 0?n:g;return S?q(v):Promise.resolve()}),Je=y.useCallback(function(c,g){j({type:"SET_FIELD_ERROR",payload:{field:c,value:g}})},[]),Ee=B(function(c,g,v){j({type:"SET_FIELD_VALUE",payload:{field:c,value:g}});var S=v===void 0?n:v;return S?q(ge(w.values,c,g)):Promise.resolve()}),Yn=y.useCallback(function(c,g){var v=g,S=c,_;if(!Ht(c)){c.persist&&c.persist();var L=c.target?c.target:c.currentTarget,D=L.type,te=L.name,Ot=L.id,_t=L.value,$i=L.checked,cm=L.outerHTML,Jn=L.options,Di=L.multiple;v=g||te||Ot,S=/number|range/.test(D)?(_=parseFloat(_t),isNaN(_)?"":_):/checkbox/.test(D)?Jd(V(w.values,v),$i,_t):Jn&&Di?Xd(Jn):_t}v&&Ee(v,S)},[Ee,w.values]),Tt=B(function(c){if(Ht(c))return function(g){return Yn(g,c)};Yn(c)}),we=B(function(c,g,v){g===void 0&&(g=!0),j({type:"SET_FIELD_TOUCHED",payload:{field:c,value:g}});var S=v===void 0?a:v;return S?q(w.values):Promise.resolve()}),Wn=y.useCallback(function(c,g){c.persist&&c.persist();var v=c.target,S=v.name,_=v.id,L=v.outerHTML,D=g||S||_;we(D,!0)},[we]),At=B(function(c){if(Ht(c))return function(g){return Wn(g,c)};Wn(c)}),Bn=y.useCallback(function(c){X(c)?j({type:"SET_FORMIK_STATE",payload:c}):j({type:"SET_FORMIK_STATE",payload:function(){return c}})},[]),Kn=y.useCallback(function(c){j({type:"SET_STATUS",payload:c})},[]),qn=y.useCallback(function(c){j({type:"SET_ISSUBMITTING",payload:c})},[]),Et=B(function(){return j({type:"SUBMIT_ATTEMPT"}),q().then(function(c){var g=c instanceof Error,v=!g&&Object.keys(c).length===0;if(v){var S;try{if(S=Ni(),S===void 0)return}catch(_){throw _}return Promise.resolve(S).then(function(_){return E.current&&j({type:"SUBMIT_SUCCESS"}),_}).catch(function(_){if(E.current)throw j({type:"SUBMIT_FAILURE"}),_})}else if(E.current&&(j({type:"SUBMIT_FAILURE"}),g))throw c})}),Ci=B(function(c){c&&c.preventDefault&&X(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&X(c.stopPropagation)&&c.stopPropagation(),Et().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),Xn={resetForm:Le,validateForm:q,validateField:Un,setErrors:Vn,setFieldError:Je,setFieldTouched:we,setFieldValue:Ee,setStatus:Kn,setSubmitting:qn,setTouched:Hn,setValues:Gn,setFormikState:Bn,submitForm:Et},Ni=B(function(){return p(w.values,Xn)}),ji=B(function(c){c&&c.preventDefault&&X(c.preventDefault)&&c.preventDefault(),c&&c.stopPropagation&&X(c.stopPropagation)&&c.stopPropagation(),Le()}),Mi=y.useCallback(function(c){return{value:V(w.values,c),error:V(w.errors,c),touched:!!V(w.touched,c),initialValue:V(A.current,c),initialTouched:!!V(P.current,c),initialError:V(O.current,c)}},[w.errors,w.touched,w.values]),Li=y.useCallback(function(c){return{setValue:function(v,S){return Ee(c,v,S)},setTouched:function(v,S){return we(c,v,S)},setError:function(v){return Je(c,v)}}},[Ee,we,Je]),ki=y.useCallback(function(c){var g=vt(c),v=g?c.name:c,S=V(w.values,v),_={name:v,value:S,onChange:Tt,onBlur:At};if(g){var L=c.type,D=c.value,te=c.as,Ot=c.multiple;L==="checkbox"?D===void 0?_.checked=!!S:(_.checked=!!(Array.isArray(S)&&~S.indexOf(D)),_.value=D):L==="radio"?(_.checked=S===D,_.value=D):te==="select"&&Ot&&(_.value=_.value||[],_.multiple=!0)}return _},[At,Tt,w.values]),wt=y.useMemo(function(){return!pe(A.current,w.values)},[A.current,w.values]),Fi=y.useMemo(function(){return typeof s<"u"?wt?w.errors&&Object.keys(w.errors).length===0:s!==!1&&X(s)?s(u):s:w.errors&&Object.keys(w.errors).length===0},[s,wt,w.errors,u]),Ri=z({},w,{initialValues:A.current,initialErrors:O.current,initialTouched:P.current,initialStatus:T.current,handleBlur:At,handleChange:Tt,handleReset:ji,handleSubmit:Ci,resetForm:Le,setErrors:Vn,setFormikState:Bn,setFieldTouched:we,setFieldValue:Ee,setFieldError:Je,setStatus:Kn,setSubmitting:qn,setTouched:Hn,setValues:Gn,submitForm:Et,validateForm:q,validateField:Un,isValid:Fi,dirty:wt,unregisterField:Pi,registerField:Ii,getFieldProps:ki,getFieldMeta:Mi,getFieldHelpers:Li,validateOnBlur:a,validateOnChange:n,validateOnMount:o});return Ri}function Bd(e){var t={};if(e.inner){if(e.inner.length===0)return ge(t,e.path,e.message);for(var a=e.inner,n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();;){var i;if(n){if(r>=a.length)break;i=a[r++]}else{if(r=a.next(),r.done)break;i=r.value}var o=i;V(t,o.path)||(t=ge(t,o.path,o.message))}}return t}function Kd(e,t,n,r){n===void 0&&(n=!1);var a=hn(e);return t[n?"validateSync":"validate"](a,{abortEarly:!1,context:a})}function hn(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(a){return Array.isArray(a)===!0||Fr(a)?hn(a):a!==""?a:void 0}):Fr(e[r])?t[r]=hn(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function qd(e,t,n){var r=e.slice();return t.forEach(function(i,o){if(typeof r[o]>"u"){var s=n.clone!==!1,f=s&&n.isMergeableObject(i);r[o]=f?fn(Array.isArray(i)?[]:{},i,n):i}else n.isMergeableObject(i)?r[o]=fn(e[o],i,n):e.indexOf(i)===-1&&r.push(i)}),r}function Xd(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Jd(e,t,n){if(typeof e=="boolean")return!!t;var r=[],a=!1,i=-1;if(Array.isArray(e))r=e,i=e.indexOf(n),a=i>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!a?r.concat(n):a?r.slice(0,i).concat(r.slice(i+1)):r}var Zd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?y.useLayoutEffect:y.useEffect;function B(e){var t=y.useRef(e);return Zd(function(){t.current=e}),y.useCallback(function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.current.apply(void 0,r)},[])}var Qd=y.forwardRef(function(e,t){var n=e.action,r=Ei(e,["action"]),a=n??"#",i=Vd(),o=i.handleReset,s=i.handleSubmit;return y.createElement("form",z({onSubmit:s,ref:t,onReset:o,action:a},r))});Qd.displayName="Form";function em(){const[e,t]=y.useState(!0);y.useEffect(()=>{},[e]);const{values:n,handleChange:r}=Wd({initialValues:{search:""},onSubmit(){}});return h.jsxs("div",{className:"flex flex-col space-y-3",children:[h.jsx(pa,{name:"search",value:n.search,onChange:r,variant:"bordered",classNames:{inputWrapper:"bg-background"},label:"Search",startContent:h.jsx(K,{icon:Ec})}),h.jsx(ma,{isSelected:e,onValueChange:t,children:"Show label"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:kc.filter(a=>a.displayName.toLowerCase().includes(n.search.toLowerCase())).map(a=>h.jsx(Fc,{icon:a,showLabel:e},a.id))})]})}var k=(e=>(e.LIGHT="LIGHT",e.DARK="DARK",e.SYSTEM="SYSTEM",e))(k||{});const tm={themeOption:k.SYSTEM,appliedTheme:k.LIGHT,setTheme(){}},Oi=y.createContext(tm);function nm(){const{themeOption:e,setTheme:t}=y.useContext(Oi),n=()=>{switch(e){case k.LIGHT:t(k.DARK);break;case k.DARK:t(k.SYSTEM);break;case k.SYSTEM:t(k.LIGHT);break}};return h.jsxs("div",{className:"min-h-screen flex flex-col items-center bg-content2 pb-[5rem]",children:[h.jsxs(qi,{className:"bg-content2",isBlurred:!1,children:[h.jsx(Xi,{children:h.jsx("img",{className:"h-[2.5rem]",src:tr,alt:"logo"})}),h.jsxs(Ji,{justify:"end",children:[h.jsx("a",{href:"https://github.com/devlotfi/stack-icons",target:"_blank",children:h.jsx(it,{isIconOnly:!0,variant:"bordered",className:"bg-background",children:h.jsx(K,{icon:Mc})})}),h.jsx(it,{isIconOnly:!0,variant:"bordered",className:"bg-background",onPress:n,children:e===k.LIGHT?h.jsx(K,{icon:Tc}):e===k.DARK?h.jsx(K,{icon:Ic}):h.jsx(K,{icon:_c})})]})]}),h.jsxs("div",{className:"flex flex-col w-full max-w-screen-lg space-y-5 px-[1rem]",children:[h.jsxs("div",{className:"flex flex-col items-center p-[1rem] text-center space-y-3",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("img",{className:"h-[2.5rem] md:h-[3.2rem]",src:tr,alt:"logo"}),h.jsx("div",{className:"flex font-black text-[20pt] md:text-[30pt]",children:"Stack Icons"})]}),h.jsx("div",{className:"flex font-medium text-[15pt]",children:"Technology icons for github markdown"})]}),h.jsx(Lc,{}),h.jsxs("div",{className:"flex space-x-3 items-center text-[20pt]",children:[h.jsx(K,{className:"text-primary",icon:Oc}),h.jsx("div",{className:"flex font-bold",children:"Add icons"})]}),h.jsx(em,{})]})]})}function rm({children:e}){const[t,n]=y.useState([]),[r,a]=y.useState(50);return h.jsx(Ke.Provider,{value:{selectedIcons:t,setSelectedIcons:n,height:r,setHeight:a},children:e})}class xt{}Zn(xt,"THEME_STORAGE_KEY","THEME");const gn=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?k.DARK:k.LIGHT,am=()=>{const e=localStorage.getItem(xt.THEME_STORAGE_KEY);return e===k.LIGHT||e===k.DARK||e===k.SYSTEM?e:k.SYSTEM},im=()=>{const e=localStorage.getItem(xt.THEME_STORAGE_KEY);return e===k.SYSTEM?gn():e===k.LIGHT||e===k.DARK?e:k.LIGHT};function om({children:e}){const[t,n]=y.useState(am()),[r,a]=y.useState(im()),i=o=>{const s=document.getElementById("theme-provider");if(o===k.DARK||o===k.LIGHT)s.className=`bg-background text-foreground ${o===k.LIGHT?"light":"dark"}`,a(o);else if(o===k.SYSTEM){const f=gn();(f===k.LIGHT||f===k.DARK)&&(s.className=`bg-background text-foreground ${f===k.LIGHT?"light":"dark"}`,a(f))}localStorage.setItem(xt.THEME_STORAGE_KEY,o)};return y.useEffect(()=>{i(t)},[t]),y.useEffect(()=>{const o=()=>{n(f=>(f===k.SYSTEM&&i(gn()),f))},s=window.matchMedia("(prefers-color-scheme: dark)");return s.addEventListener("change",o),()=>{s.removeEventListener("change",o)}},[t]),h.jsx(Oi.Provider,{value:{themeOption:t,appliedTheme:r,setTheme:n},children:e})}eo.createRoot(document.getElementById("root")).render(h.jsx(y.StrictMode,{children:h.jsx(Zi,{children:h.jsx(om,{children:h.jsx(rm,{children:h.jsx(nm,{})})})})}))});export default sm();
