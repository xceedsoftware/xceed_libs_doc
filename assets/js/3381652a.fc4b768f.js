"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[8084],{71876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(11470),o=t(19365);const a={},l="How to list specific files on an FTP server",c={id:"code-snippets/working-with-classes-from-filesystem/file13",title:"How to list specific files on an FTP server",description:"Xceed FTP for .NET currently provides automatic support for listing the contents of AS400, DOS (Windows), UNIX and VMS FTP servers when calling the GetItems, GetFiles, or GetFolders methods. To modify or manually parse the listing lines returned by the FTP server, the ParsingListingLine event can be used, or a new listing parser added to the FTP connection's ListingParsers collection.",source:"@site/ftp/code-snippets/working-with-classes-from-filesystem/file13.md",sourceDirName:"code-snippets/working-with-classes-from-filesystem",slug:"/code-snippets/working-with-classes-from-filesystem/file13",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file13",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to list specific files on an FTP server",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file12"},next:{title:"Removing items from a local folder",permalink:"/xceed-libs-doc/ftp/code-snippets/working-with-classes-from-filesystem/file14"}},d={},u=[{value:"Events",id:"events",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"how-to-list-specific-files-on-an-ftp-server",children:"How to list specific files on an FTP server"})}),"\n",(0,r.jsxs)(n.p,{children:["Xceed FTP for .NET currently provides automatic support for listing the contents of AS400, DOS (Windows), UNIX and VMS FTP servers when calling the ",(0,r.jsx)(n.code,{children:"GetItems"}),", ",(0,r.jsx)(n.code,{children:"GetFiles"}),", or ",(0,r.jsx)(n.code,{children:"GetFolders"})," methods. To modify or manually parse the listing lines returned by the FTP server, the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event can be used, or a new listing parser added to the FTP connection's ListingParsers collection."]}),"\n",(0,r.jsxs)(n.p,{children:["Usually, if you only want to modify or filter the listing lines returned by the ",(0,r.jsx)(n.code,{children:"GetItems"}),", ",(0,r.jsx)(n.code,{children:"GetFiles"})," or ",(0,r.jsx)(n.code,{children:"GetFolders"})," methods, you would handle the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event rather than creating a listing parser. If however, you want to support the listing lines returned by an FTP server that is not automatically supported by Xceed FTP for .NET, then your best option would be to create a listing parser as it will make it easier to reuse your code."]}),"\n",(0,r.jsx)(n.p,{children:"To create a custom listing parser, create a class that derives from the FtpListingParser class and override the ParseLine method. In the ParseLine method, parse the line that is received as a parameter to create and return a new FtpItemInfo object that contains the FTP item's information. Once you have your custom listing parser, add it to the FTP connection's ListingParsers collection."}),"\n",(0,r.jsxs)(n.p,{children:["The following example demonstrates how use the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"}),' event to manually parse the listing lines returned by an FTP server to remove the potential   "." and ".." items:']}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an instance of the ",(0,r.jsx)(n.code,{children:"FtpConnection"})," class to establish a connection between the client and the FTP server. If you are using ",(0,r.jsx)(n.code,{children:"FtpConnection"})," in a UI application, assign your form (or any other control that implements the ISynchronizeInvoke interface) to the SynchronizingObject property and call ",(0,r.jsx)(n.code,{children:"Application.DoEvents"})," in an event."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Subscribe to the FtpConnection's ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event. In your ",(0,r.jsx)(n.code,{children:"ParsingListingLine"}),' event handler, remove any instances of "." and ".." by setting the Valid parameter to false if one of them are encountered.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create an instance of an FtpFolder which will represent the folder on the FTP server whose content to list. If a folder name is not specified, the folder will represent the current working folder."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Call the FtpFolder's ",(0,r.jsx)(n.code,{children:"GetItems"})," method to list the contents of the FtpFolder. The contents of the FtpFolder will be listed via the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event rather than looping through the collection of ",(0,r.jsx)(n.code,{children:"FileSystemItems"})," returned by the ",(0,r.jsx)(n.code,{children:"GetItems"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dispose of the ",(0,r.jsx)(n.code,{children:"FtpConnection"})," once the file transfer is completed by calling its Dispose method or, in C#, by creating the FtpConnection instance in a using block. If an instance of an ",(0,r.jsx)(n.code,{children:"FtpConnection"})," object is not disposed of, connections with the FTP server may remain active until the FTP server times-out or the garbage-collector passes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n  using Xceed.Ftp;\r\n  \r\n  using( FtpConnection connection = new FtpConnection( "ftp.server.com" ) )\r\n  {\r\n    //When using FtpConnection in a UI application\r\n    connection.SynchronizingObject = this;\r\n\r\n    connection.ParsingListingLine += new ParsingListingLineEventHandler( this.parsing_listingline );\r\n  \r\n    FtpFolder folder = new FtpFolder( connection );\r\n    folder.GetItems( true );       \r\n  \r\n    connection.ParsingListingLine -= new ParsingListingLineEventHandler( this.parsing_listingline );\r\n  }  \r\n  \r\n  private void parsing_listingline( object sender, ParsingListingLineEventArgs   e )\r\n  {\r\n    if( ( e.Item.Name == "." ) || ( e.Item.Name == ".." ) )\r\n    {\r\n      e.Valid = false;\r\n    }\r\n    else\r\n    {\r\n      System.Diagnostics.Debug.WriteLine( e.Item.Name );        \r\n    }  \r\n  }\n'})})}),(0,r.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n  Imports Xceed.Ftp\r\n\r\n  Dim connection As FtpConnection\r\n\r\n  Try\r\n    connection = New FtpConnection( "ftp.server.com" )\r\n    AddHandler connection.ParsingListingLine, AddressOf Me.parsing_listingline \r\n\r\n    \'When using FtpConnection in a UI application\r\n    connection.SynchronizingObject = Me\r\n\r\n    Dim folder As New FtpFolder( connection )\r\n    folder.GetItems( True )\r\n  Finally\r\n    RemoveHandler connection.ParsingListingLine, AddressOf Me.parsing_listingline\r\n    connection.Dispose()\r\n  End Try\r\n\r\n  Private Sub parsing_listingline( ByVal sender As Object, ByVal e As ParsingListingLineEventArgs  )\r\n    If ( e.Item.Name = "." ) Or ( e.Item.Name = ".." ) Then\r\n      e.Valid = False\r\n    Else\r\n      System.Diagnostics.Debug.WriteLine( e.Item.Name )      \r\n    End If  \r\n  End Sub\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["Contrary to other events which are subscribed to by creating an instance of a ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class, the ",(0,r.jsx)(n.code,{children:"ParsingListingLine"})," event can only be subscribed to via the ",(0,r.jsx)(n.code,{children:"FtpConnection"})," instance. If any other events are required, an instance of the ",(0,r.jsx)(n.code,{children:"FileSystemEvents"})," class must be created and the desired events subscribed to."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are using ",(0,r.jsx)(n.code,{children:"FtpConnection"})," in a UI application, assign your form (or any other control that implements the ",(0,r.jsx)(n.code,{children:"ISynchronizeInvoke"})," interface) to the ",(0,r.jsx)(n.code,{children:"SynchronizingObject"})," property and call ",(0,r.jsx)(n.code,{children:"Application.DoEvents"})," in an event."]}),"\n",(0,r.jsxs)(n.p,{children:["All methods exposed by the Xceed FileSystem's ",(0,r.jsx)(n.code,{children:"FileSystemItem"}),", ",(0,r.jsx)(n.code,{children:"AbstractFolder"}),", ",(0,r.jsx)(n.code,{children:"AbstractFile"}),", and derived classes have an overload that can be used when events are required."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),i=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==r&&(c(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);