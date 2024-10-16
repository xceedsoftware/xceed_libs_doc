"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7428],{43040:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var r=s(74848),t=s(28453);const n={},l="Cell, Row, Column access",c={id:"code-snippets/worksheet/cell-row-column-access",title:"Cell, Row, Column access",description:"This example demonstrates how to access to cell/row/column when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/worksheet/cell-row-column-access.md",sourceDirName:"code-snippets/worksheet",slug:"/code-snippets/worksheet/cell-row-column-access",permalink:"/xceed-libs-doc/workbooks/code-snippets/worksheet/cell-row-column-access",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Add, Remove, Hide Worksheets",permalink:"/xceed-libs-doc/workbooks/code-snippets/worksheet/add-remove-hide-worksheet"},next:{title:"Calculate Worksheet formulas",permalink:"/xceed-libs-doc/workbooks/code-snippets/worksheet/calculate-worksheet-formulas"}},a={},i=[];function u(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"cell-row-column-access",children:"Cell, Row, Column access"})}),"\n",(0,r.jsx)(o.p,{children:"This example demonstrates how to access to cell/row/column when using the API from the Xceed Workbooks for .NET."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-csharp",children:'    public static void CellAccess()\r\n    {\r\n      using( var workbook = Workbook.Create( "CellAccess.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Cell Access";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Set a value in cell located at 4th row and 2nd column. Indexing starts at 0 for rows and columns.\r\n        // Accessing with indexes could be faster with many cell access.\r\n        worksheet.Cells[ 3, 1 ].Value = "Cell value at row 3 and column 2";\r\n\r\n        // Set a value in cell located at address "D8". Indexing starts at "A" for columns and "1" for rows.\r\n        // Accessing with addresses could be slower with many cell access.\r\n        worksheet.Cells[ "D8" ].Value = "Cell value at address D8";\r\n\r\n        // AutoFit all columns with values.\r\n        worksheet.Columns.AutoFit();\r\n\r\n        // Making sure only 3 cells in the worksheet exists (the modified cells).\r\n        Debug.Assert( worksheet.Cells.Count == 3 );\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: CellAccess.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    public static void ColumnAccess()\r\n    {\r\n      using( var workbook = Workbook.Create( "ColumnAccess.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Column Access";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Set the width of the 3rd column. Indexing with numbers starts at 0 for columns.\r\n        worksheet.Columns[ 2 ].Width = 60d;\r\n\r\n        // Set the format of the 5th column. Indexing with letters starts at "A" for columns.\r\n        worksheet.Columns[ "E" ].Style.CustomFormat = "$0.000";\r\n\r\n        // Making sure only 3 columns exist in the worksheet (the modified columns or columns with cell values).\r\n        Debug.Assert( worksheet.Columns.Count == 3 );\r\n\r\n        // Set values in cells.\r\n        worksheet.Columns[ 2 ].Cells[ 5 ].Value = "This column has a width of 60.";\r\n        worksheet.Columns[ "E" ].Cells[ 8 ].Value = "A formatted column";\r\n        worksheet.Columns[ "E" ].Cells[ 10 ].Value = 58.364215;\r\n\r\n        // AutoFit column "E".\r\n        worksheet.Columns[ "E" ].AutoFit();\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: ColumnAccess.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    public static void RowAccess()\r\n    {\r\n      using( var workbook = Workbook.Create( "RowAccess.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Row Access";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Set the Height of the 5th row. Indexing with numbers starts at 0 for rows.\r\n        worksheet.Rows[ 4 ].Height = 30d;\r\n\r\n        // Making sure only 2 rows exist in the worksheet (the modified rows or rows with cell values).\r\n        Debug.Assert( worksheet.Rows.Count == 2 );\r\n\r\n        // Set values in cells.\r\n        worksheet.Rows[ 4 ].Cells[ 5 ].Value = "This row has a height of 30.";\r\n\r\n        // AutoFit for 6th column.\r\n        worksheet.Columns[ 5 ].AutoFit();\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: RowAccess.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>l,x:()=>c});var r=s(96540);const t={},n=r.createContext(t);function l(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);