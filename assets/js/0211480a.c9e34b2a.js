"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37098],{41340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var c=r(87462),i=(r(67294),r(3905)),a=r(52991),n=r(53438);const l={id:"scheduled-search",title:"Scheduled Search",description:"Scheduled Search",custom_edit_url:null},s=void 0,d={unversionedId:"api/v3/scheduled-search",id:"api/v3/scheduled-search",title:"Scheduled Search",description:"Scheduled Search",source:"@site/products/idn/api/v3/scheduled-search.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/scheduled-search",permalink:"/idn/api/v3/scheduled-search",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"scheduled-search",title:"Scheduled Search",description:"Scheduled Search",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Execute a saved search by ID",permalink:"/idn/api/v3/saved-search-execute"},next:{title:"Create a new scheduled search",permalink:"/idn/api/v3/scheduled-search-create"}},o={},u=[],h={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,c.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>g});var c=r(67294),i=r(86010),a=r(53438),n=r(39960),l=r(13919),s=r(95999);const d="cardContainer_fWXF",o="cardTitle_rnsV",u="cardDescription_PWke";function h(e){let{href:t,children:r}=e;return c.createElement(n.Z,{href:t,className:(0,i.Z)("card padding--lg",d)},r)}function m(e){let{href:t,icon:r,title:a,description:n}=e;return c.createElement(h,{href:t},c.createElement("h2",{className:(0,i.Z)("text--truncate",o),title:a},r," ",a),n&&c.createElement("p",{className:(0,i.Z)("text--truncate",u),title:n},n))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?c.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){var t;let{item:r}=e;const i=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(null!=(t=r.docId)?t:void 0);return c.createElement(m,{href:r.href,icon:i,title:r.label,description:null==n?void 0:n.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(f,{item:t});case"category":return c.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:r}=e;return c.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(v,{item:e})))))}}}]);