"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8293],{64195:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(74848),s=r(28453);const o={},d="Hyperlinks",i={id:"code-snippets/others/hyperlinks",title:"Hyperlinks",description:"The following example demonstrates how to add a Hyperlink in a Document.",source:"@site/docs/code-snippets/others/hyperlinks.md",sourceDirName:"code-snippets/others",slug:"/code-snippets/others/hyperlinks",permalink:"/xceed-docs-words/docs/code-snippets/others/hyperlinks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Headers and Footers",permalink:"/xceed-docs-words/docs/code-snippets/others/headers-and-footers"},next:{title:"Lists",permalink:"/xceed-docs-words/docs/code-snippets/others/lists"}},c={},p=[];function a(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"hyperlinks",children:"Hyperlinks"})}),"\n",(0,t.jsx)(n.p,{children:"The following example demonstrates how to add a Hyperlink in a Document."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'private void AddHyperlink(string file)\r\n{\r\n  using(var document = DocX.Load(file))\r\n  {\r\n    // Add a hyperlink to the document\'s Hyperlink collection\r\n    Hyperlink link = document.AddHyperlink("website", new Uri("https://xceed.com"));\r\n\r\n    // Add a paragraph that uses the hyperlink\r\n    document.InsertParagraph("Visit our ").AppendHyperlink(link).Append(" for more information.");\r\n\r\n    // Save the changes to the document\r\n    document.Save();\r\n  }\r\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(96540);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);