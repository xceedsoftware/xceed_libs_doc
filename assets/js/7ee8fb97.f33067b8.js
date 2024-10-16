"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[440],{66368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),o=t(19365);const a={title:"How to copy items from an FTP server (download)"},c="How to display the content of a file on an FTP server",l={id:"basic-concepts/ftp-capabilities/ftp-using-filesystem-interface/display-content-of-file",title:"How to copy items from an FTP server (download)",description:"The content of a file located on an FTP server (or to any other type of file supported by the Xceed FileSystem) can be displayed using the OpenRead method.",source:"@site/ftp/basic-concepts/ftp-capabilities/ftp-using-filesystem-interface/display-content-of-file.md",sourceDirName:"basic-concepts/ftp-capabilities/ftp-using-filesystem-interface",slug:"/basic-concepts/ftp-capabilities/ftp-using-filesystem-interface/display-content-of-file",permalink:"/xceed-libs-doc/ftp/basic-concepts/ftp-capabilities/ftp-using-filesystem-interface/display-content-of-file",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"How to copy items from an FTP server (download)"},sidebar:"sidebarftp",previous:{title:"How to list all items on an FTP server",permalink:"/xceed-libs-doc/ftp/basic-concepts/ftp-capabilities/ftp-using-filesystem-interface/list-all-item-on-ftp"},next:{title:"Using the FXP Protocol",permalink:"/xceed-libs-doc/ftp/basic-concepts/ftp-capabilities/using-fxp-protocol"}},d={},u=[{value:"Things to consider",id:"things-to-consider",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-display-the-content-of-a-file-on-an-ftp-server",children:"How to display the content of a file on an FTP server"})}),"\n",(0,r.jsxs)(n.p,{children:["The content of a file located on an FTP server (or to any other type of file supported by the ",(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/xceed-filesystem-core/overview",children:"Xceed FileSystem"}),") can be displayed using the ",(0,r.jsx)(n.code,{children:"OpenRead"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"The following example demonstrates how to display the content of a file located on an FTP server using the steps listed below:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an instance of the ",(0,r.jsx)(n.code,{children:"FtpConnection"})," class to establish a connection between the client and the FTP server. If you are using FtpConnection in a UI application, assign your form (or any other control that implements the ISynchronizeInvoke interface) to the ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property and call Application.DoEvents in an event such as ByteProgression."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an instance of an ",(0,r.jsx)(n.code,{children:"FtpFile"})," which will represent the file on the FTP server whose content is to be displayed. By default, the file is assumed to be located in the current working folder."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Retrieve a stream to the file on the FTP server using the FtpFile's ",(0,r.jsx)(n.code,{children:"OpenRead"})," method specifying the RepresentationType with which the data will be retrieved. The stream returned by the ",(0,r.jsx)(n.code,{children:"OpenRead"})," method is not seekable."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Since the stream returned by the ",(0,r.jsx)(n.code,{children:"OpenRead"})," method is not seekable (meaning that neither the length or position can be retrieved), data can be read by either looping through the stream until the end of the stream has been reached, or a StreamReader can be created around the stream to read the data."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Because the stream was opened using the ",(0,r.jsx)(n.strong,{children:"Ascii"})," RepresentationType, we will encode the data with the same encoding."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispose of the stream using its Dispose method."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispose of the FtpConnection once the file transfer is completed by calling its Dispose method or, in C#, by creating the FtpConnection instance in a using block. If an instance of an FtpConnection object is not disposed of, connections with the FTP server may remain active until the FTP server times-out or the garbage-collector passes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'    using Xceed.FileSystem;\r\n    using Xceed.Ftp;\r\n    \r\n    using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n    {        \r\n      //When using FtpConnection in a UI application\r\n      connection.SynchronizingObject = this;\r\n\r\n      FtpFile file = new FtpFile( connection, "test.txt" );\r\n    \r\n      using( System.IO.Stream stream = file.OpenRead( RepresentationType.Ascii ) )\r\n      {\r\n        System.IO.StreamReader reader = new System.IO.StreamReader( stream, System.Text.Encoding.ASCII );\r\n        System.Diagnostics.Debug.WriteLine( reader.ReadToEnd() );\r\n      }\r\n    }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'    Imports Xceed.FileSystem\r\n    Imports Xceed.Ftp\r\n\r\n    Dim connection As FtpConnection\r\n    Dim stream As System.IO.Stream\r\n\r\n    Try\r\n      connection = New FtpConnection( "ftp.server.com" )\r\n      \'When using FtpConnection in a UI application \r\n      connection.SynchronizingObject = Me\r\n\r\n      Dim file As New FtpFile(connection, "test.txt")\r\n      stream = file.OpenRead( RepresentationType.Ascii )\r\n\r\n      Dim reader As New System.IO.StreamReader(stream, System.Text.Encoding.ASCII)\r\n      System.Diagnostics.Debug.WriteLine( reader.ReadToEnd() )\r\n\r\n    Finally\r\n      stream.Close()\r\n      connection.Dispose()\r\n    End Try\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"things-to-consider",children:"Things to consider"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want the FTP server to initiate the data connection rather than the client-side? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"PassiveTransfer"})," property to ",(0,r.jsx)(n.strong,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to decrease or increase the period of time after which an FTP operation should timeout? Change the value of the FtpConnection's   ",(0,r.jsx)(n.code,{children:"Timeout"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to create a log file of the FTP process? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"TraceWriter"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to intervene when an error occurs with one or more of the items being manipulated? Create an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ItemException event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to prevent routers from prematurely closing the command channel while a long data transfer is taking place. Set the ",(0,r.jsx)(n.code,{children:"KeepAliveInterval"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want quick and easy access to FTP functionalities in the same style as the ActiveX version of the Xceed FTP Library? Use the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class instead. (Note: The ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," should now be considered obsolete. Instead, use the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class, assigning a value to its ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property.)"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),i=t(23104),o=t(56347),a=t(205),c=t(57485),l=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,u]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),y=(()=>{const e=l??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==r&&(l(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);