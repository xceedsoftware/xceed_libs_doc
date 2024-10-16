"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[3868],{78383:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(74848),n=t(28453);const r={},s="Zip64 zip file format",o={id:"basic-concepts/zip64-zip-file-format",title:"Zip64 zip file format",description:"The Zip64 zip file format is the 64-bit counterpart of the zip file format that is used by PKZIP 4.5 and up. It supports up to 2^64 - 1 files within a zip archive, as well as files that have a size greater than 4GB for a zip file size that can reach up to about 18 million terabytes (more precisely, 2^64 - 1 bytes).",source:"@site/zip/basic-concepts/zip64-zip-file-format.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/zip64-zip-file-format",permalink:"/xceed-libs-doc/zip/basic-concepts/zip64-zip-file-format",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"AES Encryption",permalink:"/xceed-libs-doc/zip/basic-concepts/aes-ecryption"},next:{title:"Zipping",permalink:"/xceed-libs-doc/zip/category/zipping"}},l={},c=[{value:"Extra and ending headers",id:"extra-and-ending-headers",level:2}];function p(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"zip64-zip-file-format",children:"Zip64 zip file format"})}),"\n",(0,a.jsx)(i.p,{children:"The Zip64 zip file format is the 64-bit counterpart of the zip file format that is used by PKZIP 4.5 and up. It supports up to 2^64 - 1 files within a zip archive, as well as files that have a size greater than 4GB for a zip file size that can reach up to about 18 million terabytes (more precisely, 2^64 - 1 bytes)."}),"\n",(0,a.jsx)(i.p,{children:"Split or spanned zip files can have a maximum of 2^32 - 1 parts."}),"\n",(0,a.jsx)(i.h2,{id:"extra-and-ending-headers",children:"Extra and ending headers"}),"\n",(0,a.jsx)(i.p,{children:"The Zip64 extra headers are found in both the local and central headers of a zip file. They can hold the compressed size, the uncompressed size, the local header offset, or the disk number of the zip file."}),"\n",(0,a.jsx)(i.p,{children:"The Zip64 ending header, as well as the Zip64 ending header locator, are found between the central directory (the central headers) and the normal ending header. They can hold the disk numbers, central header offset, and size of the zip file, and the number of files in it in the case where these values are higher than the respective capacities of the normal ending header fields."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"All zip files will automatically be created in the Zip64 zip file format if the limitations of the regular Zip format are reached."})}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsxs)(i.p,{children:["Although Xceed Zip for .NET supports the Zip64 zip file format, it limits the size of each zipped file and the total zip file to 2^63 - 1, since a Stream's ",(0,a.jsx)(i.code,{children:"Offset"})," property is a signed long integer. Also, because each zipped file takes at least 76 bytes (local and central headers), the maximum number of files within the zip file is around 2^56 files."]})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var a=t(96540);const n={},r=a.createContext(n);function s(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);