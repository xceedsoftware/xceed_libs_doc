"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3918],{99370:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(74848),i=t(28453),a=t(11470),s=t(19365);const l={},o="Copying items to Tar/Bzip2 archive",c={id:"code-snippets/tar-gzip-capabilities/creating-writing/copy-item-tarbzip2",title:"Copying items to Tar/Bzip2 archive",description:"Xceed Zip for .NET contains FileSystem (derived from AbstractFile/AbstractFolder) clases for Tar. However, it only contains FileSystem classes for GZip and not BZip2.",source:"@site/zip/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-tarbzip2.md",sourceDirName:"code-snippets/tar-gzip-capabilities/creating-writing",slug:"/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-tarbzip2",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/creating-writing/copy-item-tarbzip2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Performing multi-file GZip operations",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/creating-writing/performing-multifile-gzip-operation"},next:{title:"Removing items from a tar archive",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/creating-writing/removing-item-from-tar"}},u={},d=[{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"copying-items-to-tarbzip2-archive",children:"Copying items to Tar/Bzip2 archive"})}),"\n",(0,n.jsx)(r.p,{children:"Xceed Zip for .NET contains FileSystem (derived from AbstractFile/AbstractFolder) clases for Tar. However, it only contains FileSystem classes for GZip and not BZip2."}),"\n",(0,n.jsx)(r.p,{children:"However, our streaming compression component, Xceed.Compression.Formats, contains a BZip2 compressed stream class. Using that, Tar/BZip2 (.Tbz) archives can be created."}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'  static void Example()\r\n  {\r\n    Xceed.Tar.Licenser.LicenseKey = "<your ZIN license key>";\r\n    Xceed.Compression.Formats.Licenser.LicenseKey = "<your ZIN license key>";\r\n\r\n    AbstractFile tbzFile;\r\n\r\n    // Select the Tar-BZip2 file\r\n    tbzFile = new DiskFile( "Example.tbz" );\r\n\r\n    // If the Tar-BZip2 file already exists\r\n    if( tbzFile.Exists )\r\n      // Delete it. We want to create a new archive, not update an existing one\r\n      tbzFile.Delete();\r\n\r\n    // Create and open the Tar-BZip2 file\r\n    using( Stream stream = tbzFile.CreateWrite() )\r\n    {\r\n      // Wrap the file stream with a BZip2 stream\r\n      using( BZip2CompressedStream bzip2Stream = new BZip2CompressedStream( stream ) )\r\n      {\r\n        // Wrap the BZip2 stream with a StreamFile object so we can feed it to FileSystem calls\r\n        StreamFile streamFile = new StreamFile( bzip2Stream );\r\n\r\n        // Create a logical Tar archive around the BZip2 stream file\r\n        TarArchive tar = new TarArchive( streamFile );\r\n\r\n        // Select a source folder\r\n        AbstractFolder sourceFolder = new DiskFolder( @"D:\\Data" );\r\n\r\n        using( AutoBatchUpdate batch = new AutoBatchUpdate( tar ) )\r\n        {\r\n          // Add the files from the source folder to the archive\r\n          sourceFolder.CopyFilesTo( tar, true, true );\r\n        }\r\n      }\r\n    }\r\n  }\n'})})}),(0,n.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-vb.NET",children:"Private Shared Sub Example()\r\n  Xceed.Tar.Licenser.LicenseKey = \"<your ZIN license key>\"\r\n  Xceed.Compression.Formats.Licenser.LicenseKey = \"<your ZIN license key>\"\r\n\r\n  Dim tbzFile As AbstractFile\r\n\r\n  ' Select the Tar-BZip2 file\r\n  tbzFile = New DiskFile(\"Example.tbz\")\r\n\r\n  ' If the Tar-BZip2 file already exists\r\n  If tbzFile.Exists Then\r\n    ' Delete it. We want to create a new archive, not update an existing one\r\n    tbzFile.Delete()\r\n  End If\r\n\r\n  ' Create and open the Tar-BZip2 file\r\n  Using stream As Stream = tbzFile.CreateWrite()\r\n    ' Wrap the file stream with a BZip2 stream\r\n    Using bzip2Stream As New BZip2CompressedStream(stream)\r\n      ' Wrap the BZip2 stream with a StreamFile object so we can feed it to FileSystem calls\r\n      Dim streamFile As New StreamFile(bzip2Stream)\r\n\r\n      ' Create a logical Tar archive around the BZip2 stream file\r\n      Dim tar As New TarArchive(streamFile)\r\n\r\n      ' Select a source folder\r\n      Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Data\")\r\n\r\n      Using batch As New AutoBatchUpdate(tar)\r\n        ' Add the files from the source folder to the archive\r\n        sourceFolder.CopyFilesTo(tar, True, True)\r\n      End Using\r\n    End Using\r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,n.jsx)(r.p,{children:"This example demonstrates how to create a multi-file GZip archive."}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'  using Xceed.GZip;\r\n  using Xceed.FileSystem; \r\n\r\n  // This property must be set before the GZipArchive is created.\r\n  GZipArchive.AllowMultipleFiles = true; \r\n\r\n  AbstractFolder source = new DiskFolder(@"c:\\temp");\r\n  AbstractFolder gzip = new GZipArchive(new DiskFile(@"c:\\test.gz")); \r\n\r\n  //The second parameter must false when using the CopyFilesTo method\r\n  //with a GZip archive; otherwise, an exception will be thrown if\r\n  //subfolders are present in the source.\r\n  source.CopyFilesTo(gzip, false, true);\n'})})}),(0,n.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-vb.NET",children:"Imports Xceed.GZip\r\nImports Xceed.FileSystem\r\n\r\n'This property must be set before the GZipArchive is created.\r\nGZipArchive.AllowMultipleFiles = True \r\n\r\nDim source As New DiskFolder(@\"c:\\temp\")\r\nDim gzip As New GZipArchive(new DiskFile(@\"c:\\test.gz\")) \r\n\r\n'The second parameter must False when using the CopyFilesTo\r\n'method with a GZip archive; otherwise, an exception will be\r\n'thrown if subfolders are present in the source.\r\n\r\nsource.CopyFilesTo(gzip, False, True)\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,n.jsx)(r.p,{children:"The main questions you should ask yourself when performing these operations with a GZip archive are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be listed? Use ",(0,n.jsx)(r.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Do you want to retrieve a reference to a single GZipped file? Use the ",(0,n.jsx)(r.code,{children:"GetFile"})," method."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>F});var n=t(96540),i=t(34164),a=t(23104),s=t(56347),l=t(205),o=t(57485),c=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:i}}=e;return{value:r,label:t,attributes:n,default:i}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(i.location.search);r.set(a,e),i.replace({...i.location,search:r.toString()})}),[a,i])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:i}=e,a=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,d]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,a]=(0,u.Dv)(t);return[i,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),g=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function w(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),i=l[t].value;i!==n&&(c(r),s(i))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function x(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...r,...e}),(0,v.jsx)(y,{...r,...e})]})}function F(e){const r=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const i={},a=n.createContext(i);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);