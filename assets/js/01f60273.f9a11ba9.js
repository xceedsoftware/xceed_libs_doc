"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[726],{14581:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=t(74848),n=t(28453);const l={},s="Lock specific cells",c={id:"code-snippets/protection/lock-specific-cell",title:"Lock specific cells",description:"This example demonstrates how to lock specific cells when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/protection/lock-specific-cell.md",sourceDirName:"code-snippets/protection",slug:"/code-snippets/protection/lock-specific-cell",permalink:"/xceed-libs-doc/workbooks/code-snippets/protection/lock-specific-cell",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Remove Worksheet protection",permalink:"/xceed-libs-doc/workbooks/code-snippets/protection/remove-worksheet-protection"},next:{title:"Unlock specific cells",permalink:"/xceed-libs-doc/workbooks/code-snippets/protection/unlock-specific-cell"}},i={},a=[];function k(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"lock-specific-cells",children:"Lock specific cells"})}),"\n",(0,r.jsx)(o.p,{children:"This example demonstrates how to lock specific cells when using the API from the Xceed Workbooks for .NET."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-csharp",children:'    public static void LockSpecificCells()\r\n    {\r\n      using( var workbook = Workbook.Create( "LockSpecificCells.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Lock Specific Cells";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Set content.\r\n        worksheet.Cells[ "B4" ].Value = "Only Light Pink cells are locked.";\r\n        worksheet.Cells[ "B4" ].Style.Font.Bold = true;\r\n\r\n        worksheet.Cells[ "C6" ].Value = "Date";\r\n        worksheet.Cells[ "D6" ].Value = "Employee";\r\n        worksheet.Cells[ "E6" ].Value = "In Time";\r\n        worksheet.Cells[ "F6" ].Value = "Out Time";\r\n\r\n        worksheet.Cells[ "C7" ].Value = new DateTime( 2022, 5, 1 );\r\n        worksheet.Cells[ "D7" ].Value = "Micheal Smith";\r\n        worksheet.Cells[ "E7" ].Value = new TimeSpan( 8, 0, 0 );\r\n        worksheet.Cells[ "F7" ].Value = new TimeSpan( 15, 30, 0 );\r\n        worksheet.Cells[ "D8" ].Value = "Stella Corleone";\r\n        worksheet.Cells[ "E8" ].Value = new TimeSpan( 9, 15, 0 );\r\n        worksheet.Cells[ "F8" ].Value = new TimeSpan( 16, 30, 0 );\r\n\r\n        worksheet.Cells[ "C10" ].Value = new DateTime( 2022, 5, 2 );\r\n        worksheet.Cells[ "D10" ].Value = "Carl Debrusk";\r\n        worksheet.Cells[ "E10" ].Value = new TimeSpan( 8, 15, 0 );\r\n        worksheet.Cells[ "F10" ].Value = new TimeSpan( 13, 45, 0 );\r\n        worksheet.Cells[ "D11" ].Value = "Stella Corleone";\r\n        worksheet.Cells[ "E11" ].Value = new TimeSpan( 8, 45, 0 );\r\n        worksheet.Cells[ "F11" ].Value = new TimeSpan( 12, 30, 0 );\r\n        worksheet.Cells[ "D12" ].Value = "Michael Smith";\r\n\r\n        // AutoFit columns from rowId 6 until the end for width between 0 and 255. RowId starts at 0.\r\n        worksheet.Columns.AutoFit( 0, 255, 6 );\r\n        // Format cells in column "E" and "F" to display times.\r\n        worksheet.Columns[ "E", "F" ].Style.CustomFormat = "hh:mm";\r\n        // Horitonaly align content in columns "C" through "F".\r\n        worksheet.Columns[ "C", "F" ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n        // Put the data in a formatted table.\r\n        var table = worksheet.Tables.Add( "C6", "F12", TableStyle.TableStyleLight14 );\r\n        table.AutoFilter.ShowFilterButton = false;\r\n\r\n        // All cells have their "locked" property set to true by default and will be activated when the worksheet will be protected.\r\n        // So, we unlock the first 100 worksheet\'s columns cells, so they can be edited.\r\n        worksheet.Columns[ 0, 100 ].Style.Protection.Locked = false;\r\n\r\n        // Lock cells from "C7" to "F8", hide them for the formula bar and set a LightPink background.\r\n        worksheet.Cells[ "C7", "F8" ].Style.Protection.Locked = true;\r\n        worksheet.Cells[ "C7", "F8" ].Style.Protection.HiddenFormula = true;\r\n        worksheet.Cells[ "C7", "F8" ].Style.Fill.BackgroundColor = System.Drawing.Color.LightPink;\r\n\r\n        // Protect the worksheet and only allow inserting new rows. Unlocked cells can also be edited.\r\n        var protection = new WorksheetProtection() { AllowInsertRows = true };\r\n        worksheet.Protect( protection );\r\n\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: LockSpecificCells.xlsx\\n" );\r\n      }\r\n    }\n'})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>c});var r=t(96540);const n={},l=r.createContext(n);function s(e){const o=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:o},e.children)}}}]);