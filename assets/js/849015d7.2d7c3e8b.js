"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[909],{85132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(74848),i=n(28453);const c={},s="Replacing Text with Objects",o={id:"code-snippets/documents/replacing-text-with-objects",title:"Replacing Text with Objects",description:"The following example demonstrates how to replace text in a Document with pictures, hyperlinks, and tables.",source:"@site/docs/code-snippets/documents/replacing-text-with-objects.md",sourceDirName:"code-snippets/documents",slug:"/code-snippets/documents/replacing-text-with-objects",permalink:"/xceed-libs-doc/docs/code-snippets/documents/replacing-text-with-objects",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Replacing Text with HTML",permalink:"/xceed-libs-doc/docs/code-snippets/documents/replacing-text-with-html"},next:{title:"Replacing Text",permalink:"/xceed-libs-doc/docs/code-snippets/documents/replacing-text"}},a={},d=[];function l(e){const t={admonition:"admonition",br:"br",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"replacing-text-with-objects",children:"Replacing Text with Objects"})}),"\n",(0,r.jsx)(t.p,{children:"The following example demonstrates how to replace text in a Document with pictures, hyperlinks, and tables."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The document contains tags that look like ",(0,r.jsx)(t.strong,{children:"<YEAR_IMAGE>"}),(0,r.jsx)(t.br,{}),"\n","These tags will be replaced by the corresponding objects."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'class Program\r\n{\r\n    static void Main(string[] args)\r\n    {\r\n        // Load a document.\r\n        using(var document = DocX.Load("ReplaceTextWithObjects.docx"))\r\n        {\r\n            // Create the image from disk and set its size.\r\n            var image = document.AddImage(@"2018.jpg");\r\n            var picture = image.CreatePicture(175, 325);\r\n            \r\n            // Replace all found tags with the specified image and ignore the case when searching for the tags.\r\n            document.ReplaceTextWithObject("<yEaR_IMAGE>", picture, false, RegexOptions.IgnoreCase);\r\n\r\n            // Create the hyperlink.\r\n            var hyperlink = document.AddHyperlink("(ref)", new Uri("https://en.wikipedia.org/wiki/New_Year"));\r\n\r\n            // Replace all found tags with the specified hyperlink.\r\n            document.ReplaceTextWithObject("<year_link>", hyperlink);\r\n\r\n            // Add a Table into the document and set its values.\r\n            var t = document.AddTable(1, 2);\r\n            t.Design = TableDesign.DarkListAccent4;\r\n            t.AutoFit = AutoFit.Window;\r\n            t.Rows[0].Cells[0].Paragraphs[0].Append("xceed.com");\r\n            t.Rows[0].Cells[1].Paragraphs[0].Append("@copyright 2018");\r\n\r\n            document.ReplaceTextWithObject("<year_table>", t);\r\n\r\n            // Save this document to disk.\r\n            document.SaveAs(@"ReplacedTextWithObjects.docx");\r\n        }\r\n    }\r\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);