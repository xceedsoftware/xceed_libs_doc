"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[611],{77301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=t(74848),r=t(28453),i=t(11470),l=t(19365);const a={},o="Removing items from a local folder",c={id:"code-snippets/working-with-classes-from-filesystem/file14",title:"Removing items from a local folder",description:"Items can be deleted using the Delete method. With the Xceed FileSystem, a folder is a folder regardless of if it is located on a local disk, in a zip file, in memory, or on an FTP server.",source:"@site/ftp/code-snippets/working-with-classes-from-filesystem/file14.md",sourceDirName:"code-snippets/working-with-classes-from-filesystem",slug:"/code-snippets/working-with-classes-from-filesystem/file14",permalink:"/xceed-docs-words/ftp/code-snippets/working-with-classes-from-filesystem/file14",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How to list specific files on an FTP server",permalink:"/xceed-docs-words/ftp/code-snippets/working-with-classes-from-filesystem/file13"},next:{title:"Working with the FtpClient interface",permalink:"/xceed-docs-words/ftp/category/working-with-the-ftpclient-interface"}},d={},u=[{value:"Events",id:"events",level:2},{value:"Things to consider",id:"things-to-consider",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"removing-items-from-a-local-folder",children:"Removing items from a local folder"})}),"\n",(0,s.jsxs)(n.p,{children:["Items can be deleted using the Delete method. With the ",(0,s.jsx)(n.code,{children:"Xceed FileSystem"}),", a folder is a folder regardless of if it is located on a local disk, in a zip file, in memory, or on an FTP server."]}),"\n",(0,s.jsx)(n.p,{children:"The following example demonstrates how to delete a file on a local drive using the steps listed below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create an instance of a ",(0,s.jsx)(n.code,{children:"DiskFile"})," which will represent the file on the local drive to delete."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify if the file exists prior to deleting it using the Exists property. If an attempt is made to delete a file that does not exist, an exception will be thrown."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delete the file by calling its ",(0,s.jsx)(n.code,{children:"Delete"})," method"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n\r\n  DiskFile file = new DiskFile( "c:\\\\test.txt" );\r\n\r\n  if( file.Exists )\r\n    file.Delete();\n'})})}),(0,s.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n\r\n  Dim file As New DiskFile( "c:\\test.txt" )\r\n\r\n  If file.Exists Then\r\n    file.Delete()\r\n  End If\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:["All methods exposed by the Xceed FileSystem's ",(0,s.jsx)(n.code,{children:"FileSystemItem"}),", ",(0,s.jsx)(n.code,{children:"AbstractFolder"}),", ",(0,s.jsx)(n.code,{children:"AbstractFile"}),", and derived classes have an overload that can be used when events are required. Events can be handled by creating an instance of the FileSystemEvents class and subscribing to the desired events. For example:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.FileSystem;\r\n\r\n  DiskFile file = new DiskFile( @"c:\\test.txt" );\r\n  FileSystemEvents events = new FileSystemEvents();\r\n  events.ByteProgression += new ByteProgressionEventHandler( this.byte_progression );\r\n  \r\n  if( file.Exists )\r\n    file.Delete( events, null );\r\n  \r\n  events.ByteProgression -= new ByteProgressionEventHandler( this.byte_progression );\r\n  \r\n  private void byte_progression( object sender, ByteProgressionEventArgs e )\r\n  {\r\n    System.Diagnostics.Debug.WriteLine( e.CurrentFileBytes.Percent.ToString() );\r\n  }\n'})})}),(0,s.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vb.NET",children:'  Imports Xceed.FileSystem\r\n\r\n  Dim file As New DiskFile("c:\\test.txt")\r\n  Dim events As New FileSystemEvents()\r\n  AddHandler events.ByteProgression, AddressOf Me.byte_progression\r\n\r\n  If file.Exists Then\r\n    file.Delete( events, Nothing )\r\n  End If\r\n\r\n  RemoveHandler events.ByteProgression, AddressOf Me.byte_progression\r\n\r\n  Private Sub byte_progression(ByVal sender As Object, ByVal e As ByteProgressionEventArgs)\r\n    System.Diagnostics.Debug.WriteLine(e.CurrentFileBytes.Percent.ToString())\r\n  End Sub\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"things-to-consider",children:"Things to consider"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Do you want to display progress information? Create an instance of the ",(0,s.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,s.jsx)(n.code,{children:"ByteProgression"})," and/or ",(0,s.jsx)(n.code,{children:"ItemProgression"})," events."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Do you want to display progress information when a folder is being scanned? Create an instance of the ",(0,s.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,s.jsx)(n.code,{children:"ScanningFolder"})," event."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Do you want to intervene when an error occurs with one or more of the items being manipulated? Create an instance of the ",(0,s.jsx)(n.code,{children:"FileSystemEvents"})," class and handle the ",(0,s.jsx)(n.code,{children:"ItemException"})," event."]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var s=t(96540),r=t(34164),i=t(23104),l=t(56347),a=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??p;return f({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=a[t].value;r!==s&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function j(e){const n=(0,v.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);