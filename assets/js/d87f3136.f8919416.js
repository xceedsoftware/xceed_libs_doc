"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4939],{41156:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=s(74848),d=s(28453);const r={},i="FTP commands",c={id:"basic-concepts/ftp-capabilities/ftp-glossary/ftp-commands",title:"FTP commands",description:"A set of commands that comprise the control information flowing from the client to the server process. The information regarding each FTP command listed below was taken from the FTP RFC.",source:"@site/ftp/basic-concepts/ftp-capabilities/ftp-glossary/ftp-commands.md",sourceDirName:"basic-concepts/ftp-capabilities/ftp-glossary",slug:"/basic-concepts/ftp-capabilities/ftp-glossary/ftp-commands",permalink:"/xceed-docs-words/ftp/basic-concepts/ftp-capabilities/ftp-glossary/ftp-commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"Data connection",permalink:"/xceed-docs-words/ftp/basic-concepts/ftp-capabilities/ftp-glossary/data-connection"},next:{title:"FTP replies",permalink:"/xceed-docs-words/ftp/basic-concepts/ftp-capabilities/ftp-glossary/ftp-replies"}},o={},h=[];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"ftp-commands",children:"FTP commands"})}),"\n",(0,n.jsxs)(t.p,{children:["A set of commands that comprise the control information flowing from the client to the server process. The information regarding each FTP command listed below was taken from the ",(0,n.jsx)(t.code,{children:"FTP RFC"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"This list applies to the FtpClient and AsyncFtpClient classes only."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["AsyncFtpClient's methods now call the corresponding synchronous methods on a background thread. For this reason, the ",(0,n.jsx)(t.code,{children:"AsyncFtpClient"})," class is now considered obsolete. It is therefore recommended to use ",(0,n.jsx)(t.code,{children:"FtpClient"})," and assign a ",(0,n.jsx)(t.code,{children:"SynchronizingObject"})," to its ",(0,n.jsx)(t.code,{children:"SynchronizingObject"})," property to improve code readability."]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Command"}),(0,n.jsx)(t.th,{children:"FtpClient method/property"}),(0,n.jsx)(t.th,{children:"AsyncFtpClient method/property"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ABOR"}),(0,n.jsx)(t.td,{children:"Abort"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Abort"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginAbort"})," method"]}),(0,n.jsx)(t.td,{children:"This command tells the server to abort the previous FTP service command and any associated transfer of data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ACCT"}),(0,n.jsx)(t.td,{children:"Account"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Login"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginLogin"})," method"]}),(0,n.jsx)(t.td,{children:"The argument field is a string identifying the user's account. The command is not necessarily related to the USER command, as some sites may require an account for login and others only for specific access, such as storing files. In the latter case the command may arrive at any time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ALLO"}),(0,n.jsx)(t.td,{children:"Allocate"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PreAllocateStorage"})," property"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PreAllocateStorage"})," property"]}),(0,n.jsx)(t.td,{children:"This command may be required by some servers to reserve sufficient storage to accommodate the new file to be transferred. The argument shall be a decimal integer representing the number of bytes of storage to be reserved for the file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"APPE"}),(0,n.jsx)(t.td,{children:"Append (with create)"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendFile"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendFile"})," method"]}),(0,n.jsx)(t.td,{children:"This command causes the server to accept the data transferred via the data connection and to store the data in a file at the server site. If the file specified in the pathname exists at the server site, then the data shall be appended to that file; otherwise the file specified in the pathname shall be created at the server site."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AUTH"}),(0,n.jsx)(t.td,{children:"Authenticate"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Authenticate"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginAuthenticate"})," method"]}),(0,n.jsx)(t.td,{children:'The argument field is a string identifying a supported mechanism. This string is case-insensitive. Values must be registered with the IANA, except that values beginning with "X-" are reserved for local use.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CCC"}),(0,n.jsx)(t.td,{children:"Clear command channel"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ClearCommandChannel"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ClearCommandChannel"})," method"]}),(0,n.jsx)(t.td,{children:"This command clears the command channel after login to facilitate firewall NAT when connecting using a secure data channel."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CDUP"}),(0,n.jsx)(t.td,{children:"Change to parent directory"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ChangeToParentFolder"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginChangeToParentFolder"})," method"]}),(0,n.jsxs)(t.td,{children:["This command is a special case of ",(0,n.jsx)(t.code,{children:"CWD"}),", and is included to simplify the implementation of programs for transferring directory trees between operating systems having different syntaxes for naming the parent directory."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CWD"}),(0,n.jsx)(t.td,{children:"Change working directory"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ChangeCurrentFolder"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginChangeCurrentFolder"})," method"]}),(0,n.jsx)(t.td,{children:"This command allows the user to work with a different directory or dataset for file storage or retrieval without altering his login or accounting information. Transfer parameters are similarly unchanged. The argument is a pathname specifying a directory or other system dependent file group designator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DELE"}),(0,n.jsx)(t.td,{children:"Delete"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"DeleteFile"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginDeleteFile"})," method"]}),(0,n.jsx)(t.td,{children:"This command causes the file specified in the pathname to be deleted at the server site."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HELP"}),(0,n.jsx)(t.td,{children:"Help"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsx)(t.td,{children:"This command shall cause the server to send helpful information regarding its implementation status over the control connection to the user. The command may take an argument (e.g., any command name) and return more specific information as a response."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"LIST"}),(0,n.jsx)(t.td,{children:"List"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"GetFolderContents"})," and ",(0,n.jsx)(t.code,{children:"GetRawFolderContents"})," methods"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginGetFolderContents"})," and ",(0,n.jsx)(t.code,{children:"BeginGetRawFolderContents"})," methods"]}),(0,n.jsx)(t.td,{children:"This command causes a list to be sent from the server to the passive data transfer process. If the pathname specifies a directory or other group of files, the server should transfer a list of files in the specified directory. If the pathname specifies a file then the server should send current information on the file. A null argument implies the user's current working or default directory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MKD"}),(0,n.jsx)(t.td,{children:"Make directory"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"CreateFolder"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginCreateFolder"})," method"]}),(0,n.jsx)(t.td,{children:"This command causes the directory specified in the pathname to be created as a directory (if the pathname is absolute) or as a subdirectory of the current working directory (if the pathname is relative)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MODE"}),(0,n.jsx)(t.td,{children:"Transfer mode"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:["The argument is a single character code specifying the data transfer modes. The following codes are assigned for transfer modes: ",(0,n.jsx)(t.code,{children:"S"})," - Stream, ",(0,n.jsx)(t.code,{children:"B"})," - Block, ",(0,n.jsx)(t.code,{children:"C"})," - Compressed. The default transfer mode is Stream."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"NLST"}),(0,n.jsx)(t.td,{children:"Name list"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"GetFolderContents"})," and ",(0,n.jsx)(t.code,{children:"GetRawFolderContents"})," methods"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginGetFolderContents"})," and ",(0,n.jsx)(t.code,{children:"BeginGetRawFolderContents"})," methods"]}),(0,n.jsxs)(t.td,{children:["This command causes a directory listing to be sent from server to user site. The pathname should specify a directory or other system-specific file group descriptor; a null argument implies the current directory. The server will return a stream of names of files and ",(0,n.jsx)(t.strong,{children:"no other information"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"NOOP"}),(0,n.jsx)(t.td,{children:"No operation"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method and ",(0,n.jsx)(t.code,{children:"KeepAliveInterval"})," property"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method and ",(0,n.jsx)(t.code,{children:"KeepAliveInterval"})," property"]}),(0,n.jsx)(t.td,{children:"This command does not affect any parameters or previously entered commands. It specifies no action other than that the server send an OK reply."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PASS"}),(0,n.jsx)(t.td,{children:"Password"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Login"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginLogin"})," method"]}),(0,n.jsx)(t.td,{children:"The argument field is a string specifying the user's password. This command must be immediately preceded by the USER command, and, for some sites, completes the user's identification for access control."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PASV"}),(0,n.jsx)(t.td,{children:"Passive"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PassiveTransfer"})," property"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PassiveTransfer"})," property"]}),(0,n.jsx)(t.td,{children:'This command requests the server to "listen" on a data port (which is not its default data port) and to wait for a connection rather than initiate one upon receipt of a transfer command. The response to this command includes the host and port address this server is listening on.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PORT"}),(0,n.jsx)(t.td,{children:"Data port"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PassiveTransfer"})," property"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"PassiveTransfer"})," property"]}),(0,n.jsx)(t.td,{children:"The argument is a HOST-PORT specification for the data port to be used in data connection. There are defaults for both the user and server data ports, and under normal circumstances this command and its reply are not needed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PROT"}),(0,n.jsx)(t.td,{children:"Data Channel Protection Level"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Authenticate"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginAuthenticate"})," method"]}),(0,n.jsxs)(t.td,{children:["The argument is a single character code specifying the data channel protection level. The following codes are assigned: ",(0,n.jsx)(t.code,{children:"C"})," - Clear, ",(0,n.jsx)(t.code,{children:"S"})," - Safe, ",(0,n.jsx)(t.code,{children:"E"})," - Confidential, ",(0,n.jsx)(t.code,{children:"P"})," - Private."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PWD"}),(0,n.jsx)(t.td,{children:"Print working directory"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," or ",(0,n.jsx)(t.code,{children:"GetCurrentFolder"})," methods"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," and ",(0,n.jsx)(t.code,{children:"BeginGetCurrentFolder"})," methods"]}),(0,n.jsx)(t.td,{children:"This command causes the name of the current working directory to be returned in the reply."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"QUIT"}),(0,n.jsx)(t.td,{children:"Logout"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Disconnect"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginDisconnect"})," method"]}),(0,n.jsx)(t.td,{children:"This command terminates a USER and if file transfer is not in progress, the server closes the control connection. If file transfer is in progress, the connection will remain open for result response and the server will then close it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REIN"}),(0,n.jsx)(t.td,{children:"Reinitialize"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ChangeUser"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginChangeUser"})," method"]}),(0,n.jsx)(t.td,{children:"This command terminates a USER, flushing all I/O and account information, except to allow any transfer in progress to be completed. All parameters are reset to the default settings and the control connection is left open."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"REST"}),(0,n.jsx)(t.td,{children:"Restart"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendFile"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendFile"})," method"]}),(0,n.jsx)(t.td,{children:"The argument field represents the server marker at which file transfer is to be restarted. This command does not cause file transfer but skips over the file to the specified data checkpoint. This command shall be immediately followed by the appropriate FTP command which shall cause file transfer to resume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RETR"}),(0,n.jsx)(t.td,{children:"Retrieve"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"ReceiveFile"})," and ",(0,n.jsx)(t.code,{children:"ReceiveMultipleFiles"})," methods"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginReceiveFile"})," and ",(0,n.jsx)(t.code,{children:"BeginReceiveMultipleFiles"})," methods"]}),(0,n.jsx)(t.td,{children:"This command causes the server to transfer a copy of the file, specified in the pathname, to the server or client at the other end of the data connection."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RMD"}),(0,n.jsx)(t.td,{children:"Remove directory"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"DeleteFolder"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginDeleteFolder"})," method"]}),(0,n.jsx)(t.td,{children:"This command causes the directory specified in the pathname to be removed as a directory (if the pathname is absolute) or as a subdirectory of the current working directory (if the pathname is relative)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RNFR"}),(0,n.jsx)(t.td,{children:"Rename from"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"RenameFile"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginRenameFile"})," method"]}),(0,n.jsx)(t.td,{children:'This command specifies the old pathname of the file which is to be renamed. This command must be immediately followed by a "rename to" command specifying the new file pathname.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RNTO"}),(0,n.jsx)(t.td,{children:"Rename to"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"RenameFile"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginRenameFile"})," method"]}),(0,n.jsx)(t.td,{children:'This command specifies the new pathname of the file specified in the immediately preceding "rename from" command. Together the two commands cause a file to be renamed.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SITE"}),(0,n.jsx)(t.td,{children:"Site parameters"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsx)(t.td,{children:"This command is used by the server to provide services specific to his system that are essential to file transfer but not sufficiently universal to be included as commands in the protocol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SMNT"}),(0,n.jsx)(t.td,{children:"Structure mount"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsx)(t.td,{children:"This command allows the user to mount a different file system data structure without altering his login or accounting information."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"STAT"}),(0,n.jsx)(t.td,{children:"Status"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsx)(t.td,{children:"This command shall cause a status response to be sent over the control connection in the form of a reply. The command may be sent during a file transfer or between transfers."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"STOR"}),(0,n.jsx)(t.td,{children:"Store"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendFile"})," and ",(0,n.jsx)(t.code,{children:"SendMultipleFiles"})," methods"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendFile"})," and ",(0,n.jsx)(t.code,{children:"BeginSendMultipleFiles"})," methods"]}),(0,n.jsx)(t.td,{children:"This command causes the server to accept the data transferred via the data connection and to store the data as a file at the server site. If the file specified in the pathname exists at the server site, then its contents shall be replaced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"STOU"}),(0,n.jsx)(t.td,{children:"Store unique"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendFileToUniqueName"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendFileToUniqueName"})," method"]}),(0,n.jsxs)(t.td,{children:["This command behaves like ",(0,n.jsx)(t.code,{children:"STOR"})," except that the resultant file is to be created in the current directory under a name unique to that directory."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"STRU"}),(0,n.jsx)(t.td,{children:"File structure"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:["The argument is a single character code specifying file structure: ",(0,n.jsx)(t.code,{children:"F"})," - File, ",(0,n.jsx)(t.code,{children:"R"})," - Record, ",(0,n.jsx)(t.code,{children:"P"})," - Page. The default structure is File."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SYST"}),(0,n.jsx)(t.td,{children:"System"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"SendCustomCommand"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginSendCustomCommand"})," method"]}),(0,n.jsx)(t.td,{children:"This command is used to find out the type of operating system at the server."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"TYPE"}),(0,n.jsx)(t.td,{children:"Representation type"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"RepresentationType"})," property"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"RepresentationType"})," property"]}),(0,n.jsx)(t.td,{children:"The argument specifies the representation type. The default representation type is ASCII Non-print."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"USER"}),(0,n.jsx)(t.td,{children:"Username"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Login"})," method"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"BeginLogin"})," method"]}),(0,n.jsx)(t.td,{children:"The argument field is a string identifying the user. The user identification is that which is required by the server for access to its file system. This command will normally be the first command transmitted by the user after the control connections are made (some servers may require this). Additional identification information in the form of a password and/or an account command may also be required by some servers. Servers may allow a new USER command to be entered at any point in order to change the access control and/or accounting information. This has the effect of flushing any user, password, and account information already supplied and beginning the login sequence again. All transfer parameters are unchanged and any file transfer in progress is completed under the old access control parameters."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const d={},r=n.createContext(d);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);