"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[2172],{3219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=n(4848),s=n(8453);const a={sidebar_position:4},r="Assign trip to Vehicle",d={id:"Trips/export-trip",title:"Assign trip to Vehicle",description:"Action",source:"@site/docs/Trips/export-trip.md",sourceDirName:"Trips",slug:"/Trips/export-trip",permalink:"/page-data/docs/Trips/export-trip",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Assign trip to Vehicle",permalink:"/page-data/docs/Trips/assign-trip"},next:{title:"Set trip to Business",permalink:"/page-data/docs/Trips/set-business-trip"}},l={},o=[{value:"Action",id:"action",level:2},{value:"API / State Management (Current)",id:"api--state-management-current",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management (Under design)",id:"state-management-under-design",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update:",id:"state-update",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"assign-trip-to-vehicle",children:"Assign trip to Vehicle"})}),"\n",(0,i.jsx)(t.h2,{id:"action",children:"Action"}),"\n",(0,i.jsx)(t.p,{children:"Assign trip id to the specific vehicle id"}),"\n",(0,i.jsx)(t.h2,{id:"api--state-management-current",children:"API / State Management (Current)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,i.jsx)(t.h3,{id:"api-call",children:"API Call"}),"\n",(0,i.jsx)(t.p,{children:"End point: /location/trips/generate_pdf?tripIds=60dd9755-3d33-4d31-9261-85b6c0cea353"}),"\n",(0,i.jsx)(t.h3,{id:"request",children:"Request:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"User Identity (Authorization Key)"}),"\n",(0,i.jsxs)(t.li,{children:["Query String Parameters","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"tripIds:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"response",children:"Response:"}),"\n",(0,i.jsx)(t.p,{children:"s3 link of trip export data"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "message": {\n        "code": 0,\n        "message": "Success.",\n        "version": "1.0.0",\n        "method": "generate-pdt-trip",\n        "action": "GET"\n    },\n    "data": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/pdf_trip/TripReports_20240813.pdf"\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,i.jsx)(t.p,{children:"empty default data"}),"\n",(0,i.jsx)(t.h2,{id:"state-management-under-design",children:"State Management (Under design)"}),"\n",(0,i.jsx)(t.h3,{id:"state-init",children:"State Init:"}),"\n",(0,i.jsx)(t.p,{children:"NA"}),"\n",(0,i.jsx)(t.h3,{id:"local-state",children:"Local State:"}),"\n",(0,i.jsx)(t.p,{children:"NA"}),"\n",(0,i.jsx)(t.h3,{id:"global-state",children:"Global State:"}),"\n",(0,i.jsx)(t.p,{children:"NA"}),"\n",(0,i.jsx)(t.h3,{id:"state-update",children:"State update:"}),"\n",(0,i.jsx)(t.p,{children:"NA"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);