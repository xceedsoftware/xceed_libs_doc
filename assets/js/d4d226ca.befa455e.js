"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7261],{59649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(11470),o=t(19365);const l={},a="How to manually parse listing lines",c={id:"code-snippets/working-with-ftpclient-interface/file05",title:"How to manually parse listing lines",description:"Xceed FTP for .NET currently provides automatic support for listing the contents of AS400, DOS (Windows), UNIX and VMS FTP servers when calling the GetFolderContents method of the FtpClient class or the BeginGetFolderContents/ EndGetFolderContents methods of the AsyncFtpClient class. To modify or manually parse the listing lines returned by the FTP server, the ParsingListingLine event can be used, or a new listing parser added to the FTP client's ListingParsers collection.",source:"@site/ftp/code-snippets/working-with-ftpclient-interface/file05.md",sourceDirName:"code-snippets/working-with-ftpclient-interface",slug:"/code-snippets/working-with-ftpclient-interface/file05",permalink:"/xceed-docs-words/ftp/code-snippets/working-with-ftpclient-interface/file05",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to list the contents of an FTP folder",permalink:"/xceed-docs-words/ftp/code-snippets/working-with-ftpclient-interface/file04"},next:{title:"How to receive files",permalink:"/xceed-docs-words/ftp/code-snippets/working-with-ftpclient-interface/file06"}},d={},h=[{value:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient",id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",level:2},{value:"Asynchronous (non-blocking) demonstration",id:"asynchronous-non-blocking-demonstration",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-manually-parse-listing-lines",children:"How to manually parse listing lines"})}),"\n",(0,r.jsxs)(n.p,{children:["Xceed FTP for .NET currently provides automatic support for listing the contents of AS400, DOS (Windows), UNIX and VMS FTP servers when calling the ",(0,r.jsx)(n.code,{children:"GetFolderContents"})," method of the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class or the ",(0,r.jsx)(n.code,{children:"BeginGetFolderContents"}),"/ ",(0,r.jsx)(n.code,{children:"EndGetFolderContents"})," methods of the AsyncFtpClient class. To modify or manually parse the listing lines returned by the FTP server, the ParsingListingLine event can be used, or a new listing parser added to the FTP client's ListingParsers collection."]}),"\n",(0,r.jsxs)(n.p,{children:["Usually, if you only want to modify or filter the listing lines returned by the ",(0,r.jsx)(n.code,{children:"GetFolderContents"})," or ",(0,r.jsx)(n.code,{children:"BeginGetFolderContents"}),"/",(0,r.jsx)(n.code,{children:"EndGetFolderContents"})," methods, you would handle the ParsingListingLine event rather than creating a listing parser. If however you want to support the listing lines returned by an FTP server that is not automatically supported by Xceed FTP for .NET, then your best option would be to create a listing parser as it will make it easier to reuse your code."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class is now considered obsolete. It is therefore recommended to use ",(0,r.jsx)(n.code,{children:"FtpClient"})," instead to improve code readability.\r\n::"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When using Xceed FTP for .NET in a WinForms application, it is recommended that a SynchronizingObject be assigned to the SynchronizingObject property of the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class. For more information, jump to the ",(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms applications and threading topic"}),"."]})})]}),"\n",(0,r.jsxs)(n.p,{children:["To create a custom listing parser, create a class that derives from the ",(0,r.jsx)(n.code,{children:"FtpListingParser"})," class and override the ",(0,r.jsx)(n.code,{children:"ParseLine"})," method. In the ",(0,r.jsx)(n.code,{children:"ParseLine"})," method, parse the line that is received as a parameter to create and return a new ",(0,r.jsx)(n.code,{children:"FtpItemInfo"})," object that contains the FTP item's information. Once you have your custom listing parser, add it to the FTP client's ",(0,r.jsx)(n.code,{children:"ListingParsers"})," collection."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"GetFolderContents"})," and ",(0,r.jsx)(n.code,{children:"BeginGetFolderContents"}),"/",(0,r.jsx)(n.code,{children:"EndGetFolderContents"})," methods retrieve the entire (or filtered) contents of the FTP server's current working folder."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to retrieve the contents of another folder, you could use the ",(0,r.jsx)(n.code,{children:"ChangeCurrentFolder"})," or ",(0,r.jsx)(n.code,{children:"BeginChangeCurrentFolder"}),"/ ",(0,r.jsx)(n.code,{children:"EndChangeCurrentFolder"})," methods, or ",(0,r.jsx)(n.code,{children:"ChangeToParentFolder"})," or ",(0,r.jsx)(n.code,{children:"BeginChangeToParentFolder"}),"/ ",(0,r.jsx)(n.code,{children:"EndChangeToParentFolder"})," methods to change the current working folder. The current working folder can be retrieved via the ",(0,r.jsx)(n.code,{children:"GetCurrentFolder"})," or ",(0,r.jsx)(n.code,{children:"BeginGetCurrentFolder"}),"/ ",(0,r.jsx)(n.code,{children:"EndGetCurrentFolder"})," methods."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ReceiveMultipleFiles"})," and ",(0,r.jsx)(n.code,{children:"SendMultipleFiles"})," method will also raise the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event."]})}),"\n",(0,r.jsx)(n.h2,{id:"synchronous-blocking-and-asynchronous-non-blocking-demonstration-using-ftpclient",children:"Synchronous (blocking) and asynchronous (non-blocking) demonstration using FtpClient"}),"\n",(0,r.jsxs)(n.p,{children:["The following examples demonstrates how use the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"}),' event to manually parse the listing lines returned by an FTP server to remove the potential   "." and ".." items. An asynchronous (non-blocking) demonstration is also available.']}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  FtpClient ftp = new FtpClient();\r\n\r\n  // When using FtpClient, you can instruct\r\n  // the library to automatically redirect events on the main UI thread\r\n  // by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = this;\r\n\r\n  ftp.ParsingListingLine += new ParsingListingLineEventHandler( this.parsing_line );\r\n              \r\n  ftp.Connect( "localhost" );\r\n  ftp.Login();\r\n              \r\n  ftp.GetFolderContents();\r\n  \r\n  ftp.Disconnect();\r\n  \r\n  ftp.ParsingListingLine -= new ParsingListingLineEventHandler( this.parsing_line );\r\n              \r\n  private void parsing_line( object sender, ParsingListingLineEventArgs e )\r\n  {\r\n    if( ( e.Item.Name == "." ) || ( e.Item.Name == ".." ) )\r\n    {\r\n      e.Valid = false;\r\n    }\r\n    else\r\n    {\r\n      listBox1.Items.Add( e.Item.Name );        \r\n    } \r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Dim ftp As New FtpClient()\r\n\r\n  \' When using FtpClient, you can instruct\r\n  \' the library to automatically redirect events on the main UI thread\r\n  \' by setting the SynchronizingObject property.\r\n  ftp.SynchronizingObject = Me\r\n\r\n  AddHandler ftp.ParsingListingLine, AddressOf Me.parsing_line\r\n\r\n  ftp.Connect( "localhost" )\r\n  ftp.Login()\r\n\r\n  ftp.GetFolderContents()\r\n\r\n  ftp.Disconnect()\r\n\r\n  RemoveHandler ftp.ParsingListingLine, AddressOf Me.parsing_line\r\n\r\n  Private void parsing_line( ByVal sender As Object, _\r\n                            ByVal e As ParsingListingLineEventArgs )\r\n    If( e.Item.Name = "." ) Or ( e.Item.Name = ".." ) Then\r\n      e.Valid = False\r\n    Else\r\n      ListBox1.Items.Add( e.Item.Name )\r\n    End If\r\n  End Sub\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"asynchronous-non-blocking-demonstration",children:"Asynchronous (non-blocking) demonstration"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AsyncFtpClient"}),"'s methods now call the corresponding synchronous methods on a background thread. For this reason, the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class is now considered obsolete. It is therefore recommended to use FtpClient and assign a ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," to its ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property to improve code readability."]})}),"\n",(0,r.jsx)(n.p,{children:"The following example demonstrates how to list the entire contents of an FTP server's current working folder using the GetFolderContents method and provide logging information during the process using the CommandSent and ReplyReceived events. A synchronous (blocking) demonstration is also available."}),"\n",(0,r.jsxs)(n.p,{children:['To clarify the code, instead of using callbacks, we will wait for completion of the operation before calling the matching "End" method. More information is available in the ',(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/ftp-capabilities/ftp-client-interface/winform-apps-threading",children:"WinForms application and threading topic"}),"."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  AsyncFtpClient ftp = new AsyncFtpClient ();\r\n\r\n  ftp.ParsingListingLine += new ParsingListingLineEventHandler( this.parsing_line );            \r\n  IAsyncResult result = ftp.BeginConnect( "localhost", null, null);\r\n  \r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n  \r\n  ftp.EndConnect( result );\r\n  result = ftp.BeginLogin( null, null);\r\n  \r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n              \r\n  ftp.EndLogin( result );\r\n  result = ftp.BeginGetFolderContents( null, null);\r\n  \r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n  \r\n  ftp.EndGetFolderContents( result );\r\n  result = ftp.BeginDisconnect( null, null);\r\n  \r\n  while( !result.IsCompleted )\r\n    Application.DoEvents();\r\n  \r\n  ftp.EndDisconnect( result );\r\n  ftp.ParsingListingLine -= new ParsingListingLineEventHandler( this.parsing_line );\r\n              \r\n  private void parsing_line( object sender, ParsingListingLineEventArgs e )\r\n  {\r\n    if( ( e.Item.Name == "." ) || ( e.Item.Name == ".." ) )\r\n    {\r\n      e.Valid = false;\r\n    }\r\n    else\r\n    {\r\n      listBox1.Items.Add( e.Item.Name );        \r\n    } \r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Dim ftp As New AsyncFtpClient()\r\n\r\n  AddHandler ftp.ParsingListingLine, AddressOf Me.parsing_line\r\n\r\n  Dim result As IAsyncResult = ftp.BeginConnect("localhost", Nothing, Nothing)\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndConnect( result )\r\n  result = ftp.BeginLogin( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndLogin( result )\r\n  result = ftp.BeginGetFolderContents( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndGetFolderContents( result )\r\n  result = ftp.BeginDisconnect( Nothing, Nothing )\r\n\r\n  While Not result.IsCompleted\r\n    Application.DoEvents()\r\n  End While\r\n\r\n  ftp.EndDisconnect( result )\r\n  RemoveHandler ftp.ParsingListingLine, AddressOf Me.parsing_line\r\n\r\n  Private Sub parsing_line(ByVal sender As Object, ByVal e As ParsingListingLineEventArgs)\r\n    If (e.Item.Name = ".") Or (e.Item.Name = "..") Then\r\n      e.Valid = False\r\n    Else\r\n      ListBox1.Items.Add(e.Item.Name)\r\n    End If\r\n  End Sub\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Are you using Xceed FTP for .NET in a WinForms application? Use the ",(0,r.jsx)(n.code,{children:"AsyncFtpClient"})," class rather than the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to know the state of the FTP client? Check the ",(0,r.jsx)(n.code,{children:"Connected"})," and ",(0,r.jsx)(n.code,{children:"Busy"})," properties. You can also check the ",(0,r.jsx)(n.code,{children:"State"})," property for specific state information."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to prevent routers from prematurely closing the command channel while a long data transfer is taking place. Set the ",(0,r.jsx)(n.code,{children:"KeepAliveInterval"})," property."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),i=t(34164),s=t(23104),o=t(56347),l=t(205),a=t(57485),c=t(31682),d=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=g({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&a(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=l[t].value;i!==r&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function w(e){const n=(0,m.A)();return(0,v.jsx)(j,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);