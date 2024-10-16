"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[693],{35789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var a=t(74848),d=t(28453);const o={},s="Creating a new table and adding it to a document",r={id:"code-snippets/tables-and-cells/creating-new-table-adding-to-document",title:"Creating a new table and adding it to a document",description:"The following example demonstrates how to create a new Table and add it to a Document.",source:"@site/docs/code-snippets/tables-and-cells/creating-new-table-adding-to-document.md",sourceDirName:"code-snippets/tables-and-cells",slug:"/code-snippets/tables-and-cells/creating-new-table-adding-to-document",permalink:"/xceed-libs-doc/docs/code-snippets/tables-and-cells/creating-new-table-adding-to-document",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tables and Cells",permalink:"/xceed-libs-doc/docs/category/tables-and-cells"},next:{title:"Creating a table, inserting rows in it, and filling it with data",permalink:"/xceed-libs-doc/docs/code-snippets/tables-and-cells/creating-table-inserting-rows"}},c={},i=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"creating-a-new-table-and-adding-it-to-a-document",children:"Creating a new table and adding it to a document"})}),"\n",(0,a.jsx)(n.p,{children:"The following example demonstrates how to create a new Table and add it to a Document."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"private void TablesAndCells(string file)\r\n{\r\n    using (var document = DocX.Load(file))\r\n    {\r\n        // Create a table (initial size of 3 rows and 2 columns).\r\n        var t = document.AddTable(3, 2);\r\n        t.Design = TableDesign.TableGrid;\r\n\r\n        // Add the table to the document\r\n        document.InsertTable(t);\r\n\r\n        // Save the changes to the document\r\n        document.Save();\r\n    }\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const d={},o=a.createContext(d);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);