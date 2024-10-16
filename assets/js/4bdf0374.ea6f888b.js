"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[8657],{82645:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>w,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),t=r(28453);const s={},l="Split rows & columns",i={id:"code-snippets/sheetview/split-rows-columns",title:"Split rows & columns",description:"This example demonstrates how to split rows and columns when using the API from the Xceed Workbooks for .NET.",source:"@site/workbooks/code-snippets/sheetview/split-rows-columns.md",sourceDirName:"code-snippets/sheetview",slug:"/code-snippets/sheetview/split-rows-columns",permalink:"/xceed-libs-doc/workbooks/code-snippets/sheetview/split-rows-columns",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Freeze rows & columns",permalink:"/xceed-libs-doc/workbooks/code-snippets/sheetview/freeze-rows-columns"},next:{title:"Style",permalink:"/xceed-libs-doc/workbooks/category/style"}},d={},c=[];function a(e){const o={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"split-rows--columns",children:"Split rows & columns"})}),"\n",(0,n.jsx)(o.p,{children:"This example demonstrates how to split rows and columns when using the API from the Xceed Workbooks for .NET."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-csharp",children:'    public static void SplitRowsColumns()\r\n    {\r\n      using( var workbook = Workbook.Create( "SplitRowsColumns.xlsx" ) )\r\n      {\r\n        // Get the first worksheet. A workbook contains at least 1 worksheet.\r\n        var worksheet = workbook.Worksheets[ 0 ];\r\n\r\n        // Add a title.\r\n        worksheet.Cells[ "B1" ].Value = "Split Rows and Columns";\r\n        worksheet.Cells[ "B1" ].Style.Font = new Font() { Bold = true, Size = 15.5d };\r\n\r\n        // Fill cells content.\r\n        FillCellContent( worksheet );\r\n\r\n        // Split horizontally after first 5 rows and add a Fill Background on them.\r\n        worksheet.SheetView.SplitRows = 5;\r\n        worksheet.Rows[ 0, 4 ].Style.Fill.BackgroundColor = System.Drawing.Color.LightCyan;\r\n\r\n        // Split vertically after 1st column and add a Fill Background on first column.\r\n        worksheet.SheetView.SplitColumns = 1;\r\n        worksheet.Columns[ 0 ].Style.Fill.BackgroundColor = System.Drawing.Color.MediumSpringGreen;\r\n\r\n        // Save workbook to disk.\r\n        workbook.SaveAs( "SplitRowsColumns.xlsx" );\r\n        Console.WriteLine( "\\tCreated: SplitRowsColumns.xlsx\\n" );\r\n      }\r\n    }\r\n\r\n    private static void FillCellContent( Worksheet worksheet )\r\n    {\r\n      var random = new Random();\r\n\r\n      Debug.Assert( worksheet != null, "Worksheet whouldn\'t be null.");\r\n\r\n      for( var columnId = 1; columnId <= 50; ++columnId )\r\n      {\r\n        // First Rows of data cells.\r\n        worksheet.Cells[ 4, columnId ].Value = new DateTime( 2022, 6, 1 ).AddDays( columnId - 1 );\r\n      }\r\n      for( var rowId = 5; rowId < 53; ++rowId )\r\n      {\r\n        // First Columns of data cells.\r\n        worksheet.Cells[ rowId, 0 ].Value = new DateTime( 2022, 6, 1 ).AddMinutes( ( rowId - 5 ) * 30 );\r\n      }\r\n      for( var columnId = 1; columnId <= 50; ++columnId )\r\n      {\r\n        for( var rowId = 5; rowId < 53; ++rowId )\r\n        {\r\n          // Inner cells.\r\n          worksheet.Cells[ rowId, columnId ].Value = random.Next( 0, 2 ) == 1 ? "YES" : "NO";\r\n        }\r\n      }\r\n\r\n      // Format DateTimes.\r\n      worksheet.Rows[ 4 ].Style.CustomFormat = "yyyy/MM/dd";\r\n      worksheet.Columns[ 0 ].Style.CustomFormat = "HH:mm";\r\n\r\n      // Center cell content rowId, columnId from (4, 0) to (52, 50)\r\n      worksheet.Cells[ 4, 0, 52, 50 ].Style.Alignment.Horizontal = HorizontalAlignment.Center;\r\n\r\n      // AutoFit Columns, with a width from 0 to 255, starting at rowId 4.\r\n      worksheet.Columns.AutoFit( 0, 255, 4 );\r\n    }\n'})})]})}function w(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>l,x:()=>i});var n=r(96540);const t={},s=n.createContext(t);function l(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);