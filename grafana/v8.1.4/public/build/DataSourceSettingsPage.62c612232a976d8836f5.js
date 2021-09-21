(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"7iUX":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var n=a("kDLi"),r=a("Obii"),s=a("nKUr");const o=e=>{const t=function(e){switch(e){case r.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case r.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case r.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return t?Object(s.jsx)(n.Badge,{color:t.color,title:t.tooltip,text:t.text,icon:t.icon}):null}},Klwq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("LvDl"),o=a("ZGyg"),i=a("t8hP"),c=a("nKUr");function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class d extends n.PureComponent{constructor(e){super(e),l(this,"element",null),l(this,"component",void 0),l(this,"scopeProps",void 0),l(this,"onModelChanged",e=>{this.props.onModelChange(e)}),this.scopeProps={ctrl:{datasourceMeta:e.dataSourceMeta,current:Object(s.cloneDeep)(e.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:e}=this.props;if(this.element&&!e.components.ConfigEditor){const e=Object(i.getAngularLoader)(),t='<plugin-component type="datasource-config-ctrl" />';this.component=e.load(this.element,this.scopeProps,t)}}componentDidUpdate(e){const{plugin:t}=this.props;var a;t.components.ConfigEditor||this.props.dataSource===e.dataSource||(this.scopeProps.ctrl.current=Object(s.cloneDeep)(this.props.dataSource),null===(a=this.component)||void 0===a||a.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:e,dataSource:t}=this.props;return e?Object(c.jsx)("div",{ref:e=>this.element=e,children:e.components.ConfigEditor&&r.a.createElement(e.components.ConfigEditor,{options:t,onOptionsChange:this.onModelChanged})}):null}}var u,h=a("kDLi"),p=a("Csm0");const{Input:g,Switch:b}=h.LegacyForms;var m=({dataSourceName:e,isDefault:t,onDefaultChange:a,onNameChange:n})=>Object(c.jsx)("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings",children:Object(c.jsxs)("div",{className:"gf-form-inline",children:[Object(c.jsxs)("div",{className:"gf-form max-width-30",style:{marginRight:"3px"},children:[u||(u=Object(c.jsx)(h.InlineFormLabel,{tooltip:"The name is used when you select the data source in panels. The default data source is preselected in new panels.",children:"Name"})),Object(c.jsx)(g,{className:"gf-form-input max-width-23",type:"text",value:e,placeholder:"Name",onChange:e=>n(e.target.value),required:!0,"aria-label":p.a.pages.DataSource.name})]}),Object(c.jsx)(b,{label:"Default",checked:t,onChange:e=>{a(e.target.checked)}})]})}),f=a("ZFWI");var j=({isReadOnly:e,onDelete:t,onSubmit:a,onTest:n})=>Object(c.jsxs)("div",{className:"gf-form-button-row",children:[Object(c.jsx)(h.LinkButton,{variant:"secondary",fill:"outline",href:f.b.appSubUrl+"/datasources",children:"Back"}),Object(c.jsx)(h.Button,{type:"button",variant:"destructive",disabled:e,onClick:t,"aria-label":p.a.pages.DataSource.delete,children:"Delete"}),!e&&Object(c.jsx)(h.Button,{type:"submit",variant:"primary",disabled:e,onClick:e=>a(e),"aria-label":p.a.pages.DataSource.saveAndTest,children:"Save & test"}),e&&Object(c.jsx)(h.Button,{type:"submit",variant:"primary",onClick:n,children:"Test"})]}),S=a("Xmxp"),O=a("frIo"),v=a("5BCB"),x=a("lzJ5"),D=a("HUMP"),y=a("7iUX"),C=a("FFN/"),w=a("QL3a"),M=a("mtHS");const P=({dataSource:e})=>{var t;let a="",n="";if(e.readOnly||(null!==(t=e.version)&&void 0!==t?t:0)>2)return null;if(f.a.buildInfo.edition!==w.d.OpenSource)return null;switch(e.type){case"prometheus":a="Prometheus",n="Loki";break;case"loki":a="Loki",n="Prometheus";break;default:return null}return Object(c.jsx)(M.a,{storageKey:"datasources.settings.cloudInfoBox.isDismissed",defaultValue:!1,children:(t,r)=>t?null:Object(c.jsxs)(h.Alert,{title:`Configure your ${a} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{r(!0)},children:["Or skip the effort and get ",a," (and ",n,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",Object(c.jsx)("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${e.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage.",children:"free-forever Grafana Cloud plan"}),"."]})})};var k,N,L=a("/MKj"),I=a("zVNn"),B=a("xAj+");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"DataSourceSettingsPage",(function(){return R}));const A={deleteDataSource:v.b,loadDataSource:v.d,setDataSourceName:C.i,updateDataSource:v.h,setIsDefault:C.m,dataSourceLoaded:C.a,initDataSourceSettings:v.c,testDataSource:v.g,cleanUpAction:I.a},E=Object(L.connect)((function(e,t){const a=t.match.params.uid,n=new URLSearchParams(t.location.search),r=Object(O.a)(e.dataSources,a),{plugin:s,loadError:o,testingStatus:i}=e.dataSourceSettings,c=n.get("page"),l=s?Object(D.c)(Object(D.a)(r,s),c||"settings"):Object(D.b)("settings"),d=Object(x.a)(e.navIndex,c?"datasource-page-"+c:"datasource-settings-"+a,l);return{dataSource:Object(O.a)(e.dataSources,a),dataSourceMeta:Object(O.b)(e.dataSources,r.type),dataSourceId:a,page:c,plugin:s,loadError:o,testingStatus:i,navModel:d}}),A);class R extends n.PureComponent{constructor(...e){super(...e),U(this,"onSubmit",async e=>{e.preventDefault(),await this.props.updateDataSource(T({},this.props.dataSource)),this.testDataSource()}),U(this,"onTest",async e=>{e.preventDefault(),this.testDataSource()}),U(this,"onDelete",()=>{S.b.publish(new B.ShowConfirmModalEvent({title:"Delete",text:"Are you sure you want to delete this data source?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>{this.confirmDelete()}}))}),U(this,"confirmDelete",()=>{this.props.deleteDataSource()}),U(this,"onModelChange",e=>{this.props.dataSourceLoaded(e)})}componentDidMount(){const{initDataSourceSettings:e,dataSourceId:t}=this.props;e(t)}componentWillUnmount(){this.props.cleanUpAction({stateSelector:e=>e.dataSourceSettings})}isReadOnly(){return!0===this.props.dataSource.readOnly}renderIsReadOnlyMessage(){return Object(c.jsx)(h.Alert,{"aria-label":p.a.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:"This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."})}testDataSource(){const{dataSource:e,testDataSource:t}=this.props;t(e.name)}get hasDataSource(){return this.props.dataSource.id>0}renderLoadError(e){let t=!1,a=e.toString();e.data?e.data.message&&(a=e.data.message):Object(s.isString)(e)&&(t=!0);const n={text:a,subTitle:"Data Source Error",icon:"exclamation-triangle"},r={node:n,main:n};return Object(c.jsx)(o.b,{navModel:r,children:Object(c.jsx)(o.b.Contents,{children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"gf-form-button-row",children:[t&&Object(c.jsx)(h.Button,{type:"submit",variant:"destructive",onClick:this.onDelete,children:"Delete"}),k||(k=Object(c.jsx)(h.LinkButton,{variant:"secondary",href:"datasources",fill:"outline",children:"Back"}))]})})})})}renderConfigPageBody(e){const{plugin:t}=this.props;if(!t||!t.configPages)return null;for(const a of t.configPages)if(a.id===e)return Object(c.jsx)(a.body,{plugin:t,query:{}});return Object(c.jsxs)("div",{children:["Page not found: ",e]})}renderAlertDetails(){var e,t,a;const{testingStatus:n}=this.props;return Object(c.jsxs)(c.Fragment,{children:[null==n||null===(e=n.details)||void 0===e?void 0:e.message,null!=n&&null!==(t=n.details)&&void 0!==t&&t.verboseMessage?Object(c.jsx)("details",{style:{whiteSpace:"pre-wrap"},children:null==n||null===(a=n.details)||void 0===a?void 0:a.verboseMessage}):null]})}renderSettings(){const{dataSourceMeta:e,setDataSourceName:t,setIsDefault:a,dataSource:n,plugin:r,testingStatus:s}=this.props;return Object(c.jsxs)("form",{onSubmit:this.onSubmit,children:[this.isReadOnly()&&this.renderIsReadOnlyMessage(),e.state&&Object(c.jsxs)("div",{className:"gf-form",children:[N||(N=Object(c.jsx)("label",{className:"gf-form-label width-10",children:"Plugin state"})),Object(c.jsx)("label",{className:"gf-form-label gf-form-label--transparent",children:Object(c.jsx)(y.a,{state:e.state})})]}),Object(c.jsx)(P,{dataSource:n}),Object(c.jsx)(m,{dataSourceName:n.name,isDefault:n.isDefault,onDefaultChange:e=>a(e),onNameChange:e=>t(e)}),r&&Object(c.jsx)(d,{plugin:r,dataSource:n,dataSourceMeta:e,onModelChange:this.onModelChange}),(null==s?void 0:s.message)&&Object(c.jsx)("div",{className:"gf-form-group p-t-2",children:Object(c.jsx)(h.Alert,{severity:"error"===s.status?"error":"success",title:s.message,"aria-label":p.a.pages.DataSource.alert,children:s.details&&this.renderAlertDetails()})}),Object(c.jsx)(j,{onSubmit:e=>this.onSubmit(e),isReadOnly:this.isReadOnly(),onDelete:this.onDelete,onTest:e=>this.onTest(e)})]})}render(){const{navModel:e,page:t,loadError:a}=this.props;return a?this.renderLoadError(a):Object(c.jsx)(o.b,{navModel:e,children:Object(c.jsx)(o.b.Contents,{isLoading:!this.hasDataSource,children:this.hasDataSource?Object(c.jsx)("div",{children:t?this.renderConfigPageBody(t):this.renderSettings()}):null})})}}t.default=E(R)}}]);
//# sourceMappingURL=DataSourceSettingsPage.62c612232a976d8836f5.js.map