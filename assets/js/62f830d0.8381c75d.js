"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5024],{24812:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=i(74848),r=i(28453),s=i(11470),a=i(19365);const o={},l="Zipping items in memory",c={id:"basic-concepts/zipping/zipping-items-located-memory",title:"Zipping items in memory",description:"This topic demonstrates how to add items in memory to a zip file using both the MemoryFile class and the OpenWrite method of the ZippedFile class.",source:"@site/zip/basic-concepts/zipping/zipping-items-located-memory.md",sourceDirName:"basic-concepts/zipping",slug:"/basic-concepts/zipping/zipping-items-located-memory",permalink:"/xceed-libs-doc/zip/basic-concepts/zipping/zipping-items-located-memory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Creating split zip files",permalink:"/xceed-libs-doc/zip/basic-concepts/zipping/create-split-zip-files"},next:{title:"Zipping items using multiple threads",permalink:"/xceed-libs-doc/zip/basic-concepts/zipping/zipping-items-using-multiple-thread"}},d={},p=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"zipping-items-in-memory",children:"Zipping items in memory"})}),"\n",(0,n.jsxs)(t.p,{children:["This topic demonstrates how to add items in memory to a zip file using both the ",(0,n.jsx)(t.code,{children:"MemoryFile"})," class and the ",(0,n.jsx)(t.code,{children:"OpenWrite"})," method of the ",(0,n.jsx)(t.code,{children:"ZippedFile"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,n.jsxs)(t.p,{children:["To copy an item located in memory to a zip file using the ",(0,n.jsx)(t.code,{children:"MemoryFile"})," class, the following steps must be performed:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a file located in memory using the ",(0,n.jsx)(t.code,{children:"MemoryFile"})," class. With Xceed Zip for .NET, a file is a file; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"If the file does not exist, create it."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a new or existing zip file using the ",(0,n.jsx)(t.code,{children:"ZipArchive"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Call the ",(0,n.jsx)(t.code,{children:"CopyTo"})," method to copy the entire contents of the folder to the zip file."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To write a data directly in a zip file, the following steps must be performed:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a new or existing zip file using the ",(0,n.jsx)(t.code,{children:"ZipArchive"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Retrieve a reference to a new or existing file inside the zip file using the ",(0,n.jsx)(t.code,{children:"ZippedFile"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Convert the data to write to the file within the zip file to a byte array."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Open a stream to the ",(0,n.jsx)(t.code,{children:"ZippedFile"})," object using its ",(0,n.jsx)(t.code,{children:"OpenWrite"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Write the data to the ",(0,n.jsx)(t.code,{children:"ZippedFile"})," object."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(t.p,{children:"This example demonstrates how to copy a file located in memory to a zip file."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.FileSystem;\r\n\r\n  // Note: Pathnames must be modified for code snippets to work under the .NET Compact Framework.\r\n  MemoryFile file = new MemoryFile( "RAM_DRIVE", "file.txt" );\r\n\r\n  if( !file.Exists )\r\n      file.Create();\r\n\r\n  ZipArchive zip = new ZipArchive( new DiskFile( @"d:\\dump\\test.zip" ) );\r\n  file.CopyTo( zip, true );\n'})})}),(0,n.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Zip\r\n  Imports Xceed.FileSystem\r\n\r\n  \' Note: Pathnames must be modified for code snippets to work under the .NET Compact Framework.\r\n\r\n  Dim file As New MemoryFile("RAM_DRIVE", "file.txt")\r\n\r\n  If Not file.Exists Then\r\n    file.Create()\r\n  End If\r\n\r\n  Dim zip As New ZipArchive(New DiskFile("d:\\dump\\test.zip") )\r\n  file.CopyTo(zip, True)\n'})})})]}),"\n",(0,n.jsx)(t.p,{children:"This next example demonstrates how to write data directly in a zip file."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.FileSystem;\r\n  using System.IO;\r\n\r\n  // If your trial period has expired, you must purchase a registered license key,\r\n  // uncomment the next line of code, and insert your registered license key.\r\n  // For more information, jump to the How the 45-day trial works and the\r\n  // How to license the component topics.\r\n  //Xceed.Zip.Licenser.LicenseKey = "ZINXX-XXXXX-XXXXX-XXXX";\r\n  // Note: Pathnames must be modified for code snippets to work under the .NET Compact Framework.\r\n\r\n  ZipArchive zipFile = new ZipArchive( new DiskFile( @"d:\\dump\\test.zip" ) );\r\n\r\n  ZippedFile file = ( ZippedFile )zipFile.GetFile( "file.txt" );\r\n\r\n  if( !file.Exists )\r\n      file.Create();\r\n  \r\n  string data = "This is the data which will be added to the zip file";\r\n\r\n  // Convert the data to a byte array.\r\n  byte[] byteData = System.Text.Encoding.Default.GetBytes( data );\r\n\r\n  // Write the information to the ZippedFile object\r\n  using( Stream stream = file.OpenWrite( true ) )\r\n  {\r\n      stream.Write( byteData, 0, byteData.Length );\r\n  }\n'})})}),(0,n.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.Zip\r\n  Imports Xceed.FileSystem\r\n  Imports System.IO\r\n\r\n  \' Note: Pathnames must be modified for code snippets to work under the .NET Compact Framework.\r\n  Dim zipFile As New ZipArchive(New DiskFile("d:\\dump\\test.zip"))\r\n  Dim file As ZippedFile = CType(zipFile.GetFile("file.txt"), ZippedFile)\r\n\r\n  If Not file.Exists Then\r\n    file.Create()\r\n  End If\r\n\r\n  Dim data As String = "This is the data which will be added to the zip file"\r\n\r\n  \' Convert the data to a byte array.\r\n  Dim byteData() As Byte = System.Text.Encoding.Default.GetBytes(data)\r\n\r\n  \' Write the information to the ZippedFile object\r\n  Dim stream As Stream = file.OpenWrite(True)\r\n\r\n  stream.Write(byteData, 0, byteData.Length)\r\n  stream.Close()\n'})})})]}),"\n",(0,n.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,n.jsx)(t.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the zip file? Use ",(0,n.jsx)(t.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to add items into a specific folder within the zip file? Create an instance of a ",(0,n.jsx)(t.code,{children:"ZippedFolder"})," object rather than a ",(0,n.jsx)(t.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to move items rather than copy them? Use the ",(0,n.jsx)(t.code,{children:"MoveTo"})," and ",(0,n.jsx)(t.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to change the location of the temporary folder. Set the ZipArchive's ",(0,n.jsx)(t.code,{children:"TempFolder"})," or ",(0,n.jsx)(t.code,{children:"DefaultTempFolder"})," property."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,n.jsx)(t.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you only want to do basic zip file operations? Use the ",(0,n.jsx)(t.a,{href:"/zip/basic-concepts/quick-zip",children:"QuickZip"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Do you want to modify the default extra headers that are stored to a zip file? Set the ZipArchive's ",(0,n.jsx)(t.code,{children:"DefaultExtraHeaders"})," property."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["All zip files will automatically be created in the ",(0,n.jsx)(t.a,{href:"/zip/basic-concepts/zip64-zip-file-format",children:"Zip64 zip file format"})," if the limitations of the regular Zip format are reached."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>a});i(96540);var n=i(34164);const r={tabItem:"tabItem_Ymn6"};var s=i(74848);function a(e){let{children:t,hidden:i,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>w});var n=i(96540),r=i(34164),s=i(23104),a=i(56347),o=i(205),l=i(57485),c=i(31682),d=i(70679);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:r}}=e;return{value:t,label:i,attributes:n,default:r}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function h(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:i=!1,groupId:r}=e,s=u(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,p]=m({queryString:i,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(i);return[r,(0,n.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),x(e)}),[p,x,s]),tabValues:s}}var x=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=i(74848);function j(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),r=o[i].value;r!==n&&(c(t),a(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function g(e){let{lazy:t,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,y.jsx)(j,{...t,...e}),(0,y.jsx)(g,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,y.jsx)(v,{...e,children:p(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);