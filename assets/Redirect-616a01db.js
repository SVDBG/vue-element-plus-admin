import{d as e,u as t,a as r,o as a,c as s}from"./index-413f8a40.js";const p=e({__name:"Redirect",setup(e){const{currentRoute:p,replace:c}=t(),{params:o,query:n}=r(p),{path:d,_redirect_type:i="path"}=o;Reflect.deleteProperty(o,"_redirect_type"),Reflect.deleteProperty(o,"path");const u=Array.isArray(d)?d.join("/"):d;return c("name"===i?{name:u,query:n,params:o}:{path:u.startsWith("/")?u:"/"+u,query:n}),(e,t)=>(a(),s("div"))}});export{p as default};
