"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1472],{71537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(74848),o=r(28453),s=r(11470),i=r(19365);const l={title:"Copying items to a folder"},a="Copying items to a folder",c={id:"code-snippets/other/copy-items-folder",title:"Copying items to a folder",description:"This topic demonstrates how to copy items to a folder. With Xceed's FileSystem-based products, a folder is a folder: it does not matter if it is located within a zip file, on disk or in memory.",source:"@site/zip/code-snippets/other/copy-items-folder.md",sourceDirName:"code-snippets/other",slug:"/code-snippets/other/copy-items-folder",permalink:"/xceed-libs-doc/zip/code-snippets/other/copy-items-folder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Copying items to a folder"},sidebar:"sidebarzip",previous:{title:"Converting zip and self-extracting zip files",permalink:"/xceed-libs-doc/zip/code-snippets/other/converting-zip-self-extract"},next:{title:"Encrypting and decrypting",permalink:"/xceed-libs-doc/zip/code-snippets/other/encrypt-decrypt"}},d={},u=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"copying-items-to-a-folder",children:"Copying items to a folder"})}),"\n",(0,n.jsx)(t.p,{children:"This topic demonstrates how to copy items to a folder. With Xceed's FileSystem-based products, a folder is a folder: it does not matter if it is located within a zip file, on disk or in memory."}),"\n",(0,n.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,n.jsx)(t.p,{children:"To copy items to a folder, the following steps must be performed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a folder using an AbstractFolder-derived class appropriate for the folder you need to work with, such as ",(0,n.jsx)(t.code,{children:"DiskFolder"}),", ",(0,n.jsx)(t.code,{children:"ZippedFolder"}),", ",(0,n.jsx)(t.code,{children:"ZipArchive"}),", ",(0,n.jsx)(t.code,{children:"MemoryFolder"}),", ",(0,n.jsx)(t.code,{children:"IsolatedFolder"}),", ",(0,n.jsx)(t.code,{children:"FtpFolder"}),", etc."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Call the ",(0,n.jsx)(t.code,{children:"CopyFilesTo"})," method to copy the files from the source folder (including subfolders that contain files) to the destination folder."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(t.p,{children:"This example demonstrates how to copy files from one disk folder to another."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n\r\n  DiskFolder diskFolder = new DiskFolder( @"c:\\temp" );\r\n  diskFolder.CopyFilesTo( new DiskFolder( @"c:\\destination" ), true, true );\n'})})}),(0,n.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'Imports Xceed.FileSystem \r\n\r\nDim diskFolder As New DiskFolder( "c:\\temp" )\r\ndiskFolder.CopyFilesTo( New DiskFolder( "c:\\destination" ), True, True )\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,n.jsx)(t.p,{children:"The main questions you should ask yourself when copying the contents of a folder are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be copied? Use ",(0,n.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you also want to copy the folder? Use the ",(0,n.jsx)(t.code,{children:"CopyTo"})," method instead of the ",(0,n.jsx)(t.code,{children:"CopyFilesTo"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,n.jsx)(t.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,n.jsx)(t.code,{children:"MoveTo"})," and ",(0,n.jsx)(t.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),o=r(34164),s=r(23104),i=r(56347),l=r(205),a=r(57485),c=r(31682),d=r(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const o=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,s=h(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:r,groupId:o}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,d.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),y=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{y&&a(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=a.indexOf(t),o=l[r].value;o!==n&&(c(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",y.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);