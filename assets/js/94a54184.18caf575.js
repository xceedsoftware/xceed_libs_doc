"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[623],{18331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(74848),r=t(28453),s=t(11470),i=t(19365);const a={},l="How to send custom commands",c={id:"code-snippets/working-with-ftpclient-interface/file07",title:"How to send custom commands",description:"The SendCustomCommand method of the FtpClient class and the BeginSendCustomCommand/ EndSendCustomCommand methods of the AsyncFtpClient class are used to send custom FTP commands to an FTP server. This means that commands that can be used from the command prompt FTP, although they might be recognized by some FTP servers, are not guaranteed to work.",source:"@site/ftp/code-snippets/working-with-ftpclient-interface/file07.md",sourceDirName:"code-snippets/working-with-ftpclient-interface",slug:"/code-snippets/working-with-ftpclient-interface/file07",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-ftpclient-interface/file07",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to receive files",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-ftpclient-interface/file06"},next:{title:"How to send files",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-ftpclient-interface/file08"}},d={},u=[{value:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient",id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",level:2},{value:"Asynchronous (non-blocking) demonstration",id:"asynchronous-non-blocking-demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"how-to-send-custom-commands",children:"How to send custom commands"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SendCustomCommand"})," method of the FtpClient class and the ",(0,o.jsx)(n.code,{children:"BeginSendCustomCommand"}),"/ ",(0,o.jsx)(n.code,{children:"EndSendCustomCommand"})," methods of the AsyncFtpClient class are used to send custom FTP commands to an FTP server. This means that commands that can be used from the command prompt FTP, although they might be recognized by some FTP servers, are not guaranteed to work."]}),"\n",(0,o.jsxs)(n.p,{children:["Not all commands are supported by all FTP servers. In order to determine which commands are supported, you can use the ",(0,o.jsx)(n.code,{children:"SendCustomCommand"})," or ",(0,o.jsx)(n.code,{children:"BeginSendCustomCommand"}),"/",(0,o.jsx)(n.code,{children:"EndSendCustomCommand"}),' methods to send the "HELP" command.']}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"SendCustomCommand"})," and ",(0,o.jsx)(n.code,{children:"BeginSendCustomCommand"}),"/",(0,o.jsx)(n.code,{children:"EndSendCustomCommand"})," methods do not support custom commands that require a data connection such as STOR (SendFile, ",(0,o.jsx)(n.code,{children:"BeginSendFile"}),"/ ",(0,o.jsx)(n.code,{children:"EndSendFile"}),"), RETR (",(0,o.jsx)(n.code,{children:"ReceiveFile"}),", ",(0,o.jsx)(n.code,{children:"BeginReceiveFile"}),"/ ",(0,o.jsx)(n.code,{children:"EndReceiveFile"}),"), NLST and LIST ( ",(0,o.jsx)(n.code,{children:"GetFolderContents"}),", ",(0,o.jsx)(n.code,{children:"BeginGetFolderContents"}),"/ ",(0,o.jsx)(n.code,{children:"EndGetFolderContents"}),"), etc. For a complete list of the FTP commands that can be sent to an FTP server using either the ",(0,o.jsx)(n.code,{children:"SendCustomCommand"})," and ",(0,o.jsx)(n.code,{children:"BeginSendCustomCommand"}),"/",(0,o.jsx)(n.code,{children:"EndSendCustomCommand"})," methods or another of the FtpClient's methods/properties, refer to the FTP commands glossary topic."]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the ",(0,o.jsx)(n.code,{children:"AsyncFtpClient"})," class is now considered obsolete. It is therefore recommended to use ",(0,o.jsx)(n.code,{children:"FtpClient"})," instead to improve code readability.\r\n::"]}),(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When using Xceed FTP for .NET in a WinForms application, it is recommended that a SynchronizingObject be assigned to the SynchronizingObject property of the ",(0,o.jsx)(n.code,{children:"FtpClient"})," class. For more information, jump to the ",(0,o.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms applications and threading topic"}),"."]})})]}),"\n",(0,o.jsx)(n.h2,{id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",children:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient"}),"\n",(0,o.jsxs)(n.p,{children:['The following example demonstrates how to send the "HELP" command to an FTP server using the ',(0,o.jsx)(n.code,{children:"SendCustomCommand"})," method. An asynchronous (non-blocking) demonstration is also available further below."]}),"\n",(0,o.jsxs)(s.A,{children:[(0,o.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Ftp;\r\n\r\n  FtpClient ftp = new FtpClient();\r\n\r\n  // When using FtpClient, you can instruct\r\n  // the library to automatically redirect events on the main UI thread\r\n  // by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = this;\r\n\r\n  ftp.Connect( "localhost" );    \r\n  ftp.Login();  \r\n\r\n  string reply = ftp.SendCustomCommand( "HELP" );\r\n  MessageBox.Show( reply );\r\n\r\n  ftp.Disconnect();\n'})})}),(0,o.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.Ftp\r\n\r\n  \' When using FtpClient, you can instruct\r\n  \' the library to automatically redirect events on the main UI thread\r\n  \' by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = Me\r\n\r\n  Dim ftp As New FtpClient()\r\n  \r\n  ftp.Connect( "localhost" )\r\n  ftp.Login()\r\n\r\n  Dim reply As String = ftp.SendCustomCommand( "HELP" )\r\n  MessageBox.Show( reply )\r\n\r\n  ftp.Disconnect()\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"asynchronous-non-blocking-demonstration",children:"Asynchronous (non-blocking) demonstration"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the AsyncFtpClient class is now considered obsolete. It is therefore recommended to use ",(0,o.jsx)(n.code,{children:"FtpClient"})," and assign a ",(0,o.jsx)(n.code,{children:"SynchronizingObject"})," to its ",(0,o.jsx)(n.code,{children:"SynchronizingObject"})," property to improve code readability."]})}),"\n",(0,o.jsx)(n.p,{children:'The following example demonstrates how to asynchronously send the "HELP" command to an FTP server using the BeginSendCustomCommand/ EndSendCustomCommand methods. A synchronous (non-blocking) demonstration is also available.'}),"\n",(0,o.jsxs)(n.p,{children:['To clarify the code, instead of using callbacks, we will wait for completion of the operation before calling the matching "End" method. More information is available in the ',(0,o.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms application and threading topic"}),"."]}),"\n",(0,o.jsxs)(s.A,{children:[(0,o.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Ftp;\r\n\r\n  AsyncFtpClient ftp = new AsyncFtpClient();\r\n\r\n  IAsyncResult result = ftp.BeginConnect( "localhost", null, null );    \r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndConnect( result );\r\n  result = ftp.BeginLogin( null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n    \r\n  ftp.EndLogin( result );\r\n  result = ftp.BeginSendCustomCommand( "HELP", null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  string reply = ftp.EndSendCustomCommand( result );\r\n  MessageBox.Show( reply );\r\n                                                  \r\n  result = ftp.BeginDisconnect( null, null );\r\n\r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n\r\n  ftp.EndDisconnect( result );\n'})})}),(0,o.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.Ftp\r\n\r\n  Dim ftp As New AsyncFtpClient()\r\n  Dim result As IAsyncResult = ftp.BeginConnect("localhost", Nothing, Nothing)\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndConnect( result )\r\n  result = ftp.BeginLogin( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndLogin( result )\r\n  result = ftp.BeginSendCustomCommand( "HELP", Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  Dim reply As String = ftp.EndSendCustomCommand(result)\r\n  MessageBox.Show( reply )\r\n\r\n  result = ftp.BeginDisconnect( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndDisconnect( result )\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Are you using Xceed FTP for .NET in a WinForms application? Use the ",(0,o.jsx)(n.code,{children:"AsyncFtpClient"})," class rather than the ",(0,o.jsx)(n.code,{children:"FtpClient"})," class."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(96540),r=t(34164),s=t(23104),i=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var C=t(74848);function y(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,C.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,C.jsx)(y,{...n,...e}),(0,C.jsx)(x,{...n,...e})]})}function j(e){const n=(0,g.A)();return(0,C.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);