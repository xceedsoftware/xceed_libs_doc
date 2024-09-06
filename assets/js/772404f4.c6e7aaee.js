"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7385],{28923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453),r=n(11470),a=n(19365);const o={title:"Listing the contents of a zip file (QuickZip)"},l="Listing the contents of a zip file",c={id:"code-snippets/listing/listing-content-quickzip",title:"Listing the contents of a zip file (QuickZip)",description:"This topic demonstrates how to list the contents of a zip file using the static GetZipContents method of the QuickZip class.",source:"@site/zip/code-snippets/listing/listing-content-quickzip.md",sourceDirName:"code-snippets/listing",slug:"/code-snippets/listing/listing-content-quickzip",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-quickzip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Listing the contents of a zip file (QuickZip)"},sidebar:"sidebarzip",previous:{title:"Listing the contents of a zip file",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-zip"},next:{title:"Listing the contents of a Zip archive using ZipReader",permalink:"/xceed-docs-words/zip/code-snippets/listing/listing-content-zipreader"}},u={},d=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"listing-the-contents-of-a-zip-file",children:"Listing the contents of a zip file"})}),"\n",(0,i.jsxs)(t.p,{children:["This topic demonstrates how to list the contents of a zip file using the static ",(0,i.jsx)(t.code,{children:"GetZipContents"})," method of the ",(0,i.jsx)(t.code,{children:"QuickZip"})," class."]}),"\n",(0,i.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,i.jsx)(t.p,{children:"To list the contents of a zip file, the following steps must be performed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Declare an array of ",(0,i.jsx)(t.code,{children:"QuickZipItem"})," objects that will contain the result of the call to the ",(0,i.jsx)(t.code,{children:"GetZipContents"})," method."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Iterate through the array of ",(0,i.jsx)(t.code,{children:"QuickZipItem"})," objects to retrieve information on each ",(0,i.jsx)(t.code,{children:"QuickZipItem"})," object it contains."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to list the contents of a zip file."}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Zip\r\n\r\n  QuickZipItem[] items = QuickZip.GetZipContents( @"c:\\test.zip", "*" );\r\n\r\n  foreach( QuickZipItem item in items)\r\n  {\r\n    Console.WriteLine( item.Name );\r\n  } \n'})})}),(0,i.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Zip\r\n\r\n  Dim items As QuickZipItem()\r\n  Dim item As QuickZipItem\r\n\r\n  items = QuickZip.GetZipContents( "c:\\test.zip", "*" )\r\n  For Each item In items\r\n    Console.WriteLine( item.Name )\r\n  Next\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),s=n(34164),r=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);