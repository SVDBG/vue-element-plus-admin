import{E as e,av as t,ak as o,at as n,bj as s,au as a,R as u,cQ as l,a$ as d,bu as c,W as m,cv as i,cM as r,cR as v,cN as p,b0 as f,K as y,L as b,d as M,g as h,a9 as E,I as x}from"./index-413f8a40.js";import{a as g}from"./scroll-b0da304b.js";import{P as k}from"./vnode-0f48843f.js";const w=(s,a,u)=>{let l={offsetX:0,offsetY:0};const d=e=>{const t=e.clientX,o=e.clientY,{offsetX:a,offsetY:u}=l,d=s.value.getBoundingClientRect(),c=d.left,m=d.top,i=d.width,r=d.height,v=document.documentElement.clientWidth,p=document.documentElement.clientHeight,f=-c+a,y=-m+u,b=v-c-i+a,M=p-m-r+u,h=e=>{const d=Math.min(Math.max(a+e.clientX-t,f),b),c=Math.min(Math.max(u+e.clientY-o,y),M);l={offsetX:d,offsetY:c},s.value.style.transform=`translate(${n(d)}, ${n(c)})`},E=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",E)},c=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",d)};e((()=>{t((()=>{u.value?a.value&&s.value&&a.value.addEventListener("mousedown",d):c()}))})),o((()=>{c()}))},C=e=>{s(e)||a("[useLockscreen]","You need to pass a ref param to this function");const t=u("popup"),o=l((()=>t.bm("parent","hidden")));if(!d||c(document.body,o.value))return;let n=0,f=!1,y="0";const b=()=>{setTimeout((()=>{p(null==document?void 0:document.body,o.value),f&&document&&(document.body.style.width=y)}),200)};m(e,(e=>{if(!e)return void b();f=!c(document.body,o.value),f&&(y=document.body.style.width),n=g(t.namespace.value);const s=document.documentElement.clientHeight<document.body.scrollHeight,a=i(document.body,"overflowY");n>0&&(s||"scroll"===a)&&f&&(document.body.style.width=`calc(100% - ${n}px)`),r(document.body,o.value)})),v((()=>b()))},L=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}};const Y=M({name:"ElOverlay",props:y({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:b([String,Array,Object])},zIndex:{type:b([String,Number])}}),emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:o}){const n=u("overlay"),{onClick:s,onMousedown:a,onMouseup:l}=L(e.customMaskEvent?void 0:e=>{o("click",e)});return()=>e.mask?h("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:l},[E(t,"default")],k.STYLE|k.CLASS|k.PROPS,["onClick","onMouseup","onMousedown"]):x("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[E(t,"default")])}});export{Y as E,C as a,L as b,w as u};
