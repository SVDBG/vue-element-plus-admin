import{aJ as E,bO as T,bs as s,cS as e}from"./index-413f8a40.js";var S=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(S||{});const r=E=>{if(!T(E))return{};const S=E.props||{},r=(T(E.type)?E.type.props:void 0)||{},A={};return Object.keys(r).forEach((E=>{s(r[E],"default")&&(A[E]=r[E].default)})),Object.keys(S).forEach((E=>{A[e(E)]=S[E]})),A},A=s=>{const e=E(s)?s:[s],S=[];return e.forEach((s=>{var e;E(s)?S.push(...A(s)):T(s)&&E(s.children)?S.push(...A(s.children)):(S.push(s),T(s)&&(null==(e=s.component)?void 0:e.subTree)&&S.push(...A(s.component.subTree)))})),S};export{S as P,A as f,r as g};
