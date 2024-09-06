"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4985],{77474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=r(74848),c=r(28453);const i={},d="Adding a Picture",s={id:"code-snippets/pictures/adding-picture",title:"Adding a Picture",description:"The following example demonstrates how to add a picture in a Document.",source:"@site/docs/code-snippets/pictures/adding-picture.md",sourceDirName:"code-snippets/pictures",slug:"/code-snippets/pictures/adding-picture",permalink:"/xceed-docs-words/docs/code-snippets/pictures/adding-picture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pictures",permalink:"/xceed-docs-words/docs/category/pictures"},next:{title:"Adding a Picture with Text Wrapping",permalink:"/xceed-docs-words/docs/code-snippets/pictures/adding-picture-text-wrapping"}},o={},a=[];function p(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"adding-a-picture",children:"Adding a Picture"})}),"\n",(0,n.jsx)(t.p,{children:"The following example demonstrates how to add a picture in a Document."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'// Create a document.\r\nusing (var document = DocX.Create("AddPicture.docx"))\r\n{\r\n    // Add a simple image from disk.\r\n    var image = document.AddImage("balloon.jpg");\r\n\r\n    // Set Picture Height and Width.\r\n    var picture = image.CreatePicture(150, 150);\r\n\r\n    // Insert Picture in paragraph.\r\n    var p = document.InsertParagraph("Here is a simple picture added from disk:");\r\n    p.AppendPicture(picture);\r\n\r\n    document.Save();\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>s});var n=r(96540);const c={},i=n.createContext(c);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);