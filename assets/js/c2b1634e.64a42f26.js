"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20788],{72717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={id:"source-updated",title:"Source Updated",pagination_label:"Source Updated",sidebar_label:"Source Updated",sidebar_class_name:"sourceUpdated",keywords:["event","trigger","source","updated","available"],description:"Fires after a source is updated.",slug:"/docs/event-triggers/triggers/source-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},d=void 0,s={unversionedId:"docs/identity-now/event-triggers/available/source-updated",id:"docs/identity-now/event-triggers/available/source-updated",title:"Source Updated",description:"Fires after a source is updated.",source:"@site/products/idn/docs/identity-now/event-triggers/available/source-updated.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/source-updated",permalink:"/idn/docs/event-triggers/triggers/source-updated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/source-updated.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"source-updated",title:"Source Updated",pagination_label:"Source Updated",sidebar_label:"Source Updated",sidebar_class_name:"sourceUpdated",keywords:["event","trigger","source","updated","available"],description:"Fires after a source is updated.",slug:"/docs/event-triggers/triggers/source-updated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Source Deleted",permalink:"/idn/docs/event-triggers/triggers/source-deleted"},next:{title:"VA Cluster Status Change",permalink:"/idn/docs/event-triggers/triggers/va-cluster-status-change"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:l};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-context"},"Event Context"),(0,i.kt)("p",null,"Source Updated events occur when configuration changes are made to a source.\nSome uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide evidence to show auditors connector logic and sources are not\nmanipulated outside of proper change control processes."),(0,i.kt)("li",{parentName:"ul"},"Trigger review of an updated source.")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "modified": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,i.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0}}]);