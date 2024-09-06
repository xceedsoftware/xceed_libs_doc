"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4070],{99136:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=i(74848),r=i(28453),s=i(11470),o=i(19365);const a={},l="Creating self-extracting zip files",c={id:"code-snippets/zipping/create-self-extarcting-zip",title:"Creating self-extracting zip files",description:"A self-extracting zip file is a zip file that has the necessary information in its prefix (header) to unzip the files it contains without the need for third party applications such as WinZip \u2122 or even Xceed Zip for .NET.",source:"@site/zip/code-snippets/zipping/create-self-extarcting-zip.md",sourceDirName:"code-snippets/zipping",slug:"/code-snippets/zipping/create-self-extarcting-zip",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-self-extarcting-zip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Creating a zip file in memory",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-zip-in-memory"},next:{title:"Creating spanned zip files",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-spanned-zip"}},d={},p=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-self-extracting-zip-files",children:"Creating self-extracting zip files"})}),"\n",(0,t.jsx)(n.p,{children:"A self-extracting zip file is a zip file that has the necessary information in its prefix (header) to unzip the files it contains without the need for third party applications such as WinZip \u2122 or even Xceed Zip for .NET."}),"\n",(0,t.jsx)(n.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,t.jsx)(n.p,{children:"To create a self-extracting zip file, the following steps must be taken."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Retrieve a reference to a new or existing zip file using the ZipArchive class."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an instance of the ",(0,t.jsx)(n.code,{children:"XceedSfxPrefix"})," class. This object contains all the necessary information to create self-extracting zip files and will be used as the source binary."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the self-extractor binary by setting various properties of the ",(0,t.jsx)(n.code,{children:"XceedSfxPrefix"})," object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Assign the prefix to the ",(0,t.jsx)(n.code,{children:"SfxPrefix"})," property of the ZipArchive object. Since setting the Prefix property updates the self-extracting zip file and we will be doing other updates to the self-extracting zip file, we will do a batch update."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Retrieve a reference to a folder whose files will be added to the zip file using either the ",(0,t.jsx)(n.code,{children:"DiskFolder"}),", ",(0,t.jsx)(n.code,{children:"ZippedFolder"}),", ",(0,t.jsx)(n.code,{children:"ZipArchive"}),", ",(0,t.jsx)(n.code,{children:"MemoryFolder"})," or ",(0,t.jsx)(n.code,{children:"IsolatedFolder"})," classes. With Xceed Zip for .NET, a folder is a folder; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the folder and its content into the self-extracting zip file using the ",(0,t.jsx)(n.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,t.jsx)(n.p,{children:"The following example demonstrates how to create a self-extracting zip file:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.Zip.Sfx;\r\n  using Xceed.FileSystem;\r\n  \r\n  ZipArchive zip = new ZipArchive( new DiskFile( @"C:\\Test\\Fonts.exe" ) );\r\n  XceedSfxPrefix sfx = new XceedSfxPrefix( new DiskFile( @"C:\\Program Files\\Xceed Components\\Bin\\Sfx\\xcdsfx32.bin" ) );\r\n  \r\n  sfx.DialogStrings[ DialogStrings.Title ] = "Welcome to Xceed Zip for .NET!";\r\n  sfx.DefaultDestinationFolder = @"C:\\";\r\n  sfx.ExistingFileBehavior = ExistingFileBehavior.OverwriteOlderOnly;      \r\n  \r\n  using( AutoBatchUpdate update = new AutoBatchUpdate( zip ) )\r\n  {             \r\n    zip.SfxPrefix = sfx;\r\n    DiskFolder folder = new DiskFolder( @"C:\\Windows\\Fonts" );\r\n    ZippedFolder destinationFolder = ( ZippedFolder )zip.GetFolder( "Windows" );\r\n        \r\n    if( !destinationFolder.Exists )\r\n        destinationFolder.Create();\r\n  \r\n    folder.CopyTo( destinationFolder, true );\r\n  }\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:'    Imports Xceed.Zip\r\n    Imports Xceed.Zip.Sfx\r\n    Imports Xceed.FileSystem\r\n\r\n    Dim zip As New ZipArchive(New DiskFile("C:\\Test\\Fonts.exe"))\r\n    Dim sfx As New XceedSfxPrefix(New DiskFile("C:\\Program Files\\Xceed Components\\Bin\\Sfx\\xcdsfx32.bin"))\r\n\r\n    sfx.DialogStrings(DialogStrings.Title) = "Welcome to Xceed Zip for .NET!"\r\n    sfx.DefaultDestinationFolder = "C:\\"\r\n    sfx.ExistingFileBehavior = ExistingFileBehavior.OverwriteOlderOnly\r\n\r\n    zip.BeginUpdate()\r\n\r\n    zip.SfxPrefix = sfx\r\n    Dim folder As New DiskFolder("C:\\Windows\\Fonts")\r\n    Dim destinationFolder As ZippedFolder = CType(zip.GetFolder("Windows"), ZippedFolder)\r\n\r\n    If Not destinationFolder.Exists Then\r\n      destinationFolder.Create()\r\n    End If\r\n\r\n    folder.CopyTo(destinationFolder, True)\r\n    zip.EndUpdate()\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,t.jsx)(n.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the zip file? Use ",(0,t.jsx)(n.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,t.jsx)(n.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to add items into a specific folder within the self-extracting zip file? Create an instance of a ",(0,t.jsx)(n.code,{children:"ZippedFolder"})," object rather than a ",(0,t.jsx)(n.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you only want to do basic zip file operations? Use the ",(0,t.jsx)(n.a,{href:"/zip/basic-concepts/quick-zip",children:"QuickZip"})," class."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to change the location of the temporary folder. Set the ZipArchive's ",(0,t.jsx)(n.code,{children:"TempFolder"})," or ",(0,t.jsx)(n.code,{children:"DefaultTempFolder"})," property."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["All zip files will automatically be created in the ",(0,t.jsx)(n.a,{href:"/zip/basic-concepts/zip64-zip-file-format",children:"Zip64 zip file format"})," if the limitations of the regular Zip format are reached."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>o});i(96540);var t=i(34164);const r={tabItem:"tabItem_Ymn6"};var s=i(74848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>w});var t=i(96540),r=i(34164),s=i(23104),o=i(56347),a=i(205),l=i(57485),c=i(31682),d=i(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,s=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,p]=f({queryString:i,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),g=(()=>{const e=c??x;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,s]),tabValues:s}}var m=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function j(e){let{className:n,block:i,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),r=a[i].value;r!==t&&(c(n),o(r))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:s}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);