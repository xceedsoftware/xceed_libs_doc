"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1930],{52558:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var a=r(74848),t=r(28453);const s={},o="Adding a Chart",d={id:"code-snippets/charts/adding-chart",title:"Adding a Chart",description:"The following example demonstrates how to add a Line Chart to a Document.",source:"@site/docs/code-snippets/charts/adding-chart.md",sourceDirName:"code-snippets/charts",slug:"/code-snippets/charts/adding-chart",permalink:"/xceed-docs-words/docs/code-snippets/charts/adding-chart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Charts",permalink:"/xceed-docs-words/docs/category/charts"},next:{title:"Modifying a Chart",permalink:"/xceed-docs-words/docs/code-snippets/charts/modifying-chart"}},c={},i=[];function h(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"adding-a-chart",children:"Adding a Chart"})}),"\n",(0,a.jsx)(n.p,{children:"The following example demonstrates how to add a Line Chart to a Document."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'static void Main(string[] args)\r\n{\r\n    // Creates a document\r\n    using (var document = DocX.Create("LineChart.docx"))\r\n    {\r\n        // Create a line chart.\r\n        var c = new LineChart();\r\n        c.AddLegend(ChartLegendPosition.Left, false);\r\n\r\n        // Create the data.\r\n        var canada = new List<ChartData>()\r\n        {\r\n            new ChartData() { Category = "Food", Expenses = 100 },\r\n            new ChartData() { Category = "Housing", Expenses = 120 },\r\n            new ChartData() { Category = "Transportation", Expenses = 140 },\r\n            new ChartData() { Category = "Health Care", Expenses = 150 }\r\n        };\r\n\r\n        var usa = new List<ChartData>()\r\n        {\r\n            new ChartData() { Category = "Food", Expenses = 200 },\r\n            new ChartData() { Category = "Housing", Expenses = 150 },\r\n            new ChartData() { Category = "Transportation", Expenses = 110 },\r\n            new ChartData() { Category = "Health Care", Expenses = 100 }\r\n        };\r\n\r\n        var brazil = new List<ChartData>()\r\n        {\r\n            new ChartData() { Category = "Food", Expenses = 125 },\r\n            new ChartData() { Category = "Housing", Expenses = 80 },\r\n            new ChartData() { Category = "Transportation", Expenses = 110 },\r\n            new ChartData() { Category = "Health Care", Expenses = 60 }\r\n        };\r\n\r\n        // Create and add series by binding X and Y.\r\n        var s1 = new Series("Brazil");\r\n        s1.Bind(brazil, "Category", "Expenses");\r\n        c.AddSeries(s1);\r\n\r\n        var s2 = new Series("USA");\r\n        s2.Bind(usa, "Category", "Expenses");\r\n        c.AddSeries(s2);\r\n\r\n        var s3 = new Series("Canada");\r\n        s3.Bind(canada, "Category", "Expenses");\r\n        c.AddSeries(s3);\r\n\r\n        // Insert chart into document\r\n        document.InsertParagraph("Expenses(M$) for selected categories per country")\r\n                .FontSize(15).SpacingAfter(10d);\r\n        document.InsertChart(c);\r\n        document.Save();\r\n    }\r\n}\r\n\r\npublic class ChartData\r\n{\r\n    public string Category { get; set; }\r\n    public double Expenses { get; set; }\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var a=r(96540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);