"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[7981],{64690:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var t=r(74848),o=r(28453),i=r(11470),s=r(19365);const a={},c="Proxy Support",h={id:"basic-concepts/sftp-capabilities/proxy-support",title:"Proxy Support",description:"Some SSH/SFtp servers cannot be accessed from the open internet. They can only be access through proxies.",source:"@site/ftp/basic-concepts/sftp-capabilities/proxy-support.md",sourceDirName:"basic-concepts/sftp-capabilities",slug:"/basic-concepts/sftp-capabilities/proxy-support",permalink:"/xceed-libs-doc/ftp/basic-concepts/sftp-capabilities/proxy-support",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarftp",previous:{title:"SFTP Capabilities",permalink:"/xceed-libs-doc/ftp/basic-concepts/sftp-capabilities/overview"},next:{title:"Public Key Authentication",permalink:"/xceed-libs-doc/ftp/basic-concepts/sftp-capabilities/public-key-auth"}},l={},p=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"proxy-support",children:"Proxy Support"})}),"\n",(0,t.jsx)(n.p,{children:"Some SSH/SFtp servers cannot be accessed from the open internet. They can only be access through proxies."}),"\n",(0,t.jsx)(n.p,{children:"In the context of network computing, a proxy is a server that allows clients to make indirect network connections to other network services. These servers are called proxy servers."}),"\n",(0,t.jsx)(n.p,{children:"Components or applications that support connecting to services through a proxy server are called proxy clients."}),"\n",(0,t.jsx)(n.p,{children:"There are various protocols that define how a proxy client can request a proxy server to make a network connection on its behalf."}),"\n",(0,t.jsx)(n.p,{children:"Xceed SFtp for .NET is a proxy client. It supports the following proxy protocols:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["HTTP proxy through the ",(0,t.jsx)(n.code,{children:"HttpProxyClient"})," Class"]}),"\n",(0,t.jsxs)(n.li,{children:["SOCKS 4 / 4A proxy through the ",(0,t.jsx)(n.code,{children:"SOCKS4ProxyClient"})," Class"]}),"\n",(0,t.jsxs)(n.li,{children:["SOCKS 5 proxy through the ",(0,t.jsx)(n.code,{children:"SOCKS5ProxyClient"})," Class"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To use, a proxy client object of the desired type is created and initialized with the proxy server's address and the credentials to access the proxy server, if applicable. Then, it is assigned to the SSHClient.ProxyClient property before the SSH client attempts to connect. When SSHClient.Connect() is called, it will use the proxy client to have the proxy server make the actual connection to the SSH server on its behalf."}),"\n",(0,t.jsx)(n.p,{children:"The authentication parameters of the proxy clients are optional. Some servers require them others do not. As such, the user name, password, etc parameters of proxy clients can be null. If required, check with the administrator of the proxy server to get proper credentials."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"There is no need to use the proxy capabilities of the component when connecting through a transparent proxy server. A transparent proxy intercepts normal communication at the network layer level, without requiring any special client configuration. Therefore, clients don't need to be aware of the existence of the proxy."})}),"\n",(0,t.jsx)(n.p,{children:"Once the client is connected, operations proceed as normal. The proxy client is only used to establish the connection to the SSH server. It plays no role after that."}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example: Http Proxy Client"}),(0,t.jsx)(n.p,{children:"The following example demonstrates how the HttpProxyClient Class can be used to connect to a SSH server via a HTTP proxy server."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  using( SSHClient ssh = new SSHClient() )\r\n  {\r\n    string host = "sftptest.dreamhosters.com";\r\n    string username = "snippet_sftp";\r\n    string password = "9MNfGgSx";\r\n\r\n    try\r\n    {\r\n      // Set up the information for a HTTP proxy server\r\n      string proxyServerHostName = "proxyserverhost.com";\r\n      int proxyServerPort = 80;\r\n      string proxyServerUsername = "proxyServerUsername";\r\n      string proxyServerPassword = "proxyServerPassword";\r\n\r\n      // Create a HTTP proxy client using the information and credentials\r\n      ProxyClient proxyClient = new HttpProxyClient( \r\n        proxyServerHostName, \r\n        proxyServerPort, \r\n        proxyServerUsername, \r\n        proxyServerPassword );\r\n\r\n      // Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient;\r\n\r\n      // Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect( host );\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHProxyClientException e )\r\n    {\r\n      // This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Exception exception = e.InnerException;\r\n      if( exception != null )\r\n      {\r\n        // This exception contains information about the true cause of the SSHProxyClientException.\r\n        // Note that it may have an InnerException itself.\r\n      }\r\n\r\n      throw;\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHIdentificationStringException )\r\n    {\r\n      // This means the component was unable to identify the server as a SSH server\r\n      throw;\r\n    }\r\n    catch( SSHKeyExchangeException )\r\n    {\r\n      // This means the client and the server failed to negotiate terms for a connection\r\n      // This usually indicates an interoperability problem with certain old or broken servers\r\n      throw;\r\n    }\r\n    catch( UnsupportedSSHProtocolException )\r\n    {\r\n      // This means the server is using a version of the SSH protocol that is not supported.\r\n      throw;\r\n    }\r\n    catch( SSHTimeoutException )\r\n    {\r\n      // This means the client did not receive a response from the server within the required\r\n      // time. This usually indicate a problem with the Internet connection or an interoperability\r\n      // problem between the server and the client.\r\n      throw;\r\n    }\r\n\r\n    try\r\n    {\r\n      ssh.Authenticate( username, password );\r\n    }\r\n    // These exceptions can be thrown by a call to Authenticate()\r\n    catch( SSHIncorrectPasswordException )\r\n    {\r\n      // This means the authentication method is supported by the server but the password\r\n      // was incorrect for the specified username \r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationPartialSuccessException )\r\n    {\r\n      // This means the authentication was successful but the server requires an additional authentication\r\n      // using another method specified in the exception information\r\n      throw;\r\n    }\r\n    catch( SSHUnsupportedAuthenticationMethodException )\r\n    {\r\n      // This means the authentication method is not supported by the server\r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationFailedException )\r\n    {\r\n      // This means the authentication method failed\r\n      throw;\r\n    }\r\n\r\n    /* Perform file operations as normal */\r\n  }\n'})})}),(0,t.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:"  Using ssh As New SSHClient()\r\n    Dim host As String = \"sftptest.dreamhosters.com\"\r\n    Dim username As String = \"snippet_sftp\"\r\n    Dim password As String = \"9MNfGgSx\"\r\n\r\n    Try\r\n      ' Set up the information for a HTTP proxy server\r\n      Dim proxyServerHostName As String = \"proxyserverhost.com\"\r\n      Dim proxyServerPort As Integer = 80\r\n      Dim proxyServerUsername As String = \"proxyServerUsername\"\r\n      Dim proxyServerPassword As String = \"proxyServerPassword\"\r\n\r\n      ' Create a HTTP proxy client using the information and credentials\r\n      Dim proxyClient As ProxyClient = New HttpProxyClient(proxyServerHostName, proxyServerPort, proxyServerUsername, proxyServerPassword)\r\n\r\n      ' Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient\r\n\r\n      ' Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect(host)\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e As SSHProxyClientException\r\n      ' This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Dim exception As Exception = e.InnerException\r\n      If exception IsNot Nothing Then\r\n        ' This exception contains information about the true cause of the SSHProxyClientException.\r\n        ' Note that it may have an InnerException itself.\r\n      End If\r\n\r\n      Throw\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e1 As SSHIdentificationStringException\r\n      ' This means the component was unable to identify the server as a SSH server\r\n      Throw\r\n    Catch e2 As SSHKeyExchangeException\r\n      ' This means the client and the server failed to negotiate terms for a connection\r\n      ' This usually indicates an interoperability problem with certain old or broken servers\r\n      Throw\r\n    Catch e3 As UnsupportedSSHProtocolException\r\n      ' This means the server is using a version of the SSH protocol that is not supported.\r\n      Throw\r\n    Catch e4 As SSHTimeoutException\r\n      ' This means the client did not receive a response from the server within the required\r\n      ' time. This usually indicate a problem with the Internet connection or an interoperability\r\n      ' problem between the server and the client.\r\n      Throw\r\n    End Try\r\n\r\n    Try\r\n      ssh.Authenticate(username, password)\r\n    ' These exceptions can be thrown by a call to Authenticate()\r\n    Catch e5 As SSHIncorrectPasswordException\r\n      ' This means the authentication method is supported by the server but the password\r\n      ' was incorrect for the specified username \r\n      Throw\r\n    Catch e6 As SSHAuthenticationPartialSuccessException\r\n      ' This means the authentication was successful but the server requires an additional authentication\r\n      ' using another method specified in the exception information\r\n      Throw\r\n    Catch e7 As SSHUnsupportedAuthenticationMethodException\r\n      ' This means the authentication method is not supported by the server\r\n      Throw\r\n    Catch e8 As SSHAuthenticationFailedException\r\n      ' This means the authentication method failed\r\n      Throw\r\n    End Try\r\n\r\n    ' Perform file operations as normal \r\n  End Using\n"})})})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example: SOCKS 4/4A Proxy Client"}),(0,t.jsx)(n.p,{children:"The following example demonstrates how the SOCKS4ProxyClient Class can be used to connect to a SSH server via a SOCKS 4/4A proxy server."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  using( SSHClient ssh = new SSHClient() )\r\n  {\r\n    string host = "sftptest.dreamhosters.com";\r\n    string username = "snippet_sftp";\r\n    string password = "9MNfGgSx";\r\n\r\n    try\r\n    {\r\n      // Set up the information for a SOCKS 4/4A proxy server\r\n      string proxyServerHostName = "proxyserverhost.com";\r\n      int proxyServerPort = 1080;\r\n      string proxyServerUserID = "proxyServerUserID";\r\n\r\n      // Create a SOCKS 4/4A proxy client using the information and credentials\r\n      ProxyClient proxyClient = new SOCKS4ProxyClient(\r\n        proxyServerHostName,\r\n        proxyServerPort,\r\n        proxyServerUserID );\r\n\r\n      // Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient;\r\n\r\n      // Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect( host );\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHProxyClientException e )\r\n    {\r\n      // This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Exception exception = e.InnerException;\r\n      if( exception != null )\r\n      {\r\n        // This exception contains information about the true cause of the SSHProxyClientException.\r\n        // Note that it may have an InnerException itself.\r\n      }\r\n\r\n      throw;\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHIdentificationStringException )\r\n    {\r\n      // This means the component was unable to identify the server as a SSH server\r\n      throw;\r\n    }\r\n    catch( SSHKeyExchangeException )\r\n    {\r\n      // This means the client and the server failed to negotiate terms for a connection\r\n      // This usually indicates an interoperability problem with certain old or broken servers\r\n      throw;\r\n    }\r\n    catch( UnsupportedSSHProtocolException )\r\n    {\r\n      // This means the server is using a version of the SSH protocol that is not supported.\r\n      throw;\r\n    }\r\n    catch( SSHTimeoutException )\r\n    {\r\n      // This means the client did not receive a response from the server within the required\r\n      // time. This usually indicate a problem with the Internet connection or an interoperability\r\n      // problem between the server and the client.\r\n      throw;\r\n    }\r\n\r\n    try\r\n    {\r\n      ssh.Authenticate( username, password );\r\n    }\r\n    // These exceptions can be thrown by a call to Authenticate()\r\n    catch( SSHIncorrectPasswordException )\r\n    {\r\n      // This means the authentication method is supported by the server but the password\r\n      // was incorrect for the specified username \r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationPartialSuccessException )\r\n    {\r\n      // This means the authentication was successful but the server requires an additional authentication\r\n      // using another method specified in the exception information\r\n      throw;\r\n    }\r\n    catch( SSHUnsupportedAuthenticationMethodException )\r\n    {\r\n      // This means the authentication method is not supported by the server\r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationFailedException )\r\n    {\r\n      // This means the authentication method failed\r\n      throw;\r\n    }\r\n\r\n    /* Perform file operations as normal */\r\n  }\n'})})}),(0,t.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:"  Using ssh As New SSHClient()\r\n    Dim host As String = \"sftptest.dreamhosters.com\"\r\n    Dim username As String = \"snippet_sftp\"\r\n    Dim password As String = \"9MNfGgSx\"\r\n\r\n    Try\r\n      ' Set up the information for a SOCKS 4/4A proxy server\r\n      Dim proxyServerHostName As String = \"proxyserverhost.com\"\r\n      Dim proxyServerPort As Integer = 1080\r\n      Dim proxyServerUserID As String = \"proxyServerUserID\"\r\n\r\n      ' Create a SOCKS 4/4A proxy client using the information and credentials\r\n      Dim proxyClient As ProxyClient = New SOCKS4ProxyClient(proxyServerHostName, proxyServerPort, proxyServerUserID)\r\n\r\n      ' Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient\r\n\r\n      ' Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect(host)\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e As SSHProxyClientException\r\n      ' This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Dim exception As Exception = e.InnerException\r\n      If exception IsNot Nothing Then\r\n        ' This exception contains information about the true cause of the SSHProxyClientException.\r\n        ' Note that it may have an InnerException itself.\r\n      End If\r\n\r\n      Throw\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e9 As SSHIdentificationStringException\r\n      ' This means the component was unable to identify the server as a SSH server\r\n      Throw\r\n    Catch e10 As SSHKeyExchangeException\r\n      ' This means the client and the server failed to negotiate terms for a connection\r\n      ' This usually indicates an interoperability problem with certain old or broken servers\r\n      Throw\r\n    Catch e11 As UnsupportedSSHProtocolException\r\n      ' This means the server is using a version of the SSH protocol that is not supported.\r\n      Throw\r\n    Catch e12 As SSHTimeoutException\r\n      ' This means the client did not receive a response from the server within the required\r\n      ' time. This usually indicate a problem with the Internet connection or an interoperability\r\n      ' problem between the server and the client.\r\n      Throw\r\n    End Try\r\n\r\n    Try\r\n      ssh.Authenticate(username, password)\r\n    ' These exceptions can be thrown by a call to Authenticate()\r\n    Catch e13 As SSHIncorrectPasswordException\r\n      ' This means the authentication method is supported by the server but the password\r\n      ' was incorrect for the specified username \r\n      Throw\r\n    Catch e14 As SSHAuthenticationPartialSuccessException\r\n      ' This means the authentication was successful but the server requires an additional authentication\r\n      ' using another method specified in the exception information\r\n      Throw\r\n    Catch e15 As SSHUnsupportedAuthenticationMethodException\r\n      ' This means the authentication method is not supported by the server\r\n      Throw\r\n    Catch e16 As SSHAuthenticationFailedException\r\n      ' This means the authentication method failed\r\n      Throw\r\n    End Try\r\n\r\n    ' Perform file operations as normal \r\n  End Using\n"})})})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example: SOCKS 5 Proxy Client"}),(0,t.jsxs)(n.p,{children:["The following example demonstrates how the ",(0,t.jsx)(n.code,{children:"SOCKS5ProxyClient"})," Class can be used to connect to a SSH server via a SOCKS 5 proxy server."]}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'  using( SSHClient ssh = new SSHClient() )\r\n  {\r\n    string host = "sftptest.dreamhosters.com";\r\n    string username = "snippet_sftp";\r\n    string password = "9MNfGgSx";\r\n\r\n    try\r\n    {\r\n      // Set up the information for a SOCKS 5 proxy server\r\n      string proxyServerHostName = "proxyserverhost.com";\r\n      int proxyServerPort = 1080;\r\n      string proxyServerUsername = "proxyServerUsername";\r\n      string proxyServerPassword = "proxyServerPassword";\r\n\r\n      // Create a SOCKS 5 proxy client using the information and credentials\r\n      ProxyClient proxyClient = new SOCKS5ProxyClient(\r\n        proxyServerHostName,\r\n        proxyServerPort,\r\n        proxyServerUsername,\r\n        proxyServerPassword );\r\n\r\n      // Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient;\r\n\r\n      // Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect( host );\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHProxyClientException e )\r\n    {\r\n      // This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Exception exception = e.InnerException;\r\n      if( exception != null )\r\n      {\r\n        // This exception contains information about the true cause of the SSHProxyClientException.\r\n        // Note that it may have an InnerException itself.\r\n      }\r\n\r\n      throw;\r\n    }\r\n    // These exception can be thrown by a call to Connect()\r\n    catch( SSHIdentificationStringException )\r\n    {\r\n      // This means the component was unable to identify the server as a SSH server\r\n      throw;\r\n    }\r\n    catch( SSHKeyExchangeException )\r\n    {\r\n      // This means the client and the server failed to negotiate terms for a connection\r\n      // This usually indicates an interoperability problem with certain old or broken servers\r\n      throw;\r\n    }\r\n    catch( UnsupportedSSHProtocolException )\r\n    {\r\n      // This means the server is using a version of the SSH protocol that is not supported.\r\n      throw;\r\n    }\r\n    catch( SSHTimeoutException )\r\n    {\r\n      // This means the client did not receive a response from the server within the required\r\n      // time. This usually indicate a problem with the Internet connection or an interoperability\r\n      // problem between the server and the client.\r\n      throw;\r\n    }\r\n\r\n    try\r\n    {\r\n      ssh.Authenticate( username, password );\r\n    }\r\n    // These exceptions can be thrown by a call to Authenticate()\r\n    catch( SSHIncorrectPasswordException )\r\n    {\r\n      // This means the authentication method is supported by the server but the password\r\n      // was incorrect for the specified username \r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationPartialSuccessException )\r\n    {\r\n      // This means the authentication was successful but the server requires an additional authentication\r\n      // using another method specified in the exception information\r\n      throw;\r\n    }\r\n    catch( SSHUnsupportedAuthenticationMethodException )\r\n    {\r\n      // This means the authentication method is not supported by the server\r\n      throw;\r\n    }\r\n    catch( SSHAuthenticationFailedException )\r\n    {\r\n      // This means the authentication method failed\r\n      throw;\r\n    }\r\n\r\n    /* Perform file operations as normal */\r\n  }\n'})})}),(0,t.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-vb.NET",children:"  Using ssh As New SSHClient()\r\n    Dim host As String = \"sftptest.dreamhosters.com\"\r\n    Dim username As String = \"snippet_sftp\"\r\n    Dim password As String = \"9MNfGgSx\"\r\n\r\n    Try\r\n      ' Set up the information for a SOCKS 5 proxy server\r\n      Dim proxyServerHostName As String = \"proxyserverhost.com\"\r\n      Dim proxyServerPort As Integer = 1080\r\n      Dim proxyServerUsername As String = \"proxyServerUsername\"\r\n      Dim proxyServerPassword As String = \"proxyServerPassword\"\r\n\r\n      ' Create a SOCKS 5 proxy client using the information and credentials\r\n      Dim proxyClient As ProxyClient = New SOCKS5ProxyClient(proxyServerHostName, proxyServerPort, proxyServerUsername, proxyServerPassword)\r\n\r\n      ' Assign the proxy client to the SSHClient for usage\r\n      ssh.ProxyClient = proxyClient\r\n\r\n      ' Connect to the SSH server. This will be done via the proxy client we assigned\r\n      ssh.Connect(host)\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e As SSHProxyClientException\r\n      ' This means that an error occurred with the proxy client assigned to the SSH client\r\n\r\n      Dim exception As Exception = e.InnerException\r\n      If exception IsNot Nothing Then\r\n        ' This exception contains information about the true cause of the SSHProxyClientException.\r\n        ' Note that it may have an InnerException itself.\r\n      End If\r\n\r\n      Throw\r\n    ' These exception can be thrown by a call to Connect()\r\n    Catch e17 As SSHIdentificationStringException\r\n      ' This means the component was unable to identify the server as a SSH server\r\n      Throw\r\n    Catch e18 As SSHKeyExchangeException\r\n      ' This means the client and the server failed to negotiate terms for a connection\r\n      ' This usually indicates an interoperability problem with certain old or broken servers\r\n      Throw\r\n    Catch e19 As UnsupportedSSHProtocolException\r\n      ' This means the server is using a version of the SSH protocol that is not supported.\r\n      Throw\r\n    Catch e20 As SSHTimeoutException\r\n      ' This means the client did not receive a response from the server within the required\r\n      ' time. This usually indicate a problem with the Internet connection or an interoperability\r\n      ' problem between the server and the client.\r\n      Throw\r\n    End Try\r\n\r\n    Try\r\n      ssh.Authenticate(username, password)\r\n    ' These exceptions can be thrown by a call to Authenticate()\r\n    Catch e21 As SSHIncorrectPasswordException\r\n      ' This means the authentication method is supported by the server but the password\r\n      ' was incorrect for the specified username \r\n      Throw\r\n    Catch e22 As SSHAuthenticationPartialSuccessException\r\n      ' This means the authentication was successful but the server requires an additional authentication\r\n      ' using another method specified in the exception information\r\n      Throw\r\n    Catch e23 As SSHUnsupportedAuthenticationMethodException\r\n      ' This means the authentication method is not supported by the server\r\n      Throw\r\n    Catch e24 As SSHAuthenticationFailedException\r\n      ' This means the authentication method failed\r\n      Throw\r\n    End Try\r\n\r\n    ' Perform file operations as normal \r\n  End Using\n"})})})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>T});var t=r(96540),o=r(34164),i=r(23104),s=r(56347),a=r(205),c=r(57485),h=r(31682),l=r(70679);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,h.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function d(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const o=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function S(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,i=u(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[h,p]=x({queryString:r,groupId:o}),[S,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,l.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),y=(()=>{const e=h??S;return d({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),m(e)}),[p,m,i]),tabValues:i}}var m=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),l=e=>{const n=e.currentTarget,r=c.indexOf(n),o=a[r].value;o!==t&&(h(n),s(o))},p=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:p,onClick:l,...i,className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=S(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",y.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function T(e){const n=(0,m.A)();return(0,f.jsx)(w,{...e,children:p(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);