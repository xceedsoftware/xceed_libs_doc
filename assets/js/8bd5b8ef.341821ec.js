"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[3735],{66079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453),a=n(11470),s=n(19365);const l={},o="Removing Items from a Zip File",c={id:"basic-concepts/removing-items-from-zip-file",title:"Removing Items from a Zip File",description:"Xceed .NET Libraries Documentation",source:"@site/zip/basic-concepts/removing-items-from-zip-file.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/removing-items-from-zip-file",permalink:"/xceed-libs-doc/zip/basic-concepts/removing-items-from-zip-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Listing the Contents of a Zip File",permalink:"/xceed-libs-doc/zip/basic-concepts/listing-content-zip-file"},next:{title:"Optimizing Batch Updates to a Folder",permalink:"/xceed-libs-doc/zip/basic-concepts/optimizing-batch-updates-to-folder"}},u={},d=[{value:"Xceed .NET Libraries Documentation",id:"xceed-net-libraries-documentation",level:2},{value:"Removing Items from a Zip File",id:"removing-items-from-a-zip-file-1",level:3},{value:"Basic Steps",id:"basic-steps",level:3},{value:"Demonstration",id:"demonstration",level:3}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"removing-items-from-a-zip-file",children:"Removing Items from a Zip File"})}),"\n",(0,r.jsx)(t.h2,{id:"xceed-net-libraries-documentation",children:"Xceed .NET Libraries Documentation"}),"\n",(0,r.jsx)(t.h3,{id:"removing-items-from-a-zip-file-1",children:"Removing Items from a Zip File"}),"\n",(0,r.jsx)(t.p,{children:"This topic demonstrates how to remove items from a folder by retrieving a reference to a file within a zip file."}),"\n",(0,r.jsx)(t.h3,{id:"basic-steps",children:"Basic Steps"}),"\n",(0,r.jsx)(t.p,{children:"To remove an item from a zip file, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Retrieve a reference to a file contained within the zip file using the ",(0,r.jsx)(t.code,{children:"ZippedFile"})," class."]}),"\n",(0,r.jsxs)(t.li,{children:["Verify the ",(0,r.jsx)(t.code,{children:"Exists"})," property to make sure that the file actually exists."]}),"\n",(0,r.jsxs)(t.li,{children:["Call the ",(0,r.jsx)(t.code,{children:"Delete"})," method to delete the file."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"demonstration",children:"Demonstration"}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to remove a file from within a zip file."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.FileSystem;\r\n\r\n  ZippedFile f = new ZippedFile( new DiskFile( @"c:\\test.zip" ), "file.txt" ); \r\n\r\n  if( f.Exists )\r\n  {\r\n    f.Delete();\r\n  }\n'})})}),(0,r.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Zip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim f As New ZippedFile( New DiskFile( "c:\\test.zip" ), "file.txt" ) \r\n\r\n  If f.Exists Then\r\n    f.Delete()\r\n  End If\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),i=n(34164),a=n(23104),s=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:i}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=c??h;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=h(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);