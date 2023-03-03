import{F as e}from"./Form-08e0b7a8.js";import{d as o,b as s,m as a,u as t,ax as r,q as i,r as l,W as n,A as d,o as c,h as p,w as m,e as u,t as g,a as f,g as w,B as h,k as j}from"./index-5742349a.js";import{E as v}from"./el-button-838c6deb.js";import{E as b}from"./tsxHelper-0c1cc466.js";import{E as _}from"./el-link-73e04b48.js";import{u as y}from"./useForm-bf4bba17.js";import{l as x,g as R,a as P}from"./index-48f951f3.js";import{u as I}from"./useValidator-411e5cff.js";import{_ as k}from"./_plugin-vue_export-helper-1b428a4d.js";import"./el-col-d9e2a608.js";import"./el-popper-95d29a72.js";import"./index-ae549ce1.js";import"./el-input-dd22a1de.js";import"./event-5568c9d8.js";import"./index-37fdb6ec.js";import"./el-tag-98219d94.js";import"./el-input-number-660081e3.js";import"./index-6bbf6068.js";import"./el-switch-b0c7c88a.js";import"./validator-6c435a9a.js";import"./el-divider-6d6de794.js";import"./InputPassword-92f6f885.js";import"./style.css_vue_type_style_index_0_src_true_lang-baaddd8a.js";import"./debounce-6766eacb.js";import"./aria-ecee1d93.js";import"./scroll-b3c15d09.js";const F={class:"text-2xl font-bold text-center w-[100%]"},z={class:"flex justify-between items-center w-[100%]"},A={class:"w-[100%]"},E={class:"w-[100%] mt-15px"},V={class:"flex justify-between w-[100%]"},q=k(o({__name:"LoginForm",emits:["to-register"],setup(o,{emit:k}){const{required:q}=I(),C=s(),D=a(),{currentRoute:U,addRoute:L,push:W}=t(),{wsCache:B}=r(),{t:H}=j(),N={username:[q()],password:[q()]},S=i([{field:"title",colProps:{span:24}},{field:"username",label:H("login.username"),value:"admin",component:"Input",colProps:{span:24},componentProps:{placeholder:H("login.usernamePlaceholder")}},{field:"password",label:H("login.password"),value:"admin",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:H("login.passwordPlaceholder")}},{field:"tool",colProps:{span:24}},{field:"login",colProps:{span:24}},{field:"other",component:"Divider",label:H("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24}}]),T=l(!1),{register:X,elFormRef:Y,methods:Z}=y(),$=l(!1),G="#999",J=l("");n((()=>U.value),(e=>{var o;J.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const K=async()=>{const e=f(Y);await(null==e?void 0:e.validate((async e=>{if(e){$.value=!0;const{getFormData:e}=Z,o=await e();try{const e=await x(o);e&&(B.set(C.getUserInfo,e.data),C.getDynamicRouter?M():(await D.generateRoutes("none").catch((()=>{})),D.getAddRouters.forEach((e=>{L(e)})),D.setIsAddRouters(!0),W({path:J.value||D.addRouters[0].path})))}finally{$.value=!1}}})))},M=async()=>{const{getFormData:e}=Z,o=await e(),s={roleName:o.username},a="admin"===o.username?await R(s):await P(s);if(a){const{wsCache:e}=r(),s=a.data||[];e.set("roleRouters",s),"admin"===o.username?await D.generateRoutes("admin",s).catch((()=>{})):await D.generateRoutes("test",s).catch((()=>{})),D.getAddRouters.forEach((e=>{L(e)})),D.setIsAddRouters(!0),W({path:J.value||D.addRouters[0].path})}},O=()=>{k("to-register")};return(o,s)=>{const a=d("Icon");return c(),p(f(e),{schema:S,rules:N,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:f(X)},{title:m((()=>[u("h2",F,g(f(H)("login.login")),1)])),tool:m((()=>[u("div",z,[w(f(b),{modelValue:T.value,"onUpdate:modelValue":s[0]||(s[0]=e=>T.value=e),label:f(H)("login.remember"),size:"small"},null,8,["modelValue","label"]),w(f(_),{type:"primary",underline:!1},{default:m((()=>[h(g(f(H)("login.forgetPassword")),1)])),_:1})])])),login:m((()=>[u("div",A,[w(f(v),{loading:$.value,type:"primary",class:"w-[100%]",onClick:K},{default:m((()=>[h(g(f(H)("login.login")),1)])),_:1},8,["loading"])]),u("div",E,[w(f(v),{class:"w-[100%]",onClick:O},{default:m((()=>[h(g(f(H)("login.register")),1)])),_:1})])])),otherIcon:m((()=>[u("div",V,[w(a,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer anticon",color:G}),w(a,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer anticon",color:G}),w(a,{icon:"ant-design:alipay-circle-filled",size:30,color:G,class:"cursor-pointer anticon"}),w(a,{icon:"ant-design:weibo-circle-filled",size:30,color:G,class:"cursor-pointer anticon"})])])),_:1},8,["schema","onRegister"])}}}),[["__scopeId","data-v-9a50efc0"]]);export{q as default};
