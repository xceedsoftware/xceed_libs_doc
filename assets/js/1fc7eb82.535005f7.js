"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[6615],{77451:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(74848),t=n(28453);const r={},c="Getting Started",a={id:"basic-concepts/getting-started",title:"Getting Started",description:"Xceed .NET Libraries Documentation",source:"@site/zip/basic-concepts/getting-started.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/getting-started",permalink:"/xceed-libs-doc/zip/basic-concepts/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Installation for .NET Standard",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-net"},next:{title:"Zip and streaming capabilities",permalink:"/xceed-libs-doc/zip/basic-concepts/zip-and-streaming-capabilities"}},d={},l=[{value:"Xceed .NET Libraries Documentation",id:"xceed-net-libraries-documentation",level:2},{value:"Getting Started",id:"getting-started-1",level:3},{value:"Xceed.Zip Namespace",id:"xceedzip-namespace",level:3},{value:"Xceed.Tar and Xceed.GZip Namespaces",id:"xceedtar-and-xceedgzip-namespaces",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,s.jsx)(i.h2,{id:"xceed-net-libraries-documentation",children:"Xceed .NET Libraries Documentation"}),"\n",(0,s.jsx)(i.h3,{id:"getting-started-1",children:"Getting Started"}),"\n",(0,s.jsx)(i.p,{children:"Xceed's FileSystem Core-based products allow you to perform various operations on files, folders, and zip files. These operations include compressing and decompressing streams and byte arrays, as well as handling FTP operations."}),"\n",(0,s.jsx)(i.p,{children:"The Zip capabilities of Xceed's FileSystem-based products are represented by three assemblies:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Xceed.Zip.dll"})," defines the ",(0,s.jsx)(i.code,{children:"Xceed.Zip"})," namespace."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Xceed.FileSystem.dll"})," defines the ",(0,s.jsx)(i.code,{children:"Xceed.FileSystem"})," namespace."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Xceed.Compression.dll"})," defines the ",(0,s.jsx)(i.code,{children:"Xceed.Compression"})," namespace."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Additional capabilities include:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Tar and GZip functionalities, defined by the ",(0,s.jsx)(i.code,{children:"Xceed.Tar.dll"})," and ",(0,s.jsx)(i.code,{children:"Xceed.GZip.dll"})," assemblies."]}),"\n",(0,s.jsxs)(i.li,{children:["FTP capabilities, defined by the ",(0,s.jsx)(i.code,{children:"Xceed.Ftp.dll"})," assembly and the ",(0,s.jsx)(i.code,{children:"Xceed.Ftp"})," namespace."]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"The .NET Compact Framework versions do not support Tar, GZip, or Secure FTP."})}),"\n",(0,s.jsx)(i.h3,{id:"xceedzip-namespace",children:"Xceed.Zip Namespace"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Xceed.Zip"})," namespace provides methods for performing various zip file operations. These classes integrate with the ",(0,s.jsx)(i.code,{children:"Xceed.FileSystem"})," namespace, allowing you to work with zip files as if they were regular folders."]}),"\n",(0,s.jsxs)(i.p,{children:["If you prefer quick operations without learning the ",(0,s.jsx)(i.code,{children:"Xceed.FileSystem"})," concepts, the ",(0,s.jsx)(i.code,{children:"QuickZip"})," class offers static methods for one-line zip file operations."]}),"\n",(0,s.jsx)(i.p,{children:"Some examples:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"zipping/copy-items-zip-file",children:"Copying disk items to a zip file"})," (",(0,s.jsx)(i.strong,{children:"zipping"}),")"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"zipping/create-zip-in-memory",children:"Creating a zip file in memory"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"zipping/create-spanned-zip-files",children:"Creating spanned zip files"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"zipping/create-split-zip-files",children:"Creating split zip files"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"zipping/zipping-items-located-memory",children:"Zipping items in memory"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"unzipping/exctracting-items-from-zip-file",children:"Extracting items from a zip file"})," (",(0,s.jsx)(i.strong,{children:"unzipping"}),")"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"unzipping/unzipping-to-memory",children:"Extracting items to memory"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"unzipping/unzipping-items-from-zip-file",children:"Extracting items from a generic stream"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"listing-content-zip-file",children:"Listing the contents of a zip file"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"removing-items-from-zip-file",children:"Removing items from a zip file"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"encryption-decription",children:"Encryption and decryption"})}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"xceedtar-and-xceedgzip-namespaces",children:"Xceed.Tar and Xceed.GZip Namespaces"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"Xceed.Tar"})," and ",(0,s.jsx)(i.code,{children:"Xceed.GZip"})," namespaces handle tar and gzip archives."]}),"\n",(0,s.jsx)(i.p,{children:"Some examples:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"tar-gzip-capabilities/gzip/copy-item-to-gzip",children:"Copying an item to a gzip archive"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"tar-gzip-capabilities/tar/listing-content-tarfile",children:"Listing the contents of a tar archive"})}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"Tar and GZip assemblies are not available in the .NET Compact Framework versions."})})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>a});var s=n(96540);const t={},r=s.createContext(t);function c(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);