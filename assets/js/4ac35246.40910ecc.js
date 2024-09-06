"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3179],{42507:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=i(74848),s=i(28453),r=i(11470),a=i(19365);const o={},l="Creating spanned zip files",d={id:"code-snippets/zipping/create-spanned-zip",title:"Creating spanned zip files",description:"Xceed Zip for .NET allows you to create zip files which can span random access drives such as diskettes, ZIP drives and CDs.",source:"@site/zip/code-snippets/zipping/create-spanned-zip.md",sourceDirName:"code-snippets/zipping",slug:"/code-snippets/zipping/create-spanned-zip",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-spanned-zip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Creating self-extracting zip files",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-self-extarcting-zip"},next:{title:"Creating split zip files",permalink:"/xceed-docs-words/zip/code-snippets/zipping/create-split-zip"}},c={},u=[{value:"Basic steps",id:"basic-steps",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Updating existing spanned zip files",id:"updating-existing-spanned-zip-files",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"creating-spanned-zip-files",children:"Creating spanned zip files"})}),"\n",(0,t.jsx)(n.p,{children:"Xceed Zip for .NET allows you to create zip files which can span random access drives such as diskettes, ZIP drives and CDs."}),"\n",(0,t.jsx)(n.h2,{id:"basic-steps",children:"Basic steps"}),"\n",(0,t.jsx)(n.p,{children:"To create a spanned zip file, the following steps must be performed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Retrieve a reference to a folder whose files will be added to the zip file, using either the ",(0,t.jsx)(n.code,{children:"DiskFolder"}),", ",(0,t.jsx)(n.code,{children:"ZippedFolder"}),", ",(0,t.jsx)(n.code,{children:"ZipArchive"}),", ",(0,t.jsx)(n.code,{children:"MemoryFolder"})," or ",(0,t.jsx)(n.code,{children:"IsolatedFolder"})," classes. With Xceed Zip for .NET, a folder is a folder; it does not matter if it is located within a zip file, on disk or in memory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create an instance of the ZipEvents class and subscribe to the DiskRequired event. In the ",(0,t.jsx)(n.code,{children:"DiskRequired"})," event handler, we will prompt the user to insert a new disk when needed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Retrieve a reference to a new or existing zip file using the ",(0,t.jsx)(n.code,{children:"ZipArchive"})," class. In the constructor of the ZipArchive class, be sure to pass the newly created ",(0,t.jsx)(n.code,{children:"ZipEvents"})," object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"AllowSpanning"})," property of the ",(0,t.jsx)(n.code,{children:"ZipArchive"})," to true (default is false). ",(0,t.jsxs)(n.strong,{children:["When updating a spanned zip file, ",(0,t.jsx)(n.code,{children:"AllowSpanning"})," must be set to true otherwise the zip file will no longer be spanned."]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.code,{children:"CopyFilesTo"})," method to copy the entire contents of the folder to the zip file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,t.jsx)(n.p,{children:"The following example demonstrates how to create a spanned zip file."}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  using Xceed.Zip;\r\n  using Xceed.FileSystem;\r\n  \r\n  DiskFolder source = new DiskFolder( @"c:\\windows\\fonts" );\r\n  \r\n  ZipEvents zipEvents = new ZipEvents();\r\n  zipEvents.DiskRequired += new DiskRequiredEventHandler( this.OnDiskRequired );\r\n  \r\n  ZipArchive zip = new ZipArchive( zipEvents, null, new DiskFile( @"a:\\test.zip" ) );\r\n  zip.AllowSpanning = true;\r\n  \r\n  source.CopyFilesTo( zipEvents, null, zip, true, true );\r\n  \r\n  // This method will handle the DiskRequired events that are raised.\r\n  //\r\n  // The code contained within this method is the suggested implementation to use when spanning.\r\n  private void OnDiskRequired( object sender, DiskRequiredEventArgs e )\r\n  {   \r\n    if( e.Action == DiskRequiredAction.Fail )\r\n    {\r\n      if( MessageBox.Show( "Disk #" + e.DiskNumber.ToString() + " is required.", "Disk Required", MessageBoxButtons.OKCancel ) == DialogResult.OK )\r\n        e.Action = DiskRequiredAction.Continue;\r\n      else\r\n        e.Action = DiskRequiredAction.Fail;\r\n    }\r\n  }\n'})})}),(0,t.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:'    Imports Xceed.Zip\r\n    Imports Xceed.FileSystem\r\n\r\n    Dim source As New DiskFolder("c:\\windows\\fonts")\r\n\r\n    Dim WithEvents zipEvents As New ZipEvents()\r\n    AddHandler zipEvents.DiskRequired, AddressOf Me.OnDiskRequired\r\n\r\n    Dim zip As New ZipArchive(zipEvents, Nothing, New DiskFile("a:\\test.zip"))\r\n    zip.AllowSpanning = true\r\n\r\n    source.CopyFilesTo( zipEvents, null, zip, true, true )\r\n\r\n    \' This method will handle the DiskRequired events that are raised.\r\n    \'\r\n    \' The code contained within this method is the suggested implementation to use when spanning.\r\n    Private Sub OnDiskRequired(ByVal sender As Object, ByVal e As DiskRequiredEventArgs)\r\n      If e.Action = DiskRequiredAction.Fail Then\r\n\r\n        If MessageBox.Show("Disk #" + e.DiskNumber.ToString() + " is required.", "Disk Required", MessageBoxButtons.OKCancel) = DialogResult.OK Then\r\n          e.Action = DiskRequiredAction.Continue\r\n        Else\r\n          e.Action = DiskRequiredAction.Fail\r\n        End If\r\n      End If\r\n    End Sub\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"updating-existing-spanned-zip-files",children:"Updating existing spanned zip files"}),"\n",(0,t.jsx)(n.p,{children:"When you are updating and existing spanned zip file, there are a few things that you must keep in mind :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The last disk ",(0,t.jsx)(n.strong,{children:"must"})," be in the drive before the update operation begins (when the instance of the ZipArchive class has been created)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The update process ",(0,t.jsx)(n.strong,{children:"will take longer"})," than if you are creating a new spanned zip file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The DiskRequired event will be raised more times than if you are creating a new spanned zip file."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the case where you update a spanned zip file but the resulting zip file contains less spanned parts, you can choose to delete the extra zip file parts (not the entire disk) after the new zip file has been created. This is done by checking for the ",(0,t.jsx)(n.em,{children:"Deleting"})," ",(0,t.jsx)(n.code,{children:"DiskRequiredReason"})," in the DiskRequired event and prompting your user to insert the appropriate disk so that the extra zip file part(s) can be deleted. Once the user has confirmed that the appropriate disk is in the drive, set the ",(0,t.jsx)(n.code,{children:"DiskRequiredAction"})," to Continue. Setting the Action to Fail will not cause the whole operation to fail, but only the deleting step to be skipped."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,t.jsx)(n.p,{children:"The main questions you should ask yourself when copying items to a zip file are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to prevent the creation of spanned zip files? Set the ",(0,t.jsx)(n.code,{children:"AllowSpanning"})," property to false (default)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to move items rather than copy them? Use the ",(0,t.jsx)(n.code,{children:"MoveTo"})," and ",(0,t.jsx)(n.code,{children:"MoveFilesTo"})," methods."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to change the location of the temporary folder. Set the ZipArchive's ",(0,t.jsx)(n.code,{children:"TempFolder"})," or ",(0,t.jsx)(n.code,{children:"DefaultTempFolder"})," property."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to filter (specify specific files and folders) the items that are to be added to the zip file? Use ",(0,t.jsx)(n.code,{children:"filters"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you only want to copy a specific file or folder? Use the ",(0,t.jsx)(n.code,{children:"CopyTo"})," method."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to add items into a specific folder within the self-extracting zip file? Create an instance of a ",(0,t.jsx)(n.code,{children:"ZippedFolder"})," object rather than a ",(0,t.jsx)(n.code,{children:"ZipArchive"})," object."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you only want to do basic zip file operations? Use the ",(0,t.jsx)(n.a,{href:"/zip/basic-concepts/quick-zip",children:"QuickZip"})," class."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Do you want to modify the default extra headers that are stored to a zip file? Set the ZipArchive's ",(0,t.jsx)(n.code,{children:"DefaultExtraHeaders"})," property."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["All zip files will automatically be created in the ",(0,t.jsx)(n.a,{href:"/zip/basic-concepts/zip64-zip-file-format",children:"Zip64 zip file format"})," if the limitations of the regular Zip format are reached."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var t=i(34164);const s={tabItem:"tabItem_Ymn6"};var r=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>z});var t=i(96540),s=i(34164),r=i(23104),a=i(56347),o=i(205),l=i(57485),d=i(31682),c=i(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:i}=e;const s=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:s}=e,r=p(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=f({queryString:i,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(i);return[s,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),g=(()=>{const e=d??x;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(74848);function j(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),s=o[i].value;s!==t&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:r}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function z(e){const n=(0,m.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);