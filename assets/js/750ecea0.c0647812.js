"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[4985],{77474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var r=n(74848),i=n(28453);const c={},d="Adding a Picture",s={id:"code-snippets/pictures/adding-picture",title:"Adding a Picture",description:"The following example demonstrates how to add a picture in a Document.",source:"@site/docs/code-snippets/pictures/adding-picture.md",sourceDirName:"code-snippets/pictures",slug:"/code-snippets/pictures/adding-picture",permalink:"/xceed-libs-doc/docs/code-snippets/pictures/adding-picture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pictures",permalink:"/xceed-libs-doc/docs/category/pictures"},next:{title:"Adding a Picture with Text Wrapping",permalink:"/xceed-libs-doc/docs/code-snippets/pictures/adding-picture-text-wrapping"}},a={},o=[];function p(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"adding-a-picture",children:"Adding a Picture"})}),"\n",(0,r.jsx)(t.p,{children:"The following example demonstrates how to add a picture in a Document."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'// Create a document.\r\nusing (var document = DocX.Create("AddPicture.docx"))\r\n{\r\n    // Add a simple image from disk.\r\n    var image = document.AddImage("balloon.jpg");\r\n\r\n    // Set Picture Height and Width.\r\n    var picture = image.CreatePicture(150, 150);\r\n\r\n    // Insert Picture in paragraph.\r\n    var p = document.InsertParagraph("Here is a simple picture added from disk:");\r\n    p.AppendPicture(picture);\r\n\r\n    document.Save();\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var r=n(96540);const i={},c=r.createContext(i);function d(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);