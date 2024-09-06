"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5528],{3684:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(74848),r=t(28453);const i={},a="Changing Note formatting",s={id:"code-snippets/annotation/changing-note-formatting",title:"Changing Note formatting",description:"This example demonstrates how to change note formatting when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/annotation/changing-note-formatting.md",sourceDirName:"code-snippets/annotation",slug:"/code-snippets/annotation/changing-note-formatting",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/changing-note-formatting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Adding Comment",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/adding-comment"},next:{title:"Identifying notes comments",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/identifying-notes-comments"}},d={},c=[];function g(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"changing-note-formatting",children:"Changing Note formatting"})}),"\n",(0,o.jsx)(e.p,{children:"This example demonstrates how to change note formatting when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-csharp",children:'    public static void ChangeNoteFormatting()\r\n    {\r\n      using( var workbook = Workbook.Create( "ChangeNoteFormatting.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        var annotations = workbook.Worksheets[ 0 ].Annotations;\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Change Note Formatting";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Adding a note will return the note.\r\n        var note = annotations.AddNote( new FormattedText( "This is a note" ) , "B5" , false );\r\n\r\n        //Changing the size of the note.\r\n        note.Height = 2;\r\n        note.Width = 3;\r\n        note.Protection.Locked = false;\r\n        note.Protection.LockText = false;\r\n        note.MeasureUnit = Units.Inch;\r\n\r\n        //Changing the text alignement.\r\n        note.TextAlignment.Horizontal = HorizontalAlignment.Right;\r\n\r\n        //Adding text on a new line to an existing note.\r\n        var newFormattedText = new FormattedText( "\\n Added a new independant formatted text to the existing note." );\r\n        newFormattedText.Font.Size = 14;\r\n        newFormattedText.Font.Italic = true;\r\n\r\n        note.AddText( newFormattedText ); \r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: ChangeNoteFormatting.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function a(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);