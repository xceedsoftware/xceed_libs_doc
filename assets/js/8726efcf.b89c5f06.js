"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8942],{93905:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=s(74848),a=s(28453),n=s(11470),l=s(19365);const i={},c="Case sensitivity",o={id:"basic-concepts/xceed-filesystem-core/case-sensitivity",title:"Case sensitivity",description:'\xadThe classes defined within the Xceed.FileSystem namespace and other derived classes do not enforce case sensitivity. When a string is passed to a method call, for example, the GetFile method, the string is not manipulated in any way and is used "as is".',source:"@site/ftp/basic-concepts/xceed-filesystem-core/case-sensitivity.md",sourceDirName:"basic-concepts/xceed-filesystem-core",slug:"/basic-concepts/xceed-filesystem-core/case-sensitivity",permalink:"/xceed-docs-words/ftp/basic-concepts/xceed-filesystem-core/case-sensitivity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"Xceed's FileSystem Core",permalink:"/xceed-docs-words/ftp/basic-concepts/xceed-filesystem-core/overview"},next:{title:"Listing the contents of a folder",permalink:"/xceed-docs-words/ftp/basic-concepts/xceed-filesystem-core/listing-content-folder"}},d={},u=[{value:"Case sensitive source or destination",id:"case-sensitive-source-or-destination",level:2},{value:"NameFilter class",id:"namefilter-class",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"case-sensitivity",children:"Case sensitivity"})}),"\n",(0,r.jsxs)(t.p,{children:["\xadThe classes defined within the ",(0,r.jsx)(t.code,{children:"Xceed.FileSystem"})," namespace and other derived classes do ",(0,r.jsx)(t.strong,{children:"not"})," enforce case sensitivity. When a string is passed to a method call, for example, the ",(0,r.jsx)(t.code,{children:"GetFile"}),' method, the string is not manipulated in any way and is used "as is".']}),"\n",(0,r.jsx)(t.h2,{id:"case-sensitive-source-or-destination",children:"Case sensitive source or destination"}),"\n",(0,r.jsxs)(t.p,{children:["When dealing with case sensitive sources or destinations such as UNIX FTP servers or zip files, it is up to the user to pass a valid string to the method. For example, if you were to use the GetFile method to retrieve a reference to a file within a zip file and the filename exists in both lower case and uppercase, it is up to you to pass the filename in the appropriate case in order to retrieve a reference to the desired file. This is necessary because the GetFile method does ",(0,r.jsx)(t.strong,{children:"not"})," create a ",(0,r.jsx)(t.code,{children:"NameFilter"})," class around the string passed in the method call."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if we wanted to retrieve a reference to file.txt located in a zip file but FILE.TXT also exists, the following code would be used:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile textFile = myFolder.GetFile( "file.txt" );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFile As AbstractFile   myFolder.GetFile( "file.txt" )\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"To retrieve a reference to FILE.TXT rather than file.txt, the following code would be used:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile textFile = myFolder.GetFile( "FILE.TXT" );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFile As AbstractFile   myFolder.GetFile( "FILE.TXT" )\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"namefilter-class",children:"NameFilter class"}),"\n",(0,r.jsxs)(t.p,{children:["When using NameFilter classes, by default, case sensitivity is ",(0,r.jsx)(t.strong,{children:"not"})," enforced. In order to enforce case sensitivity, a greater-than symbol (>) must be used as the first character of the string."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if we were to use the following code, all files that have the TXT extension would be returned regardless of the case:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile[] textFiles = myFolder.GetFiles( true, "*.TXT" );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFiles As AbstractFile() = myFolder.GetFiles( true, "*.TXT" )\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"In order to return only the TXT files that have an extension in upper case, it is necessary to add the greater-than symbol:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile[] textFiles = myFolder.GetFiles( true, ">*.TXT" );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFiles As AbstractFile() = myFolder.GetFiles( true, ">*.TXT" )\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The greater-then symbol affects the entire string passed to the name filter. Therefore, if you were to use the following code, all the files that have the TXT extension in lower case and all the files that have the EXE extension in lower case will be returned:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile[] textFiles = myFolder.GetFiles( true, ">*.txt|*.exe" );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFiles As AbstractFile() = myFolder.GetFiles( True, ">*.txt|*.exe" )\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"If you wanted to retrieve all the files that have the TXT extension in lower case or all the files that have the EXE extension [without case sensitivity], you would need to create a NameFilter around each one:"}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  AbstractFile[] textFiles = myFolder.GetFiles( true, \r\n                                          new OrFilter( new NameFilter( ">*.txt" ),\r\n                                          new NameFilter( "*.EXE" ) ) );\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim textFiles As AbstractFile() = myFolder.GetFiles( True, _\r\n                                                 New OrFilter( New NameFilter( ">*.txt" ), _\r\n                                                 New NameFilter( "*.EXE" ) ) )\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var r=s(34164);const a={tabItem:"tabItem_Ymn6"};var n=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>F});var r=s(96540),a=s(34164),n=s(23104),l=s(56347),i=s(205),c=s(57485),o=s(31682),d=s(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:a}}=e;return{value:t,label:s,attributes:r,default:a}}))}(s);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const a=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,n=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[o,u]=f({queryString:s,groupId:a}),[m,x]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,d.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),b=(()=>{const e=o??m;return p({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,n]),tabValues:n}}var x=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function g(e){let{className:t,block:s,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),d=e=>{const t=e.currentTarget,s=c.indexOf(t),a=i[s].value;a!==r&&(o(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...n,className:(0,a.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:n}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function F(e){const t=(0,x.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>i});var r=s(96540);const a={},n=r.createContext(a);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);