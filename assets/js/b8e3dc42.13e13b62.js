"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[2980],{67969:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var n=l(74848),s=l(28453);const t={},o="Insert cell range",a={id:"code-snippets/cell/insert-cell-range",title:"Insert cell range",description:"This example demonstrates how to insert cell range when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/cell/insert-cell-range.md",sourceDirName:"code-snippets/cell",slug:"/code-snippets/cell/insert-cell-range",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/insert-cell-range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Format part of text",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/format-part-of-text"},next:{title:"Merge cells",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/merge-cells"}},c={},i=[];function h(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"insert-cell-range",children:"Insert cell range"})}),"\n",(0,n.jsx)(r.p,{children:"This example demonstrates how to insert cell range when using the API from the Xceed Workbooks for .NET."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-csharp",children:'    public static void InsertCellRange()\r\n    {\r\n      using( var workbook = Workbook.Create( "InsertCellRange.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Insert cell Range";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill Cells for initial display\r\n        worksheet.Cells[ "C5" ].Value = "Before Insert cellRange";\r\n        worksheet.Cells[ "C5" ].Style.Font = new Font() { Bold = true };\r\n        worksheet.Cells[ "C6" ].Value = 1;\r\n        worksheet.Cells[ "D6" ].Value = 2;\r\n        worksheet.Cells[ "E6" ].Value = 3;\r\n        worksheet.Cells[ "C7" ].Value = 4;\r\n        worksheet.Cells[ "D7" ].Value = 5;\r\n        worksheet.Cells[ "E7" ].Value = 6;\r\n        worksheet.Cells[ "C8" ].Value = 7;\r\n        worksheet.Cells[ "D8" ].Value = 8;\r\n        worksheet.Cells[ "E8" ].Value = 9;\r\n        worksheet.Cells[ "C9" ].Value = 10;\r\n        worksheet.Cells[ "D9" ].Value = 11;\r\n        worksheet.Cells[ "E9" ].Value = 12;\r\n\r\n        // Fill Cells for resulting display\r\n        worksheet.Cells[ "H5" ].Value = "After Insert cellRange (I7 to I8)";\r\n        worksheet.Cells[ "H5" ].Style.Font = new Font() { Bold = true };\r\n        worksheet.Cells[ "H6" ].Value = 1;\r\n        worksheet.Cells[ "I6" ].Value = 2;\r\n        worksheet.Cells[ "J6" ].Value = 3;\r\n        worksheet.Cells[ "H7" ].Value = 4;\r\n        worksheet.Cells[ "I7" ].Value = 5;\r\n        worksheet.Cells[ "J7" ].Value = 6;\r\n        worksheet.Cells[ "H8" ].Value = 7;\r\n        worksheet.Cells[ "I8" ].Value = 8;\r\n        worksheet.Cells[ "J8" ].Value = 9;\r\n        worksheet.Cells[ "H9" ].Value = 10;\r\n        worksheet.Cells[ "I9" ].Value = 11;\r\n        worksheet.Cells[ "J9" ].Value = 12;\r\n\r\n        // Insert CellRange from I7 to I8 and shift the following cells down.\r\n        worksheet.InsertRange( "I7", "I8", InsertRangeShiftType.ShiftCellsDown );\r\n\r\n        //Save the workbook\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: InsertCellRange.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function k(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,l)=>{l.d(r,{R:()=>o,x:()=>a});var n=l(96540);const s={},t=n.createContext(s);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);