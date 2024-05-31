(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{z35t:function(e,t,r){"use strict";r.r(t);var a=r("Obii"),s=r("LvDl"),i=r("5kRJ"),c=r("NPB1"),n=r("qs2D"),l=r("F/XL"),o=r("67Y/"),u=r("9Z1F"),p=r("t8hP"),h=r("Xmxp"),d=r("GQ3c"),y=r("DqrJ");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class g{constructor(e){b(this,"cache",void 0),b(this,"defaultOptions",void 0),this.baseUrl=e,this.cache={},this.defaultOptions={useCache:!0,responseMap:e=>e,baseUrl:this.baseUrl}}get(e,t){const{useCache:r,responseMap:a,baseUrl:s}=j({},this.defaultOptions,t);return r&&this.cache[e]?Promise.resolve(this.cache[e]):Object(p.getBackendSrv)().fetch({url:s+e,method:"GET"}).pipe(Object(o.a)(t=>{const s=e.match(/([^\/]*)\/*$/)[1].split("?")[0];let i=[];return t&&t.data&&t.data[s]&&(i=t.data[s].map(a)),r&&(this.cache[e]=i),i}),Object(u.a)(e=>(h.b.emit(d.d.dsRequestError,{error:{data:{error:Object(y.b)(e)}}}),Object(l.a)([])))).toPromise()}post(e){return Object(p.getBackendSrv)().fetch({url:"/api/tsdb/query",method:"POST",data:e})}test(e){return Object(p.getBackendSrv)().fetch({url:`${this.baseUrl}${e}/metricDescriptors`,method:"GET"}).toPromise()}}var m=r("0/uQ"),v=r("psW0"),O=r("/yDe");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}class S{constructor(e){this.datasource=e}async execute(e){try{switch(e.projectName||(e.projectName=this.datasource.getDefaultProject()),e.selectedQueryType){case n.d.Projects:return this.handleProjectsQuery();case n.d.Services:return this.handleServiceQuery(e);case n.d.MetricTypes:return this.handleMetricTypesQuery(e);case n.d.LabelKeys:return this.handleLabelKeysQuery(e);case n.d.LabelValues:return this.handleLabelValuesQuery(e);case n.d.ResourceTypes:return this.handleResourceTypeQuery(e);case n.d.Aligners:return this.handleAlignersQuery(e);case n.d.AlignmentPeriods:return this.handleAlignmentPeriodQuery();case n.d.Aggregations:return this.handleAggregationQuery(e);case n.d.SLOServices:return this.handleSLOServicesQuery(e);case n.d.SLO:return this.handleSLOQuery(e);case n.d.Selectors:return this.handleSelectorQuery();default:return[]}}catch(t){return console.error("Could not run CloudMonitoringMetricFindQuery "+e,t),[]}}async handleProjectsQuery(){return(await this.datasource.getProjects()).map(e=>({text:e.label,value:e.value,expandable:!0}))}async handleServiceQuery({projectName:e}){const t=await this.datasource.getMetricTypes(e);return Object(y.a)(t).map(e=>({text:e.serviceShortName,value:e.service,expandable:!0}))}async handleMetricTypesQuery({selectedService:e,projectName:t}){if(!e)return[];const r=await this.datasource.getMetricTypes(t);return Object(y.h)(r,this.datasource.templateSrv.replace(e)).map(e=>({text:e.displayName,value:e.type,expandable:!0}))}async handleLabelKeysQuery({selectedMetricType:e,projectName:t}){if(!e)return[];return(await Object(y.f)(this.datasource,e,t)).map(this.toFindQueryResult)}async handleLabelValuesQuery({selectedMetricType:e,labelKey:t,projectName:r}){if(!e)return[];const a=await this.datasource.getLabels(e,"handleLabelValuesQuery",r,[t]),s=this.datasource.templateSrv.replace(t);return(a.hasOwnProperty(s)?a[s]:[]).map(this.toFindQueryResult)}async handleResourceTypeQuery({selectedMetricType:e,projectName:t}){var r,a;if(!e)return[];return null!==(r=null===(a=(await this.datasource.getLabels(e,"handleResourceTypeQueryQueryType",t))["resource.type"])||void 0===a?void 0:a.map(this.toFindQueryResult))&&void 0!==r?r:[]}async handleAlignersQuery({selectedMetricType:e,projectName:t}){if(!e)return[];const r=(await this.datasource.getMetricTypes(t)).find(t=>t.type===this.datasource.templateSrv.replace(e));return r?Object(y.d)(r.valueType,r.metricKind).map(this.toFindQueryResult):[]}async handleAggregationQuery({selectedMetricType:e,projectName:t}){if(!e)return[];const r=(await this.datasource.getMetricTypes(t)).find(t=>t.type===this.datasource.templateSrv.replace(e));return r?Object(y.c)(r.valueType,r.metricKind).map(this.toFindQueryResult):[]}async handleSLOServicesQuery({projectName:e}){return(await this.datasource.getSLOServices(e)).map(this.toFindQueryResult)}async handleSLOQuery({selectedSLOService:e,projectName:t}){return(await this.datasource.getServiceLevelObjectives(t,e)).map(this.toFindQueryResult)}async handleSelectorQuery(){return O.h.map(this.toFindQueryResult)}handleAlignmentPeriodQuery(){return O.c.map(this.toFindQueryResult)}toFindQueryResult(e){return Object(s.isString)(e)?{text:e,expandable:!0}:f({},e,{expandable:!0})}}var T,x=r("q1tI"),C=r("/Rrz"),w=r("nKUr");const P=["metricDescriptors","labels","metricTypes","services"];function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class L extends x.PureComponent{constructor(e){super(e),M(this,"queryTypes",[{value:n.d.Projects,label:"Projects"},{value:n.d.Services,label:"Services"},{value:n.d.MetricTypes,label:"Metric Types"},{value:n.d.LabelKeys,label:"Label Keys"},{value:n.d.LabelValues,label:"Label Values"},{value:n.d.ResourceTypes,label:"Resource Types"},{value:n.d.Aggregations,label:"Aggregations"},{value:n.d.Aligners,label:"Aligners"},{value:n.d.AlignmentPeriods,label:"Alignment Periods"},{value:n.d.Selectors,label:"Selectors"},{value:n.d.SLOServices,label:"SLO Services"},{value:n.d.SLO,label:"Service Level Objectives (SLO)"}]),M(this,"defaults",{selectedQueryType:this.queryTypes[0].value,metricDescriptors:[],selectedService:"",selectedMetricType:"",labels:[],labelKey:"",metricTypes:[],services:[],sloServices:[],selectedSLOService:"",projects:[],projectName:"",loading:!0}),M(this,"onPropsChange",()=>{const e=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(this.state,P);this.props.onChange(Q({},e,{refId:"CloudMonitoringVariableQueryEditor-VariableQuery"}))}),this.state=Object.assign(this.defaults,{projectName:this.props.datasource.getDefaultProject()},this.props.query)}async componentDidMount(){const e=await this.props.datasource.getProjects(),t=await this.props.datasource.getMetricTypes(this.props.query.projectName||this.props.datasource.getDefaultProject()),r=Object(y.a)(t).map(e=>({value:e.service,label:e.serviceShortName}));let a="";r.some(e=>e.value===Object(p.getTemplateSrv)().replace(this.state.selectedService))?a=this.state.selectedService:r&&r.length>0&&(a=r[0].value);const{metricTypes:s,selectedMetricType:i}=Object(y.g)(t,this.state.selectedMetricType,Object(p.getTemplateSrv)().replace(this.state.selectedMetricType),Object(p.getTemplateSrv)().replace(a)),c=await this.props.datasource.getSLOServices(this.state.projectName),n=Q({services:r,selectedService:a,metricTypes:s,selectedMetricType:i,metricDescriptors:t,projects:e},await this.getLabels(i,this.state.projectName),{sloServices:c,loading:!1});this.setState(n,()=>this.onPropsChange())}async onQueryTypeChange(e){const t=Q({selectedQueryType:e},await this.getLabels(this.state.selectedMetricType,this.state.projectName,e));this.setState(t)}async onProjectChange(e){const t=await this.props.datasource.getMetricTypes(e),r=await this.getLabels(this.state.selectedMetricType,e),{metricTypes:a,selectedMetricType:s}=Object(y.g)(t,this.state.selectedMetricType,Object(p.getTemplateSrv)().replace(this.state.selectedMetricType),Object(p.getTemplateSrv)().replace(this.state.selectedService)),i=await this.props.datasource.getSLOServices(e);this.setState(Q({},r,{metricTypes:a,selectedMetricType:s,metricDescriptors:t,projectName:e,sloServices:i}),()=>this.onPropsChange())}async onServiceChange(e){const{metricTypes:t,selectedMetricType:r}=Object(y.g)(this.state.metricDescriptors,this.state.selectedMetricType,Object(p.getTemplateSrv)().replace(this.state.selectedMetricType),Object(p.getTemplateSrv)().replace(e)),a=Q({selectedService:e,metricTypes:t,selectedMetricType:r},await this.getLabels(r,this.state.projectName));this.setState(a,()=>this.onPropsChange())}async onMetricTypeChange(e){const t=Q({selectedMetricType:e},await this.getLabels(e,this.state.projectName));this.setState(t,()=>this.onPropsChange())}onLabelKeyChange(e){this.setState({labelKey:e},()=>this.onPropsChange())}componentDidUpdate(e,t){const r=t.selectedQueryType!==this.state.selectedQueryType,a=this.state.selectedSLOService!==t.selectedSLOService;(r||a)&&this.onPropsChange()}async getLabels(e,t,r=this.state.selectedQueryType){let a={labels:this.state.labels,labelKey:this.state.labelKey};if(e&&r===n.d.LabelValues){const r=await Object(y.f)(this.props.datasource,e,t),s=r.some(e=>e===Object(p.getTemplateSrv)().replace(this.state.labelKey))?this.state.labelKey:r[0];a={labels:r,labelKey:s}}return a}renderQueryTypeSwitch(e){const t={label:"Template Variables",expanded:!1,options:Object(p.getTemplateSrv)().getVariables().map(e=>({value:"$"+e.name,label:"$"+e.name}))};switch(e){case n.d.MetricTypes:return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C.q,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),Object(w.jsx)(C.q,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"})]});case n.d.LabelKeys:case n.d.LabelValues:case n.d.ResourceTypes:return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C.q,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),Object(w.jsx)(C.q,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),Object(w.jsx)(C.q,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map(({value:e,name:t})=>({value:e,label:t}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"}),e===n.d.LabelValues&&Object(w.jsx)(C.q,{value:this.state.labelKey,options:[t,...this.state.labels.map(e=>({value:e,label:e}))],onChange:e=>this.onLabelKeyChange(e),label:"Label Key"})]});case n.d.Aligners:case n.d.Aggregations:return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C.q,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),Object(w.jsx)(C.q,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map(({value:e,name:t})=>({value:e,label:t}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"})]});case n.d.SLOServices:return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(C.q,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"})});case n.d.SLO:return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C.q,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),Object(w.jsx)(C.q,{value:this.state.selectedSLOService,options:[t,...this.state.sloServices],onChange:e=>{this.setState(Q({},this.state,{selectedSLOService:e}))},label:"SLO Service"})]});default:return""}}render(){return this.state.loading?T||(T=Object(w.jsxs)("div",{className:"gf-form max-width-21",children:[Object(w.jsx)("span",{className:"gf-form-label width-10 query-keyword",children:"Query Type"}),Object(w.jsx)("div",{className:"gf-form-select-wrapper max-width-12",children:Object(w.jsx)("select",{className:"gf-form-input",children:Object(w.jsx)("option",{children:"Loading..."})})})]})):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C.q,{value:this.state.selectedQueryType,options:this.queryTypes,onChange:e=>this.onQueryTypeChange(e),label:"Query Type"}),this.renderQueryTypeSwitch(this.state.selectedQueryType)]})}}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class D extends a.CustomVariableSupport{constructor(e){super(),N(this,"metricFindQuery",void 0),N(this,"editor",L),this.datasource=e,this.metricFindQuery=new S(e),this.query=this.query.bind(this)}query(e){const t=Object(m.a)(this.metricFindQuery.execute(e.targets[0]));return Object(m.a)(this.datasource.ensureGCEDefaultProject()).pipe(Object(v.b)(()=>t),Object(o.a)(e=>({data:e})))}}var q=r("XlPw");const F=["hide","refId","datasource","key","queryType","maxLines","metric","intervalMs","type"];function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class k extends p.DataSourceWithBackend{constructor(e,t=Object(i.a)(),r=Object(c.a)()){super(e),E(this,"api",void 0),E(this,"authenticationType",void 0),E(this,"intervalMs",void 0),this.instanceSettings=e,this.templateSrv=t,this.timeSrv=r,this.authenticationType=e.jsonData.authenticationType||"jwt",this.api=new g(e.url+"/cloudmonitoring/v3/projects/"),this.variables=new D(this),this.intervalMs=0}getVariables(){return this.templateSrv.getVariables().map(e=>"$"+e.name)}query(e){return e.targets=e.targets.map(t=>G({},this.migrateQuery(t),{intervalMs:e.intervalMs})),super.query(e)}async annotationQuery(e){await this.ensureGCEDefaultProject();const t=e.annotation,r=[{refId:"annotationQuery",type:"annotationQuery",datasourceId:this.id,view:"FULL",crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:"ALIGN_NONE",metricType:this.templateSrv.replace(t.target.metricType,e.scopedVars||{}),title:this.templateSrv.replace(t.target.title,e.scopedVars||{}),text:this.templateSrv.replace(t.target.text,e.scopedVars||{}),tags:this.templateSrv.replace(t.target.tags,e.scopedVars||{}),projectName:this.templateSrv.replace(t.target.projectName?t.target.projectName:this.getDefaultProject(),e.scopedVars||{}),filters:this.interpolateFilters(t.target.filters||[],e.scopedVars)}];return this.api.post({from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:r}).pipe(Object(o.a)(({data:e})=>{const r=Object(p.toDataQueryResponse)({data:e}),a=[];if(0!==r.data.length)for(let e=0;e<r.data.length;e++)for(let s=0;s<r.data[e].fields[0].values.length;s++)a.push({annotation:t,time:Date.parse(r.data[e].fields[0].values.get(s)),title:r.data[e].fields[1].values.get(s),tags:[],text:r.data[e].fields[3].values.get(s)});return a})).toPromise()}applyTemplateVariables({metricQuery:e,refId:t,queryType:r,sloQuery:a},s){return{datasourceId:this.id,refId:t,intervalMs:this.intervalMs,type:"timeSeriesQuery",queryType:r,metricQuery:G({},this.interpolateProps(e,s),{projectName:this.templateSrv.replace(e.projectName?e.projectName:this.getDefaultProject(),s),filters:this.interpolateFilters(e.filters||[],s),groupBys:this.interpolateGroupBys(e.groupBys||[],s),view:e.view||"FULL",editorMode:e.editorMode}),sloQuery:a&&this.interpolateProps(a,s)}}async getLabels(e,t,r,a){const s={targets:[{refId:t,datasourceId:this.id,queryType:n.g.METRICS,metricQuery:{projectName:this.templateSrv.replace(r),metricType:this.templateSrv.replace(e),groupBys:this.interpolateGroupBys(a||[],{}),crossSeriesReducer:"REDUCE_NONE",view:"HEADERS"}}],range:this.timeSrv.timeRange()},i=s.targets;return i.length?Object(m.a)(this.ensureGCEDefaultProject()).pipe(Object(v.b)(()=>this.api.post({from:s.range.from.valueOf().toString(),to:s.range.to.valueOf().toString(),queries:i})),Object(o.a)(({data:e})=>e),Object(o.a)(e=>{const r=e.results[t];return r&&r.meta?r.meta.labels:{}})).toPromise():Object(l.a)({results:[]}).toPromise()}async testDatasource(){let e,t;try{await this.ensureGCEDefaultProject();const r=await this.api.test(this.getDefaultProject());200===r.status?(e="success",t="Successfully queried the Google Cloud Monitoring API."):(e="error",t=r.statusText?r.statusText:"Cannot connect to Google Cloud Monitoring API")}catch(r){e="error",Object(s.isString)(r)?t=r:(t="Google Cloud Monitoring: ",t+=r.statusText?r.statusText:"Cannot connect to Google Cloud Monitoring API",r.data&&r.data.error&&r.data.error.code&&(t+=": "+r.data.error.code+". "+r.data.error.message))}finally{return{status:e,message:t}}}async getGCEDefaultProject(){return this.api.post({queries:[{refId:"getGCEDefaultProject",type:"getGCEDefaultProject",datasourceId:this.id}]}).pipe(Object(o.a)(({data:e})=>e&&e.results&&e.results.getGCEDefaultProject&&e.results.getGCEDefaultProject.meta?e.results.getGCEDefaultProject.meta.defaultProject:""),Object(u.a)(e=>Object(q.a)(e.data.error))).toPromise()}getDefaultProject(){const{defaultProject:e,authenticationType:t,gceDefaultProject:r}=this.instanceSettings.jsonData;return"gce"===t?r||"":e||""}async ensureGCEDefaultProject(){const{authenticationType:e,gceDefaultProject:t}=this.instanceSettings.jsonData;"gce"!==e||t||(this.instanceSettings.jsonData.gceDefaultProject=await this.getGCEDefaultProject())}async getMetricTypes(e){return e?this.api.get(this.templateSrv.replace(e)+"/metricDescriptors",{responseMap:e=>{const[t]=e.type.split("/"),[r]=t.split(".");return e.service=t,e.serviceShortName=r,e.displayName=e.displayName||e.type,e}}):[]}async getSLOServices(e){return this.api.get(this.templateSrv.replace(e)+"/services?pageSize=1000",{responseMap:({name:e,displayName:t})=>({value:e.match(/([^\/]*)\/*$/)[1],label:t||e.match(/([^\/]*)\/*$/)[1]})})}async getServiceLevelObjectives(e,t){if(!t)return Promise.resolve([]);let{projectName:r,serviceId:a}=this.interpolateProps({projectName:e,serviceId:t});return this.api.get(`${r}/services/${a}/serviceLevelObjectives`,{responseMap:({name:e,displayName:t,goal:r})=>({value:e.match(/([^\/]*)\/*$/)[1],label:t,goal:r})})}getProjects(){return this.api.get("projects",{responseMap:({projectId:e,name:t})=>({value:e,label:t}),baseUrl:this.instanceSettings.url+"/cloudresourcemanager/v1/"})}migrateQuery(e){if(!e.hasOwnProperty("metricQuery")){const t=e,{hide:r,refId:a,intervalMs:s,type:i}=t,c=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(t,F);return{refId:a,intervalMs:s,type:i,hide:r,queryType:n.g.METRICS,metricQuery:G({},c,{view:c.view||"FULL"})}}return e}interpolateProps(e,t={}){return Object.entries(e).reduce((e,[r,a])=>G({},e,{[r]:a&&Object(s.isString)(a)?this.templateSrv.replace(a,t):a}),{})}filterQuery(e){if(e.hide)return!1;if(e.queryType&&e.queryType===n.g.SLO&&e.sloQuery){const{selectorName:t,serviceId:r,sloId:a,projectName:s}=e.sloQuery;return!!(t&&r&&a&&s)}if(e.queryType&&e.queryType===n.g.METRICS&&e.metricQuery.editorMode===n.c.MQL)return!!e.metricQuery.projectName&&!!e.metricQuery.query;const{metricType:t}=e.metricQuery;return!!t}interpolateVariablesInQueries(e,t){return e.map(e=>this.applyTemplateVariables(this.migrateQuery(e),t))}interpolateFilters(e,t){const r=Object(s.chunk)(e,4).map(([e,t,r,a])=>G({key:e,operator:t,value:r},a&&{condition:a})).reduce((e,t)=>t.value?[...e,t]:e,[]);return Object(s.flatten)(r.map(({key:e,operator:r,value:a,condition:s})=>[this.templateSrv.replace(e,t||{}),r,this.templateSrv.replace(a,t||{},"regex"),...s?[s]:[]]))||[]}interpolateGroupBys(e,t){let r=[];return(e||[]).forEach(e=>{const a=this.templateSrv.replace(e,t||{},"csv").split(",");Array.isArray(a)?r=r.concat(a):r.push(a)}),r}}var A,I=r("u1gj"),R=r("kDLi"),V=r("vF1F");const _=["project_id","private_key","client_email","token_uri"];function K({onChange:e,isConfigured:t}){const r=Object(R.useStyles)(U),[a,i]=Object(x.useState)(!t),[c,n]=Object(x.useState)(null);return a?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(R.FileUpload,{className:r,accept:"application/json",onFileUpload:t=>{var r,a;if(1===(null==t||null===(r=t.currentTarget)||void 0===r||null===(a=r.files)||void 0===a?void 0:a.length)){n(null);const r=new FileReader,a=()=>t=>{const r=JSON.parse(t.target.result);(e=>!!(e.token_uri&&e.client_email&&e.project_id&&e.project_id))(r)?(e(r),i(!1)):n("Invalid JWT file")};r.onload=a(),r.readAsText(t.currentTarget.files[0])}else n("You can only upload one file")},children:"Upload service account key file"}),c&&Object(w.jsx)("p",{className:Object(V.cx)(r,"alert"),children:c})]}):Object(w.jsxs)(w.Fragment,{children:[_.map((e,t)=>Object(w.jsx)(R.InlineField,{label:Object(s.startCase)(e),labelWidth:20,disabled:!0,children:A||(A=Object(w.jsx)(R.Input,{width:40,placeholder:"configured"}))},t)),Object(w.jsx)(R.Button,{variant:"secondary",onClick:()=>i(!0),className:r,children:"Upload another JWT file"}),Object(w.jsx)(R.Alert,{title:"",className:r,severity:"info",children:"Do not forget to save your changes after uploading a file"})]})}const U=e=>V.css`
  margin: ${e.spacing.md} 0 0;
`;var $,J,B,W,z,X,Y,H,Z,ee,te,re,ae,se,ie,ce,ne,le,oe,ue,pe,he,de,ye,je,be;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}class me extends x.PureComponent{render(){const{options:e,onOptionsChange:t}=this.props,{secureJsonFields:r,jsonData:s}=e;return s.hasOwnProperty("authenticationType")||(s.authenticationType=n.b.JWT),Object(w.jsxs)(w.Fragment,{children:[$||($=Object(w.jsx)("div",{className:"gf-form-group",children:Object(w.jsxs)("div",{className:"grafana-info-box",children:[Object(w.jsx)("h4",{children:"Google Cloud Monitoring Authentication"}),Object(w.jsx)("p",{children:"There are two ways to authenticate the Google Cloud Monitoring plugin - either by uploading a Service Account key file or by automatically retrieving credentials from the Google metadata server. The latter option is only available when running Grafana on a GCE virtual machine."}),Object(w.jsx)("h5",{children:"Uploading a Service Account Key File"}),Object(w.jsx)("p",{children:"There are two ways to authenticate the Google Cloud Monitoring plugin. You can upload a Service Account key file or automatically retrieve credentials from the Google metadata server. The latter option is only available when running Grafana on a GCE virtual machine."}),Object(w.jsxs)("p",{children:["The ",Object(w.jsx)("strong",{children:"Monitoring Viewer"})," role provides all the permissions that Grafana needs. The following API needs to be enabled on GCP for the data source to work:"," ",Object(w.jsx)("a",{className:"external-link",target:"_blank",rel:"noopener noreferrer",href:"https://console.cloud.google.com/apis/library/monitoring.googleapis.com",children:"Monitoring API"})]}),Object(w.jsx)("h5",{children:"GCE Default Service Account"}),Object(w.jsx)("p",{children:"If Grafana is running on a Google Compute Engine (GCE) virtual machine, it is possible for Grafana to automatically retrieve the default project id and authentication token from the metadata server. In order for this to work, you need to make sure that you have a service account that is setup as the default account for the virtual machine and that the service account has been given read access to the Google Cloud Monitoring Monitoring API."}),Object(w.jsxs)("p",{children:["Detailed instructions on how to create a Service Account can be found"," ",Object(w.jsx)("a",{className:"external-link",target:"_blank",rel:"noopener noreferrer",href:"https://grafana.com/docs/grafana/latest/datasources/google-cloud-monitoring/",children:"in the documentation."})]})]})})),Object(w.jsxs)(R.FieldSet,{children:[Object(w.jsx)(R.InlineField,{label:"Authentication type",labelWidth:20,children:Object(w.jsx)(R.Select,{menuShouldPortal:!0,width:40,value:n.i.find(e=>e.value===s.authenticationType)||n.i[0],options:n.i,defaultValue:s.authenticationType,onChange:Object(a.onUpdateDatasourceJsonDataOptionSelect)(this.props,"authenticationType")})}),s.authenticationType===n.b.JWT&&Object(w.jsx)(K,{isConfigured:r&&!!r.jwt,onChange:({private_key:r,client_email:a,project_id:s,token_uri:i})=>{t(ge({},e,{secureJsonData:ge({},e.secureJsonData,{privateKey:r}),jsonData:ge({},e.jsonData,{defaultProject:s,clientEmail:a,tokenUri:i})}))}})]}),s.authenticationType===n.b.GCE&&(J||(J=Object(w.jsx)(R.Alert,{title:"",severity:"info",children:"Verify GCE default service account by clicking Save & Test"})))]})}}class ve extends x.PureComponent{render(){return Object(w.jsxs)("div",{children:[B||(B=Object(w.jsx)("h2",{children:"Cloud Monitoring alias patterns"})),Object(w.jsxs)("div",{children:[W||(W=Object(w.jsx)("p",{children:"Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."})),"Example:",z||(z=Object(w.jsx)("code",{children:"{{metric.name}} - {{metric.label.instance_name}}"})),X||(X=Object(w.jsx)("br",{})),"Result:   ",Y||(Y=Object(w.jsx)("code",{children:"cpu/usage_time - server1-europe-west-1"})),H||(H=Object(w.jsx)("br",{})),Z||(Z=Object(w.jsx)("br",{})),ee||(ee=Object(w.jsx)("label",{children:"Patterns"})),te||(te=Object(w.jsx)("br",{})),Object(w.jsxs)("ul",{className:V.css`
              list-style: none;
            `,children:[re||(re=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metric.type}}"})," = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]})),ae||(ae=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metric.name}}"})," = name part of metric e.g. instance/cpu/usage_time"]})),se||(se=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metric.service}}"})," = service part of metric e.g. compute"]})),ie||(ie=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metric.label.label_name}}"})," = Metric label metadata e.g. metric.label.instance_name"]})),ce||(ce=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{resource.label.label_name}}"})," = Resource label metadata e.g. resource.label.zone"]})),ne||(ne=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metadata.system_labels.name}}"})," = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]})),le||(le=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{metadata.user_labels.name}}"})," = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]})),oe||(oe=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{bucket}}"})," = bucket boundary for distribution metrics when using a heatmap in Grafana"]})),ue||(ue=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{project}}"})," = The project name that was specified in the query editor"]})),pe||(pe=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{service}}"})," = The service id that was specified in the SLO query editor"]})),he||(he=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{slo}}"})," = The SLO id that was specified in the SLO query editor"]})),de||(de=Object(w.jsxs)("li",{children:[Object(w.jsx)("code",{children:"{{selector}}"})," = The Selector function that was specified in the SLO query editor"]}))]})]})]})}}class Oe{constructor(e){this.annotation=e.ctrl.annotation||{},this.annotation.target=e.ctrl.annotation.target||{},this.onQueryChange=this.onQueryChange.bind(this)}onQueryChange(e){Object.assign(this.annotation.target,e)}}Oe.$inject=["$scope"],be="partials/annotations.editor.html",(je="templateUrl")in(ye=Oe)?Object.defineProperty(ye,je,{value:be,enumerable:!0,configurable:!0,writable:!0}):ye[je]=be,r.d(t,"plugin",(function(){return fe}));const fe=new a.DataSourcePlugin(k).setQueryEditorHelp(ve).setQueryEditor(I.a).setConfigEditor(me).setAnnotationQueryCtrl(Oe).setVariableQueryEditor(L)}}]);
//# sourceMappingURL=cloudMonitoringPlugin.807b3f41627421e0a149.js.map