"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[3657],{7503:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var r=l(74848),s=l(28453);const n={},o="Set Cell value types",a={id:"code-snippets/cell/set-cell-value-type",title:"Set Cell value types",description:"This example demonstrates how to set vell value types when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/cell/set-cell-value-type.md",sourceDirName:"code-snippets/cell",slug:"/code-snippets/cell/set-cell-value-type",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/set-cell-value-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Replace content",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/replace-content"},next:{title:"Set formulas",permalink:"/xceed-libs-doc/workbooks/code-snippets/cell/set-formulas"}},u={},i=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"set-cell-value-types",children:"Set Cell value types"})}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to set vell value types when using the API from the Xceed Workbooks for .NET."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'    private static void CreateFormattedTable( Worksheet worksheet, int startRowId, int startColumnId, int endRowId, int endColumnId )\r\n    {\r\n      var table = worksheet.Tables.Add( startRowId, startColumnId, endRowId, endColumnId, TableStyle.TableStyleMedium9 );\r\n      table.ShowFirstColumnFormatting = true;\r\n      table.AutoFilter.ShowFilterButton = false;\r\n      table.Columns[ 1 ].Name = "Values";\r\n    }\r\n    \r\n    public static void SetCellValueTypes()\r\n    {\r\n      using( var workbook = Workbook.Create( "SetCellValueTypes.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Set Cell Value Types";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Set a value of type number in cells from 2nd column. Indexing starts at 0 for rows and columns.\r\n        worksheet.Cells[ 3, 0 ].Value = "Numeric types";\r\n        worksheet.Cells[ 4, 0 ].Value = "int:";\r\n        worksheet.Cells[ 4, 1 ].Value = ( int )25;\r\n        worksheet.Cells[ 5, 0 ].Value = "double:";\r\n        worksheet.Cells[ 5, 1 ].Value = ( double )33.54;\r\n        worksheet.Cells[ 6, 0 ].Value = "float:";\r\n        worksheet.Cells[ 6, 1 ].Value = ( float )4.5;\r\n        worksheet.Cells[ 7, 0 ].Value = "decimal:";\r\n        worksheet.Cells[ 7, 1 ].Value = ( decimal )22.586;\r\n        worksheet.Cells[ 8, 0 ].Value = "short:";\r\n        worksheet.Cells[ 8, 1 ].Value = ( short )55;\r\n        worksheet.Cells[ 9, 0 ].Value = "long:";\r\n        worksheet.Cells[ 9, 1 ].Value = ( long )8465;\r\n        worksheet.Cells[ 10, 0 ].Value = "byte:";\r\n        worksheet.Cells[ 10, 1 ].Value = ( byte )255;\r\n        worksheet.Cells[ 11, 0 ].Value = "uint:";\r\n        worksheet.Cells[ 11, 1 ].Value = ( uint )152;\r\n        worksheet.Cells[ 12, 0 ].Value = "ulong:";\r\n        worksheet.Cells[ 12, 1 ].Value = ( ulong )101234;\r\n        worksheet.Cells[ 13, 0 ].Value = "ushort:";\r\n        worksheet.Cells[ 13, 1 ].Value = ( ushort )128;\r\n        worksheet.Cells[ 14, 0 ].Value = "sbyte:";\r\n        worksheet.Cells[ 14, 1 ].Value = ( sbyte )-128;\r\n\r\n        // Create a table with the numeric typed cells.\r\n        CellSample.CreateFormattedTable( worksheet, 3, 0, 14, 1 );\r\n\r\n        // Set a value of type Date in cells from 5th column. Indexing starts at 0 for rows and columns.\r\n        worksheet.Cells[ 3, 3 ].Value = "Date/Time types";\r\n        worksheet.Cells[ 4, 3 ].Value = "DateTime:";\r\n        worksheet.Cells[ 4, 4 ].Value = DateTime.Now;\r\n        worksheet.Cells[ 5, 3 ].Value = "TimeSpan:";\r\n        worksheet.Cells[ 5, 4 ].Value = new TimeSpan( 2, 1, 25, 32 );\r\n\r\n        // Create a table with the dateTime typed cells.\r\n        CellSample.CreateFormattedTable( worksheet, 3, 3, 5, 4 );\r\n\r\n        // Set a value of type Text in cells from 8th column. Indexing starts at 0 for rows and columns.\r\n        worksheet.Cells[ 3, 6 ].Value = "Text types";\r\n        worksheet.Cells[ 4, 6 ].Value = "string:";\r\n        worksheet.Cells[ 4, 7 ].Value = "This is a string";\r\n        worksheet.Cells[ 5, 6 ].Value = "enum:";\r\n        worksheet.Cells[ 5, 7 ].Value = EnumValues.Enum_1;\r\n        worksheet.Cells[ 6, 6 ].Value = "char:";\r\n        worksheet.Cells[ 6, 7 ].Value = \'c\';\r\n        worksheet.Cells[ 7, 6 ].Value = "guid:";\r\n        worksheet.Cells[ 7, 7 ].Value = Guid.NewGuid();\r\n\r\n        // Create a table with the text typed cells.\r\n        CellSample.CreateFormattedTable( worksheet, 3, 6, 7, 7 );\r\n\r\n        // Set a value of type boolean in cells from 11th column. Indexing starts at 0 for rows and columns.\r\n        worksheet.Cells[ 3, 9 ].Value = "Boolean types";\r\n        worksheet.Cells[ 4, 9 ].Value = "bool:";\r\n        worksheet.Cells[ 4, 10 ].Value = true;\r\n        worksheet.Cells[ 5, 9 ].Value = "bool:";\r\n        worksheet.Cells[ 5, 10 ].Value = false;\r\n\r\n        // Center align all the cells of the 4th row.\r\n        worksheet.Rows[ 3 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n        // Create a table with the boolean typed cells.\r\n        CellSample.CreateFormattedTable( worksheet, 3, 9, 5, 10 );\r\n\r\n        // AutoFit all the columns with content starting at the 4th row, and make sure the column\'s widths are between 0 and 255.\r\n        worksheet.Columns.AutoFit( 0, 255, 3 );        \r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: SetCellValueTypes.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>a});var r=l(96540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);