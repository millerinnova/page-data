"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[2223],{9026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(4848),i=t(8453);const l={sidebar_position:2},d="Get Vehicle",r={id:"Garage/get-vehicle",title:"Get Vehicle",description:"Action",source:"@site/docs/Garage/get-vehicle.md",sourceDirName:"Garage",slug:"/Garage/get-vehicle",permalink:"/page-data/docs/Garage/get-vehicle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Vehicles Warranty data",permalink:"/page-data/docs/Garage/vehicle-warranty"},next:{title:"Add Vehicle",permalink:"/page-data/docs/Garage/add-vehicle"}},s={},c=[{value:"Action",id:"action",level:2},{value:"API / State Management (Current)",id:"api--state-management-current",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management (Under design)",id:"state-management-under-design",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update with action",id:"state-update-with-action",level:3},{value:"action-1",id:"action-1",level:5}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"get-vehicle",children:"Get Vehicle"})}),"\n",(0,a.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,a.jsx)(n.p,{children:"Get Vehicle"}),"\n",(0,a.jsx)(n.h2,{id:"api--state-management-current",children:"API / State Management (Current)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,a.jsx)(n.h3,{id:"api-call",children:"API Call"}),"\n",(0,a.jsx)(n.p,{children:"End point: /appx/vehicles/fe39b712-0346-4743-bd2d-ee73f0f20902"}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"User Identity (Authorization Key)"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,a.jsx)(n.p,{children:"vehicle data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "message": {\n        "code": 0,\n        "message": "Success.",\n        "version": "1.0.0",\n        "method": "get-vehicle",\n        "action": "GET"\n    },\n    "data": {\n        "id": "fe39b712-0346-4743-bd2d-ee73f0f20902",\n        "customerId": "d2ab629d-f1c6-43f6-b4d1-e6bdd32f5d16",\n        "vin": "2T3H1RFV0NW232446",\n        "year": "2022",\n        "make": "TOYOTA",\n        "model": "RAV4",\n        "mileage": 19024,\n        "nickName": null,\n        "imageFileUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/fe39b712-0346-4743-bd2d-ee73f0f20902.jpg?v=1",\n        "iconUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/128-fe39b712-0346-4743-bd2d-ee73f0f20902.jpg?v=1",\n        "bluetoothId": null,\n        "bluetoothName": null,\n        "isBluetoothLinked": null,\n        "bluetoothIdAndroid": null,\n        "bluetoothNameAndroid": null,\n        "isBluetoothLinkedAndroid": null,\n        "latitude": 33.68905775356894,\n        "longitude": -117.84237499981789,\n        "createdDate": "2024-07-03T09:38:52.790837",\n        "ownerIconFileUrl": null,\n        "accountType": 2,\n        "status": null,\n        "lastTripId": "60dd9755-3d33-4d31-9261-85b6c0cea353",\n        "hasVehicleHistoryReport": null,\n        "annualMileage": 9000,\n        "isAutoMileageTracking": false,\n        "isDefaultTrip": false,\n        "isWork": false,\n        "licensePlate": "9DMB371",\n        "lastTripTimestamp": "2024-07-03T20:40:57.000Z",\n        "friendsShared": [],\n        "nonAppMembers": []\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,a.jsx)(n.h2,{id:"state-management-under-design",children:"State Management (Under design)"}),"\n",(0,a.jsx)(n.h3,{id:"state-init",children:"State Init:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"{ \n Vehicles: {\n    \n }\n} \n"})}),"\n",(0,a.jsx)(n.h3,{id:"local-state",children:"Local State:"}),"\n",(0,a.jsx)(n.p,{children:"return from the state data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"{ \n Vehicles: {\n    Vehicle-Id-1: {vehicle data}\n }\n} \n"})}),"\n",(0,a.jsx)(n.h3,{id:"global-state",children:"Global State:"}),"\n",(0,a.jsx)(n.h3,{id:"state-update-with-action",children:"State update with action"}),"\n",(0,a.jsx)(n.h5,{id:"action-1",children:"action-1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var a=t(6540);const i={},l=a.createContext(i);function d(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);