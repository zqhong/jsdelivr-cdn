/*! For license information please see default~explore~jaegerPlugin.62c612232a976d8836f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+A2i":function(e,t){function n(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=n,e.exports.on=n,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,o,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),o=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=s[t.format]||s.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),o.selectNodeContents(c),l.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(o):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return d}},"+VKv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"03AE":function(e,t,n){"use strict";e.exports=function(e){e=e||{};var t,n=!1;for(t in this.sequenceLevels)e[t]?n=!0:this.sequenceLevels[t]=0;n||(this.nextExpectedAction=!1)}},"0WXz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"1Ktg":function(e,t,n){"use strict";var r=n("3LWo"),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function l(e){return r.isMemo(e)?a:o[e.$$typeof]||s}o[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[r.Memo]=a;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(g){var s=p(n);s&&s!==g&&e(t,s,r)}var a=d(n);u&&(a=a.concat(u(n)));for(var o=l(t),f=l(n),m=0;m<a.length;++m){var b=a[m];if(!(i[b]||r&&r[b]||f&&f[b]||o&&o[b])){var v=h(n,b);try{c(t,b,v)}catch(e){}}}}return t}},"1aZc":function(e,t,n){"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"2XSw":function(e,t,n){"use strict";e.exports=function(e,t,n,r,s){this.directMap[e+":"+n]=t;var i,a=(e=e.replace(/\s+/g," ")).split(" ");a.length>1?this.bindSequence(e,a,t,n):(i=this.getKeyInfo(e,n),this.callbacks[i.key]=this.callbacks[i.key]||[],this.getMatches(i.key,i.modifiers,{type:i.action},r,e,s),this.callbacks[i.key][r?"unshift":"push"]({callback:t,modifiers:i.modifiers,action:i.action,seq:r,level:s,combo:e}))}},"3LWo":function(e,t,n){"use strict";e.exports=n("cdav")},"3r5/":function(e,t,n){"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"4Z0I":function(e,t,n){"use strict";e.exports=function(){var e=n("+A2i"),t=this.element;this.eventHandler=n("lI8u").bind(this),e(t,"keypress",this.eventHandler),e(t,"keydown",this.eventHandler),e(t,"keyup",this.eventHandler)}},"4kj3":function(e,t,n){"use strict";function r(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function s(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,t){var n="",i=r(t),a=function(e,t,r,s){if(!e.length)return t+" "+r;var i=t+"\n";return n+="    ",e.forEach((function(t,r){i+=n+s(t)+(r<e.length-1?",":"")+"\n"})),n=n.slice(0,-"    ".length),i+n+r};return"<div "+i("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+i("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+i("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+s(t.toISOString())+'"</span>';case"null":return"<span "+i("json-markup-null")+">null</span>";case"string":return"<span "+i("json-markup-string")+'>"'+s(t.replace(/\n/g,"\n"+n))+'"</span>';case"link":return"<span "+i("json-markup-string")+'>"<a href="'+s(t)+'">'+s(t)+'</a>"</span>';case"array":return a(t,"[","]",e);case"object":var r=Object.keys(t).filter((function(e){return void 0!==t[e]}));return a(r,"{","}",(function(n){return"<span "+i("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"5sUZ":function(e,t,n){"use strict";e.exports=function(e,t){var n=this.constructor;return this.options=Object.assign({storeInstancesGlobally:!0},t||{}),this.callbacks={},this.directMap={},this.sequenceLevels={},this.resetTimer=null,this.ignoreNextKeyup=!1,this.ignoreNextKeypress=!1,this.nextExpectedAction=!1,this.element=e,this.addEvents(),this.options.storeInstancesGlobally&&n.instances.push(this),this},e.exports.prototype.bind=n("zL40"),e.exports.prototype.bindMultiple=n("Z8xD"),e.exports.prototype.unbind=n("3r5/"),e.exports.prototype.trigger=n("IGUK"),e.exports.prototype.reset=n("9V4m"),e.exports.prototype.stopCallback=n("9vlb"),e.exports.prototype.handleKey=n("hrSM"),e.exports.prototype.addEvents=n("4Z0I"),e.exports.prototype.bindSingle=n("2XSw"),e.exports.prototype.getKeyInfo=n("pdZY"),e.exports.prototype.pickBestAction=n("zQGu"),e.exports.prototype.getReverseMap=n("H5sb"),e.exports.prototype.getMatches=n("Tfl2"),e.exports.prototype.resetSequences=n("03AE"),e.exports.prototype.fireCallback=n("Dita"),e.exports.prototype.bindSequence=n("kX/o"),e.exports.prototype.resetSequenceTimer=n("9TO8"),e.exports.prototype.detach=n("Wopw"),e.exports.instances=[],e.exports.reset=n("V280"),e.exports.REVERSE_MAP=null},"5uNx":function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"7vSn":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"9TO8":function(e,t,n){"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"9V4m":function(e,t,n){"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"9vlb":function(e,t,n){"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},Bcrw:function(e,t,n){"use strict";e.exports=function(e){var t,r;if(t=n("id2x"),r=n("pKQe"),"keypress"===e.type){var s=String.fromCharCode(e.which);return e.shiftKey||(s=s.toLowerCase()),s}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},CONf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},Dita:function(e,t,n){"use strict";e.exports=function(e,t,r,s){this.stopCallback(t,t.target||t.srcElement,r,s)||!1===e(t,r)&&(n("5uNx")(t),n("EyJl")(t))}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},EomD:function(e,t,n){"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},EyJl:function(e,t,n){"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"Go+2":function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,d=c&&c(Object);e.exports=function e(t,n,u){if("string"!=typeof n){if(d){var h=c(n);h&&h!==d&&e(t,h,u)}var p=a(n);o&&(p=p.concat(o(n)));for(var g=0;g<p.length;++g){var f=p[g];if(!(r[f]||s[f]||u&&u[f])){var m=l(n,f);try{i(t,f,m)}catch(e){}}}return t}return t}},H5sb:function(e,t,n){"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("id2x"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},IGUK:function(e,t,n){"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},IfRf:function(e,t,n){"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"P8+q":function(e,t,n){var r;r={},e.exports=r,r.simpleFilter=function(e,t){return t.filter((function(t){return r.test(e,t)}))},r.test=function(e,t){return null!==r.match(e,t)},r.match=function(e,t,n){n=n||{};var r,s=0,i=[],a=t.length,o=0,l=0,c=n.pre||"",d=n.post||"",u=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var h=0;h<a;h++)r=t[h],u[h]===e[s]?(r=c+r+d,s+=1,l+=1+l):l=0,o+=l,i[i.length]=r;return s===e.length?(o=u===e?1/0:o,{rendered:i.join(""),score:o}):null},r.filter=function(e,t,n){return t&&0!==t.length?"string"!=typeof e?t:(n=n||{},t.reduce((function(t,s,i,a){var o=s;n.extract&&(o=n.extract(s));var l=r.match(e,o,n);return null!=l&&(t[t.length]={string:l.rendered,score:l.score,index:i,original:s}),t}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},QNYp:function(e,t,n){"use strict";var r=n("q1tI"),s=n.n(r),i=n("vF1F"),a=n("TSYQ"),o=n.n(a),l=n("kDLi"),c=n("1Ktg"),d=n.n(c),u=n("Wwog"),h=n("Zss7"),p=n.n(h),g=n("nKUr");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const m=["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#DA70BF","#4DC19C","#776E57"];let b;!function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light"}(b||(b={}));const v={type:b.Light,borderStyle:"1px solid #bbb",servicesColorPalette:["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#162A65","#DA70BF","#125C77","#4DC19C","#776E57"]};function x(e){return!(!e||!e.type)&&e.type===b.Light}const y=s.a.createContext(void 0);y.displayName="ThemeContext";const j=y.Provider;function w(e){return Object(g.jsx)(y.Consumer,{children:t=>{const n=O(t);return e.children(n)}})}const O=Object(u.default)(e=>{const t={};return x(e)||(t.servicesColorPalette=m),e?f({},v,t,e):v}),T=e=>{let t=t=>Object(g.jsx)(w,{children:n=>Object(g.jsx)(e,f({},f({},t,{theme:n})))});return t.displayName=`WithTheme(${e.displayName})`,t=d()(t,e),t.wrapped=e,t};function _(){const e=Object(r.useContext)(y);return f({},v,e)}const k=e=>Object(u.default)(e);function I(e,t,n){if(x(e))return t;{if(n){const e=p()(t);return p.a.mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=p()(t).toHsl();e.l=1-e.l;const r=p()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}const S=k(()=>({TimelineCollapser:i.css`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `}));function E(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:s}=e,i=S();return Object(g.jsxs)("div",{className:i.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[Object(g.jsx)(l.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),Object(g.jsx)(l.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:s}),Object(g.jsx)(l.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),Object(g.jsx)(l.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var D;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(D||(D={}));var C=D,L=n("LvDl");const N=["getBounds","tag","resetBoundsOnResize"];function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class M{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:r=!0}=e,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,N);R(this,"_bounds",void 0),R(this,"_isDragging",void 0),R(this,"_onMouseEnter",void 0),R(this,"_onMouseLeave",void 0),R(this,"_onMouseMove",void 0),R(this,"_onDragStart",void 0),R(this,"_onDragMove",void 0),R(this,"_onDragEnd",void 0),R(this,"_resetBoundsOnResize",void 0),R(this,"getBounds",void 0),R(this,"tag",void 0),R(this,"handleMouseEnter",void 0),R(this,"handleMouseMove",void 0),R(this,"handleMouseLeave",void 0),R(this,"handleMouseDown",void 0),R(this,"resetBounds",()=>{this._bounds=void 0}),R(this,"_handleMinorMouseEvent",e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let s,i=null;if("mouseenter"===r)i=C.MouseEnter,s=this._onMouseEnter;else if("mouseleave"===r)i=C.MouseLeave,s=this._onMouseLeave;else{if("mousemove"!==r)throw new Error("invalid event type: "+r);i=C.MouseMove,s=this._onMouseMove}if(!s)return;const{value:a,x:o}=this._getPosition(n);s({event:e,type:i,value:a,x:o,manager:this,tag:this.tag})}),R(this,"_handleDragEvent",e=>{const{button:t,clientX:n,type:r}=e;let s,i=null;if("mousedown"===r){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=Object(L.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,i=C.DragStart,s=this._onDragStart}else if("mousemove"===r){if(!this._isDragging)return;i=C.DragMove,s=this._onDragMove}else{if("mouseup"!==r)throw new Error("invalid event type: "+r);if(!this._isDragging)return;this._stopDragging(),i=C.DragEnd,s=this._onDragEnd}if(!s)return;const{value:a,x:o}=this._getPosition(n);s({event:e,type:i,value:a,x:o,manager:this,tag:this.tag})}),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(r),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=s.onMouseEnter,this._onMouseLeave=s.onMouseLeave,this._onMouseMove=s.onMouseMove,this._onDragStart=s.onDragStart,this._onDragMove=s.onDragMove,this._onDragEnd=s.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:s}=this._getBounds();let i=e-t,a=i/s;return null!=r&&a<r?(a=r,i=r*s):null!=n&&a>n&&(a=n,i=n*s),{value:a,x:i}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=Object(L.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const V=k(()=>({TimelineColumnResizer:i.css`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:i.css`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:i.css`
      border-left: 2px solid transparent;
      cursor: col-resize;
      height: 5000px;
      margin-left: -1px;
      position: absolute;
      top: 0;
      width: 1px;
      z-index: 10;
      &:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.3);
      }
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        right: 0;
        content: ' ';
      }
    `,draggerDragging:i.css`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:i.css`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:i.css`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:i.css`
      position: absolute;
      top: 0;
      bottom: 0;
      &::before,
      &::after {
        border-right: 1px solid #ccc;
        content: ' ';
        height: 9px;
        position: absolute;
        right: 9px;
        top: 25px;
      }
      &::after {
        right: 5px;
      }
    `,gripIconDragging:i.css`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `}));class H extends r.PureComponent{constructor(e){super(e),P(this,"state",void 0),P(this,"_dragManager",void 0),P(this,"_rootElm",void 0),P(this,"_setRootElm",e=>{this._rootElm=e}),P(this,"_getDraggingBounds",()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}}),P(this,"_handleDragUpdate",({value:e})=>{this.setState({dragPosition:e})}),P(this,"_handleDragEnd",({manager:e,value:t})=>{e.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(t)}),this._dragManager=new M({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:s}=this.state;e=100*n+"%";const i={left:e};let a=!1,l=!1;const c=V();if(this._dragManager.isDragging()&&this._rootElm&&null!=s){a=s<n,l=s>n,e=100*s+"%";t={left:100*Math.min(n,s)+"%",right:`calc(${100*(1-Math.max(n,s))}% - 1px)`}}else t=i;t.height=r;const d=a||l;return Object(g.jsxs)("div",{className:c.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[Object(g.jsx)("div",{className:o()(c.gripIcon,d&&c.gripIconDragging),style:i,"data-test-id":"TimelineColumnResizer--gripIcon"}),Object(g.jsx)("div",{"aria-hidden":!0,className:o()(c.dragger,d&&c.draggerDragging,l&&c.draggerDraggingRight,a&&c.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=k(()=>({TimelineViewingLayer:i.css`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:i.css`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:i.css`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:i.css`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:i.css`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:i.css`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:i.css`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:i.css`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `}));function A(e,t,n){return e+n*(t-e)}function F(e,t,n){return(n-e)/(t-e)}function z(e,t,n,r,s){const a=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(F(e,t,n),F(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(a))return null;const{isDraggingLeft:o,left:l,width:c}=a,d=B(),u=Object(i.cx)({[d.TimelineViewingLayerDraggedDraggingRight]:!o,[d.TimelineViewingLayerDraggedReframeDrag]:!s,[d.TimelineViewingLayerDraggedShiftDrag]:s});return Object(g.jsx)("div",{className:Object(i.cx)(d.TimelineViewingLayerDragged,d.TimelineViewingLayerDraggedDraggingLeft,u),style:{left:l,width:c},"data-test-id":"Dragged"})}class W extends r.PureComponent{constructor(e){super(e),$(this,"_draggerReframe",void 0),$(this,"_root",void 0),$(this,"_setRoot",e=>{this._root=e}),$(this,"_getDraggingBounds",()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}}),$(this,"_handleReframeMouseMove",({value:e})=>{const[t,n]=this.props.viewRangeTime.current,r=A(t,n,e);this.props.updateNextViewRangeTime({cursor:r})}),$(this,"_handleReframeMouseLeave",()=>{this.props.updateNextViewRangeTime({cursor:void 0})}),$(this,"_handleReframeDragUpdate",({value:e})=>{const{current:t,reframe:n}=this.props.viewRangeTime,[r,s]=t,i=A(r,s,e),a={reframe:{anchor:n?n.anchor:i,shift:i}};this.props.updateNextViewRangeTime(a)}),$(this,"_handleReframeDragEnd",({manager:e,value:t})=>{const{current:n,reframe:r}=this.props.viewRangeTime,[s,i]=n,a=A(s,i,t),o=r?r.anchor:a,[l,c]=a<o?[a,o]:[o,a];e.resetBounds(),this.props.updateViewRangeTime(l,c,"timeline-header")}),this._draggerReframe=new M({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:s,shiftStart:i}=e,[a,o]=t;let l;!(null!=r||null!=s||null!=i)&&null!=n&&n>=a&&n<=o&&(l=100*F(a,o,n)+"%");const c=B();return Object(g.jsxs)("div",{"aria-hidden":!0,className:c.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=l&&Object(g.jsx)("div",{className:c.TimelineViewingLayerCursorGuide,style:{left:l},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&z(a,o,r.anchor,r.shift,!1),null!=s&&z(a,o,o,s,!0),null!=i&&z(a,o,a,i,!0)]})}}var G=n("f0Wu"),U=n.n(G);const K=Math.log10(1e3);const q=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function Z(e,t="microseconds"){let n=e;"microseconds"===t&&(n=e/1e3);let r="ms";return n>=1e3&&(r="s",n/=1e3),Object(L.round)(n,2)+r}function X(e){const{min:t,max:n,viewStart:r,viewEnd:s}=e,i=n-t,a=t+r*i,o=n-(1-s)*i-a;return(e,t)=>({start:(e-a)/o,end:(t-a)/o})}function Y(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some(n=>n.key===e&&n.value===t)}const J=Y.bind(null,"span.kind","client"),Q=Y.bind(null,"span.kind","server"),ee=Y.bind(null,"error",!0),te=Y.bind(null,"error","true"),ne=e=>ee(e)||te(e);const re=k(e=>({Ticks:i.css`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:i.css`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${I(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:i.css`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:i.css`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `}));function se(e){const{endTime:t,numTicks:n,showLabels:r,startTime:s}=e;let i;if(r){i=[];const e=(t||0)-(s||0);for(let t=0;t<n;t++){const r=(s||0)+t/(n-1)*e;i.push(Z(r))}}const a=re(_()),l=[];for(let e=0;e<n;e++){const t=e/(n-1);l.push(Object(g.jsx)("div",{className:a.TicksTick,style:{left:100*t+"%"},children:i&&Object(g.jsx)("span",{className:o()(a.TicksTickLabel,{[a.TicksTickLabelEndAnchor]:t>=1}),children:i[e]})},t))}return Object(g.jsx)("div",{className:a.Ticks,children:l})}se.defaultProps={endTime:null,showLabels:null,startTime:null};const ie=i.css`
  position: relative;
`,ae=i.css`
  margin-bottom: 0.25rem;
`,oe=i.css`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,le=i.css`
  margin: 0;
`,ce=i.css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,de=i.css`
  padding-bottom: 0.5rem;
`,ue=i.css`
  display: flex;
`,he=i.css`
  align-items: center;
`,pe=i.css`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,ge=i.css`
  text-align: right;
`,fe=i.css`
  display: inline-block;
`,me=i.css`
  margin: -0.2rem 0.25rem 0 0;
`,be=i.css`
  text-overflow: ellipsis;
`,ve=i.css`
  width: 100%;
`,xe=i.css`
  color: #aaa;
`,ye=i.css`
  justify-content: flex-end;
`,je=["children","className"],we=["children","className","width","style"];function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Te(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}const _e=k(()=>({flexRow:i.css`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `}));function ke(e){const{children:t,className:n=""}=e,r=Te(e,je),s=_e();return Object(g.jsx)("div",Oe({className:o()(s.flexRow,n)},r,{children:t}))}function Ie(e){const{children:t,className:n="",width:r,style:s}=e,i=Te(e,we),a=100*r+"%",l=Oe({},s,{flexBasis:a,maxWidth:a});return Object(g.jsx)("div",Oe({className:o()(ie,n),style:l},i,{children:t}))}ke.defaultProps={className:""},Ie.defaultProps={className:"",style:{}},ke.Cell=Ie;const Se=k(e=>({TimelineHeaderRow:i.css`
      label: TimelineHeaderRow;
      background: ${I(e,"#ececec")};
      border-bottom: 1px solid ${I(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:i.css`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:i.css`
      label: TimelineHeaderWrapper;
      align-items: center;
    `}));function Ee(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:s,onCollapseOne:i,onColummWidthChange:a,onExpandAll:l,onExpandOne:c,updateViewRangeTime:d,updateNextViewRangeTime:u,viewRangeTime:h,columnResizeHandleHeight:p}=e,[f,m]=h.current,b=Se(_());return Object(g.jsxs)(ke,{className:b.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[Object(g.jsxs)(ke.Cell,{className:o()(ue,ce,b.TimelineHeaderWrapper),width:n,children:[Object(g.jsx)("h4",{className:b.TimelineHeaderRowTitle,children:"Service & Operation"}),Object(g.jsx)(E,{onCollapseAll:s,onExpandAll:l,onCollapseOne:i,onExpandOne:c})]}),Object(g.jsxs)(ke.Cell,{width:1-n,children:[Object(g.jsx)(W,{boundsInvalidator:n,updateNextViewRangeTime:u,updateViewRangeTime:d,viewRangeTime:h}),Object(g.jsx)(se,{numTicks:r,startTime:f*t,endTime:m*t,showLabels:!0})]}),Object(g.jsx)(H,{columnResizeHandleHeight:p,position:n,onChange:a,min:.2,max:.85})]})}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ce{constructor(e){De(this,"bufferLen",void 0),De(this,"dataLen",void 0),De(this,"heights",void 0),De(this,"lastI",void 0),De(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let s=this.lastI;for(-1===this.lastI&&(s=0,this.ys[0]=0);s<=r;){const e=this.heights[s]=t(s);this.ys[s+1]=this.ys[s]+e,s++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const s=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=s;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=s)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,s=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[s])return s;for(;r<s;)if(n=r+.5*(s-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;s=n}throw new Error("unable to find floor index for y="+e)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Re=100;class Me extends r.Component{constructor(e){super(e),Ne(this,"_yPositions",void 0),Ne(this,"_knownHeights",void 0),Ne(this,"_startIndexDrawn",void 0),Ne(this,"_endIndexDrawn",void 0),Ne(this,"_startIndex",void 0),Ne(this,"_endIndex",void 0),Ne(this,"_viewHeight",void 0),Ne(this,"_scrollTop",void 0),Ne(this,"_isScrolledOrResized",void 0),Ne(this,"_htmlTopOffset",void 0),Ne(this,"_windowScrollListenerAdded",void 0),Ne(this,"_htmlElm",void 0),Ne(this,"_wrapperElm",void 0),Ne(this,"_itemHolderElm",void 0),Ne(this,"getViewHeight",()=>this._viewHeight),Ne(this,"getBottomVisibleIndex",()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)}),Ne(this,"getTopVisibleIndex",()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight)),Ne(this,"getRowPosition",e=>this._yPositions.getRowPosition(e,this._getHeight)),Ne(this,"_onScroll",()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))}),Ne(this,"_positionList",()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()}),Ne(this,"_initWrapper",e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))}),Ne(this,"_initItemHolder",e=>{this._itemHolderElm=e,this._scanItemHeights()}),Ne(this,"_scanItemHeights",()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const s=this._itemHolderElm.childNodes,i=s.length;for(let e=0;e<i;e++){const i=s[e],a=i.getAttribute("data-item-key");if(!a){console.warn("itemKey not found");continue}const o=(i.firstElementChild||i).clientHeight;o!==this._knownHeights.get(a)&&(this._knownHeights.set(a,o),r?n=a:(r=!0,t=n=a))}if(null!=t&&null!=n){const r=e(t),s=n===t?r:e(n);this._yPositions.calcHeights(s,this._getHeight,r),this.forceUpdate()}}),Ne(this,"_getHeight",e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)}),this._yPositions=new Ce(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=Re,itemRenderer:r,viewBuffer:s,viewBufferMin:i}=this.props,a=this._getHeight,o=[];let l,c;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=i>this._startIndex?0:this._startIndex-i,n=i<e-this._endIndex?this._endIndex+i:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(l=s>this._startIndex?0:this._startIndex-s,c=this._endIndex+s,c>=e&&(c=e-1)):(l=this._startIndexDrawn,c=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else l=0,c=(n<e?n:e)-1;this._yPositions.calcHeights(c,a,l||-1),this._startIndexDrawn=l,this._endIndexDrawn=c,o.length=c-l+1;for(let e=l;e<=c;e++){const{y:n,height:s}=this._yPositions.getRowPosition(e,a),i={height:s,top:n,position:"absolute"},l=t(e),c={"data-item-key":l};o.push(r(l,i,e,c))}const d={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(d.onScroll=this._onScroll,d.style.height="100%",d.style.overflowY="auto");const u={position:"relative",height:this._yPositions.getEstimatedHeight()};return Object(g.jsx)("div",Le({},d,{children:Object(g.jsx)("div",{style:u,children:Object(g.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:o})})}))}}Ne(Me,"defaultProps",{initialDraw:Re,itemsWrapperClassName:"",windowScroller:!1});var Pe=n("cKlj"),Ve=n.n(Pe),He=n("0WXz"),$e=n.n(He),Be=n("+VKv"),Ae=n.n(Be),Fe=n("CONf"),ze=n.n(Fe),We=n("snuD"),Ge=n.n(We);const Ue=["isLarge","className"];function Ke(){return(Ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const qe=k(()=>({NewWindowIconLarge:i.css`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `}));function Ze(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,Ue),s=qe(),i=o()({[s.NewWindowIconLarge]:t},n);return Object(g.jsx)(Ge.a,Ke({className:i},r))}function Xe(){return(Xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Ze.defaultProps={isLarge:!1};const Ye=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Popover,Xe({},e))})},Je=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Tooltip,Xe({},e))})},Qe=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Icon,Xe({},e))})},et=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Dropdown,Xe({},e))})},tt=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Menu,Xe({},e))})},nt=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.MenuItem,Xe({},e))})},rt=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Button,Xe({},e))})},st=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Divider,Xe({},e))})},it=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.Input,Xe({},e))})},at=function(e){return Object(g.jsx)(ct,{children:t=>Object(g.jsx)(t.InputGroup,Xe({},e))})},ot=s.a.createContext(void 0);ot.displayName="UIElementsContext";var lt=ot;function ct(e){return Object(g.jsx)(ot.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}const dt=s.a.createContext(void 0);dt.displayName="ExternalLinkContext";var ut=dt;const ht=["reference","children","className","focusSpan"];function pt(){return(pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function gt(e){const{reference:t,children:n,className:r,focusSpan:s}=e,i=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,ht);return delete i.onClick,t.span?Object(g.jsx)("a",pt({role:"button",onClick:()=>s(t.spanID),className:r},i,{children:n})):Object(g.jsx)(ut.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return Object(g.jsx)("a",pt({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},i,{children:n}))}})}function ft(){return(ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const mt=k(()=>({MultiParent:i.css`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:i.css`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:i.css`
      margin: 0.2em 0 0;
    `,tooltip:i.css`
      max-width: none;
    `}));class bt extends s.a.PureComponent{constructor(...e){var t,n,r;super(...e),r=e=>{const t=mt();return Object(g.jsx)(tt,{children:e.map(e=>{const{span:n,spanID:r}=e;return Object(g.jsx)(nt,{children:Object(g.jsxs)(gt,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[n?`${n.process.serviceName}:${n.operationName} - ${e.spanID}`:"(another trace) - "+e.spanID,!n&&Object(g.jsx)(Ze,{className:t.NewWindowIcon})]})},""+r)})})},(n="referencesList")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}render(){const{references:e,children:t,tooltipText:n,focusSpan:r}=this.props,s=mt(),i={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:n,overlayClassName:s.tooltip};if(e.length>1)return Object(g.jsx)(Je,ft({},i,{children:Object(g.jsx)(et,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:Object(g.jsx)("a",{className:s.MultiParent,children:t})})}));const a=e[0];return Object(g.jsx)(Je,ft({},i,{children:Object(g.jsx)(gt,{reference:a,focusSpan:r,className:s.MultiParent,children:t})}))}}var vt,xt,yt=n("7vSn"),jt=n.n(yt),wt=n("VYNe"),Ot=n.n(wt);function Tt(e){return Object(L.get)(Object(L.find)(e.references,({span:e,refType:t})=>e&&e.spanID&&("CHILD_OF"===t||"FOLLOWS_FROM"===t)),"span")}function _t(){return(_t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function kt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const It=k(e=>({SpanTreeOffset:i.css`
      label: SpanTreeOffset;
      color: ${I(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:i.css`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:i.css`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${I(e,"lightgrey")};
      }
    `,indentGuideActive:i.css`
      label: indentGuideActive;
      border-color: ${I(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:i.css`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `}));class St extends s.a.PureComponent{constructor(e){super(e),kt(this,"ancestorIds",void 0),kt(this,"handleMouseLeave",(e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&Object(L.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)}),kt(this,"handleMouseEnter",(e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&Object(L.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)}),this.ancestorIds=function(e){const t=[];if(!e)return t;let n=Tt(e);for(;n;)t.push(n.spanID),n=Tt(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:s}=this.props,{hasChildren:i,spanID:a}=r,l=i?{onClick:t,role:"switch","aria-checked":e}:null,c=n&&i&&(e?vt||(vt=Object(g.jsx)(Ot.a,{})):xt||(xt=Object(g.jsx)(jt.a,{}))),d=It(s);return Object(g.jsxs)("span",_t({className:o()(d.SpanTreeOffset,{[d.SpanTreeOffsetParent]:i})},l,{children:[this.ancestorIds.map(e=>Object(g.jsx)("span",{className:o()(d.indentGuide,{[d.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e)),c&&Object(g.jsx)("span",{className:d.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,a),onMouseLeave:e=>this.handleMouseLeave(e,a),"data-test-id":"icon-wrapper",children:c})]}))}}kt(St,"displayName","UnthemedSpanTreeOffset"),kt(St,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});var Et=T(St),Dt=n("rzV7"),Ct=n.n(Dt),Lt=(n("Go+2"),n("xmmm")),Nt=n("bCCX"),Rt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pt=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Vt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ht=function(e,t,n,r,i){if(!e&&t)return n(i?Mt({},r,{children:i}):r);var a=n;return i?s.a.createElement(a,r,i):s.a.createElement(a,r)},$t=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)},Bt=function(e){return Boolean("function"==typeof e&&!$t(e)&&!e.defaultProps&&!e.contextTypes)},At=function(e){var t=Bt(e);return function(n,r){return Ht(!1,t,e,n,r)}},Ft=function(e){return function(t){var n=At(t);return function(t){return n(e(t))}}},zt=function(e,t){for(var n={},r=0;r<t.length;r++){var s=t[r];e.hasOwnProperty(s)&&(n[s]=e[s])}return n},Wt=(Object.keys,function(e){function t(){return Rt(this,t),Vt(this,e.apply(this,arguments))}Pt(t,e),t.prototype.render=function(){return null}}(r.Component),function(e){return function(t){var n=At(t);return function(t){function r(){return Rt(this,r),Vt(this,t.apply(this,arguments))}return Pt(r,t),r.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},r.prototype.render=function(){return n(this.props)},r}(r.Component)}}),Gt=function(e){return Wt((function(t,n){return!Ct()(zt(n,e),zt(t,e))}))};var Ut,Kt={fromESObservable:null,toESObservable:null},qt={fromESObservable:function(e){return"function"==typeof Kt.fromESObservable?Kt.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof Kt.toESObservable?Kt.toESObservable(e):e}},Zt=(Ut=qt,n("ia7v")),Xt=n.n(Zt);var Yt=n("4kj3"),Jt=n.n(Yt),Qt=n("+QRC"),en=n.n(Qt);function tn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const nn=k(()=>({CopyIcon:i.css`
      background-color: transparent;
      border: none;
      color: inherit;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      &:focus {
        background-color: rgba(255, 255, 255, 0.25);
        color: inherit;
      }
    `}));class rn extends r.PureComponent{constructor(...e){super(...e),tn(this,"state",{hasCopied:!1}),tn(this,"handleClick",()=>{this.setState({hasCopied:!0}),en()(this.props.copyText)}),tn(this,"handleTooltipVisibilityChange",e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})})}render(){const e=nn();return Object(g.jsx)(Je,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:Object(g.jsx)(rt,{className:o()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}tn(rn,"defaultProps",{className:void 0,icon:"copy",placement:"left"});const sn=k(e=>({KeyValueTable:i.css`
      label: KeyValueTable;
      background: ${I(e,"#fff")};
      border: 1px solid ${I(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:i.css`
      label: body;
      vertical-align: baseline;
    `,row:i.css`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${I(e,"#f5f5f5")};
      }
      &:not(:hover) .${"copyIcon"} {
        display: none;
      }
    `,keyColumn:i.css`
      label: keyColumn;
      color: ${I(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:i.css`
      label: copyColumn;
      text-align: right;
    `,linkIcon:i.css`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `})),an=/^(\[|\{)/;function on(e){if("string"==typeof e&&an.test(e))try{return JSON.parse(e)}catch(e){}return e}const ln=e=>{const t=sn(_());return Object(g.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",Object(g.jsx)(Qe,{className:t.linkIcon,type:"export"})]})};ln.defaultProps={title:""};const cn=e=>Object(g.jsx)(tt,{children:e.map(({text:e,url:t},n)=>Object(g.jsx)(nt,{children:Object(g.jsx)(ln,{href:t,children:e})},`${t}-${n}`))});function dn(e){const{data:t,linksGetter:n}=e,r=sn(_());return Object(g.jsx)("div",{className:o()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:Object(g.jsx)("table",{className:ve,children:Object(g.jsx)("tbody",{className:r.body,children:t.map((e,s)=>{const i={__html:Jt()(on(e.value))},a=Object(g.jsx)("div",{className:fe,dangerouslySetInnerHTML:i}),o=n?n(t,s):null;let l;return l=o&&1===o.length?Object(g.jsx)("div",{children:Object(g.jsx)(ln,{href:o[0].url,title:o[0].text,children:a})}):o&&o.length>1?Object(g.jsx)("div",{children:Object(g.jsx)(et,{overlay:cn(o),placement:"bottomRight",trigger:["click"],children:Object(g.jsxs)("a",{children:[a," ",Object(g.jsx)(Qe,{className:r.linkIcon,type:"profile"})]})})}):a,Object(g.jsxs)("tr",{className:r.row,children:[Object(g.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),Object(g.jsx)("td",{children:l}),Object(g.jsx)("td",{className:r.copyColumn,children:Object(g.jsx)(rn,{className:"copyIcon",copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${s}`)})})})})}function un(){return(un=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const hn=k(e=>({header:i.css`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${I(e,"#e8e8e8")};
      }
    `,headerEmpty:i.css`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:i.css`
      label: headerHighContrast;
      &:hover {
        background: ${I(e,"#ddd")};
      }
    `,emptyIcon:i.css`
      label: emptyIcon;
      color: ${I(e,"#aaa")};
    `,summary:i.css`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:i.css`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${I(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:i.css`
      label: summaryLabel;
      color: ${I(e,"#777")};
    `,summaryDelim:i.css`
      label: summaryDelim;
      color: ${I(e,"#bbb")};
      padding: 0 0.2em;
    `}));function pn(e){const{data:t}=e,n=hn(_());return Array.isArray(t)&&t.length?Object(g.jsx)("ul",{className:n.summary,children:t.map((e,t)=>Object(g.jsxs)("li",{className:n.summaryItem,children:[Object(g.jsx)("span",{className:n.summaryLabel,children:e.key}),Object(g.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`))}):null}function gn(e){const{className:t,data:n,highContrast:r,interactive:s,isOpen:i,label:a,linksGetter:l,onToggle:c}=e,d=!Array.isArray(n)||!n.length,u=hn(_()),h=o()(me,{[u.emptyIcon]:d});let p=null,f=null;return s&&(p=i?Object(g.jsx)(Ot.a,{className:h}):Object(g.jsx)(Xt.a,{className:h}),f={"aria-checked":i,onClick:d?null:c,role:"switch"}),Object(g.jsxs)("div",{className:o()(t,be),children:[Object(g.jsxs)("div",un({className:o()(u.header,{[u.headerEmpty]:d,[u.headerHighContrast]:r&&!d})},f,{"data-test-id":"AccordianKeyValues--header",children:[p,Object(g.jsxs)("strong",{"data-test":"label",children:[a,i||":"]}),!i&&Object(g.jsx)(pn,{data:n})]})),i&&Object(g.jsx)(dn,{data:n,linksGetter:l})]})}var fn,mn,bn;function vn(){return(vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}pn.defaultProps={data:null},gn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const xn=k(e=>({AccordianLogs:i.css`
      label: AccordianLogs;
      border: 1px solid ${I(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:i.css`
      label: AccordianLogsHeader;
      background: ${I(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${I(e,"#dadada")};
      }
    `,AccordianLogsContent:i.css`
      label: AccordianLogsContent;
      background: ${I(e,"#f0f0f0")};
      border-top: 1px solid ${I(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:i.css`
      label: AccordianLogsFooter;
      color: ${I(e,"#999")};
    `}));function yn(e){const{interactive:t,isOpen:n,linksGetter:r,logs:s,openedItems:i,onItemToggle:a,onToggle:o,timestamp:l}=e;let c=null,d="span",u=null;t&&(c=n?fn||(fn=Object(g.jsx)(Ot.a,{className:me})):mn||(mn=Object(g.jsx)(Xt.a,{className:"u-align-icon"})),d="a",u={"aria-checked":n,onClick:o,role:"switch"});const h=xn(_());return Object(g.jsxs)("div",{className:h.AccordianLogs,children:[Object(g.jsxs)(d,vn({className:h.AccordianLogsHeader},u,{children:[c," ",bn||(bn=Object(g.jsx)("strong",{children:"Logs"}))," (",s.length,")"]})),n&&Object(g.jsxs)("div",{className:h.AccordianLogsContent,children:[Object(L.sortBy)(s,"timestamp").map((e,n)=>Object(g.jsx)(gn,{className:n<s.length-1?ae:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!i&&i.has(e),label:""+Z(e.timestamp-l),linksGetter:r,onToggle:t&&a?()=>a(e):null},`${e.timestamp}-${n}`)),Object(g.jsx)("small",{className:h.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}yn.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const jn=k(e=>({wrapper:i.css`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:i.css`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:i.css`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:i.css`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:i.css`
      label: logMarker;
      background-color: ${I(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${I(e,"#464c54")};
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border: 1px solid transparent;
      }
      &::after {
        left: 0;
      }
    `}));function wn(e){return(100*e).toFixed(1)+"%"}var On,Tn,_n,kn,In,Sn,En,Dn=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}((Tn="label",_n="setLabel",kn=e=>e.shortLabel,function(e){var t=At(e);return function(e){function n(){var t,r;Rt(this,n);for(var s=arguments.length,i=Array(s),a=0;a<s;a++)i[a]=arguments[a];return t=r=Vt(this,e.call.apply(e,[this].concat(i))),r.state={stateValue:"function"==typeof kn?kn(r.props):kn},r.updateStateValue=function(e,t){return r.setState((function(t){var n=t.stateValue;return{stateValue:"function"==typeof e?e(n):e}}),t)},Vt(r,t)}return Pt(n,e),n.prototype.render=function(){var e;return t(Mt({},this.props,((e={})[Tn]=this.state.stateValue,e[_n]=this.updateStateValue,e)))},n}(r.Component)}),(On=({setLabel:e,shortLabel:t,longLabel:n})=>({setLongLabel:()=>e(n),setShortLabel:()=>e(t)}),Ft((function(e){return Mt({},e,"function"==typeof On?On(e):On)}))),Gt(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:n,getViewedBounds:r,color:s,label:i,onClick:a,setLongLabel:l,setShortLabel:c,rpc:d,traceStartTime:u,span:h,theme:p,className:f,labelClassName:m}=e,b=Object(L.groupBy)(h.logs,e=>{const t=r(e.timestamp,e.timestamp).start;return wn(Math.round(500*t)/500)}),v=jn(p);return Object(g.jsxs)("div",{className:o()(v.wrapper,f),onClick:a,onMouseLeave:c,onMouseOver:l,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[Object(g.jsx)("div",{"aria-label":i,className:v.bar,style:{background:s,left:wn(n),width:wn(t-n)},children:Object(g.jsx)("div",{className:o()(v.label,m),"data-test-id":"SpanBar--label",children:i})}),Object(g.jsx)("div",{children:Object.keys(b).map(e=>Object(g.jsx)(Ye,{placement:"topLeft",content:Object(g.jsx)(yn,{interactive:!1,isOpen:!0,logs:b[e],timestamp:u}),children:Object(g.jsx)("div",{className:v.logMarker,style:{left:e}})},e))}),d&&Object(g.jsx)("div",{className:v.rpc,style:{background:d.color,left:wn(d.viewStart),width:wn(d.viewEnd-d.viewStart)}})]})}));function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ln=k(e=>({nameWrapper:i.css`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:i.css`
      label: nameWrapperMatchingFilter;
      background-color: ${I(e,"#fffce4")};
    `,nameColumn:i.css`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:i.css`
      label: endpointName;
      color: ${I(e,"#808080")};
    `,view:i.css`
      label: view;
      position: relative;
    `,viewExpanded:i.css`
      label: viewExpanded;
      background: ${I(e,"#f8f8f8")};
      outline: 1px solid ${I(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:i.css`
      label: viewExpandedAndMatchingFilter;
      background: ${I(e,"#fff3d7")};
      outline: 1px solid ${I(e,"#ddd")};
    `,row:i.css`
      label: row;
      &:hover .${"spanBar"} {
        opacity: 1;
      }
      &:hover .${"spanBarLabel"} {
        color: ${I(e,"#000")};
      }
      &:hover .${"nameWrapper"} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${I(e,"#fafafa")},
          ${I(e,"#f8f8f8")} 75%,
          ${I(e,"#eee")}
        );
      }
      &:hover .${"jaegerView"} {
        background-color: ${I(e,"#f5f5f5")};
        outline: 1px solid ${I(e,"#ddd")};
      }
    `,rowClippingLeft:i.css`
      label: rowClippingLeft;
      & .${"nameColumn"}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${I(e,"rgba(25, 25, 25, 0.25)")},
          ${I(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:i.css`
      label: rowClippingRight;
      & .${"jaegerView"}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${I(e,"rgba(25, 25, 25, 0.25)")},
          ${I(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:i.css`
      label: rowExpanded;
      & .${"spanBar"} {
        opacity: 1;
      }
      & .${"spanBarLabel"} {
        color: ${I(e,"#000")};
      }
      & .${"nameWrapper"}, &:hover .${"nameWrapper"} {
        background: ${I(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${I(e,"#ddd")};
      }
      & .${"nameWrapperMatchingFilter"} {
        background: ${I(e,"#fff3d7")};
      }
      &:hover .${"jaegerView"} {
        background: ${I(e,"#eee")};
      }
    `,rowMatchingFilter:i.css`
      label: rowMatchingFilter;
      background-color: ${I(e,"#fffce4")};
      &:hover .${"nameWrapper"} {
        background: linear-gradient(
          90deg,
          ${I(e,"#fff5e1")},
          ${I(e,"#fff5e1")} 75%,
          ${I(e,"#ffe6c9")}
        );
      }
      &:hover .${"jaegerView"} {
        background-color: ${I(e,"#fff3d7")};
        outline: 1px solid ${I(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:i.css`
      label: rowExpandedAndMatchingFilter;
      &:hover .${"jaegerView"} {
        background: ${I(e,"#ffeccf")};
      }
    `,name:i.css`
      label: name;
      color: ${I(e,"#000")};
      cursor: pointer;
      flex: 1 1 auto;
      outline: none;
      overflow: hidden;
      padding-left: 4px;
      padding-right: 0.25em;
      position: relative;
      text-overflow: ellipsis;
      &::before {
        content: ' ';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 0;
        border-left: 4px solid;
        border-left-color: inherit;
      }

      /* This is so the hit area of the span-name extends the rest of the width of the span-name column */
      &::after {
        background: transparent;
        bottom: 0;
        content: ' ';
        left: 0;
        position: absolute;
        top: 0;
        width: 1000px;
      }
      &:focus {
        text-decoration: none;
      }
      &:hover > small {
        color: ${I(e,"#000")};
      }
    `,nameDetailExpanded:i.css`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:i.css`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:i.css`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:i.css`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${I(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:i.css`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:i.css`
      label: labelRight;
      left: 100%;
    `,labelLeft:i.css`
      label: labelLeft;
      right: 100%;
    `}));class Nn extends r.PureComponent{constructor(...e){super(...e),Cn(this,"_detailToggle",()=>{this.props.onDetailToggled(this.props.span.spanID)}),Cn(this,"_childrenToggle",()=>{this.props.onChildrenToggled(this.props.span.spanID)})}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:s,isMatchingFilter:i,numTicks:a,rpc:l,showErrorIcon:c,getViewedBounds:d,traceStartTime:u,span:h,focusSpan:p,hoverIndentGuideIds:f,addHoverIndentGuideId:m,removeHoverIndentGuideId:b,clippingLeft:v,clippingRight:x,theme:y,createSpanLink:j}=this.props,{duration:w,hasChildren:O,operationName:T,process:{serviceName:_}}=h,k=Z(w),S=d(h.startTime,h.startTime+h.duration),E=S.start,D=S.end,C=Ln(y),L=`${_}::${T}`;let N,R;return E>1-D?(N=`${L} | ${k}`,R=C.labelLeft):(N=`${k} | ${L}`,R=C.labelRight),Object(g.jsxs)(ke,{className:o()(C.row,{[C.rowExpanded]:s,[C.rowMatchingFilter]:i,[C.rowExpandedAndMatchingFilter]:i&&s,[C.rowClippingLeft]:v,[C.rowClippingRight]:x},e),children:[Object(g.jsx)(ke.Cell,{className:o()(C.nameColumn,"nameColumn"),width:n,children:Object(g.jsxs)("div",{className:o()(C.nameWrapper,"nameWrapper",{[C.nameWrapperMatchingFilter]:i,nameWrapperMatchingFilter:i}),children:[Object(g.jsx)(Et,{childrenVisible:r,span:h,onClick:O?this._childrenToggle:void 0,hoverIndentGuideIds:f,addHoverIndentGuideId:m,removeHoverIndentGuideId:b}),Object(g.jsxs)("a",{className:o()(C.name,{[C.nameDetailExpanded]:s}),"aria-checked":s,title:L,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[Object(g.jsxs)("span",{className:o()(C.svcName,{[C.svcNameChildrenCollapsed]:O&&!r}),children:[c&&Object(g.jsx)(Ve.a,{style:{backgroundColor:h.errorIconColor?I(y,h.errorIconColor):I(y,"#db2828")},className:C.errorIcon}),_," ",l&&Object(g.jsxs)("span",{children:[In||(In=Object(g.jsx)($e.a,{}))," ",Object(g.jsx)("i",{className:C.rpcColorMarker,style:{background:l.color}}),l.serviceName]})]}),Object(g.jsx)("small",{className:C.endpointName,children:l?l.operationName:T}),Object(g.jsxs)("small",{className:C.endpointName,children:[" | ",k]})]}),j&&(()=>{const e=j(h);return Object(g.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content})})(),h.references&&h.references.length>1&&Object(g.jsx)(bt,{references:h.references,tooltipText:"Contains multiple references",focusSpan:p,children:Sn||(Sn=Object(g.jsx)(Ae.a,{}))}),h.subsidiarilyReferencedBy&&h.subsidiarilyReferencedBy.length>0&&Object(g.jsx)(bt,{references:h.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===h.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:p,children:En||(En=Object(g.jsx)(ze.a,{}))})]})}),Object(g.jsxs)(ke.Cell,{className:o()(C.view,"jaegerView",{[C.viewExpanded]:s,[C.viewExpandedAndMatchingFilter]:i&&s}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[Object(g.jsx)(se,{numTicks:a}),Object(g.jsx)(Dn,{rpc:l,viewStart:E,viewEnd:D,theme:y,getViewedBounds:d,color:t,shortLabel:k,longLabel:N,traceStartTime:u,span:h,labelClassName:"spanBarLabel "+R,className:"spanBar"})]})]})}}Cn(Nn,"displayName","UnthemedSpanBarRow"),Cn(Nn,"defaultProps",{className:"",rpc:null});var Rn=T(Nn);const Mn=k(()=>({TextList:i.css`
      max-height: 450px;
      overflow: auto;
    `,List:i.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:i.css`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `}));function Pn(e){const{data:t}=e,n=Mn();return Object(g.jsx)("div",{className:o()(n.TextList),"data-test-id":"TextList",children:Object(g.jsx)("ul",{className:n.List,children:t.map((e,t)=>Object(g.jsx)("li",{className:n.item,children:e},""+t))})})}function Vn(){return(Vn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Hn=k(e=>({header:i.css`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${I(e,"#e8e8e8")};
      }
    `}));function $n({data:e}){return Object(g.jsx)(Pn,{data:e})}function Bn(e){const{className:t,data:n,headerClassName:r,interactive:s,isOpen:i,label:a,onToggle:l,TextComponent:c=$n}=e,d=!Array.isArray(n)||!n.length,u=hn(_()),h=o()(me,{[u.emptyIcon]:d});let p=null,f=null;s&&(p=i?Object(g.jsx)(Ot.a,{className:h}):Object(g.jsx)(Xt.a,{className:h}),f={"aria-checked":i,onClick:d?null:l,role:"switch"});const m=Hn(_());return Object(g.jsxs)("div",{className:t||"",children:[Object(g.jsxs)("div",Vn({className:o()(m.header,r)},f,{"data-test-id":"AccordianText--header",children:[p,Object(g.jsx)("strong",{children:a})," (",n.length,")"]})),i&&Object(g.jsx)(c,{data:n})]})}Bn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const An=k(e=>({LabeledList:i.css`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:i.css`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:i.css`
      label: LabeledListLabel;
      color: ${x(e)?"#999":"#666"};
      margin-right: 0.25rem;
    `}));function Fn(e){var t;const{className:n,dividerClassName:r,items:s}=e,i=An(_());return Object(g.jsx)("ul",{className:o()(i.LabeledList,n),children:s.map(({key:e,label:n,value:a},o)=>{const l=o<s.length-1&&Object(g.jsx)("li",{className:i.LabeledListItem,children:t||(t=Object(g.jsx)(st,{className:r,type:"vertical"}))},e+"--divider");return[Object(g.jsxs)("li",{className:i.LabeledListItem,children:[Object(g.jsx)("span",{className:i.LabeledListLabel,children:n}),Object(g.jsx)("strong",{children:a})]},e),l]})})}var zn,Wn;function Gn(){return(Gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Un=k(()=>({ReferencesList:i.css`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:i.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:i.css`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:i.css`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:i.css`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:i.css`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `}));function Kn(e){const{data:t,focusSpan:n}=e,r=Un();return Object(g.jsx)("div",{className:o()(r.ReferencesList),children:Object(g.jsx)("ul",{className:r.list,children:t.map(e=>Object(g.jsx)("li",{className:r.item,children:Object(g.jsx)(gt,{reference:e,focusSpan:n,children:Object(g.jsxs)("span",{className:r.itemContent,children:[e.span?Object(g.jsxs)("span",{children:[Object(g.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),Object(g.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):zn||(zn=Object(g.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),Object(g.jsxs)("small",{className:r.debugInfo,children:[Object(g.jsx)("span",{className:r.debugLabel,"data-label":"Reference Type:",children:e.refType}),Object(g.jsx)("span",{className:r.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},""+e.spanID))})})}class qn extends r.PureComponent{render(){const{data:e,interactive:t,isOpen:n,onToggle:r,focusSpan:s}=this.props,i=!Array.isArray(e)||!e.length,a=me;let o=null,l=null;return t&&(o=n?Object(g.jsx)(Ot.a,{className:a}):Object(g.jsx)(Xt.a,{className:a}),l={"aria-checked":n,onClick:i?null:r,role:"switch"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",Gn({},l,{children:[o,Wn||(Wn=Object(g.jsx)("strong",{children:Object(g.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),n&&Object(g.jsx)(Kn,{data:e,focusSpan:s})]})}}var Zn,Xn,Yn;function Jn(){return(Jn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Yn={highContrast:!1,interactive:!0,onToggle:null},(Xn="defaultProps")in(Zn=qn)?Object.defineProperty(Zn,Xn,{value:Yn,enumerable:!0,configurable:!0,writable:!0}):Zn[Xn]=Yn;const Qn=k(e=>({divider:i.css`
      label: divider;
      background: ${I(e,"#ddd")};
    `,dividerVertical:i.css`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:i.css`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:i.css`
      label: debugLabel;
      &::before {
        color: ${I(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:i.css`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${I(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${I(e,"#333")};
      }
    `,AccordianWarnings:i.css`
      label: AccordianWarnings;
      background: ${I(e,"#fafafa")};
      border: 1px solid ${I(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:i.css`
      label: AccordianWarningsHeader;
      background: ${I(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${I(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:i.css`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${I(e,"#e8e8e8")};
    `,AccordianWarningsLabel:i.css`
      label: AccordianWarningsLabel;
      color: ${I(e,"#d36c08")};
    `,Textarea:i.css`
      word-break: break-all;
      white-space: pre;
    `}));function er(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:s,processToggle:i,span:a,tagsToggle:c,traceStartTime:d,warningsToggle:u,stackTracesToggle:h,referencesToggle:p,focusSpan:f,createSpanLink:m}=e,{isTagsOpen:b,isProcessOpen:v,logs:x,isWarningsOpen:y,isReferencesOpen:j,isStackTracesOpen:w}=t,{operationName:O,process:T,duration:k,relativeStartTime:I,spanID:S,logs:E,tags:D,warnings:C,references:L,stackTraces:N}=a,R=[{key:"svc",label:"Service:",value:T.serviceName},{key:"duration",label:"Duration:",value:Z(k)},{key:"start",label:"Start Time:",value:Z(I)}],M=`${window.location.origin}${window.location.pathname}?uiFind=${S}`,P=Qn(_()),V=null==m?void 0:m(a);return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:o()(ue,he,ae),children:[Object(g.jsx)("h2",{className:o()(pe,le),children:O}),Object(g.jsx)(Fn,{className:ge,dividerClassName:P.divider,items:R})]}),V?Object(g.jsx)(l.DataLinkButton,{link:Jn({},V,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,Object(g.jsx)(st,{className:o()(P.divider,P.dividerVertical,oe)}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(gn,{data:D,label:"Tags",linksGetter:n,isOpen:b,onToggle:()=>c(S)}),T.tags&&Object(g.jsx)(gn,{className:ae,data:T.tags,label:"Process",linksGetter:n,isOpen:v,onToggle:()=>i(S)})]}),E&&E.length>0&&Object(g.jsx)(yn,{linksGetter:n,logs:E,isOpen:x.isOpen,openedItems:x.openedItems,onToggle:()=>s(S),onItemToggle:e=>r(S,e),timestamp:d}),C&&C.length>0&&Object(g.jsx)(Bn,{className:P.AccordianWarnings,headerClassName:P.AccordianWarningsHeader,label:Object(g.jsx)("span",{className:P.AccordianWarningsLabel,children:"Warnings"}),data:C,isOpen:y,onToggle:()=>u(S)}),N&&N.length&&Object(g.jsx)(Bn,{label:"Stack trace",data:N,isOpen:w,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map((e,t)=>`StackTrace ${t+1}:\n${e}`).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return Object(g.jsx)(l.TextArea,{className:P.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>h(S)}),L&&L.length>1&&Object(g.jsx)(qn,{data:L,isOpen:j,onToggle:()=>p(S),focusSpan:f}),Object(g.jsxs)("small",{className:P.debugInfo,children:[Object(g.jsx)("span",{className:P.debugLabel,"data-label":"SpanID:"})," ",S,Object(g.jsx)(rn,{copyText:M,icon:"link",placement:"topRight",tooltipTitle:"Copy deep link to this span"})]})]})]})}function tr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const nr=k(e=>({expandedAccent:i.css`
      cursor: pointer;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      &::before {
        border-left: 4px solid;
        pointer-events: none;
        width: 1000px;
      }
      &::after {
        border-right: 1000px solid;
        border-color: inherit;
        cursor: pointer;
        opacity: 0.2;
      }

      /* border-color inherit must come AFTER other border declarations for accent */
      &::before,
      &::after {
        border-color: inherit;
        content: ' ';
        position: absolute;
        height: 100%;
      }

      &:hover::after {
        opacity: 0.35;
      }
    `,infoWrapper:i.css`
      label: infoWrapper;
      border: 1px solid ${I(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `}));class rr extends s.a.PureComponent{constructor(...e){super(...e),tr(this,"_detailToggle",()=>{this.props.onDetailToggled(this.props.span.spanID)}),tr(this,"_linksGetter",(e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)})}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:s,processToggle:i,referencesToggle:a,warningsToggle:o,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:u,focusSpan:h,hoverIndentGuideIds:p,addHoverIndentGuideId:f,removeHoverIndentGuideId:m,theme:b,createSpanLink:v}=this.props,x=nr(b);return Object(g.jsxs)(ke,{children:[Object(g.jsxs)(ke.Cell,{width:t,style:{overflow:"hidden"},children:[Object(g.jsx)(Et,{span:c,showChildrenIcon:!1,hoverIndentGuideIds:p,addHoverIndentGuideId:f,removeHoverIndentGuideId:m}),Object(g.jsx)("span",{children:Object(g.jsx)("span",{className:x.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),Object(g.jsx)(ke.Cell,{width:1-t,children:Object(g.jsx)("div",{className:x.infoWrapper,style:{borderTopColor:e},children:Object(g.jsx)(er,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:s,processToggle:i,referencesToggle:a,warningsToggle:o,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:u,focusSpan:h,createSpanLink:v})})})]})}}var sr=T(rr);function ir(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ar(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class or{constructor(e){ir(this,"colorsHex",void 0),ir(this,"colorsRgb",void 0),ir(this,"cache",void 0),ir(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(ar),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const lr=Object(u.default)(e=>new or(e));function cr(e,t){return lr(t.servicesColorPalette).getColorByKey(e)}function dr(){return(dr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ur(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const hr=k(()=>({rowsWrapper:i.css`
      width: 100%;
    `,row:i.css`
      width: 100%;
    `})),pr=28,gr=161,fr=197;function mr(e,t,n){if(!e)return[];let r=null;const s=[];for(let i=0;i<e.length;i++){const a=e[i],{spanID:o,depth:l}=a;let c=!1;null!=r&&(l>=r?c=!0:r=null),c||(t.has(o)&&(r=l+1),s.push({span:a,isDetail:!1,spanIndex:i}),n.has(o)&&s.push({span:a,isDetail:!0,spanIndex:i}))}return s}function br(e){const[t,n]=e;return{left:t>0,right:n<1}}class vr extends r.Component{constructor(e){super(e),ur(this,"clipping",void 0),ur(this,"listView",void 0),ur(this,"rowStates",void 0),ur(this,"getViewedBounds",void 0),ur(this,"getViewRange",()=>this.props.currentViewRangeTime),ur(this,"getSearchedSpanIDs",()=>this.props.findMatchesIDs),ur(this,"getCollapsedChildren",()=>this.props.childrenHiddenIDs),ur(this,"mapRowIndexToSpanIndex",e=>this.rowStates[e].spanIndex),ur(this,"mapSpanIndexToRowIndex",e=>{const t=this.rowStates.length;for(let n=0;n<t;n++){const{spanIndex:t}=this.rowStates[n];if(t===e)return n}throw new Error("unable to find row for span index: "+e)}),ur(this,"setListView",e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())}),ur(this,"getKeyFromIndex",e=>{const{isDetail:t,span:n}=this.rowStates[e];return`${n.spanID}--${t?"detail":"bar"}`}),ur(this,"getIndexFromKey",e=>{const t=e.split("--"),n=t[0],r="detail"===t[1],s=this.rowStates.length;for(let e=0;e<s;e++){const{span:t,isDetail:s}=this.rowStates[e];if(t.spanID===n&&s===r)return e}return-1}),ur(this,"getRowHeight",e=>{const{span:t,isDetail:n}=this.rowStates[e];return n?Array.isArray(t.logs)&&t.logs.length?fr:gr:pr}),ur(this,"renderRow",(e,t,n,r)=>{const{isDetail:s,span:i,spanIndex:a}=this.rowStates[n];return s?this.renderSpanDetailRow(i,e,t,r):this.renderSpanBarRow(i,a,e,t,r)});const{currentViewRangeTime:t,childrenHiddenIDs:n,detailStates:r,setTrace:s,trace:i,uiFind:a}=e;this.clipping=br(t);const[o,l]=t;this.getViewedBounds=X({min:i.startTime,max:i.endTime,viewStart:o,viewEnd:l}),this.rowStates=mr(i.spans,n,r),s(i,a)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}UNSAFE_componentWillUpdate(e){const{childrenHiddenIDs:t,detailStates:n,registerAccessors:r,trace:s,currentViewRangeTime:i}=this.props,{currentViewRangeTime:a,childrenHiddenIDs:o,detailStates:l,registerAccessors:c,setTrace:d,trace:u,uiFind:h}=e;if(s!==u&&d(u,h),s===u&&t===o&&n===l||(this.rowStates=u?mr(u.spans,o,l):[]),i!==a||s!==u&&u){this.clipping=br(a);const[e,t]=a;this.getViewedBounds=X({min:u.startTime,max:u.endTime,viewStart:e,viewEnd:t})}this.listView&&r!==c&&c(this.getAccessors())}componentDidUpdate(){const{shouldScrollToFirstUiFindMatch:e,clearShouldScrollToFirstUiFindMatch:t,scrollToFirstVisibleSpan:n}=this.props;e&&(n(),t())}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,s){const{spanID:i}=e,{serviceName:a}=e.process,{childrenHiddenIDs:o,childrenToggle:l,detailStates:c,detailToggle:d,findMatchesIDs:u,spanNameColumnWidth:h,trace:p,focusSpan:f,hoverIndentGuideIds:m,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,theme:x,createSpanLink:y}=this.props;if(!p)return null;const j=cr(a,x),w=o.has(i),O=c.has(i),T=!!u&&u.has(i),_=ne(e)||w&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(ne(e[r]))return!0;return!1}(p.spans,t);let k=null;if(w){const e=function(e){if(e.length<=1||!J(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if(Q(e[n]))return e[n];n++}return null}(p.spans.slice(t));if(e){const t=this.getViewedBounds(e.startTime,e.startTime+e.duration);k={color:cr(e.process.serviceName,x),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const I=hr();return Object(g.jsx)("div",dr({className:I.row,style:r},s,{children:Object(g.jsx)(Rn,{clippingLeft:this.clipping.left,clippingRight:this.clipping.right,color:j,columnDivision:h,isChildrenExpanded:!w,isDetailExpanded:O,isMatchingFilter:T,numTicks:5,onDetailToggled:d,onChildrenToggled:l,rpc:k,showErrorIcon:_,getViewedBounds:this.getViewedBounds,traceStartTime:p.startTime,span:e,focusSpan:f,hoverIndentGuideIds:m,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,createSpanLink:y})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:s}=e,{serviceName:i}=e.process,{detailLogItemToggle:a,detailLogsToggle:o,detailProcessToggle:l,detailReferencesToggle:c,detailWarningsToggle:d,detailStackTracesToggle:u,detailStates:h,detailTagsToggle:p,detailToggle:f,spanNameColumnWidth:m,trace:b,focusSpan:v,hoverIndentGuideIds:x,addHoverIndentGuideId:y,removeHoverIndentGuideId:j,linksGetter:w,theme:O,createSpanLink:T}=this.props,_=h.get(s);if(!b||!_)return null;const k=cr(i,O),I=hr();return Object(g.jsx)("div",dr({className:I.row,style:dr({},n,{zIndex:1})},r,{children:Object(g.jsx)(sr,{color:k,columnDivision:m,onDetailToggled:f,detailState:_,linksGetter:w,logItemToggle:a,logsToggle:o,processToggle:l,referencesToggle:c,warningsToggle:d,stackTracesToggle:u,span:e,tagsToggle:p,traceStartTime:b.startTime,focusSpan:v,hoverIndentGuideIds:x,addHoverIndentGuideId:y,removeHoverIndentGuideId:j,createSpanLink:T})}),t)}render(){const e=hr(),{scrollElement:t}=this.props;return Object(g.jsx)("div",{children:Object(g.jsx)(Me,{ref:this.setListView,dataLength:this.rowStates.length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}var xr=T(vr),yr=n("5sUZ"),jr=n.n(yr);var wr={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let Or;function Tr(){if(Or)return Or;const e=new jr.a(document.body);return Or=e,e}const _r=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"];function kr(){return(kr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ir(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Sr=k(e=>({TraceTimelineViewer:i.css`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${I(e,"#bbb")};

      & .json-markup {
        line-height: 17px;
        font-size: 13px;
        font-family: monospace;
        white-space: pre-wrap;
      }

      & .json-markup-key {
        font-weight: bold;
      }

      & .json-markup-bool {
        color: ${I(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${I(e,"teal")};
      }

      & .json-markup-null {
        color: ${I(e,"teal")};
      }

      & .json-markup-number {
        color: ${I(e,"blue","black")};
      }
    `}));class Er extends s.a.PureComponent{constructor(e){super(e),Ir(this,"collapseAll",()=>{this.props.collapseAll(this.props.trace.spans)}),Ir(this,"collapseOne",()=>{this.props.collapseOne(this.props.trace.spans)}),Ir(this,"expandAll",()=>{this.props.expandAll()}),Ir(this,"expandOne",()=>{this.props.expandOne(this.props.trace.spans)}),this.state={height:0}}componentDidMount(){!function(e){const t=Tr();Object.keys(e).forEach(n=>{const r=e[n];r&&t.bind(wr[n].binding,r)})}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:s,createLinkToExternalSpan:i,traceTimeline:a,theme:o}=e,l=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,_r),{trace:c}=l,d=Sr(o);return Object(g.jsx)(ut.Provider,{value:i,children:Object(g.jsxs)("div",{className:d.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[Object(g.jsx)(Ee,{duration:c.duration,nameColumnWidth:a.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:s.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),Object(g.jsx)(xr,kr({},l,a,{setSpanNameColumnWidth:t,currentViewRangeTime:s.time.current}))]})})}}var Dr=T(Er),Cr=n("rhR/"),Lr=n.n(Cr);function Nr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Rr=k(e=>({CanvasSpanGraph:i.css`
      label: CanvasSpanGraph;
      background: ${I(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `}));class Mr extends r.PureComponent{constructor(e){super(e),Nr(this,"_canvasElm",void 0),Nr(this,"getColor",e=>function(e,t){return lr(t.servicesColorPalette).getRgbColorByKey(e)}(e,this.props.theme)),Nr(this,"_setCanvasRef",e=>{this._canvasElm=e}),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,s){const i=new Map,a=t.length<60?60:Math.min(t.length,200),o=2*window.innerWidth;e.width=o,e.height=a;const l=Math.min(6,Math.max(2,a/t.length)),c=a/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=s,d.fillRect(0,0,o,a);for(let e=0;e<t.length;e++){const{valueWidth:s,valueOffset:a,serviceName:u}=t[e],h=a/n*o;let p=s/n*o;p<10&&(p=10);let g=i.get(u);g||(g=`rgba(${r(u).concat(.8).join()})`,i.set(u,g)),d.fillStyle=g,d.fillRect(h,e*c,p,l)}}(this._canvasElm,t,e,this.getColor,I(this.props.theme,"#fff"))}}render(){return Object(g.jsx)("canvas",{className:Rr(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}var Pr=T(Mr);const Vr=k(()=>({TickLabels:i.css`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:i.css`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `}));function Hr(e){const{numTicks:t,duration:n}=e,r=Vr(),s=[];for(let e=0;e<t+1;e++){const i=e/t,a=1===i?{right:"0%"}:{left:100*i+"%"};s.push(Object(g.jsx)("div",{className:r.TickLabelsLabel,style:a,"data-test":"tick",children:Z(n*i)},i))}return Object(g.jsx)("div",{className:r.TickLabels,children:s})}const $r=k(()=>({GraphTick:i.css`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `}));function Br(e){const{numTicks:t}=e,n=[];for(let e=1;e<t;e++){const r=e/t*100+"%";n.push(Object(g.jsx)("line",{className:$r().GraphTick,x1:r,y1:"0%",x2:r,y2:"100%"},e/t))}return Object(g.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:n})}const Ar=k(()=>({ScrubberHandleExpansion:o()(i.css`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:o()(i.css`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:o()(i.css`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:i.css`
      label: ScrubberDragging;
      & .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      & .scrubber-handle {
        fill: #44f;
      }
      & > .scrubber-line {
        stroke: #44f;
      }
    `,ScrubberHandles:i.css`
      label: ScrubberHandles;
      &:hover > .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      &:hover > .scrubber-handle {
        fill: #44f;
      }
      &:hover + .scrubber.line {
        stroke: #44f;
      }
    `}));function Fr({isDragging:e,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,position:s}){const i=100*s+"%",a=Ar(),l=o()({[a.ScrubberDragging]:e});return Object(g.jsxs)("g",{className:l,children:[Object(g.jsxs)("g",{className:a.ScrubberHandles,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,children:[Object(g.jsx)("rect",{x:i,className:a.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),Object(g.jsx)("rect",{x:i,className:a.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),Object(g.jsx)("line",{className:a.ScrubberLine,y2:"100%",x1:i,x2:i})]})}function zr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Wr=k(e=>{const t=i.css`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:i.css`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${"JaegerUiComponents__ViewingLayerResetZoomHoverClassName"} {
        display: unset;
      }
    `,ViewingLayerGraph:i.css`
      label: ViewingLayerGraph;
      border: 1px solid ${I(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:i.css`
      label: ViewingLayerInactive;
      fill: ${I(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:i.css`
      label: ViewingLayerCursorGuide;
      stroke: ${I(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:i.css`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:i.css`
      label: ViewingLayerDrag;
      fill: ${I(e,"#44f")};
    `,ViewingLayerFullOverlay:i.css`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:t,ViewingLayerResetZoomHoverClassName:"JaegerUiComponents__ViewingLayerResetZoomHoverClassName"}}),Gr="SHIFT_END",Ur="SHIFT_START",Kr="REFRAME";class qr extends r.PureComponent{constructor(e){super(e),zr(this,"state",void 0),zr(this,"_root",void 0),zr(this,"_draggerReframe",void 0),zr(this,"_draggerStart",void 0),zr(this,"_draggerEnd",void 0),zr(this,"_setRoot",e=>{this._root=e}),zr(this,"_getDraggingBounds",e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,s]=this.props.viewRange.time.current;let i=1,a=0;return e===Ur?i=s:e===Gr&&(a=r),{clientXLeft:t,maxValue:i,minValue:a,width:n}}),zr(this,"_handleReframeMouseMove",({value:e})=>{this.props.updateNextViewRangeTime({cursor:e})}),zr(this,"_handleReframeMouseLeave",()=>{this.props.updateNextViewRangeTime({cursor:null})}),zr(this,"_handleReframeDragUpdate",({value:e})=>{const t=e,{time:n}=this.props.viewRange,r={reframe:{anchor:n.reframe?n.reframe.anchor:t,shift:t}};this.props.updateNextViewRangeTime(r)}),zr(this,"_handleReframeDragEnd",({manager:e,value:t})=>{const{time:n}=this.props.viewRange,r=n.reframe?n.reframe.anchor:t,[s,i]=t<r?[t,r]:[r,t];e.resetBounds(),this.props.updateViewRangeTime(s,i,"minimap")}),zr(this,"_handleScrubberEnterLeave",({type:e})=>{const t=e===C.MouseEnter;this.setState({preventCursorLine:t})}),zr(this,"_handleScrubberDragUpdate",({event:e,tag:t,type:n,value:r})=>{n===C.DragStart&&e.stopPropagation(),t===Ur?this.props.updateNextViewRangeTime({shiftStart:r}):t===Gr&&this.props.updateNextViewRangeTime({shiftEnd:r})}),zr(this,"_handleScrubberDragEnd",({manager:e,tag:t,value:n})=>{const[r,s]=this.props.viewRange.time.current;let i;if(t===Ur)i=[n,s];else{if(t!==Gr)throw new Error("bad state");i=[r,n]}e.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(i[0],i[1],"minimap")}),zr(this,"_resetTimeZoomClickHandler",()=>{this.props.updateViewRangeTime(0,1)}),this._draggerReframe=new M({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:Kr}),this._draggerStart=new M({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Ur}),this._draggerEnd=new M({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Gr}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=Wr(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[Object(g.jsx)("rect",{className:o()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),Object(g.jsx)("rect",{className:o()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:s}=this.state,{current:i,cursor:a,shiftStart:l,shiftEnd:c,reframe:d}=t.time,u=null!=l||null!=c||null!=d,[h,p]=i;let f=0;h&&(f=100*h);let m,b=100;p&&(b=100-100*p),u||null==a||s||(m=100*a+"%");const v=Wr(r);return Object(g.jsxs)("div",{"aria-hidden":!0,className:v.ViewingLayer,style:{height:e},children:[(0!==h||1!==p)&&Object(g.jsx)(rt,{onClick:this._resetTimeZoomClickHandler,className:o()(v.ViewingLayerResetZoom,v.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),Object(g.jsxs)("svg",{height:e,className:v.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[f>0&&Object(g.jsx)("rect",{x:0,y:0,height:"100%",width:f+"%",className:v.ViewingLayerInactive}),b>0&&Object(g.jsx)("rect",{x:100-b+"%",y:0,height:"100%",width:b+"%",className:v.ViewingLayerInactive}),Object(g.jsx)(Br,{numTicks:n}),m&&Object(g.jsx)("line",{className:v.ViewingLayerCursorGuide,x1:m,y1:"0",x2:m,y2:e-2,strokeWidth:"1"}),null!=l&&this._getMarkers(h,l),null!=c&&this._getMarkers(p,c),Object(g.jsx)(Fr,{isDragging:null!=l,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:h||0}),Object(g.jsx)(Fr,{isDragging:null!=c,position:p||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=d&&this._getMarkers(d.anchor,d.shift)]}),u&&Object(g.jsx)("div",{className:v.ViewingLayerFullOverlay})]})}}var Zr,Xr=T(qr);function Yr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jr(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}class Qr extends r.PureComponent{constructor(e){super(e),Yr(this,"state",void 0);const{trace:t}=e;this.state={items:t?t.spans.map(Jr):[]}}UNSAFE_componentWillReceiveProps(e){const{trace:t}=e;this.props.trace!==t&&this.setState({items:t?t.spans.map(Jr):[]})}render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:s}=this.props;if(!t)return Zr||(Zr=Object(g.jsx)("div",{}));const{items:i}=this.state;return Object(g.jsxs)("div",{className:o()(de,ce),children:[Object(g.jsx)(Hr,{numTicks:4,duration:t.duration}),Object(g.jsxs)("div",{className:ie,children:[Object(g.jsx)(Pr,{valueWidth:t.duration,items:i}),Object(g.jsx)(Xr,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:s,updateNextViewRangeTime:r})]})]})}}Yr(Qr,"defaultProps",{height:60});var es=n("yD29"),ts=n.n(es);function ns(){return(ns=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function rs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ss extends r.PureComponent{constructor(...e){super(...e),rs(this,"clearUiFind",()=>{this.props.onChange("")})}render(){const{allowClear:e,inputProps:t,value:n}=this.props,r=Object(g.jsxs)(g.Fragment,{children:[e&&n&&n.length&&Object(g.jsx)(Qe,{type:"close",onClick:this.clearUiFind}),t.suffix]});return Object(g.jsx)(it,ns({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:r,value:n}))}}var is;rs(ss,"defaultProps",{inputProps:{},trackFindFunction:void 0,value:void 0});const as=k(()=>({TracePageSearchBar:i.css`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:i.css`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:i.css`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:i.css`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:i.css`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:i.css`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}));var os=Object(r.memo)((function(e){const{clearSearch:t,focusUiFindMatches:n,navigable:r,nextResult:s,prevResult:i,resultCount:a,textFilter:l,onSearchValueChange:c,searchValue:d,hideSearchButtons:u}=e,h=as(),p=l?Object(g.jsx)("span",{className:h.TracePageSearchBarCount,children:a}):null,f=o()(h.TracePageSearchBarBtn,{[h.TracePageSearchBarBtnDisabled]:!l}),m={"data-test":"in-trace-search",className:o()(h.TracePageSearchBarBar,pe),name:"search",suffix:p};return Object(g.jsx)("div",{className:h.TracePageSearchBar,children:Object(g.jsxs)(at,{className:ye,compact:!0,style:{display:"flex"},children:[Object(g.jsx)(ss,{onChange:c,value:d,inputProps:m}),!u&&Object(g.jsxs)(g.Fragment,{children:[r&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(rt,{className:o()(f,h.TracePageSearchBarLocateBtn),disabled:!l,htmlType:"button",onClick:n,children:is||(is=Object(g.jsx)(ts.a,{}))}),Object(g.jsx)(rt,{className:f,disabled:!l,htmlType:"button",icon:"up",onClick:i}),Object(g.jsx)(rt,{className:f,disabled:!l,htmlType:"button",icon:"down",onClick:s})]}),Object(g.jsx)(rt,{className:f,disabled:!l,htmlType:"button",icon:"close",onClick:t})]})]})})}));const ls=k(()=>({BreakableText:i.css`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `})),cs=/\W*\w+\W*/g;function ds(e){const{className:t,text:n,wordRegexp:r=cs}=e;if(!n)return"string"==typeof n?n:null;const s=[];r.exec("");let i=r.exec(n)||[n];for(;i;)s.push(Object(g.jsx)("span",{className:t||ls().BreakableText,children:i[0]},`${n}-${s.length}`)),i=r.exec(n);return s}ds.defaultProps={wordRegexp:cs};const us=["centered","className","small"];function hs(){return(hs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ps=k(()=>{const e=i.keyframes`
    /*
    rgb(0, 128, 128) == teal
    rgba(0, 128, 128, 0.3) == #bedfdf
    */
    from {
      color: #bedfdf;
    }
    to {
      color: teal;
    }
  `;return{LoadingIndicator:i.css`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:i.css`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:i.css`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}});function gs(e){const{centered:t,className:n,small:r}=e,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,us),i=ps(),a=o()(i.LoadingIndicator,{[i.LoadingIndicatorCentered]:t,[i.LoadingIndicatorSmall]:r,className:n});return Object(g.jsx)(Qe,hs({type:"loading",className:a},s))}gs.defaultProps={centered:!1,className:void 0,small:!1};const fs="FETCH_ERROR",ms="FETCH_LOADING";var bs;const vs=k(e=>{var t,n,r,s;return{TraceName:i.css`
      label: TraceName;
      font-size: ${r=null===(t=e.components)||void 0===t||null===(n=t.TraceName)||void 0===n?void 0:n.fontSize,s="unset",r?"string"==typeof r?r:r+"px":s};
    `,TraceNameError:i.css`
      label: TraceNameError;
      color: #c00;
    `}});function xs(e){const{className:t,error:n,state:r,traceName:s}=e,i=r===fs;let a=s||"<trace-without-root-span>";const l=vs(_());let c="";if(i){c=l.TraceNameError;let e="";n&&(e="string"==typeof n?n:n.message||String(n)),e||(e="Error: Unknown error"),a=e,a=Object(g.jsx)(ds,{text:e})}else if(r===ms)a=bs||(bs=Object(g.jsx)(gs,{small:!0}));else{const e=String(s||"<trace-without-root-span>");a=Object(g.jsx)(ds,{text:e})}return Object(g.jsx)("span",{className:o()(l.TraceName,c,t),children:a})}function ys(e){const t=e.filter(e=>!e.references||!e.references.length)[0];return t?`${t.process.serviceName}: ${t.operationName}`:""}var js=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function ws(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var s=n[r];return r>0&&(n.splice(r,1),n.unshift(s)),s.value}}return{get:r,put:function(t,s){r(t)||(n.unshift({key:t,value:s}),n.length>e&&n.pop())}}}(e,t)}function Os(e,t){var n=t?function(e,t){return function n(r,s){if(e(r,s))return!0;if(Array.isArray(r))return!(!Array.isArray(s)||r.length!==s.length)&&!!r.every((function(e,t){return n(e,s[t])}));if(Array.isArray(s))return!1;if("object"==typeof r){if("object"!=typeof s)return!1;var i=null===r,a=null===s;if(i||a)return i===a;var o=Object.keys(r),l=Object.keys(s);if(o.length!==l.length)return!1;var c=t?n:e;return!!o.every((function(e){return js(r,e)&&js(s,e)&&c(r[e],s[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}var Ts=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];"number"==typeof s[0]&&(e=s.shift()),"function"==typeof s[0]?t=s.shift():void 0===s[0]&&s.shift(),"boolean"==typeof s[0]&&(n=s[0]);var a=ws(e,Os(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=a.get(n);return void 0===s&&(s=e.apply(e,n),a.put(n,s)),s}}},_s=n("uISq"),ks=n.n(_s)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function Is(e){return Object(L.get)(ks,e)}function Ss(e){const t=e.references?e.references.find(e=>"CHILD_OF"===e.refType):null;return t?t.span:null}const Es=/#\{([^{}]*)\}/g;function Ds(e){const t=new Set;return e.replace(Es,(e,n)=>(t.add(n),e)),Array.from(t)}function Cs(e,t,n){return e.replace(Es,(e,r)=>{const s=n[r];return null==s?"":t(s)})}function Ls(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:Ds(e),template:Cs.bind(null,e,t)}}function Ns(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error("Invalid value: "+e)}const Rs=e=>e;function Ms(e,t){if(t)return t.find(t=>t.key===e)}function Ps(e,t){return e.template(t)}function Vs(e,t,n,r){const s=n[r];let i="logs";const a=t.process.tags===n;a&&(i="process");t.tags===n&&(i="tags");const o=[];return e.forEach(e=>{if(e.type(i)&&e.key(s.key)&&e.value(s.value)){const r={};e.parameters.every(o=>{let l=Ms(o,n);return l||a||(l=function(e,t){let n=t;for(;n;){const t=Ms(e,n.tags)||Ms(e,n.process.tags);if(t)return t;n=Ss(n)}}(o,t)),l?(r[o]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${o} for key ${s.key} in ${i}.`,e.object),!1)})&&o.push({url:Ps(e.url,r),text:Ps(e.text,r)})}}),o}const Hs=(Is("linkPatterns")||[]).map((function(e){try{const t=Ls(e.url,encodeURIComponent),n=Ls(e.text,Rs);return{object:e,type:Ns(e.type),key:Ns(e.key),value:Ns(e.value),url:t,text:n,parameters:Object(L.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error("Ignoring invalid link pattern: "+t,e),null}})).filter(Boolean),$s=Ts(10)(e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter(e=>"string"==typeof t[e]||"number"===t[e]);return e.filter(e=>e.type("traces")).forEach(e=>{const s={};e.parameters.every(e=>{const n=e;return!!r.includes(n)&&(s[e]=t[n],!0)})&&n.push({url:Ps(e.url,s),text:Ps(e.text,s)})}),n}(Hs,e):t});var Bs,As,Fs,zs;Bs=Hs,As=new WeakMap;const Ws=e=>Object(g.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",Fs||(Fs=Object(g.jsx)(Ze,{}))]}),Gs=e=>Object(g.jsx)(tt,{children:e.map(({text:e,url:t},n)=>Object(g.jsx)(nt,{children:Object(g.jsx)(Ws,{href:t,children:e})},`${t}-${n}`))});function Us(e){const{links:t}=e;return 1===t.length?Object(g.jsx)(Ws,{href:t[0].url,title:t[0].text,className:e.className}):Object(g.jsx)(et,{overlay:Gs(t),placement:"bottomRight",trigger:["click"],children:Object(g.jsx)("a",{className:e.className,children:zs||(zs=Object(g.jsx)(Ze,{isLarge:!0}))})})}var Ks=n("Obii");const qs=["renderer"];function Zs(){return(Zs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Xs=k(e=>({TracePageHeader:i.css`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${I(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${I(e,"#eee")};
        border-bottom: 1px solid ${I(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${I(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:i.css`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:i.css`
      label: TracePageHeaderBack;
      align-items: center;
      align-self: stretch;
      background-color: #fafafa;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: -1px;
      &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
      }
    `,TracePageHeaderTitleLink:i.css`
      label: TracePageHeaderTitleLink;
      align-items: center;
      display: flex;
      flex: 1;

      &:hover * {
        text-decoration: underline;
      }
      &:hover > *,
      &:hover small {
        text-decoration: none;
      }
    `,TracePageHeaderDetailToggle:i.css`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:i.css`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:i.css`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:i.css`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:i.css`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:o()(i.css`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:i.css`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:i.css`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:i.css`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `})),Ys=[{key:"timestamp",label:"Trace Start",renderer(e,t,n){const r=Object(Ks.dateTimeFormat)(e.startTime/1e3,{timeZone:t}),s=r.match(/^(.+)(:\d\d\.\d+)$/);return s?Object(g.jsxs)("span",{className:n.TracePageHeaderOverviewItemValue,children:[s[1],Object(g.jsx)("span",{className:n.TracePageHeaderOverviewItemValueDetail,children:s[2]})]}):r}},{key:"duration",label:"Duration",renderer:e=>Z(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set(Object(L.values)(e.processes).map(e=>e.serviceName)).size},{key:"depth",label:"Depth",renderer:e=>Object(L.get)(Object(L.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function Js(e){const{canCollapse:t,clearSearch:n,focusUiFindMatches:s,hideMap:i,hideSummary:a,nextResult:l,onSlimViewClicked:c,prevResult:d,resultCount:u,slimView:h,textFilter:p,trace:f,traceGraphView:m,updateNextViewRangeTime:b,updateViewRangeTime:v,viewRange:x,searchValue:y,onSearchValueChange:j,hideSearchButtons:w,timeZone:O}=e,T=Xs(_()),k=r.useMemo(()=>f?$s(f):[],[f]);if(!f)return null;const I=!a&&!h&&Ys.map(e=>{const{renderer:t}=e;return Zs({},function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,qs),{value:t(f,O,T)})}),S=Object(g.jsxs)("h1",{className:o()(T.TracePageHeaderTitle,t&&T.TracePageHeaderTitleCollapsible),children:[Object(g.jsx)(xs,{traceName:ys(f.spans)})," ",Object(g.jsx)("small",{className:o()(T.TracePageHeaderTraceId,xe),children:f.traceID})]});return Object(g.jsxs)("header",{className:T.TracePageHeader,children:[Object(g.jsxs)("div",{className:T.TracePageHeaderTitleRow,children:[k&&k.length>0&&Object(g.jsx)(Us,{links:k,className:T.TracePageHeaderBack}),t?Object(g.jsxs)("a",{className:T.TracePageHeaderTitleLink,onClick:c,role:"switch","aria-checked":!h,children:[Object(g.jsx)(Lr.a,{className:o()(T.TracePageHeaderDetailToggle,!h&&T.TracePageHeaderDetailToggleExpanded)}),S]}):S,Object(g.jsx)(os,{clearSearch:n,focusUiFindMatches:s,nextResult:l,prevResult:d,resultCount:u,textFilter:p,navigable:!m,searchValue:y,onSearchValueChange:j,hideSearchButtons:w})]}),I&&Object(g.jsx)(Fn,{className:T.TracePageHeaderOverviewItems,items:I}),!i&&!h&&Object(g.jsx)(Qr,{trace:f,viewRange:x,updateNextViewRangeTime:b,updateViewRangeTime:v})]})}function Qs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ei{constructor(e){Qs(this,"isTagsOpen",void 0),Qs(this,"isProcessOpen",void 0),Qs(this,"logs",void 0),Qs(this,"isWarningsOpen",void 0),Qs(this,"isStackTracesOpen",void 0),Qs(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:s,isStackTracesOpen:i,logs:a}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(s),this.isStackTracesOpen=Boolean(i),this.logs={isOpen:Boolean(a&&a.isOpen),openedItems:a&&a.openedItems?new Set(a.openedItems):new Set}}toggleTags(){const e=new ei(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new ei(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new ei(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new ei(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new ei(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new ei(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new ei(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}var ti=n("G4qV"),ni=n("P8+q"),ri=n.n(ni);const si=e=>e.serviceName;function ii(){return(ii=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ai=e=>e.spanID,oi=e=>e.operationName,li=e=>e.duration,ci=e=>e.startTime,di=e=>e.processID,ui=Object(ti.a)(Object(ti.a)(({span:e})=>e,e=>e.references||[]),({type:e})=>e,(e,t)=>e.find(e=>e.refType===t)),hi=(Object(ti.a)(e=>ui({span:e,type:"CHILD_OF"}),e=>e?e.spanID:null),Object(ti.a)(e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process},si)),pi=(Object(ti.a)(({spans:e})=>e,({leftBound:e})=>e,({rightBound:e})=>e,(e,t,n)=>e.filter(e=>ci(e)>=t&&ci(e)<=n)),Object(ti.a)(({spans:e})=>e,({text:e})=>e,(e,t)=>ri.a.filter(t,e,{extract:e=>`${hi(e)} ${oi(e)}`}).map(({original:e})=>e))),gi=Object(ti.a)(pi,e=>e.reduce((e,t)=>ii({},e,{[ai(t)]:t}),{}));Object(ti.a)(({spans:e})=>e,gi,(e,t)=>e.map(e=>ii({},e,{muted:!t[ai(e)]})));class fi{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof fi?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce((e,t)=>Math.max(t.depth+1,e),1)}get size(){let e=0;return this.walk(()=>e++),e}addChild(e){return this.children.push(e instanceof fi?e:new fi(e)),this}find(e){if(fi.iterFunction(fi.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=fi.iterFunction(fi.searchFunction(e)),n=(e,r)=>{const s=r.concat([e]);if(t(e))return s;for(let t=0;t<e.children.length;t++){const r=e.children[t],i=n(r,s);if(i)return i}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:s}=n.pop();e(t.value,t,s),r=s+1;let i=t.children.length-1;for(;i>=0;)n.push({node:t.children[i],depth:r}),i--}}}function mi(){return(mi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const bi=e=>e.spans,vi=e=>e.processes,xi=Object(ti.a)(e=>e.span,e=>e.processes,(e,t)=>mi({},e,{process:t[di(e)]})),yi=Object(ti.a)(bi,e=>e.reduce((e,t)=>e.set(ai(t),t),new Map));function ji(e){const t=new Map(e.spans.map(e=>[e.spanID,new fi(e.spanID)])),n=new Map(e.spans.map(e=>[e.spanID,e])),r=new fi("__root__");e.spans.forEach(e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:s,spanID:i}=e.references[0];if("CHILD_OF"!==s&&"FOLLOWS_FROM"!==s)throw new Error("Unrecognized ref type: "+s);(t.get(i)||r).children.push(n)}else r.children.push(n)});const s=(e,t)=>{const r=n.get(e.value),s=n.get(t.value);return+(r.startTime>s.startTime)||+(r.startTime===s.startTime)-1};return e.spans.forEach(e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(s)}),r.children.sort(s),r}Object(ti.a)(bi,e=>e.length);const wi=Object(ti.a)(bi,e=>e.reduce((e,t)=>e?Math.min(e,ci(t)):ci(t),null)),Oi=Object(ti.a)(bi,wi,(e,t)=>e.reduce((e,n)=>e?Math.max(ci(n)-t+li(n),e):li(n),null)),Ti=(Object(ti.a)(wi,Oi,(e,t)=>e+t),Object(ti.a)(ji,yi,(e,t)=>e.children.map(e=>t.get(e.value)).sort((e,t)=>{return n=ci(e),r=ci(t),n-r;var n,r})[0])),_i=(Object(ti.a)(ji,e=>e.depth-1),Object(ti.a)(Object(ti.a)(e=>e.trace,ji),Object(ti.a)(e=>e.span,ai),(e,t)=>e.getPath(t).length-1),Object(ti.a)(vi,e=>Object.keys(e).reduce((t,n)=>t.add(si(e[n])),new Set))),ki=(Object(ti.a)(_i,e=>e.size),{ms:function(e){const t=q(e,K,1e3);return U.a.duration(t/1e3).asMilliseconds()+"ms"},s:function(e){const t=q(e,K,1e6);return U.a.duration(t/1e3).asSeconds()+"s"}}),Ii=Object(ti.a)(Oi,e=>e>=1e6?ki.s:ki.ms),Si=(Object(ti.a)(({duration:e})=>e,({unit:e})=>ki[e],(e,t)=>t(e)),Object(ti.a)(({duration:e})=>e,Object(ti.a)(({trace:e})=>e,Ii),(e,t)=>t(e)),Object(ti.a)(({trace:e})=>e,({spans:e})=>e,({sort:e})=>e,(e,t,{dir:n,comparator:r,selector:s})=>[...t].sort((t,i)=>n*r(s(t,e),s(i,e)))),Object(ti.a)(ji,e=>{const t=new Map;let n=0;return e.walk(e=>t.set(e,n++)),t}));Object(ti.a)(Object(ti.a)(e=>e.trace,ji),Object(ti.a)(e=>e.span,ai),(e,t)=>{const n=e.find(t);return n?n.size-1:-1}),Object(ti.a)(Object(ti.a)(({trace:e})=>e,Si),({span:e})=>e,(e,t)=>e.get(ai(t))),Object(ti.a)(Object(ti.a)(Object(ti.a)(e=>{const t=bi(e),n=vi(e);return mi({},e,{spans:t.map(e=>xi({span:e,processes:n}))})},Ti),Object(ti.b)({name:oi,serviceName:hi})),({name:e,serviceName:t})=>`${t}: ${e}`),Object(ti.a)(({spans:e})=>e,Object(ti.a)(({trace:e})=>e,ji),({collapsed:e})=>e,(e,t,n)=>{const r=n.reduce((e,n)=>(t.find(n).walk(t=>t!==n&&e.add(t)),e),new Set);return r.size>0?e.filter(e=>!r.has(ai(e))):e}),Object(ti.a)(({trace:e})=>e,({interval:e=4})=>e,({width:e=3})=>e,(e,t,n)=>[...Array(t+1).keys()].map(r=>({timestamp:wi(e)+Oi(e)*(r/t),width:n}))),Object(ti.a)(e=>e,bi,(e,t)=>{const n=new Map;return mi({},e,{spans:t.reduce((e,t)=>{const r=n.has(ai(t))?`${ai(t)}_${n.get(ai(t))}`:ai(t),s=mi({},t,{spanID:r});return r!==ai(t)&&console.warn("duplicate spanID in trace replaced",ai(t),"new:",r),n.set(ai(t),(n.get(ai(t))||0)+1),e.concat([s])},[])})}),Object(ti.a)(e=>e,bi,(e,t)=>mi({},e,{spans:t.filter(e=>!!ci(e))}));function Ei(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,r=Number.MAX_SAFE_INTEGER;const s=new Map,i=new Map;e.spans=e.spans.filter(e=>Boolean(e.startTime));const a=e.spans.length;for(let t=0;t<a;t++){const a=e.spans[t],{startTime:o,duration:l,processID:c}=a;let d=a.spanID;o<r&&(r=o),o+l>n&&(n=o+l);const u=s.get(d);null!=u?(console.warn(`Dupe spanID, ${u+1} x ${d}`,a,i.get(d)),Object(L.isEqual)(a,i.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),s.set(d,u+1),d=`${d}_${u}`,a.spanID=d):s.set(d,1),a.process=e.processes[c],i.set(d,a)}const o=ji(e),l=[],c={};let d="";o.walk((e,n,s=0)=>{if("__root__"===e)return;const a=i.get(e);if(!a)return;const{serviceName:o}=a.process;c[o]=(c[o]||0)+1,a.references&&a.references.length||(d=`${o}: ${a.operationName}`),a.relativeStartTime=a.startTime-r,a.depth=s-1,a.hasChildren=n.children.length>0,a.warnings=a.warnings||[],a.tags=a.tags||[],a.references=a.references||[];const u=function(e){const t=new Map;return{tags:e.reduce((e,n)=>(e.some(e=>e.key===n.key&&e.value===n.value)?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e),[]),warnings:Array.from(t.values())}}(a.tags);a.tags=function(e,t){const n=e.slice(),r=(t||[]).map(e=>e.toLowerCase());return n.sort((e,t)=>{const n=e.key.toLowerCase(),s=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!s.startsWith(t))return-1;if(!n.startsWith(t)&&s.startsWith(t))return 1}return n>s?1:n<s?-1:0}),n}(u.tags,Is("topTagPrefixes")),a.warnings=a.warnings.concat(u.warnings),a.references.forEach((n,r)=>{const s=i.get(n.spanID);s&&(n.span=s,r>0&&(s.subsidiarilyReferencedBy=s.subsidiarilyReferencedBy||[],s.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:a,refType:n.refType})))}),l.push(a)});return{services:Object.keys(c).map(e=>({name:e,numberOfSpans:c[e]})),spans:l,traceID:t,traceName:d,processes:e.processes,duration:n-r,startTime:r,endTime:n}}function Di(e,t){if(!t)return null;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach(e=>{"-"===e[0]?r.push(e.substr(1).toLowerCase()):n.push(e.toLowerCase())});const s=(e,t)=>e.some(e=>t.toLowerCase().includes(e)),i=e=>!!e&&e.some(e=>!s(r,e.key)&&(s(n,e.key)||s(n,e.value.toString())));return new Set(t.filter(e=>s(n,e.operationName)||s(n,e.process.serviceName)||i(e.tags)||e.logs.some(e=>i(e.fields))||i(e.process.tags)||n.some(t=>t===e.spanID)).map(e=>e.spanID))}n.d(t,"e",(function(){return Dr})),n.d(t,"d",(function(){return Js})),n.d(t,"h",(function(){return lt})),n.d(t,"g",(function(){return et})),n.d(t,"i",(function(){return tt})),n.d(t,"j",(function(){return nt})),n.d(t,"f",(function(){return rt})),n.d(t,"a",(function(){return ei})),n.d(t,"m",(function(){return Ei})),n.d(t,"l",(function(){return Di})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"n",(function(){return _})),n.d(t,"k",(function(){return I}))},TR4N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e,t){var n=e.children,i=e.color,a=e.size,o=e.style,l=e.width,c=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),u=t.reactIconBase,h=void 0===u?{}:u,p=a||h.size||"1em";return s.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||p,width:l||p},h,d,{style:r({verticalAlign:"middle",color:i||h.color},h.style||{},o)}))};o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number]),width:i.default.oneOfType([i.default.string,i.default.number]),height:i.default.oneOfType([i.default.string,i.default.number]),style:i.default.object},o.contextTypes={reactIconBase:i.default.shape(o.propTypes)},t.default=o,e.exports=t.default},Tfl2:function(e,t,n){"use strict";e.exports=function(e,t,r,s,i,a){var o,l,c,d,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(this.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!this.callbacks[e])return u;for(c=n("IfRf"),"keyup"===h&&c(e)&&(t=[e]),o=0;o<this.callbacks[e].length;++o)if(l=this.callbacks[e][o],(s||!l.seq||this.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=n("khqB"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,l.modifiers))){var p=!s&&l.combo===i,g=s&&l.seq===s&&l.level===a;(p||g)&&this.callbacks[e].splice(o,1),u.push(l)}return u}},V280:function(e,t,n){"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},VYNe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},Wopw:function(e,t,n){var r=n("+A2i").off;e.exports=function(){var e=this.element;r(e,"keypress",this.eventHandler),r(e,"keydown",this.eventHandler),r(e,"keyup",this.eventHandler)}},Z8xD:function(e,t,n){"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},cKlj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},cdav:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,x=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118,j=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case u:case h:case a:case l:case o:case g:return e;default:switch(e=e&&e.$$typeof){case d:case p:case b:case m:case c:return e;default:return t}}case i:return t}}}function O(e){return w(e)===h}t.AsyncMode=u,t.ConcurrentMode=h,t.ContextConsumer=d,t.ContextProvider=c,t.Element=s,t.ForwardRef=p,t.Fragment=a,t.Lazy=b,t.Memo=m,t.Portal=i,t.Profiler=l,t.StrictMode=o,t.Suspense=g,t.isAsyncMode=function(e){return O(e)||w(e)===u},t.isConcurrentMode=O,t.isContextConsumer=function(e){return w(e)===d},t.isContextProvider=function(e){return w(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===g},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===h||e===l||e===o||e===g||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===c||e.$$typeof===d||e.$$typeof===p||e.$$typeof===x||e.$$typeof===y||e.$$typeof===j||e.$$typeof===v)},t.typeOf=w},fBm0:function(e,t,n){"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},hrSM:function(e,t,n){"use strict";e.exports=function(e,t,r){var s,i,a,o,l={},c=0,d=!1;for(s=this.getMatches(e,t,r),i=0;i<s.length;++i)s[i].seq&&(c=Math.max(c,s[i].level));for(i=0;i<s.length;++i)if(s[i].seq){if(s[i].level!==c)continue;d=!0,l[s[i].seq]=1,this.fireCallback(s[i].callback,r,s[i].combo,s[i].seq)}else d||this.fireCallback(s[i].callback,r,s[i].combo);o="keypress"===r.type&&this.ignoreNextKeypress,a=n("IfRf"),r.type!==this.nextExpectedAction||a(e)||o||this.resetSequences(l),this.ignoreNextKeypress=d&&"keydown"===r.type}},ia7v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},id2x:function(e,t,n){"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var r=1;r<20;++r)e.exports[111+r]="f"+r;for(r=0;r<=9;++r)e.exports[r+96]=r},"kX/o":function(e,t,n){"use strict";e.exports=function(e,t,r,s){var i=this;function a(t){return function(){i.nextExpectedAction=t,++i.sequenceLevels[e],i.resetSequenceTimer()}}function o(t){var a;i.fireCallback(r,t,e),"keyup"!==s&&(a=n("Bcrw"),i.ignoreNextKeyup=a(t)),setTimeout((function(){i.resetSequences()}),10)}i.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?o:a(s||i.getKeyInfo(t[l+1]).action);i.bindSingle(t[l],c,s,e,l)}}},khqB:function(e,t,n){"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},lI8u:function(e,t,n){"use strict";e.exports=function(e){var t;"number"!=typeof e.which&&(e.which=e.keyCode);var r=n("Bcrw")(e);void 0!==r&&("keyup"!==e.type||this.ignoreNextKeyup!==r?(t=n("EomD"),this.handleKey(r,t(e),e)):this.ignoreNextKeyup=!1)}},pHRz:function(e,t,n){"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},pKQe:function(e,t,n){"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},pdZY:function(e,t,n){"use strict";e.exports=function(e,t){var r,s,i,a,o,l,c=[];for(r=n("fBm0")(e),a=n("1aZc"),o=n("pHRz"),l=n("IfRf"),i=0;i<r.length;++i)a[s=r[i]]&&(s=a[s]),t&&"keypress"!==t&&o[s]&&(s=o[s],c.push("shift")),l(s)&&c.push(s);return{key:s,modifiers:c,action:t=this.pickBestAction(s,c,t)}}},"rhR/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},rzV7:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function s(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(s(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(var a=0;a<n.length;a++)if(!r.call(t,n[a])||!s(e[n[a]],t[n[a]]))return!1;return!0}},snuD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},uISq:function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},xmmm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var s=t.indexOf(e);t.splice(s,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},yD29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},zL40:function(e,t,n){"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},zQGu:function(e,t,n){"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}}}]);
//# sourceMappingURL=default~explore~jaegerPlugin.62c612232a976d8836f5.js.map