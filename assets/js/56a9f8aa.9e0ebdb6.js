"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[2220],{52646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453),a=n(11470),s=n(19365);const o={},l="Copying an item to a gzip file",c={id:"code-snippets/tar-gzip-capabilities/creating-writing/copy-item-gzip",title:"Copying an item to a gzip file",description:"This topic demonstrates how to create a GZip archive.",source:"@site/zip/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-gzip.md",sourceDirName:"code-snippets/tar-gzip-capabilities/creating-writing",slug:"/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-gzip",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-gzip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Copying items to a tar archive",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/creating-writing/copy-items-tar"},next:{title:"Performing multi-file GZip operations",permalink:"/xceed-docs-words/zip/code-snippets/tar-gzip-capabilities/creating-writing/performing-multifile-gzip-operation"}},u={},d=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"copying-an-item-to-a-gzip-file",children:"Copying an item to a gzip file"})}),"\n",(0,i.jsx)(t.p,{children:"This topic demonstrates how to create a GZip archive."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"FileSystem-based GZip is not currently available in Xceed's .NET Compact Framework products."})}),"\n",(0,i.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,i.jsx)(t.p,{children:"To create a GZipped file, the following steps must be performed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Retrieve a reference to the file that will be added to the GZip archive, using an ",(0,i.jsx)(t.code,{children:"AbstractFile"}),"-derived class such as the ",(0,i.jsx)(t.code,{children:"DiskFile"}),", ",(0,i.jsx)(t.code,{children:"MemoryFile"})," or ",(0,i.jsx)(t.code,{children:"IsolatedFile"})," classes. With Xceed\u2019s FileSystem-based products, a file is a file: it does not matter if it is located in a GZip archive, on disk or in memory."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Retrieve a reference to a new GZip archive using the ",(0,i.jsx)(t.code,{children:"GZipArchive"})," class."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Call the ",(0,i.jsx)(t.code,{children:"CopyTo"})," method to copy the file to the GZip file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["When performing many operations on an archive, you may wish to consider optimizing your code by using ",(0,i.jsx)(t.a,{href:"/zip/basic-concepts/optimizing-batch-updates-to-folder",children:"batch updates"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,i.jsx)(t.p,{children:"This example demonstrates how to copy a file to a GZip archive."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.GZip;\r\n  using Xceed.FileSystem;\r\n\r\n  DiskFile sourceFile = new DiskFile(@"C:\\test.txt");\r\n\r\n  sourceFile.CopyTo(new GZipArchive(new DiskFile(@"C:\\test.gz")), true);\n'})})}),(0,i.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb.NET",children:'Imports Xceed.GZip\r\nImports Xceed.FileSystem\r\n\r\nDim sourceFile as New DiskFile(@"C:\\test.txt")\r\n\r\nsourceFile.CopyTo(New GZipArchive(New DiskFile(@"C:\\test.gz")), True)\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,i.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a GZip file are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Do you want to copy the contents of a folder rather than a single file? Although not a typical use of GZip, the format and Xceed's implementation allows for this. See Multi-file operations for details."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,i.jsx)(t.code,{children:"MoveTo"})," method."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),r=n(34164),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);