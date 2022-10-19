"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80603],{89875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"connector-spec",title:"Connector Specification File",pagination_label:"Connector Spec File",sidebar_label:"Connector Spec File",sidebar_position:4,sidebar_class_name:"connectorSpecFile",keywords:["connectivity","connectors","spec","specification"],description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",slug:"/docs/saas-connectivity/connector-spec",tags:["Connectivity"]},r=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-spec",id:"docs/identity-now/saas-connectivity/connector-spec",title:"Connector Specification File",description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-spec.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/connector-spec",permalink:"/idn/docs/saas-connectivity/connector-spec",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-spec.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1666204083,formattedLastUpdatedAt:"Oct 19, 2022",sidebarPosition:4,frontMatter:{id:"connector-spec",title:"Connector Specification File",pagination_label:"Connector Spec File",sidebar_label:"Connector Spec File",sidebar_position:4,sidebar_class_name:"connectorSpecFile",keywords:["connectivity","connectors","spec","specification"],description:"The connector spec file tells IDN how the connector should interact between IDN and the custom connector. It is the glue between IDN and the connector, so understanding the different sections are key to understanding how to build a custom connectors.",slug:"/docs/saas-connectivity/connector-spec",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Common CLI Commands",permalink:"/idn/docs/saas-connectivity/common-cli-commands"},next:{title:"Example Connectors",permalink:"/idn/docs/saas-connectivity/example-connectors"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Sample File",id:"sample-file",level:2},{value:"Description of Fields",id:"description-of-fields",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The connector spec file tells IDN how the connector should interact between IDN\nand the custom connector. It is the glue between IDN and the connector, so\nunderstanding the different sections are key to understanding how to build a\ncustom connectors."),(0,a.kt)("h2",{id:"sample-file"},"Sample File"),(0,a.kt)("p",null,"To see a sample spec file, see this link:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json"},"connector-spec.json")),(0,a.kt)("h2",{id:"description-of-fields"},"Description of Fields"),(0,a.kt)("p",null,"The following describes in detail the different fields in the connector spec:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"name:")," The name of the connector as it appears in IDN. Tags can be appended\nto this name.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"keyType:")," Either \u201csimple\u201d or \u201ccompound\u201d This determines which type of key\nyour connector expects to receive and send back for each of the commands. This\nmust always be indicated in your connector spec - the connector returns the\ncorrect type for each command that returns a key type."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For example, the stdAccountRead command input is the StdAccountReadInput. if\nyou select keyType as \u201csimple,\u201d then the StdAccountReadInput.key will be the\ntype SimpleKey."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"commands:")," The list of commands the connector supports. A full list of\navailable commands can be found here.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"sourceConfig")," A list of configuration items you must provide when you\ncreate a source in IDN. The order of these items is preserved in the UI."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," This is always \u201cmenu\u201d - it indicates a new menu for the sidebar. You can have multiple sections defined for complex connector configurations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label:")," This label indicates the text that will show up on the sidebar in IDN"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"items:")," The array of items in the menu",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:"),' This is always "section" - it indicates a new section on the page'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sectionTitle:")," The large text title that will display for the section."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sectionHelpMessage:")," A description about the section that can help the user understand what it is used for and how to fill out the fields",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"key:")," The name of the configuration item as it is referenced in code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label:")," The name of the configuration item as it appears in the UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"required")," (Optional): Set to 'false' by default. Valid values are\n'true' or 'false.' You must populate required configuration items in the\nIDN source configuration wizard before continuing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The configuration items' types. The following types are valid:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"text"),(0,a.kt)("li",{parentName:"ul"},"password"),(0,a.kt)("li",{parentName:"ul"},"url"),(0,a.kt)("li",{parentName:"ul"},"email"),(0,a.kt)("li",{parentName:"ul"},"number"),(0,a.kt)("li",{parentName:"ul"},"checkbox"),(0,a.kt)("li",{parentName:"ul"},"json"))))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"accountSchema:")," The schema for an account in IDN populated by data from\nthe source."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayAttribute:")," Identifies the attribute (defined below) used to\nmap to ",(0,a.kt)("inlineCode",{parentName:"li"},"Account Name")," in the IdentityNow account schema. This should be\na unique value even though it is not required because the connector will\nuse this value to correlate accounts in IDN to accounts in the source\nsystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"identityAttribute:")," Identifies the attribute (defined below) used to\nmap to ",(0,a.kt)("inlineCode",{parentName:"li"},"Account ID")," in the IdentityNow account schema. This must be a\nglobally unique identifier, such as email address, employee ID, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groupAttribute:")," Identifies the attribute used to map accounts to\nentitlements. For example, a web service can define ",(0,a.kt)("inlineCode",{parentName:"li"},"groups")," that users\nare members of, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"groups")," grant entitlements to each user. In\nthis case, ",(0,a.kt)("strong",{parentName:"li"},"groupAttribute")," is \u201cgroups,\u201d and there is also an account\nattribute called \u201cgroups\u201d."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes:")," One or more attributes that map to a user\u2019s attribute on\nthe target source. Each attribute defines the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name:")," The attribute\u2019s name as it appears in IDN."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description:")," A helpful description of the attribute. This is\nuseful to source owners when they are trying to understand the account\nschema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"managed:")," This indicates whether the entitlements are manageable\nthrough IDN or read-only."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"entitlement:")," This boolean indicates whether the attribute is an\nentitlement. Entitlements give identities privileges on the source\nsystem. Use this indication to determine which fields to synchronize\nwith accounts in IDN for tasks such as separation of duties and role\nassignment. The boolean indicates whether the attribute is an\nentitlement."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"multi:")," This indicates entitlements that are stored in an array\nformat. This one field can store multiple entitlements for a single\naccount."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"entitlementSchemas:")," A list of entitlement schemas in IDN populated\nby data from the source."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The entitlement\u2019s type. Currently, only ",(0,a.kt)("inlineCode",{parentName:"li"},"group")," is\nsupported."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayAttribute:")," The entitlement attribute\u2019s name. This can be\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," or another human friendly identifier for a group."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"identityAttribute:")," The entitlement attribute\u2019s unique ID. This can\nbe the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," or another unique key for a group."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes:")," The entitlement\u2019s list of attributes. This list of\nattributes is an example: ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"description"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name:")," The name of the attribute as it appears in IDN."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description:")," A helpful description the attribute. This is useful\nto source owners when they are trying to understand the account\nschema."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"accountCreateTemplate:")," A map of identity attributes IDN will pass to\nthe connector to create an account in the target source."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"key:")," The unique identifier of the attribute. This is also the name\nthat is presented in the Create Profile screen in IDN."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label:")," A friendly name for presentation purposes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The attribute\u2019s type. Possible values are ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"long"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"initialValue (Optional):")," Use this to specify identitAttribute\nmapping, generator or default values.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type:")," The initial value type. Possible values are\n",(0,a.kt)("inlineCode",{parentName:"li"},"identityAttribute"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"generator"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"static"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes:")," Attributes change depending on the type selected.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name:")," Use this to identify the mapping for identityAttribute\ntype, or the generator to use (",(0,a.kt)("inlineCode",{parentName:"li"},"Create Password"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"Create Unique Account ID"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value:")," Use this as the default value for the static type."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxSize:")," Use this for the Create Unique Account ID generator\ntype. This value specifies the maximum size of the username to be\ngenerated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxUniqueChecks:")," Use this for the Create Unique Account ID\ngenerator type. This value specifies the maximum retries in case a\nunique ID is not found with the first random generated user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"template:")," Use this for the Create Unique Account ID generator\ntype. This value specifies the template used for generation.\nExample: ",(0,a.kt)("inlineCode",{parentName:"li"},'"$(firstname).$(lastname)$(uniqueCounter)"'),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"required (Optional):")," Determines whether the account create\noperation requires this attribute. It defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),". If it is\n",(0,a.kt)("inlineCode",{parentName:"li"},"true")," and IdentityNow encounters an identity missing this\nattribute, IDN does not send the account to the connector for\naccount creation.")))))))}u.isMDXComponent=!0}}]);