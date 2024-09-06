"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[6812],{72761:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=o(74848),r=o(28453);const n={},c="Set Active cell",l={id:"code-snippets/sheetview/set-active-cell",title:"Set Active cell",description:"This example demonstrates how to set active cell when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/sheetview/set-active-cell.md",sourceDirName:"code-snippets/sheetview",slug:"/code-snippets/sheetview/set-active-cell",permalink:"/xceed-docs-words/workbooks/code-snippets/sheetview/set-active-cell",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Sheet View",permalink:"/xceed-docs-words/workbooks/category/sheet-view"},next:{title:"Set Zoom and view type",permalink:"/xceed-docs-words/workbooks/code-snippets/sheetview/set-zoom-view-type"}},i={},d=[];function a(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"set-active-cell",children:"Set Active cell"})}),"\n",(0,s.jsx)(t.p,{children:"This example demonstrates how to set active cell when using the API from the Xceed Workbooks for .NET."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'    public static void SetActiveCell()\r\n    {\r\n      using( var workbook = Workbook.Load( "Sheet.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Set Active and TopLeft Cells";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        worksheet.Cells[ "B4" ].Value = "Using a TopLeftCell at B1 and an ActiveCell at E20:";\r\n        worksheet.Cells[ "B4" ].Style.Font = new Font() { Bold = true };\r\n\r\n        // Set the active cell and top left cell of the 1st worksheet.\r\n        worksheet.SheetView.ActiveCellAddress = "E20";\r\n        worksheet.SheetView.TopLeftCellAddress = "B1";\r\n\r\n        // Save workbook to disk.\r\n        workbook.SaveAs( "SetActiveCell.xlsx" );\r\n        Console.WriteLine( "\\tCreated: SetActiveCell.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>l});var s=o(96540);const r={},n=s.createContext(r);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);