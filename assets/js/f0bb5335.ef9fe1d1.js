"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[645],{22003:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(74848),i=t(28453),a=t(11470),o=t(19365);const s={title:"Creating a zip file in memory"},l="Creating a zip file in memory",c={id:"code-snippets/memory-compression/creating-zip-memory",title:"Creating a zip file in memory",description:"This topic demonstrates how to create a zip file in memory.",source:"@site/zip/code-snippets/memory-compression/creating-zip-memory.md",sourceDirName:"code-snippets/memory-compression",slug:"/code-snippets/memory-compression/creating-zip-memory",permalink:"/xceed-libs-doc/zip/code-snippets/memory-compression/creating-zip-memory",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Creating a zip file in memory"},sidebar:"sidebarzip",previous:{title:"Compressing a memory buffer (QuickCompression)",permalink:"/xceed-libs-doc/zip/code-snippets/memory-compression/compressing-memory-buffer"},next:{title:"Memory decompression",permalink:"/xceed-libs-doc/zip/category/memory-decompression"}},d={},p=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"creating-a-zip-file-in-memory",children:"Creating a zip file in memory"})}),"\n",(0,n.jsx)(r.p,{children:"This topic demonstrates how to create a zip file in memory."}),"\n",(0,n.jsx)(r.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,n.jsx)(r.p,{children:"To create a zip file in memory, the following steps must be performed:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Retrieve a reference to a folder whose files will be added to the zip file using either the ",(0,n.jsx)(r.code,{children:"DiskFolder"}),", ",(0,n.jsx)(r.code,{children:"ZippedFolder"}),", ",(0,n.jsx)(r.code,{children:"ZipArchive"}),", ",(0,n.jsx)(r.code,{children:"MemoryFolder"})," or ",(0,n.jsx)(r.code,{children:"IsolatedFolder"})," classes. With Xceed Zip for .NET, a folder is a folder; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Retrieve a reference to a new or existing zip file using the ",(0,n.jsx)(r.code,{children:"ZipArchive"})," class. Because we want the zip file to reside in memory, we will use a ",(0,n.jsx)(r.code,{children:"MemoryFile"})," in the constructor of the ",(0,n.jsx)(r.code,{children:"ZipArchive"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Call the ",(0,n.jsx)(r.code,{children:"CopyFilesTo"})," method to copy the entire contents of the folder to the zip file."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(r.p,{children:"This example demonstrates how to copy the contents of a folder located on disk to a zip file located in memory."}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'  public static void ZipIntoMemory()\r\n  {\r\n    // Select a file that will be our zip file\r\n    AbstractFile zipFile = new MemoryFile( "RAM_Disk", "CopyItemsToZip2.zip" );\r\n\r\n    /* The component doesn\'t have distinct add and update operations.\r\n      If you want any existing zip file to be overwritten, you need to delete the\r\n      zip file before starting to perform any operation. */\r\n\r\n    // If the zip file already exists\r\n    if( zipFile.Exists )\r\n      // Delete it\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    // Wrap the operations that modify the zip archive in a batch update\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      // Select a source folder\r\n      AbstractFile sourceFile = new DiskFile( @"D:\\Data\\File1.dat" );\r\n\r\n      // Zip the files in the source folder into the zip archive\r\n      sourceFile.CopyTo( zip, true );\r\n    }\r\n\r\n    /* To access the zipped data in memory, the application will open the\r\n      zipped item for reading. Reading unzips data.\r\n      Data will be read using a Stream object. Streaming allows data to be\r\n      processed little by little, without having to create a large array to\r\n      contain the entire data. */\r\n\r\n    // Get the zipped item from the archive\r\n    AbstractFile zippedFileInMemory = zip.GetFile( "File1.dat" );\r\n\r\n    // Open the zipped item for reading\r\n    using( Stream stream = zippedFileInMemory.OpenRead() )\r\n    {\r\n      // Create a read buffer\r\n      int bufferLength = 8 * 1024;\r\n      byte[] buffer = new byte[ bufferLength ];\r\n      int read;\r\n\r\n      // Attempt to unzip data\r\n      read = stream.Read( buffer, 0, bufferLength );\r\n\r\n      // While there is data to read\r\n      while( read > 0 )\r\n      {\r\n        // TODO: Perform desired operation with the data read from the stream\r\n\r\n        // Attempt to unzip more data\r\n        read = stream.Read( buffer, 0, bufferLength );\r\n      }\r\n    }\r\n  }\n'})})}),(0,n.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-vb.NET",children:"Public Shared Sub ZipIntoMemory()\r\n  ' Select a file that will be our zip file\r\n  Dim zipFile As AbstractFile = New MemoryFile(\"RAM_Disk\", \"CopyItemsToZip2.zip\")\r\n\r\n'       The component doesn't have distinct add and update operations.\r\n'         If you want any existing zip file to be overwritten, you need to delete the\r\n'         zip file before starting to perform any operation. \r\n\r\n  ' If the zip file already exists\r\n  If zipFile.Exists Then\r\n    ' Delete it\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  ' Wrap the operations that modify the zip archive in a batch update\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    ' Select a source folder\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"D:\\Data\\File1.dat\")\r\n\r\n    ' Zip the files in the source folder into the zip archive\r\n    sourceFile.CopyTo(zip, True)\r\n  End Using\r\n\r\n'       To access the zipped data in memory, the application will open the\r\n'         zipped item for reading. Reading unzips data.\r\n'         Data will be read using a Stream object. Streaming allows data to be\r\n'         processed little by little, without having to create a large array to\r\n'         contain the entire data. \r\n\r\n  ' Get the zipped item from the archive\r\n  Dim zippedFileInMemory As AbstractFile = zip.GetFile(\"File1.dat\")\r\n\r\n  ' Open the zipped item for reading\r\n  Using stream As Stream = zippedFileInMemory.OpenRead()\r\n    ' Create a read buffer\r\n    Dim bufferLength As Integer = 8 * 1024\r\n    Dim buffer(bufferLength - 1) As Byte\r\n    Dim read As Integer\r\n\r\n    ' Attempt to unzip data\r\n    read = stream.Read(buffer, 0, bufferLength)\r\n\r\n    ' While there is data to read\r\n    Do While read > 0\r\n      ' TODO: Perform desired operation with the data read from the stream\r\n\r\n      ' Attempt to unzip more data\r\n      read = stream.Read(buffer, 0, bufferLength)\r\n    Loop\r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,n.jsx)(r.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the zip file? Use ",(0,n.jsx)(r.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to add items into a specific folder within the zip file? Create an instance of a ZippedFolder object rather than a ",(0,n.jsx)(r.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to change the location of the temporary folder. Set the ZipArchive's ",(0,n.jsx)(r.code,{children:"TempFolder"})," or ",(0,n.jsx)(r.code,{children:"DefaultTempFolder"})," property."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,n.jsx)(r.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to move items rather than copy them? Use the ",(0,n.jsx)(r.code,{children:"MoveTo"})," and ",(0,n.jsx)(r.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["-Do you want to modify the default extra headers that are stored to a zip file? Set the ZipArchive's ",(0,n.jsx)(r.code,{children:"DefaultExtraHeaders"})," property."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.strong,{children:["All zip files will automatically be created in the ",(0,n.jsx)(r.a,{href:"/zip/basic-concepts/zip64-zip-file-format",children:"Zip64 zip file format"})," if the limitations of the regular Zip format are reached."]})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,o),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var n=t(96540),i=t(34164),a=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:i}}=e;return{value:r,label:t,attributes:n,default:i}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const i=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(i.location.search);r.set(a,e),i.replace({...i.location,search:r.toString()})}),[a,i])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:i}=e,a=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,p]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,a]=(0,d.Dv)(t);return[i,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),y=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,a]),tabValues:a}}var b=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),i=s[t].value;i!==n&&(c(r),o(i))},p=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:p,onClick:d,...a,className:(0,i.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function z(e){const r=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(v,{...r,...e})]})}function j(e){const r=(0,b.A)();return(0,g.jsx)(z,{...e,children:p(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var n=t(96540);const i={},a=n.createContext(i);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);