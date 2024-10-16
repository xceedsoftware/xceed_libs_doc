"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[27],{43857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453),s=n(11470),a=n(19365);const o={title:"Unzipping items from zip file in an application's resources"},l="Extracting items from a generic stream",c={id:"code-snippets/unzipping/unzipping-items-from-zip-app-res",title:"Unzipping items from zip file in an application's resources",description:"The following example demonstrates how to extract the contents of a zip file which is located in the resources of an application using the StreamFile class. The StreamFile class implements access to any type of stream as though it were a file.",source:"@site/zip/code-snippets/unzipping/unzipping-items-from-zip-app-res.md",sourceDirName:"code-snippets/unzipping",slug:"/code-snippets/unzipping/unzipping-items-from-zip-app-res",permalink:"/xceed-libs-doc/zip/code-snippets/unzipping/unzipping-items-from-zip-app-res",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Unzipping items from zip file in an application's resources"},sidebar:"sidebarzip",previous:{title:"Reading and writing nested Zip archives",permalink:"/xceed-libs-doc/zip/code-snippets/unzipping/reading-writing-nested-zip"},next:{title:"Unzipping to memory",permalink:"/xceed-libs-doc/zip/code-snippets/unzipping/unzipping-to-memory"}},u={},d=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"extracting-items-from-a-generic-stream",children:"Extracting items from a generic stream"})}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates how to extract the contents of a zip file which is located in the resources of an application using the StreamFile class. The StreamFile class implements access to any type of stream as though it were a file."}),"\n",(0,i.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,i.jsx)(t.p,{children:"To extract the contents of a zip file located in an application's resources, the following steps must be performed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create a stream that accesses a zip file contained within the resources of an application This is done using the .NET Framework's GetManifestResourceStream method."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Initialize a new instance of the StreamFile class around the stream that accesses the zip file in the resources of the application specifying the name by which to access the zip file."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Retrieve a reference to the zip file in the resources using the ",(0,i.jsx)(t.code,{children:"ZipArchive"})," class."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Retrieve a reference to a folder where the files will be extracted to using either the ",(0,i.jsx)(t.code,{children:"DiskFolder"}),", ",(0,i.jsx)(t.code,{children:"ZippedFolder"}),", ",(0,i.jsx)(t.code,{children:"ZipArchive"}),", ",(0,i.jsx)(t.code,{children:"MemoryFolder"})," or ",(0,i.jsx)(t.code,{children:"IsolatedFolder"})," classes.   With Xceed Zip for .NET, a folder is a folder; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Copy the files from the zip file to a destination folder using the ",(0,i.jsx)(t.code,{children:"CopyFilesTo"})," method.  With Xceed Zip for .NET, a folder is a folder; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,i.jsx)(t.p,{children:"The following example demonstrates how to extract files from a zip file located in an application's resources."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n  using Xceed.Zip;\r\n\r\n  Stream resources = this.GetType().Assembly.GetManifestResourceStream( "Resources.zip" );\r\n  StreamFile file = new StreamFile( resources, "Resources.zip" );\r\n  ZipArchive zip = new ZipArchive( file );\r\n  DiskFolder destinationFolder = new DiskFolder( @"d:\\Destination" ); \r\n\r\n  zip.CopyFilesTo( destinationFolder, false, true );\n'})})}),(0,i.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vb.NET",children:'Imports Xceed.FileSystem\r\nImports Xceed.Zip\r\n\r\nDim resources As Stream = Me.GetType().Assembly.GetManifestResourceStream( "Resources.zip" )\r\nDim file As New StreamFile( resources, "Resources.zip" )\r\nDim zip As New ZipArchive( file )\r\nDim destinationFolder As New DiskFolder( "d:\\Destination" )            \r\n\r\n\' Copy files from the zip file contained within the resources to a local folder.\r\nzip.CopyFilesTo( destinationFolder, false, true )\n'})})})]}),"\n",(0,i.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,i.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be unzipped? Use ",(0,i.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,i.jsx)(t.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,i.jsx)(t.code,{children:"MoveTo"})," and ",(0,i.jsx)(t.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),r=n(34164),s=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(y,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);