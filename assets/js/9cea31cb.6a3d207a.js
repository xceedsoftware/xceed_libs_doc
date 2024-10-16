"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[7682],{19629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(74848),o=r(28453);const n={},i="Offset Picture",c={id:"code-snippets/picture/offset-picture",title:"Offset Picture",description:"This example demonstrates how to set offset pictures when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/picture/offset-picture.md",sourceDirName:"code-snippets/picture",slug:"/code-snippets/picture/offset-picture",permalink:"/xceed-libs-doc/workbooks/code-snippets/picture/offset-picture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Add picture",permalink:"/xceed-libs-doc/workbooks/code-snippets/picture/add-picture"},next:{title:"Shrink picture with offset",permalink:"/xceed-libs-doc/workbooks/code-snippets/picture/shrink-picture-with-offset"}},u={},d=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"offset-picture",children:"Offset Picture"})}),"\n",(0,s.jsx)(t.p,{children:"This example demonstrates how to set offset pictures when using the API from the Xceed Workbooks for .NET."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'    public static void OffsetPicture()\r\n    {\r\n      using( var workbook = Workbook.Create( "OffsetPicture.xlsx") )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Offset pictures"; \r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Add a picture using a stream.\r\n        worksheet.Cells[ "A3" ].Value = "Original position";\r\n        worksheet.Cells[ "A3" ].Style.Font = new Font() { Bold = true };\r\n\r\n        var stream = new FileStream( PictureSampleResourcesDirectory + @"balloon.jpg", FileMode.Open, FileAccess.Read );\r\n        var filenamePicture = worksheet.Pictures.Add( stream, "A4" );\r\n        \r\n        // Add Picture with a offset\r\n        worksheet.Cells[ 16, 5 ].Value = "Offset position";\r\n        worksheet.Cells[ 16, 5 ].Style.Font = new Font() { Bold = true };\r\n\r\n        var filenamePictureOffset = worksheet.Pictures.Add( stream, "A4" );\r\n        filenamePictureOffset.TopLeftOffsets = new Position( 3, 3, Units.Inch );\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: OffsetPicture.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(96540);const o={},n=s.createContext(o);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);