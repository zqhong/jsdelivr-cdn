(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{mwzk:function(e,a,n){"use strict";n.r(a),n.d(a,"SignupInvitedPage",(function(){return p}));var t,r,i=n("q1tI"),s=n("t8hP"),l=n("kDLi"),c=n("Y8YH"),o=n("ZGyg"),d=n("HJRA"),m=n("ZFWI"),u=n("nKUr");function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}const b={main:{icon:"grafana",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},p=({match:e})=>{const a=e.params.code,[n,p]=Object(i.useState)(),[h,g]=Object(i.useState)(),[O,w]=Object(i.useState)();Object(c.a)(async()=>{const e=await Object(s.getBackendSrv)().get("/api/user/invite/"+a);p({email:e.email,name:e.name,username:e.email}),g(e.name||e.email||e.username),w(e.invitedBy)},[a]);return n?Object(u.jsx)(o.b,{navModel:b,children:Object(u.jsxs)(o.b.Contents,{children:[Object(u.jsxs)("h3",{className:"page-sub-heading",children:["Hello ",h||"there","."]}),Object(u.jsxs)("div",{className:"modal-tagline p-b-2",children:[Object(u.jsx)("em",{children:O||"Someone"})," has invited you to join Grafana and the organization"," ",Object(u.jsx)("span",{className:"highlight-word",children:d.b.user.orgName}),t||(t=Object(u.jsx)("br",{})),"Please complete the following and choose a password to accept your invitation and continue:"]}),Object(u.jsx)(l.Form,{defaultValues:n,onSubmit:async e=>{await Object(s.getBackendSrv)().post("/api/user/invite/complete",j({},e,{inviteCode:a})),window.location.href=Object(m.c)().appSubUrl+"/"},children:({register:e,errors:a})=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.Field,{invalid:!!a.email,error:a.email&&a.email.message,label:"Email",children:Object(u.jsx)(l.Input,j({placeholder:"email@example.com"},e("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}})))}),Object(u.jsx)(l.Field,{invalid:!!a.name,error:a.name&&a.name.message,label:"Name",children:Object(u.jsx)(l.Input,j({placeholder:"Name (optional)"},e("name")))}),Object(u.jsx)(l.Field,{invalid:!!a.username,error:a.username&&a.username.message,label:"Username",children:Object(u.jsx)(l.Input,j({},e("username",{required:"Username is required"}),{placeholder:"Username"}))}),Object(u.jsx)(l.Field,{invalid:!!a.password,error:a.password&&a.password.message,label:"Password",children:Object(u.jsx)(l.Input,j({},e("password",{required:"Password is required"}),{type:"password",placeholder:"Password"}))}),r||(r=Object(u.jsx)(l.Button,{type:"submit",children:"Sign up"}))]})})]})}):null};a.default=p}}]);
//# sourceMappingURL=SignupInvited.807b3f41627421e0a149.js.map