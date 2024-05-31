(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{"4vLh":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"f",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"d",(function(){return j})),r.d(t,"c",(function(){return b}));var n=r("Obii"),a=r("t8hP"),s=r("HJRA"),c=r("qOGI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e){return async t=>{t(Object(c.b)());const r=await Object(a.getBackendSrv)().get("/api/alerts",e);t(Object(c.c)(r))}}function l(e,t){return async r=>{await Object(a.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);r(i({state:(a.locationService.getSearchObject().state||"all").toString()}))}}function u(e){return async t=>{try{await Object(a.getBackendSrv)().post("/api/alert-notifications",e),s.a.emit(n.AppEvents.alertSuccess,["Notification created"]),a.locationService.push("/alerting/notifications")}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function d(e){return async t=>{try{await Object(a.getBackendSrv)().put("/api/alert-notifications/"+e.id,e),s.a.emit(n.AppEvents.alertSuccess,["Notification updated"])}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function p(e){return async(t,r)=>{const n=r().notificationChannel.notificationChannel;await Object(a.getBackendSrv)().post("/api/alert-notifications/test",o({id:n.id},e))}}function j(){return async e=>{const t=(await Object(a.getBackendSrv)().get("/api/alert-notifiers")).sort((e,t)=>e.name>t.name?1:-1);e(Object(c.f)(t))}}function b(e){return async t=>{await t(j());const r=await Object(a.getBackendSrv)().get("/api/alert-notifications/"+e);t(Object(c.d)(r))}}},"9f6O":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c}));var n=r("t8hP"),a=r("q1tI"),s=r("Ty5D");function c(){const{search:t}=Object(s.l)();return[Object(a.useMemo)(()=>Object(n.locationSearchToObject)(t||""),[t]),Object(a.useCallback)((t,r)=>e(()=>n.locationService.partial(t,r)),[])]}}).call(this,r("URgk").setImmediate)},JRIL:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"AlertRuleListUnconnected",(function(){return k}));var n,a,s,c=r("q1tI"),o=r("0cfB"),i=r("/MKj"),l=r("ZGyg"),u=r("YAXX"),d=r("Xmxp"),p=r("lzJ5"),j=r("4vLh"),b=r("lPMX"),g=r("EKT6"),m=r("t8hP"),h=r("qOGI"),O=r("kDLi"),f=r("xAj+"),v=r("qo+S"),x=r("nKUr");function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const w={getAlertRulesAsync:j.b,setSearchQuery:h.g,togglePauseAlertRule:j.f},S=Object(i.connect)((function(e){return{navModel:Object(p.a)(e.navIndex,"alert-list"),alertRules:Object(b.a)(e),search:Object(b.b)(e.alertRules),isLoading:e.alertRules.isLoading}}),w);class k extends c.PureComponent{constructor(...e){super(...e),y(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),y(this,"onStateFilterChanged",e=>{m.locationService.partial({state:e.value})}),y(this,"onOpenHowTo",()=>{d.b.publish(new f.ShowModalReactEvent({component:v.a}))}),y(this,"onSearchQueryChange",e=>{this.props.setSearchQuery(e)}),y(this,"onTogglePause",e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})}),y(this,"alertStateFilterOption",({text:e,value:t})=>Object(x.jsx)("option",{value:t,children:e},t))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:t,search:r,isLoading:c}=this.props;return Object(x.jsx)(l.b,{navModel:e,children:Object(x.jsxs)(l.b.Contents,{isLoading:c,children:[Object(x.jsxs)("div",{className:"page-action-bar",children:[Object(x.jsx)("div",{className:"gf-form gf-form--grow",children:Object(x.jsx)(g.a,{placeholder:"Search alerts",value:r,onChange:this.onSearchQueryChange})}),Object(x.jsxs)("div",{className:"gf-form",children:[n||(n=Object(x.jsx)("label",{className:"gf-form-label",children:"States"})),Object(x.jsx)("div",{className:"width-13",children:Object(x.jsx)(O.Select,{menuShouldPortal:!0,options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),a||(a=Object(x.jsx)("div",{className:"page-action-bar__spacer"})),m.config.featureToggles.ngalert&&(s||(s=Object(x.jsx)(O.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),Object(x.jsx)(O.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),Object(x.jsx)(O.VerticalGroup,{spacing:"none",children:t.map(e=>Object(x.jsx)(u.a,{rule:e,search:r,onTogglePause:()=>this.onTogglePause(e)},e.id))})]})})}}t.default=Object(o.hot)(e)(S(k))}.call(this,r("3UD+")(e))},Kwdr:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("kDLi"),a=(r("q1tI"),r("vF1F")),s=r("55Ip"),c=r("nKUr");const o=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const l=e=>{var t;let{tooltip:r,icon:l,to:d,target:p,onClick:j,className:b,tooltipPlacement:g="top"}=e,m=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);const h=Object(c.jsx)(n.Icon,i({className:Object(a.cx)(Object(n.useStyles)(u),b),onClick:j,name:l},m));return Object(c.jsx)(n.Tooltip,{content:r,placement:g,children:d?t||(t=Object(c.jsx)(s.Link,{to:d,target:p,children:h})):h})},u=()=>a.css`
  cursor: pointer;
`},LwrX:function(e,t,r){"use strict";r.r(t);var n,a,s=r("t8hP"),c=r("Obii"),o=r("kDLi"),i=r("q1tI"),l=r.n(i),u=r("/MKj"),d=r("sbt+"),p=r("QQVG"),j=r("umNM"),b=r("nKUr");const g=()=>j.a.hasEditPermissionInFolders||j.a.isEditor?n||(n=Object(b.jsx)(p.a,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})):a||(a=Object(b.jsx)(o.CallToActionCard,{message:"No rules exist yet.",callToActionElement:Object(b.jsx)("div",{})}));var m=r("w+lj"),h=r("Jzaf"),O=r("IpGs"),f=r("8qpb"),v=r("9f6O"),x=r("rhRp"),y=r("Sp9v");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const S=e=>(t,r)=>{const n=r.groups.reduce(k(e),[]);return n.length&&t.push(w({},r,{groups:n})),t},k=e=>(t,r)=>{const n=r.rules.filter(t=>{if(e.dataSource&&Object(O.j)(t.rulerRule)&&!I(t.rulerRule,e))return!1;if(e.queryString){var r;const n=e.queryString.toLocaleLowerCase(),a=null===(r=t.name)||void 0===r?void 0:r.toLocaleLowerCase().includes(n),s=Object(y.f)(e.queryString),c=Object(y.c)(t.labels,s),o=t.promRule&&t.promRule.type===x.d.Alerting&&t.promRule.alerts&&t.promRule.alerts.some(e=>Object(y.c)(e.labels,s));if(!(a||c||o))return!1}return!!(!e.alertState||t.promRule&&Object(O.f)(t.promRule)&&t.promRule.state===e.alertState)});return n.length&&t.push(w({},r,{rules:n})),t},I=(e,t)=>!t.dataSource||!!e.grafana_alert.data.find(e=>{if(!e.datasourceUid)return!1;const r=Object(s.getDataSourceSrv)().getInstanceSettings(e.datasourceUid);return(null==r?void 0:r.name)===t.dataSource});var N,C,R,$,T,L=r("4Yfp"),F=r("vF1F"),P=r("O6qV"),M=r("d6cI"),E=r("LvDl");const q=[{icon:"folder",label:"Groups",value:"group"},{icon:"heart-rate",label:"State",value:"state"}],G=e=>({container:F.css`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${e.colors.border1};
      padding-bottom: ${e.spacing.sm};

      & > div {
        margin-bottom: ${e.spacing.sm};
      }
    `,inputWidth:F.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:F.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:F.css`
      justify-content: space-between;
    `,rowChild:F.css`
      margin-right: ${e.spacing.sm};
      margin-top: ${e.spacing.sm};
    `,tooltip:F.css`
      margin: 0 ${e.spacing.xs};
    `,clearButton:F.css`
      margin-top: ${e.spacing.sm};
    `});var A=()=>{const[e,t]=Object(v.a)(),[r,n]=Object(i.useState)(Math.floor(100*Math.random())),a="dataSource-"+r,c="queryString-"+r,{dataSource:l,alertState:u,queryString:d}=Object(f.d)(e),p=Object(o.useStyles)(G),j=Object.entries(x.c).map(([e,t])=>({label:Object(O.b)(t),value:t})),g=Object(E.debounce)(e=>{const r=e.target;t({queryString:r.value||null})},600),m=N||(N=Object(b.jsx)(o.Icon,{name:"search"}));return Object(b.jsxs)("div",{className:p.container,children:[Object(b.jsxs)("div",{className:p.inputWidth,children:[C||(C=Object(b.jsx)(o.Label,{children:"Select data source"})),Object(b.jsx)(s.DataSourcePicker,{alerting:!0,noDefault:!0,current:l,onChange:e=>{t({dataSource:e.name})}},a)]}),Object(b.jsxs)("div",{className:Object(F.cx)(p.flexRow,p.spaceBetween),children:[Object(b.jsxs)("div",{className:p.flexRow,children:[Object(b.jsxs)("div",{className:p.rowChild,children:[Object(b.jsxs)(o.Label,{children:[Object(b.jsx)(o.Tooltip,{content:R||(R=Object(b.jsxs)("div",{children:["Filter rules and alerts using label querying, ex:",Object(b.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:Object(b.jsx)(o.Icon,{name:"info-circle",className:p.tooltip})}),"Search by label"]}),Object(b.jsx)(o.Input,{className:p.inputWidth,prefix:m,onChange:g,defaultValue:d,placeholder:"Search","data-testid":"search-query-input"},c)]}),Object(b.jsxs)("div",{className:p.rowChild,children:[$||($=Object(b.jsx)(o.Label,{children:"State"})),Object(b.jsx)(o.RadioButtonGroup,{options:j,value:u,onChange:e=>{t({alertState:e})}})]}),Object(b.jsxs)("div",{className:p.rowChild,children:[T||(T=Object(b.jsx)(o.Label,{children:"View as"})),Object(b.jsx)(o.RadioButtonGroup,{options:q,value:String(e.view||"group"),onChange:e=>{t({view:e})}})]})]}),(l||u||d)&&Object(b.jsx)("div",{className:p.flexRow,children:Object(b.jsx)(o.Button,{className:p.clearButton,fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{t({alertState:null,queryString:null,dataSource:null}),n(r+1)},children:"Clear filters"})})]})]})},B=r("te+q"),_=r("RLby"),U=r("Kwdr"),D=r("xsuF"),z=r("PbtU"),K=r("P8sI"),J=r("dhqo"),H=r.n(J);const Q=({children:e,status:t})=>{const r=Object(o.useStyles2)(X);return Object(b.jsx)("span",{className:r[t],children:e||t})},X=e=>({[x.c.Inactive]:F.css`
    color: ${e.colors.success.text};
  `,[x.c.Pending]:F.css`
    color: ${e.colors.warning.text};
  `,[x.c.Firing]:F.css`
    color: ${e.colors.error.text};
  `,neutral:F.css`
    color: ${e.colors.text.secondary};
  `});var V,Y;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const Z={total:0,recording:0,[x.c.Firing]:0,[x.c.Pending]:0,[x.c.Inactive]:0,error:0},ee=({showInactive:e,showRecording:t,group:r,namespaces:n})=>{const a=Object(i.useMemo)(()=>{const e=W({},Z),t=t=>{var r,n;t.promRule&&Object(O.f)(t.promRule)&&(e[t.promRule.state]+=1),"err"!==(null===(r=t.promRule)||void 0===r?void 0:r.health)&&"error"!==(null===(n=t.promRule)||void 0===n?void 0:n.health)||(e.error+=1),(t.promRule&&Object(O.l)(t.promRule)||t.rulerRule&&Object(O.m)(t.rulerRule))&&(e.recording+=1),e.total+=1};return r&&r.rules.forEach(t),n&&n.forEach(e=>e.groups.forEach(e=>e.rules.forEach(t))),e},[r,n]),s=[];return a[x.c.Firing]&&s.push(Object(b.jsxs)(Q,{status:x.c.Firing,children:[a[x.c.Firing]," firing"]},"firing")),a.error&&s.push(Object(b.jsxs)(Q,{status:x.c.Firing,children:[a.error," errors"]},"errors")),a[x.c.Pending]&&s.push(Object(b.jsxs)(Q,{status:x.c.Pending,children:[a[x.c.Pending]," pending"]},"pending")),e&&a[x.c.Inactive]&&s.push(Object(b.jsxs)(Q,{status:"neutral",children:[a[x.c.Inactive]," normal"]},"inactive")),t&&a.recording&&s.push(Object(b.jsxs)(Q,{status:"neutral",children:[a.recording," recording"]},"recording")),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[a.total," ",H()("rule",a.total)]}),!!s.length&&Object(b.jsxs)(b.Fragment,{children:[V||(V=Object(b.jsx)("span",{children:": "})),s.reduce((e,t,r)=>e.length?[e,Object(b.jsx)(i.Fragment,{children:Y||(Y=Object(b.jsx)("span",{children:", "}))},r),t]:[t],[])]})]})};var te;const re=l.a.memo(({group:e,namespace:t})=>{var r;const{rulesSource:n}=t,a=Object(o.useStyles2)(ne),[s,c]=Object(i.useState)(!0),l=Object(D.a)(),u=null===(r=e.rules[0])||void 0===r?void 0:r.rulerRule,d=u&&Object(O.j)(u)&&u.grafana_alert.namespace_uid||void 0,{folder:p}=Object(K.a)(d),j=[];if(n===h.b)if(d){const e=`/dashboards/f/${d}/${z.a.slugifyForUrl(t.name)}`;null!=p&&p.canSave&&j.push(Object(b.jsx)(U.a,{icon:"pen",tooltip:"edit",to:e+"/settings",target:"__blank"},"edit")),null!=p&&p.canAdmin&&j.push(Object(b.jsx)(U.a,{icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}else l(n)&&j.push(te||(te=Object(b.jsx)(U.a,{icon:"pen",tooltip:"edit"},"edit")));const g=Object(h.j)(n)?`${t.name} > ${e.name}`:t.name;return Object(b.jsxs)("div",{className:a.wrapper,"data-testid":"rule-group",children:[Object(b.jsxs)("div",{className:a.header,"data-testid":"rule-group-header",children:[Object(b.jsx)(B.a,{className:a.collapseToggle,isCollapsed:s,onToggle:c,"data-testid":"group-collapse-toggle"}),Object(b.jsx)(o.Icon,{name:s?"folder-open":"folder"}),Object(h.j)(n)&&Object(b.jsx)(o.Tooltip,{content:n.name,placement:"top",children:Object(b.jsx)("img",{className:a.dataSourceIcon,src:n.meta.info.logos.small})}),Object(b.jsx)("h6",{className:a.heading,children:g}),Object(b.jsx)("div",{className:a.spacer}),Object(b.jsx)("div",{className:a.headerStats,children:Object(b.jsx)(ee,{showInactive:!1,group:e})}),!!j.length&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:a.actionsSeparator,children:"|"}),Object(b.jsx)("div",{className:a.actionIcons,children:j})]})]}),!s&&Object(b.jsx)(_.a,{showSummaryColumn:!0,className:a.rulesTable,showGuidelines:!0,rules:e.rules})]})});re.displayName="RulesGroup";const ne=e=>({wrapper:F.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:F.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:F.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:F.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:F.css`
    flex: 1;
  `,collapseToggle:F.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:F.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:F.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:F.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:F.css`
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `,rulesTable:F.css`
    margin-top: ${e.spacing(3)};
  `});var ae,se,ce,oe;const ie=({namespaces:e})=>{const t=Object(o.useStyles)(le),r=Object(m.a)(e=>e.promRules),n=Object(i.useMemo)(h.g,[]),a=Object(i.useMemo)(()=>n.filter(e=>{var t;return null===(t=r[e.name])||void 0===t?void 0:t.loading}),[r,n]);return Object(b.jsxs)("section",{className:t.wrapper,children:[Object(b.jsxs)("div",{className:t.sectionHeader,children:[ae||(ae=Object(b.jsx)("h5",{children:"Cortex / Loki"})),a.length?Object(b.jsx)(o.LoadingPlaceholder,{className:t.loader,text:`Loading rules from ${a.length} ${H()("source",a.length)}`}):se||(se=Object(b.jsx)("div",{}))]}),e.map(e=>{const{groups:t,rulesSource:r}=e;return t.map(t=>Object(b.jsx)(re,{group:t,namespace:e},`${Object(h.i)(r)}-${name}-${t.name}`))}),0===(null==e?void 0:e.length)&&!!n.length&&(ce||(ce=Object(b.jsx)("p",{children:"No rules found."}))),!n.length&&(oe||(oe=Object(b.jsx)("p",{children:"There are no Prometheus or Loki datas sources configured."})))]})},le=e=>({loader:F.css`
    margin-bottom: 0;
  `,sectionHeader:F.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:F.css`
    margin-bottom: ${e.spacing.xl};
  `});var ue,de,pe,je=r("fXZ9");const be=({namespaces:e})=>{const t=Object(o.useStyles)(ge),{loading:r}=Object(m.a)(e=>e.promRules[h.b]||je.c);return Object(b.jsxs)("section",{className:t.wrapper,children:[Object(b.jsxs)("div",{className:t.sectionHeader,children:[ue||(ue=Object(b.jsx)("h5",{children:"Grafana"})),r?Object(b.jsx)(o.LoadingPlaceholder,{className:t.loader,text:"Loading..."}):de||(de=Object(b.jsx)("div",{}))]}),null==e?void 0:e.map(e=>e.groups.map(t=>Object(b.jsx)(re,{group:t,namespace:e},`${e.name}-${t.name}`))),0===(null==e?void 0:e.length)&&(pe||(pe=Object(b.jsx)("p",{children:"No rules found."})))]})},ge=e=>({loader:F.css`
    margin-bottom: 0;
  `,sectionHeader:F.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:F.css`
    margin-bottom: ${e.spacing.xl};
  `});function me(){return(me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const he=({rules:e,state:t,defaultCollapsed:r=!1})=>{const[n,a]=Object(i.useState)(r),s=Object(o.useStyles2)(Oe);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h4",{className:s.header,children:[Object(b.jsx)(B.a,{className:s.collapseToggle,size:"xxl",isCollapsed:n,onToggle:()=>a(!n)}),Object(O.b)(t)," (",e.length,")"]}),!n&&Object(b.jsx)(_.a,{className:s.rulesTable,rules:e,showGroupColumn:!0})]})},Oe=e=>({collapseToggle:F.css`
    vertical-align: middle;
  `,header:F.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:F.css`
    margin-top: ${e.spacing(3)};
  `});var fe,ve,xe,ye=r("Ty5D");const we={groups:({namespaces:e})=>{const[t,r]=Object(i.useMemo)(()=>{const t=e.map(e=>me({},e,{groups:e.groups.sort((e,t)=>e.name.localeCompare(t.name))})).sort((e,t)=>e.name.localeCompare(t.name));return[t.filter(e=>Object(h.k)(e.rulesSource)),t.filter(e=>Object(h.j)(e.rulesSource))]},[e]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(be,{namespaces:t}),Object(b.jsx)(ie,{namespaces:r})]})},state:({namespaces:e})=>{const t=Object(f.d)(Object(v.a)()[0]),r=Object(i.useMemo)(()=>{const t={[x.c.Firing]:[],[x.c.Inactive]:[],[x.c.Pending]:[]};return e.forEach(e=>e.groups.forEach(e=>e.rules.forEach(e=>{e.promRule&&Object(O.f)(e.promRule)&&t[e.promRule.state].push(e)}))),Object.values(t).forEach(e=>e.sort((e,t)=>e.name.localeCompare(t.name))),t},[e]);return Object(b.jsxs)(b.Fragment,{children:[(!t.alertState||t.alertState===x.c.Firing)&&Object(b.jsx)(he,{state:x.c.Firing,rules:r[x.c.Firing]}),(!t.alertState||t.alertState===x.c.Pending)&&Object(b.jsx)(he,{state:x.c.Pending,rules:r[x.c.Pending]}),(!t.alertState||t.alertState===x.c.Inactive)&&Object(b.jsx)(he,{defaultCollapsed:t.alertState!==x.c.Inactive,state:x.c.Inactive,rules:r[x.c.Inactive]})]})}},Se=Object(o.withErrorBoundary)(()=>{var e,t;const r=Object(u.useDispatch)(),n=Object(o.useStyles)(ke),a=Object(i.useMemo)(h.d,[]),s=Object(ye.l)(),[l]=Object(v.a)(),p=we[l.view]?l.view:"groups",x=we[p];Object(i.useEffect)(()=>{r(Object(L.j)());const e=setInterval(()=>r(Object(L.j)()),M.f);return()=>{clearInterval(e)}},[r]);const y=Object(m.a)(e=>e.promRules),w=Object(m.a)(e=>e.rulerRules),k=a.some(e=>{var t,r;return(null===(t=y[e])||void 0===t?void 0:t.dispatched)||(null===(r=w[e])||void 0===r?void 0:r.dispatched)}),I=a.some(e=>{var t,r;return(null===(t=y[e])||void 0===t?void 0:t.loading)||(null===(r=w[e])||void 0===r?void 0:r.loading)}),N=a.some(e=>{var t,r,n,a,s;return(null===(t=y[e])||void 0===t||null===(r=t.result)||void 0===r?void 0:r.length)&&!(null!==(n=y[e])&&void 0!==n&&n.error)||Object.keys((null===(a=w[e])||void 0===a?void 0:a.result)||{}).length&&!(null!==(s=w[e])&&void 0!==s&&s.error)}),[C,R]=Object(i.useMemo)(()=>[y,w].map(e=>Object(h.g)().reduce((t,r)=>{var n;const a=null===(n=e[r.name])||void 0===n?void 0:n.error;return e[r.name]&&a&&!Object(O.n)(e[r.name])?[...t,{dataSource:r,error:a}]:t},[])),[y,w]),$=null===(e=y[h.b])||void 0===e?void 0:e.error,T=null===(t=w[h.b])||void 0===t?void 0:t.error,F=k&&!I&&!N,E=(e=>{const[t]=Object(v.a)(),r=Object(f.d)(t);return Object(i.useMemo)(()=>{if(!r.queryString&&!r.dataSource&&!r.alertState)return e;return e.filter(({rulesSource:e})=>!r.dataSource||!Object(h.j)(e)||e.name===r.dataSource).reduce(S(r),[])},[e,r])})(Object(P.a)());return Object(b.jsxs)(d.a,{pageId:"alert-list",isLoading:I&&!N,children:[(C.length||R.length||$)&&Object(b.jsxs)(o.Alert,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",children:[$&&Object(b.jsxs)("div",{children:["Failed to load Grafana rules state: ",$.message||"Unknown error."]}),T&&Object(b.jsxs)("div",{children:["Failed to load Grafana rules config: ",T.message||"Unknown error."]}),C.map(({dataSource:e,error:t})=>Object(b.jsxs)("div",{children:["Failed to load rules state from ",Object(b.jsx)("a",{href:"datasources/edit/"+e.uid,children:e.name}),":"," ",t.message||"Unknown error."]},e.name)),R.map(({dataSource:e,error:t})=>Object(b.jsxs)("div",{children:["Failed to load rules config from ",Object(b.jsx)("a",{href:"datasources/edit/${dataSource.uid}",children:e.name}),":"," ",t.message||"Unknown error."]},e.name))]}),!F&&Object(b.jsxs)(b.Fragment,{children:[fe||(fe=Object(b.jsx)(A,{})),Object(b.jsx)("div",{className:n.break}),Object(b.jsxs)("div",{className:n.buttonsContainer,children:[Object(b.jsx)(ee,{showInactive:!0,showRecording:!0,namespaces:E}),ve||(ve=Object(b.jsx)("div",{})),(j.a.hasEditPermissionInFolders||j.a.isEditor)&&Object(b.jsx)(o.LinkButton,{href:c.urlUtil.renderUrl("alerting/new",{returnTo:s.pathname+s.search}),icon:"plus",children:"New alert rule"})]})]}),F&&(xe||(xe=Object(b.jsx)(g,{}))),N&&Object(b.jsx)(x,{namespaces:E})]})},{style:"page"}),ke=e=>({break:F.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing.md};
    border-bottom: solid 1px ${e.colors.border2};
  `,iconError:F.css`
    color: ${e.palette.red};
    margin-right: ${e.spacing.md};
  `,buttonsContainer:F.css`
    margin-bottom: ${e.spacing.md};
    display: flex;
    justify-content: space-between;
  `});var Ie=r("JRIL");t.default=s.config.featureToggles.ngalert?Se:Ie.default},QGdL:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("vF1F"),a=r("kDLi"),s=(r("q1tI"),r("wDOy")),c=r("nKUr");const o=["renderExpandedContent"];function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const l=e=>{let{renderExpandedContent:t}=e,r=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);const l=Object(a.useStyles2)(u);return Object(c.jsx)(s.a,i({renderExpandedContent:t?(e,r,a)=>Object(c.jsxs)(c.Fragment,{children:[!(r===a.length-1)&&Object(c.jsx)("div",{className:Object(n.cx)(l.contentGuideline,l.guideline)}),t(e,r,a)]}):void 0,renderPrefixHeader:()=>Object(c.jsx)("div",{className:l.relative,children:Object(c.jsx)("div",{className:Object(n.cx)(l.headerGuideline,l.guideline)})}),renderPrefixCell:(e,t,r)=>Object(c.jsxs)("div",{className:l.relative,children:[Object(c.jsx)("div",{className:Object(n.cx)(l.topGuideline,l.guideline)}),!(t===r.length-1)&&Object(c.jsx)("div",{className:Object(n.cx)(l.bottomGuideline,l.guideline)})]})},r))},u=e=>({relative:n.css`
    position: relative;
    height: 100%;
  `,guideline:n.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:n.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:n.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:n.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:n.css`
    top: -25px;
    bottom: 0;
  `})},RLby:function(e,t,r){"use strict";var n=r("kDLi"),a=r("q1tI"),s=r("vF1F"),c=r("CBrm"),o=r("dVib"),i=r("cLaa"),l=r("vmN6"),u=r("epYg"),d=r("CBn2"),p=r("yZbJ"),j=r("nKUr");const b=({rule:e})=>{const t=Object(n.useStyles2)(g),{promRule:r,namespace:{rulesSource:a}}=e,s=Object.entries(e.annotations).filter(([e,t])=>!!t.trim());return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.a,{rule:e,rulesSource:a}),Object(j.jsxs)("div",{className:t.wrapper,children:[Object(j.jsxs)("div",{className:t.leftSide,children:[!!e.labels&&!!Object.keys(e.labels).length&&Object(j.jsx)(o.a,{label:"Labels",horizontal:!0,children:Object(j.jsx)(c.a,{labels:e.labels})}),Object(j.jsx)(d.a,{rulesSource:a,rule:e,annotations:s}),Object(j.jsx)(p.a,{annotations:s})]}),Object(j.jsx)("div",{className:t.rightSide,children:Object(j.jsx)(l.a,{rulesSource:a,rule:e})})]}),Object(j.jsx)(u.a,{promRule:r})]})},g=e=>({wrapper:s.css`
    display: flex;
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:s.css`
    flex: 1;
  `,rightSide:s.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var m=r("Jzaf"),h=r("xsuF"),O=r("d6cI"),f=r("xVL3"),v=r("7G0q"),x=r("wDOy"),y=r("QGdL");r.d(t,"a",(function(){return w}));const w=({rules:e,className:t,showGuidelines:r=!1,emptyMessage:c="No rules found.",showGroupColumn:o=!1,showSummaryColumn:i=!1})=>{const l=Object(n.useStyles2)(S),u=Object(s.cx)(l.wrapper,t,{[l.wrapperMargin]:r}),d=Object(a.useMemo)(()=>{const t=[];return e.map((e,r)=>{var n;let a=JSON.stringify([null===(n=e.promRule)||void 0===n?void 0:n.type,e.labels,e.query,e.name,e.annotations]);return t.includes(a)&&(a+="-"+r),t.push(a),{id:a,data:e}})},[e]),p=function(e,t){const r=Object(h.a)();return Object(a.useMemo)(()=>{const n=[{id:"state",label:"State",renderCell:({data:e})=>{const{namespace:t}=e,{rulesSource:n}=t,{promRule:a,rulerRule:s}=e,c=!(!r(n)||!a||s),o=!(!r(n)||!s||a);return Object(j.jsx)(f.a,{rule:e,isDeleting:c,isCreating:o})},size:"165px"},{id:"name",label:"Name",renderCell:({data:e})=>e.name,size:5},{id:"health",label:"Health",renderCell:({data:{promRule:e}})=>e?Object(j.jsx)(v.a,{rule:e}):null,size:"75px"}];return e&&n.push({id:"summary",label:"Summary",renderCell:({data:e})=>{var t;return null!==(t=e.annotations[O.c.summary])&&void 0!==t?t:""},size:5}),t&&n.push({id:"group",label:"Group",renderCell:({data:e})=>{const{namespace:t,group:r}=e,{rulesSource:n}=t;return Object(m.j)(n)?`${t.name} > ${r.name}`:t.name},size:5}),n},[r,e,t])}(i,o);if(!e.length)return Object(j.jsx)("div",{className:Object(s.cx)(u,l.emptyMessage),children:c});const g=r?y.a:x.a;return Object(j.jsx)("div",{className:u,"data-testid":"rules-table",children:Object(j.jsx)(g,{cols:p,isExpandable:!0,items:d,renderExpandedContent:({data:e})=>Object(j.jsx)(b,{rule:e})})})},S=e=>({wrapperMargin:s.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:s.css`
    padding: ${e.spacing(1)};
  `,wrapper:s.css`
    width: auto;
    background-color: ${e.colors.background.secondary};
    border-radius: ${e.shape.borderRadius()};
  `,table:s.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td + td {
      padding: ${e.spacing(0,1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:s.css`
    background-color: ${e.colors.background.primary};
  `,state:s.css`
    width: 110px;
  `})},URgk:function(e,t,r){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(a.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new s(a.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},r("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,r("yLpj"))},YAXX:function(e,t,r){"use strict";var n=r("q1tI"),a=r("WG1l"),s=r.n(a),c=r("kDLi"),o=r("nKUr");t.a=({rule:e,search:t,onTogglePause:r})=>{const a=`${e.url}?editPanel=${e.panelId}&tab=alert`,i=Object(n.useCallback)(e=>Object(o.jsx)(s.a,{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[t]},e),[t]);return Object(o.jsxs)(c.Card,{heading:Object(o.jsx)("a",{href:a,children:i(e.name)}),children:[Object(o.jsx)(c.Card.Figure,{children:Object(o.jsx)(c.Icon,{size:"xl",name:e.stateIcon,className:"alert-rule-item__icon "+e.stateClass})}),Object(o.jsxs)(c.Card.Meta,{children:[Object(o.jsxs)("span",{children:[Object(o.jsxs)("span",{className:""+e.stateClass,children:[i(e.stateText)," "]},"text"),"for ",e.stateAge]},"state"),e.info?i(e.info):null]}),Object(o.jsxs)(c.Card.Actions,{children:[Object(o.jsx)(c.Button,{variant:"secondary",icon:"paused"===e.state?"play":"pause",onClick:r,children:"paused"===e.state?"Resume":"Pause"},"play"),Object(o.jsx)(c.LinkButton,{variant:"secondary",href:a,icon:"cog",children:"Edit alert"},"edit")]})]})}},YBdB:function(e,t,r){(function(e,t){!function(e,r){"use strict";if(!e.setImmediate){var n,a,s,c,o,i=1,l={},u=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){b(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){b(e.data)},n=function(e){s.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(a=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){b(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):n=function(e){setTimeout(b,0,e)}:(c="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&b(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),n=function(t){e.postMessage(c+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return l[i]=a,n(i),i++},p.clearImmediate=j}function j(e){delete l[e]}function b(e){if(u)setTimeout(b,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(void 0,r)}}(t)}finally{j(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,r("yLpj"),r("8oxB"))},lPMX:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));const n=e=>e.searchQuery,a=e=>{const t=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter(e=>t.test(e.name)||t.test(e.stateText)||t.test(e.info))}},"qo+S":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n,a=r("kDLi"),s=(r("q1tI"),r("nKUr"));function c({onDismiss:e}){return Object(s.jsx)(a.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:e,onClickBackdrop:e,children:n||(n=Object(s.jsxs)(a.VerticalGroup,{spacing:"sm",children:[Object(s.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),Object(s.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),Object(s.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}},"sbt+":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("q1tI");var n=r("ZGyg"),a=r("lzJ5"),s=r("/MKj"),c=r("nKUr");const o=({children:e,pageId:t,isLoading:r})=>{const o=Object(a.a)(Object(s.useSelector)(e=>e.navIndex),t);return Object(c.jsx)(n.b,{navModel:o,children:Object(c.jsx)(n.b.Contents,{isLoading:r,children:e})})}},"te+q":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("q1tI");var n=r("vF1F"),a=r("kDLi"),s=r("nKUr");const c=["isCollapsed","onToggle","className","text","size"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const i=e=>{let{isCollapsed:t,onToggle:r,className:i,text:u,size:d="xl"}=e,p=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,c);const j=Object(a.useStyles)(l);return Object(s.jsxs)("button",o({className:Object(n.cx)(j.expandButton,i),onClick:()=>r(!t)},p,{children:[Object(s.jsx)(a.Icon,{size:d,name:t?"angle-right":"angle-down"}),u]}))},l=()=>({expandButton:n.css`
    background: none;
    border: none;

    outline: none !important;

    display: inline-flex;
    align-items: center;

    svg {
      margin-bottom: 0;
    }
  `})},xsuF:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r("Jzaf"),s=r("w+lj");function c(){const e=Object(s.a)(e=>e.rulerRules);return Object(n.useCallback)(t=>{var r;const n="string"==typeof t?t:t.name;return n===a.b||!(null===(r=e[n])||void 0===r||!r.result)},[e])}}}]);
//# sourceMappingURL=AlertRuleListIndex.807b3f41627421e0a149.js.map