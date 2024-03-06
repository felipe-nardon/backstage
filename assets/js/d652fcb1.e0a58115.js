/*! For license information please see d652fcb1.e0a58115.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[696024],{388534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(824246),o=n(511151);const s={id:"architecture",title:"TechDocs Architecture",description:"Documentation on TechDocs Architecture"},c=void 0,a={id:"features/techdocs/architecture",title:"TechDocs Architecture",description:"Documentation on TechDocs Architecture",source:"@site/../docs/features/techdocs/architecture.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/architecture",permalink:"/docs/features/techdocs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"TechDocs Architecture",description:"Documentation on TechDocs Architecture"},sidebar:"docs",previous:{title:"TechDocs Addons",permalink:"/docs/features/techdocs/addons"},next:{title:"Creating and Publishing Documentation",permalink:"/docs/features/techdocs/creating-and-publishing"}},i={},u=[{value:"Basic (out-of-the-box)",id:"basic-out-of-the-box",level:2},{value:"Recommended deployment",id:"recommended-deployment",level:2},{value:"Security consideration",id:"security-consideration",level:3},{value:"FAQs",id:"faqs",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"basic-out-of-the-box",children:"Basic (out-of-the-box)"}),"\n",(0,r.jsx)(t.p,{children:"When you deploy Backstage (with TechDocs enabled by default), you get a basic\nout-of-the box experience."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"TechDocs Architecture diagram",src:n(138763).Z+"",width:"1105",height:"666"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: See below for our recommended deployment architecture which takes care\nof stability, scalability and speed. Also look at the\n",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/how-to-guides#how-to-migrate-from-techdocs-basic-to-recommended-deployment-approach",children:"HOW TO migrate guide"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When you open a TechDocs site in Backstage, the\n",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/concepts#techdocs-reader",children:"TechDocs Reader"})," makes a request to\n",(0,r.jsx)(t.code,{children:"techdocs-backend"})," plugin with the entity ID and the path of the current page\nyou are looking at. In response, it receives the static files (HTML, CSS, JSON,\netc.) to render on the page in TechDocs/Backstage."]}),"\n",(0,r.jsxs)(t.p,{children:["The static files consist of HTML, CSS and Images generated by MkDocs. We remove\nall the JavaScript before adding them to Backstage for security reasons. And\nthere is an additional ",(0,r.jsx)(t.code,{children:"techdocs_metadata.json"})," file that TechDocs needs to\nrender a site. It's important that you use either\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"techdocs-cli"})," or\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-container",children:"techdocs-container"})," to\ngenerate the docs for the expected output."]}),"\n",(0,r.jsxs)(t.p,{children:['The TechDocs Reader then applies a list of "Transformers" (see\n',(0,r.jsx)(t.a,{href:"/docs/features/techdocs/concepts",children:"Concepts"}),") which modify the generated static HTML files for a\nnumber of use cases e.g. Remove certain headers, filter out some HTML tags, etc."]}),"\n",(0,r.jsxs)(t.p,{children:["Currently, we use the Backstage server's (or techdocs-backend's) local file\nsystem to store the generated files. However, it's ideal to use an external\nstorage system (e.g. AWS S3, GCS or Azure Blob Storage). Read more in\n",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/using-cloud-storage",children:"using cloud storage"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"recommended-deployment",children:"Recommended deployment"}),"\n",(0,r.jsx)(t.p,{children:"This is how we recommend deploying TechDocs in a production environment."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"TechDocs Architecture diagram",src:n(799789).Z+"",width:"987",height:"666"})}),"\n",(0,r.jsx)(t.p,{children:"The key difference in the recommended deployment approach is where the docs are\nbuilt."}),"\n",(0,r.jsxs)(t.p,{children:["We assume each entity lives in a repository somewhere (GitHub, GitLab, etc.). We\nrecommend ",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/configuring-ci-cd",children:"using a CI/CD pipeline"})," with the repository\nthat has a dedicated step/job to generate docs for TechDocs. The generated\nstatic files are then ",(0,r.jsx)(t.a,{href:"/docs/features/techdocs/using-cloud-storage",children:"stored in a cloud storage"}),"\nsolution of your choice."]}),"\n",(0,r.jsxs)(t.p,{children:["Similar to how it is done in the Basic setup, the TechDocs Reader requests\n",(0,r.jsx)(t.code,{children:"techdocs-backend"})," plugin for the docs site. ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," then requests\nyour configured storage solution for the necessary files and returns them to\nTechDocs Reader."]}),"\n",(0,r.jsxs)(t.p,{children:["Depending on your chosen cloud storage provider and its real-world proximity to\nyour backend server, there may be a comparably high amount of latency when\nloading TechDocs sites using this deployment approach. If you encounter this,\nyou can optionally configure the ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," to cache responses in a\ncache store\n",(0,r.jsx)(t.a,{href:"/docs/overview/architecture-overview#cache",children:"supported by Backstage"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"security-consideration",children:"Security consideration"}),"\n",(0,r.jsxs)(t.p,{children:["Our biggest security concern is managing the access to the docs in the cloud\nstorage. We also want to have only one security solution for all different types\nof storage (GCS, AWS, custom SFTP server, etc.) Restricting access to the\nstorage and only allowing ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," to fetch files is a good way to\nachieve this."]}),"\n",(0,r.jsxs)(t.p,{children:["This would also allow us to use the access control management Backstage when\nthat is ready.\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/3218",children:"Track progress here."})]}),"\n",(0,r.jsx)(t.p,{children:"In theory, you can directly enable TechDocs Reader to read from your storage.\nBut, you will have to think about how to do it without the docs being public and\nhow access to user groups is managed."}),"\n",(0,r.jsxs)(t.p,{children:["For cloud storage access tokens, ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," only needs a token with Read\npermissions. But in your CI/CD system, there needs to be a token with Write\npermissions to publish the generated docs site files."]}),"\n",(0,r.jsx)(t.h2,{id:"faqs",children:"FAQs"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:'Q: Why do you have separate "basic" and "recommended" deployment approaches?'})}),"\n",(0,r.jsxs)(t.p,{children:["A: The basic or out-of-the-box setup is what you get when you create a new app\nor do a ",(0,r.jsx)(t.code,{children:"git clone"})," of the Backstage repository. We want the first experience to\n",(0,r.jsx)(t.em,{children:"just work magically"}),' so that you can have your first experience with TechDocs\nwhich is smooth. However, if you decide to deploy Backstage/TechDocs for\nproduction use, the basic setup would work but there are going to be downsides\nas you scale with the number of documentation sites and sizes of them. So you\nwould want to make sure the deployment is as stable as possible. Hence there is\na recommended approach. There can be even more deployment approaches to TechDocs\nand we welcome such "Alternative" ideas from the community.']}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Why don't you recommend techdocs-backend local filesystem to serve static\nfiles?"})}),"\n",(0,r.jsx)(t.p,{children:"A: It makes scaling a Backstage instance harder. Think about the case where we\nhave distributed Backstage deployments (e.g. multiple Kubernetes pods of your\nBackstage app). Using a separate/central file storage system for TechDocs is\nnecessary to make sure sites are persistent when the servers/pods are restarted\nand avoid duplicating sites per instance. By having an external storage, we are\nmaking it easier to do some operations like delete a docs site or wipe its\ncontents."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q: Why aren't docs built on the fly i.e. when users visits a page, generate\ndocs site in real-time?"})}),"\n",(0,r.jsx)(t.p,{children:"A: Generating the content from Markdown on the fly is not optimal. Storage\nsolutions act as a cache for the generated static content. TechDocs is also\ncurrently built on MkDocs which does not allow us to generate docs per-page, so\nwe would have to build all docs for a entity on every request."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Q. Can you use the techdocs plugin without the techdocs-backend plugin?"})}),"\n",(0,r.jsxs)(t.p,{children:["A: ",(0,r.jsx)(t.code,{children:"techdocs"})," and ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," plugins are designed to be used together,\nlike any other Backstage plugin with a frontend and its backend (catalog,\nscaffolder, etc.). If you set your Backstage instance to generate docs on the\nserver, ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," will be responsible for managing the whole build\nprocess, making sure it's scalable. It is responsible for securely communicating\nwith the cloud storage provider, for both fetching static generated sites and\npublishing the updates. There are other planned features like an authentication\nlayer for users to determine whether they have the permission to view a\nparticular docs site. There are a handful of features which are extremely hard\nto develop without a tightly integrated backend in place. Hence, support for\n",(0,r.jsx)(t.code,{children:"techdocs"})," without ",(0,r.jsx)(t.code,{children:"techdocs-backend"})," is limited and challenging to develop."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},138763:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-basic.drawio-00e1ca112fb1eb62a3918e5310185194.svg"},799789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-recommended.drawio-b90a644e7ae6f63987a9e5c50efdcb40.svg"},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,d=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:d,props:s,_owner:a.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var w=v.prototype=new b;w.constructor=v,y(w,g.prototype),w.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,s={},c=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,o)&&!_.hasOwnProperty(o)&&(s[o]=t[o]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var u=Array(i),d=0;d<i;d++)u[d]=arguments[d+2];s.children=u}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:n,type:e,key:c,ref:a,props:s,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var D=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,s,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case r:i=!0}}if(i)return c=c(i=e),e=""===s?"."+C(i,0):s,k(c)?(o="",null!=e&&(o=e.replace(D,"$&/")+"/"),R(c,t,o,"",(function(e){return e}))):null!=c&&(T(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(D,"$&/")+"/")+e)),t.push(c)),1;if(i=0,s=""===s?".":s+":",k(e))for(var u=0;u<e.length;u++){var d=s+C(a=e[u],u);i+=R(a,t,o,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),u=0;!(a=e.next()).done;)i+=R(a=a.value,t,o,d=s+C(a,u++),c);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function E(e,t,n){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},B={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)x.call(t,u)&&!_.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==i?i[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){i=Array(u);for(var d=0;d<u;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(667294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);