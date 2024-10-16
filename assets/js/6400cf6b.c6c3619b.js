"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[482],{2485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),a=t(19365);const o={title:"Installation for .NET Standard"},l="Installation Instructions for .NET Standard",c={id:"installation-instructions/installation-net",title:"Installation for .NET Standard",description:"Xceed .NET Libraries Documentation",source:"@site/zip/installation-instructions/installation-net.md",sourceDirName:"installation-instructions",slug:"/installation-instructions/installation-net",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-net",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installation for .NET Standard"},sidebar:"sidebarzip",previous:{title:"Installation for VB.NET",permalink:"/xceed-libs-doc/zip/installation-instructions/installation-vb"},next:{title:"Getting Started",permalink:"/xceed-libs-doc/zip/basic-concepts/getting-started"}},d={},u=[{value:"Xceed .NET Libraries Documentation",id:"xceed-net-libraries-documentation",level:2},{value:"Installation Instructions for .NET Standard",id:"installation-instructions-for-net-standard-1",level:3},{value:"Requirements",id:"requirements",level:3},{value:"New Project",id:"new-project",level:3},{value:"Add References",id:"add-references",level:3},{value:"Set the LicenseKey Property",id:"set-the-licensekey-property",level:3},{value:"Add Using Directives",id:"add-using-directives",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation-instructions-for-net-standard",children:"Installation Instructions for .NET Standard"})}),"\n",(0,r.jsx)(n.h2,{id:"xceed-net-libraries-documentation",children:"Xceed .NET Libraries Documentation"}),"\n",(0,r.jsx)(n.h3,{id:"installation-instructions-for-net-standard-1",children:"Installation Instructions for .NET Standard"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/standard/net-standard",children:".NET Standard"})," development, the installer will copy the .NET Standard assembly DLLs into the product's installation folder, usually in:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<Installation Folder>\\Xceed Zip for .NET v#.#\\Bin\\NETStandard <Installation Folder>\\Xceed Zip for .NET v#.#\\Bin\\Signed DLLs\\NETStandard"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The assemblies are not added to the global assembly cache."})}),"\n",(0,r.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Visual Studio 2017 version 15.3 (or later) with .NET Core feature installed."}),"\n",(0,r.jsxs)(n.li,{children:["Or, on non-Windows platforms, the ",(0,r.jsx)(n.a,{href:"https://github.com/dotnet/core/tree/master/release-notes/download-archives",children:".NET Core 2.0 (or later) SDK"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"new-project",children:"New Project"}),"\n",(0,r.jsx)(n.p,{children:"To create a new project:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Start Visual Studio."}),"\n",(0,r.jsxs)(n.li,{children:["From the menu bar, pick ",(0,r.jsx)(n.code,{children:"File -> New -> Project"}),"."]}),"\n",(0,r.jsx)(n.li,{children:'Under "Installed", select your preferred programming language, like Visual C# or Visual Basic.'}),"\n",(0,r.jsxs)(n.li,{children:["Select a project type that supports .NET Standard assemblies. Microsoft maintains a ",(0,r.jsx)(n.a,{href:"http://immo.landwerth.net/netstandard-versions/#",children:"table"})," that shows the supported platforms."]}),"\n",(0,r.jsx)(n.li,{children:"Enter the name of the project you want to create and the location where it will be created."}),"\n",(0,r.jsx)(n.li,{children:'Click the "OK" button.'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"add-references",children:"Add References"}),"\n",(0,r.jsx)(n.p,{children:"Xceed assemblies can now be added to the project:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Select the "Add Reference" option from your "Project" menu. This can also be done by right-clicking on the "References" menu in the "Solution Explorer" and selecting the "Add Reference" option.'}),"\n",(0,r.jsx)(n.li,{children:'Click the "Browse..." button.'}),"\n",(0,r.jsx)(n.li,{children:"Browse to the folder where the .NET Standard DLLs have been installed. Select the DLL files appropriate for the needs of the application."}),"\n",(0,r.jsx)(n.li,{children:'Once you have finished selecting the assemblies from the list, click on the "OK" button.'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"set-the-licensekey-property",children:"Set the LicenseKey Property"}),"\n",(0,r.jsxs)(n.p,{children:["The components need to be licensed for runtime use. Refer to the ",(0,r.jsx)(n.code,{children:"Licensing"})," topic for detailed instructions."]}),"\n",(0,r.jsx)(n.h3,{id:"add-using-directives",children:"Add Using Directives"}),"\n",(0,r.jsxs)(n.p,{children:["You can then add ",(0,r.jsx)(n.code,{children:"using"})," directives to your code to create aliases for existing namespaces and avoid having to type the fully qualified type names."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"  // Zip\r\n  using Xceed.Compression;\r\n  using Xceed.FileSystem;\r\n  //using Xceed.FileSystem.Windows; // Optional secondary APIs\r\n  using Xceed.Zip;\r\n\r\n  // Streaming Compression\r\n  using Xceed.Compression;\r\n  using Xceed.Compression.Formats;\r\n\r\n  // Ftp\r\n  using Xceed.FileSystem;\r\n  using Xceed.Ftp;\r\n\r\n  // SSH and SFtp\r\n  using Xceed.FileSystem;\r\n  using Xceed.SSH.Client;\r\n  using Xceed.SSH.Protocols;\r\n  using Xceed.SSH.Core;\r\n\r\n  // Tar and GZip\r\n  using Xceed.FileSystem;\r\n  using Xceed.Tar;\r\n  //using Xceed.Tar.Streaming; // Optional secondary APIs\r\n  using Xceed.GZip;\n"})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.net",children:"  ' Zip\r\nImports Xceed.Compression\r\nImports Xceed.FileSystem\r\n'using Xceed.FileSystem.Windows; // Optional secondary APIs\r\nImports Xceed.Zip\r\n\r\n' Streaming Compression\r\nImports Xceed.Compression\r\nImports Xceed.Compression.Formats\r\n\r\n' Ftp\r\nImports Xceed.FileSystem\r\nImports Xceed.Ftp\r\n\r\n' SSH and SFtp\r\nImports Xceed.FileSystem\r\nImports Xceed.SSH.Client\r\nImports Xceed.SSH.Protocols\r\nImports Xceed.SSH.Core\r\n\r\n' Tar and GZip\r\nImports Xceed.FileSystem\r\nImports Xceed.Tar\r\n'using Xceed.Tar.Streaming; // Optional secondary APIs\r\nImports Xceed.GZip\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(34164),i=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),v=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function S(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,g.jsx)(S,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);