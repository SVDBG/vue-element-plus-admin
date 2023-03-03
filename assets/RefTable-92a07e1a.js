import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-aaf4e420.js";import{d as t,q as l,I as a,r as o,o as i,c as s,g as n,w as r,a as m,B as p,t as d,e as u,F as b,k as c}from"./index-413f8a40.js";import{_ as f}from"./Table.vue_vue_type_script_lang-d15236ca.js";import{g}from"./index-5d64b16e.js";import{E as _}from"./el-tag-abdf1569.js";import{E as D}from"./el-button-dd132f21.js";import{u as v}from"./useTable-cca9d982.js";import"./el-card-f4c5e2bf.js";import"./el-popper-0fbe11b6.js";import"./index-821f5e41.js";import"./tsxHelper-4318bc24.js";import"./event-5568c9d8.js";import"./index-f8496169.js";import"./el-input-186c2c5a.js";import"./index-ae50a80d.js";import"./scroll-b0da304b.js";import"./debounce-d986efae.js";import"./validator-141041ba.js";import"./el-message-box-c337f7ec.js";import"./el-overlay-cb39f598.js";import"./vnode-0f48843f.js";import"./aria-ecee1d93.js";const j={class:"ml-30px"},x=t({__name:"RefTable",setup(t){const{t:x}=c(),h=l([{field:"index",label:x("tableDemo.index"),type:"index"},{field:"content",label:x("tableDemo.header"),children:[{field:"title",label:x("tableDemo.title")},{field:"author",label:x("tableDemo.author")},{field:"display_time",label:x("tableDemo.displayTime")},{field:"importance",label:x("tableDemo.importance"),formatter:(e,t,l)=>a(_,{type:1===l?"success":2===l?"warning":"danger"},(()=>x(1===l?"tableDemo.important":2===l?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:x("tableDemo.pageviews")}]},{field:"action",label:x("tableDemo.action")}]),{register:k,tableObject:C,methods:y}=v({getListApi:g,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=y;w();const R=o(),T=o(),P=e=>{T.value=e?{total:C.total}:void 0},S=e=>{var t;null==(t=m(R))||t.setProps({reserveIndex:e})},z=e=>{var t;null==(t=m(R))||t.setProps({selection:e})},$=o(1),E=()=>{var e;null==(e=m(R))||e.setColumn([{field:"title",path:"label",value:`${x("tableDemo.title")}${m($)}`}]),$.value++},I=e=>{var t;null==(t=m(R))||t.setProps({expand:e})},A=()=>{var e,t;null==(t=null==(e=m(R))?void 0:e.elTableRef)||t.toggleAllSelection()};return(t,l)=>(i(),s(b,null,[n(m(e),{title:`RefTable ${m(x)("tableDemo.operate")}`},{default:r((()=>[n(m(D),{onClick:l[0]||(l[0]=e=>P(!0))},{default:r((()=>[p(d(m(x)("tableDemo.show"))+" "+d(m(x)("tableDemo.pagination")),1)])),_:1}),n(m(D),{onClick:l[1]||(l[1]=e=>P(!1))},{default:r((()=>[p(d(m(x)("tableDemo.hidden"))+" "+d(m(x)("tableDemo.pagination")),1)])),_:1}),n(m(D),{onClick:l[2]||(l[2]=e=>S(!0))},{default:r((()=>[p(d(m(x)("tableDemo.reserveIndex")),1)])),_:1}),n(m(D),{onClick:l[3]||(l[3]=e=>S(!1))},{default:r((()=>[p(d(m(x)("tableDemo.restoreIndex")),1)])),_:1}),n(m(D),{onClick:l[4]||(l[4]=e=>z(!0))},{default:r((()=>[p(d(m(x)("tableDemo.showSelections")),1)])),_:1}),n(m(D),{onClick:l[5]||(l[5]=e=>z(!1))},{default:r((()=>[p(d(m(x)("tableDemo.hiddenSelections")),1)])),_:1}),n(m(D),{onClick:E},{default:r((()=>[p(d(m(x)("tableDemo.changeTitle")),1)])),_:1}),n(m(D),{onClick:l[6]||(l[6]=e=>I(!0))},{default:r((()=>[p(d(m(x)("tableDemo.showExpandedRows")),1)])),_:1}),n(m(D),{onClick:l[7]||(l[7]=e=>I(!1))},{default:r((()=>[p(d(m(x)("tableDemo.hiddenExpandedRows")),1)])),_:1}),n(m(D),{onClick:A},{default:r((()=>[p(d(m(x)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),n(m(e),{title:`RefTable ${m(x)("tableDemo.example")}`},{default:r((()=>[n(m(f),{ref_key:"tableRef",ref:R,pageSize:m(C).pageSize,"onUpdate:pageSize":l[8]||(l[8]=e=>m(C).pageSize=e),currentPage:m(C).currentPage,"onUpdate:currentPage":l[9]||(l[9]=e=>m(C).currentPage=e),data:m(C).tableList,loading:m(C).loading,pagination:T.value,onRegister:m(k)},{action:r((e=>[n(m(D),{type:"primary",onClick:e=>{}},{default:r((()=>[p(d(m(x)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[u("div",j,[u("div",null,d(m(x)("tableDemo.title"))+"："+d(e.row.title),1),u("div",null,d(m(x)("tableDemo.author"))+"："+d(e.row.author),1),u("div",null,d(m(x)("tableDemo.displayTime"))+"："+d(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
