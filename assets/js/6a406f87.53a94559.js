"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[5007],{31990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(74848),r=t(28453);const s={},i="Creating a table, inserting rows in it, and filling it with data",l={id:"code-snippets/tables-and-cells/creating-table-inserting-rows",title:"Creating a table, inserting rows in it, and filling it with data",description:"The following example demonstrates how to create a table in a Document, insert rows in it, and fill the table with data.",source:"@site/docs/code-snippets/tables-and-cells/creating-table-inserting-rows.md",sourceDirName:"code-snippets/tables-and-cells",slug:"/code-snippets/tables-and-cells/creating-table-inserting-rows",permalink:"/xceed-libs-doc/docs/code-snippets/tables-and-cells/creating-table-inserting-rows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a new table and adding it to a document",permalink:"/xceed-libs-doc/docs/code-snippets/tables-and-cells/creating-new-table-adding-to-document"},next:{title:"Adding a Table with Text Wrapping",permalink:"/xceed-libs-doc/docs/code-snippets/tables-and-cells/adding-table-with-text-wrapping"}},o={},d=[];function c(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"creating-a-table-inserting-rows-in-it-and-filling-it-with-data",children:"Creating a table, inserting rows in it, and filling it with data"})}),"\n",(0,a.jsx)(n.p,{children:"The following example demonstrates how to create a table in a Document, insert rows in it, and fill the table with data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'// Create a document.\r\nusing (var document = DocX.Create("InsertRowAndDataTable.docx"))\r\n{\r\n    // Add a Table of 5 rows and 2 columns into the document and set its values.\r\n    var t = document.AddTable(5, 2);\r\n    t.Design = TableDesign.ColorfulListAccent1;\r\n    t.Alignment = Alignment.center;\r\n    t.Rows[0].Cells[0].Paragraphs[0].Append("Mike");\r\n    t.Rows[0].Cells[1].Paragraphs[0].Append("65");\r\n    t.Rows[1].Cells[0].Paragraphs[0].Append("Kevin");\r\n    t.Rows[1].Cells[1].Paragraphs[0].Append("62");\r\n    t.Rows[2].Cells[0].Paragraphs[0].Append("Carl");\r\n    t.Rows[2].Cells[1].Paragraphs[0].Append("60");\r\n    t.Rows[3].Cells[0].Paragraphs[0].Append("Michael");\r\n    t.Rows[3].Cells[1].Paragraphs[0].Append("59");\r\n    t.Rows[4].Cells[0].Paragraphs[0].Append("Shawn");\r\n    t.Rows[4].Cells[1].Paragraphs[0].Append("57");\r\n\r\n    // Add a row at the end of the table and set its values.\r\n    var r = t.InsertRow();\r\n    r.Cells[0].Paragraphs[0].Append("Mario");\r\n    r.Cells[1].Paragraphs[0].Append("54");\r\n\r\n    // Insert a new Paragraph into the document.\r\n    var p = document.InsertParagraph("Xceed Top Players Points:");\r\n    p.SpacingAfter(40d);\r\n\r\n    // Insert the Table after the Paragraph.\r\n    p.InsertTableAfterSelf(t);\r\n\r\n    document.Save();\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);