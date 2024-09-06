"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[389],{44452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const i={},s="Text direction & orientation",a={id:"code-snippets/style/text-direction-orientation",title:"Text direction & orientation",description:"This example demonstrates how to set text direction and orientation when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/style/text-direction-orientation.md",sourceDirName:"code-snippets/style",slug:"/code-snippets/style/text-direction-orientation",permalink:"/xceed-docs-words/workbooks/code-snippets/style/text-direction-orientation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Set borders",permalink:"/xceed-docs-words/workbooks/code-snippets/style/set-borders"},next:{title:"Modify Theme",permalink:"/xceed-docs-words/workbooks/code-snippets/style/modify-theme"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"text-direction--orientation",children:"Text direction & orientation"})}),"\n",(0,o.jsx)(t.p,{children:"This example demonstrates how to set text direction and orientation when using the API from the Xceed Workbooks for .NET."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:'    public static void ChangeTextDirection()\r\n    {\r\n      //Some language needs to be force to right to left in order to be legible.\r\n      using( var workbook = Workbook.Create( "ChangeTextDirection" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        // Add a title \r\n        worksheet.Cells[ "B1" ].Value = "Change The Text Direction";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Some arabic text with latin chars.\r\n        var cell = worksheet.Cells[ "B2" ];\r\n        cell.Style.Alignment.TextDirection = TextDirectionAlignment.RightToLeft;\r\n        cell.Value = "this \u062b\u0635\u062e\u0642\u0647\u0639 \u0641\u0641ext";\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: ChangeTextDirection.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    public static void ChangeTextOrientation()\r\n    {\r\n      using( var workbook = Workbook.Create( "ChangeTextOrientation" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n        // Add a title \r\n        worksheet.Cells[ "B1" ].Value = "Change The Text Orientation";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        //Some text with a down rotation of 45 degrees ( angle is between 90 and -90 ).\r\n        var cell = worksheet.Cells[ "B2" ];\r\n        cell.Style.Alignment.RotationAngle = -45;\r\n        cell.Value = "This is a rotated text.";\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: ChangeTextOrientation.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);