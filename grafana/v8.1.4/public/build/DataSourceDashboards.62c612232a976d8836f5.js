(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{BLAY:function(o,a,e){"use strict";e.r(a),e.d(a,"DataSourceDashboards",(function(){return g}));var t=e("q1tI"),s=e("/MKj"),n=e("ZGyg"),r=e("vHOe"),d=e("lzJ5"),i=e("5BCB"),u=e("jGYO"),c=e("J4KJ"),p=e("frIo"),h=e("nKUr");function b(o,a,e){return a in o?Object.defineProperty(o,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[a]=e,o}const l={importDashboard:c.e,loadDataSource:i.d,loadPluginDashboards:u.b,removeDashboard:c.g},m=Object(s.connect)((function(o,a){const e=a.match.params.uid;return{navModel:Object(d.a)(o.navIndex,"datasource-dashboards-"+e),dashboards:o.plugins.dashboards,dataSource:Object(p.a)(o.dataSources,e),isLoading:o.plugins.isLoadingPluginDashboards,dataSourceId:e}}),l);class g extends t.PureComponent{constructor(...o){super(...o),b(this,"onImport",(o,a)=>{const{dataSource:e,importDashboard:t}=this.props,s={pluginId:o.pluginId,path:o.path,overwrite:a,inputs:[]};e&&s.inputs.push({name:"*",type:"datasource",pluginId:e.type,value:e.name}),t(s,o.title)}),b(this,"onRemove",o=>{this.props.removeDashboard(o.importedUri)})}async componentDidMount(){const{loadDataSource:o,dataSourceId:a}=this.props;await o(a),this.props.loadPluginDashboards()}render(){const{dashboards:o,navModel:a,isLoading:e}=this.props;return Object(h.jsx)(n.b,{navModel:a,children:Object(h.jsx)(n.b.Contents,{isLoading:e,children:Object(h.jsx)(r.a,{dashboards:o,onImport:(o,a)=>this.onImport(o,a),onRemove:o=>this.onRemove(o)})})})}}a.default=m(g)}}]);
//# sourceMappingURL=DataSourceDashboards.62c612232a976d8836f5.js.map