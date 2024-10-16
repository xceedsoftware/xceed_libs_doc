"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5758],{41210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={},o="Features of Xceed SFTP for .NET",l={id:"sftp_intro",title:"Features of Xceed SFTP for .NET",description:".NET technology",source:"@site/ftp/sftp_intro.md",sourceDirName:".",slug:"/sftp_intro",permalink:"/xceed-libs-doc/ftp/sftp_intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"FTP Features",permalink:"/xceed-libs-doc/ftp/intro"},next:{title:"Installation instructions",permalink:"/xceed-libs-doc/ftp/installation-instructions/overview"}},a={},c=[{value:".NET technology",id:"net-technology",level:2},{value:"SFTP protocol features",id:"sftp-protocol-features",level:2},{value:"Major features",id:"major-features",level:2},{value:"Component interactivity / Events",id:"component-interactivity--events",level:2},{value:"Other features",id:"other-features",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"features-of-xceed-sftp-for-net",children:"Features of Xceed SFTP for .NET"})}),"\n",(0,i.jsx)(n.h2,{id:"net-technology",children:".NET technology"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Works with .NET 4 / 4.5 and 2.0-3.5, ASP.NET 4 / 4.5 and 2.0-3.5, and Visual Studio 2005-2012."}),"\n",(0,i.jsx)(n.li,{children:"100% managed code written in C#, source code available through a Blueprint subscription."}),"\n",(0,i.jsx)(n.li,{children:"All error handling works through .NET exception classes."}),"\n",(0,i.jsx)(n.li,{children:"CLS compliant (Common Language Specification)."}),"\n",(0,i.jsx)(n.li,{children:"Documentation fully integrated into Visual Studio."}),"\n",(0,i.jsx)(n.li,{children:"Built using System.Net.Sockets namespace."}),"\n",(0,i.jsx)(n.li,{children:"The .NET 4 build is compiled using the Client Profile."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sftp-protocol-features",children:"SFTP protocol features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Complies with RFC 4253, 4252, and 4254."}),"\n",(0,i.jsx)(n.li,{children:"Implements the SSH-2 protocols. This means that data exchanges with the server use strong encryption and data integrity checks. Encryption keys are exchanged in a secure manner and are automatically changed periodically during a session."}),"\n",(0,i.jsx)(n.li,{children:"Implements versions 3 and 6 of the SFTP protocol. Versions 4 and 5 are not supported but automatic fallback to version 3 works with most servers."}),"\n",(0,i.jsxs)(n.li,{children:["Items from the SFTP server are represented by ",(0,i.jsx)(n.code,{children:"SFtpFile"})," and ",(0,i.jsx)(n.code,{children:"SFtpFolder"})," objects, allowing them to be manipulated like regular files and folders. These classes integrate with Xceed's FileSystem component."]}),"\n",(0,i.jsx)(n.li,{children:"Unlike FTP, SFTP enforces a precise date and time format (down to the second for version 3 servers and down to the nanosecond for version 6 servers). This makes it easy and consistent to determine the freshest file between client and server machines."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"major-features",children:"Major features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Securely sends and receives files, folders or entire directory structures quickly and easily."}),"\n",(0,i.jsx)(n.li,{children:"Securely sends and receives files to or from disk or memory streams."}),"\n",(0,i.jsxs)(n.li,{children:["Obtain a detailed listing of files and folders. Create, rename, and delete files and folders on the SFTP server using ",(0,i.jsx)(n.code,{children:"SFtpFile"})," and ",(0,i.jsx)(n.code,{children:"SFtpFolder"}),' properties and methods, all without the need to maintain and monitor a "current working directory".']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"component-interactivity--events",children:"Component interactivity / Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When sending multiple files and an error occurs, allows you to retry the file, skip it and continue, or abort the entire operation."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"other-features",children:"Other features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports connecting through proxies. HTTP, SOCKS 4/4A, and SOCKS 5 proxies are supported."}),"\n",(0,i.jsxs)(n.li,{children:["Flexible synchronization of any number of folders and files of any type (",(0,i.jsx)(n.code,{children:"FileSystemItem"})," and ",(0,i.jsx)(n.code,{children:"FileSystemItem"}),"-derived objects, such as ",(0,i.jsx)(n.code,{children:"AbstractFile"})," or ",(0,i.jsx)(n.code,{children:"AbstractFolder"})," objects and their derivatives), wherever they are located."]}),"\n",(0,i.jsx)(n.li,{children:"Can use established filters (name, date, attributes, size) to select files for listing, sending, or receiving, or create your own to fit specific criteria."}),"\n",(0,i.jsx)(n.li,{children:"Allows a destination file or folder to have a different name than the source when transferring files."}),"\n",(0,i.jsxs)(n.li,{children:["SFTP activity can be logged to disk, console, or any ",(0,i.jsx)(n.code,{children:"System.IO.TextWriter"})," object."]}),"\n",(0,i.jsx)(n.li,{children:"Can set a timeout limit on all operations and have an exception triggered if it is exceeded."}),"\n",(0,i.jsx)(n.li,{children:"Triggers an event if the connection to the SFTP server is lost."}),"\n",(0,i.jsx)(n.li,{children:"Accepts SFTP server by IP address or host name."}),"\n",(0,i.jsx)(n.li,{children:"Supports wildcard in files to send or receive."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);