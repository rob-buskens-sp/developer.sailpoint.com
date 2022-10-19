"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83390],{76647:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"your-first-transform",title:"Your First Transform",pagination_label:"Your First Transform",sidebar_label:"Your First Transform",sidebar_class_name:"yourFirstTransform",keywords:["transforms","guides","first"],description:"Learn to build your first transform!",sidebar_position:1,slug:"/docs/transforms/guides/your-first-transform",tags:["Transforms","Guides","First"]},s=void 0,i={unversionedId:"docs/identity-now/transforms/guides/your-first-transform",id:"docs/identity-now/transforms/guides/your-first-transform",title:"Your First Transform",description:"Learn to build your first transform!",source:"@site/products/idn/docs/identity-now/transforms/guides/your-first-transform.md",sourceDirName:"docs/identity-now/transforms/guides",slug:"/docs/transforms/guides/your-first-transform",permalink:"/idn/docs/transforms/guides/your-first-transform",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/guides/your-first-transform.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Guides",permalink:"/idn/tags/guides"},{label:"First",permalink:"/idn/tags/first"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",sidebarPosition:1,frontMatter:{id:"your-first-transform",title:"Your First Transform",pagination_label:"Your First Transform",sidebar_label:"Your First Transform",sidebar_class_name:"yourFirstTransform",keywords:["transforms","guides","first"],description:"Learn to build your first transform!",sidebar_position:1,slug:"/docs/transforms/guides/your-first-transform",tags:["Transforms","Guides","First"]},sidebar:"idnDocs",previous:{title:"Guides",permalink:"/idn/docs/transforms/guides"},next:{title:"Generate Temporary Password",permalink:"/idn/docs/transforms/guides/temporary-password"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"List Transforms in your IdentityNow Tenant",id:"list-transforms-in-your-identitynow-tenant",level:2},{value:"Create a Transform",id:"create-a-transform",level:2},{value:"Get Transform by ID",id:"get-transform-by-id",level:2},{value:"Update a Transform",id:"update-a-transform",level:2},{value:"Delete a Transform",id:"delete-a-transform",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:d};function p(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this guide, you will learn how to use\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/transforms"},"IdentityNow's Transform REST APIs")," to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#list-transforms-in-your-identitynow-tenant"},"List Transforms in Your IdentityNow Tenant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-transform"},"Create a Transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-transform-by-id"},"Get Transform by ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-a-transform"},"Update a Transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delete-a-transform"},"Delete a Transform"))),(0,r.kt)("h2",{id:"list-transforms-in-your-identitynow-tenant"},"List Transforms in your IdentityNow Tenant"),(0,r.kt)("p",null,"To call the APIs for transforms, you need a personal access token and your\ntenant's name to provide with the request. For more information about how to get\na personal access token, see\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"Personal Access Tokens"),".\nFor more information about how to get the name of your tenant, see\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/getting-started#finding-your-orgtenant-name"},"Finding Your Organization Tenant Name"),"."),(0,r.kt)("p",null,"Before you create your first custom transform, see what transforms are already\nin the tenant. You can get this information by calling the\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/get-transforms-list"},"List Transforms API"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://{tenant}.api.identitynow.com/v3/transforms' --header 'Authorization: Bearer {token}'\n")),(0,r.kt)("p",null,"The response body contains an array of transform objects containing the\nfollowing values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," - The id of the transform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - The name of the transform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - The type of transform, see\n",(0,r.kt)("a",{parentName:"li",href:"/idn/docs/transforms/operations"},"Transform Operations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"attributes")," - Object of attributes related to the transform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"internal")," - A ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," attribute to determine whether the\ntransform is internal or custom",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"true")," - The transform is internal and cannot be modified without\ncontacting Sailpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"false")," - The tranform is custom and can be modified with the API.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "2b5191bb-051f-4edf-8283-3962b4a0f7a5",\n        "name": "ISO3166 Country Format",\n        "type": "iso3166",\n        "attributes": null,\n        "internal": true\n    },\n    {\n        "id": "484e717d-2841-4bab-9bbf-6f48d8096965",\n        "name": "Calculate Partners State",\n        "type": "substring",\n        "attributes": {\n            "input": {\n                "attributes": {\n                    "attributeName": "Location",\n                    "sourceName": "Partner Accounts"\n                },\n                "type": "accountAttribute"\n            },\n            "end": -1.0,\n            "begin": {\n                "attributes": {\n                    "substring": ","\n                },\n                "type": "indexOf"\n            },\n            "beginOffset": 2.0\n        },\n        "internal": false\n    }\n    ...\n    ]\n')),(0,r.kt)("h2",{id:"create-a-transform"},"Create a Transform"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/lookup"},"lookup transform")," takes the input value of an\nattribute, locates it in the table provided, and returns its corresponding\nvalue. If the transform does not find your input value in the lookup table, it\nreturns the default value. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{tenant}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{token}")," with the values you\ngot ealier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://{tenant}.api.identitynow.com/v3/transforms\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {token}\' \\\n--data-raw \'{\n    "name": "Country Code To Timezone",\n    "type": "lookup",\n    "attributes": {\n        "table": {\n            "EN-US": "CST",\n            "ES-MX": "CST",\n            "EN-GB": "GMT",\n            "default": "GMT"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",\n  "name": "Country Code To Timezone",\n  "type": "lookup",\n  "attributes": {\n    "table": {\n      "EN-US": "CST",\n      "ES-MX": "CST",\n      "EN-GB": "GMT",\n      "default": "GMT"\n    }\n  },\n  "internal": false\n}\n')),(0,r.kt)("p",null,"Once you have created the transform, you can find it in IdentityNow by going to\n",(0,r.kt)("strong",{parentName:"p"},"Admin")," > ",(0,r.kt)("strong",{parentName:"p"},"Identities")," > ",(0,r.kt)("strong",{parentName:"p"},"Identity Profiles")," > (An Identity Profile) >\n",(0,r.kt)("strong",{parentName:"p"},"Mappings")," (tab)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mappings Tab",src:n(31014).Z,width:"2530",height:"1482"})),(0,r.kt)("p",null,"For more information about creating transforms, see\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/create-transform"},"Create Transform"),"."),(0,r.kt)("h2",{id:"get-transform-by-id"},"Get Transform by ID"),(0,r.kt)("p",null,"To get the transform created with the API, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," endpoint, using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," returned by the create API response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a' \\\n--header 'Authorization: Bearer {token}'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",\n  "name": "Country Code To Timezone",\n  "type": "lookup",\n  "attributes": {\n    "table": {\n      "EN-US": "CST",\n      "ES-MX": "CST",\n      "EN-GB": "GMT",\n      "default": "GMT"\n    }\n  },\n  "internal": false\n}\n')),(0,r.kt)("p",null,"For more information about getting a transform by its ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," see the API\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/get-transform"},"Transform by ID"),"."),(0,r.kt)("h2",{id:"update-a-transform"},"Update a Transform"),(0,r.kt)("p",null,"To update a transform, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," endpoint with the updated transform body.\nThis example adds another item to the lookup table, ",(0,r.kt)("inlineCode",{parentName:"p"},"EN-CA.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," field results in a bad request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request PUT \'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Bearer {token}\' \\\n--data-raw \'{\n    "name": "Country Code To Timezone",\n    "type": "lookup",\n    "attributes": {\n        "table": {\n            "EN-US": "CST",\n            "ES-MX": "CST",\n            "EN-GB": "GMT",\n            "EN-CA": "MST",\n            "default": "GMT"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "b23788a0-41a2-453b-89ae-0d670fa0cb6a",\n  "name": "Country Code To Timezone",\n  "type": "lookup",\n  "attributes": {\n    "table": {\n      "EN-US": "CST",\n      "ES-MX": "CST",\n      "EN-GB": "GMT",\n      "EN-CA": "MST",\n      "default": "GMT"\n    }\n  },\n  "internal": false\n}\n')),(0,r.kt)("p",null,"For more information about updating transforms, see\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/update-transform"},"Update a transform"),"."),(0,r.kt)("h2",{id:"delete-a-transform"},"Delete a Transform"),(0,r.kt)("p",null,"To delete the transform, call the DELETE endpoint with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the transform\nto delete. The server responds with a 204 when the transform is successfully\nremoved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request DELETE 'https://{tenant}.api.identitynow.com/v3/transforms/b23788a0-41a2-453b-89ae-0d670fa0cb6a' \\\n--header 'Authorization: Bearer {token}'\n")),(0,r.kt)("p",null,"For more information about deleting transforms, see the API\n",(0,r.kt)("a",{parentName:"p",href:"/idn/api/v3/delete-transform"},"Delete Transform"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Congratulations on creating your first transform! Now that you understand the\nlifecycle of transforms, see ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/guides/temporary-password"},"complex usecase")," to learn\nhow to use a nested transform structure to create a temporary password that can\nbe sent to each user."))}p.isMDXComponent=!0},31014:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/mappings_tab-ac31b9969d8dcafa49c8cd60d806205b.png"}}]);