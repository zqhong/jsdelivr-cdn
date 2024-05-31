(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{SzYE:function(e,a,n){"use strict";var t=n("t8hP");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}async function i(e,a){try{return await Object(t.getBackendSrv)().get("/api/gnet/plugins/"+e)}catch(e){return void(e.isHandled=!!a)}}async function r(e){try{return(await Object(t.getBackendSrv)().get(`/api/gnet/plugins/${e}/versions`)).items}catch(e){return[]}}async function l(){return await Object(t.getBackendSrv)().get("/api/plugins",{embedded:0})}n.d(a,"a",(function(){return c}));const c={getRemotePlugins:async function(){return(await Object(t.getBackendSrv)().get("/api/gnet/plugins")).items},getPlugin:async function(e){const a=await l(),n=null==a?void 0:a.find(a=>a.id===e),[t,s]=await Promise.all([i(e,n),r(e)]);return{remote:t,remoteVersions:s,local:n}},getInstalledPlugins:l,getOrg:async function(e){return s({},await Object(t.getBackendSrv)().get("/api/gnet/orgs/"+e),{avatarUrl:`/api/gnet/orgs/${e}/avatar`})},installPlugin:async function(e,a){return await Object(t.getBackendSrv)().post(`/api/plugins/${e}/install`,{version:a})},uninstallPlugin:async function(e){return await Object(t.getBackendSrv)().post(`/api/plugins/${e}/uninstall`)}}},WEfi:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));n("q1tI");var t=n("nKUr");function s({alt:e,className:a,src:n,height:s}){return Object(t.jsx)("img",{src:n,className:a,alt:e,loading:"lazy",height:s})}},aHKO:function(e,a,n){"use strict";n.r(a);var t,s=n("q1tI"),i=n("vF1F"),r=n("kDLi"),l=n("GQ3c"),c=n("3cPs"),o=n("t8hP"),d=n("Obii"),p=n("Xmxp"),u=n("9IGr"),g=n("SzYE"),h=n("L0JJ"),j=n("nKUr");const b=({plugin:e,isInflight:a,hasUpdate:n,isInstalled:s,hasInstalledPanel:l,dispatch:b})=>{var O;const y=o.config.pluginAdminExternalManageEnabled,v=f(e),x=Object(r.useStyles2)(m);if(!e)return null;const I=async()=>{b({type:u.a.INFLIGHT});try{await g.a.uninstallPlugin(e.id),p.b.emit(d.AppEvents.alertSuccess,["Uninstalled "+e.name]),b({type:u.a.UNINSTALLED})}catch(e){b({type:u.a.ERROR,payload:e})}},N=async()=>{b({type:u.a.INFLIGHT});try{await g.a.installPlugin(e.id,e.version),p.b.emit(d.AppEvents.alertSuccess,["Updated "+e.name]),b({type:u.a.UPDATED})}catch(e){b({type:u.a.ERROR,payload:e})}},E=e.grafanaDependency,w=!!E&&!Object(c.satisfies)(o.config.buildInfo.version,E,{includePrerelease:!0}),T=Boolean(e.isDev),P=e.isEnterprise,L=e.isCore,S=Object(h.b)();if(L)return null;if(P&&(null===(O=o.config.licenseInfo)||void 0===O||!O.hasValidLicense))return Object(j.jsxs)(r.HorizontalGroup,{height:"auto",align:"center",children:[Object(j.jsx)("span",{className:x.message,children:"No valid Grafana Enterprise license detected."}),Object(j.jsx)(r.LinkButton,{href:f(e)+"?utm_source=grafana_catalog_learn_more",target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt",children:"Learn more"})]});if(T)return Object(j.jsx)("div",{className:x.message,children:"This is a development build of the plugin and can't be uninstalled."});if(!S&&!y){const e=`You do not have permission to ${s?"uninstall":n?"update":"install"} this plugin.`;return Object(j.jsx)("div",{className:x.message,children:e})}return s?Object(j.jsxs)(r.HorizontalGroup,{height:"auto",children:[n&&(y?Object(j.jsx)(r.LinkButton,{href:v,target:"_blank",rel:"noopener noreferrer",children:"Update via grafana.com"}):Object(j.jsx)(r.Button,{disabled:a||!S,onClick:N,children:a?"Updating":"Update"})),y?Object(j.jsx)(r.LinkButton,{variant:"destructive",href:v,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.Button,{variant:"destructive",disabled:a||!S,onClick:I,children:a&&!n?"Uninstalling":"Uninstall"}),l&&Object(j.jsx)("div",{className:Object(i.cx)(x.message,x.messageMargin),children:"Please refresh your browser window before using this plugin."})]})]}):w?Object(j.jsxs)("div",{className:x.message,children:[t||(t=Object(j.jsx)(r.Icon,{name:"exclamation-triangle"}))," This plugin doesn't support your version of Grafana."]}):Object(j.jsx)(r.HorizontalGroup,{height:"auto",children:y?Object(j.jsx)(r.LinkButton,{href:v,target:"_blank",rel:"noopener noreferrer",children:"Install via grafana.com"}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(r.Button,{disabled:a||!S,onClick:async()=>{b({type:u.a.INFLIGHT});try{await g.a.installPlugin(e.id,e.version),p.b.emit(d.AppEvents.alertSuccess,["Installed "+e.name]),b({type:u.a.INSTALLED,payload:"panel"===e.type})}catch(e){b({type:u.a.ERROR,payload:{error:e}})}},children:a?"Installing":"Install"})})})};function f(e){return"https://grafana.com/grafana/plugins/"+e.id}const m=e=>({message:i.css`
      color: ${e.colors.text.secondary};
    `,messageMargin:i.css`
      margin-left: ${e.spacing()};
    `});var O=n("kYMR");function y(){return(y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}const v=[{label:"Overview"},{label:"Version history"}],x={hasInstalledPanel:!1,hasUpdate:!1,isInstalled:!1,isInflight:!1,loading:!1,error:void 0,plugin:void 0,pluginConfig:void 0,tabs:v,activeTab:0},I=(e,a)=>{switch(a.type){case u.a.LOADING:return y({},e,{loading:!0});case u.a.INFLIGHT:return y({},e,{isInflight:!0});case u.a.ERROR:return y({},e,{loading:!1,error:a.payload});case u.a.FETCHED_PLUGIN:return y({},e,{loading:!1,plugin:a.payload,isInstalled:a.payload.isInstalled,hasUpdate:a.payload.hasUpdate});case u.a.FETCHED_PLUGIN_CONFIG:return y({},e,{loading:!1,pluginConfig:a.payload});case u.a.UPDATE_TABS:return y({},e,{tabs:a.payload});case u.a.INSTALLED:return y({},e,{isInflight:!1,isInstalled:!0,hasInstalledPanel:a.payload});case u.a.UNINSTALLED:return y({},e,{isInflight:!1,isInstalled:!1});case u.a.UPDATED:return y({},e,{hasUpdate:!1,isInflight:!1});case u.a.SET_ACTIVE_TAB:return y({},e,{activeTab:a.payload})}};var N,E=n("xzGB");const w=()=>N||(N=Object(j.jsx)(E.a,{children:Object(j.jsx)("div",{className:"page-loader-wrapper",children:Object(j.jsx)(r.LoadingPlaceholder,{text:"Loading..."})})}));var T,P,L=n("ZGyg"),S=n("WEfi");const C=({versions:e})=>{const a=Object(r.useStyles2)(k);return 0===e.length?T||(T=Object(j.jsx)("p",{children:"No version history was found."})):Object(j.jsxs)("table",{className:a.table,children:[P||(P=Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Version"}),Object(j.jsx)("th",{children:"Last updated"})]})})),Object(j.jsx)("tbody",{children:e.map(e=>Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.version}),Object(j.jsx)("td",{children:Object(d.dateTimeFormatTimeAgo)(e.createdAt)})]},e.version))})]})},k=e=>({container:i.css`
    padding: ${e.spacing(2,4,3)};
  `,table:i.css`
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `});var U=n("4HI1"),A=n("3Q5D");function _({tab:e,plugin:a,remoteVersions:n,readme:t}){const s=Object(r.useStyles2)(D);if("Overview"===(null==e?void 0:e.label))return Object(j.jsx)("div",{className:Object(i.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:null!=t?t:"No plugin help or readme markdown file was found"}});if("Version history"===(null==e?void 0:e.label))return Object(j.jsx)("div",{className:s.container,children:Object(j.jsx)(C,{versions:null!=n?n:[]})});if("Config"===(null==e?void 0:e.label)&&null!=a&&a.angularConfigCtrl)return Object(j.jsx)("div",{className:s.container,children:Object(j.jsx)(U.a,{app:a})});if(null!=a&&a.configPages)for(const n of a.configPages)if((null==e?void 0:e.label)===n.title)return Object(j.jsx)("div",{className:s.container,children:Object(j.jsx)(n.body,{plugin:a,query:{}})});return"Dashboards"===(null==e?void 0:e.label)&&a?Object(j.jsx)("div",{className:s.container,children:Object(j.jsx)(A.a,{plugin:a.meta})}):null}const D=e=>({container:i.css`
    padding: ${e.spacing(3,4)};
  `,readme:i.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }
  `});var G,$,B;function F({match:e}){var a;const{pluginId:n}=e.params,{state:t,dispatch:c}=(e=>{const[a,n]=Object(s.useReducer)(I,x),t=Object(h.d)();return Object(s.useEffect)(()=>{(async()=>{n({type:u.a.LOADING});try{const a=await g.a.getPlugin(e),t=Object(h.a)(null==a?void 0:a.local,null==a?void 0:a.remote,null==a?void 0:a.remoteVersions);n({type:u.a.FETCHED_PLUGIN,payload:t})}catch(e){n({type:u.a.ERROR,payload:e})}})()},[e]),Object(s.useEffect)(()=>{(async()=>{if(a.isInstalled){n({type:u.a.LOADING});try{const a=await Object(O.loadPlugin)(e);n({type:u.a.FETCHED_PLUGIN_CONFIG,payload:a})}catch(e){n({type:u.a.ERROR,payload:e})}}else n({type:u.a.FETCHED_PLUGIN_CONFIG,payload:void 0}),n({type:u.a.SET_ACTIVE_TAB,payload:0})})()},[a.isInstalled,e]),Object(s.useEffect)(()=>{const e=a.pluginConfig,s=[...v];if(e&&t&&e.meta.type===d.PluginType.app){var i;if(e.angularConfigCtrl&&s.push({label:"Config"}),e.configPages)for(const a of e.configPages)s.push({label:a.title});null!==(i=e.meta.includes)&&void 0!==i&&i.find(e=>e.type===d.PluginIncludeType.dashboard)&&s.push({label:"Dashboards"})}n({type:u.a.UPDATE_TABS,payload:s})},[t,a.pluginConfig,e]),{state:a,dispatch:n}})(n),{loading:o,error:p,plugin:f,pluginConfig:m,tabs:y,activeTab:N,isInflight:T,hasUpdate:P,isInstalled:C,hasInstalledPanel:k}=t,U=y[N],A=Object(r.useStyles2)(R),D=e.url.substring(0,e.url.lastIndexOf("/"));return o?G||(G=Object(j.jsx)(L.a,{children:Object(j.jsx)(w,{})})):f?Object(j.jsx)(L.a,{children:Object(j.jsxs)(E.a,{children:[Object(j.jsxs)("div",{className:A.headerContainer,children:[Object(j.jsx)(S.a,{alt:f.name+" logo",src:f.info.logos.small,className:i.css`
                object-fit: contain;
                width: 100%;
                height: 68px;
                max-width: 68px;
              `}),Object(j.jsxs)("div",{className:A.headerWrapper,children:[Object(j.jsx)("nav",{className:A.breadcrumb,"aria-label":"Breadcrumb",children:Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:i.css`
                        text-decoration: underline;
                      `,href:D,children:"Plugins"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:""+e.url,"aria-current":"page",children:f.name})})]})}),Object(j.jsxs)("div",{className:A.headerLinks,children:[Object(j.jsx)("span",{children:f.orgName}),f.links.map(e=>Object(j.jsx)("a",{href:e.url,children:e.name},e.name)),f.downloads>0&&Object(j.jsxs)("span",{children:[$||($=Object(j.jsx)(r.Icon,{name:"cloud-download"}))," "+(new Intl.NumberFormat).format(f.downloads)," "]}),f.version&&Object(j.jsx)("span",{children:f.version})]}),Object(j.jsx)("p",{children:f.description}),a||(a=Object(j.jsx)(b,{plugin:f,isInflight:T,hasUpdate:P,isInstalled:C,hasInstalledPanel:k,dispatch:c}))]})]}),Object(j.jsx)(r.TabsBar,{children:y.map((e,a)=>Object(j.jsx)(r.Tab,{label:e.label,active:a===N,onChangeTab:()=>c({type:u.a.SET_ACTIVE_TAB,payload:a})},e.label))}),Object(j.jsxs)(r.TabContent,{children:[p&&Object(j.jsx)(r.Alert,{severity:l.b.Error,title:"Error Loading Plugin",children:Object(j.jsxs)(j.Fragment,{children:["Check the server startup logs for more information. ",B||(B=Object(j.jsx)("br",{})),"If this plugin was loaded from git, make sure it was compiled."]})}),Object(j.jsx)(_,{tab:U,plugin:m,remoteVersions:f.versions,readme:f.readme})]})]})}):null}n.d(a,"default",(function(){return F})),n.d(a,"getStyles",(function(){return R}));const R=e=>({headerContainer:i.css`
      display: flex;
      margin-bottom: ${e.spacing(3)};
      margin-top: ${e.spacing(3)};
      min-height: 120px;
    `,headerWrapper:i.css`
      margin-left: ${e.spacing(3)};
    `,breadcrumb:i.css`
      font-size: ${e.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,headerLinks:i.css`
      display: flex;
      align-items: center;
      margin-top: ${e.spacing()};
      margin-bottom: ${e.spacing(3)};

      & > * {
        &::after {
          content: '|';
          padding: 0 ${e.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${e.typography.h4.fontSize};
    `,headerOrgName:i.css`
      font-size: ${e.typography.h4.fontSize};
    `})},xzGB:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));n("q1tI");var t=n("vF1F"),s=n("kDLi"),i=n("nKUr");const r=({children:e})=>{const a=Object(s.useStyles2)(l);return Object(i.jsx)("div",{className:"page-container",children:Object(i.jsx)("div",{className:a,children:e})})},l=e=>t.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=PluginPage.807b3f41627421e0a149.js.map