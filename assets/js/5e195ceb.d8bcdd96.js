"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[7954],{12435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(74848),i=n(28453),s=n(11470),a=n(19365);const o={},l="Listing the contents of a tar archive",c={id:"basic-concepts/tar-gzip-capabilities/tar/listing-content-tarfile",title:"Listing the contents of a tar archive",description:"This topic demonstrates how to get a listing of all of the files contained in a GZipped Tar archive, that is, a Tar archive that has been compressed using GZip.",source:"@site/zip/basic-concepts/tar-gzip-capabilities/tar/listing-content-tarfile.md",sourceDirName:"basic-concepts/tar-gzip-capabilities/tar",slug:"/basic-concepts/tar-gzip-capabilities/tar/listing-content-tarfile",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/listing-content-tarfile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Xceed Tar",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/overview"},next:{title:"Removing items from a tar archive",permalink:"/xceed-libs-doc/zip/basic-concepts/tar-gzip-capabilities/tar/removing-item-tarfile"}},d={},u=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"listing-the-contents-of-a-tar-archive",children:"Listing the contents of a tar archive"})}),"\n",(0,r.jsx)(t.p,{children:"This topic demonstrates how to get a listing of all of the files contained in a GZipped Tar archive, that is, a Tar archive that has been compressed using GZip."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Tar and FileSystem-based GZip are not currently available in Xceed's .NET Compact Framework products."})}),"\n",(0,r.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,r.jsx)(t.p,{children:"To list the contents of a gzipped Tar archive, the following steps must be performed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Retrieve a reference to an ",(0,r.jsx)(t.code,{children:"AbstractFile"}),"-derived class, such as the ",(0,r.jsx)(t.code,{children:"DiskFile"}),", ",(0,r.jsx)(t.code,{children:"MemoryFile"})," or ",(0,r.jsx)(t.code,{children:"IsolatedFile"})," class, using the name of the ",(0,r.jsx)(t.code,{children:"GZipped Tar"})," archive."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Retrieve a reference to a GZip archive using the ",(0,r.jsx)(t.code,{children:"GZippedFile"})," class, passing the ",(0,r.jsx)(t.code,{children:"AbstractFile"}),"-based object retrieved in the previous step to its constructor. Note: To create a non-GZipped Tar archive, omit this step."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Retrieve a reference to a Tar archive using the ",(0,r.jsx)(t.code,{children:"TarArchive"})," class, passing the GZippedFile retrieved in the previous step to its constructor (or the DiskFile object from the first step for a non-GZipped Tar archive)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"You can now loop through the files and extract the desired information."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When performing many operations on an archive, you may wish to consider optimizing your code by using ",(0,r.jsx)(t.a,{href:"/zip/basic-concepts/optimizing-batch-updates-to-folder",children:"batch updates"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"Using a non-GZipped Tar archive may be preferable in some situations: for example, when read/write speed is essential but storage space is unlimited, when you need to access individual files in the Tar archive without uncompressing the entire archive, or when the files inside the Tar archive are already compressed."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Setting the LicenseKey property with Tar also unlocks the GZip capabilities."})}),"\n",(0,r.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to list the contents of a GZipped Tar archive."}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Tar;\r\n  using Xceed.GZip;\r\n  using Xceed.FileSystem; \r\n\r\n  DiskFile diskFile = new DiskFile(@"E:\\test.tar.gz");\r\n  GZippedFile gzip = new GZippedFile(diskFile);\r\n  TarArchive tar = new TarArchive(gzip);\r\n\r\n  foreach (AbstractFile file in tar.GetFiles(true))\r\n  {\r\n    Console.WriteLine("File {0} is {1} bytes", file.FullName, file.Size);\r\n  }\n'})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Tar\r\n  Imports Xceed.GZip\r\n  Imports Xceed.FileSystem\r\n\r\n  Dim diskFile As New DiskFile("c:\\test.tar.gz")\r\n  Dim gzip As New GZippedFile(diskFile)\r\n  Dim tar As New TarArchive(gzip)\r\n\r\n  Dim f As AbstractFile \r\n\r\n  For Each f In tar.GetFiles( True )\r\n    ListBox1.Items.Add( f.FullName )\r\n  Next\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsx)(t.p,{children:"The main questions you should ask yourself when listing the contents of a Tar file are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be listed? Use ",(0,r.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you also want to retrieve a listing of the ",(0,r.jsx)(t.code,{children:"Tarred"})," folders? Use the ",(0,r.jsx)(t.code,{children:"GetFolders"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to retrieve a reference to a single ",(0,r.jsx)(t.code,{children:"Tarred"})," file or folder? Use the ",(0,r.jsx)(t.code,{children:"GetFile"})," or ",(0,r.jsx)(t.code,{children:"GetFolder"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Do you want to list the contents of a specific folder within the Tar archive? Create an instance of a ",(0,r.jsx)(t.code,{children:"TarredFolder"})," object rather than a ",(0,r.jsx)(t.code,{children:"TarArchive"})," object."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),i=n(34164),s=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:n,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),v=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function T(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);