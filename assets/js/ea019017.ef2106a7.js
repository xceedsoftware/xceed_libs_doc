"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3015],{90745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(74848),r=n(28453);const s={},c="Replace content",l={id:"code-snippets/cell/replace-content",title:"Replace content",description:"This example demonstrates how to replace content when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/cell/replace-content.md",sourceDirName:"code-snippets/cell",slug:"/code-snippets/cell/replace-content",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/replace-content",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Merge cells",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/merge-cells"},next:{title:"Set Cell value types",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/set-cell-value-type"}},a={},d=[];function i(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"replace-content",children:"Replace content"})}),"\n",(0,o.jsx)(t.p,{children:"This example demonstrates how to replace content when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'    public static void ReplaceContent()\r\n    {\r\n      using( var workbook = Workbook.Load( "CellData.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Replace cell\'s content";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d }; \r\n\r\n        // Replace all occurences of string "Jane" with "Michael".\r\n        worksheet.ReplaceContent( "Jane", "Michael" );\r\n\r\n        // Add formatted texts in cell "I6".\r\n        var formattedTexts = new FormattedTextList()\r\n        {\r\n          new FormattedText( "* Name ", new Font() { Size = 13 } ),\r\n          new FormattedText( "Jane", new Font() { Color = System.Drawing.Color.Red, Bold = true, Size = 13 } ),\r\n          new FormattedText( " has been replaced with ", new Font() { Size = 13 } ),\r\n          new FormattedText( "Michael", new Font() { Color = System.Drawing.Color.Green, Bold = true, Size = 13 } )\r\n        };\r\n        worksheet.Cells[ "I6" ].Value = formattedTexts;\r\n\r\n        //Save the workbook\r\n        workbook.SaveAs( "ReplaceContent.xlsx" );\r\n        Console.WriteLine( "\\tCreated: ReplaceContent.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);