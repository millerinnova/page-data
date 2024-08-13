"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[5274],{6281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),a=t(8453);const s={sidebar_position:3},r="Assign trip to Vehicle",l={id:"Trips/assign-trip",title:"Assign trip to Vehicle",description:"Action",source:"@site/docs/Trips/assign-trip.md",sourceDirName:"Trips",slug:"/Trips/assign-trip",permalink:"/page-data/docs/Trips/assign-trip",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Trips/assign-trip.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Trip detail by trip id",permalink:"/page-data/docs/Trips/get-trip"},next:{title:"Assign trip to Vehicle",permalink:"/page-data/docs/Trips/export-trip"}},d={},c=[{value:"Action",id:"action",level:2},{value:"API / State Management",id:"api--state-management",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management",id:"state-management",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update:",id:"state-update",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"assign-trip-to-vehicle",children:"Assign trip to Vehicle"})}),"\n",(0,i.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,i.jsx)(n.p,{children:"Assign trip id to the specific vehicle id"}),"\n",(0,i.jsx)(n.h2,{id:"api--state-management",children:"API / State Management"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,i.jsx)(n.h3,{id:"api-call",children:"API Call"}),"\n",(0,i.jsx)(n.p,{children:"End point: /location/trips/assign POST"}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"User Identity (Authorization Key)"}),"\n"]}),"\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "tripIds": [\n        "13717bf0-fd10-43e0-9ec7-7a13898732aa"\n    ],\n    "vehicleId": "c0cc218d-c6c7-4ab0-a821-519f37a08fcf",\n    "vehicleName": "2023 TESLA MODEL Y"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,i.jsx)(n.p,{children:"trips data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{ \n\n    "message": { \n\n        "code": 0, \n\n        "message": "Success.", \n\n        "version": "1.0.0", \n\n        "method": "assign-trips", \n\n        "action": "POST" \n\n    }, \n\n    "data": { \n\n        "validIds": [ \n\n            "13717bf0-fd10-43e0-9ec7-7a13898732aa" \n\n        ], \n\n        "invalids": [] \n\n    } \n\n} \n'})}),"\n",(0,i.jsx)(n.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,i.jsx)(n.p,{children:"empty default data"}),"\n",(0,i.jsx)(n.h2,{id:"state-management",children:"State Management"}),"\n",(0,i.jsx)(n.h3,{id:"state-init",children:"State Init:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{ \n\n  Trips: {} \n\n} \n"})}),"\n",(0,i.jsx)(n.h3,{id:"local-state",children:"Local State:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{ \n\n  Trips: { \n\n    Vehicle-A: [] \n\n    Vehicle-B: [] \n\n    Unassigned: []  \n\n  } \n\n} \n"})}),"\n",(0,i.jsx)(n.h3,{id:"global-state",children:"Global State:"}),"\n",(0,i.jsx)(n.h3,{id:"state-update",children:"State update:"}),"\n",(0,i.jsx)(n.p,{children:"update trips node with the updated trip/vehicle"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{ \n\n  Trips: { \n\n     Vehicle-A: [trip list data from API above] \n\n  } \n\n} \n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);