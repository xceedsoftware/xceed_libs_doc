"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[9688],{60592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),i=n(28453),a=n(11470),c=n(19365);const o={},s="How To Send a Client Certificate",l={id:"code-snippets/making-secure-connections/file03",title:"How To Send a Client Certificate",description:"Here is an example on how to send a client certificate when making a SSL connection.",source:"@site/ftp/code-snippets/making-secure-connections/file03.md",sourceDirName:"code-snippets/making-secure-connections",slug:"/code-snippets/making-secure-connections/file03",permalink:"/xceed-libs-doc/ftp/code-snippets/making-secure-connections/file03",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"How To Make An Implicit Secure Connection",permalink:"/xceed-libs-doc/ftp/code-snippets/making-secure-connections/file02"},next:{title:"How To Handle a PKCS #7 Formatted Client Certificate",permalink:"/xceed-libs-doc/ftp/code-snippets/making-secure-connections/file04"}},u={},d=[];function f(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-send-a-client-certificate",children:"How To Send a Client Certificate"})}),"\n",(0,r.jsxs)(t.p,{children:["Here is an example on how to send a client certificate when making a ",(0,r.jsx)(t.strong,{children:"SSL"})," connection."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(c.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'    static void ClientCertificateExample()\r\n    {\r\n      try\r\n      {\r\n        FtpClient ftp = new FtpClient();\r\n        //ftp.TraceWriter = Console.Out;\r\n\r\n        // Subscribe to the CertificateReceived event\r\n        ftp.CertificateReceived += new CertificateReceivedEventHandler( OnCertificateReceived );\r\n\r\n        // Subscribe to the CertificateRequired event\r\n        ftp.CertificateRequired += new CertificateRequiredEventHandler( OnCertificateRequired );\r\n\r\n        // Connect to the server normally, unencrypted, at the usual ftp port\r\n        ftp.Connect( "localhost", 21 );\r\n\r\n        try\r\n        {\r\n          // Pick an authentication method\r\n          AuthenticationMethod authenticationMethod = AuthenticationMethod.Ssl;\r\n\r\n          // Pick verification flags. If unsure, pick \'None\'.\r\n          VerificationFlags verificationFlags = VerificationFlags.None;\r\n\r\n          /* In this example, we will not provide a client certificate at Connect(). Instead,\r\n          * we subscribe to the CertificateRequired event and if the FTP server asks us for\r\n          * a certificate, we will provide one at that time. \r\n          * \r\n          * That way, if the server is not configured to expect a certificate, it \r\n          * won\'t receive one for no reason. */\r\n\r\n          // The client certificate to submit to the server\r\n          Certificate clientCertificate = null;\r\n\r\n          // Decide if the data channel (for file transfers) will be encrypted or not\r\n          DataChannelProtection dataChannelProtection = DataChannelProtection.Private;\r\n\r\n          // Authenticate and encrypt the connection\r\n          ftp.Authenticate( authenticationMethod, verificationFlags, clientCertificate, dataChannelProtection );\r\n\r\n          // Login. The exchanged information will be encrypted\r\n          ftp.Login( "username", "password" );\r\n\r\n          /* Perform your file transfers */\r\n        }\r\n        finally\r\n        {\r\n          // Make sure we always disconnect\r\n          ftp.Disconnect();\r\n\r\n          ftp.CertificateRequired -= new CertificateRequiredEventHandler( OnCertificateRequired );\r\n          ftp.CertificateReceived -= new CertificateReceivedEventHandler( OnCertificateReceived );\r\n        }\r\n      }\r\n      catch( Exception exception )\r\n      {\r\n        // Output some information about it\r\n        Console.WriteLine( "--\x3e{0}: {1}\\n{2}", exception.GetType().Name, exception.Message, exception.StackTrace );\r\n\r\n        // Fetch the inner exception\r\n        exception = exception.InnerException;\r\n\r\n        // While there is an exception\r\n        while( exception != null )\r\n        {\r\n          // Output some information about it\r\n          Console.WriteLine( "--\x3eInner exception: {0}: {1}\\n{2}", exception.GetType().Name, exception.Message, exception.StackTrace );\r\n\r\n          // Fetch the inner exception\r\n          exception = exception.InnerException;\r\n        }\r\n      }\r\n    }\r\n\r\n    static void OnCertificateRequired( object sender, CertificateRequiredEventArgs e )\r\n    {\r\n      try\r\n      {\r\n        /* The .NET framework exposes certificates using the X509Certificate2 class.\r\n        * The FTP component wraps this class into the Certificate class.\r\n        * The class can load X509 certificate files encoded in the DER or Base64 encoding.\r\n        * Most certificate files are encrypted and require a password, often called\r\n        * the private key, to decode them. */\r\n\r\n        // Load a certificate file to submit to the server\r\n        Certificate clientCertificate = new Certificate( @"D:\\Xceed\\MyX509Certificate.der", "certificate password" );\r\n\r\n        e.Certificate = clientCertificate;\r\n      }\r\n      catch( System.Security.Cryptography.CryptographicException )\r\n      {\r\n        // Trigger failure by not providing a certificate\r\n        e.Certificate = null;\r\n      }\r\n    }\r\n\r\n    static void OnCertificateReceived( object sender, CertificateReceivedEventArgs e )\r\n    {\r\n      // Always accept the certificate\r\n      e.Action = VerificationAction.Accept;\r\n    }\n'})})}),(0,r.jsx)(c.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:"  Private Shared Sub ClientCertificateExample()\r\n    Try\r\n      Dim ftp As New FtpClient()\r\n      'ftp.TraceWriter = Console.Out;\r\n\r\n      ' Subscribe to the CertificateReceived event\r\n      AddHandler ftp.CertificateReceived, AddressOf OnCertificateReceived\r\n\r\n      ' Subscribe to the CertificateRequired event\r\n      AddHandler ftp.CertificateRequired, AddressOf OnCertificateRequired\r\n\r\n      ' Connect to the server normally, unencrypted, at the usual ftp port\r\n      ftp.Connect(\"localhost\", 21)\r\n\r\n      Try\r\n        ' Pick an authentication method\r\n        Dim authenticationMethod As AuthenticationMethod = AuthenticationMethod.Ssl\r\n\r\n        ' Pick verification flags. If unsure, pick 'None'.\r\n        Dim verificationFlags As VerificationFlags = VerificationFlags.None\r\n\r\n'           In this example, we will not provide a client certificate at Connect(). Instead,\r\n'           * we subscribe to the CertificateRequired event and if the FTP server asks us for\r\n'           * a certificate, we will provide one at that time. \r\n'           * \r\n'           * That way, if the server is not configured to expect a certificate, it \r\n'           * won't receive one for no reason. \r\n\r\n        ' The client certificate to submit to the server\r\n        Dim clientCertificate As Certificate = Nothing\r\n\r\n        ' Decide if the data channel (for file transfers) will be encrypted or not\r\n        Dim dataChannelProtection As DataChannelProtection = DataChannelProtection.Private\r\n\r\n        ' Authenticate and encrypt the connection\r\n        ftp.Authenticate(authenticationMethod, verificationFlags, clientCertificate, dataChannelProtection)\r\n\r\n        ' Login. The exchanged information will be encrypted\r\n        ftp.Login(\"username\", \"password\")\r\n\r\n        ' Perform your file transfers \r\n      Finally\r\n        ' Make sure we always disconnect\r\n        ftp.Disconnect()\r\n\r\n        RemoveHandler ftp.CertificateRequired, AddressOf OnCertificateRequired\r\n        RemoveHandler ftp.CertificateReceived, AddressOf OnCertificateReceived\r\n      End Try\r\n    Catch exception As Exception\r\n      ' Output some information about it\r\n      Console.WriteLine(\"--\x3e{0}: {1}\" & Constants.vbLf & \"{2}\", exception.GetType().Name, exception.Message, exception.StackTrace)\r\n\r\n      ' Fetch the inner exception\r\n      exception = exception.InnerException\r\n\r\n      ' While there is an exception\r\n      Do While exception IsNot Nothing\r\n        ' Output some information about it\r\n        Console.WriteLine(\"--\x3eInner exception: {0}: {1}\" & Constants.vbLf & \"{2}\", exception.GetType().Name, exception.Message, exception.StackTrace)\r\n\r\n        ' Fetch the inner exception\r\n        exception = exception.InnerException\r\n      Loop\r\n    End Try\r\n  End Sub\r\n\r\n  Private Shared Sub OnCertificateRequired(ByVal sender As Object, ByVal e As CertificateRequiredEventArgs)\r\n    Try\r\n'         The.NET framework exposes certificates using the X509Certificate2 class.\r\n'         * The FTP component wraps this class into the Certificate class.\r\n'         * The class can load X509 certificate files encoded in the DER or Base64 encoding.\r\n'         * Most certificate files are encrypted and require a password, often called\r\n'         * the private key, to decode them. \r\n\r\n      ' Load a certificate file to submit to the server\r\n      Dim clientCertificate As New Certificate(\"D:\\Xceed\\MyX509Certificate.der\", \"certificate password\")\r\n\r\n      e.Certificate = clientCertificate\r\n    Catch e1 As System.Security.Cryptography.CryptographicException\r\n      ' Trigger failure by not providing a certificate\r\n      e.Certificate = Nothing\r\n    End Try\r\n  End Sub\r\n\r\n  Private Shared Sub OnCertificateReceived(ByVal sender As Object, ByVal e As CertificateReceivedEventArgs)\r\n    ' Always accept the certificate\r\n    e.Action = VerificationAction.Accept\r\n  End Sub\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,c),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),a=n(23104),c=n(56347),o=n(205),s=n(57485),l=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,c.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=f(e),[c,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=h({queryString:n,groupId:i}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),C=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{C&&s(C)}),[C]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=n(92303);const C={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),i=o[n].value;i!==r&&(l(t),c(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",C.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const c=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",C.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);