"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[3518],{25639:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var t=r(74848),n=r(28453);const o={},s="Delete cell range",a={id:"code-snippets/cell/delete-cell-range",title:"Delete cell range",description:"This example demonstrates how to delete cell range when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/cell/delete-cell-range.md",sourceDirName:"code-snippets/cell",slug:"/code-snippets/cell/delete-cell-range",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/delete-cell-range",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Cell with multiple fonts",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/cell-with-multiple-fonts"},next:{title:"Format part of text",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/format-part-of-text"}},c={},i=[];function h(e){const l={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.header,{children:(0,t.jsx)(l.h1,{id:"delete-cell-range",children:"Delete cell range"})}),"\n",(0,t.jsx)(l.p,{children:"This example demonstrates how to delete cell range when using the API from the Xceed Workbooks for .NET."}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-csharp",children:'    public static void DeleteCellRange()\r\n    {\r\n      using( var workbook = Workbook.Create( "DeleteCellRange.xlsx" ) )\r\n      {\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Delete cell Range";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill Cells for initial display\r\n        worksheet.Cells[ "C5" ].Value = "Before Delete cellRange";\r\n        worksheet.Cells[ "C5" ].Style.Font = new Font() { Bold = true };\r\n        worksheet.Cells[ "C6" ].Value = 1;\r\n        worksheet.Cells[ "D6" ].Value = 2;\r\n        worksheet.Cells[ "E6" ].Value = 3;\r\n        worksheet.Cells[ "C7" ].Value = 4;\r\n        worksheet.Cells[ "D7" ].Value = 5;\r\n        worksheet.Cells[ "E7" ].Value = 6;\r\n        worksheet.Cells[ "C8" ].Value = 7;\r\n        worksheet.Cells[ "D8" ].Value = 8;\r\n        worksheet.Cells[ "E8" ].Value = 9;\r\n        worksheet.Cells[ "C9" ].Value = 10;\r\n        worksheet.Cells[ "D9" ].Value = 11;\r\n        worksheet.Cells[ "E9" ].Value = 12;\r\n\r\n        // Fill Cells for resulting display\r\n        worksheet.Cells[ "H5" ].Value = "After Delete cellRange (I6 to I7)";\r\n        worksheet.Cells[ "H5" ].Style.Font = new Font() { Bold = true };\r\n        worksheet.Cells[ "H6" ].Value = 1;\r\n        worksheet.Cells[ "I6" ].Value = 2;\r\n        worksheet.Cells[ "J6" ].Value = 3;\r\n        worksheet.Cells[ "H7" ].Value = 4;\r\n        worksheet.Cells[ "I7" ].Value = 5;\r\n        worksheet.Cells[ "J7" ].Value = 6;\r\n        worksheet.Cells[ "H8" ].Value = 7;\r\n        worksheet.Cells[ "I8" ].Value = 8;\r\n        worksheet.Cells[ "J8" ].Value = 9;\r\n        worksheet.Cells[ "H9" ].Value = 10;\r\n        worksheet.Cells[ "I9" ].Value = 11;\r\n        worksheet.Cells[ "J9" ].Value = 12;\r\n\r\n        // Delete CellRange from I6 to I7 and shift the following cells up.\r\n        worksheet.DeleteRange( "I6", "I7", DeleteRangeShiftType.ShiftCellsUp );\r\n\r\n        //Save the workbook\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: DeleteCellRange.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function d(e={}){const{wrapper:l}={...(0,n.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,l,r)=>{r.d(l,{R:()=>s,x:()=>a});var t=r(96540);const n={},o=t.createContext(n);function s(e){const l=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:l},e.children)}}}]);