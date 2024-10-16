"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[4609],{16734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),l=r(19365);const i={},c="AndFilter",o={id:"basic-concepts/filters/and-filter-class",title:"AndFilter",description:"The AndFilter class serves the same purpose as a logical-and operator. It states that the items must match all the filters regrouped within the AndFilter class in order to be processed.",source:"@site/ftp/basic-concepts/filters/and-filter-class.md",sourceDirName:"basic-concepts/filters",slug:"/basic-concepts/filters/and-filter-class",permalink:"/xceed-libs-doc/ftp/basic-concepts/filters/and-filter-class",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"Filters",permalink:"/xceed-libs-doc/ftp/basic-concepts/filters/overview"},next:{title:"AttributeFilter",permalink:"/xceed-libs-doc/ftp/basic-concepts/filters/attribute-filter-class"}},u={},d=[{value:"Demonstration",id:"demonstration",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"andfilter",children:"AndFilter"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"AndFilter"})," class serves the same purpose as a logical-and operator. It states that the items must match all the filters regrouped within the ",(0,n.jsx)(t.code,{children:"AndFilter"})," class in order to be processed."]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsxs)(t.p,{children:["Process all the files in folder that contain the TXT extension ",(0,n.jsx)(t.strong,{children:"and"})," that are between 5k and 10k ",(0,n.jsx)(t.strong,{children:"size"}),"."]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  SizeFilter filter = new SizeFilter();\r\n\r\n  filter.MaxSize = 10240;\r\n  filter.MinSize = 5120; \r\n\r\n  AbstractFile[] files = myFolder.GetFiles( true,\r\n                                            new AndFilter( new NameFilter( "*.txt" ), \r\n                                            filter ) );\n'})})}),(0,n.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'  Dim filter As New SizeFilter()\r\n\r\n  filter.MaxSize = 10240\r\n  filter.MinSize = 5120\r\n\r\n  Dim files As AbstractFile() = myFolder.GetFiles( True, _\r\n                                                  New AndFilter( New NameFilter( "*.txt" ), _\r\n                                                  filter ) )\n'})})})]}),"\n",(0,n.jsx)(t.p,{children:"Since the AndFilter is used by default when combining multiple filters, it is not necessary to create an instance of the AndFilter class. Therefore, we can omit the creation of the class. We can also omit creating a NameFilter class since we are using a basic string filter and the NameFilter class is constructed underneath."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  SizeFilter filter = new SizeFilter();\r\n\r\n  filter.MaxSize = 10240;\r\n  filter.MinSize = 5120; \r\n\r\n  AbstractFile[] files = myFolder.GetFiles( true, "*.txt", filter );\n'})})}),(0,n.jsx)(l.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:'  Dim filter As New SizeFilter()\r\n\r\n  filter.MaxSize = 10240\r\n  filter.MinSize = 5120 \r\n\r\n  Dim files As AbstractFile() = myFolder.GetFiles( True, "*.txt", filter )\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),c=r(57485),o=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=f(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,d]=p({queryString:r,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=o??b;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(o(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function A(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(A,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);