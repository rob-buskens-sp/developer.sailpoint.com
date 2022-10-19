"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[62218],{45167:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/docs/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},o=void 0,i={unversionedId:"docs/identity-now/transforms/operations/name-normalizer",id:"docs/identity-now/transforms/operations/name-normalizer",title:"Name Normalizer",description:"Clean or standardize the spelling of strings coming in from source systems.",source:"@site/products/idn/docs/identity-now/transforms/operations/name-normalizer.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/name-normalizer",permalink:"/idn/docs/transforms/operations/name-normalizer",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/name-normalizer.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/docs/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Lower",permalink:"/idn/docs/transforms/operations/lower"},next:{title:"Random Alphanumeric",permalink:"/idn/docs/transforms/operations/random-alphanumeric"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the name normalizer transform to clean or standardize the spelling of\nstrings coming in from source systems. The most common use for this transform is\nfor names and other proper nouns, but the transform is not necessarily limited\nto those data elements."),(0,r.kt)("p",null,"The normalization logic within the transform handles a wide range of use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proper casing/capitalization of names",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any string containing either a space, a hyphen or an apostrophe - the\ntransform splits these by that character and capitalizes the first character\nof each resulting substring."))),(0,r.kt)("li",{parentName:"ul"},'Special replacements of patterns that include "MC" and "MAC" (or case-based\nvariations of those two strings)',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The transform automatically converts "MC" to "Mc" and "MAC" to "Mac" when\nthey are part of a patronymic last name.'))),(0,r.kt)("li",{parentName:"ul"},"Consistent capitalization of strings that are part of a toponymic surname or a\ngenerational suffix:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Convert "VON" to "von"'),(0,r.kt)("li",{parentName:"ul"},'Convert "DEL" to "del"'),(0,r.kt)("li",{parentName:"ul"},'Convert "OF" to "of"'),(0,r.kt)("li",{parentName:"ul"},'Convert "DE" to "de"'),(0,r.kt)("li",{parentName:"ul"},'Convert "LA" to "la"'),(0,r.kt)("li",{parentName:"ul"},'Convert "Y" to "y"'),(0,r.kt)("li",{parentName:"ul"},'Convert Roman numeral suffixes to all capitalized letters (e.g., "iii"\nbecomes "III")')))),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"The name normalizer transform only requires the transform's ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\nattributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"normalizeNames"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents\nthe name of the transform as it will appear in the UI's dropdown menus."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether\nthe transform logic should be reevaluated every evening as part of the\nidentity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the\ninput data passed into the transform logic. If no input is provided, the\ntransform takes its input from the source and attribute combination\nconfigured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"This transform takes a static value and normalizes it to a consistent format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "jOHN VON SmITh"\nOutput: "John von Smith"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "jOHN VON SmITh"\n      },\n      "type": "static"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,'This transform takes the user\'s "LastName" attribute from the "HR Source" and\nnormalizes the name to a consistent format.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Dr. JOHN D. O\'BRIEN"\nOutput: "Dr. John D. O\'Brien"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')))}u.isMDXComponent=!0}}]);