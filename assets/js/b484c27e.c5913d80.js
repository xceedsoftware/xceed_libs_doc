"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4266],{9448:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>w,contentTitle:()=>n,default:()=>i,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var t=s(74848),l=s(28453);const o={},n="Insert or Delete rows",a={id:"code-snippets/worksheet/insert-delete-rows",title:"Insert or Delete rows",description:"This example demonstrates how to insert/ delete rows when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/worksheet/insert-delete-rows.md",sourceDirName:"code-snippets/worksheet",slug:"/code-snippets/worksheet/insert-delete-rows",permalink:"/xceed-docs-words/workbooks/code-snippets/worksheet/insert-delete-rows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Calculate Worksheet formulas",permalink:"/xceed-docs-words/workbooks/code-snippets/worksheet/calculate-worksheet-formulas"},next:{title:"Insert or Delete columns",permalink:"/xceed-docs-words/workbooks/code-snippets/worksheet/insert-delete-columns"}},w={},h=[];function d(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"insert-or-delete-rows",children:"Insert or Delete rows"})}),"\n",(0,t.jsx)(r.p,{children:"This example demonstrates how to insert/ delete rows when using the API from the Xceed Workbooks for .NET."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'    public static void InsertDeleteRows()\r\n    {\r\n      using( var workbook = Workbook.Create( "InsertDeleteRows.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Insert and delete Rows";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill cells for first table.\r\n        worksheet.Cells[ "D4" ].Value = "Insert Rows:";\r\n        worksheet.Cells[ "D4" ].Style.Font.Bold = true;\r\n        worksheet.Cells[ "D5" ].Value = "2022 Math class - Students Test Results:";\r\n        worksheet.Cells[ "D5" ].Style.Font.Bold = true;\r\n\r\n        worksheet.Cells[ "D6" ].Value = "Name";\r\n        worksheet.Cells[ "E6" ].Value = "Midterm(40%)";\r\n        worksheet.Cells[ "F6" ].Value = "Final(60%)";\r\n        worksheet.Cells[ "D7" ].Value = "Mike Jones";\r\n        worksheet.Cells[ "E7" ].Value = 84;\r\n        worksheet.Cells[ "F7" ].Value = 78;\r\n        worksheet.Cells[ "D8" ].Value = "Kelly Smith";\r\n        worksheet.Cells[ "E8" ].Value = 85;\r\n        worksheet.Cells[ "F8" ].Value = 82;\r\n        worksheet.Cells[ "D9" ].Value = "Cindy Newman";\r\n        worksheet.Cells[ "E9" ].Value = 71;\r\n        worksheet.Cells[ "F9" ].Value = 81;\r\n        worksheet.Cells[ "D10" ].Value = "Michael Sawyer";\r\n        worksheet.Cells[ "E10" ].Value = 61;\r\n        worksheet.Cells[ "F10" ].Value = 66;\r\n\r\n        // Create a 4-rows table from previous cells, along with the header row.\r\n        var testTable = worksheet.Tables.Add( "D6", "F10", TableStyle.TableStyleDark1 );\r\n        testTable.AutoFilter.ShowFilterButton = false;\r\n\r\n        // Insert 2 rows in the middle of the testTable (at rowId 8). RowId starts at 0.\r\n        worksheet.InsertRows( 8, 2 );\r\n\r\n        // testTable has2 more rows, extending from cells D6 to F12.\r\n        Debug.Assert( testTable.CellRange.StartingElement.Address == "D6" );\r\n        Debug.Assert( testTable.CellRange.EndingElement.Address == "F12" );\r\n\r\n\r\n        // Fill cells for 2nd table.\r\n        worksheet.Cells[ "D14" ].Value = "Delete Rows:";\r\n        worksheet.Cells[ "D14" ].Style.Font.Bold = true;\r\n        worksheet.Cells[ "D15" ].Value = "Matt\'s owned cars (initially 5 blue rows)";\r\n        worksheet.Cells[ "D15" ].Style.Font.Bold = true;\r\n\r\n        worksheet.Cells[ "D16" ].Value = "Type";\r\n        worksheet.Cells[ "E16" ].Value = "Bought in";\r\n        worksheet.Cells[ "F16" ].Value = "Sold in";\r\n        worksheet.Cells[ "D17" ].Value = "Chevrolet Cavalier";\r\n        worksheet.Cells[ "E17" ].Value = "June 1999";\r\n        worksheet.Cells[ "F17" ].Value = "September 2004";\r\n        worksheet.Cells[ "D18" ].Value = "Honda Civic";\r\n        worksheet.Cells[ "E18" ].Value = "October 2004";\r\n        worksheet.Cells[ "F18" ].Value = "April 2010";\r\n        worksheet.Cells[ "D19" ].Value = "Toyota Echo";\r\n        worksheet.Cells[ "E19" ].Value = "April 2010";\r\n        worksheet.Cells[ "F19" ].Value = "June 2010";\r\n        worksheet.Cells[ "D20" ].Value = "Dodge Caravan";\r\n        worksheet.Cells[ "E20" ].Value = "July 2010";\r\n        worksheet.Cells[ "F20" ].Value = "March 2018";\r\n        worksheet.Cells[ "D21" ].Value = "Audi A4";\r\n        worksheet.Cells[ "E21" ].Value = "March 2018";\r\n        worksheet.Cells[ "F21" ].Value = "May 2021";\r\n\r\n        // Create a 5-rows table from previous cells, along with the header row.\r\n        var carTable = worksheet.Tables.Add( "D16", "F21", TableStyle.TableStyleDark2 );\r\n        carTable.AutoFilter.ShowFilterButton = false;\r\n\r\n        // Delete 1 row in the middle of the carTable (at rowId 19). RowId starts at 0.\r\n        worksheet.DeleteRows( 19 );\r\n\r\n        // carTable has 1 less row, extending from cells D16 to F20.\r\n        Debug.Assert( carTable.CellRange.StartingElement.Address == "D16" );\r\n        Debug.Assert( carTable.CellRange.EndingElement.Address == "F20" );\r\n\r\n        // AutoFits all Columns.\r\n        worksheet.Columns.AutoFit();\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: InsertDeleteRows.xslx\\n" );\r\n      }\r\n    }\r\n\n'})})]})}function i(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>a});var t=s(96540);const l={},o=t.createContext(l);function n(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);