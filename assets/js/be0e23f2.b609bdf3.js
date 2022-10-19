"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99103],{55094:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={id:"entitlement-read",title:"Entitlement Read",pagination_label:"Entitlement Read",sidebar_label:"Entitlement Read",keywords:["connectivity","connectors","entitlement read"],description:"Fetch a single entitlement\u2019s attributes from the source.",slug:"/docs/saas-connectivity/commands/entitlement-read",tags:["Connectivity","Connector Command"]},s=void 0,d={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/entitlement-read",id:"docs/identity-now/saas-connectivity/connector-commands/entitlement-read",title:"Entitlement Read",description:"Fetch a single entitlement\u2019s attributes from the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/entitlement-read.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/entitlement-read",permalink:"/idn/docs/saas-connectivity/commands/entitlement-read",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/entitlement-read.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"entitlement-read",title:"Entitlement Read",pagination_label:"Entitlement Read",sidebar_label:"Entitlement Read",keywords:["connectivity","connectors","entitlement read"],description:"Fetch a single entitlement\u2019s attributes from the source.",slug:"/docs/saas-connectivity/commands/entitlement-read",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Entitlement List",permalink:"/idn/docs/saas-connectivity/commands/entitlement-list"},next:{title:"Test Connection",permalink:"/idn/docs/saas-connectivity/commands/test-connection"}},r={},l=[{value:"Example StdEntitlementReadInput",id:"example-stdentitlementreadinput",level:3},{value:"Example StdEntitlementReadOutput",id:"example-stdentitlementreadoutput",level:3},{value:"Response Schema",id:"response-schema",level:2}],m={toc:l};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"At this time Entitlement Read is not triggered from IDN for any specific\nworkflow and as such it is not necessary to implement this in order to have a\nfully functional connector.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementReadInput")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementReadOutput")))),(0,i.kt)("h3",{id:"example-stdentitlementreadinput"},"Example StdEntitlementReadInput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "type": "group"\n}\n')),(0,i.kt)("h3",{id:"example-stdentitlementreadoutput"},"Example StdEntitlementReadOutput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n')),(0,i.kt)("h2",{id:"response-schema"},"Response Schema"),(0,i.kt)("p",null,"Entitlement read fetches a single entitlement\u2019s attributes and returns the\nresulting object to IDN, similar to how entitlement list does. You can implement\nthis in the main connector file,\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n.stdEntitlementRead(async (context: Context, input: StdEntitlementReadInput, res: Response<StdEntitlementReadOutput>) => {\n    const group = await airtable.getEntitlement(input.key)\n\n    res.send(group.toStdEntitlementReadOutput())\n})\n...\n...\n...\npublic toStdEntitlementReadOutput(): StdEntitlementReadOutput {\n    return this.buildStandardObject();\n}\n\nprivate buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {\n    return {\n        key: SimpleKey(this.id),\n        type: 'group',\n        attributes: {\n            id: this.id,\n            name: this.name\n        }\n    }\n}\n")))}c.isMDXComponent=!0}}]);