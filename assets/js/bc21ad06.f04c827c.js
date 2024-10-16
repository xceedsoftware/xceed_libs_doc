"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[2644],{15806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var r=t(74848),o=t(28453),i=t(11470),s=t(19365);const l={},c="How to send files",a={id:"code-snippets/working-with-ftpclient-interface/file08",title:"How to send files",description:"Introduction",source:"@site/ftp/code-snippets/working-with-ftpclient-interface/file08.md",sourceDirName:"code-snippets/working-with-ftpclient-interface",slug:"/code-snippets/working-with-ftpclient-interface/file08",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-ftpclient-interface/file08",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to send custom commands",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-ftpclient-interface/file07"},next:{title:"Working with the QuickFtp Class",permalink:"/xceed-libs-doc/ftp/category/working-with-the-quickftp-class"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient",id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",level:2},{value:"Asynchronous (non-blocking) demonstration",id:"asynchronous-non-blocking-demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-send-files",children:"How to send files"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SendFile"}),", ",(0,r.jsx)(n.code,{children:"SendMultipleFiles"})," and ",(0,r.jsx)(n.code,{children:"SendFileToUniqueName"})," methods of the FtpClient class as well as the ",(0,r.jsx)(n.code,{children:"BeginSendFile"}),"/ ",(0,r.jsx)(n.code,{children:"EndSendFile"}),", ",(0,r.jsx)(n.code,{children:"BeingSendMultipleFiles"}),"/ ",(0,r.jsx)(n.code,{children:"EndSendMultipleFiles"})," and ",(0,r.jsx)(n.code,{children:"BeginSendFileToUniqueName"}),"/ ",(0,r.jsx)(n.code,{children:"EndSendFileToUniqueName"})," methods of the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class are used to send one or more files to an FTP server."]}),"\n",(0,r.jsxs)(n.p,{children:["The SendFile and ",(0,r.jsx)(n.code,{children:"BeginSendFile"}),"/",(0,r.jsx)(n.code,{children:"EndSendFile"})," methods send one file to an FTP server while the ",(0,r.jsx)(n.code,{children:"SendMultipleFiles"})," and ",(0,r.jsx)(n.code,{children:"BeginSendMultipleFiles"}),"/",(0,r.jsx)(n.code,{children:"EndSendMultipleFiles"})," methods send one or more files. The ",(0,r.jsx)(n.code,{children:"SendFileToUniqueName"})," and ",(0,r.jsx)(n.code,{children:"BeginSendFileToUniqueName"}),"/",(0,r.jsx)(n.code,{children:"EndSendFileToUniqueName"})," methods also send one file to an FTP server; however, the filename of the remote file will be generated by the FTP server."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class is now considered obsolete. It is therefore recommended to use ",(0,r.jsx)(n.code,{children:"FtpClient"})," instead to improve code readability.\r\n::"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When using Xceed FTP for .NET in a WinForms application, it is recommended that a SynchronizingObject be assigned to the SynchronizingObject property of the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class. For more information, jump to the ",(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms applications and threading topic"}),"."]})})]}),"\n",(0,r.jsxs)(n.p,{children:["All the methods above will send the files into the FTP server's current working directory. If you want to send the files to another location, you could use the ",(0,r.jsx)(n.code,{children:"ChangeCurrentFolder"})," or ",(0,r.jsx)(n.code,{children:"BeginChangeCurrentFolder"}),"/ ",(0,r.jsx)(n.code,{children:"EndChangeCurrentFolder"}),", or ",(0,r.jsx)(n.code,{children:"ChangeToParentFolder"})," or ",(0,r.jsx)(n.code,{children:"BeginChangeToParentFolder"}),"/ ",(0,r.jsx)(n.code,{children:"EndChangeToParentFolder"})," methods to change the current working folder. The current working folder can be retrieved via the GetCurrentFolder or BeginGetCurrentFolder/ EndGetCurrentFolder methods."]}),"\n",(0,r.jsx)(n.h2,{id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",children:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient"}),"\n",(0,r.jsx)(n.p,{children:"The following example demonstrates how to send multiple files to an FTP server using the SendMultipleFiles method.  An asynchronous (non-blocking) demonstration is also available."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Ftp;\r\n  FtpClient ftp = new FtpClient();\r\n\r\n  // When using FtpClient, you can instruct\r\n  // the library to automatically redirect events on the main UI thread\r\n  // by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = this;\r\n\r\n  ftp.Connect( "localhost" );\r\n  ftp.Login();\r\n\r\n  ftp.SendMultipleFiles( @"d:\\*.txt", true, true );\r\n\r\n  ftp.Disconnect();\n'})})}),(0,r.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.Ftp\r\n\r\n  Dim ftp As New FtpClient()\r\n\r\n  \' When using FtpClient, you can instruct\r\n  \' the library to automatically redirect events on the main UI thread\r\n  \' by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = Me\r\n\r\n  ftp.Connect( "localhost" )\r\n  ftp.Login()\r\n\r\n  ftp.SendMultipleFiles( "d:\\*.txt", True, True )\r\n\r\n  ftp.Disconnect()\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"asynchronous-non-blocking-demonstration",children:"Asynchronous (non-blocking) demonstration"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the AsyncFtpClient class is now considered obsolete. It is therefore recommended to use ",(0,r.jsx)(n.code,{children:"FtpClient"})," and assign a ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," to its ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property to improve code readability."]})}),"\n",(0,r.jsxs)(n.p,{children:["The following example demonstrates how to asynchronously send multiple files to an FTP server using the ",(0,r.jsx)(n.code,{children:"BeginSendMultipleFiles"}),"/ ",(0,r.jsx)(n.code,{children:"EndSendMultipleFiles"})," methods and provide logging information during the process using the ",(0,r.jsx)(n.code,{children:"CommandSent"})," and ",(0,r.jsx)(n.code,{children:"ReplyReceived"})," events.  A synchronous (blocking) demonstration is also available."]}),"\n",(0,r.jsxs)(n.p,{children:['To clarify the code, instead of using callbacks, we will wait for completion of the operation before calling the matching "End" method. More information is available in the ',(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms application and threading topic"}),"."]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Ftp;\r\n\r\n  AsyncFtpClient ftp = new AsyncFtpClient();      \r\n  IAsyncResult result = ftp.BeginConnect( "localhost", null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndConnect( result );\r\n  result = ftp.BeginLogin( null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndLogin( result );\r\n  result = ftp.BeginSendMultipleFiles( @"d:\\*.txt", true, true, null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndSendMultipleFiles( result );\r\n  result = ftp.BeginDisconnect( null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndDisconnect( result );\n'})})}),(0,r.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.Ftp\r\n\r\n  Dim ftp As New AsyncFtpClient()\r\n  Dim result As IAsyncResult = ftp.BeginConnect("localhost", Nothing, Nothing)\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndConnect( result )\r\n  result = ftp.BeginLogin( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndLogin( result )\r\n  result = ftp.BeginSendMultipleFiles( "d:\\*.txt", True, True, Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndSendMultipleFiles( result )\r\n  result = ftp.BeginDisconnect( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndDisconnect( result )\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Are you using Xceed FTP for .NET in a WinForms application? Use the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class rather than the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want the FTP server to initiate the data connection rather than the FTP client? Set the ",(0,r.jsx)(n.code,{children:"PassiveTransfer"})," property to false."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want the file(s) to be sent in ASCII mode rather than binary? Set the ",(0,r.jsx)(n.code,{children:"RepresentationType"})," property to ASCII."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to decrease or increase the period of time after which an FTP operation should timeout? Change the value of the ",(0,r.jsx)(n.code,{children:"Timeout"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to create a log file of the FTP process? Set the ",(0,r.jsx)(n.code,{children:"TraceWriter"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to know the state of the FTP client? Check the ",(0,r.jsx)(n.code,{children:"Connected"})," and ",(0,r.jsx)(n.code,{children:"Busy"})," properties. You can also check the State property for specific state information. The ",(0,r.jsx)(n.code,{children:"StateChanged"})," event can also be used to know when the state of the FTP client changes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to know when a file is being sent? Handle the ",(0,r.jsx)(n.code,{children:"SendingFile"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to display progress information? Handle the ",(0,r.jsx)(n.code,{children:"FileTransferStatus"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to continue a multiple-file transfer (when using the ",(0,r.jsx)(n.code,{children:"SendMultipleFiles"})," method) when one or more of the files being transferred causes an error? Handle the ",(0,r.jsx)(n.code,{children:"MultipleFileTransferError"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to abort the FTP operation? Call the ",(0,r.jsx)(n.code,{children:"Abort"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to prevent routers from prematurely closing the command channel while a long data transfer is taking place. Set the ",(0,r.jsx)(n.code,{children:"KeepAliveInterval"})," property."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),o=t(34164),i=t(23104),s=t(56347),l=t(205),c=t(57485),a=t(31682),d=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=u(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,h]=f({queryString:t,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),x=(()=>{const e=a??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=l[t].value;o!==r&&(a(n),s(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(y,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);