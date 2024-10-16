"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3424],{69959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var d=n(74848),s=n(28453);const r={},i="Lists",o={id:"code-snippets/others/lists",title:"Lists",description:"The following example demonstrates how to add a numbered list and a bulleted list in a Document.",source:"@site/docs/code-snippets/others/lists.md",sourceDirName:"code-snippets/others",slug:"/code-snippets/others/lists",permalink:"/xceed-libs-doc/docs/code-snippets/others/lists",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hyperlinks",permalink:"/xceed-libs-doc/docs/code-snippets/others/hyperlinks"},next:{title:"Paragraphs",permalink:"/xceed-libs-doc/docs/code-snippets/others/paragraphs"}},l={},m=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"lists",children:"Lists"})}),"\n",(0,d.jsx)(t.p,{children:"The following example demonstrates how to add a numbered list and a bulleted list in a Document."}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-csharp",children:'// Create a document.\r\nusing(var document = DocX.Create("AddList.docx"))\r\n{\r\n    // Add a numbered list where the first ListItem is starting with number 1.\r\n    var numberedList = document.AddList("Berries", 0, ListItemType.Numbered, 1);\r\n    \r\n    // Add Sub-items(level 1) to the preceding ListItem.\r\n    document.AddListItem(numberedList, "Strawberries", 1);\r\n    document.AddListItem(numberedList, "Blueberries", 1);\r\n    document.AddListItem(numberedList, "Raspberries", 1);\r\n    \r\n    // Add an item (level 0)\r\n    document.AddListItem(numberedList, "Banana");\r\n    \r\n    // Add an item (level 0)\r\n    document.AddListItem(numberedList, "Apple");\r\n    \r\n    // Add Sub-items(level 1) to the preceding ListItem.\r\n    document.AddListItem(numberedList, "Red", 1);\r\n    document.AddListItem(numberedList, "Green", 1);\r\n    document.AddListItem(numberedList, "Yellow", 1);\r\n    \r\n    // Add a bulleted list with its first item.\r\n    var bulletedList = document.AddList("Canada", 0, ListItemType.Bulleted);\r\n    \r\n    // Add Sub-items(level 1) to the preceding ListItem.\r\n    document.AddListItem(bulletedList, "Toronto", 1);\r\n    document.AddListItem(bulletedList, "Montreal", 1);\r\n    \r\n    // Add an item (level 0)\r\n    document.AddListItem(bulletedList, "Brazil");\r\n    \r\n    // Add an item (level 0)\r\n    document.AddListItem(bulletedList, "USA");\r\n    \r\n    // Add Sub-items(level 1) to the preceding ListItem.\r\n    document.AddListItem(bulletedList, "New York", 1);\r\n    \r\n    // Add Sub-items(level 2) to the preceding ListItem.\r\n    document.AddListItem(bulletedList, "Brooklyn", 2);\r\n    document.AddListItem(bulletedList, "Manhattan", 2);\r\n    \r\n    document.AddListItem(bulletedList, "Los Angeles", 1);\r\n    document.AddListItem(bulletedList, "Miami", 1);\r\n    \r\n    // Add an item (level 0)\r\n    document.AddListItem(bulletedList, "France");\r\n    \r\n    // Add Sub-items(level 1) to the preceding ListItem.\r\n    document.AddListItem(bulletedList, "Paris", 1);\r\n    \r\n    // Insert the lists into the document.\r\n    document.InsertParagraph("This is a Numbered List:\\n");\r\n    document.InsertList(numberedList);\r\n    document.InsertParagraph().SpacingAfter(40d);\r\n    document.InsertParagraph("This is a Bulleted List:\\n");\r\n    document.InsertList(bulletedList, new Xceed.Document.NET.Font("Cooper Black"), 15);\r\n    \r\n    document.Save();\r\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var d=n(96540);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);