"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[62886],{31750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={id:"uuid-generator",title:"UUID Generator",pagination_label:"UUID Generator",sidebar_label:"UUID Generator",sidebar_class_name:"uuidGenerator",keywords:["transforms","operations","uuid","generator"],description:"Create a universal unique ID (UUID).",slug:"/docs/transforms/operations/uuid-generator",tags:["Transforms","Transform Operations"]},i=void 0,o={unversionedId:"docs/identity-now/transforms/operations/uuid-generator",id:"docs/identity-now/transforms/operations/uuid-generator",title:"UUID Generator",description:"Create a universal unique ID (UUID).",source:"@site/products/idn/docs/identity-now/transforms/operations/uuid-generator.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/uuid-generator",permalink:"/idn/docs/transforms/operations/uuid-generator",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/uuid-generator.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"uuid-generator",title:"UUID Generator",pagination_label:"UUID Generator",sidebar_label:"UUID Generator",sidebar_class_name:"uuidGenerator",keywords:["transforms","operations","uuid","generator"],description:"Create a universal unique ID (UUID).",slug:"/docs/transforms/operations/uuid-generator",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Username Generator",permalink:"/idn/docs/transforms/operations/username-generator"},next:{title:"Rules",permalink:"/idn/docs/rules"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the UUID generator transform to create a universal unique ID (UUID) in the\nform of a 36-character string."),(0,a.kt)("admonition",{title:"Other Considerations",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There is no uniqueness checking in this transform - the underlying code is\nwritten to provide a 1 in 68,719,476,736 chance of creating a string that\nactually collides with another string within the tenant, so the generated UUID's\nuniqueness is very likely, but it is not guaranteed.")),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The UUID generator transform only requires the transform's ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\nattributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "uuid",\n  "name": "UUID Generator Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"uuid"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'This transform produces a UUID such as "f7493c55-f3fc-491a-b352-4664d71f885b".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "uuid",\n  "name": "UUID Generator Transform"\n}\n')))}p.isMDXComponent=!0}}]);