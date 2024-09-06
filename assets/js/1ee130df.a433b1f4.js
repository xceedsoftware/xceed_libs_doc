"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1604],{61799:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=n(74848),o=n(28453),s=n(11470),i=n(19365);const a={},l="Connecting to an SFTP server",c={id:"code-snippets/sftp-capabilities/file01",title:"Connecting to an SFTP server",description:"The following example demonstrates how to connect to a SSH server, setup a SFTP session and perform file operations like uploading and downloading files.",source:"@site/ftp/code-snippets/sftp-capabilities/file01.md",sourceDirName:"code-snippets/sftp-capabilities",slug:"/code-snippets/sftp-capabilities/file01",permalink:"/xceed-docs-words/ftp/code-snippets/sftp-capabilities/file01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"SFTP capabilities",permalink:"/xceed-docs-words/ftp/category/sftp-capabilities"},next:{title:"Performing a manual upload",permalink:"/xceed-docs-words/ftp/code-snippets/sftp-capabilities/file02"}},d={},h=[];function u(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"connecting-to-an-sftp-server",children:"Connecting to an SFTP server"})}),"\n",(0,t.jsx)(r.p,{children:"The following example demonstrates how to connect to a SSH server, setup a SFTP session and perform file operations like uploading and downloading files."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-csharp",children:'    using Xceed.SSH.Client;\r\n    using Xceed.SSH.Protocols;\r\n    using Xceed.SSH.Core;\r\n\r\n    using Xceed.FileSystem;\r\n\r\n    namespace DocumentationExamples.SSH\r\n    {\r\n      class ConnectingToASFtpServerExample1\r\n      {\r\n        static void Example()\r\n        {\r\n          string hostName = "sftptest.dreamhosters.com";\r\n          int portNumber = 0;\r\n\r\n          string username = "snippet_sftp";\r\n          string password = "9MNfGgSx";\r\n\r\n          SSHClient ssh;\r\n\r\n          // Create a SSHClient object\r\n          ssh = new SSHClient();\r\n\r\n          // Optional. When debugging, it is very useful to capture trace messages from the component.\r\n          // We assign a trace writer early so that all trace messages are captured. Most errors occur during connection.\r\n          // Any System.IO.TextWriter can be assigned here.\r\n          //ssh.TraceWriter = Console.Out;\r\n          // Or...\r\n          //ssh.TraceWriter = new StreamWriter( @"D:\\Log\\XceedSFtp.log", true );\r\n\r\n          // Connect the SSHClient to the specified host using the specified port number\r\n          try\r\n          {\r\n            ssh.Connect( hostName, portNumber );\r\n          }\r\n          // These exception can be thrown by a call to Connect()\r\n          catch( SSHIdentificationStringException )\r\n          {\r\n            // This means the component was unable to identify the server as a SSH server\r\n            throw;\r\n          }\r\n          catch( SSHKeyExchangeException )\r\n          {\r\n            // This means the client and the server failed to negotiate terms for a connection\r\n            // This usually indicates an interoperability problem with certain old or broken servers\r\n            throw;\r\n          }\r\n          catch( UnsupportedSSHProtocolException )\r\n          {\r\n            // This means the server is using a version of the SSH protocol that is not supported.\r\n            throw;\r\n          }\r\n          catch( SSHTimeoutException )\r\n          {\r\n            // This means the client did not receive a response from the server within the required\r\n            // time. This usually indicate a problem with the Internet connection or an interoperability\r\n            // problem between the server and the client.\r\n            throw;\r\n          }\r\n\r\n          try\r\n          {\r\n            try\r\n            {\r\n              // Authenticate ourselves to the server using the specified username and password combination\r\n              ssh.Authenticate( username, password );\r\n            }\r\n            // These exceptions can be thrown by a call to Authenticate()\r\n            catch( SSHIncorrectPasswordException )\r\n            {\r\n              // This means the authentication method is supported by the server but the password\r\n              // was incorrect for the specified username \r\n              throw;\r\n            }\r\n            catch( SSHAuthenticationPartialSuccessException )\r\n            {\r\n              // This means the authentication was successful but the server requires an additional authentication\r\n              // using another method specified in the exception information\r\n              throw;\r\n            }\r\n            catch( SSHUnsupportedAuthenticationMethodException )\r\n            {\r\n              // This means the authentication method is not supported by the server\r\n              throw;\r\n            }\r\n            catch( SSHAuthenticationFailedException )\r\n            {\r\n              // This means the authentication method failed\r\n              throw;\r\n            }\r\n\r\n            // Create an SFtp session object based on the SSH client we have setup\r\n            using( SFtpSession sftp = new SFtpSession( ssh ) )\r\n            {\r\n              Upload1( sftp );\r\n              Download1( sftp );\r\n            }\r\n          }\r\n          catch( FileSystemIOException )\r\n          {\r\n            throw;\r\n          }\r\n          catch( SSHTimeoutException )\r\n          {\r\n            // This means the client did not receive a response from the server within the required\r\n            // time. This usually indicate a problem with the Internet connection or an interoperability\r\n            // problem between the server and the client.\r\n            throw;\r\n          }\r\n          finally\r\n          {\r\n            // Disconnect from the SSH server\r\n            ssh.Disconnect();\r\n          }\r\n        }\r\n\r\n        static void Upload1( SFtpSession sftp )\r\n        {\r\n          // Create an events object\r\n          FileSystemEvents events = new FileSystemEvents();\r\n\r\n          // Handle the ByteProgression event\r\n          events.ByteProgression += new ByteProgressionEventHandler( OnByteProgression );\r\n\r\n          // Handle the ItemProgression event\r\n          events.ItemProgression += new ItemProgressionEventHandler( OnItemProgression );\r\n\r\n          // Select a local file\r\n          AbstractFile localFile = new DiskFile( "D:\\\\SomeFile.dat" );\r\n          \r\n          // Select a remote folder to put the file in\r\n          AbstractFolder remoteFolder = new SFtpFolder( sftp );\r\n          \r\n          // Upload the local file to the remote folder\r\n          localFile.CopyTo( remoteFolder, true );\r\n\r\n          // Select a specific remote file name for our upload\r\n          AbstractFile remoteFile = remoteFolder.GetFile( "MyContextSpecicFileName.dat" );\r\n\r\n          /* Progression can be tracked by passing a properly setup FileSystemEvents object\r\n          * to the file operation method. */\r\n\r\n          // Upload the local file to the remote file\r\n          localFile.CopyTo( events, null, remoteFile, true );\r\n\r\n          // Select a local folder\r\n          AbstractFolder localFolder = new DiskFolder( "D:\\\\SomeFolder" );\r\n\r\n          // Upload all the files with the .xml extension in the local folder to the remote folder \r\n          localFolder.CopyFilesTo( events, null, remoteFolder, true, true, "*.xml" );\r\n\r\n          /* When all files need to be selected for an operation, it\'s more efficient to not specify\r\n          * any filter than to use a "*" or "*.*" filter. */\r\n\r\n          // Upload all the files in the local folder to the remote folder \r\n          localFolder.CopyFilesTo( events, null, remoteFolder, true, true );\r\n        }\r\n\r\n        static void Download1( SFtpSession sftp )\r\n        {\r\n          // Create an events object\r\n          FileSystemEvents events = new FileSystemEvents();\r\n\r\n          // Handle the ByteProgression event\r\n          events.ByteProgression += new ByteProgressionEventHandler( OnByteProgression );\r\n\r\n          // Handle the ItemProgression event\r\n          events.ItemProgression += new ItemProgressionEventHandler( OnItemProgression );\r\n\r\n          // Select a remote file\r\n          AbstractFile remoteFile = new SFtpFile( sftp, "SomeFile.dat" );\r\n\r\n          // Select a local folder to put the file in\r\n          AbstractFolder localFolder = new DiskFolder( "D:\\\\DownloadedFiles" );\r\n\r\n          // Download the remote file to the local folder\r\n          remoteFile.CopyTo( localFolder, true );\r\n\r\n          // Select a specific local file name for our download\r\n          AbstractFile localFile = localFolder.GetFile( "MyContextSpecicFileName.dat" );\r\n\r\n          /* Progression can be tracked by passing a properly setup FileSystemEvents object\r\n          * to the file operation method. */\r\n\r\n          // Download the remote file to the local file\r\n          remoteFile.CopyTo( events, null, localFile, true );\r\n\r\n          // Select a remote folder\r\n          AbstractFolder remoteFolder = new SFtpFolder( sftp, "SomeFolder" );\r\n\r\n          // Download all the files with the .xml extension in the remote folder to the local folder \r\n          remoteFolder.CopyFilesTo( events, null, localFolder, true, true, "*.xml" );\r\n\r\n          /* When all files need to be selected for an operation, it\'s more efficient to not specify\r\n          * any filter than to use a "*" or "*.*" filter. */\r\n\r\n          // Download all the files in the remote folder to the local folder \r\n          remoteFolder.CopyFilesTo( events, null, localFolder, true, true );\r\n        }\r\n\r\n        static void OnItemProgression( object sender, ItemProgressionEventArgs e )\r\n        {\r\n          // Report progress\r\n          Console.WriteLine( "{0}/{1} ({2}%): {3}%", e.AllItems.Processed, e.AllItems.Total, e.AllItems.Percent, e.TargetItem.FullName );\r\n        }\r\n\r\n        static void OnByteProgression( object sender, ByteProgressionEventArgs e )\r\n        {\r\n          // Report progress\r\n          Console.WriteLine( "{0}: {1}%", e.TargetItem.Name, e.CurrentFileBytes.Percent );\r\n        }\r\n      }\r\n    }\n'})})}),(0,t.jsx)(i.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-vb.NET",children:"  Imports Xceed.SSH.Client\r\n  Imports Xceed.SSH.Protocols\r\n  Imports Xceed.SSH.Core\r\n\r\n  Imports Xceed.FileSystem\r\n\r\n  Namespace DocumentationExamples.SSH\r\n    Friend Class ConnectingToASFtpServerExample1\r\n      Private Shared Sub Example()\r\n        Dim hostName As String = \"sftptest.dreamhosters.com\"\r\n        Dim portNumber As Integer = 0\r\n\r\n        Dim username As String = \"snippet_sftp\"\r\n        Dim password As String = \"9MNfGgSx\"\r\n\r\n        Dim ssh As SSHClient\r\n\r\n        ' Create a SSHClient object\r\n        ssh = New SSHClient()\r\n\r\n        ' Optional. When debugging, it is very useful to capture trace messages from the component.\r\n        ' We assign a trace writer early so that all trace messages are captured. Most errors occur during connection.\r\n        ' Any System.IO.TextWriter can be assigned here.\r\n        'ssh.TraceWriter = Console.Out;\r\n        ' Or...\r\n        'ssh.TraceWriter = new StreamWriter( @\"D:\\Log\\XceedSFtp.log\", true );\r\n\r\n        ' Connect the SSHClient to the specified host using the specified port number\r\n        Try\r\n          ssh.Connect(hostName, portNumber)\r\n        ' These exception can be thrown by a call to Connect()\r\n        Catch e1 As SSHIdentificationStringException\r\n          ' This means the component was unable to identify the server as a SSH server\r\n          Throw\r\n        Catch e2 As SSHKeyExchangeException\r\n          ' This means the client and the server failed to negotiate terms for a connection\r\n          ' This usually indicates an interoperability problem with certain old or broken servers\r\n          Throw\r\n        Catch e3 As UnsupportedSSHProtocolException\r\n          ' This means the server is using a version of the SSH protocol that is not supported.\r\n          Throw\r\n        Catch e4 As SSHTimeoutException\r\n          ' This means the client did not receive a response from the server within the required\r\n          ' time. This usually indicate a problem with the Internet connection or an interoperability\r\n          ' problem between the server and the client.\r\n          Throw\r\n        End Try\r\n\r\n        Try\r\n          Try\r\n            ' Authenticate ourselves to the server using the specified username and password combination\r\n            ssh.Authenticate(username, password)\r\n          ' These exceptions can be thrown by a call to Authenticate()\r\n          Catch e5 As SSHIncorrectPasswordException\r\n            ' This means the authentication method is supported by the server but the password\r\n            ' was incorrect for the specified username \r\n            Throw\r\n          Catch e6 As SSHAuthenticationPartialSuccessException\r\n            ' This means the authentication was successful but the server requires an additional authentication\r\n            ' using another method specified in the exception information\r\n            Throw\r\n          Catch e7 As SSHUnsupportedAuthenticationMethodException\r\n            ' This means the authentication method is not supported by the server\r\n            Throw\r\n          Catch e8 As SSHAuthenticationFailedException\r\n            ' This means the authentication method failed\r\n            Throw\r\n          End Try\r\n\r\n          ' Create an SFtp session object based on the SSH client we have setup\r\n          Using sftp As New SFtpSession(ssh)\r\n            Upload1(sftp)\r\n            Download1(sftp)\r\n          End Using\r\n        Catch e9 As FileSystemIOException\r\n          Throw\r\n        Catch e10 As SSHTimeoutException\r\n          ' This means the client did not receive a response from the server within the required\r\n          ' time. This usually indicate a problem with the Internet connection or an interoperability\r\n          ' problem between the server and the client.\r\n          Throw\r\n        Finally\r\n          ' Disconnect from the SSH server\r\n          ssh.Disconnect()\r\n        End Try\r\n      End Sub\r\n\r\n      Private Shared Sub Upload1(ByVal sftp As SFtpSession)\r\n        ' Create an events object\r\n        Dim events As New FileSystemEvents()\r\n\r\n        ' Handle the ByteProgression event\r\n        AddHandler events.ByteProgression, AddressOf OnByteProgression\r\n\r\n        ' Handle the ItemProgression event\r\n        AddHandler events.ItemProgression, AddressOf OnItemProgression\r\n\r\n        ' Select a local file\r\n        Dim localFile As AbstractFile = New DiskFile(\"D:\\SomeFile.dat\")\r\n\r\n        ' Select a remote folder to put the file in\r\n        Dim remoteFolder As AbstractFolder = New SFtpFolder(sftp)\r\n\r\n        ' Upload the local file to the remote folder\r\n        localFile.CopyTo(remoteFolder, True)\r\n\r\n        ' Select a specific remote file name for our upload\r\n        Dim remoteFile As AbstractFile = remoteFolder.GetFile(\"MyContextSpecicFileName.dat\")\r\n\r\n  '       Progression can be tracked by passing a properly setup FileSystemEvents object\r\n  '       * to the file operation method. \r\n\r\n        ' Upload the local file to the remote file\r\n        localFile.CopyTo(events, Nothing, remoteFile, True)\r\n\r\n        ' Select a local folder\r\n        Dim localFolder As AbstractFolder = New DiskFolder(\"D:\\SomeFolder\")\r\n\r\n        ' Upload all the files with the .xml extension in the local folder to the remote folder \r\n        localFolder.CopyFilesTo(events, Nothing, remoteFolder, True, True, \"*.xml\")\r\n\r\n  '       When all files need to be selected for an operation, it's more efficient to not specify\r\n  '       * any filter than to use a \"*\" or \"*.*\" filter. \r\n\r\n        ' Upload all the files in the local folder to the remote folder \r\n        localFolder.CopyFilesTo(events, Nothing, remoteFolder, True, True)\r\n      End Sub\r\n\r\n      Private Shared Sub Download1(ByVal sftp As SFtpSession)\r\n        ' Create an events object\r\n        Dim events As New FileSystemEvents()\r\n\r\n        ' Handle the ByteProgression event\r\n        AddHandler events.ByteProgression, AddressOf OnByteProgression\r\n\r\n        ' Handle the ItemProgression event\r\n        AddHandler events.ItemProgression, AddressOf OnItemProgression\r\n\r\n        ' Select a remote file\r\n        Dim remoteFile As AbstractFile = New SFtpFile(sftp, \"SomeFile.dat\")\r\n\r\n        ' Select a local folder to put the file in\r\n        Dim localFolder As AbstractFolder = New DiskFolder(\"D:\\DownloadedFiles\")\r\n\r\n        ' Download the remote file to the local folder\r\n        remoteFile.CopyTo(localFolder, True)\r\n\r\n        ' Select a specific local file name for our download\r\n        Dim localFile As AbstractFile = localFolder.GetFile(\"MyContextSpecicFileName.dat\")\r\n\r\n  '       Progression can be tracked by passing a properly setup FileSystemEvents object\r\n  '       * to the file operation method. \r\n\r\n        ' Download the remote file to the local file\r\n        remoteFile.CopyTo(events, Nothing, localFile, True)\r\n\r\n        ' Select a remote folder\r\n        Dim remoteFolder As AbstractFolder = New SFtpFolder(sftp, \"SomeFolder\")\r\n\r\n        ' Download all the files with the .xml extension in the remote folder to the local folder \r\n        remoteFolder.CopyFilesTo(events, Nothing, localFolder, True, True, \"*.xml\")\r\n\r\n  '       When all files need to be selected for an operation, it's more efficient to not specify\r\n  '       * any filter than to use a \"*\" or \"*.*\" filter. \r\n\r\n        ' Download all the files in the remote folder to the local folder \r\n        remoteFolder.CopyFilesTo(events, Nothing, localFolder, True, True)\r\n      End Sub\r\n\r\n      Private Shared Sub OnItemProgression(ByVal sender As Object, ByVal e As ItemProgressionEventArgs)\r\n        ' Report progress\r\n        Console.WriteLine(\"{0}/{1} ({2}%): {3}%\", e.AllItems.Processed, e.AllItems.Total, e.AllItems.Percent, e.TargetItem.FullName)\r\n      End Sub\r\n\r\n      Private Shared Sub OnByteProgression(ByVal sender As Object, ByVal e As ByteProgressionEventArgs)\r\n        ' Report progress\r\n        Console.WriteLine(\"{0}: {1}%\", e.TargetItem.Name, e.CurrentFileBytes.Percent)\r\n      End Sub\r\n    End Class\r\n  End Namespace\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>w});var t=n(96540),o=n(34164),s=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const o=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(o.location.search);r.set(s,e),o.replace({...o.location,search:r.toString()})}),[s,o])]}function f(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,s=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,h]=m({queryString:n,groupId:o}),[f,S]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,d.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),S(e)}),[h,S,s]),tabValues:s}}var S=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const r=e.currentTarget,n=l.indexOf(r),o=a[n].value;o!==t&&(c(r),i(o))},h=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function F(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...r,...e}),(0,v.jsx)(F,{...r,...e})]})}function w(e){const r=(0,S.A)();return(0,v.jsx)(y,{...e,children:h(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);