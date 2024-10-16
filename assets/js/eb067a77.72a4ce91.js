"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[8450],{26176:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=s(74848),a=s(28453),n=s(11470),l=s(19365);const c={},i="QuickFtp class",o={id:"basic-concepts/quick-ftp-class",title:"QuickFtp class",description:"This topic briefly presents some of the simpler overloads of the static methods of the QuickFtp class; for a complete list, see the class's methods in the reference documentation. Also, see the appropriate topics under Task-Based Help for more complete examples.",source:"@site/ftp/basic-concepts/quick-ftp-class.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/quick-ftp-class",permalink:"/xceed-libs-doc/ftp/basic-concepts/quick-ftp-class",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"ReparsePointTagsFilter class",permalink:"/xceed-libs-doc/ftp/basic-concepts/filters/reparse-point-tags-filter-class"},next:{title:"Task-Based Help",permalink:"/xceed-libs-doc/ftp/code-snippets/overview"}},u={},d=[{value:"The methods",id:"the-methods",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"quickftp-class",children:"QuickFtp class"})}),"\n",(0,r.jsxs)(t.p,{children:["This topic briefly presents some of the simpler overloads of the static methods of the QuickFtp class; for a complete list, see the class's methods in the reference documentation. Also, see the appropriate topics under ",(0,r.jsx)(t.a,{href:"/ftp/code-snippets/overview",children:"Task-Based Help"})," for more complete examples."]}),"\n",(0,r.jsx)(t.h2,{id:"the-methods",children:"The methods"}),"\n",(0,r.jsx)(t.p,{children:"Only the simpler overloads ar presented here. Other overloads let you specify user names and passwords, authentication methods, and callbacks (certificate required/received, item/byte progression)."}),"\n",(0,r.jsx)(t.p,{children:"The Send method lets you send files to an FTP server. The following specifies the hostname of the FTP server to connect to, the remote destination folder, and the files to send (searching recursively)."}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  QuickFtp.Send("ftp.server.com", @"\\public", @"d:\\test\\test.txt");\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  QuickFtp.Send("ftp.server.com", "\\public", "d:\\test\\test.txt")\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The Receive method lets you retrieve files from an FTP server. The following specifies the FTP server hostname, the local folder in which to place the file, and the file to receive."}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  QuickFtp.Receive("ftp.server.com", @"d:\\", @"test\\test.txt");\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  QuickFtp.Receive("ftp.server.com", "d:\\", "test\\test.txt")\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"The GetFtpContents method instructs the FTP server to list its contents. The following specifies the FTP server hostname, the remote folder to list, and no filters."}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  QuickFtpItem[] items = QuickFtp.GetFtpContents("ftp.server.com", @"\\", null);\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  Dim items As QuickFtpItem() = QuickFtp.GetFtpContents("ftp.server.com", "\\", Nothing)\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"Finally, the Delete method deletes items from an FTP server."}),"\n",(0,r.jsxs)(n.A,{children:[(0,r.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'  QuickFtp.Delete("ftp.server.com", false, @"test\\test.txt");\n'})})}),(0,r.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:'  QuickFtp.Delete("ftp.server.com", False, "test\\test.txt")\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Overloads which do not have a recursive parameter automatically perform their operation recursively."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var r=s(34164);const a={tabItem:"tabItem_Ymn6"};var n=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>T});var r=s(96540),a=s(34164),n=s(23104),l=s(56347),c=s(205),i=s(57485),o=s(31682),u=s(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:a}}=e;return{value:t,label:s,attributes:r,default:a}}))}(s);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:s}=e;const a=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,n=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[o,d]=f({queryString:s,groupId:a}),[m,v]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(s);return[a,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),b=(()=>{const e=o??m;return h({value:e,tabValues:n})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,n]),tabValues:n}}var v=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(74848);function g(e){let{className:t,block:s,selectedValue:r,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),a=c[s].value;a!==r&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},t),children:c.map((e=>{let{value:t,label:s,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...n,className:(0,a.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:n}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function T(e){const t=(0,v.A)();return(0,x.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var r=s(96540);const a={},n=r.createContext(a);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);