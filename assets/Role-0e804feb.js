import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-aaf4e420.js";import{d as s,k as a,I as r,r as t,o,h as i,w as l,g as m,a as p,B as n,t as d}from"./index-413f8a40.js";import{_ as u}from"./Table.vue_vue_type_script_lang-d15236ca.js";import{b as _}from"./index-3e8d8800.js";import{E as c}from"./el-button-dd132f21.js";import"./el-card-f4c5e2bf.js";import"./el-popper-0fbe11b6.js";import"./index-821f5e41.js";import"./tsxHelper-4318bc24.js";import"./event-5568c9d8.js";import"./index-f8496169.js";import"./el-input-186c2c5a.js";import"./el-tag-abdf1569.js";import"./index-ae50a80d.js";import"./scroll-b0da304b.js";import"./debounce-d986efae.js";import"./validator-141041ba.js";const j=s({__name:"Role",setup(s){const{t:j}=a(),f=[{field:"index",label:j("userDemo.index"),type:"index"},{field:"username",label:j("userDemo.username")},{field:"password",label:j("userDemo.password")},{field:"role",label:j("userDemo.role")},{field:"remark",label:j("userDemo.remark"),formatter:e=>r("span","admin"===e.username?j("userDemo.remarkMessage1"):j("userDemo.remarkMessage2"))},{field:"action",label:j("userDemo.action")}],g=t(!0);let b=t([]);(async e=>{const s=await _({params:e||{pageIndex:1,pageSize:10}});s&&(b.value=s.list)})();return(s,a)=>(o(),i(p(e),{title:p(j)("userDemo.title"),message:p(j)("userDemo.message")},{default:l((()=>[m(p(u),{columns:f,data:p(b),loading:g.value,selection:!1},{action:l((e=>[m(p(c),{type:"primary",onClick:e=>{}},{default:l((()=>[n(d(p(j)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};
