"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8253],{90998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=n(74848),o=n(28453),r=n(11470),a=n(19365);const i={},c="FTP capabilities",l={id:"basic-concepts/ftp-capabilities/overview",title:"FTP capabilities",description:"In addition to the FtpClient class, which provides quick and easy access to FTP functionalities in the same style as the ActiveX version of Xceed's FTP library, the Xceed.Ftp namespace also exposes the FtpConnection, FtpFolder, and FtpFile classes which work together to create the FTP FileSystem implementation. Note: Unless otherwise stated, references to Xceed FTP for .NET apply to Xceed FTP for .NET Compact Framework.",source:"@site/ftp/basic-concepts/ftp-capabilities/overview.md",sourceDirName:"basic-concepts/ftp-capabilities",slug:"/basic-concepts/ftp-capabilities/overview",permalink:"/xceed-libs-doc/ftp/basic-concepts/ftp-capabilities/overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"Accessing files with long names and/or paths on Windows",permalink:"/xceed-libs-doc/ftp/basic-concepts/xceed-filesystem-core/access-file-long-name"},next:{title:"The FTP protocol",permalink:"/xceed-libs-doc/ftp/basic-concepts/ftp-capabilities/the-ftp-protocol"}},d={},u=[{value:"FtpConnection class",id:"ftpconnection-class",level:2},{value:"FtpFolder class",id:"ftpfolder-class",level:2},{value:"FtpFile class",id:"ftpfile-class",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ftp-capabilities",children:"FTP capabilities"})}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the ",(0,s.jsx)(t.code,{children:"FtpClient"})," class, which provides quick and easy access to FTP functionalities in the same style as the ActiveX version of Xceed's FTP library, the ",(0,s.jsx)(t.code,{children:"Xceed.Ftp"})," namespace also exposes the ",(0,s.jsx)(t.code,{children:"FtpConnection"}),", ",(0,s.jsx)(t.code,{children:"FtpFolder"}),", and ",(0,s.jsx)(t.code,{children:"FtpFile"})," classes which work together to create the FTP FileSystem implementation. Note: Unless otherwise stated, references to Xceed FTP for .NET apply to Xceed FTP for .NET Compact Framework."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"File System Diagram",src:n(2556).A+"",width:"600",height:"465"})}),"\n",(0,s.jsx)(t.h2,{id:"ftpconnection-class",children:"FtpConnection class"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FtpConnection"})," class represents a connection between a client and an FTP server.  The ",(0,s.jsx)(t.code,{children:"FtpConnection"})," class implements the IDisposable interface meaning that every ",(0,s.jsx)(t.code,{children:"FtpConnection"})," object that is created should also be disposed of by calling the Dispose method or, in C#, creating the ",(0,s.jsx)(t.code,{children:"FtpConnection"})," within a using block. If an instance of an ",(0,s.jsx)(t.code,{children:"FtpConnection"})," object is not disposed of, connections with the FTP server may remain active until the FTP server times-out or the garbage-collector passes."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FtpConnection"})," will create connections with the FTP server transparently and as necessary until it is disposed of. To prevent connections with an FTP server from being kept alive, the ",(0,s.jsx)(t.code,{children:"CloseConnections"})," method can be called. The ",(0,s.jsx)(t.code,{children:"CloseConnections"})," method will close any connections that are not being used; however, the ",(0,s.jsx)(t.code,{children:"FtpConnection"})," instance will remain usable."]}),"\n",(0,s.jsxs)(t.p,{children:["To test if a connection with the specified FTP server is possible before the ",(0,s.jsx)(t.code,{children:"FtpConnection"})," instance is passed to FtpFile or FtpFolder objects, the ",(0,s.jsx)(t.code,{children:"TestConnection"})," method can be used. If a connection with an FTP server is not possible, exceptions will be thrown when trying to access properties of the FtpFile and/or FtpFolder instances."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'    using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n    {\r\n      // Any code that uses the FtpConnection object should be placed\r\n      // between the creation and disposal of the FtpConnection instance.\r\n      FtpFolder folder = new FtpFolder( connection );\r\n\r\n      foreach( FileSystemItem item in folder.GetItems( true ) )\r\n      {\r\n        System.Diagnostics.Debug.WriteLine( item.FullName );\r\n      }\r\n    }\n'})})}),(0,s.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-vb.NET",children:'  Dim connection As FtpConnection\r\n\r\n    Try\r\n      \' Any code that uses the FtpConnection object should be placed\r\n      \' between the creation and disposal of the FtpConnection instance.\r\n      connection = New FtpConnection( "ftp.server.com" )\r\n\r\n      Dim source As New FtpFolder( connection )\r\n      Dim destination As New DiskFolder( "d:\\ftp_download" )\r\n    \r\n      source.CopyFilesTo( destination, False, True )\r\n    Finally\r\n      connection.Dispose()\r\n    End Try\n'})})})]}),"\n",(0,s.jsx)(t.h2,{id:"ftpfolder-class",children:"FtpFolder class"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FtpFolder"})," class is a specialization of the ",(0,s.jsx)(t.code,{children:"AbstractFolder"})," class that exposes properties and methods that provide access to a folder located on an FTP server."]}),"\n",(0,s.jsx)(t.h2,{id:"ftpfile-class",children:"FtpFile class"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"FtpFile"})," class is a specialization of the ",(0,s.jsx)(t.code,{children:"AbstractFile"})," class that exposes properties and methods that provide access to a file located on an FTP server."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const o={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(96540),o=n(34164),r=n(23104),a=n(56347),i=n(205),c=n(57485),l=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:n,groupId:o}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Dv)(n);return[o,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),F=(()=>{const e=l??b;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{F&&c(F)}),[F]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(92303);const F={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=i[n].value;o!==s&&(l(t),a(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.A)("tabs__item",F.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",F.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,v.jsx)(g,{...e,children:u(e.children)},String(t))}},2556:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/FileSystem-04269826baee304d4fb7f10563693780.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);