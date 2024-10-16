"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[2777],{43313:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(74848),n=t(28453),i=t(11470),s=t(19365);const o={},l="Extracting items from a tar archive",c={id:"basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive",title:"Extracting items from a tar archive",description:"This topic demonstrates how to extract files and folders from a GZipped Tar archive to a destination folder. With Xceed\u2019s FileSystem-based products, a folder is a folder: it does not matter if it is located within a Tar archive, on disk or in memory.",source:"@site/zip/basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive.md",sourceDirName:"basic-concepts/tar-gzip-capabilities/tar",slug:"/basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/extract-item-tar-archive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Copying items to a tar archive",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/copy-item-tar-archive"},next:{title:"Supported tar formats",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/supported-tar-format"}},d={},u=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"extracting-items-from-a-tar-archive",children:"Extracting items from a tar archive"})}),"\n",(0,a.jsx)(r.p,{children:"This topic demonstrates how to extract files and folders from a GZipped Tar archive to a destination folder. With Xceed\u2019s FileSystem-based products, a folder is a folder: it does not matter if it is located within a Tar archive, on disk or in memory."}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"Tar and FileSystem-based GZip are not currently available in Xceed's .NET Compact Framework products."})}),"\n",(0,a.jsx)(r.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,a.jsx)(r.p,{children:"To extract items from a Tar archive, the following steps must be performed:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Retrieve a reference to an ",(0,a.jsx)(r.code,{children:"AbstractFile"}),"-derived class representing the actual Tar archive file; in this example, ",(0,a.jsx)(r.code,{children:"DiskFile"})," will be used. If the Tar archive is GZipped, retrieve a reference to a ",(0,a.jsx)(r.code,{children:"GZippedFile"})," class and pass the ",(0,a.jsx)(r.code,{children:"DiskFile"})," object you have just retrieved to its constructor."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Retrieve a reference to a new or existing Tar archive using the ",(0,a.jsx)(r.code,{children:"TarArchive"})," class, using either the GZippedFile object you have just retrieved for a GZipped Tar archive or a DiskFile object for a non-GZipped Tar archive."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Retrieve a reference to a folder where the files will be extracted to using an ",(0,a.jsx)(r.code,{children:"AbstractFolder"}),"-derived class such as ",(0,a.jsx)(r.code,{children:"DiskFolder"}),", ",(0,a.jsx)(r.code,{children:"ZipArchive"}),", ",(0,a.jsx)(r.code,{children:"MemoryFolder"})," or ",(0,a.jsx)(r.code,{children:"IsolatedFolder"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Call the ",(0,a.jsx)(r.code,{children:"CopyFilesTo"})," method to copy the entire contents of the Tar archive to the destination folder."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["When performing many operations on an archive, you may wish to consider optimizing your code by using ",(0,a.jsx)(r.a,{href:"/zip/basic-concepts/optimizing-batch-updates-to-folder",children:"batch updates"}),"."]})}),"\n",(0,a.jsx)(r.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,a.jsx)(r.p,{children:"This example demonstrates how to extract items from a Tar archive to a folder located on disk."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-csharp",children:'  using Xceed.Tar;\r\n  using Xceed.GZip;\r\n  using Xceed.FileSystem;\r\n\r\n  TarArchive tar = new TarArchive( new GZippedFile( new DiskFile( "c:\\\\test.tar.gz" ),\r\n                                                    "test.tar" ) );\r\n\r\n  DiskFolder folder = new DiskFolder( "c:\\\\temp" );\r\n\r\n  tar.CopyFilesTo( folder, true, true ); \n'})})}),(0,a.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-vb.NET",children:'  Imports Xceed.Tar\r\n  Imports Xceed.GZip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim tar As New TarArchive( New GZippedFile( NewDiskFile( "c:\\test.tar.gz" ), _\r\n                                              "test.tar" ) )\r\n\r\n  Dim folder As New DiskFolder( "c:\\temp" )\r\n\r\n  tar.CopyFilesTo( folder, True, True )\n'})})})]}),"\n",(0,a.jsx)(r.p,{children:"This example demonstrates how to extract items from a non-GZipped Tar archive to a folder located on disk."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-csharp",children:'  using Xceed.Tar;\r\n  using Xceed.FileSystem;\r\n\r\n  TarArchive tar = new TarArchive( new DiskFile( "c:\\\\test.tar" ) );\r\n  DiskFolder folder = new DiskFolder( "c:\\\\temp" );\r\n\r\n  tar.CopyFilesTo( folder, true, true );\n'})})}),(0,a.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-vb.NET",children:'  Imports Xceed.Tar\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim tar As New TarArchive( New DiskFile( "c:\\test.tar" ) )\r\n  Dim folder As New DiskFolder( "c:\\temp" )\r\n\r\n  tar.CopyFilesTo( folder, True, True )\n'})})})]}),"\n",(0,a.jsx)(r.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,a.jsx)(r.p,{children:"The main questions you should ask yourself when extracting items from a Tar archive are:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be extracted? Use ",(0,a.jsx)(r.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,a.jsx)(r.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Do you want to move items rather than copy them? Use the ",(0,a.jsx)(r.code,{children:"MoveTo"})," and ",(0,a.jsx)(r.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>T});var a=t(96540),n=t(34164),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(n.location.search);r.set(i,e),n.replace({...n.location,search:r.toString()})}),[i,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:i}))),[c,u]=m({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,i]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),v=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:r,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),n=o[t].value;n!==a&&(c(r),s(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,n.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i})))})}function y(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...r,...e}),(0,x.jsx)(g,{...r,...e})]})}function T(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var a=t(96540);const n={},i=a.createContext(n);function s(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);