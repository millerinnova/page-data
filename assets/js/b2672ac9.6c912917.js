"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[8025],{5318:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=a(4848),t=a(8453);const l={sidebar_position:3},s="Upload Vehicle Photo/Insurance/Registration",r={id:"Garage/upload",title:"Upload Vehicle Photo/Insurance/Registration",description:"Action",source:"@site/docs/Garage/upload.md",sourceDirName:"Garage",slug:"/Garage/upload",permalink:"/page-data/docs/Garage/upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add Vehicle",permalink:"/page-data/docs/Garage/add-vehicle"},next:{title:"Update Vehicle",permalink:"/page-data/docs/Garage/update-vehicle"}},d={},c=[{value:"Action",id:"action",level:2},{value:"API / State Management (Current)",id:"api--state-management-current",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"API Call",id:"api-call-1",level:3},{value:"Request:",id:"request-1",level:3},{value:"Response:",id:"response-1",level:3},{value:"API Call",id:"api-call-2",level:3},{value:"Request:",id:"request-2",level:3},{value:"Response:",id:"response-2",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management (Under design)",id:"state-management-under-design",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update with action",id:"state-update-with-action",level:3},{value:"action-1",id:"action-1",level:5}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"upload-vehicle-photoinsuranceregistration",children:"Upload Vehicle Photo/Insurance/Registration"})}),"\n",(0,i.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,i.jsx)(n.p,{children:"Upload Vehicle Photo/Insurance/Registration"}),"\n",(0,i.jsx)(n.h2,{id:"api--state-management-current",children:"API / State Management (Current)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,i.jsx)(n.h3,{id:"api-call",children:"API Call"}),"\n",(0,i.jsx)(n.p,{children:"End point: /appx/vehicles POST"}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{})}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"s3 link\n"})}),"\n",(0,i.jsx)(n.h3,{id:"api-call-1",children:"API Call"}),"\n",(0,i.jsx)(n.p,{children:"End point: /appx/insurances POST"}),"\n",(0,i.jsx)(n.h3,{id:"request-1",children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Form Data","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'name="vehicleId" value="c0cc218d-c6c7-4ab0-a821-519f37a08fcf"'}),"\n",(0,i.jsx)(n.li,{children:'name="expirationDate" value="08/08/2026"'}),"\n",(0,i.jsx)(n.li,{children:'name="image" filename="1724107736444.jpg" Content-Type: image/jpeg'}),"\n",(0,i.jsx)(n.li,{children:'name="includeRoadside" value="false"'}),"\n",(0,i.jsx)(n.li,{children:'name="claimsPhoneNumber" value="9993221234"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"response-1",children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "message": {\n        "code": 0,\n        "message": "Success.",\n        "version": "1.0.0",\n        "method": "add-insurance-card",\n        "action": "POST"\n    },\n    "data": true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"api-call-2",children:"API Call"}),"\n",(0,i.jsx)(n.p,{children:"End point: /appx/registrations POST"}),"\n",(0,i.jsx)(n.h3,{id:"request-2",children:"Request:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Form Data","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'name="expirationDate" value="08/08/2026"'}),"\n",(0,i.jsx)(n.li,{children:'name="image" filename="1724107736444.jpg" Content-Type: image/jpeg'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"response-2",children:"Response:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "message": {\n        "code": 0,\n        "message": "Success.",\n        "version": "1.0.0",\n        "method": "add-registration-card",\n        "action": "POST"\n    },\n    "data": true\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,i.jsx)(n.h2,{id:"state-management-under-design",children:"State Management (Under design)"}),"\n",(0,i.jsx)(n.h3,{id:"state-init",children:"State Init:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{ \n Vehicles: {\n }\n} \n"})}),"\n",(0,i.jsx)(n.h3,{id:"local-state",children:"Local State:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"{ \n Vehicles: {\n    Vehicle-Id-1: {\n        insurances: {},\n        registration: {},\n    }\n }\n} \n"})}),"\n",(0,i.jsx)(n.h3,{id:"global-state",children:"Global State:"}),"\n",(0,i.jsx)(n.h3,{id:"state-update-with-action",children:"State update with action"}),"\n",(0,i.jsx)(n.h5,{id:"action-1",children:"action-1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var i=a(6540);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);