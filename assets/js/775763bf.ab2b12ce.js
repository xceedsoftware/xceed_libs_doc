"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[1032],{264:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=r(74848),i=r(28453),s=r(11470),o=r(19365);const a={},d="AES Encryption",c={id:"basic-concepts/aes-ecryption",title:"AES Encryption",description:"Xceed's implementation of AES encryption lets you incorporate industry standard strong encryption in your .NET applications.",source:"@site/zip/basic-concepts/aes-ecryption.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/aes-ecryption",permalink:"/xceed-docs-words/zip/basic-concepts/aes-ecryption",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Handling Unicode characters",permalink:"/xceed-docs-words/zip/basic-concepts/handling-unicode-characters"},next:{title:"Zip64 zip file format",permalink:"/xceed-docs-words/zip/basic-concepts/zip64-zip-file-format"}},l={},p=[{value:"Encryption method",id:"encryption-method",level:2},{value:"Encrypting",id:"encrypting",level:2},{value:"Decrypting",id:"decrypting",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aes-encryption",children:"AES Encryption"})}),"\n",(0,t.jsx)(n.p,{children:"Xceed's implementation of AES encryption lets you incorporate industry standard strong encryption in your .NET applications."}),"\n",(0,t.jsx)(n.h2,{id:"encryption-method",children:"Encryption method"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"EncryptionMethod"})," enumeration provides the following values, representing the kind of encryption used:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Compatible"}),(0,t.jsx)(n.td,{children:"The traditional ZIP encryption. This is a weak encryption method."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"WinZipAES"}),(0,t.jsxs)(n.td,{children:["The WinZip AES encryption method. This is a strong encryption method. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"This encryption method is not available in Xceed's .NET Compact Framework products."})})]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can specify the implementation to be used for AES encryption. See ",(0,t.jsx)(n.a,{href:"/zip/advanced-concepts/using-alternative-aes-implementations",children:"Using alternative AES implementations"})," under ",(0,t.jsx)(n.em,{children:"Advanced Concepts"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The length of the password is not limited. However, to preserve compatibility with other Zip compression utilities, it is recommended that you limit passwords to no greater than 80 characters. It is also advisable to only use ASCII characters because there is no accepted standard on how to encode non-ASCII characters in passwords."})}),"\n",(0,t.jsx)(n.h2,{id:"encrypting",children:"Encrypting"}),"\n",(0,t.jsx)(n.p,{children:"The following code demonstrates how to use Xceed's AES encryption. WinZipAES is used as the encryption method, and the encryption strength is set to 256 bits:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  public void EncryptExample()\r\n  {\r\n    AbstractFile zipFile = new DiskFile( @"ZipFile.zip" );\r\n\r\n    // If the zip file already exists\r\n    if( zipFile.Exists )\r\n    {\r\n      // Delete it\r\n      zipFile.Delete();\r\n    }\r\n\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    /* The length of the password is not limited. However, to preserve compatibility\r\n    with other Zip compression utilities, it is recommended that you limit passwords\r\n    to no greater than 80 characters.\r\n    \r\n    It is also advisable to only use ASCII characters because there is no\r\n    accepted standard on how to encode non-ASCII characters in passwords. */\r\n    string password = "MyPassword";\r\n\r\n    zip.DefaultEncryptionMethod = EncryptionMethod.WinZipAes;\r\n    zip.DefaultEncryptionStrength = 256;\r\n    zip.DefaultEncryptionPassword = password;\r\n\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Temp\\foo" );\r\n\r\n      // Zip the contents of the source folder\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n    }\r\n  }\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:"  Public Sub EncryptExample()\r\n  Dim zipFile As AbstractFile = New DiskFile(\"ZipFile.zip\")\r\n\r\n  ' If the zip file already exists\r\n  If zipFile.Exists Then\r\n    ' Delete it\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n'       The length of the password is not limited. However, to preserve compatibility\r\n'      with other Zip compression utilities, it is recommended that you limit passwords\r\n'      to no greater than 80 characters.\r\n'      \r\n'      It is also advisable to only use ASCII characters because there is no\r\n'      accepted standard on how to encode non-ASCII characters in passwords. \r\n  Dim password As String = \"MyPassword\"\r\n\r\n  zip.DefaultEncryptionMethod = EncryptionMethod.WinZipAes\r\n  zip.DefaultEncryptionStrength = 256\r\n  zip.DefaultEncryptionPassword = password\r\n\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Temp\\foo\")\r\n\r\n    ' Zip the contents of the source folder\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"decrypting",children:"Decrypting"}),"\n",(0,t.jsx)(n.p,{children:"Decryption is demonstrated in the following code. Note that it is not necessary to specify the encryption method or strength, as these are detected automatically."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  public void DecryptExample()\r\n  {\r\n    // Setup a zip file\r\n    AbstractFile zipFile = new DiskFile( @"ZipFile.zip" );\r\n\r\n    // If the zip file doesn\'t exist\r\n    if( !zipFile.Exists )\r\n    {\r\n      // Fail\r\n      return;\r\n    }\r\n\r\n    // Setup a destination folder\r\n    AbstractFolder destinationFolder = new DiskFolder( @"D:\\Temp\\Unzip" );\r\n\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    /* The length of the password is not limited. However, to preserve compatibility\r\n    with other Zip compression utilities, it is recommended that you limit passwords\r\n    to no greater than 80 characters.\r\n    \r\n    It is also advisable to only use ASCII characters because there is no\r\n    accepted standard on how to encode non-ASCII characters in passwords. */\r\n\r\n    // Set up the list of password possible for the items in this archive\r\n    this.m_passwords = new string[]\r\n    {\r\n      "MyPassword",\r\n      "wrong password",\r\n      "fkE%I-969%=6kei$[BbZ \\"6Iq- =[",\r\n      "}8{)zM#$k//O?t~=iG\'Si{AF\\"S~\\\'/8@1n",\r\n    };\r\n\r\n    // Use our most likely password as the default\r\n    zip.DefaultDecryptionPassword = this.m_passwords[ 0 ];\r\n\r\n    // Subscribe to the events that will allow us to handle invalid passwords\r\n    ZipEvents events = new ZipEvents();\r\n    events.ItemProgression += new ItemProgressionEventHandler( OnItemProgression );\r\n    events.ItemException += new ItemExceptionEventHandler( OnItemException );\r\n\r\n    // Unzip the contents of the zip archive to the destination folder\r\n    zip.CopyFilesTo( events, zip, destinationFolder, true, true );\r\n  }\r\n\r\n  private void OnItemProgression( object sender, ItemProgressionEventArgs e )\r\n  {\r\n    /* We\'re about to process a new item */\r\n\r\n    // Reset the password index\r\n    this.m_passwordIndex = 0;\r\n  }\r\n\r\n  private void OnItemException( object sender, ItemExceptionEventArgs e )\r\n  {\r\n    bool badPassword = false;\r\n\r\n    // Get the archive object we passed through the user data\r\n    ZipArchive zip = ( ZipArchive ) e.UserData;\r\n\r\n    /* We will try to ascertain if we have an invalid password */\r\n\r\n    InvalidDecryptionPasswordException invalidDecryptionPasswordException;\r\n    FileSystemIOException fileSystemIOException;\r\n\r\n    invalidDecryptionPasswordException = e.Exception as InvalidDecryptionPasswordException;\r\n    fileSystemIOException = e.Exception as FileSystemIOException;\r\n\r\n    // If the exception says that a bad password was supplied\r\n    if( invalidDecryptionPasswordException != null )\r\n    {\r\n      badPassword = true;\r\n    }\r\n    // If we had an I/O error during decryption\r\n    else if( fileSystemIOException != null )\r\n    {\r\n      ZippedFile zippedFile = e.CurrentItem as ZippedFile;\r\n\r\n      // If we were reading from a zipped file encrypted in the \'compatible\' method\r\n      if( zippedFile != null && zippedFile.Encrypted &&\r\n          zippedFile.EncryptionMethod.Equals( EncryptionMethod.Compatible ) )\r\n      {\r\n        /* It\'s possible the I/O error occurred because the password is invalid.\r\n        The was the \'compatible\' encryption is designed doesn\'t provide for 100%\r\n        accurate bad password detection, unfortunately.\r\n          \r\n        Note that AES encryption has no such design flaw. */\r\n        badPassword = true;\r\n      }\r\n    }\r\n\r\n    // If we had a bad password\r\n    if( badPassword )\r\n    {\r\n      // If we haven\'t gone through our password list\r\n      if( this.m_passwordIndex < this.m_passwords.Length )\r\n      {\r\n        // Set the current password and move the index to the next password\r\n        zip.DefaultDecryptionPassword = this.m_passwords[ this.m_passwordIndex++ ];\r\n\r\n        // Retry unzipping the file\r\n        e.Action = ItemExceptionAction.Retry;\r\n      }\r\n      else\r\n      {\r\n        // Skip the file\r\n        e.Action = ItemExceptionAction.Ignore;\r\n      }\r\n    }\r\n  }\r\n\r\n  private string[] m_passwords;\r\n  private int m_passwordIndex;\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:"  Public Sub DecryptExample()\r\n  ' Setup a zip file\r\n  Dim zipFile As AbstractFile = New DiskFile(\"ZipFile.zip\")\r\n\r\n  ' If the zip file doesn't exist\r\n  If (Not zipFile.Exists) Then\r\n    ' Fail\r\n    Return\r\n  End If\r\n\r\n  ' Setup a destination folder\r\n  Dim destinationFolder As AbstractFolder = New DiskFolder(\"D:\\Temp\\Unzip\")\r\n\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n'       The length of the password is not limited. However, to preserve compatibility\r\n'      with other Zip compression utilities, it is recommended that you limit passwords\r\n'      to no greater than 80 characters.\r\n'      \r\n'      It is also advisable to only use ASCII characters because there is no\r\n'      accepted standard on how to encode non-ASCII characters in passwords. \r\n\r\n  ' Set up the list of password possible for the items in this archive\r\n  Me.m_passwords = New String() { \"MyPassword\", \"wrong password\", \"fkE%I-969%=6kei$[BbZ \"\"6Iq- =[\", \"}8{)zM#$k//O?t~=iG'Si{AF\"\"S~'/8@1n\" }\r\n\r\n  ' Use our most likely password as the default\r\n  zip.DefaultDecryptionPassword = Me.m_passwords(0)\r\n\r\n  ' Subscribe to the events that will allow us to handle invalid passwords\r\n  Dim events As New ZipEvents()\r\n  AddHandler events.ItemProgression, AddressOf OnItemProgression\r\n  AddHandler events.ItemException, AddressOf OnItemException\r\n\r\n  ' Unzip the contents of the zip archive to the destination folder\r\n  zip.CopyFilesTo(events, zip, destinationFolder, True, True)\r\nEnd Sub\r\n\r\nPrivate Sub OnItemProgression(ByVal sender As Object, ByVal e As ItemProgressionEventArgs)\r\n  ' We're about to process a new item \r\n\r\n  ' Reset the password index\r\n  Me.m_passwordIndex = 0\r\nEnd Sub\r\n\r\nPrivate Sub OnItemException(ByVal sender As Object, ByVal e As ItemExceptionEventArgs)\r\n  Dim badPassword As Boolean = False\r\n\r\n  ' Get the archive object we passed through the user data\r\n  Dim zip As ZipArchive = CType(e.UserData, ZipArchive)\r\n\r\n  ' We will try to ascertain if we have an invalid password \r\n\r\n  Dim invalidDecryptionPasswordException As InvalidDecryptionPasswordException\r\n  Dim fileSystemIOException As FileSystemIOException\r\n\r\n  invalidDecryptionPasswordException = TryCast(e.Exception, InvalidDecryptionPasswordException)\r\n  fileSystemIOException = TryCast(e.Exception, FileSystemIOException)\r\n\r\n  ' If the exception says that a bad password was supplied\r\n  If invalidDecryptionPasswordException IsNot Nothing Then\r\n    badPassword = True\r\n  ' If we had an I/O error during decryption\r\n  ElseIf fileSystemIOException IsNot Nothing Then\r\n    Dim zippedFile As ZippedFile = TryCast(e.CurrentItem, ZippedFile)\r\n\r\n    ' If we were reading from a zipped file encrypted in the 'compatible' method\r\n    If zippedFile IsNot Nothing AndAlso zippedFile.Encrypted AndAlso zippedFile.EncryptionMethod.Equals(EncryptionMethod.Compatible) Then\r\n'           It's possible the I/O error occurred because the password is invalid.\r\n'          The was the 'compatible' encryption is designed doesn't provide for 100%\r\n'          accurate bad password detection, unfortunately.\r\n'            \r\n'          Note that AES encryption has no such design flaw. \r\n      badPassword = True\r\n    End If\r\n  End If\r\n\r\n  ' If we had a bad password\r\n  If badPassword Then\r\n    ' If we haven't gone through our password list\r\n    If Me.m_passwordIndex < Me.m_passwords.Length Then\r\n      ' Set the current password and move the index to the next password\r\n      zip.DefaultDecryptionPassword = Me.m_passwords(Me.m_passwordIndex)\r\n      Me.m_passwordIndex += 1\r\n\r\n      ' Retry unzipping the file\r\n      e.Action = ItemExceptionAction.Retry\r\n    Else\r\n      ' Skip the file\r\n      e.Action = ItemExceptionAction.Ignore\r\n    End If\r\n  End If\r\nEnd Sub\r\n\r\nPrivate m_passwords() As String\r\nPrivate m_passwordIndex As Integer\n"})})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>E});var t=r(96540),i=r(34164),s=r(23104),o=r(56347),a=r(205),d=r(57485),c=r(31682),l=r(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function u(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function w(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=h(e),[o,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,p]=m({queryString:r,groupId:i}),[w,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,l.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),y=(()=>{const e=c??w;return u({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{y&&d(y)}),[y]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),p(e),f(e)}),[p,f,s]),tabValues:s}}var f=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),l=e=>{const n=e.currentTarget,r=d.indexOf(n),i=a[r].value;i!==t&&(c(n),o(i))},p=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:p,onClick:l,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=w(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function E(e){const n=(0,f.A)();return(0,b.jsx)(I,{...e,children:p(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);