/*! For license information please see 4c62e3f4.1e678e2f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[407620],{867154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(785893),a=n(511151);const o={title:"Announcing the Backstage Stability Index",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},r=void 0,s={permalink:"/blog/2020/12/22/stability-index",source:"@site/blog/2020-12-22-stability-index.mdx",title:"Announcing the Backstage Stability Index",description:"2022-01 update: The stability is now replaced by the versioning policy.",date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[],readingTime:3.72,hasTruncateMarker:!0,authors:[{name:"Patrik Oldsberg, Spotify",url:"https://github.com/Rugvip"}],frontMatter:{title:"Announcing the Backstage Stability Index",author:"Patrik Oldsberg, Spotify",authorURL:"https://github.com/Rugvip"},unlisted:!1,prevItem:{title:"New Backstage feature: Kubernetes for Service owners",permalink:"/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners"},nextItem:{title:"New Cost Insights plugin: The engineer\u2019s solution to taming cloud costs",permalink:"/blog/2020/10/22/cost-insights-plugin"}},c={authorsImageUrls:[void 0]},l=[{value:"The Stability Index",id:"the-stability-index",level:2},{value:"Staying up to date",id:"staying-up-to-date",level:2},{value:"Impact",id:"impact",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["2022-01 update: The stability is now replaced by the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning policy"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TL;DR"})," Backstage is heading out of alpha and moving onto the path to stable releases and an eventual version 1.0. As the community and ecosystem continue to grow at an increasing rate, we want to provide a solid foundation for everyone building things in, with, and around Backstage. So, today we\u2019re introducing the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"Stability Index"})," \u2014 a simple way to find out how likely (or unlikely) a specific package or plugin inside Backstage might be updated with major changes. By indicating the reliability of key features and APIs, this quick reference will help contributors and adopters better plan and coordinate their development efforts going forward."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Animation cycling between stability index scores",src:n(341589).Z+"",width:"1600",height:"900"})}),"\n",(0,i.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,i.jsx)(t.p,{children:"Backstage has a great and growing community of users and contributors. With so much valuable feedback, this inevitably means that sometimes we will go back and revise design decisions that introduce breaking changes. Furthermore, as we continue to ship new features and systems, we\u2019ll continue this cycle of iterating, gathering feedback, and iterating again before reaching a stable API."}),"\n",(0,i.jsx)(t.p,{children:"This rapid evolution can create uncertainty around which parts of the project are considered stable and which are not. Regardless of whether you're contributing to the project directly, setting up your own Backstage, or building plugins, you will be using various parts of the project that vary in stability. While many API surfaces of Backstage are reasonably solid and are unlikely to see any big breaking changes, others are more unstable or experimental."}),"\n",(0,i.jsx)(t.h2,{id:"the-stability-index",children:"The Stability Index"}),"\n",(0,i.jsxs)(t.p,{children:["In order to tackle the problem of uncertainty, and help align contributors, we have recently introduced a Stability Index. Inspired by a ",(0,i.jsx)(t.a,{href:"https://nodejs.org/docs/latest-v4.x/api/documentation.html#documentation_stability_index",children:"similar concept with the same name in Node.js"}),", it\u2019s a score assigned to subsets of the project, indicating the level of maturity of the API and the commitment to backwards compatibility. However, because of the current phase of the project, we have used a slightly different implementation. Rather than the score indicating a perceived stability, a higher score is instead a commitment to providing a smoother upgrade path for users, both through better documentation and backwards compatibility. Importantly, the Stability Index does not supersede ",(0,i.jsx)(t.a,{href:"https://semver.org/",children:"semantic versioning"})," (or semver), meaning we will still adhere to semver and only do breaking changes in minor releases as long as we are on 0.x."]}),"\n",(0,i.jsxs)(t.p,{children:["You can find more details about the scores on the ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"Stability Index"})," page, but the following is a TL;DR of the 0\u20133 scores:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"0"})," \u2014 There's a changelog entry."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"1"})," \u2014 There's a migration guide."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2"})," \u2014 Two weeks of deprecation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"3"})," \u2014 Three months of deprecation."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The Stability Index has been tailored for the phase that the project is currently in, and we do not intend to keep it in place in its current form forever. It is, for example, likely that we in the future will increase the deprecation time limits."}),"\n",(0,i.jsx)(t.h2,{id:"staying-up-to-date",children:"Staying up to date"}),"\n",(0,i.jsx)(t.p,{children:"In addition to the Stability Index, we have also recently adopted a weekly release cadence where we cut new releases every Thursday. Along with the two-week deprecation period of many of the API surfaces in Backstage, there is an excellent opportunity to form a routine to update your own Backstage projects either weekly or biweekly."}),"\n",(0,i.jsxs)(t.p,{children:["In order to make the update process easier, we\u2019ve added a new command to the Backstage CLI that allows you to easily update your project to use the latest Backstage release. The command is called ",(0,i.jsx)(t.code,{children:"version:bump"})," and is executed in the root of your project using the CLI. You can see what it looks like in action below."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Output of the backstage-cli version:bump command",src:n(868826).Z+"",width:"751",height:"635"})}),"\n",(0,i.jsx)(t.h2,{id:"impact",children:"Impact"}),"\n",(0,i.jsxs)(t.p,{children:["The Stability Index has already been active for a couple of weeks, and we have immediately seen an impact on the consideration and care taken when working in parts of the project that we have committed to keeping more stable. Both members of the core maintainer team and contributors from the community have taken care to roll out updates responsibly, with examples such as ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/3524",children:"PR #3524"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/3465",children:"PR #3465"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The core team is working hard to bring more stability to broader parts of Backstage, and engineering it in a way that allows for long-term evolution. There are more learnings to be discovered as we continue evolving Backstage, but we are confident that the Stability Index will allow for a clearer path and a smoother ride for everyone involved!"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},675251:(e,t,n)=>{var i=n(667294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},341589:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/stability-index-hero-7385c7770a4e9144eb8b0d76a8959303.gif"},868826:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/versions-bump-6005cfb8817c07025ab891beeb9e83d4.png"},511151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(667294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);