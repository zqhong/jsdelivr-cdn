(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9f6O":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var a=n("t8hP"),c=n("q1tI"),s=n("Ty5D");function r(){const{search:t}=Object(s.l)();return[Object(c.useMemo)(()=>Object(a.locationSearchToObject)(t||""),[t]),Object(c.useCallback)((t,n)=>e(()=>a.locationService.partial(t,n)),[])]}}).call(this,n("URgk").setImmediate)},GT13:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n("kDLi"),s=n("/MKj"),r=n("Ty5D"),i=n("sbt+"),l=n("vF1F"),o=n("Obii"),d=n("te+q"),j=n("PFX3"),u=n("nKUr");const b=["className"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const O=e=>{let{className:t}=e,n=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,b);return Object(u.jsx)(j.a,m({variant:"secondary",size:"xs",className:Object(l.cx)(Object(c.useStyles)(h),t)},n))},h=e=>l.css`
  height: 24px;
  font-size: ${e.typography.size.sm};
`;var g,x=n("Kwdr"),p=n("P5Cx"),f=n("CBrm"),v=n("R9t/");const y=({alert:e,className:t})=>{const[n,s]=Object(a.useState)(!0),r=Object(c.useStyles2)(p.a),i=Object(o.toDuration)(Object(o.dateTimeAsMoment)(e.endsAt).diff(e.startsAt)).asSeconds(),l=Object.entries(e.labels).reduce((e,[t,n])=>("alertname"!==t&&"__alert_rule_title__"!==t||(e=n),e),"");return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{isCollapsed:n,onToggle:e=>s(e)})}),Object(u.jsx)("td",{children:Object(u.jsx)(v.a,{state:e.status.state})}),Object(u.jsxs)("td",{children:["for ",i," seconds"]}),Object(u.jsx)("td",{children:l}),Object(u.jsx)("td",{className:r.actionsCell,children:Object(u.jsx)(x.a,{icon:"chart-line",to:e.generatorURL,tooltip:"View in explorer"})})]}),!n&&Object(u.jsxs)("tr",{className:t,children:[g||(g=Object(u.jsx)("td",{})),Object(u.jsx)("td",{colSpan:5,children:Object(u.jsx)(f.a,{labels:e.labels})})]})]})};var S,w,N;const I=e=>({tableMargin:l.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:l.css`
    width: 110px;
  `,colName:l.css`
    width: 65%;
  `});var k=({silencedAlerts:e})=>{const t=Object(c.useStyles2)(p.a),n=Object(c.useStyles2)(I);return e.length?Object(u.jsxs)("table",{className:Object(l.cx)(t.table,n.tableMargin),children:[Object(u.jsxs)("colgroup",{children:[Object(u.jsx)("col",{className:t.colExpand}),Object(u.jsx)("col",{className:n.colState}),S||(S=Object(u.jsx)("col",{})),Object(u.jsx)("col",{className:n.colName}),w||(w=Object(u.jsx)("col",{}))]}),N||(N=Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"State"}),Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"Alert name"}),Object(u.jsx)("th",{children:"Actions"})]})})),Object(u.jsx)("tbody",{children:e.map((e,n)=>Object(u.jsx)(y,{alert:e,className:n%2==0?t.evenRow:""},e.fingerprint))})]}):null},A=n("4Yfp"),C=n("Jv5Q"),D=n("Wxkr"),T=n("sIux");const M={[D.c.Active]:"good",[D.c.Expired]:"neutral",[D.c.Pending]:"neutral"},$=({state:e})=>Object(u.jsx)(T.a,{state:M[e],children:e});var R,B,F,q,E,L,Y,_,P,U,V,K,z=n("8qpb"),Z=n("umNM");const H=e=>({matchersCell:l.css`
    & > * + * {
      margin-left: ${e.spacing.xs};
    }
  `,actionsCell:l.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing.sm};
    }
  `,alertRulesCell:l.css`
    vertical-align: top;
  `});var G,J=({silence:e,className:t,silencedAlerts:n,alertManagerSourceName:r})=>{const[i,j]=Object(a.useState)(!0),b=Object(s.useDispatch)(),m=Object(c.useStyles)(H),{status:h,matchers:g=[],startsAt:p,endsAt:f,comment:v,createdBy:y}=e,S=o.dateMath.parse(p),w=o.dateMath.parse(f),N=Object(o.intervalToAbbreviatedDurationString)({start:new Date(p),end:new Date(f)}),I=Z.a.isEditor?4:3;return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[Object(u.jsx)("td",{children:Object(u.jsx)(d.a,{isCollapsed:i,onToggle:e=>j(e)})}),Object(u.jsx)("td",{children:Object(u.jsx)($,{state:h.state})}),Object(u.jsx)("td",{className:m.matchersCell,children:Object(u.jsx)(C.a,{matchers:g})}),Object(u.jsx)("td",{children:n.length}),Object(u.jsxs)("td",{children:[null==S?void 0:S.format("YYYY-MM-DD HH:mm")," ","-",R||(R=Object(u.jsx)("br",{})),null==w?void 0:w.format("YYYY-MM-DD HH:mm")]}),Z.a.isEditor&&Object(u.jsxs)("td",{className:m.actionsCell,children:["expired"===h.state?Object(u.jsx)(c.Link,{href:Object(z.e)(`/alerting/silence/${e.id}/edit`,r),children:B||(B=Object(u.jsx)(O,{icon:"sync",children:"Recreate"}))}):Object(u.jsx)(O,{icon:"bell",onClick:()=>{b(Object(A.g)(r,e.id))},children:"Unsilence"}),"expired"!==h.state&&Object(u.jsx)(x.a,{to:Object(z.e)(`/alerting/silence/${e.id}/edit`,r),icon:"pen",tooltip:"edit"})]})]}),!i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("tr",{className:t,children:[F||(F=Object(u.jsx)("td",{})),q||(q=Object(u.jsx)("td",{children:"Comment"})),Object(u.jsx)("td",{colSpan:I,children:v})]}),Object(u.jsxs)("tr",{className:t,children:[E||(E=Object(u.jsx)("td",{})),L||(L=Object(u.jsx)("td",{children:"Schedule"})),Object(u.jsx)("td",{colSpan:I,children:`${null==S?void 0:S.format("YYYY-MM-DD HH:mm")} - ${null==w?void 0:w.format("YYYY-MM-DD HH:mm")}`})]}),Object(u.jsxs)("tr",{className:t,children:[Y||(Y=Object(u.jsx)("td",{})),_||(_=Object(u.jsx)("td",{children:"Duration"})),Object(u.jsx)("td",{colSpan:I,children:N})]}),Object(u.jsxs)("tr",{className:t,children:[P||(P=Object(u.jsx)("td",{})),U||(U=Object(u.jsx)("td",{children:"Created by"})),Object(u.jsx)("td",{colSpan:I,children:y})]}),!!n.length&&Object(u.jsxs)("tr",{className:Object(l.cx)(t,m.alertRulesCell),children:[V||(V=Object(u.jsx)("td",{})),K||(K=Object(u.jsx)("td",{children:"Affected alerts"})),Object(u.jsx)("td",{colSpan:I,children:Object(u.jsx)(k,{silencedAlerts:n})})]})]})]})},Q=n("QQVG");const X=({alertManagerSourceName:e})=>Z.a.isEditor?Object(u.jsx)(Q.a,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:Object(z.e)("alerting/silence/new",e),buttonTitle:"New silence"}):G||(G=Object(u.jsx)(c.CallToActionCard,{callToActionElement:Object(u.jsx)("div",{}),message:"No silences found."}));var W,ee,te,ne,ae,ce,se,re,ie,le,oe=n("9f6O");const de=e=>({topButtonContainer:l.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:l.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:l.css`
    width: 110px;
  `,colMatchers:l.css`
    width: 50%;
  `,callout:l.css`
    background-color: ${e.colors.background.secondary};
    border-top: 3px solid ${e.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${e.spacing(2)};

    & > * {
      margin-left: ${e.spacing(1)};
    }
  `,calloutIcon:l.css`
    color: ${e.colors.info.text};
  `});var je=({silences:e,alertManagerAlerts:t,alertManagerSourceName:n})=>{const s=Object(c.useStyles2)(de),r=Object(c.useStyles2)(p.a),[i]=Object(oe.a)(),l=Object(a.useMemo)(()=>{const t=null==i?void 0:i.silenceIds;return"string"==typeof t?e.filter(e=>t.split(",").includes(e.id)):e},[i,e]);return Object(u.jsxs)(u.Fragment,{children:[!!e.length&&Object(u.jsxs)(u.Fragment,{children:[Z.a.isEditor&&Object(u.jsx)("div",{className:s.topButtonContainer,children:Object(u.jsx)(c.Link,{href:Object(z.e)("/alerting/silence/new",n),children:Object(u.jsx)(c.Button,{className:s.addNewSilence,icon:"plus",children:"New Silence"})})}),Object(u.jsxs)("table",{className:r.table,children:[Object(u.jsxs)("colgroup",{children:[Object(u.jsx)("col",{className:r.colExpand}),Object(u.jsx)("col",{className:s.colState}),Object(u.jsx)("col",{className:s.colMatchers}),W||(W=Object(u.jsx)("col",{})),ee||(ee=Object(u.jsx)("col",{})),Z.a.isEditor&&(te||(te=Object(u.jsx)("col",{})))]}),Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[ne||(ne=Object(u.jsx)("th",{})),ae||(ae=Object(u.jsx)("th",{children:"State"})),ce||(ce=Object(u.jsx)("th",{children:"Matching labels"})),se||(se=Object(u.jsx)("th",{children:"Alerts"})),re||(re=Object(u.jsx)("th",{children:"Schedule"})),Z.a.isEditor&&(ie||(ie=Object(u.jsx)("th",{children:"Action"})))]})}),Object(u.jsx)("tbody",{children:l.map((e,a)=>{const c=(s=e.id,t.filter(e=>e.status.silencedBy.includes(s)));var s;return Object(u.jsx)(J,{silence:e,className:a%2==0?r.evenRow:void 0,silencedAlerts:c,alertManagerSourceName:n},e.id)})})]}),Object(u.jsxs)("div",{className:s.callout,children:[Object(u.jsx)(c.Icon,{className:s.calloutIcon,name:"info-circle"}),le||(le=Object(u.jsx)("span",{children:"Expired silences are automatically deleted after 5 days."}))]})]}),!e.length&&Object(u.jsx)(X,{alertManagerSourceName:n})]})},ue=n("dEXO"),be=n("w+lj"),me=n("d6cI"),Oe=n("fXZ9"),he=n("rYwU"),ge=n("t8hP"),xe=n("LvDl"),pe=n("NKCw");function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const ve=e=>({wrapper:l.css`
      margin-top: ${e.spacing(2)};
    `,row:l.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${e.colors.background.secondary};
      padding: ${e.spacing(1)} ${e.spacing(1)} 0 ${e.spacing(1)};
      & > * + * {
        margin-left: ${e.spacing(2)};
      }
    `,removeButton:l.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,matchers:l.css`
      max-width: 585px;
      margin: ${e.spacing(1)} 0;
      padding-top: ${e.spacing(.5)};
    `});var ye=({className:e})=>{const t=Object(c.useStyles2)(ve),n=Object(pe.h)(),{register:a,formState:{errors:s}}=n,{fields:r=[],append:i,remove:o}=Object(pe.f)({name:"matchers"});return Object(u.jsx)("div",{className:Object(l.cx)(e,t.wrapper),children:Object(u.jsx)(c.Field,{label:"Matching labels",required:!0,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:t.matchers,children:r.map((e,n)=>{var i,l,d,j,b,m,O,h,g,x;return Object(u.jsxs)("div",{className:t.row,children:[Object(u.jsx)(c.Field,{label:"Label",invalid:!(null==s||null===(i=s.matchers)||void 0===i||null===(l=i[n])||void 0===l||!l.name),error:null==s||null===(d=s.matchers)||void 0===d||null===(j=d[n])||void 0===j||null===(b=j.name)||void 0===b?void 0:b.message,children:Object(u.jsx)(c.Input,fe({},a(`matchers.${n}.name`,{required:{value:!0,message:"Required."}}),{defaultValue:e.name,placeholder:"label"}))}),Object(u.jsx)(c.Field,{label:"Value",invalid:!(null==s||null===(m=s.matchers)||void 0===m||null===(O=m[n])||void 0===O||!O.value),error:null==s||null===(h=s.matchers)||void 0===h||null===(g=h[n])||void 0===g||null===(x=g.value)||void 0===x?void 0:x.message,children:Object(u.jsx)(c.Input,fe({},a(`matchers.${n}.value`,{required:{value:!0,message:"Required."}}),{defaultValue:e.value,placeholder:"value"}))}),Object(u.jsx)(c.Field,{label:"Regex",children:Object(u.jsx)(c.Checkbox,fe({},a(`matchers.${n}.isRegex`),{defaultChecked:e.isRegex}))}),Object(u.jsx)(c.Field,{label:"Equal",children:Object(u.jsx)(c.Checkbox,fe({},a(`matchers.${n}.isEqual`),{defaultChecked:e.isEqual}))}),r.length>1&&Object(u.jsx)(c.IconButton,{className:t.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>o(n),children:"Remove"})]},""+e.id)})}),Object(u.jsx)(c.Button,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{i({name:"",value:"",isRegex:!1,isEqual:!0})},children:"Add matcher"})]})})})};const Se=()=>{const{control:e,getValues:t}=Object(pe.h)(),n=Object(c.useStyles)(we),{field:{onChange:a,value:s},fieldState:{invalid:r}}=Object(pe.e)({name:"startsAt",control:e,rules:{validate:e=>t().endsAt>e}}),{field:{onChange:i,value:l},fieldState:{invalid:d}}=Object(pe.e)({name:"endsAt",control:e,rules:{validate:e=>t().startsAt<e}}),{field:{onChange:j,value:b}}=Object(pe.e)({name:"timeZone",control:e}),m=r||d,O=Object(o.dateTime)(s),h=Object(o.dateTime)(l);return Object(u.jsx)(c.Field,{className:n.timeRange,label:"Silence start and end",error:m?"To is before or the same as from":"",invalid:m,children:Object(u.jsx)(c.TimeRangeInput,{value:{from:O,to:h,raw:{from:O,to:h}},timeZone:b,onChange:e=>{a(Object(o.dateTime)(e.from)),i(Object(o.dateTime)(e.to))},onChangeTimeZone:e=>j(e),hideTimeZone:!1,hideQuickRanges:!0})})},we=e=>({timeRange:l.css`
    width: 400px;
  `});var Ne,Ie,ke,Ae,Ce=n("SGmB"),De=n("Sp9v");function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const Me=e=>{const t={},{matchers:n,comment:a}=e;if("string"==typeof n){const e=n.split(",").filter(e=>!!e.trim()).map(e=>Object(De.e)(e.trim()));e.length&&(t.matchers=e)}return"string"==typeof a&&(t.comment=a),t},$e=e=>({field:l.css`
    margin: ${e.spacing.sm} 0;
  `,textArea:l.css`
    width: 600px;
  `,createdBy:l.css`
    width: 200px;
  `,flexRow:l.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${e.spacing.sm};
    }
  `});var Re,Be,Fe=({silence:e,alertManagerSourceName:t})=>{var n,r;const[i]=Object(oe.a)(),d=Object(a.useMemo)(()=>((e,t)=>{const n=new Date;if(t){const e=Date.parse(t.endsAt)<Date.now()?{start:n,end:Object(o.addDurationToDate)(n,{hours:2})}:{start:new Date(t.startsAt),end:new Date(t.endsAt)};return{id:t.id,startsAt:e.start.toISOString(),endsAt:e.end.toISOString(),comment:t.comment,createdBy:t.createdBy,duration:Object(o.intervalToAbbreviatedDurationString)(e),isRegex:!1,matchers:t.matchers||[],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone}}{const t=Object(o.addDurationToDate)(n,{hours:2});return Te({id:"",startsAt:n.toISOString(),endsAt:t.toISOString(),comment:"",createdBy:ge.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",isRegex:!1,isEqual:!0}],matcherName:"",matcherValue:"",timeZone:o.DefaultTimeZone},Me(e))}})(i,e),[e,i]),j=Object(pe.g)({defaultValues:d}),b=Object(s.useDispatch)(),m=Object(c.useStyles)($e),{loading:O}=Object(be.a)(e=>e.updateSilence);Object(Ce.a)(e=>e.unifiedAlerting.updateSilence);const{register:h,handleSubmit:g,formState:x,watch:p,setValue:f,clearErrors:v}=j,y=p("duration"),S=p("startsAt"),w=p("endsAt"),[N,I]=Object(a.useState)(y);return Object(he.a)(()=>{if(Object(o.isValidDate)(S)&&Object(o.isValidDate)(w))if(y!==N)f("endsAt",Object(o.dateTime)(Object(o.addDurationToDate)(new Date(S),Object(o.parseDuration)(y))).toISOString()),I(y);else{const e=new Date(S).valueOf();if(new Date(w).valueOf()>e){const e=Object(o.intervalToAbbreviatedDurationString)({start:new Date(S),end:new Date(w)});f("duration",e),I(e)}}},700,[v,y,w,N,f,S]),Object(u.jsx)(pe.c,Te({},j,{children:Object(u.jsxs)("form",{onSubmit:g(e=>{const{id:n,startsAt:a,endsAt:c,comment:s,createdBy:r,matchers:i}=e,l=Object(xe.pickBy)({id:n,startsAt:a,endsAt:c,comment:s,createdBy:r,matchers:i},e=>!!e);b(Object(A.b)({alertManagerSourceName:t,payload:l,exitOnSave:!0,successMessage:"Silence "+(l.id?"updated":"created")}))}),children:[Object(u.jsxs)(c.FieldSet,{label:""+(e?"Recreate silence":"Create silence"),children:[Object(u.jsxs)("div",{className:m.flexRow,children:[Ne||(Ne=Object(u.jsx)(Se,{})),Object(u.jsx)(c.Field,{label:"Duration",invalid:!!x.errors.duration,error:x.errors.duration&&("required"===x.errors.duration.type?"Required field":x.errors.duration.message),children:Object(u.jsx)(c.Input,Te({className:m.createdBy},h("duration",{validate:e=>0===Object.keys(Object(o.parseDuration)(e)).length?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),{id:"duration"}))})]}),Ie||(Ie=Object(u.jsx)(ye,{})),Object(u.jsx)(c.Field,{className:Object(l.cx)(m.field,m.textArea),label:"Comment",required:!0,error:null===(n=x.errors.comment)||void 0===n?void 0:n.message,invalid:!!x.errors.comment,children:Object(u.jsx)(c.TextArea,Te({},h("comment",{required:{value:!0,message:"Required."}})))}),Object(u.jsx)(c.Field,{className:Object(l.cx)(m.field,m.createdBy),label:"Created by",required:!0,error:null===(r=x.errors.createdBy)||void 0===r?void 0:r.message,invalid:!!x.errors.createdBy,children:Object(u.jsx)(c.Input,Te({},h("createdBy",{required:{value:!0,message:"Required."}})))})]}),Object(u.jsxs)("div",{className:m.flexRow,children:[O&&(ke||(ke=Object(u.jsx)(c.Button,{disabled:!0,icon:"fa fa-spinner",variant:"primary",children:"Saving..."}))),!O&&(Ae||(Ae=Object(u.jsx)(c.Button,{type:"submit",children:"Submit"}))),Object(u.jsx)(c.LinkButton,{href:Object(z.e)("alerting/silences",t),variant:"secondary",fill:"outline",children:"Cancel"})]})]})}))},qe=n("lcDh");t.default=Object(c.withErrorBoundary)(()=>{var e,t;const[n,l]=Object(ue.a)(),o=Object(s.useDispatch)(),d=Object(be.a)(e=>e.silences),j=Object(be.a)(e=>e.amAlerts),b=n?j[n]||Oe.c:void 0,m=Object(r.l)().pathname.endsWith("/alerting/silences");Object(a.useEffect)(()=>{function e(){n&&(o(Object(A.s)(n)),o(Object(A.l)(n)))}e();const t=setInterval(()=>e,me.g);return()=>{clearInterval(t)}},[n,o]);const{result:O,loading:h,error:g}=n&&d[n]||Oe.c,x=Object(a.useCallback)(e=>O&&O.find(t=>t.id===e),[O]);return n?Object(u.jsxs)(i.a,{pageId:"silences",children:[Object(u.jsx)(qe.a,{disabled:!m,current:n,onChange:l}),g&&!h&&Object(u.jsx)(c.Alert,{severity:"error",title:"Error loading silences",children:g.message||"Unknown error."}),(null==b?void 0:b.error)&&!(null!=b&&b.loading)&&Object(u.jsx)(c.Alert,{severity:"error",title:"Error loading alert manager alerts",children:(null===(e=b.error)||void 0===e?void 0:e.message)||"Unknown error."}),h&&(Be||(Be=Object(u.jsx)(c.LoadingPlaceholder,{text:"loading silences..."}))),O&&!g&&Object(u.jsxs)(r.g,{children:[Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silences",children:Object(u.jsx)(je,{silences:O,alertManagerAlerts:null!==(t=null==b?void 0:b.result)&&void 0!==t?t:[],alertManagerSourceName:n})}),Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silence/new",children:Object(u.jsx)(Fe,{alertManagerSourceName:n})}),Object(u.jsx)(r.d,{exact:!0,path:"/alerting/silence/:id/edit",children:({match:e})=>(null==e?void 0:e.params.id)&&Object(u.jsx)(Fe,{silence:x(e.params.id),alertManagerSourceName:n})})]})]}):Re||(Re=Object(u.jsx)(r.c,{to:"/alerting/silences"}))},{style:"page"})},Jv5Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),c=n("kDLi"),s=n("vF1F"),r=n("A5n/"),i=n("Sp9v"),l=n("nKUr");const o=({matchers:e,onRemoveLabel:t})=>{const n=Object(c.useStyles)(d),s=Object(a.useCallback)(e=>{t&&t(e)},[t]);return Object(l.jsx)("div",{className:n.wrapper,children:e.map((e,n)=>{const{name:a,value:c}=e;return Object(l.jsx)(r.a,{labelKey:a,value:c,operator:Object(i.d)(e),onRemoveLabel:t?()=>s(n):void 0},`${a}-${c}-${n}`)})})},d=e=>({wrapper:s.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},Kwdr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("kDLi"),c=(n("q1tI"),n("vF1F")),s=n("55Ip"),r=n("nKUr");const i=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o=e=>{var t;let{tooltip:n,icon:o,to:j,target:u,onClick:b,className:m,tooltipPlacement:O="top"}=e,h=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,i);const g=Object(r.jsx)(a.Icon,l({className:Object(c.cx)(Object(a.useStyles)(d),m),onClick:b,name:o},h));return Object(r.jsx)(a.Tooltip,{content:n,placement:O,children:j?t||(t=Object(r.jsx)(s.Link,{to:j,target:u,children:g})):g})},d=()=>c.css`
  cursor: pointer;
`},P5Cx:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("vF1F");const c=e=>({table:a.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td {
      padding: 0 ${e.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:a.css`
    background-color: ${e.colors.background.primary};
  `,colExpand:a.css`
    width: 36px;
  `,actionsCell:a.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},"R9t/":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("Wxkr"),c=(n("q1tI"),n("sIux")),s=n("nKUr");const r={[a.a.Active]:"bad",[a.a.Unprocessed]:"neutral",[a.a.Suppressed]:"info"},i=({state:e})=>Object(s.jsx)(c.a,{state:r[e],children:e})},SGmB:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),c=n("/MKj"),s=n("zVNn");function r(e){const t=Object(c.useDispatch)(),n=Object(a.useRef)(e);n.current=e,Object(a.useEffect)(()=>()=>{t(Object(s.a)({stateSelector:n.current}))},[t])}},URgk:function(e,t,n){(function(e){var a=void 0!==e&&e||"undefined"!=typeof self&&self||window,c=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(c.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new s(c.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var a,c,s,r,i,l=1,o={},d=!1,j=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?a=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){m(e.data)},a=function(e){s.port2.postMessage(e)}):j&&"onreadystatechange"in j.createElement("script")?(c=j.documentElement,a=function(e){var t=j.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,c.removeChild(t),t=null},c.appendChild(t)}):a=function(e){setTimeout(m,0,e)}:(r="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(r)&&m(+t.data.slice(r.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),a=function(t){e.postMessage(r+t,"*")}),u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var c={callback:e,args:t};return o[l]=c,a(l),l++},u.clearImmediate=b}function b(e){delete o[e]}function m(e){if(d)setTimeout(m,0,e);else{var t=o[e];if(t){d=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{b(e),d=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},dEXO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("9f6O"),c=n("SMGL"),s=n("q1tI"),r=n("d6cI"),i=n("Jzaf");function l(e){return e===i.b||!!Object(i.c)().find(t=>t.name===e)}function o(){const[e,t]=Object(a.a)(),n=Object(s.useCallback)(e=>{l(e)&&(e===i.b?(c.a.delete(r.a),t({[r.b]:null})):(c.a.set(r.a,e),t({[r.b]:e})))},[t]),o=e[r.b];if(o&&"string"==typeof o)return l(o)?[o,n]:[void 0,n];const d=c.a.get(r.a);return d&&"string"==typeof d&&l(d)?(n(d),[d,n]):[i.b,n]}},lcDh:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("Jzaf"),c=n("q1tI"),s=n("kDLi"),r=n("pz/R"),i=n("vF1F"),l=n("nKUr");const o=({onChange:e,current:t,disabled:n=!1})=>{const i=Object(s.useStyles2)(d),o=Object(c.useMemo)(()=>[{label:"Grafana",value:a.b,imgUrl:"public/img/grafana_icon.svg",meta:{}},...Object(r.a)().filter(e=>e.type===a.a.Alertmanager).map(e=>({label:e.name.substr(0,37),value:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}))],[]);return 1===o.length?null:Object(l.jsx)(s.Field,{className:i.field,label:n?"Alertmanager":"Choose Alertmanager",disabled:n,"data-testid":"alertmanager-picker",children:Object(l.jsx)(s.Select,{menuShouldPortal:!0,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:t=>t.value&&e(t.value),options:o,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:t,getOptionLabel:e=>e.label})})},d=e=>({field:i.css`
    margin-bottom: ${e.spacing(4)};
  `})},"sbt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("q1tI");var a=n("ZGyg"),c=n("lzJ5"),s=n("/MKj"),r=n("nKUr");const i=({children:e,pageId:t,isLoading:n})=>{const i=Object(c.a)(Object(s.useSelector)(e=>e.navIndex),t);return Object(r.jsx)(a.b,{navModel:i,children:Object(r.jsx)(a.b.Contents,{isLoading:n,children:e})})}},"te+q":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("q1tI");var a=n("vF1F"),c=n("kDLi"),s=n("nKUr");const r=["isCollapsed","onToggle","className","text","size"];function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const l=e=>{let{isCollapsed:t,onToggle:n,className:l,text:d,size:j="xl"}=e,u=function(e,t){if(null==e)return{};var n,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);const b=Object(c.useStyles)(o);return Object(s.jsxs)("button",i({className:Object(a.cx)(b.expandButton,l),onClick:()=>n(!t)},u,{children:[Object(s.jsx)(c.Icon,{size:j,name:t?"angle-right":"angle-down"}),d]}))},o=()=>({expandButton:a.css`
    background: none;
    border: none;

    outline: none !important;

    display: inline-flex;
    align-items: center;

    svg {
      margin-bottom: 0;
    }
  `})}}]);
//# sourceMappingURL=AlertSilences.62c612232a976d8836f5.js.map