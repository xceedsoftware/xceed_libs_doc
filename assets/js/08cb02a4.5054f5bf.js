"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4089],{75661:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=t(74848),o=t(28453);const s={},i="Add picture",d={id:"code-snippets/picture/add-picture",title:"Add picture",description:"This example demonstrates how to add pictures when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/picture/add-picture.md",sourceDirName:"code-snippets/picture",slug:"/code-snippets/picture/add-picture",permalink:"/xceed-libs-doc/workbooks/code-snippets/picture/add-picture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Picture",permalink:"/xceed-libs-doc/workbooks/category/picture"},next:{title:"Offset Picture",permalink:"/xceed-libs-doc/workbooks/code-snippets/picture/offset-picture"}},c={},a=[];function l(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"add-picture",children:"Add picture"})}),"\n",(0,n.jsx)(r.p,{children:"This example demonstrates how to add pictures when using the API from the Xceed Workbooks for .NET."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'    public static void AddPicture()\r\n    {\r\n      using( var workbook = Workbook.Create( "AddPicture.xlsx") )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Add pictures"; \r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Add a picture using a stream.\r\n        worksheet.Cells[ "A3" ].Value = "Using a stream and 2 anchors:";\r\n        worksheet.Cells[ "A3" ].Style.Font = new Font() { Bold = true };\r\n\r\n        var stream = new FileStream( "balloon.jpg", FileMode.Open, FileAccess.Read );\r\n        // Add the stream picture in A4 and it should extend to E12.\r\n        var filenamePicture = worksheet.Pictures.Add( stream, "A4", "E12" );\r\n\r\n\r\n        // Add Picture with file name.\r\n        worksheet.Cells[ 13, 0 ].Value = "Using a filename and 1 anchor:";\r\n        worksheet.Cells[ 13, 0 ].Style.Font = new Font() { Bold = true };\r\n\r\n        // Add the filename picture with its top left corner in 15th row and 1st column.\r\n        var streamPicture = worksheet.Pictures.Add( "balloon.jpg", 14, 0 );\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: AddPicture.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);