"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5990],{49306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var o=t(74848),a=t(28453);const s={},c="Inserting a Table of Contents at the End of a Document",r={id:"code-snippets/table-of-contents/inserting-table-of-content-at-end",title:"Inserting a Table of Contents at the End of a Document",description:"The following example demonstrates how to add a Table of Contents at the end of a Document.",source:"@site/docs/code-snippets/table-of-contents/inserting-table-of-content-at-end.md",sourceDirName:"code-snippets/table-of-contents",slug:"/code-snippets/table-of-contents/inserting-table-of-content-at-end",permalink:"/xceed-libs-doc/docs/code-snippets/table-of-contents/inserting-table-of-content-at-end",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Inserting a Table of Contents at the Beginning of a Document",permalink:"/xceed-libs-doc/docs/code-snippets/table-of-contents/inserting-table-of-content-at-beginning"},next:{title:"Updating a Table of Contents",permalink:"/xceed-libs-doc/docs/code-snippets/table-of-contents/updating-table-contents"}},d={},i=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"inserting-a-table-of-contents-at-the-end-of-a-document",children:"Inserting a Table of Contents at the End of a Document"})}),"\n",(0,o.jsx)(n.p,{children:"The following example demonstrates how to add a Table of Contents at the end of a Document."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'private void AddTableOfContents(string file)\r\n{\r\n  using(var document = DocX.Load(file))\r\n  {\r\n    // Add a page break to place the Table of Content on a new page\r\n    document.InsertSectionPageBreak();\r\n\r\n    // Add the Table of Contents\r\n    document.InsertTableOfContents("Table of Contents", TableOfContentsSwitches.None);\r\n\r\n    // Save the changes to the document\r\n    document.Save();\r\n  }\r\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const a={},s=o.createContext(a);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);