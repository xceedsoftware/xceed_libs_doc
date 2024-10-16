"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8244],{3951:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=i(74848),n=i(28453);const l={},o="Deploying",r={id:"getting-started/deploying",title:"Deploying",description:"When distributing an application that uses Xceed's Words for .NET, specific assemblies must be distributed (listed in the Redistributable Files section below). These files must either be installed into the global assembly cache or placed in the same directory as your executable.",source:"@site/docs/getting-started/deploying.md",sourceDirName:"getting-started",slug:"/getting-started/deploying",permalink:"/xceed-libs-doc/docs/getting-started/deploying",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Licensing",permalink:"/xceed-libs-doc/docs/getting-started/licensing"},next:{title:"Code Snippets",permalink:"/xceed-libs-doc/docs/code-snippets/overview"}},d={},a=[{value:"Installing Assemblies into the Global Assembly Cache",id:"installing-assemblies-into-the-global-assembly-cache",level:2},{value:"Redistributable Files",id:"redistributable-files",level:2},{value:"Location of Assemblies",id:"location-of-assemblies",level:2}];function c(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"deploying",children:"Deploying"})}),"\n",(0,t.jsxs)(s.p,{children:["When distributing an application that uses Xceed's Words for .NET, specific assemblies must be distributed (listed in the ",(0,t.jsx)(s.strong,{children:"Redistributable Files"})," section below). These files must either be installed into the global assembly cache or placed in the same directory as your executable."]}),"\n",(0,t.jsx)(s.p,{children:"Both signed and unsigned versions of the assemblies are available. Either version can be distributed, but please remember that signed software of any kind can sometimes cause problems because the .NET Framework or the operating system must contact an authentication server, which can in turn trigger firewall alerts, etc."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"Only the file(s) specifically identified in the documentation as Redistributable Files may be distributed. You may not redistribute the Xceed installation package."})}),"\n",(0,t.jsx)(s.h2,{id:"installing-assemblies-into-the-global-assembly-cache",children:"Installing Assemblies into the Global Assembly Cache"}),"\n",(0,t.jsx)(s.p,{children:"In order to install assemblies into the global assembly cache, Microsoft Windows Installer 2.0 must be used. This is the recommended and most common way to add assemblies to the global assembly cache, and it provides reference counting of assemblies in the global assembly cache, plus other benefits."}),"\n",(0,t.jsx)(s.p,{children:'For more information regarding installing assemblies into the global assembly cache, please refer to the "Installing an Assembly into the Global Assembly Cache" topic of the .NET Framework Developer\'s Guide.'}),"\n",(0,t.jsx)(s.h2,{id:"redistributable-files",children:"Redistributable Files"}),"\n",(0,t.jsx)(s.p,{children:"Registered users are permitted to distribute the following assemblies along with any applications developed using Xceed Words for .NET. Under no circumstances is it permitted to distribute any other files."}),"\n",(0,t.jsx)(s.p,{children:"For applications developed using Xceed Words for .NET Framework:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Xceed.Words.NET.dll"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Xceed.Documents.NET.dll"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Xceed.PDF.dll"})," (only required if PDF conversion features are used)"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For applications developed using Xceed Words for .NET 5+:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Xceed.Words.NET.dll"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"Xceed.Documents.NET.dll"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Xceed.PDF.dll"})," (only required if PDF conversion features are used)"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"location-of-assemblies",children:"Location of Assemblies"}),"\n",(0,t.jsxs)(s.p,{children:["All the assemblies required to distribute an application that uses Xceed Words for .NET are located in the ",(0,t.jsx)(s.strong,{children:"[Program Files]\\Xceed\\Xceed Words for .NET [version]\\Bin"})," folder."]}),"\n",(0,t.jsxs)(s.p,{children:["All the assemblies required to distribute an application that uses Xceed Words for .NET 5+ are located in the ",(0,t.jsx)(s.strong,{children:"[Program Files]\\Xceed\\Xceed Words for .NET [version]\\Bin\\NET5"})," folder."]}),"\n",(0,t.jsx)(s.hr,{})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>r});var t=i(96540);const n={},l=t.createContext(n);function o(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);