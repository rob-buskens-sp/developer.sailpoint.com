"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[14202],{82329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"random-numeric",title:"Random Numeric",pagination_label:"Random Numeric",sidebar_label:"Random Numeric",sidebar_class_name:"randomNumeric",keywords:["transforms","operations","random numeric"],description:"Generate a random number of any length.",slug:"/docs/transforms/operations/random-numeric",tags:["Transforms","Transform Operations"]},o=void 0,s={unversionedId:"docs/identity-now/transforms/operations/random-numeric",id:"docs/identity-now/transforms/operations/random-numeric",title:"Random Numeric",description:"Generate a random number of any length.",source:"@site/products/idn/docs/identity-now/transforms/operations/random-numeric.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/random-numeric",permalink:"/idn/docs/transforms/operations/random-numeric",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/random-numeric.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"random-numeric",title:"Random Numeric",pagination_label:"Random Numeric",sidebar_label:"Random Numeric",sidebar_class_name:"randomNumeric",keywords:["transforms","operations","random numeric"],description:"Generate a random number of any length.",slug:"/docs/transforms/operations/random-numeric",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Random Alphanumeric",permalink:"/idn/docs/transforms/operations/random-alphanumeric"},next:{title:"Reference",permalink:"/idn/docs/transforms/operations/reference"}},m={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the random numeric transform to generate a random number of any length."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The random numeric transform only requires the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\nattributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "randomNumeric",\n  "name": "Random Numeric Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"randomNumeric"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"length")," - This is the integer value specifying the required size/number\nof digits the random number must contain.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This value must be a positive number and cannot be blank."),(0,a.kt)("li",{parentName:"ul"},"If no length is provided, the transform defaults to a value of 10."),(0,a.kt)("li",{parentName:"ul"},"Due to identity attribute data constraints, the maximum allowable value is\n450 characters.")))))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'No explicit length is provided, so this transform generates a 10-digit random\ninteger, such as "2334776774".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "randomNumeric",\n  "name": "Random Numeric Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform generates a 6-digit random integer, such as "759931".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "length": "6"\n  },\n  "type": "randomNumeric",\n  "name": "Random Numeric Transform"\n}\n')))}u.isMDXComponent=!0}}]);