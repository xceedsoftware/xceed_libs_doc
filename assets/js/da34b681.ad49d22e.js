"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1470],{35150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),o=t(28453);const r={},s="Licensing",c={id:"getting-started/licensing",title:"Licensing",description:"In order to use the controls provided by the Xceed Workbooks for .NET in your application, the LicenseKey property of the Licenser class must be set with a valid license key before any other method of the component is called. If you use an invalid or expired license key, fail to license the control altogether, or license it in the wrong place in your code, an exception will be thrown at runtime (see License Exception section below).",source:"@site/workbooks/getting-started/licensing.md",sourceDirName:"getting-started",slug:"/getting-started/licensing",permalink:"/xceed-libs-doc/workbooks/getting-started/licensing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarsworkbooks",previous:{title:"Getting Started",permalink:"/xceed-libs-doc/workbooks/getting-started/overview"},next:{title:"Deploying",permalink:"/xceed-libs-doc/workbooks/getting-started/deploying"}},l={},d=[{value:"Setting the LicenseKey Property",id:"setting-the-licensekey-property",level:2},{value:"C#",id:"c",level:3},{value:"VB.NET",id:"vbnet",level:3},{value:"License Exception",id:"license-exception",level:2}];function a(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"licensing",children:"Licensing"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to use the controls provided by the Xceed Workbooks for .NET in your application, the ",(0,i.jsx)(n.strong,{children:"LicenseKey"})," property of the ",(0,i.jsx)(n.strong,{children:"Licenser"})," class must be set with a valid license key before any other method of the component is called. If you use an invalid or expired license key, fail to license the control altogether, or license it in the wrong place in your code, an exception will be thrown at runtime (see ",(0,i.jsx)(n.strong,{children:"License Exception"})," section below)."]}),"\n",(0,i.jsx)(n.p,{children:"A valid license key can be a registered license key, which is provided to you when you purchase the product(s), or a non-expired trial license key if you are evaluating the component."}),"\n",(0,i.jsx)(n.h2,{id:"setting-the-licensekey-property",children:"Setting the LicenseKey Property"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend that you set the ",(0,i.jsx)(n.strong,{children:"LicenseKey"})," property in the main entry point of the application. For example, C# users can set the ",(0,i.jsx)(n.strong,{children:"LicenseKey"})," property in the static main function. VB.NET users can set the ",(0,i.jsx)(n.strong,{children:"LicenseKey"}),' property in the constructor of the main form or in the "Sub Main" procedure.']}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:'Note that the key begins with "WDN" for Words for .NET.'})})}),"\n",(0,i.jsx)(n.h3,{id:"c",children:"C#"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'static void Main( string[] args )\r\n{\r\n    Xceed.Workbooks.NET.Licenser.LicenseKey = "WBNXX-XXXXX-XXXXX-XXXX";\r\n    Console.WriteLine( "Hello World!" );\r\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"vbnet",children:"VB.NET"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-vbnet",children:'Public Shared Sub Main(ByVal args As String())\r\n    Xceed.Workbooks.NET.Licenser.LicenseKey = "WBNXX-XXXXX-XXXXX-XXXX"\r\n    Console.WriteLine("Hello World!")\r\nEnd Sub\n'})}),"\n",(0,i.jsx)(n.h2,{id:"license-exception",children:"License Exception"}),"\n",(0,i.jsxs)(n.p,{children:["If an invalid or expired license key is used or if the ",(0,i.jsx)(n.strong,{children:"LicenseKey"})," property is omitted or set in the wrong place, an exception will be thrown at runtime. However, depending on the Visual Studio exception debugging settings and the browser in which the application is run, it may be displayed in different ways."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If something goes wrong, the first thing to verify is whether the ",(0,i.jsx)(n.strong,{children:"LicenseKey"})," property has been set to a valid license key."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);