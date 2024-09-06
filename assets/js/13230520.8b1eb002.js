"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[8881],{39341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(74848),i=n(28453),o=n(11470),a=n(19365);const l={},s="Handling File Sharing Issues",d={id:"code-snippets/sftp-capabilities/file03",title:"Handling File Sharing Issues",description:"Introduction",source:"@site/ftp/code-snippets/sftp-capabilities/file03.md",sourceDirName:"code-snippets/sftp-capabilities",slug:"/code-snippets/sftp-capabilities/file03",permalink:"/xceed-docs-words/ftp/code-snippets/sftp-capabilities/file03",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"Performing a manual upload",permalink:"/xceed-docs-words/ftp/code-snippets/sftp-capabilities/file02"},next:{title:"Obtaining the server public key fingerprint",permalink:"/xceed-docs-words/ftp/code-snippets/sftp-capabilities/file04"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Default behavior",id:"default-behavior",level:3},{value:"When writing files",id:"when-writing-files",level:3},{value:"When reading files",id:"when-reading-files",level:3},{value:"Example",id:"example",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"handling-file-sharing-issues",children:"Handling File Sharing Issues"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"The concept of file sharing is an option when a file is opened successfully. The option defines what is to happen if another process tries to open the same file should it work or fail."}),"\n",(0,r.jsxs)(t.p,{children:["In the .NET framework, the option is defined by the %T",":System",".IO.FileShare% enumeration. The ",(0,r.jsx)(t.code,{children:"Xceed.FileSystem.AbstractFile"})," uses the enumeration with the ",(0,r.jsx)(t.code,{children:"OpenRead()"})," and ",(0,r.jsx)(t.code,{children:"OpenWrite()"})," methods as an optional parameter. Default values are available and can be changed at a global level."]}),"\n",(0,r.jsx)(t.p,{children:"In the world of SFtp, FileShare options are only supported in versions 5 and later of the SFtp protocol. When lower versions are used, like the very common version 3 that most servers implement, the FileShare values used by SFtpFile and silently ignored when opening remote files.overhead."}),"\n",(0,r.jsx)(t.h3,{id:"default-behavior",children:"Default behavior"}),"\n",(0,r.jsxs)(t.p,{children:["The default behavior of the component is allow sharing of files for both reading and writing. This means that no blocking is requested when opening remote SFtp files. This behavior is different than other FileSystem media like ",(0,r.jsx)(t.code,{children:"DiskFile"})," for example where no sharing is allowed when opening a file for writing."]}),"\n",(0,r.jsxs)(t.p,{children:["Some SFtp servers return errors when %T",":System",".IO.FileShare% options block reading and/or writing by other server processes when a file is opened. To prevent errors, blocking is not used by default by SFtpFile."]}),"\n",(0,r.jsx)(t.h3,{id:"when-writing-files",children:"When writing files"}),"\n",(0,r.jsxs)(t.p,{children:["Uploading opens SFtp remote files for writing and so uses the ",(0,r.jsx)(t.code,{children:"SFtpFile.DefaultAutomaticWriteFileShare"})," property value."]}),"\n",(0,r.jsxs)(t.p,{children:["If supported by the server, it is best practice to enable blocking for reading, writing and deleting when opening a file for writing. This way, it can be guaranteed that only a single process can write to a file at the same time. This is done by calling ",(0,r.jsx)(t.code,{children:"SFtpFile.SetDefaultAutomaticWriteFileShare"})," method to %FileShare.None",":System",".IO.FileShareFileShare%."]}),"\n",(0,r.jsxs)(t.p,{children:["The default automatic FileShare can be returned to its default value by calling the ",(0,r.jsx)(t.code,{children:"SFtpFile.SetDefaultAutomaticWriteFileShare"})," method with null."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"    // Set the write file share to block reading and/or writing by other processes when writing files\r\n    SFtpFile.SetDefaultAutomaticWriteFileShare( FileShare.None );\r\n\r\n    // Uploading opens SFtp remote files for writing and so uses the DefaultAutomaticWriteFileShare property value\r\n    localFolder.CopyFilesTo( remoteFolder, true, true );\n"})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:"  ' Set the write file share to block reading and/or writing by other processes when writing files\r\n    SFtpFile.SetDefaultAutomaticWriteFileShare(FileShare.None)\r\n\r\n    ' Uploading opens SFtp remote files for writing and so uses the DefaultAutomaticWriteFileShare property value\r\n    localFolder.CopyFilesTo(remoteFolder, True, True)\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"when-reading-files",children:"When reading files"}),"\n",(0,r.jsxs)(t.p,{children:["Downloading opens SFtp remote files for reading and so uses the ",(0,r.jsx)(t.code,{children:"SFtpFile.DefaultAutomaticReadFileShare"})," property value."]}),"\n",(0,r.jsxs)(t.p,{children:["If supported by the server, it is best practice to enable blocking for writing and deleting when opening a file for reading. This way, it can be guaranteed that only a single process can write to a file at the same time but allow for any number of processes to read from the file at the same time. This is done by setting the SFtpFile.",(0,r.jsx)(t.code,{children:"DefaultAutomaticReadFileShare"})," property to %FileShare.Read",":System",".IO.FileShareFileShare%."]}),"\n",(0,r.jsxs)(t.p,{children:["The default automatic FileShare can be returned to its default value by calling the ",(0,r.jsx)(t.code,{children:"SFtpFile.SetDefaultAutomaticReadFileShare"})," method with null."]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"    // Set the read file share to allow reading but block writing and deleting by other processes when reading files\r\n    SFtpFile.SetDefaultAutomaticReadFileShare( FileShare.Read );\r\n\r\n    // Downloading opens SFtp remote files for reading and so uses the DefaultAutomaticReadFileShare property value\r\n    remoteFolder.CopyFilesTo( localFolder, true, true );\n"})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:"  ' Set the read file share to allow reading but block writing and deleting by other processes when reading files\r\n  SFtpFile.SetDefaultAutomaticReadFileShare(FileShare.Read)\r\n\r\n  ' Downloading opens SFtp remote files for reading and so uses the DefaultAutomaticReadFileShare property value\r\n  remoteFolder.CopyFilesTo(localFolder, True, True)\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"It is not necessary to test which version of the SFtp protocol is in use to change the FileShare options. If the protocol version does not support the FileShare options, the values are silently ignored."})}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following example shows how to change the default FileShare option values. It also shows what happens when a FileShare value isn't supported by the SFtp server and what an application can do to remedy the situation."}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'    void Example()\r\n    {\r\n      using( SSHClient ssh = new SSHClient() )\r\n      {\r\n        ssh.Connect( host );\r\n        ssh.Authenticate( username, password );\r\n\r\n        using( SFtpSession sftp = new SFtpSession( ssh ) )\r\n        {\r\n          /* FileShare options are only supported in versions 5 and later of the SFtp protocol.\r\n          When lower versions are used, like the very common version 3, the FileShare values\r\n          used by SFtpFile and silently not used when opening remote files. */\r\n\r\n          // If the SFtp server run version 5 or later of the SFtp protocol\r\n          if( sftp.SFtpServerProtocolVersion >= 5 )\r\n          {\r\n            /* In this example, we test the protocol version number, but this is only done to\r\n            show you can. FileShare values are simply ignored when the protocol version\r\n            does not support them. */\r\n          }\r\n\r\n          // Set the write file share to block reading, writing and deleting by other processes when writing files\r\n          SFtpFile.SetDefaultAutomaticWriteFileShare( FileShare.None );\r\n\r\n          // Set the read file share to allow reading but block writing and deleting by other processes when reading files\r\n          SFtpFile.SetDefaultAutomaticReadFileShare( FileShare.Read );\r\n\r\n          AbstractFolder sourceFolder = new DiskFolder( @"D:\\SomeFolder" );\r\n          AbstractFolder destinationFolder = new SFtpFolder( sftp );\r\n\r\n          FileSystemEvents events = new FileSystemEvents();\r\n          \r\n          // Handle the ItemException event to handle issues with file sharing\r\n          events.ItemException += new ItemExceptionEventHandler( OnItemException );\r\n\r\n          /* We will upload files here. Uploading opens SFtp remote files for writing\r\n          and so uses the DefaultAutomaticWriteFileShare property value. */\r\n\r\n          // Upload the contents of the local folder to the SFtp server\r\n          sourceFolder.CopyFilesTo( events, null, destinationFolder, true, true );\r\n        }\r\n      }\r\n    }\r\n\r\n    static void OnItemException( object sender, ItemExceptionEventArgs e )\r\n    {\r\n      // Express the exception as a UnsupportedFileLockException object\r\n      UnsupportedFileLockException unsupportedFileLockException = e.Exception as UnsupportedFileLockException;\r\n\r\n      // If we did indeed get a UnsupportedFileLockException\r\n      if( unsupportedFileLockException != null )\r\n      {\r\n        /* The SFtp server cannot make the locking guarantee for the FileShare value used\r\n        in the operation. */\r\n\r\n        // The exception message contains the FileShare value used that is not supported\r\n        Console.WriteLine( unsupportedFileLockException.Message );\r\n\r\n        // The FileShare value can be found in the FileShare property of the exception\r\n        Console.WriteLine( "FileShare value used that is not supported: {0}", unsupportedFileLockException.FileShare );\r\n\r\n        /* You can always revert to the default FileShare behavior which does not ask to lock the file */\r\n\r\n        // Revert to the default write file share value\r\n        SFtpFile.SetDefaultAutomaticWriteFileShare( null );\r\n\r\n        // Revert to the default read file share value\r\n        SFtpFile.SetDefaultAutomaticReadFileShare( null );\r\n\r\n        // Retry the operation\r\n        e.Action = ItemExceptionAction.Retry;\r\n      }\r\n    }\n'})})}),(0,r.jsx)(a.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-vb.NET",children:" Private Sub Example()\r\n    Using ssh As New SSHClient()\r\n      ssh.Connect(host)\r\n      ssh.Authenticate(username, password)\r\n\r\n      Using sftp As New SFtpSession(ssh)\r\n'           FileShare options are only supported in versions 5 and later of the SFtp protocol.\r\n'          When lower versions are used, like the very common version 3, the FileShare values\r\n'          used by SFtpFile and silently not used when opening remote files. \r\n\r\n        ' If the SFtp server run version 5 or later of the SFtp protocol\r\n        If sftp.SFtpServerProtocolVersion >= 5 Then\r\n'             In this example, we test the protocol version number, but this is only done to\r\n'            show you can. FileShare values are simply ignored when the protocol version\r\n'            does not support them. \r\n        End If\r\n\r\n        ' Set the write file share to block reading, writing and deleting by other processes when writing files\r\n        SFtpFile.SetDefaultAutomaticWriteFileShare(FileShare.None)\r\n\r\n        ' Set the read file share to allow reading but block writing and deleting by other processes when reading files\r\n        SFtpFile.SetDefaultAutomaticReadFileShare(FileShare.Read)\r\n\r\n        Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\SomeFolder\")\r\n        Dim destinationFolder As AbstractFolder = New SFtpFolder(sftp)\r\n\r\n        Dim events As New FileSystemEvents()\r\n\r\n        ' Handle the ItemException event to handle issues with file sharing\r\n        AddHandler events.ItemException, AddressOf OnItemException\r\n\r\n'           We will upload files here. Uploading opens SFtp remote files for writing\r\n'          and so uses the DefaultAutomaticWriteFileShare property value. \r\n\r\n        ' Upload the contents of the local folder to the SFtp server\r\n        sourceFolder.CopyFilesTo(events, Nothing, destinationFolder, True, True)\r\n      End Using\r\n    End Using\r\n  End Sub\r\n\r\n  Private Shared Sub OnItemException(ByVal sender As Object, ByVal e As ItemExceptionEventArgs)\r\n    ' Express the exception as a UnsupportedFileLockException object\r\n    Dim unsupportedFileLockException As UnsupportedFileLockException = TryCast(e.Exception, UnsupportedFileLockException)\r\n\r\n    ' If we did indeed get a UnsupportedFileLockException\r\n    If unsupportedFileLockException IsNot Nothing Then\r\n'         The SFtp server cannot make the locking guarantee for the FileShare value used\r\n'        in the operation. \r\n\r\n      ' The exception message contains the FileShare value used that is not supported\r\n      Console.WriteLine(unsupportedFileLockException.Message)\r\n\r\n      ' The FileShare value can be found in the FileShare property of the exception\r\n      Console.WriteLine(\"FileShare value used that is not supported: {0}\", unsupportedFileLockException.FileShare)\r\n\r\n      ' You can always revert to the default FileShare behavior which does not ask to lock the file \r\n\r\n      ' Revert to the default write file share value\r\n      SFtpFile.SetDefaultAutomaticWriteFileShare(Nothing)\r\n\r\n      ' Revert to the default read file share value\r\n      SFtpFile.SetDefaultAutomaticReadFileShare(Nothing)\r\n\r\n      ' Retry the operation\r\n      e.Action = ItemExceptionAction.Retry\r\n    End If\r\n  End Sub\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),i=n(34164),o=n(23104),a=n(56347),l=n(205),s=n(57485),d=n(31682),u=n(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function F(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=h(e),[a,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,c]=f({queryString:n,groupId:i}),[F,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),S=(()=>{const e=d??F;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{S&&s(S)}),[S]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,o]),tabValues:o}}var m=n(92303);const S={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),i=l[n].value;i!==r&&(d(t),a(i))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:c,onClick:u,...o,className:(0,i.A)("tabs__item",S.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=F(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",S.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(b,{...t,...e})]})}function x(e){const t=(0,m.A)();return(0,g.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);