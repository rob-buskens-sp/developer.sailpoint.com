"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[81465],{51231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>h,toc:()=>k});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),o=a(94891),n=a(74933),l=a(47507),u=a(24310),m=a(63303),d=(a(75035),a(85162));const p={id:"get-launched-workflow-by-id",sidebar_label:"Returns a LaunchedWorkflow resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getLaunchedWorkflowById",tags:["LaunchedWorkflows"],description:"The LaunchedWorkflow resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br /> \nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n\nThe schema related to LaunchedWorkflow is: \n- **urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow**\n",parameters:[{name:"launchedWorkflowId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of LaunchedWorkflow resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"expiration"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"names"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single LaunchedWorkflow resource based on the id. <br /> **LaunchedWorkflow responses include attributes from the TaskResult related to the Workflow execution.**",content:{"application/json":{schema:{properties:{partitioned:{description:"Flag to indicate this TaskResult is partitioned. (From the TaskResult used to launch the Workflow).",type:"boolean",example:!0},completed:{type:"string",format:"date-time",description:"The completed DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"2022-04-14T10:45:26.098-05:00"},type:{description:"Type of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Workflow"},launched:{type:"string",format:"date-time",description:"The launched DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"2022-04-14T10:45:26.114-05:00"},pendingSignOffs:{description:"The number of pending signoffs of this TaskResult. (From the TaskResult used to launch the Workflow).",type:"integer",example:2},workflowName:{description:"Name of the Workflow to launch.",type:"string",example:"Update Account Group a2a"},identityRequestId:{description:"Id representing the identity request.",type:"string",example:"0000000002"},workflowCaseId:{description:"Id representing the workflow case (a running instance of a workflow).",type:"string",example:"7f000001806719888180675c8f8a016a"},workflowProcessId:{type:"string",description:"Id representing the workflow monitoring process log.",example:"7f000001806719888180675c8f8a0017b"},retries:{description:"The number of retries performed during the execution of provisioning activities.",type:"integer",example:1},approvalSet:{description:"XML representation of approvals.",type:"string",example:'example: <ApprovalSet><ApprovalItem application="Active Directory" approver="James.Smith" assignmentId="25701d226e9d4f98a8e42fcebb6113597" displayName="Role" displayValue="Benefits" id="7e314fb9b307481682b42f8e714b5687" name="assignedRoles" operation="Add" state="Pending" value="Benefits"><Attributes> <Map><entry key="comments"/><entry key="Access Request Item"/><entry key="flow" value="AccessRequest"/><entry key="id" value="7f00000180281df7818028bfb3ab5c87"/><entry key="interface" value="IIQ"/><entry key="operation" value="RoleAdd"/></Map></Attributes></ApprovalItem></ApprovalSet>'},workflowSummary:{description:"XML representation of the workflow summary.",type:"string",example:'example: "<WorkflowSummary step="end"><Interactions><ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/></Interactions></WorkflowSummary>"'},input:{description:"A list of input attributes of the Launched Workflow.",type:"object",properties:{key:{description:"The attribute key.",type:"string",example:"_caseName"},value:{description:"The attribute value.",type:"string",example:"WorkflowCaseRegistry"},type:{description:"The attribute type.",type:"string",example:"string"}}},output:{description:"A list of output attributes of the Launched Workflow.",type:"object",properties:{key:{description:"The attribute key.",type:"string",example:"workflowSummary"},value:{description:"The attribute value.",type:"string",example:'<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'},type:{description:"The attribute type.",type:"string",example:"application/xml"}}},targetClass:{description:"Target Class of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Permission"},name:{description:"Name of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Update Account Group a2a"},messages:{description:"List of messages of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"array",items:{example:["Task executed successfully."]}},attributes:{description:"A list of attributes of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"array",items:{properties:{key:{description:"The attribute key.",type:"string",example:"Workflow Summary"},value:{description:"The attribute value.",type:"string",example:'<WorkflowSummary step="end">\n  <Interactions>\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\n  </Interactions>\n</WorkflowSummary>\n'}}}},id:{description:"Unique identifier of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"7f00000180281df7818028c03252085c"},completionStatus:{type:"string",description:"Completion Status of the TaskResult. (From the TaskResult used to launch the Workflow).",enum:["Success","Warning","Error","Terminated","TempError"],example:"Success"},taskDefinition:{type:"string",description:"Name of the TaskDefinition of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"Workflow Launcher"},terminated:{description:"Flag to indicate this TaskResult is terminated. (From the TaskResult used to launch the Workflow).",type:"boolean",example:!0},launcher:{description:"Launcher of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"spadmin"},meta:{type:"object",properties:{created:{description:"DateTime when the TaskResult was created. (From the TaskResult used to launch the Workflow).",type:"string",format:"date-time",example:"2022-04-14T10:44:54.834-05:00"},location:{description:"URL to the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c"},lastModified:{description:"DateTime of TaskResult last modification. (From the TaskResult used to launch the Workflow).",type:"string",format:"date-time",example:"2022-04-05T15:52:30.119-05:00"},version:{description:"TaskResult version. (From the TaskResult used to launch the Workflow).",type:"string",example:'"W"1649951094834"'},resourceType:{description:"Resource type of the metadata subject. (From the TaskResult used to launch the Workflow).",type:"string",example:"TaskResult"}}}}}}}}},method:"get",path:"/LaunchedWorkflow/{launchedWorkflowId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a LaunchedWorkflow resource based on id.",description:{content:"The LaunchedWorkflow resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br /> \nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n\nThe schema related to LaunchedWorkflow is: \n- **urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow**\n",type:"text/plain"},url:{path:["LaunchedWorkflow",":launchedWorkflowId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of LaunchedWorkflow resource.",type:"text/plain"},type:"any",value:"",key:"launchedWorkflowId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a LaunchedWorkflow resource based on id.' (get-launched-workflow-by-id)"},c=void 0,h={unversionedId:"api/get-launched-workflow-by-id",id:"api/get-launched-workflow-by-id",title:"get-launched-workflow-by-id",description:"Returns a LaunchedWorkflow resource based on id.",source:"@site/products/iiq/api/get-launched-workflow-by-id.api.mdx",sourceDirName:"api",slug:"/api/get-launched-workflow-by-id",permalink:"/iiq/api/get-launched-workflow-by-id",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a LaunchedWorkflow resource based on id.' (get-launched-workflow-by-id)",tags:[],version:"current",frontMatter:{id:"get-launched-workflow-by-id",sidebar_label:"Returns a LaunchedWorkflow resource based on id.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getLaunchedWorkflowById",tags:["LaunchedWorkflows"],description:"The LaunchedWorkflow resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br /> \nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n\nThe schema related to LaunchedWorkflow is: \n- **urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow**\n",parameters:[{name:"launchedWorkflowId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of LaunchedWorkflow resource.",required:!0},{in:"query",name:"attributes",schema:{type:"string",example:"expiration"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},{in:"query",name:"excludedAttributes",schema:{type:"string",example:"names"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"}],responses:{200:{description:"Returns a single LaunchedWorkflow resource based on the id. <br /> **LaunchedWorkflow responses include attributes from the TaskResult related to the Workflow execution.**",content:{"application/json":{schema:{properties:{partitioned:{description:"Flag to indicate this TaskResult is partitioned. (From the TaskResult used to launch the Workflow).",type:"boolean",example:!0},completed:{type:"string",format:"date-time",description:"The completed DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"2022-04-14T10:45:26.098-05:00"},type:{description:"Type of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Workflow"},launched:{type:"string",format:"date-time",description:"The launched DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"2022-04-14T10:45:26.114-05:00"},pendingSignOffs:{description:"The number of pending signoffs of this TaskResult. (From the TaskResult used to launch the Workflow).",type:"integer",example:2},workflowName:{description:"Name of the Workflow to launch.",type:"string",example:"Update Account Group a2a"},identityRequestId:{description:"Id representing the identity request.",type:"string",example:"0000000002"},workflowCaseId:{description:"Id representing the workflow case (a running instance of a workflow).",type:"string",example:"7f000001806719888180675c8f8a016a"},workflowProcessId:{type:"string",description:"Id representing the workflow monitoring process log.",example:"7f000001806719888180675c8f8a0017b"},retries:{description:"The number of retries performed during the execution of provisioning activities.",type:"integer",example:1},approvalSet:{description:"XML representation of approvals.",type:"string",example:'example: <ApprovalSet><ApprovalItem application="Active Directory" approver="James.Smith" assignmentId="25701d226e9d4f98a8e42fcebb6113597" displayName="Role" displayValue="Benefits" id="7e314fb9b307481682b42f8e714b5687" name="assignedRoles" operation="Add" state="Pending" value="Benefits"><Attributes> <Map><entry key="comments"/><entry key="Access Request Item"/><entry key="flow" value="AccessRequest"/><entry key="id" value="7f00000180281df7818028bfb3ab5c87"/><entry key="interface" value="IIQ"/><entry key="operation" value="RoleAdd"/></Map></Attributes></ApprovalItem></ApprovalSet>'},workflowSummary:{description:"XML representation of the workflow summary.",type:"string",example:'example: "<WorkflowSummary step="end"><Interactions><ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/></Interactions></WorkflowSummary>"'},input:{description:"A list of input attributes of the Launched Workflow.",type:"object",properties:{key:{description:"The attribute key.",type:"string",example:"_caseName"},value:{description:"The attribute value.",type:"string",example:"WorkflowCaseRegistry"},type:{description:"The attribute type.",type:"string",example:"string"}}},output:{description:"A list of output attributes of the Launched Workflow.",type:"object",properties:{key:{description:"The attribute key.",type:"string",example:"workflowSummary"},value:{description:"The attribute value.",type:"string",example:'<WorkflowSummary step="end">\\n  <Interactions>\\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\\n  </Interactions>\\n</WorkflowSummary>\\n'},type:{description:"The attribute type.",type:"string",example:"application/xml"}}},targetClass:{description:"Target Class of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Permission"},name:{description:"Name of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"Update Account Group a2a"},messages:{description:"List of messages of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"array",items:{example:["Task executed successfully."]}},attributes:{description:"A list of attributes of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"array",items:{properties:{key:{description:"The attribute key.",type:"string",example:"Workflow Summary"},value:{description:"The attribute value.",type:"string",example:'<WorkflowSummary step="end">\\n  <Interactions>\\n    <ApprovalSummary completer="James Smith" endDate="1651001587664" owner="James.Smith" request="Approve modification of entitlement ADDirectDemodata group: CN=a2a,OU=HierarchicalGroups,OU=DemoData,DC=test,DC=sailpoint,DC=com" startDate="1651001561152" state="Finished" workItemId="7f000001806719888180675c9006016b" workItemType="Approval"/>\\n  </Interactions>\\n</WorkflowSummary>\\n'}}}},id:{description:"Unique identifier of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"7f00000180281df7818028c03252085c"},completionStatus:{type:"string",description:"Completion Status of the TaskResult. (From the TaskResult used to launch the Workflow).",enum:["Success","Warning","Error","Terminated","TempError"],example:"Success"},taskDefinition:{type:"string",description:"Name of the TaskDefinition of the TaskResult. (From the TaskResult used to launch the Workflow).",example:"Workflow Launcher"},terminated:{description:"Flag to indicate this TaskResult is terminated. (From the TaskResult used to launch the Workflow).",type:"boolean",example:!0},launcher:{description:"Launcher of the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"spadmin"},meta:{type:"object",properties:{created:{description:"DateTime when the TaskResult was created. (From the TaskResult used to launch the Workflow).",type:"string",format:"date-time",example:"2022-04-14T10:44:54.834-05:00"},location:{description:"URL to the TaskResult. (From the TaskResult used to launch the Workflow).",type:"string",example:"http://localhost:8080/identityiq/scim/v2/TaskResults/7f00000180281df7818028c03252085c"},lastModified:{description:"DateTime of TaskResult last modification. (From the TaskResult used to launch the Workflow).",type:"string",format:"date-time",example:"2022-04-05T15:52:30.119-05:00"},version:{description:"TaskResult version. (From the TaskResult used to launch the Workflow).",type:"string",example:'"W"1649951094834"'},resourceType:{description:"Resource type of the metadata subject. (From the TaskResult used to launch the Workflow).",type:"string",example:"TaskResult"}}}}}}}}},method:"get",path:"/LaunchedWorkflow/{launchedWorkflowId}",servers:[{url:"http://localhost:8080/identityiq/scim/v2",description:"IdentityIQ SCIM server basepath and path to API."}],security:[{basicAuth:[]}],securitySchemes:{basicAuth:{type:"http",scheme:"basic"}},info:{description:"IdentityIQ REST Endpoint Interface Documentation for SCIM\n\n# Authentication\n\n\x3c!-- ReDoc-Inject: <security-definitions> --\x3e",version:"8.3",title:"IdentityIQ SCIM REST API"},postman:{name:"Returns a LaunchedWorkflow resource based on id.",description:{content:"The LaunchedWorkflow resource with matching id is returned.<br /><br />\nAttributes to include in the response can be specified with the attributes query parameter. <br /><br /> \nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. <br /><br />\n\nThe schema related to LaunchedWorkflow is: \n- **urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow**\n",type:"text/plain"},url:{path:["LaunchedWorkflow",":launchedWorkflowId"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned.",type:"text/plain"},key:"attributes",value:""},{disabled:!1,description:{content:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**",type:"text/plain"},key:"excludedAttributes",value:""}],variable:[{disabled:!1,description:{content:"(Required) id of LaunchedWorkflow resource.",type:"text/plain"},type:"any",value:"",key:"launchedWorkflowId"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"iiq/api/identity-iq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns a LaunchedWorkflow resource based on id.' (get-launched-workflow-by-id)"},sidebar:"iiqOpenApiSidebar",previous:{title:"Endpoint used to launch a Workflow.",permalink:"/iiq/api/launch-workflow"},next:{title:"ObjectConfig",permalink:"/iiq/api/object-config"}},f={},k=[{value:"Returns a LaunchedWorkflow resource based on id.",id:"returns-a-launchedworkflow-resource-based-on-id",level:2}],y={toc:k};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"returns-a-launchedworkflow-resource-based-on-id"},"Returns a LaunchedWorkflow resource based on id."),(0,i.kt)("p",null,"The LaunchedWorkflow resource with matching id is returned.","<","br /",">","<","br /",">","\nAttributes to include in the response can be specified with the attributes query parameter. ","<","br /",">","<","br /",">","\nAttributes to exclude from the response can be specified with the excludedAttributes query parameter. ","<","br /",">","<","br /",">"),(0,i.kt)("p",null,"The schema related to LaunchedWorkflow is: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"urn:ietf:params:scim:schemas:sailpoint:1.0:LaunchedWorkflow"))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{name:"launchedWorkflowId",in:"path",schema:{type:"string",example:"c0a8019c802d1e5a81802eb2b57e020f"},description:"id of LaunchedWorkflow resource.",required:!0},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"attributes",schema:{type:"string",example:"expiration"},description:"A comma-separated list of attributes to return in the response. This query parameter supersedes excludedAttributes, so providing the same attribute(s) to both will result in the attribute(s) being returned."},mdxType:"ParamsItem"}),(0,i.kt)(n.Z,{className:"paramsItem",param:{in:"query",name:"excludedAttributes",schema:{type:"string",example:"names"},description:"A comma-separated list of attributes to exclude from the response. **Some attributes cannot be excluded.**"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Returns a single LaunchedWorkflow resource based on the id. ",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"p"},"LaunchedWorkflow responses include attributes from the TaskResult related to the Workflow execution."))),(0,i.kt)("div",null,(0,i.kt)(o.Z,{groupId:"mime-type",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{groupId:"schema-tabs",mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"partitioned",required:!1,schemaDescription:"Flag to indicate this TaskResult is partitioned. (From the TaskResult used to launch the Workflow).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"completed",required:!1,schemaDescription:"The completed DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"Type of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"launched",required:!1,schemaDescription:"The launched DateTime of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"pendingSignOffs",required:!1,schemaDescription:"The number of pending signoffs of this TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"workflowName",required:!1,schemaDescription:"Name of the Workflow to launch.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"identityRequestId",required:!1,schemaDescription:"Id representing the identity request.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"workflowCaseId",required:!1,schemaDescription:"Id representing the workflow case (a running instance of a workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"workflowProcessId",required:!1,schemaDescription:"Id representing the workflow monitoring process log.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"retries",required:!1,schemaDescription:"The number of retries performed during the execution of provisioning activities.",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"approvalSet",required:!1,schemaDescription:"XML representation of approvals.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"workflowSummary",required:!1,schemaDescription:"XML representation of the workflow summary.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"input"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of input attributes of the Launched Workflow.")),(0,i.kt)(u.Z,{collapsible:!1,name:"key",required:!1,schemaDescription:"The attribute key.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The attribute value.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"The attribute type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"output"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of output attributes of the Launched Workflow.")),(0,i.kt)(u.Z,{collapsible:!1,name:"key",required:!1,schemaDescription:"The attribute key.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The attribute value.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!1,schemaDescription:"The attribute type.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!1,name:"targetClass",required:!1,schemaDescription:"Target Class of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!1,schemaDescription:"Name of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"messages",required:!1,schemaDescription:"List of messages of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"undefined[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"attributes"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"A list of attributes of the TaskResult. (From the TaskResult used to launch the Workflow).")),(0,i.kt)(u.Z,{collapsible:!1,name:"key",required:!1,schemaDescription:"The attribute key.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"value",required:!1,schemaDescription:"The attribute value.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Unique identifier of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"completionStatus",required:!1,schemaDescription:"Completion Status of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:"**Possible values:** [`Success`, `Warning`, `Error`, `Terminated`, `TempError`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"taskDefinition",required:!1,schemaDescription:"Name of the TaskDefinition of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"terminated",required:!1,schemaDescription:"Flag to indicate this TaskResult is terminated. (From the TaskResult used to launch the Workflow).",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"launcher",required:!1,schemaDescription:"Launcher of the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"meta"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"created",required:!1,schemaDescription:"DateTime when the TaskResult was created. (From the TaskResult used to launch the Workflow).",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"location",required:!1,schemaDescription:"URL to the TaskResult. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastModified",required:!1,schemaDescription:"DateTime of TaskResult last modification. (From the TaskResult used to launch the Workflow).",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"version",required:!1,schemaDescription:"TaskResult version. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"resourceType",required:!1,schemaDescription:"Resource type of the metadata subject. (From the TaskResult used to launch the Workflow).",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "partitioned": true,\n  "completed": "2022-10-19",\n  "type": "string",\n  "launched": "2022-10-19",\n  "pendingSignOffs": 0,\n  "workflowName": "string",\n  "identityRequestId": "string",\n  "workflowCaseId": "string",\n  "workflowProcessId": "string",\n  "retries": 0,\n  "approvalSet": "string",\n  "workflowSummary": "string",\n  "input": {\n    "key": "string",\n    "value": "string",\n    "type": "string"\n  },\n  "output": {\n    "key": "string",\n    "value": "string",\n    "type": "string"\n  },\n  "targetClass": "string",\n  "name": "string",\n  "messages": [\n    null\n  ],\n  "attributes": [\n    {\n      "key": "string",\n      "value": "string"\n    }\n  ],\n  "id": "string",\n  "completionStatus": "Success",\n  "taskDefinition": "string",\n  "terminated": true,\n  "launcher": "string",\n  "meta": {\n    "created": "2022-10-19",\n    "location": "string",\n    "lastModified": "2022-10-19",\n    "version": "string",\n    "resourceType": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);