(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{dK9G:function(e,r,a){"use strict";a.r(r),a.d(r,"SignupPage",(function(){return p}));a("q1tI");var i,s=a("kDLi"),n=a("ZFWI"),o=a("t8hP"),t=a("Xmxp"),l=a("Obii"),c=a("NoLC"),d=a("FUfA"),u=a("nKUr");function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const p=e=>{const r={email:e.queryParams.email,code:e.queryParams.code};return Object(u.jsx)(c.b,{children:Object(u.jsx)(c.a,{children:Object(u.jsx)(s.Form,{defaultValues:r,onSubmit:async e=>{""===e.name&&delete e.name,delete e.confirm;"redirect-to-select-org"===(await Object(o.getBackendSrv)().post("/api/user/signup/step2",{email:e.email,code:e.code,username:e.email,orgName:e.orgName,password:e.password,name:e.name}).catch(e=>{var r;const a=(null===(r=e.data)||void 0===r?void 0:r.message)||e;t.b.emit(l.AppEvents.alertWarning,[a])})).code&&window.location.assign(Object(n.c)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign(Object(n.c)().appSubUrl+"/")},children:({errors:e,register:r,getValues:a})=>{var o,t,l;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.Field,{label:"Your name",children:Object(u.jsx)(s.Input,m({id:"user-name"},r("name"),{placeholder:"(optional)"}))}),Object(u.jsx)(s.Field,{label:"Email",invalid:!!e.email,error:null===(o=e.email)||void 0===o?void 0:o.message,children:Object(u.jsx)(s.Input,m({id:"email"},r("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}}),{type:"email",placeholder:"Email"}))}),!Object(n.c)().autoAssignOrg&&Object(u.jsx)(s.Field,{label:"Org. name",children:Object(u.jsx)(s.Input,m({id:"org-name"},r("orgName"),{placeholder:"Org. name"}))}),Object(n.c)().verifyEmailEnabled&&Object(u.jsx)(s.Field,{label:"Email verification code (sent to your email)",children:Object(u.jsx)(s.Input,m({id:"verification-code"},r("code"),{placeholder:"Code"}))}),Object(u.jsx)(s.Field,{label:"Password",invalid:!!e.password,error:null==e||null===(t=e.password)||void 0===t?void 0:t.message,children:Object(u.jsx)(d.a,m({id:"new-password",autoFocus:!0,autoComplete:"new-password"},r("password",{required:"Password is required"})))}),Object(u.jsx)(s.Field,{label:"Confirm password",invalid:!!e.confirm,error:null==e||null===(l=e.confirm)||void 0===l?void 0:l.message,children:Object(u.jsx)(d.a,m({id:"confirm-new-password",autoComplete:"new-password"},r("confirm",{required:"Confirmed password is required",validate:e=>e===a().password||"Passwords must match!"})))}),Object(u.jsxs)(s.HorizontalGroup,{children:[i||(i=Object(u.jsx)(s.Button,{type:"submit",children:"Submit"})),Object(u.jsx)(s.LinkButton,{fill:"text",href:Object(n.c)().appSubUrl+"/login",children:"Back to login"})]})]})}})})})};r.default=p}}]);
//# sourceMappingURL=97.62c612232a976d8836f5.js.map