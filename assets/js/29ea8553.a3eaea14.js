"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[355],{2604:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(4848),a=t(8453);const r={sidebar_position:2},s="Get Trip detail by trip id",d={id:"Trips/get-trip",title:"Get Trip detail by trip id",description:"Action",source:"@site/docs/Trips/get-trip.md",sourceDirName:"Trips",slug:"/Trips/get-trip",permalink:"/page-data/docs/Trips/get-trip",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Trips/get-trip.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"List Vehicle/Unassigned Trips",permalink:"/page-data/docs/Trips/list-trips"},next:{title:"Assign trip to Vehicle",permalink:"/page-data/docs/Trips/assign-trip"}},l={},o=[{value:"Action",id:"action",level:2},{value:"API / State Management",id:"api--state-management",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management",id:"state-management",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update:",id:"state-update",level:3}];function c(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"get-trip-detail-by-trip-id",children:"Get Trip detail by trip id"})}),"\n",(0,i.jsx)(e.h2,{id:"action",children:"Action"}),"\n",(0,i.jsx)(e.p,{children:"Get trip detail with vehicle Id or none (Unassigned)"}),"\n",(0,i.jsx)(e.h2,{id:"api--state-management",children:"API / State Management"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,i.jsx)(e.h3,{id:"api-call",children:"API Call"}),"\n",(0,i.jsxs)(e.p,{children:["End point: /location/trips/",(0,i.jsx)(e.em,{children:"tripId"})]}),"\n",(0,i.jsx)(e.h3,{id:"request",children:"Request:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"User Identity (Authorization Key)"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Query String Parameters"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"tripId: e.g. 01780d99-6598-40f4-9ea5-c5fe02e10d38"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"response",children:"Response:"}),"\n",(0,i.jsx)(e.p,{children:"trip detail data"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'{ \n\n    "message": { \n\n        "code": 0, \n\n        "message": "Success.", \n\n        "version": "1.0.0", \n\n        "method": "get-trip-detail", \n\n        "action": "GET" \n\n    }, \n\n    "data": { \n\n        "id": "01780d99-6598-40f4-9ea5-c5fe02e10d38", \n\n        "vehicleId": "c0cc218d-c6c7-4ab0-a821-519f37a08fcf", \n\n        "deviceId": null, \n\n        "startTime": "2024-08-13T15:33:02Z", \n\n        "startTimestamp": "2024-08-13T15:33:02.000Z", \n\n        "endTime": "2024-08-13T15:55:34Z", \n\n        "endTimestamp": "2024-08-13T15:55:34.000Z", \n\n        "originName": "202 Baluster, Irvine", \n\n        "originAddress": null, \n\n        "originCity": "Irvine", \n\n        "destinationName": "17352 Von Karman Avenue, Irvine", \n\n        "destinationCity": "Irvine", \n\n        "destinationAddress": null, \n\n        "startLongitude": -117.71360455059913, \n\n        "startLatitude": 33.66980803869535, \n\n        "endLongitude": -117.84216754940128, \n\n        "endLatitude": 33.68839644768836, \n\n        "totalDistance": 11.1, \n\n        "totalTime": 22, \n\n        "totalTimeString": "22", \n\n        "totalTimeUnit": "min", \n\n        "maxSpeed": 79, \n\n        "maxRpm": null, \n\n        "tripType": 1, \n\n        "note": null, \n\n        "isFinish": true, \n\n        "isBusiness": false, \n\n        "isStartLocationManual": true, \n\n        "mapImage": null, \n\n        "lastPingId": "01780d99-6598-40f4-9ea5-c5fe02e10d38", \n\n        "lastPingDate": "2024-08-13T15:55:07.165787Z", \n\n        "createdDate": "2024-08-13T15:33:07.10694Z", \n\n        "startSavedLocationId": null, \n\n        "endSavedLocationId": null, \n\n        "details": [ \n\n            { \n\n                "uuid": null, \n\n                "longitude": -117.7165002405918, \n\n                "latitude": 33.67324286481955, \n\n                "timestamp": "2024-08-13T15:33:10.000Z", \n\n                "speed": 1.16, \n\n                "odometer": 0, \n\n                "type": "in_vehicle" \n\n            }, \n            {},\n            ...\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,i.jsx)(e.p,{children:"empty default data"}),"\n",(0,i.jsx)(e.h2,{id:"state-management",children:"State Management"}),"\n",(0,i.jsx)(e.h3,{id:"state-init",children:"State Init:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{ \n\n  Trip: {} \n\n} \n"})}),"\n",(0,i.jsx)(e.h3,{id:"local-state",children:"Local State:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{ \n\n  Trip: { \n\n    tripId:{}\n\n  } \n\n} \n"})}),"\n",(0,i.jsx)(e.h3,{id:"global-state",children:"Global State:"}),"\n",(0,i.jsx)(e.h3,{id:"state-update",children:"State update:"}),"\n",(0,i.jsx)(e.p,{children:"For cache and reuse purpose?"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"{ \n\n  Trip: { \n\n     tripId: [trip detail data from API above] \n\n  } \n\n} \n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>d});var i=t(6540);const a={},r=i.createContext(a);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);