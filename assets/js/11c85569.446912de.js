"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7605],{21692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=r(74848),n=r(28453);const s={},a="Format part of text",l={id:"code-snippets/cell/format-part-of-text",title:"Format part of text",description:"This example demonstrates how to set format to part of text when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/cell/format-part-of-text.md",sourceDirName:"code-snippets/cell",slug:"/code-snippets/cell/format-part-of-text",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/format-part-of-text",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Delete cell range",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/delete-cell-range"},next:{title:"Insert cell range",permalink:"/xceed-docs-words/workbooks/code-snippets/cell/insert-cell-range"}},d={},i=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"format-part-of-text",children:"Format part of text"})}),"\n",(0,o.jsx)(t.p,{children:"This example demonstrates how to set format to part of text when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'    public static void FormatPartOfText()\r\n    {\r\n      using( var workbook = Workbook.Create( "FormatPartOfText.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        FormattedText formattedText = new FormattedText( "Reformat a part of an existing text", new Font() { Bold = true, Size = 15.5d } );\r\n        worksheet.Cells[ "B1" ].Value = formattedText ;\r\n\r\n        // Create multiple text with different font\r\n        FormattedText formattedText1 = new FormattedText( "This is the first part of the cell ", new Font() { Italic = true, Size = 14, Color = System.Drawing.Color.Aquamarine } );\r\n        FormattedText formattedText2 = new FormattedText( "Here is a normal string " );\r\n        FormattedText formattedText3 = new FormattedText( "Here is another independant text",\r\n          new Font() { Bold = true, Underline = true, UnderlineType = UnderlineType.Double, Color = System.Drawing.Color.Coral} );\r\n\r\n        //Put all the text in a list\r\n        FormattedTextList formattedTextsList = new FormattedTextList { formattedText1, formattedText2, formattedText3 };\r\n        \r\n        //Assign value to the desired cell\r\n        worksheet.Cells[ "B3" ].Value = formattedTextsList;\r\n\r\n        worksheet.Cells[ "B3" ].FormatText( new Font(){Color = System.Drawing.Color.Blue}, 5, 10 );\r\n\r\n        //Save the workbook\r\n        workbook.SaveAs( "FormatPartOfText.xlsx" );\r\n        Console.WriteLine( "\\tCreated: FormatPartOfText.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var o=r(96540);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);