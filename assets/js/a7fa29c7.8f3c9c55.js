"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6190],{56883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),o=t(11470),i=t(19365);const a={},l="How to display the content of a file on an FTP server",c={id:"code-snippets/working-with-classes-from-filesystem/file09",title:"How to display the content of a file on an FTP server",description:"The content of a file located on an FTP server (or to any other type of file supported by the Xceed FileSystem) can be displayed using the OpenRead method.",source:"@site/ftp/code-snippets/working-with-classes-from-filesystem/file09.md",sourceDirName:"code-snippets/working-with-classes-from-filesystem",slug:"/code-snippets/working-with-classes-from-filesystem/file09",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file09",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to copy memory data to a file on an FTP server",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file08"},next:{title:"How to list all items on an FTP server",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file10"}},d={},u=[{value:"Things to consider",id:"things-to-consider",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-display-the-content-of-a-file-on-an-ftp-server",children:"How to display the content of a file on an FTP server"})}),"\n",(0,r.jsxs)(n.p,{children:["The content of a file located on an FTP server (or to any other type of file supported by the ",(0,r.jsx)(n.code,{children:"Xceed FileSystem"}),") can be displayed using the ",(0,r.jsx)(n.code,{children:"OpenRead"})," method."]}),"\n",(0,r.jsx)(n.p,{children:"The following example demonstrates how to display the content of a file located on an FTP server using the steps listed below:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create an instance of the FtpConnection class to establish a connection between the client and the FTP server. If you are using FtpConnection in a UI application, assign your form (or any other control that implements the ISynchronizeInvoke interface) to the SynchronizingObject property and call Application.DoEvents in an event such as ByteProgression."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create an instance of an FtpFile which will represent the file on the FTP server whose content is to be displayed. By default, the file is assumed to be located in the current working folder."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Retrieve a stream to the file on the FTP server using the FtpFile's OpenRead method specifying the RepresentationType with which the data will be retrieved. The stream returned by the OpenRead method is not seekable."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Since the stream returned by the OpenRead method is not seekable (meaning that neither the length or position can be retrieved), data can be read by either looping through the stream until the end of the stream has been reached, or a StreamReader can be created around the stream to read the data."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Because the stream was opened using the Ascii RepresentationType, we will encode the data with the same encoding."})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispose of the stream using its Dispose method."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dispose of the FtpConnection once the file transfer is completed by calling its Dispose method or, in C#, by creating the FtpConnection instance in a using block. If an instance of an FtpConnection object is not disposed of, connections with the FTP server may remain active until the FTP server times-out or the garbage-collector passes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n  using Xceed.Ftp;\r\n  \r\n  using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n  {        \r\n    //When using FtpConnection in a UI application\r\n    connection.SynchronizingObject = this;\r\n\r\n    FtpFile file = new FtpFile( connection, "test.txt" );\r\n  \r\n    using( System.IO.Stream stream = file.OpenRead( RepresentationType.Ascii ) )\r\n    {\r\n      System.IO.StreamReader reader = new System.IO.StreamReader( stream, System.Text.Encoding.ASCII );\r\n      System.Diagnostics.Debug.WriteLine( reader.ReadToEnd() );\r\n    }\r\n  }\n'})})}),(0,r.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n  Imports Xceed.Ftp\r\n\r\n  Dim connection As FtpConnection\r\n  Dim stream As System.IO.Stream\r\n\r\n  Try\r\n    connection = New FtpConnection( "ftp.server.com" )\r\n    \'When using FtpConnection in a UI application \r\n    connection.SynchronizingObject = Me\r\n\r\n    Dim file As New FtpFile(connection, "test.txt")\r\n    stream = file.OpenRead( RepresentationType.Ascii )\r\n\r\n    Dim reader As New System.IO.StreamReader(stream, System.Text.Encoding.ASCII)\r\n    System.Diagnostics.Debug.WriteLine( reader.ReadToEnd() )\r\n\r\n  Finally\r\n    stream.Close()\r\n    connection.Dispose()\r\n  End Try\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"things-to-consider",children:"Things to consider"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want the FTP server to initiate the data connection rather than the client-side? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"PassiveTransfer"})," property to false."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to decrease or increase the period of time after which an FTP operation should timeout? Change the value of the FtpConnection's ",(0,r.jsx)(n.code,{children:"Timeout"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to create a log file of the FTP process? Set the FtpConnection's ",(0,r.jsx)(n.code,{children:"TraceWriter"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to intervene when an error occurs with one or more of the items being manipulated? Create an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,r.jsx)(n.code,{children:"ItemException"})," event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want to prevent routers from prematurely closing the command channel while a long data transfer is taking place. Set the ",(0,r.jsx)(n.code,{children:"KeepAliveInterval"})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Do you want quick and easy access to FTP functionalities in the same style as the ActiveX version of the Xceed FTP Library? Use the ",(0,r.jsx)(n.code,{children:"FtpClient"})," class instead. ",(0,r.jsx)(n.strong,{children:"(Note: The AsyncFtpClient should now be considered obsolete. Instead, use the FtpClient class, assigning a value to its SynchronizingObject property.)"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),s=t(34164),o=t(23104),i=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),y=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);