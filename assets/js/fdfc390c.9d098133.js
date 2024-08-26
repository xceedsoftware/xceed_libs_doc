"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4875],{8376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(4848),a=n(8453);const o={},s="Adding a Table with Text Wrapping",i={id:"code-snippets/tables-and-cells/adding-table-with-text-wrapping",title:"Adding a Table with Text Wrapping",description:"The following example demonstrates how to add a table and wrap text around it in a Document.",source:"@site/docs/code-snippets/tables-and-cells/adding-table-with-text-wrapping.md",sourceDirName:"code-snippets/tables-and-cells",slug:"/code-snippets/tables-and-cells/adding-table-with-text-wrapping",permalink:"/xceed-docs-words/docs/code-snippets/tables-and-cells/adding-table-with-text-wrapping",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a table, inserting rows in it, and filling it with data",permalink:"/xceed-docs-words/docs/code-snippets/tables-and-cells/creating-table-inserting-rows"},next:{title:"Adding Rows and Columns to an Existing Table",permalink:"/xceed-docs-words/docs/code-snippets/tables-and-cells/adding-rows-and-columns-to-table"}},d={},l=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"adding-a-table-with-text-wrapping",children:"Adding a Table with Text Wrapping"})}),"\n",(0,r.jsx)(t.p,{children:"The following example demonstrates how to add a table and wrap text around it in a Document."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'class Program\r\n{\r\n    static void Main(string[] args)\r\n    {\r\n        // Create a document.\r\n        using (var document = DocX.Create("AddTableWithTextWrapping.docx"))\r\n        {\r\n            // Add a title\r\n            document.InsertParagraph("Add Table with Text Wrapping")\r\n                    .FontSize(15d)\r\n                    .SpacingAfter(50d)\r\n                    .Alignment = Alignment.center;\r\n\r\n            // Add a Table into the document and set its values.\r\n            var t = document.AddTable(3, 2);\r\n            t.Rows[0].Cells[0].Paragraphs[0].Append("Mike");\r\n            t.Rows[0].Cells[1].Paragraphs[0].Append("65");\r\n            t.Rows[1].Cells[0].Paragraphs[0].Append("Kevin");\r\n            t.Rows[1].Cells[1].Paragraphs[0].Append("62");\r\n            t.Rows[2].Cells[0].Paragraphs[0].Append("Carl");\r\n            t.Rows[2].Cells[1].Paragraphs[0].Append("60");\r\n\r\n            // Set the table wrapping as WrapAround.\r\n            t.WrappingStyle = TableWrappingStyle.WrapAround;\r\n\r\n            // Set horizontal alignment with a right Alignment from margin.\r\n            t.HorizontalAlignment = WrappingHorizontalAlignment.RightRelativeToMargin;\r\n\r\n            // Set vertical alignment with an offset from the top of the page.\r\n            t.VerticalOffsetAlignmentFrom = WrappingVerticalOffsetAlignmentFrom.Page;\r\n            t.VerticalOffset = 175d;\r\n\r\n            // Set a buffer on the left and right of the table where no text will be drawn.\r\n            t.DistanceFromTextLeft = 5d;\r\n            t.DistanceFromTextRight = 5d;\r\n\r\n            var p = document.InsertParagraph("With its easy to use API, Xceed Words for .NET lets your application create new Microsoft Word .docx or PDF documents, or modify existing .docx documents. It gives you complete control over all content in a Word document, and lets you add or remove all commonly used element types, such as paragraphs, bulleted or numbered lists, images, tables, charts, headers and footers, sections, bookmarks, and more. Create PDF documents using the same API for creating Word documents.");\r\n            p.Alignment = Alignment.both;\r\n            p.InsertTableAfterSelf(t);\r\n            p.SpacingAfter(30);\r\n\r\n            document.Save();\r\n        }\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);