"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99761],{67056:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905)),s=i(52991),r=i(53438);const c={id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},l=void 0,o={unversionedId:"api/v3/requestable-objects",id:"api/v3/requestable-objects",title:"Requestable Objects",description:"Requestable Objects",source:"@site/products/idn/api/v3/requestable-objects.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/requestable-objects",permalink:"/idn/api/v3/requestable-objects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update the Public Identities Configuration",permalink:"/idn/api/v3/update-public-identity-config"},next:{title:"Requestable Objects List",permalink:"/idn/api/v3/list-requestable-objects"}},u={},d=[],m={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement requestable object functionality.\nWith this functionality in place, administrators can determine which access items can be requested with the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/access-requests"},"Access Request APIs"),", along with their statuses.\nThis can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available."),(0,n.kt)(s.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},52991:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(67294),n=i(86010),s=i(53438),r=i(39960),c=i(13919),l=i(95999);const o="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:i}=e;return a.createElement(r.Z,{href:t,className:(0,n.Z)("card padding--lg",o)},i)}function p(e){let{href:t,icon:i,title:s,description:r}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",u),title:s},i," ",s),r&&a.createElement("p",{className:(0,n.Z)("text--truncate",d),title:r},r))}function b(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?a.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:i}=e;const n=(0,c.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(null!=(t=i.docId)?t:void 0);return a.createElement(p,{href:i.href,icon:n,title:i.label,description:null==r?void 0:r.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(h,{item:t});case"category":return a.createElement(b,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:i}=e;return a.createElement("section",{className:(0,n.Z)("row",i)},function(e){return e.filter((e=>"category"!==e.type||!!(0,s.Wl)(e)))}(t).map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}}}]);