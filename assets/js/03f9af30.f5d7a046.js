"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[4871],{7229:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(74848),t=i(28453);const o={title:"Installation for C#"},r="Installation instructions for C#",l={id:"installation-instructions/installation-csharp",title:"Installation for C#",description:"Assembly file locations",source:"@site/ftp/installation-instructions/installation-csharp.md",sourceDirName:"installation-instructions",slug:"/installation-instructions/installation-csharp",permalink:"/xceed-libs-doc/ftp/installation-instructions/installation-csharp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installation for C#"},sidebar:"sidebarftp",previous:{title:"How to license the component",permalink:"/xceed-libs-doc/ftp/installation-instructions/how-to-license-component"},next:{title:"Installation for VB.NET",permalink:"/xceed-libs-doc/ftp/installation-instructions/installation-vb"}},c={},d=[{value:"Assembly file locations",id:"assembly-file-locations",level:2},{value:".NET 4.5",id:"net-45",level:4},{value:".NET Standard",id:"net-standard",level:4},{value:"Add References in application projects",id:"add-references-in-application-projects",level:2},{value:"Example code in C#",id:"example-code-in-c",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation-instructions-for-c",children:"Installation instructions for C#"})}),"\n",(0,s.jsx)(n.h2,{id:"assembly-file-locations",children:"Assembly file locations"}),"\n",(0,s.jsx)(n.p,{children:"The installer will copy all the necessary files into the product's installation folder, usually in:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<Installation Folder>\\Xceed Zip for .NET v#.#\\Bin\\"})}),"\n",(0,s.jsx)(n.p,{children:"The assembly files located in the base directory target .NET framework 4.0 for maximum compatibility. However, different flavors of the components are available. These flavors target different versions of the .NET framework or platforms to take advantage of new features."}),"\n",(0,s.jsx)(n.h4,{id:"net-45",children:".NET 4.5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<Installation Folder>\\Xceed Zip for .NET v#.#\\Bin\\NET45"})}),"\n",(0,s.jsx)(n.h4,{id:"net-standard",children:".NET Standard"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<Installation Folder>\\Xceed Zip for .NET v#.#\\Bin\\NETStandard"})}),"\n",(0,s.jsx)(n.p,{children:"Xamarin applications should use the .NET Standard flavor of the components. It is no longer necessary to use a Xamarin-specific flavor."}),"\n",(0,s.jsx)(n.h2,{id:"add-references-in-application-projects",children:"Add References in application projects"}),"\n",(0,s.jsxs)(n.p,{children:["The only thing left to do in order to begin using Xceed's components is to add the appropriate assemblies to your project, make sure the ",(0,s.jsx)(n.code,{children:"CopyLocal"})," property of each reference is set to ",(0,s.jsx)(n.code,{children:"true"})," if using a Compact Framework version, and license the product for runtime use. To do this, perform the following steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start Visual Studio 2019, 2017, 2015, 2012, 2010, 2008, 2005."}),"\n",(0,s.jsxs)(n.li,{children:["On the Start Page, click on ",(0,s.jsx)(n.strong,{children:"New Project"}),' (in VS2008 / VS2005, click on the "Project..." link next to "Create:"). This can also be done by selecting the "File > New > Project" menu item.']}),"\n",(0,s.jsx)(n.li,{children:'Under "Project types", select a relevant type, like "Visual C# > Windows" for example.'}),"\n",(0,s.jsx)(n.li,{children:'In the "Templates" section, select the type of application you want to create.'}),"\n",(0,s.jsx)(n.li,{children:"Enter the name of the project you want to create and the location where it will be created."}),"\n",(0,s.jsx)(n.li,{children:'Click on the "OK" button.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You are now ready to add the necessary assemblies to your project."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Prior versions of the assemblies (6.8 and below) built for .NET 4 contained version numbers (v#.#) in their names. As of version 6.9, the names of the assemblies built for .NET 4, .NET 4.5, .NET Standard, Xamarin and older versions of .NET do not contain version numbers."})}),"\n",(0,s.jsxs)(n.p,{children:["To add references to the assemblies, select the ",(0,s.jsx)(n.strong,{children:"Add Reference"})," option from your ",(0,s.jsx)(n.strong,{children:"Project"})," menu. This can also be done by right-clicking on the ",(0,s.jsx)(n.strong,{children:"References"})," menu in the ",(0,s.jsx)(n.strong,{children:"Solution Explorer"})," and selecting the ",(0,s.jsx)(n.strong,{children:"Add Reference"})," option."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:".NET"})," tab in the ",(0,s.jsx)(n.strong,{children:"Add Reference"})," dialog."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.code,{children:"Xceed.FileSystem.dll"}),". This assembly is necessary for both the Zip/compression and the FTP capabilities. If you need to use the Zip/compression capabilities, select ",(0,s.jsx)(n.code,{children:"Xceed.Zip.dll"}),", as well as ",(0,s.jsx)(n.code,{children:"Xceed.Tar.dll"})," and/or ",(0,s.jsx)(n.code,{children:"Xceed.Gzip.dll"})," if you need Tar or GZip. If you need FTP capabilities, select the ",(0,s.jsx)(n.code,{children:"Xceed.Ftp.dll"}),", ",(0,s.jsx)(n.code,{children:"Xceed.Compression.dll"}),", and ",(0,s.jsx)(n.code,{children:"Xceed.Compression.Formats.dll"})," assemblies. For streaming capabilities, select ",(0,s.jsx)(n.code,{children:"Xceed.Compression.dll"}),". If the assemblies are not in the list of available components, you can browse for the assemblies (DLLs) through the ",(0,s.jsx)(n.strong,{children:"Browse"})," tab. You will need to browse for the DLLs if using a .NET Compact Framework product. If you need the SFTP capabilities, select ",(0,s.jsx)(n.code,{children:"Xceed.FileSystem.dll"}),", ",(0,s.jsx)(n.code,{children:"Xceed.SSH.SFtp.dll"}),", ",(0,s.jsx)(n.code,{children:"Xceed.SSH.Core.dll"}),", ",(0,s.jsx)(n.code,{children:"Xceed.SSH.Client.dll"}),", ",(0,s.jsx)(n.code,{children:"Xceed.SSH.Protocols.dll"}),", and ",(0,s.jsx)(n.code,{children:"Xceed.Compression.dll"}),", depending on your needs."]}),"\n",(0,s.jsxs)(n.li,{children:["Once you have finished selecting the assemblies from the list, click on the ",(0,s.jsx)(n.strong,{children:"OK"})," button."]}),"\n",(0,s.jsxs)(n.li,{children:["If you are using one of Xceed's Compact Framework products, set the ",(0,s.jsx)(n.code,{children:"CopyLocal"})," property of each reference to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["PPMd compression is now incorporated into the ",(0,s.jsx)(n.code,{children:"Xceed.Compression.dll"})," assembly. The ",(0,s.jsx)(n.code,{children:"Xceed.Compression.PPMd.v#.#.dll"})," is now obsolete and is no longer distributed with this product."]})]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, you need to license the components for runtime use. Jump to the ",(0,s.jsx)(n.code,{children:"Licensing"})," topic for detailed instructions."]}),"\n",(0,s.jsxs)(n.p,{children:["You can then add ",(0,s.jsx)(n.code,{children:"using"})," directives to your code to create aliases for existing namespaces and avoid having to type the fully qualified type names."]}),"\n",(0,s.jsx)(n.h3,{id:"example-code-in-c",children:"Example code in C#"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Zip\r\nusing Xceed.Compression;\r\nusing Xceed.FileSystem;\r\n// using Xceed.FileSystem.Windows; // Optional secondary APIs\r\nusing Xceed.Zip;\r\n\r\n// Streaming Compression\r\nusing Xceed.Compression;\r\nusing Xceed.Compression.Formats;\r\n\r\n// Ftp\r\nusing Xceed.FileSystem;\r\nusing Xceed.Ftp;\r\n\r\n// SSH and SFtp\r\nusing Xceed.FileSystem;\r\nusing Xceed.SSH.Client;\r\nusing Xceed.SSH.Protocols;\r\nusing Xceed.SSH.Core;\r\n\r\n// Tar and GZip\r\nusing Xceed.FileSystem;\r\nusing Xceed.Tar;\r\n// using Xceed.Tar.Streaming; // Optional secondary APIs\r\nusing Xceed.GZip;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);