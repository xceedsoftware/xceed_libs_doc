"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3816],{26171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453),i=t(11470),o=t(19365);const l={},a="How to list specific files on an FTP server",c={id:"code-snippets/working-with-classes-from-filesystem/file12",title:"How to list specific files on an FTP server",description:"The content of a folder on an FTP server (or of any other type of folder supported by the Xceed FileSystem) can be listed using the GetItems, GetFiles, or GetFolders methods. Using filters, the items that are listed can be limited by various criteria.",source:"@site/ftp/code-snippets/working-with-classes-from-filesystem/file12.md",sourceDirName:"code-snippets/working-with-classes-from-filesystem",slug:"/code-snippets/working-with-classes-from-filesystem/file12",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file12",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to list specific files on an FTP server",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file11"},next:{title:"How to list specific files on an FTP server",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file13"}},d={},h=[{value:"Events",id:"events",level:2},{value:"Things to consider",id:"things-to-consider",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-list-specific-files-on-an-ftp-server",children:"How to list specific files on an FTP server"})}),"\n",(0,r.jsxs)(n.p,{children:["The content of a folder on an FTP server (or of any other type of folder supported by the ",(0,r.jsx)(n.code,{children:"Xceed FileSystem"}),") can be listed using the GetItems, ",(0,r.jsx)(n.code,{children:"GetFiles"}),", or ",(0,r.jsx)(n.code,{children:"GetFolders"})," methods. Using filters, the items that are listed can be limited by various criteria."]}),"\n",(0,r.jsx)(n.p,{children:'The following example demonstrates how to retrieve a listing of all ".txt" files located in an FTP server\'s current working directory using the steps listed below:'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an instance of the FtpConnection class to establish a connection between the client and the FTP server. If you are using FtpConnection in a UI application, assign your form (or any other control that implements the ISynchronizeInvoke interface) to the SynchronizingObject property and call ",(0,r.jsx)(n.code,{children:"Application.DoEvents"})," in an event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an instance of an ",(0,r.jsx)(n.code,{children:"FtpFolder"})," which will represent the folder on the FTP server whose content to list. If a folder name is not specified, the folder will represent the current working folder."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Call the FtpFolder's ",(0,r.jsx)(n.code,{children:"GetFiles"}),' method to retrieve a listing of all the ".txt" files contained in the FTP folder and loop through the collection to print the list.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispose of the FtpConnection once the operation is completed by calling its Dispose method or, in C#, by creating the FtpConnection instance in using blocks. If an instance of an FtpConnection object is not disposed of, connections with the FTP server may remain active until the FTP server times-out or the garbage-collector passes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When dealing with case sensitive sources or destinations such as FTP servers, it is up to the user to pass a valid string to the method being called. For more information in case sensitivity, jump to the Case sensitivity topic."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n  using Xceed.Ftp;\r\n  \r\n  using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n  {        \r\n    FtpFolder folder = new FtpFolder( connection );\r\n  \r\n    foreach( AbstractFile item in folder.GetFiles( true, new NameFilter( "*.txt" ) ) )\r\n    {\r\n      System.Diagnostics.Debug.WriteLine( item.FullName );\r\n    }\r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n  Imports Xceed.Ftp\r\n\r\n  Dim connection As FtpConnection\r\n\r\n  Try\r\n    connection = New FtpConnection( "ftp.server.com" )\r\n\r\n    Dim folder As New FtpFolder(connection)\r\n\r\n    Dim item As AbstractFile\r\n    For Each item In folder.GetFiles( True, New NameFilter( "*.txt" ) )\r\n      System.Diagnostics.Debug.WriteLine( item.FullName )\r\n    Next item\r\n\r\n  Finally\r\n    connection.Dispose()\r\n  End Try\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["All methods exposed by the Xceed FileSystem's ",(0,r.jsx)(n.code,{children:"FileSystemItem"}),", ",(0,r.jsx)(n.code,{children:"AbstractFolder"}),", ",(0,r.jsx)(n.code,{children:"AbstractFile"}),", and derived classes have an overload that can be used when events are required."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are using ",(0,r.jsx)(n.code,{children:"FtpConnection"})," in a UI application, assign your form (or any other control that implements the ",(0,r.jsx)(n.code,{children:"ISynchronizeInvoke"})," interface) to the ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property and call ",(0,r.jsx)(n.code,{children:"Application.DoEvents"})," in an event."]}),"\n",(0,r.jsxs)(n.p,{children:["With the exception of the FtpConnection's ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event, events can be handled by creating an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and subscribing to the desired events. For example:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n  using Xceed.Ftp;\r\n\r\n  using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n  {         \r\n    //When using FtpConnection in a UI application\r\n    connection.SynchronizingObject = this;\r\n\r\n    FileSystemEvents events = new FileSystemEvents();\r\n    events.ScanningFolder += new ScanningFolderEventHandler( this.scanning_folder );\r\n\r\n    FtpFolder folder = new FtpFolder( connection );\r\n\r\n    foreach( AbstractFile item in folder.GetFiles( events, null, true, new NameFilter( "*.txt" ) ) )\r\n    {\r\n      System.Diagnostics.Debug.WriteLine( item.FullName );\r\n    }\r\n\r\n    events.ScanningFolder -= new ScanningFolderEventHandler( this.scanning_folder );\r\n  }\r\n\r\n  private void scanning_folder( object sender, ScanningFolderEventArgs e )\r\n  {\r\n    Application.DoEvents();\r\n    System.Diagnostics.Debug.WriteLine( e.CurrentItem.Name );\r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n  Imports Xceed.Ftp\r\n\r\n  Dim connection As FtpConnection\r\n  Dim events As FileSystemEvents\r\n\r\n  Try\r\n    connection = New FtpConnection( "ftp.server.com" )\r\n    \'When using FtpConnection in a UI application\r\n    connection.SynchronizingObject = Me\r\n\r\n    events = New FileSystemEvents\r\n    AddHandler events.ScanningFolder, AddressOf Me.scanning_folder\r\n\r\n    Dim folder As New FtpFolder(connection)\r\n\r\n    Dim item As AbstractFile\r\n    For Each item In folder.GetFiles( events, Nothing, True, New NameFilter( "*.txt" ) )\r\n      System.Diagnostics.Debug.WriteLine( item.FullName )\r\n    Next item\r\n\r\n  Finally\r\n    connection.Dispose()\r\n    RemoveHandler events.ScanningFolder, AddressOf Me.scanning_folder\r\n  End Try\r\n\r\n  Private Sub scanning_folder(ByVal sender As Object, ByVal e As ScanningFolderEventArgs)\r\n    Application.DoEvents()\r\n    System.Diagnostics.Debug.WriteLine(e.CurrentItem.Name)\r\n  End Sub\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"things-to-consider",children:"Things to consider"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to retrieve a listing that contains only files? Use the ",(0,r.jsx)(n.code,{children:"GetFiles"})," method instead of the ",(0,r.jsx)(n.code,{children:"GetItems"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to retrieve a listing that contains only folders? Use the ",(0,r.jsx)(n.code,{children:"GetFolders"})," method instead of the ",(0,r.jsx)(n.code,{children:"GetItems"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want the FTP server to initiate the data connection rather than the client-side? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"PassiveTransfer"})," property to false."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to decrease or increase the period of time after which an FTP operation should timeout? Change the value of the FtpConnection's ",(0,r.jsx)(n.code,{children:"Timeout"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to create a log file of the FTP process? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"TraceWriter"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be listed? Use ",(0,r.jsx)(n.a,{href:"/ftp/basic-concepts/filters/overview",children:"filters"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to display progress information? Create an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ByteProgression and/or ",(0,r.jsx)(n.code,{children:"ItemProgression"})," events."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to display progress information when a folder is being scanned? Create an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,r.jsx)(n.code,{children:"ScanningFolder"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to intervene when an error occurs with one or more of the items being manipulated? Create an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,r.jsx)(n.code,{children:"ItemException"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to prevent routers from prematurely closing the command channel while a long data transfer is taking place. Set the ",(0,r.jsx)(n.code,{children:"KeepAliveInterval"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want quick and easy access to FTP functionalities in the same style as the ActiveX version of the Xceed FTP Library? Use the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class instead. ",(0,r.jsx)(n.strong,{children:"(Note: The AsyncFtpClient should now be considered obsolete. Instead, use the FtpClient class, assigning a value to its SynchronizingObject property.)"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),s=t(34164),i=t(23104),o=t(56347),l=t(205),a=t(57485),c=t(31682),d=t(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=f({queryString:t,groupId:s}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),s=l[t].value;s!==r&&(c(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function F(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function j(e){const n=(0,v.A)();return(0,x.jsx)(F,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);