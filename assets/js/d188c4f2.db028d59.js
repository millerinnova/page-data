"use strict";(self.webpackChunkpage_data=self.webpackChunkpage_data||[]).push([[9503],{4946:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=a(4848),t=a(8453);const i={sidebar_position:1},s="List all Vehicles",r={id:"Garage/list-vehicle",title:"List all Vehicles",description:"Action",source:"@site/docs/Garage/list-vehicle.md",sourceDirName:"Garage",slug:"/Garage/list-vehicle",permalink:"/page-data/docs/Garage/list-vehicle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Garage",permalink:"/page-data/docs/category/garage"},next:{title:"Get Vehicle CTO Calculator data",permalink:"/page-data/docs/Garage/vehicle-cto"}},d={},c=[{value:"Action",id:"action",level:2},{value:"API / State Management (Current)",id:"api--state-management-current",level:2},{value:"API Call",id:"api-call",level:3},{value:"Request:",id:"request",level:3},{value:"Response:",id:"response",level:3},{value:"Error Handling:",id:"error-handling",level:3},{value:"State Management (Under design)",id:"state-management-under-design",level:2},{value:"State Init:",id:"state-init",level:3},{value:"Local State:",id:"local-state",level:3},{value:"Global State:",id:"global-state",level:3},{value:"State update with action",id:"state-update-with-action",level:3},{value:"action-1",id:"action-1",level:5}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"list-all-vehicles",children:"List all Vehicles"})}),"\n",(0,l.jsx)(n.h2,{id:"action",children:"Action"}),"\n",(0,l.jsx)(n.p,{children:"List all Vehicles"}),"\n",(0,l.jsx)(n.h2,{id:"api--state-management-current",children:"API / State Management (Current)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Data Flow: Describe how data is fetched, displayed, and managed on the page."})}),"\n",(0,l.jsx)(n.h3,{id:"api-call",children:"API Call"}),"\n",(0,l.jsx)(n.p,{children:"End point: /appx/vehicles?pageSize=100&pageIndex=1&orderBy=-1&orderType=1"}),"\n",(0,l.jsx)(n.h3,{id:"request",children:"Request:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"User Identity (Authorization Key)"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Query String Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"pageSize: 100"}),"\n",(0,l.jsx)(n.li,{children:"pageIndex: 1"}),"\n",(0,l.jsx)(n.li,{children:"orderBy: -1"}),"\n",(0,l.jsx)(n.li,{children:"orderType: 1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"response",children:"Response:"}),"\n",(0,l.jsx)(n.p,{children:"vehicle data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n    "message": {\n        "code": 0,\n        "message": "Success.",\n        "version": "1.0.0",\n        "method": "list-vehicle",\n        "action": "GET"\n    },\n    "currentPage": 1,\n    "pageSize": 100,\n    "pageCount": 1,\n    "rowTotal": 2,\n    "rowCount": 2,\n    "data": [\n        {\n            "id": "e1180883-0821-4949-aee9-e8648b7d790a",\n            "customerId": "740bb330-4941-430a-9b44-e64e93011926",\n            "vin": "2T3H1RFV0NW232446",\n            "year": "2022",\n            "make": "TOYOTA",\n            "model": "RAV4",\n            "mileage": 18106,\n            "nickName": null,\n            "imageFileUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/e1180883-0821-4949-aee9-e8648b7d790a.jpg?v=1",\n            "iconUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/128-e1180883-0821-4949-aee9-e8648b7d790a.jpg?v=1",\n            "bluetoothId": null,\n            "bluetoothName": null,\n            "isBluetoothLinked": null,\n            "bluetoothIdAndroid": null,\n            "bluetoothNameAndroid": null,\n            "isBluetoothLinkedAndroid": null,\n            "latitude": 33.69572942575161,\n            "longitude": -117.8360376856074,\n            "createdDate": "2024-06-17T09:38:33.872427",\n            "lastTripId": "b6559900-f7e8-48f6-b53f-5308398d1b15",\n            "lastTripTimestamp": "2024-07-02T15:36:01.000Z",\n            "ownerIconFileUrl": "",\n            "ownerFirstName": null,\n            "ownerLastName": null,\n            "ownerShortName": "",\n            "accountType": 2,\n            "hasInsuranceExpired": null,\n            "hasNewReport": null,\n            "status": null,\n            "manualAssignTripCount": null,\n            "hasVehicleHistoryReport": null,\n            "hasInsurance": null,\n            "hasRegistration": null,\n            "annualMileage": 10000,\n            "isAutoMileageTracking": false,\n            "isWork": false,\n            "licensePlate": null,\n            "insurance": null,\n            "registration": null\n        },\n        {\n            "id": "c31ad93a-77fc-4284-932f-e99b0fdc16ca",\n            "customerId": "740bb330-4941-430a-9b44-e64e93011926",\n            "vin": "7SAYGAEE6PF976520",\n            "year": "2023",\n            "make": "TESLA",\n            "model": "MODEL Y",\n            "mileage": 6000,\n            "nickName": null,\n            "imageFileUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/c31ad93a-77fc-4284-932f-e99b0fdc16ca.jpg?v=1",\n            "iconUrl": "https://carmd-bucket.s3.us-west-2.amazonaws.com/carmd-appx/vehicle/128-c31ad93a-77fc-4284-932f-e99b0fdc16ca.jpg?v=1",\n            "bluetoothId": null,\n            "bluetoothName": null,\n            "isBluetoothLinked": null,\n            "bluetoothIdAndroid": null,\n            "bluetoothNameAndroid": null,\n            "isBluetoothLinkedAndroid": null,\n            "latitude": null,\n            "longitude": null,\n            "createdDate": "2024-06-24T09:00:49.057985",\n            "lastTripId": null,\n            "lastTripTimestamp": null,\n            "ownerIconFileUrl": "",\n            "ownerFirstName": null,\n            "ownerLastName": null,\n            "ownerShortName": "",\n            "accountType": 2,\n            "hasInsuranceExpired": null,\n            "hasNewReport": null,\n            "status": null,\n            "manualAssignTripCount": null,\n            "hasVehicleHistoryReport": null,\n            "hasInsurance": null,\n            "hasRegistration": null,\n            "annualMileage": 10000,\n            "isAutoMileageTracking": false,\n            "isWork": false,\n            "licensePlate": null,\n            "insurance": null,\n            "registration": null\n        }\n    ]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"error-handling",children:"Error Handling:"}),"\n",(0,l.jsx)(n.h2,{id:"state-management-under-design",children:"State Management (Under design)"}),"\n",(0,l.jsx)(n.h3,{id:"state-init",children:"State Init:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{ \n\n} \n"})}),"\n",(0,l.jsx)(n.h3,{id:"local-state",children:"Local State:"}),"\n",(0,l.jsx)(n.p,{children:"return all vehicles data"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{ \n Vehicles: {\n    Vehicle-Id-1: {vehicle 1 data}\n    Vehicle-Id-2: {vehicle 2 data}\n }\n} \n"})}),"\n",(0,l.jsx)(n.h3,{id:"global-state",children:"Global State:"}),"\n",(0,l.jsx)(n.h3,{id:"state-update-with-action",children:"State update with action"}),"\n",(0,l.jsx)(n.h5,{id:"action-1",children:"action-1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var l=a(6540);const t={},i=l.createContext(t);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);