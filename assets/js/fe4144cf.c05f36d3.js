"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6614],{84561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),a=n(28453),i=n(11470),s=n(19365);const o={},c="Listing the contents of a Tar archive with QuickTar",l={id:"code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar",title:"Listing the contents of a Tar archive with QuickTar",description:"This topic demonstrates how to list the contents of a Tar archive using the static GetTarContents method of the QuickTar class.",source:"@site/zip/code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar.md",sourceDirName:"code-snippets/tar-gzip-capabilities/reading",slug:"/code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Extracting items from a Tar archive with QuickTar",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/reading/extract-tar-quicktar"},next:{title:"Uncompressing a file with QuickGZip",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip"}},u={},d=[{value:"GetTarContents method",id:"gettarcontents-method",level:2},{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"listing-the-contents-of-a-tar-archive-with-quicktar",children:"Listing the contents of a Tar archive with QuickTar"})}),"\n",(0,r.jsxs)(t.p,{children:["This topic demonstrates how to list the contents of a Tar archive using the static ",(0,r.jsx)(t.code,{children:"GetTarContents"})," method of the ",(0,r.jsx)(t.code,{children:"QuickTar"})," class."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Tar is not currently available in Xceed's Compact Framework products."})}),"\n",(0,r.jsx)(t.h2,{id:"gettarcontents-method",children:"GetTarContents method"}),"\n",(0,r.jsxs)(t.p,{children:["There is only one version of the GetTarContents method. The method returns a list of ",(0,r.jsx)(t.code,{children:"QuickTarItem"})," objects, which you can process as you wish."]}),"\n",(0,r.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,r.jsx)(t.p,{children:"To list the contents of a FTP Tar archive, the following steps must be performed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Declare an array of ",(0,r.jsx)(t.code,{children:"QuickTarItem"})," objects that will contain the result of the call to the ",(0,r.jsx)(t.code,{children:"GetTarContents"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Iterate through the array of ",(0,r.jsx)(t.code,{children:"QuickTarItem"})," objects to retrieve information on each ",(0,r.jsx)(t.code,{children:"QuickTarItem"})," object it contains."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,r.jsx)(t.p,{children:"In the following example, we specify the Tar archive and the files to remove, and we indicate that the Remove operation should be performed recursively."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  QuickTarItem[] items = QuickTar.GetTarContents(@"d:\\test.tar", true, "*");\r\n\r\n  foreach (QuickTarItem item in items)\r\n  { \r\n    Console.WriteLine(item.FullName);\r\n  }\n'})})}),(0,r.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim items As QuickTarItem() = QuickTar.GetTarContents("d:\\test.tar", True, "*")\r\n\r\n  For Each item As QuickTarItem In items \r\n    Console.WriteLine(item.FullName)\r\n  Next item\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsx)(t.p,{children:"The main questions you should ask yourself when adding items to a Tar archive are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Do you want to do more complex Tar operations? Use the ",(0,r.jsx)(t.code,{children:"FileSystem"}),"-based classes defined within the ",(0,r.jsx)(t.code,{children:"Xceed.Tar"})," namespace."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),i=n(23104),s=n(56347),o=n(205),c=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(l(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function T(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(T,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);