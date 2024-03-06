/*! For license information please see f4586f53.fca1bacd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[978791],{664638:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=t(824246),o=t(511151);const c={id:"core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()"},i=void 0,a={id:"reference/core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()",source:"@site/../docs/reference/core-app-api.apifactoryregistry.register.md",sourceDirName:"reference",slug:"/reference/core-app-api.apifactoryregistry.register",permalink:"/docs/reference/core-app-api.apifactoryregistry.register",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.apifactoryregistry.register.md",tags:[],version:"current",frontMatter:{id:"core-app-api.apifactoryregistry.register",title:"ApiFactoryRegistry.register()",description:"API reference for ApiFactoryRegistry.register()"}},s={},u=[{value:"Parameters",id:"parameters",level:2}];function f(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry",children:(0,n.jsx)(r.code,{children:"ApiFactoryRegistry"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.register",children:(0,n.jsx)(r.code,{children:"register"})})]}),"\n",(0,n.jsx)(r.p,{children:"Register a new API factory. Returns true if the factory was added to the registry."}),"\n",(0,n.jsx)(r.p,{children:"A factory will not be added to the registry if there is already an existing factory with the same or higher priority."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"register<Api, Impl extends Api, Deps extends {\n        [name in string]: unknown;\n    }>(scope: ApiFactoryScope, factory: ApiFactory<Api, Impl, Deps>): boolean;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"scope"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryscope",children:"ApiFactoryScope"})}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"factory"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apifactory",children:"ApiFactory"}),"<Api, Impl, Deps>"]}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"boolean"})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,c={},u=null,f=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:f,props:c,_owner:a.current}}r.Fragment=c,r.jsx=u,r.jsxs=u},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function _(){}function b(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var x=b.prototype=new _;x.constructor=b,h(x,g.prototype),x.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var o,c={},i=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)v.call(r,o)&&!R.hasOwnProperty(o)&&(c[o]=r[o]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];c.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:t,type:e,key:i,ref:a,props:c,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function A(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,o,c,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case n:s=!0}}if(s)return i=i(s=e),e=""===c?"."+A(s,0):c,j(i)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),C(i,r,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(E,"$&/")+"/")+e)),r.push(i)),1;if(s=0,c=""===c?".":c+":",j(e))for(var u=0;u<e.length;u++){var f=c+A(a=e[u],u);s+=C(a,r,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(a=e.next()).done;)s+=C(a=a.value,r,o,f=c+A(a,u++),i);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function P(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},F={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};r.Children={map:P,forEach:function(e,r,t){P(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=g,r.Fragment=o,r.Profiler=i,r.PureComponent=b,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,a=S.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in r)v.call(r,u)&&!R.hasOwnProperty(u)&&(o[u]=void 0===r[u]&&void 0!==s?s[u]:r[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];o.children=s}return{$$typeof:t,type:e.type,key:c,ref:i,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,t){return O.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,t){return O.current.useReducer(e,r,t)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return O.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var n=t(667294);const o={},c=n.createContext(o);function i(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);