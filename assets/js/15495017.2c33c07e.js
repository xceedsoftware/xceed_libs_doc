"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[271],{70576:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(74848),o=s(28453);const i={title:"Installation for VB.NET"},r="Installation instructions for VB.NET",l={id:"installation-instructions/installation-vb",title:"Installation for VB.NET",description:"Assembly file locations",source:"@site/zip/installation-instructions/installation-vb.md",sourceDirName:"installation-instructions",slug:"/installation-instructions/installation-vb",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-vb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installation for VB.NET"},sidebar:"sidebarzip",previous:{title:"Installation for C#",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-csharp"},next:{title:"Installation for .NET Standard",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-net"}},c={},a=[{value:"Assembly file locations",id:"assembly-file-locations",level:2},{value:"Example code in VB.NET",id:"example-code-in-vbnet",level:3}];function d(e){const n={admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installation-instructions-for-vbnet",children:"Installation instructions for VB.NET"})}),"\n",(0,t.jsx)(n.h2,{id:"assembly-file-locations",children:"Assembly file locations"}),"\n",(0,t.jsxs)(n.p,{children:["The installer will copy all the necessary files into the product's installation folder (usually in ",(0,t.jsx)(n.code,{children:"<Installation Folder>\\Xceed Components\\Bin\\.NET"}),") and place a copy of all the assemblies in the global assembly cache (the latter step may not occur for all .NET 4 assemblies). The only thing left to do in order to begin using Xceed's components is to add the appropriate assemblies to your project, make sure the ",(0,t.jsx)(n.code,{children:"CopyLocal"}),' property of each reference is set to "true" if using a Compact Framework version, and license the product for runtime use. To do this, perform the following steps:']}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Start Visual Studio 2012/2010/2008/2005."}),"\n",(0,t.jsxs)(n.li,{children:["On the Start Page, click on ",(0,t.jsx)(n.strong,{children:"New Project"}),' (in VS2008 / VS2005, click on the "Project..." link next to "Create:"). This can also be done by selecting the "File > New > Project" menu item.']}),"\n",(0,t.jsx)(n.li,{children:'Under "Project types", select "Visual Basic > Windows".'}),"\n",(0,t.jsxs)(n.li,{children:['In the "Templates" section, select the type of application you want to create. If you are using one of Xceed\'s Compact Framework components, choose ',(0,t.jsx)(n.em,{children:"Smart Device Application"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Enter the name of the project you want to create and the location where it will be created."}),"\n",(0,t.jsx)(n.li,{children:'Click on the "OK" button.'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You are now ready to add the necessary assemblies to your project."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Prior versions of the assemblies (6.8 and below) built for .NET 4 contained version numbers (v#.#) in their names. As of version 6.9, the names of the assemblies built for .NET 4, .NET 4.5, .NET Standard, Xamarin and older versions of .NET do not contain version numbers."})}),"\n",(0,t.jsx)(n.p,{children:"To add references to the assemblies:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:['Select the "Add Reference" option from your ',(0,t.jsx)(n.strong,{children:"Project"})," menu. This can also be done by right-clicking on the ",(0,t.jsx)(n.strong,{children:"References"})," menu in the ",(0,t.jsx)(n.strong,{children:"Solution Explorer"}),' and selecting the "Add Reference" option.']}),"\n",(0,t.jsxs)(n.li,{children:['Select the ".NET" tab in the ',(0,t.jsx)(n.strong,{children:"Add Reference"})," dialog."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Xceed.FileSystem.dll"}),". This assembly is necessary for both the Zip/compression and the FTP capabilities. If you need to use the Zip/compression capabilities, select ",(0,t.jsx)(n.code,{children:"Xceed.Zip.dll"}),", as well as ",(0,t.jsx)(n.code,{children:"Xceed.Tar.dll"})," and/or ",(0,t.jsx)(n.code,{children:"Xceed.Gzip.dll"})," if you need Tar or GZip. If you need FTP capabilities, select the ",(0,t.jsx)(n.code,{children:"Xceed.Ftp.dll"}),", ",(0,t.jsx)(n.code,{children:"Xceed.Compression.dll"}),", and ",(0,t.jsx)(n.code,{children:"Xceed.Compression.Formats.dll"})," assemblies. For streaming capabilities, select ",(0,t.jsx)(n.code,{children:"Xceed.Compression.dll"}),". If the assemblies are not in the list of available components, you can browse for the assemblies (DLLs) through the ",(0,t.jsx)(n.strong,{children:"Browse"})," tab. You will need to browse for the DLLs if using a .NET Compact Framework product. If you need the SFTP capabilities, select ",(0,t.jsx)(n.code,{children:"Xceed.SSH.SFtp.dll"}),", ",(0,t.jsx)(n.code,{children:"Xceed.SSH.Core.dll"}),", ",(0,t.jsx)(n.code,{children:"Xceed.SSH.Protocols.dll"}),", and ",(0,t.jsx)(n.code,{children:"Xceed.Compression.dll"}),", depending on your needs."]}),"\n",(0,t.jsx)(n.li,{children:'Once you have finished selecting the assemblies from the list, click on the "OK" button.'}),"\n",(0,t.jsxs)(n.li,{children:["If you are using one of Xceed's Compact Framework products, set the ",(0,t.jsx)(n.code,{children:"CopyLocal"})," property of each reference to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),(0,t.jsx)(n.br,{}),"\n","PPMd compression is now incorporated into the ",(0,t.jsx)(n.code,{children:"Xceed.Compression.dll"})," assembly. The ",(0,t.jsx)(n.code,{children:"Xceed.Compression.PPMd.v#.#.dll"})," is now obsolete and is no longer distributed with this product."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you need to license the components for runtime use. Jump to the ",(0,t.jsx)(n.code,{children:"Licensing"})," topic for detailed instructions."]}),"\n",(0,t.jsxs)(n.p,{children:["You can then use ",(0,t.jsx)(n.code,{children:"Imports"})," statements to create aliases for existing namespaces and avoid having to type the fully qualified type names."]}),"\n",(0,t.jsx)(n.h3,{id:"example-code-in-vbnet",children:"Example code in VB.NET"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vbnet",children:"' Zip\r\nImports Xceed.Compression\r\nImports Xceed.FileSystem\r\n' Imports Xceed.FileSystem.Windows; // Optional secondary APIs\r\nImports Xceed.Zip\r\n\r\n' Streaming Compression\r\nImports Xceed.Compression\r\nImports Xceed.Compression.Formats\r\n\r\n' Ftp\r\nImports Xceed.FileSystem\r\nImports Xceed.Ftp\r\n\r\n' SSH and SFtp\r\nImports Xceed.FileSystem\r\nImports Xceed.SSH.Client\r\nImports Xceed.SSH.Protocols\r\nImports Xceed.SSH.Core\r\n\r\n' Tar and GZip\r\nImports Xceed.FileSystem\r\nImports Xceed.Tar\r\n' Imports Xceed.Tar.Streaming; // Optional secondary APIs\r\nImports Xceed.GZip\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);