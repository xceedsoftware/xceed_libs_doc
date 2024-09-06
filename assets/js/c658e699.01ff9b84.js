"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3940],{16471:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(74848),r=o(28453);const s={},d="Adding Comment",a={id:"code-snippets/annotation/adding-comment",title:"Adding Comment",description:"This example demonstrates how to add Comments when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/annotation/adding-comment.md",sourceDirName:"code-snippets/annotation",slug:"/code-snippets/annotation/adding-comment",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/adding-comment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Adding Note",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/adding-note"},next:{title:"Changing Note formatting",permalink:"/xceed-docs-words/workbooks/code-snippets/annotation/changing-note-formatting"}},i={},c=[];function m(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"adding-comment",children:"Adding Comment"})}),"\n",(0,t.jsx)(n.p,{children:"This example demonstrates how to add Comments when using the API from the Xceed Workbooks for .NET."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'    public static void AddComment()\r\n    {\r\n      using( var workbook = Workbook.Create( "AddComment.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        var annotations = workbook.Worksheets[ 0 ].Annotations;\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Add Comment";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Add a comment to the to title.\r\n        var comment = annotations.AddComment( "This is the title of the document." , "B3" );\r\n\r\n        //If a comment is already in a cell, it will be replied if another add is made.\r\n        var comment2 = annotations.AddComment( "I added another comment by mistake.", "B3" );\r\n\r\n        //Comment can also be replied by a method.\r\n        comment2.Reply( "Wait I can also be in the thread of the conversation ?" );\r\n\r\n        //Any comment in a thread can be used to reply in it.\r\n        comment.Reply( "I made another mistake but looks like I will be at the end of the thread." );\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: AddComment.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var t=o(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);