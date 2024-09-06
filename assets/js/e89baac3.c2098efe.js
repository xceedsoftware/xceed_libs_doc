"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4841],{36994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=n(74848),l=n(28453);const o={},s="Set alignments",i={id:"code-snippets/style/set-alignment",title:"Set alignments",description:"This example demonstrates how to set alignments when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/style/set-alignment.md",sourceDirName:"code-snippets/style",slug:"/code-snippets/style/set-alignment",permalink:"/xceed-docs-words/workbooks/code-snippets/style/set-alignment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Style",permalink:"/xceed-docs-words/workbooks/category/style"},next:{title:"Set borders",permalink:"/xceed-docs-words/workbooks/code-snippets/style/set-borders"}},a={},h=[];function c(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"set-alignments",children:"Set alignments"})}),"\n",(0,r.jsx)(t.p,{children:"This example demonstrates how to set alignments when using the API from the Xceed Workbooks for .NET."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'    public static void SetAlignments()\r\n    {\r\n      using( var workbook = Workbook.Create( "SetAlignments.xlsx" ) )\r\n      {\r\n        // Get first worksheet and change its name.\r\n        var cellWorksheet = workbook.Worksheets[ 0 ];\r\n        cellWorksheet.Name = "Cells";\r\n\r\n        // Add a title.\r\n        cellWorksheet.Cells[ "B1" ].Value = "Set Alignments";\r\n        cellWorksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        AlignCellsHorizontally( cellWorksheet );\r\n        AlignCellsVertically( cellWorksheet );\r\n        WrapTextInCell( cellWorksheet );\r\n\r\n        // Set the width of columns.        \r\n        cellWorksheet.Columns[ 1 ].Width = 20d;\r\n        cellWorksheet.Columns[ 2 ].Width = 25d;\r\n        cellWorksheet.Columns[ 3 ].Width = 25d;\r\n        cellWorksheet.Columns[ 4 ].Width = 25d;\r\n        cellWorksheet.Columns[ 5 ].Width = 25d;\r\n        cellWorksheet.Columns[ 6 ].Width = 25d;\r\n        cellWorksheet.Columns[ 7 ].Width = 13.3d;\r\n        cellWorksheet.Columns[ 8 ].Width = 13.3d;\r\n\r\n\r\n        // Add a second worksheet for rows.\r\n        var rowWorksheet = workbook.Worksheets.Add( "Rows" );\r\n\r\n        // Set the height of 6th row.        \r\n        rowWorksheet.Rows[ 5 ].Height = 50d;\r\n\r\n        // Set row content and alignment.\r\n        rowWorksheet.Cells[ 5, 3 ].Value = "Setting row vertical alignment to center";\r\n        rowWorksheet.Cells[ 5, 11 ].Value = "Another content";\r\n        rowWorksheet.Rows[ 5 ].Style.Alignment.Vertical = VerticalAlignment.Center;\r\n\r\n\r\n        // Add a third worksheet for column.\r\n        var columnWorksheet = workbook.Worksheets.Add( "Columns" );\r\n\r\n        // Set the width of 6th column.        \r\n        columnWorksheet.Columns[ 5 ].Width = 60d;\r\n\r\n        // Set column content and alignment.\r\n        columnWorksheet.Cells[ 5, 5 ].Value = "Setting column horizontal alignment to center";\r\n        columnWorksheet.Cells[ 11, 5 ].Value = "Another content";\r\n        columnWorksheet.Columns[ 5 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n        // Save workbook to disk.\r\n        workbook.Save();\r\n        Console.WriteLine( "\\tCreated: SetAlignments.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    private static void AlignCellsHorizontally( Worksheet worksheet )\r\n    {\r\n      // Set cells content.\r\n      worksheet.Cells[ 2, 0 ].Value = "Horizontal Alignments:";\r\n      worksheet.Cells[ 2, 0 ].Style.Font = new Font() { Bold = true };\r\n      worksheet.Cells[ 3, 1 ].Value = "General";\r\n      worksheet.Cells[ 3, 2 ].Value = "Left";\r\n      worksheet.Cells[ 3, 3 ].Value = "Center";\r\n      worksheet.Cells[ 3, 4 ].Value = "Right";\r\n      worksheet.Cells[ 3, 5 ].Value = "Fill";\r\n      worksheet.Cells[ 3, 6 ].Value = "Center Across Selection";\r\n      worksheet.Cells[ 3, 7 ].Value = "Justify";\r\n      worksheet.Cells[ 3, 8 ].Value = "Distributed";\r\n\r\n      // Set values for different types in cells. Indexing starts at 0 for rows and columns.\r\n      worksheet.Cells[ 3, 0 ].Value = "Types";\r\n      worksheet.Cells[ 4, 0 ].Value = "for number:";\r\n      worksheet.Cells[ 5, 0 ].Value = "for date:";\r\n      worksheet.Cells[ 6, 0 ].Value = "for time:";\r\n      worksheet.Cells[ 7, 0 ].Value = "for boolean:";\r\n      worksheet.Cells[ 8, 0 ].Value = "for text:";\r\n      for( int i = 1; i <= 8; ++i )\r\n      {\r\n        worksheet.Cells[ 4, i ].Value = 225;\r\n        worksheet.Cells[ 5, i ].Value = new DateTime( 2021, 8, 31 );\r\n        worksheet.Cells[ 6, i ].Value = new TimeSpan( 10, 25, 0 );\r\n        worksheet.Cells[ 7, i ].Value = true;\r\n        worksheet.Cells[ 8, i ].Value = ( i <= 6 ) ? "A text" : "A long text showing how justification and distribution is used in a single cell.";\r\n      }\r\n\r\n      // Align the texts horizontally in the cells.\r\n      for( int i = 4; i <= 8; ++i )\r\n      {\r\n        worksheet.Cells[ i, 1 ].Style.Alignment.Horizontal = HorizontalAlignment.General;\r\n        worksheet.Cells[ i, 2 ].Style.Alignment.Horizontal = HorizontalAlignment.Left;\r\n        worksheet.Cells[ i, 3 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n        worksheet.Cells[ i, 4 ].Style.Alignment.Horizontal = HorizontalAlignment.Right;\r\n        worksheet.Cells[ i, 5 ].Style.Alignment.Horizontal = HorizontalAlignment.Fill;\r\n        worksheet.Cells[ i, 6 ].Style.Alignment.Horizontal = HorizontalAlignment.CenterAcrossSelection;\r\n        worksheet.Cells[ i, 7 ].Style.Alignment.Horizontal = HorizontalAlignment.Justify;\r\n        worksheet.Cells[ i, 8 ].Style.Alignment.Horizontal = HorizontalAlignment.Distributed;\r\n      }\r\n\r\n      // Align center all cells from 4th row.\r\n      worksheet.Rows[ 3 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n      // AutoFit the first column, from 4th row to 9th row, and make sure the column\'s width are between 0 and 255.\r\n      worksheet.Columns[ 0 ].AutoFit( 0, 255, 3, 8 );\r\n\r\n      // Create a table with the preceding cells.\r\n      CreateFormattedTable( worksheet, 3, 0, 8, 8 );\r\n    }\r\n\r\n    private static void AlignCellsVertically( Worksheet worksheet )\r\n    {\r\n      // Set cells content.\r\n      worksheet.Cells[ 11, 0 ].Value = "Vertical Alignments:";\r\n      worksheet.Cells[ 11, 0 ].Style.Font = new Font() { Bold = true };\r\n      worksheet.Cells[ 12, 1 ].Value = "Bottom";\r\n      worksheet.Cells[ 12, 2 ].Value = "Center";\r\n      worksheet.Cells[ 12, 3 ].Value = "Top";\r\n      worksheet.Cells[ 12, 4 ].Value = "Justify";\r\n      worksheet.Cells[ 12, 5 ].Value = "Distributed";\r\n\r\n      // Set values for cells. Indexing starts at 0 for rows and columns.\r\n      worksheet.Cells[ 12, 0 ].Value = "Types";\r\n      worksheet.Cells[ 13, 0 ].Value = "for all types:";\r\n      for( int i = 1; i <= 5; ++i )\r\n      {\r\n        worksheet.Cells[ 13, i ].Value = ( i <= 3 ) ? "A text" : "A long text showing how justification and distribution is used in a single cell.";\r\n      }\r\n\r\n      // Sets the height of row 14.\r\n      worksheet.Rows[ 13 ].Height = 100;\r\n\r\n      // Align the texts vertically in the cells.\r\n      worksheet.Cells[ 13, 1 ].Style.Alignment.Vertical = VerticalAlignment.Bottom;\r\n      worksheet.Cells[ 13, 2 ].Style.Alignment.Vertical = VerticalAlignment.Center;\r\n      worksheet.Cells[ 13, 3 ].Style.Alignment.Vertical = VerticalAlignment.Top;\r\n      worksheet.Cells[ 13, 4 ].Style.Alignment.Vertical = VerticalAlignment.Justify;\r\n      worksheet.Cells[ 13, 5 ].Style.Alignment.Vertical = VerticalAlignment.Distributed;\r\n\r\n      // Align center all cells from row 13.\r\n      worksheet.Rows[ 12 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n      // Create a table with the preceding cells.\r\n      CreateFormattedTable( worksheet, 12, 0, 13, 5 );\r\n    }\r\n\r\n    private static void WrapTextInCell( Worksheet worksheet )\r\n    {\r\n      // Set cells content.\r\n      worksheet.Cells[ 16, 0 ].Value = "Wrap Text in Cell:";\r\n      worksheet.Cells[ 16, 0 ].Style.Font = new Font() { Bold = true };\r\n      worksheet.Cells[ 17, 1 ].Value = "This is a long text wrapping in cell B18.";\r\n      worksheet.Cells[ 17, 3 ].Value = "This is a long text NOT wrapping in cell D18.";\r\n\r\n      // Set Text Wrapping for the cell (17,1). Indexing starts at (0,0).\r\n      worksheet.Cells[ 17, 1 ].Style.Alignment.IsTextWrapped = true;\r\n\r\n      // Create a border and Background color around the preceding cells : (17, 0) to (17, 4).\r\n      worksheet.Cells[ 17, 0, 17, 4 ].Style.Borders.SetOutline( LineStyle.Medium, Color.Black );\r\n      worksheet.Cells[ 17, 0, 17, 4 ].Style.Fill.BackgroundColor = Color.LightBlue;\r\n    }\r\n\r\n    private static void CreateFormattedTable( Worksheet worksheet, int startRowId, int startColumnId, int endRowId, int endColumnId )\r\n    {\r\n      var table = worksheet.Tables.Add( startRowId, startColumnId, endRowId, endColumnId, TableStyle.TableStyleMedium9 );\r\n      table.ShowFirstColumnFormatting = true;\r\n      table.AutoFilter.ShowFilterButton = false;\r\n    }\r\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const l={},o=r.createContext(l);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);