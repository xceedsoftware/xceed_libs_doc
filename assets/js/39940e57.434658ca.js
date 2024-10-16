"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8293],{64195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=t(74848),s=t(28453);const o={},i="Hyperlinks",d={id:"code-snippets/others/hyperlinks",title:"Hyperlinks",description:"The following example demonstrates how to add a Hyperlink in a Document.",source:"@site/docs/code-snippets/others/hyperlinks.md",sourceDirName:"code-snippets/others",slug:"/code-snippets/others/hyperlinks",permalink:"/xceed-libs-doc/docs/code-snippets/others/hyperlinks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Headers and Footers",permalink:"/xceed-libs-doc/docs/code-snippets/others/headers-and-footers"},next:{title:"Lists",permalink:"/xceed-libs-doc/docs/code-snippets/others/lists"}},c={},p=[];function a(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"hyperlinks",children:"Hyperlinks"})}),"\n",(0,r.jsx)(n.p,{children:"The following example demonstrates how to add a Hyperlink in a Document."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'private void AddHyperlink(string file)\r\n{\r\n  using(var document = DocX.Load(file))\r\n  {\r\n    // Add a hyperlink to the document\'s Hyperlink collection\r\n    Hyperlink link = document.AddHyperlink("website", new Uri("https://xceed.com"));\r\n\r\n    // Add a paragraph that uses the hyperlink\r\n    document.InsertParagraph("Visit our ").AppendHyperlink(link).Append(" for more information.");\r\n\r\n    // Save the changes to the document\r\n    document.Save();\r\n  }\r\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);