"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21884],{95177:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>T});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),o=s(74933),l=s(47507),m=s(24310),u=s(63303),p=(s(75035),s(85162));const d={id:"get-task-result-by-id",sidebar_label:"Returns a TaskResult resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getTaskResultById",tags:["TaskResults"],description:"The TaskResult resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\nThe schema related to TaskResult is:\n- **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**\n",parameters:[{name:"taskResultId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of TaskResult resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"host"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, messages"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single TaskResult resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"Unique identifier of the TaskResult.",type:"string",example:"c0a8019c80761c398180856488d2051d"},name:{description:"Name of the TaskResult.",type:"string",example:"Aggregate Composite Application"},type:{description:"Type of the TaskResult.",type:"string",example:"AccountAggregation"},completionStatus:{type:"string",description:"Completion Status of the TaskResult.",enum:["Success","Warning","Error","Terminated","TempError"],example:"Success"},launcher:{description:"Launcher of the TaskResult.",type:"string",example:"james.smith"},host:{description:"Host of the TaskResult.",type:"string",example:"mandrake.testdomain.com"},progress:{description:"Progress of the TaskResult.",type:"string",example:"3/5 tasks completed."},targetClass:{description:"Target Class of the TaskResult.",type:"string",example:"Permission"},targetName:{description:"Target Name of the Task Result.",type:"string",example:"Adam.Kennedy"},terminated:{description:"Flag to indicate this TaskResult is terminated.",type:"boolean",example:!1},partitioned:{description:"Flag to indicate this TaskResult is partitioned.",type:"boolean",example:!0},launched:{type:"string",format:"date-time",description:"The launched DateTime of the TaskResult.",example:"2022-05-02T10:30:00.014-05:00"},completed:{type:"string",format:"date-time",description:"The completed DateTime of the TaskResult.",example:"2022-05-02T10:30:00.035-05:00"},expiration:{type:"string",format:"date-time",description:"The expiration DateTime of the TaskResult.",example:"2022-05-03T16:40:34.271-05:00"},verified:{type:"string",format:"date-time",description:"The verification DateTime of the TaskResult.",example:"2022-05-03T16:40:34.271-05:00"},percentageComplete:{type:"integer",description:"The percentage completed of this TaskResult.",example:30},pendingSignOffs:{description:"The number of pending signoffs of this TaskResult.",type:"integer",example:0},taskDefinition:{type:"string",description:"Name of the TaskDefinition of the TaskResult.",example:"Workflow Launcher"},taskSchedule:{description:"Name of the TaskSchedule of the TaskResult.",type:"string",example:"Perform Identity Request Maintenance"},attributes:{description:"A list of attributes of the TaskResult.",type:"array",items:{properties:{key:{description:"The attribute key.",type:"string",example:"inactiveWorkItemsForwarded"},value:{description:"The attribute value.",type:"string",example:"0"}}}},messages:{description:"List of messages of the TaskResult.",type:"array",items:{example:["Partition 2 is pending."]}},meta:{type:"object",properties:{created:{description:"DateTime when the TaskResult was created.",type:"string",format:"date-time",example:"2022-05-02T10:30:00.018-05:00"},location:{description:"URL to the TaskResult.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/TaskResults/c0a8019c80761c398180856488d2051d"},lastModified:{description:"DateTime of TaskResult last modification.",type:"string",format:"date-time",example:"2022-05-02T10:30:00.036-05:00"},version:{description:"TaskResult version.",type:"string",example:'W"1651505400036"'},resourceType:{description:"Resource type of the metadata subject.",type:"string",example:"TaskResult"}}},schemas:{type:"array",example:["urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult"]}}}}}}},method:"get",path:"/TaskResults/{taskResultId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a TaskResult resource based on id.",description:{content:"The TaskResult resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\nThe schema related to TaskResult is:\n- **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**\n",type:"text/plain"},url:{path:["TaskResults",":taskResultId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of TaskResult resource.",type:"text/plain"},type:"any",value:"",key:"taskResultId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a TaskResult resource based on id.' (get-task-result-by-id)"},c=void 0,h={unversionedId:"api/get-task-result-by-id",id:"api/get-task-result-by-id",title:"get-task-result-by-id",description:"Returns a TaskResult resource based on id.",source:"@site/products/iiq/api/get-task-result-by-id.api.mdx",sourceDirName:"api",slug:"/api/get-task-result-by-id",permalink:"/iiq/api/get-task-result-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a TaskResult resource based on id.' (get-task-result-by-id)",tags:[],version:"current",frontMatter:{id:"get-task-result-by-id",sidebar_label:"Returns a TaskResult resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getTaskResultById",tags:["TaskResults"],description:"The TaskResult resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\nThe schema related to TaskResult is:\n- **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**\n",parameters:[{name:"taskResultId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of TaskResult resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"host"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, messages"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single TaskResult resource based on the id.",content:{"application/json":{schema:{properties:{id:{description:"Unique identifier of the TaskResult.",type:"string",example:"c0a8019c80761c398180856488d2051d"},name:{description:"Name of the TaskResult.",type:"string",example:"Aggregate Composite Application"},type:{description:"Type of the TaskResult.",type:"string",example:"AccountAggregation"},completionStatus:{type:"string",description:"Completion Status of the TaskResult.",enum:["Success","Warning","Error","Terminated","TempError"],example:"Success"},launcher:{description:"Launcher of the TaskResult.",type:"string",example:"james.smith"},host:{description:"Host of the TaskResult.",type:"string",example:"mandrake.testdomain.com"},progress:{description:"Progress of the TaskResult.",type:"string",example:"3/5 tasks completed."},targetClass:{description:"Target Class of the TaskResult.",type:"string",example:"Permission"},targetName:{description:"Target Name of the Task Result.",type:"string",example:"Adam.Kennedy"},terminated:{description:"Flag to indicate this TaskResult is terminated.",type:"boolean",example:!1},partitioned:{description:"Flag to indicate this TaskResult is partitioned.",type:"boolean",example:!0},launched:{type:"string",format:"date-time",description:"The launched DateTime of the TaskResult.",example:"2022-05-02T10:30:00.014-05:00"},completed:{type:"string",format:"date-time",description:"The completed DateTime of the TaskResult.",example:"2022-05-02T10:30:00.035-05:00"},expiration:{type:"string",format:"date-time",description:"The expiration DateTime of the TaskResult.",example:"2022-05-03T16:40:34.271-05:00"},verified:{type:"string",format:"date-time",description:"The verification DateTime of the TaskResult.",example:"2022-05-03T16:40:34.271-05:00"},percentageComplete:{type:"integer",description:"The percentage completed of this TaskResult.",example:30},pendingSignOffs:{description:"The number of pending signoffs of this TaskResult.",type:"integer",example:0},taskDefinition:{type:"string",description:"Name of the TaskDefinition of the TaskResult.",example:"Workflow Launcher"},taskSchedule:{description:"Name of the TaskSchedule of the TaskResult.",type:"string",example:"Perform Identity Request Maintenance"},attributes:{description:"A list of attributes of the TaskResult.",type:"array",items:{properties:{key:{description:"The attribute key.",type:"string",example:"inactiveWorkItemsForwarded"},value:{description:"The attribute value.",type:"string",example:"0"}}}},messages:{description:"List of messages of the TaskResult.",type:"array",items:{example:["Partition 2 is pending."]}},meta:{type:"object",properties:{created:{description:"DateTime when the TaskResult was created.",type:"string",format:"date-time",example:"2022-05-02T10:30:00.018-05:00"},location:{description:"URL to the TaskResult.",type:"string",example:"http://localhost:8080/identityiq/scim/v2/TaskResults/c0a8019c80761c398180856488d2051d"},lastModified:{description:"DateTime of TaskResult last modification.",type:"string",format:"date-time",example:"2022-05-02T10:30:00.036-05:00"},version:{description:"TaskResult version.",type:"string",example:'W"1651505400036"'},resourceType:{description:"Resource type of the metadata subject.",type:"string",example:"TaskResult"}}},schemas:{type:"array",example:["urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult"]}}}}}}},method:"get",path:"/TaskResults/{taskResultId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a TaskResult resource based on id.",description:{content:"The TaskResult resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br />\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\nThe schema related to TaskResult is:\n- **urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult**\n",type:"text/plain"},url:{path:["TaskResults",":taskResultId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of TaskResult resource.",type:"text/plain"},type:"any",value:"",key:"taskResultId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a TaskResult resource based on id.' (get-task-result-by-id)"},sidebar:"iiqOpenApiSidebar",previous:{title:"Returns all TaskResult resources.",permalink:"/iiq/api/task-results-get"},next:{title:"Users",permalink:"/iiq/api/users"}},g={},T=[{value:"Returns a TaskResult resource based on id.",id:"returns-a-taskresult-resource-based-on-id",level:2}],k={toc:T};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"returns-a-taskresult-resource-based-on-id"},"Returns a TaskResult resource based on id."),(0,i.kt)("p",null,"The TaskResult resource with matching id is returned.","<","br /",">","<","br /",">","\nAttributes to include in the response can be specified with the attributes query parameter. ","<","br /",">","<","br /",">","\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. ","<","br /",">","<","br /",">","\nThe schema related to TaskResult is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"urn:ietf:params:scim:schemas:sailpoint:1.0:TaskResult"))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"taskResultId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of TaskResult resource.",required:!0},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"attributes",schema:{type:"string",example:"host"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"excludedAttributes",schema:{type:"string",example:"name, messages"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns a single TaskResult resource based on the id.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Unique identifier of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"Type of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"completionStatus",required:!1,schemaDescription:"Completion Status of the TaskResult.",schemaName:"string",qualifierMessage:"**Possible values:** [`Success`, `Warning`, `Error`, `Terminated`, `TempError`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"launcher",required:!1,schemaDescription:"Launcher of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"host",required:!1,schemaDescription:"Host of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"progress",required:!1,schemaDescription:"Progress of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"targetClass",required:!1,schemaDescription:"Target Class of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"targetName",required:!1,schemaDescription:"Target Name of the Task Result.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"terminated",required:!1,schemaDescription:"Flag to indicate this TaskResult is terminated.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"partitioned",required:!1,schemaDescription:"Flag to indicate this TaskResult is partitioned.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"launched",required:!1,schemaDescription:"The launched DateTime of the TaskResult.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"completed",required:!1,schemaDescription:"The completed DateTime of the TaskResult.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"expiration",required:!1,schemaDescription:"The expiration DateTime of the TaskResult.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"verified",required:!1,schemaDescription:"The verification DateTime of the TaskResult.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"percentageComplete",required:!1,schemaDescription:"The percentage completed of this TaskResult.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"pendingSignOffs",required:!1,schemaDescription:"The number of pending signoffs of this TaskResult.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"taskDefinition",required:!1,schemaDescription:"Name of the TaskDefinition of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"taskSchedule",required:!1,schemaDescription:"Name of the TaskSchedule of the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"attributes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of attributes of the TaskResult.")),(0,i.kt)(m.Z,{collapsible:!1,name:"key",required:!1,schemaDescription:"The attribute key.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The attribute value.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"messages",required:!1,schemaDescription:"List of messages of the TaskResult.",schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"meta"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"DateTime when the TaskResult was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"URL to the TaskResult.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"lastModified",required:!1,schemaDescription:"DateTime of TaskResult last modification.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:"TaskResult version.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"Resource type of the metadata subject.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"schemas",required:!1,schemaDescription:void 0,schemaName:"array",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "id": "string",\n  "name": "string",\n  "type": "string",\n  "completionStatus": "Success",\n  "launcher": "string",\n  "host": "string",\n  "progress": "string",\n  "targetClass": "string",\n  "targetName": "string",\n  "terminated": true,\n  "partitioned": true,\n  "launched": "2022-10-19",\n  "completed": "2022-10-19",\n  "expiration": "2022-10-19",\n  "verified": "2022-10-19",\n  "percentageComplete": 0,\n  "pendingSignOffs": 0,\n  "taskDefinition": "string",\n  "taskSchedule": "string",\n  "attributes": [\n    {\n      "key": "string",\n      "value": "string"\n    }\n  ],\n  "messages": [\n    null\n  ],\n  "meta": {\n    "created": "2022-10-19",\n    "location": "string",\n    "lastModified": "2022-10-19",\n    "version": "string",\n    "resourceType": "string"\n  },\n  "schemas": [\n    null\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);