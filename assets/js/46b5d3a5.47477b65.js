"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[6695],{19627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453),i=n(11470),a=n(19365);const o={},l="Uncompressing a file with QuickGZip",c={id:"code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip",title:"Uncompressing a file with QuickGZip",description:"This topic demonstrates how to uncompress a file using the static Ungzip method of the QuickGZip class, specifying several parameters.",source:"@site/zip/code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip.md",sourceDirName:"code-snippets/tar-gzip-capabilities/reading",slug:"/code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/reading/uncompress-quickgzip",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Listing the contents of a Tar archive with QuickTar",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/reading/listing-tar-quicktar"},next:{title:"Listing the contents of a gzipped file with QuickGZip",permalink:"/xceed-libs-doc/zip/code-snippets/tar-gzip-capabilities/reading/list-gzipped-quickgzip"}},u={},d=[{value:"GZip method",id:"gzip-method",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Things you should consider",id:"things-you-should-consider",level:2}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"uncompressing-a-file-with-quickgzip",children:"Uncompressing a file with QuickGZip"})}),"\n",(0,r.jsxs)(t.p,{children:["This topic demonstrates how to uncompress a file using the static ",(0,r.jsx)(t.code,{children:"Ungzip"})," method of the ",(0,r.jsx)(t.code,{children:"QuickGZip"})," class, specifying several parameters."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"QuickGZip is not currently available in Xceed's Compact Framework products."})}),"\n",(0,r.jsx)(t.h2,{id:"gzip-method",children:"GZip method"}),"\n",(0,r.jsx)(t.p,{children:"The Ungzip method has a few overloads that can be used to uncompress files."}),"\n",(0,r.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,r.jsx)(t.p,{children:"In the following example, we specify several parameters and also use some callbacks."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.GZip;\r\n\r\n  QuickGZip.Ungzip(@"d:\\test.gz", @"d:\\", true, new QuickGZip.ByteProgressionCallback(this.OnByteProgression),\r\n                  new QuickGZip.ItemProgressionCallback(this.OnItemProgression), null, "*");\r\n\r\n  public void OnByteProgression( string currentItemName, long currentItemsByteProcessed,\r\n                                long currentItemTotalBytes, byte currentItemPercent,\r\n                                long allItemsByteProcessed, long allItemsTotalBytes,\r\n                                byte allItemsPercent,  object userParams)\r\n  { \r\n    //Do stuff\r\n  }\r\n\r\n  public void OnItemProgression( string currentItemName, long itemProcessed,\r\n                                long totalItemCount, byte totalItemPercent,\r\n                                ref bool abort, object userParams)\r\n  { \r\n    //Do stuff\r\n  }\n'})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Imports Xceed.GZip\r\n\r\n  QuickGZip.Ungzip("d:\\test.gz", "d:\\", True, New QuickGZip.ByteProgressionCallback( AddressOf Me.OnByteProgression), _\r\n                  New QuickGZip.ItemProgressionCallback(AddressOf Me.OnItemProgression), _\r\n                  Nothing, "*")\r\n\r\n  Public Sub OnByteProgression(ByVal currentItemName As String, ByVal  currentItemsByteProcessed As Long, _\r\n                              ByVal currentItemTotalBytes As Long, ByVal currentItemPercent As Byte, _\r\n                              ByVal allItemsByteProcessed As Long, ByVal allItemsTotalBytes As Long, _\r\n                              ByVal allItemsPercent As Byte, ByVal userParams As Object) \r\n    \'Do stuff\r\n  End Sub\r\n\r\n  Public Sub OnItemProgression(ByVal currentItemName As String, ByVal itemProcessed As Long, _\r\n                              ByVal totalItemCount As Long, ByVal totalItemPercent As Byte, _\r\n                              ByRef abort As Boolean, ByVal userParams As Object)\r\n    \'Do stuff\r\n  End Sub\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"QuickGZip only supports uncompressing a single file from a gzipped file."}),"\n",(0,r.jsx)(t.h2,{id:"things-you-should-consider",children:"Things you should consider"}),"\n",(0,r.jsx)(t.p,{children:"The main questions you should ask yourself when uncompressing an item with Ungzip are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Do you want to do more complex GZip operations? Use the ",(0,r.jsx)(t.code,{children:"FileSystem"}),"-based classes defined within the ",(0,r.jsx)(t.code,{children:"Xceed.GZip"})," namespace."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),s=n(34164),i=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=p(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=h({queryString:n,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function I(e){const t=(0,b.A)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);