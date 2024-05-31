(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9f6O":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var s=n("t8hP"),a=n("q1tI"),r=n("Ty5D");function i(){const{search:t}=Object(r.l)();return[Object(a.useMemo)(()=>Object(s.locationSearchToObject)(t||""),[t]),Object(a.useCallback)((t,n)=>e(()=>s.locationService.partial(t,n)),[])]}}).call(this,n("URgk").setImmediate)},Ei3L:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("q1tI");var s=n("kDLi"),a=n("vF1F"),r=n("nKUr");const i=({children:e,className:t})=>{const n=Object(s.useStyles)(o);return Object(r.jsx)("div",{className:Object(a.cx)(n.wrapper,t),children:e})},o=e=>({wrapper:a.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},QGdL:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("vF1F"),a=n("kDLi"),r=(n("q1tI"),n("wDOy")),i=n("nKUr");const o=["renderExpandedContent"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const l=e=>{let{renderExpandedContent:t}=e,n=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);const l=Object(a.useStyles2)(d);return Object(i.jsx)(r.a,c({renderExpandedContent:t?(e,n,a)=>Object(i.jsxs)(i.Fragment,{children:[!(n===a.length-1)&&Object(i.jsx)("div",{className:Object(s.cx)(l.contentGuideline,l.guideline)}),t(e,n,a)]}):void 0,renderPrefixHeader:()=>Object(i.jsx)("div",{className:l.relative,children:Object(i.jsx)("div",{className:Object(s.cx)(l.headerGuideline,l.guideline)})}),renderPrefixCell:(e,t,n)=>Object(i.jsxs)("div",{className:l.relative,children:[Object(i.jsx)("div",{className:Object(s.cx)(l.topGuideline,l.guideline)}),!(t===n.length-1)&&Object(i.jsx)("div",{className:Object(s.cx)(l.bottomGuideline,l.guideline)})]})},n))},d=e=>({relative:s.css`
    position: relative;
    height: 100%;
  `,guideline:s.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:s.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:s.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:s.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:s.css`
    top: -25px;
    bottom: 0;
  `})},"R9t/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n("Wxkr"),a=(n("q1tI"),n("sIux")),r=n("nKUr");const i={[s.a.Active]:"bad",[s.a.Unprocessed]:"neutral",[s.a.Suppressed]:"info"},o=({state:e})=>Object(r.jsx)(a.a,{state:i[e],children:e})},URgk:function(e,t,n){(function(e){var s=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(a.call(setTimeout,s,arguments),clearTimeout)},t.setInterval=function(){return new r(a.call(setInterval,s,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(s,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var s,a,r,i,o,c=1,l={},d=!1,u=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?s=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){m(e.data)},s=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(a=u.documentElement,s=function(e){var t=u.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):s=function(e){setTimeout(m,0,e)}:(i="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&m(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),s=function(t){e.postMessage(i+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return l[c]=a,s(c),c++},p.clearImmediate=b}function b(e){delete l[e]}function m(e){if(d)setTimeout(m,0,e);else{var t=l[e];if(t){d=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{b(e),d=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},dEXO:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("9f6O"),a=n("SMGL"),r=n("q1tI"),i=n("d6cI"),o=n("Jzaf");function c(e){return e===o.b||!!Object(o.c)().find(t=>t.name===e)}function l(){const[e,t]=Object(s.a)(),n=Object(r.useCallback)(e=>{c(e)&&(e===o.b?(a.a.delete(i.a),t({[i.b]:null})):(a.a.set(i.a,e),t({[i.b]:e})))},[t]),l=e[i.b];if(l&&"string"==typeof l)return c(l)?[l,n]:[void 0,n];const d=a.a.get(i.a);return d&&"string"==typeof d&&c(d)?(n(d),[d,n]):[o.b,n]}},dVib:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("q1tI");var s=n("vF1F"),a=n("kDLi"),r=n("nKUr");const i=({className:e,label:t,horizontal:n,children:i})=>{const c=Object(a.useStyles2)(o);return Object(r.jsxs)("div",{className:Object(s.cx)(e,c.field,n?c.fieldHorizontal:c.fieldVertical),children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{children:i})]})},o=e=>({fieldHorizontal:s.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:s.css`
    flex-direction: column;
  `,field:s.css`
    display: flex;
    margin: ${e.spacing(2)} 0;

    & > div:first-child {
      width: 110px;
      padding-right: ${e.spacing(1)};
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${e.colors.text.secondary};
    }
  `})},lcDh:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("Jzaf"),a=n("q1tI"),r=n("kDLi"),i=n("pz/R"),o=n("vF1F"),c=n("nKUr");const l=({onChange:e,current:t,disabled:n=!1})=>{const o=Object(r.useStyles2)(d),l=Object(a.useMemo)(()=>[{label:"Grafana",value:s.b,imgUrl:"public/img/grafana_icon.svg",meta:{}},...Object(i.a)().filter(e=>e.type===s.a.Alertmanager).map(e=>({label:e.name.substr(0,37),value:e.name,imgUrl:e.meta.info.logos.small,meta:e.meta}))],[]);return 1===l.length?null:Object(c.jsx)(r.Field,{className:o.field,label:n?"Alertmanager":"Choose Alertmanager",disabled:n,"data-testid":"alertmanager-picker",children:Object(c.jsx)(r.Select,{menuShouldPortal:!0,width:29,className:"ds-picker select-container",backspaceRemovesValue:!1,onChange:t=>t.value&&e(t.value),options:l,maxMenuHeight:500,noOptionsMessage:"No datasources found",value:t,getOptionLabel:e=>e.label})})},d=e=>({field:o.css`
    margin-bottom: ${e.spacing(4)};
  `})},"sbt+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("q1tI");var s=n("ZGyg"),a=n("lzJ5"),r=n("/MKj"),i=n("nKUr");const o=({children:e,pageId:t,isLoading:n})=>{const o=Object(a.a)(Object(r.useSelector)(e=>e.navIndex),t);return Object(i.jsx)(s.b,{navModel:o,children:Object(i.jsx)(s.b.Contents,{isLoading:n,children:e})})}},"te+q":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var s=n("vF1F"),a=n("kDLi"),r=n("nKUr");const i=["isCollapsed","onToggle","className","text","size"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}const c=e=>{let{isCollapsed:t,onToggle:n,className:c,text:d,size:u="xl"}=e,p=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);const b=Object(a.useStyles)(l);return Object(r.jsxs)("button",o({className:Object(s.cx)(b.expandButton,c),onClick:()=>n(!t)},p,{children:[Object(r.jsx)(a.Icon,{size:u,name:t?"angle-right":"angle-down"}),d]}))},l=()=>({expandButton:s.css`
    background: none;
    border: none;

    outline: none !important;

    display: inline-flex;
    align-items: center;

    svg {
      margin-bottom: 0;
    }
  `})},vKjS:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),a=n("/MKj"),r=n("sbt+"),i=n("lcDh"),o=n("dEXO"),c=n("w+lj"),l=n("4Yfp"),d=n("fXZ9"),u=n("Wxkr"),p=n("kDLi"),b=n("vF1F"),m=n("CBrm"),g=n("Obii"),f=n("R9t/"),j=n("QGdL"),h=n("8qpb"),x=n("zlPf"),O=n("nKUr");const v=({alert:e,alertManagerSourceName:t})=>{const n=Object(p.useStyles2)(y);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:n.actionsRow,children:[e.status.state===u.a.Suppressed&&Object(O.jsx)(p.LinkButton,{href:`${Object(h.e)("/alerting/silences",t)}&silenceIds=${e.status.silencedBy.join(",")}`,className:n.button,icon:"bell",size:"sm",children:"Manage silences"}),e.status.state===u.a.Active&&Object(O.jsx)(p.LinkButton,{href:`${Object(h.e)("/alerting/silence/new",t)}&${$(e.labels)}`,className:n.button,icon:"bell-slash",size:"sm",children:"Silence"}),e.generatorURL&&Object(O.jsx)(p.LinkButton,{className:n.button,href:e.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(e.annotations).map(([e,t])=>Object(O.jsx)(x.a,{annotationKey:e,value:t},e)),Object(O.jsxs)("div",{className:n.receivers,children:["Receivers:"," ",e.receivers.map(({name:e})=>e).filter(e=>!!e).join(", ")]})]})},y=e=>({button:b.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:b.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:b.css`
    padding: ${e.spacing(1,0)};
  `}),$=e=>"matchers="+encodeURIComponent(Object.entries(e).filter(([e])=>!(e.startsWith("__")&&e.endsWith("__"))).map(([e,t])=>`${e}=${t}`).join(",")),w=({alerts:e,alertManagerSourceName:t})=>{const n=Object(p.useStyles2)(k),a=Object(s.useMemo)(()=>[{id:"state",label:"State",renderCell:({data:e})=>Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{state:e.status.state}),Object(O.jsxs)("span",{className:n.duration,children:["for"," ",Object(g.intervalToAbbreviatedDurationString)({start:new Date(e.startsAt),end:new Date(e.endsAt)})]})]}),size:"190px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>Object(O.jsx)(m.a,{className:n.labels,labels:e}),size:1}],[n]),r=Object(s.useMemo)(()=>e.map(e=>({id:e.fingerprint,data:e})),[e]);return Object(O.jsx)("div",{className:n.tableWrapper,"data-testid":"notifications-table",children:Object(O.jsx)(j.a,{cols:a,items:r,isExpandable:!0,renderExpandedContent:({data:e})=>Object(O.jsx)(v,{alert:e,alertManagerSourceName:t})})})},k=e=>({tableWrapper:b.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:b.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:b.css`
    padding-bottom: 0;
  `});var N=n("te+q");const I=({group:e})=>{const t=Object(p.useStyles2)(S),n=e.alerts.length,s=e.alerts.reduce((e,t)=>(e[t.status.state]?e[t.status.state]+=1:e[t.status.state]=1,e),{});return Object(O.jsxs)("div",{className:t.summary,children:[n+" alerts: ",Object.entries(s).map(([n,s],a)=>Object(O.jsxs)("span",{className:t[n],children:[a>0&&", ",`${s} ${n}`]},`${JSON.stringify(e.labels)}-notifications-${a}`))]})},S=e=>({summary:b.css``,[u.a.Active]:b.css`
    color: ${e.colors.error.main};
  `,[u.a.Suppressed]:b.css`
    color: ${e.colors.primary.main};
  `,[u.a.Unprocessed]:b.css`
    color: ${e.colors.secondary.main};
  `});var C;const L=({alertManagerSourceName:e,group:t})=>{const[n,a]=Object(s.useState)(!0),r=Object(p.useStyles2)(E);return Object(O.jsxs)("div",{className:r.wrapper,children:[Object(O.jsxs)("div",{className:r.header,children:[Object(O.jsxs)("div",{className:r.group,"data-testid":"notifications-group",children:[Object(O.jsx)(N.a,{isCollapsed:n,onToggle:()=>a(!n),"data-testid":"notifications-group-collapse-toggle"}),Object.keys(t.labels).length?Object(O.jsx)(m.a,{className:r.headerLabels,labels:t.labels}):C||(C=Object(O.jsx)("span",{children:"No grouping"}))]}),Object(O.jsx)(I,{group:t})]}),!n&&Object(O.jsx)(w,{alertManagerSourceName:e,alerts:t.alerts})]})},E=e=>({wrapper:b.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:b.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:b.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:b.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:b.css``,spanElement:b.css`
    margin-left: ${e.spacing(.5)};
  `,[u.a.Active]:b.css`
    color: ${e.colors.error.main};
  `,[u.a.Suppressed]:b.css`
    color: ${e.colors.primary.main};
  `,[u.a.Unprocessed]:b.css`
    color: ${e.colors.secondary.main};
  `});var T,z=n("d6cI");t.default=()=>{var e,t,n;const[u,b]=Object(o.a)(),m=Object(a.useDispatch)(),g=Object(c.a)(e=>e.amAlertGroups)||d.c,f=null===(e=g[u||""])||void 0===e?void 0:e.loading,j=null===(t=g[u||""])||void 0===t?void 0:t.error,h=(null===(n=g[u||""])||void 0===n?void 0:n.result)||[];return Object(s.useEffect)(()=>{function e(){u&&m(Object(l.h)(u))}e();const t=setInterval(()=>e,z.d);return()=>{clearInterval(t)}},[m,u]),Object(O.jsxs)(r.a,{pageId:"notifications",children:[Object(O.jsx)(i.a,{current:u,onChange:b}),f&&(T||(T=Object(O.jsx)(p.LoadingPlaceholder,{text:"Loading notifications"}))),j&&!f&&Object(O.jsx)(p.Alert,{title:"Error loading notifications",severity:"error",children:j.message||"Unknown error"}),h&&h.map((e,t)=>Object(O.jsx)(L,{alertManagerSourceName:u||"",group:e},`${JSON.stringify(e.labels)}-group-${t}`))]})}},wDOy:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n("q1tI"),a=n("vF1F"),r=n("kDLi"),i=n("nKUr");const o=({cols:e,items:t,isExpandable:n=!1,onCollapse:o,onExpand:l,isExpanded:d,renderExpandedContent:u,testIdGenerator:p,renderPrefixCell:b,renderPrefixHeader:m})=>{if((o||l||d)&&!(o&&l&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((n||u)&&(!n||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const g=Object(r.useStyles2)(c(e,n,!!m)),[f,j]=Object(s.useState)([]);return Object(i.jsxs)("div",{className:g.container,"data-testid":"dynamic-table",children:[Object(i.jsxs)("div",{className:g.row,"data-testid":"header",children:[m&&m(),n&&Object(i.jsx)("div",{className:g.cell}),e.map(e=>Object(i.jsx)("div",{className:g.cell,children:e.label},e.id))]}),t.map((s,c)=>{var m;const h=d?d(s):f.includes(s.id);return Object(i.jsxs)("div",{className:g.row,"data-testid":null!==(m=null==p?void 0:p(s,c))&&void 0!==m?m:"row",children:[b&&b(s,c,t),n&&Object(i.jsx)("div",{className:Object(a.cx)(g.cell,g.expandCell),children:Object(i.jsx)(r.IconButton,{size:"xl","data-testid":"collapse-toggle",className:g.expandButton,name:h?"angle-down":"angle-right",onClick:()=>(e=>{d&&o&&l?d(e)?o(e):l(e):j(f.includes(e.id)?f.filter(t=>t!==e.id):[...f,e.id])})(s),type:"button"})}),e.map(e=>Object(i.jsx)("div",{className:Object(a.cx)(g.cell,g.bodyCell),"data-column":e.label,children:e.renderCell(s,c)},`${s.id}-${e.id}`)),h&&u&&Object(i.jsx)("div",{className:g.expandedContentRow,"data-testid":"expanded-content",children:u(s,c,t)})]},s.id)})]})},c=(e,t,n)=>{const s=e.map(e=>e.size?"number"==typeof e.size?e.size+"fr":e.size:"auto");return t&&s.unshift("calc(1em + 16px)"),n&&s.unshift("0"),e=>({container:a.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:a.css`
      display: grid;
      grid-template-columns: ${s.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${n?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:a.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:a.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:a.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:a.css`
      grid-column-end: ${s.length+1};
      grid-column-start: ${n?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:a.css`
      margin-right: 0;
      display: block;
    `})}},zlPf:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("q1tI");var s=n("Ei3L"),a=n("vF1F"),r=n("kDLi"),i=n("dVib"),o=n("d6cI"),c=n("nKUr");const l=["message","description"],d=({annotationKey:e,value:t})=>{const n=o.k[e]?Object(c.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:Object(c.jsx)("span",{children:o.k[e]})}):e;return Object(c.jsx)(i.a,{label:n,horizontal:!0,children:Object(c.jsx)(u,{annotationKey:e,value:t})})},u=({annotationKey:e,value:t})=>{const n=Object(r.useStyles)(p);return l.includes(e)?Object(c.jsx)(s.a,{children:t}):t&&t.startsWith("http")?Object(c.jsx)("a",{href:t,target:"__blank",className:n.link,children:t}):Object(c.jsx)(c.Fragment,{children:t})},p=e=>({well:a.css`
    word-break: break-all;
  `,link:a.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})}}]);
//# sourceMappingURL=AlertManagerNotifications.807b3f41627421e0a149.js.map