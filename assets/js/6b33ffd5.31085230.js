"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80397],{58587:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"get-end-of-string",title:"Get End of String",pagination_label:"Get End of String",sidebar_label:"Get End of String",sidebar_class_name:"getEndOfString",keywords:["transforms","operations","get","end","string"],description:"Get the rightmost N characters of a string.",slug:"/docs/transforms/operations/get-end-of-string",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/get-end-of-string",id:"docs/identity-now/transforms/operations/get-end-of-string",title:"Get End of String",description:"Get the rightmost N characters of a string.",source:"@site/products/idn/docs/identity-now/transforms/operations/get-end-of-string.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/get-end-of-string",permalink:"/idn/docs/transforms/operations/get-end-of-string",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/get-end-of-string.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"get-end-of-string",title:"Get End of String",pagination_label:"Get End of String",sidebar_label:"Get End of String",sidebar_class_name:"getEndOfString",keywords:["transforms","operations","get","end","string"],description:"Get the rightmost N characters of a string.",slug:"/docs/transforms/operations/get-end-of-string",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Generate Random String",permalink:"/idn/docs/transforms/operations/generate-random-string"},next:{title:"Get Reference Identity Attribute",permalink:"/idn/docs/transforms/operations/get-reference-identity-attribute"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the get end of string transform as an out-of-the-box rule transform provided\nthrough SailPoint's Cloud Services Deployment Utility rule. The transform allows\nyou to get the rightmost N characters of a string."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The structure of a get end of string transform requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of the\nreferenced rule to be the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud Services Deployment Utility")," rule built by\nSailPoint. You must also set ",(0,a.kt)("inlineCode",{parentName:"p"},"operation")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"getEndOfString,")," and provide a\n",(0,a.kt)("inlineCode",{parentName:"p"},"numChars")," value. Last, you must include the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes\nrequired for all transforms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "4"\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"rule"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes.name")," - This must always be set to\n",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Services Deployment Utility"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"operation")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"getEndOfString"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numChars")," - This specifies how many of the rightmost characters within\nthe incoming string the transform returns. If the value of numChars is\ngreater than the string length, the transform returns null."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the\ninput data passed into the transform logic. If no input is provided, the\ntransform takes its input from the source and attribute combination\nconfigured with the UI.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'This transform returns the last four characters of the input string "abcd1234".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "abcd1234"\nOutput: "1234"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "4"\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,"This transform returns a null value because the incoming string length is only\n15 characters long, but the transform requests the rightmost 16 characters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "numChars": "16",\n    "input": "This is a test."\n  },\n  "type": "rule",\n  "name": "Get End Of String Transform"\n}\n')))}d.isMDXComponent=!0}}]);