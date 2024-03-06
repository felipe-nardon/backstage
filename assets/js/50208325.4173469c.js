/*! For license information please see 50208325.4173469c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[748726],{778879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(824246),o=t(511151);const a={id:"plugin-sonarqube-backend.sonarqubefindings.analysisdate",title:"SonarqubeFindings.analysisDate",description:"API reference for SonarqubeFindings.analysisDate"},u=void 0,s={id:"reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate",title:"SonarqubeFindings.analysisDate",description:"API reference for SonarqubeFindings.analysisDate",source:"@site/../docs/reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate.md",sourceDirName:"reference",slug:"/reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate",permalink:"/docs/reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate.md",tags:[],version:"current",frontMatter:{id:"plugin-sonarqube-backend.sonarqubefindings.analysisdate",title:"SonarqubeFindings.analysisDate",description:"API reference for SonarqubeFindings.analysisDate"}},i={},c=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-sonarqube-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubefindings",children:(0,r.jsx)(n.code,{children:"SonarqubeFindings"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubefindings.analysisdate",children:(0,r.jsx)(n.code,{children:"analysisDate"})})]}),"\n",(0,r.jsx)(n.p,{children:"Last date of the analysis that have generated this finding"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"analysisDate: string;\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,r)&&!i.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:a,_owner:s.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,h={};function m(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}function _(){}function g(e,n,t){this.props=e,this.context=n,this.refs=h,this.updater=t||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=g.prototype=new _;v.constructor=g,b(v,m.prototype),v.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,r){var o,a={},u=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=""+n.key),n)S.call(n,o)&&!x.hasOwnProperty(o)&&(a[o]=n[o]);var i=arguments.length-2;if(1===i)a.children=r;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];a.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:s,props:a,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,a,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var i=!1;if(null===e)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case r:i=!0}}if(i)return u=u(i=e),e=""===a?"."+R(i,0):a,k(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),C(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),n.push(u)),1;if(i=0,a=""===a?".":a+":",k(e))for(var c=0;c<e.length;c++){var f=a+R(s=e[c],c);i+=C(s,n,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(s=e.next()).done;)i+=C(s=s.value,n,o,f=a+R(s,c++),u);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},D={transition:null},I={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:D,ReactCurrentOwner:j};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=m,n.Fragment=o,n.Profiler=u,n.PureComponent=g,n.StrictMode=a,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=b({},e.props),a=e.key,u=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,s=j.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in n)S.call(n,c)&&!x.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==i?i[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){i=Array(c);for(var f=0;f<c;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:a,ref:u,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=q,n.createFactory=function(e){var n=q.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=D.transition;D.transition={};try{e()}finally{D.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return P.current.useCallback(e,n)},n.useContext=function(e){return P.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return P.current.useDeferredValue(e)},n.useEffect=function(e,n){return P.current.useEffect(e,n)},n.useId=function(){return P.current.useId()},n.useImperativeHandle=function(e,n,t){return P.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return P.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return P.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return P.current.useMemo(e,n)},n.useReducer=function(e,n,t){return P.current.useReducer(e,n,t)},n.useRef=function(e){return P.current.useRef(e)},n.useState=function(e){return P.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return P.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return P.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>u});var r=t(667294);const o={},a=r.createContext(o);function u(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);