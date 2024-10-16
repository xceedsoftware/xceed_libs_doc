"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7291],{49406:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(74848),r=n(28453);const o={},s="Encryption and Decryption",c={id:"basic-concepts/encryption-decription",title:"Encryption and Decryption",description:"Xceed .NET Libraries Documentation",source:"@site/zip/basic-concepts/encryption-decription.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/encryption-decription",permalink:"/xceed-libs-doc/zip/basic-concepts/encryption-decription",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Introduction to the Zip File Format",permalink:"/xceed-libs-doc/zip/basic-concepts/introduction-zip-file-format"},next:{title:"Listing the Contents of a Zip File",permalink:"/xceed-libs-doc/zip/basic-concepts/listing-content-zip-file"}},p={},d=[{value:"Xceed .NET Libraries Documentation",id:"xceed-net-libraries-documentation",level:2},{value:"Encryption and Decryption",id:"encryption-and-decryption-1",level:3},{value:"Encrypting Files",id:"encrypting-files",level:3},{value:"Decrypting Files",id:"decrypting-files",level:3},{value:"Accessing the Contents of an Encrypted ZippedFile Object",id:"accessing-the-contents-of-an-encrypted-zippedfile-object",level:3},{value:"Example: Opening a ZippedFile Object for Reading (C#)",id:"example-opening-a-zippedfile-object-for-reading-c",level:4}];function a(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"encryption-and-decryption",children:"Encryption and Decryption"})}),"\n",(0,t.jsx)(i.h2,{id:"xceed-net-libraries-documentation",children:"Xceed .NET Libraries Documentation"}),"\n",(0,t.jsx)(i.h3,{id:"encryption-and-decryption-1",children:"Encryption and Decryption"}),"\n",(0,t.jsxs)(i.p,{children:["The zip format supports a light encryption algorithm that uses a string password to encrypt its data. This type of encryption can resist attacks by amateurs if the password is well chosen and long enough (at least 16 characters). However, it may not resist attacks by determined users or experts. Therefore, it is recommended to use long passwords and ",(0,t.jsx)(i.strong,{children:"not to rely solely on this encryption system to protect sensitive data"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["The length of the password is not limited, but for compatibility with ",(0,t.jsx)(i.strong,{children:"Xceed Zip Compression Library"})," (an ActiveX component) and many popular Zip compression utilities, it is recommended that passwords be no longer than 80 characters."]})}),"\n",(0,t.jsx)(i.h3,{id:"encrypting-files",children:"Encrypting Files"}),"\n",(0,t.jsxs)(i.p,{children:["To encrypt files you are copying to a zip file, set the ",(0,t.jsx)(i.code,{children:"DefaultEncryptionPassword"})," property of the corresponding ",(0,t.jsx)(i.code,{children:"ZipArchive"})," object. The ",(0,t.jsx)(i.code,{children:"ZipArchive"})," class represents both the root folder of a zip file and the zip file itself. You can obtain a reference to the ",(0,t.jsx)(i.code,{children:"ZipArchive"})," object using the ",(0,t.jsx)(i.code,{children:"RootFolder"})," property of any ",(0,t.jsx)(i.code,{children:"ZippedFile"})," or ",(0,t.jsx)(i.code,{children:"ZippedFolder"})," object."]}),"\n",(0,t.jsxs)(i.p,{children:["When files are added to the zip file, the ",(0,t.jsx)(i.code,{children:"DefaultEncryptionPassword"})," property is used to encrypt the files. If this property is not set, the files are not encrypted."]}),"\n",(0,t.jsx)(i.h3,{id:"decrypting-files",children:"Decrypting Files"}),"\n",(0,t.jsxs)(i.p,{children:["To decrypt files you are extracting from a zip file, set the ",(0,t.jsx)(i.code,{children:"DefaultDecryptionPassword"})," property of the corresponding ",(0,t.jsx)(i.code,{children:"ZipArchive"})," object. The ",(0,t.jsx)(i.code,{children:"ZipArchive"})," class represents both the root folder and the zip file. A reference to the ",(0,t.jsx)(i.code,{children:"ZipArchive"})," object can be obtained using the ",(0,t.jsx)(i.code,{children:"RootFolder"})," property of any ",(0,t.jsx)(i.code,{children:"ZippedFile"})," or ",(0,t.jsx)(i.code,{children:"ZippedFolder"})," object."]}),"\n",(0,t.jsxs)(i.p,{children:["When extracting encrypted files, the ",(0,t.jsx)(i.code,{children:"DefaultDecryptionPassword"})," is used to decrypt them. If the password is not set or is incorrect, an exception will be thrown. For more information on handling exceptions, see the ",(0,t.jsx)(i.code,{children:"Handling exceptions"})," topic."]}),"\n",(0,t.jsx)(i.h3,{id:"accessing-the-contents-of-an-encrypted-zippedfile-object",children:"Accessing the Contents of an Encrypted ZippedFile Object"}),"\n",(0,t.jsxs)(i.p,{children:["To access the contents of an encrypted ",(0,t.jsx)(i.code,{children:"ZippedFile"})," object, use an overload of the ",(0,t.jsx)(i.code,{children:"OpenWrite"})," or ",(0,t.jsx)(i.code,{children:"OpenRead"})," methods that takes a password as a parameter."]}),"\n",(0,t.jsx)(i.h4,{id:"example-opening-a-zippedfile-object-for-reading-c",children:"Example: Opening a ZippedFile Object for Reading (C#)"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'using Xceed.FileSystem;\r\nusing Xceed.Zip;\r\nusing Xceed.Compression;\r\nusing System.IO;\r\n\r\nZippedFile file = new ZippedFile( new DiskFile( @"c:\\test.zip" ), @"file.txt" ); \r\n\r\nStream s = file.OpenRead( FileShare.Read, "password" );\r\n\r\n// You can also use the default encryption password specified in the\r\n// DefaultDecryptionPassword property of the corresponding ZipArchive object: \r\n\r\nZippedFile file = new ZippedFile( new DiskFile( @"c:\\test.zip" ), @"file.txt" );\r\nZipArchive archive = ( ZipArchive )file.RootFolder; \r\n\r\nStream s = file.OpenRead( FileShare.Read, archive.DefaultDecryptionPassword ); \r\n\r\n//Open an instance of a ZippedFile object for writing: \r\n\r\nZippedFile file = new ZippedFile( new DiskFile( @"c:\\test.zip" ), @"file.txt" ); \r\n\r\nStream s = file.OpenWrite( FileShare.Write, CompressionMethod.Deflated,\r\n                           CompressionLevel.Normal, "password" ); \r\n\r\n// You can also use the default compression method and level as well\r\n// as the default encryption password of the corresponding ZipArchive object: \r\n\r\nZippedFile file = new ZippedFile( new DiskFile( @"c:\\test.zip" ), @"file.txt" );\r\nZipArchive archive = ( ZipArchive )file.RootFolder; \r\n\r\narchive.DefaultEncryptionPassword = "password"; \r\n\r\nStream s = file.OpenWrite( FileShare.Write, archive.DefaultCompressionMethod,\r\n                           archive.DefaultCompressionLevel, archive.DefaultEncryptionPassword );\n'})})]})}function l(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(96540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);