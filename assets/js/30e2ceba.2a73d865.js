"use strict";(self.webpackChunkxceed_libs_doc=self.webpackChunkxceed_libs_doc||[]).push([[3200],{42270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=r(74848),a=r(28453),s=r(11470),o=r(19365);const i={},l="Retrieving a CompressedStream's remaining data",c={id:"advanced-concepts/retrieving-compressedstream",title:"Retrieving a CompressedStream's remaining data",description:"By default, the CompressedStream class closes the inner stream around which it is created once the compressed data has been decompressed. It is however possible to continue reading the inner stream's data once the compressed data has been decompressed.",source:"@site/zip/advanced-concepts/retrieving-compressedstream.md",sourceDirName:"advanced-concepts",slug:"/advanced-concepts/retrieving-compressedstream",permalink:"/xceed-libs-doc/zip/advanced-concepts/retrieving-compressedstream",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Advanced Concepts",permalink:"/xceed-libs-doc/zip/category/advanced-concepts"},next:{title:"Using alternative AES implementations",permalink:"/xceed-libs-doc/zip/advanced-concepts/using-alternative-aes-implementations"}},d={},m=[{value:"Retrieving the remaining data",id:"retrieving-the-remaining-data",level:2},{value:"Demonstration",id:"demonstration",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"retrieving-a-compressedstreams-remaining-data",children:"Retrieving a CompressedStream's remaining data"})}),"\n",(0,n.jsxs)(t.p,{children:["By default, the ",(0,n.jsx)(t.code,{children:"CompressedStream"})," class closes the inner stream around which it is created once the compressed data has been decompressed. It is however possible to continue reading the inner stream's data once the compressed data has been decompressed."]}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-the-remaining-data",children:"Retrieving the remaining data"}),"\n",(0,n.jsxs)(t.p,{children:["If the Transient property of the CompressedStream class is set to false, it will close its inner stream once the compressed data has been decompressed. In order to continue reading the inner stream's remaining data, the Transient property ",(0,n.jsx)(t.strong,{children:"must"})," be set to true. This will prevent the inner stream from being closed by the compressed stream."]}),"\n",(0,n.jsx)(t.p,{children:"Because the CompressedStream class always read 32K at a time, if the size of the compressed data is not a multiple of 32, the CompressedStream class will read more than necessary. For example, if the total size of the compressed data is 42K, the first call to Read will read 32K and so will the second even if there was only 10K of compressed data left to read. Both the first and second calls will return the corresponding decompressed data. The third call to Read will return 0 meaning that the end of the compressed section of the stream has been reached. The extra data that was read will be discarded."}),"\n",(0,n.jsxs)(t.p,{children:["To continue reading the stream once the compressed data has been decompressed, you ",(0,n.jsx)(t.strong,{children:"could"})," simply close the CompressedStream and continue reading the inner stream however you might not be positioned at the correct location in the case where too much data was read. In order to circumvent this behavior, you can use the GetRemainingStream method. The ",(0,n.jsx)(t.code,{children:"GetRemainingStream"})," method will return a stream which starts immediately after the last byte of compressed data allowing you to continue reading the data."]}),"\n",(0,n.jsx)(t.p,{children:"In the case where more than one chunks of compressed data are appended to each other in the same stream, you can use the GetRemainingStream method to decompress the next chunk of compressed data (demonstrated in the example below )."}),"\n",(0,n.jsxs)(t.p,{children:["Keep in mind that closing the stream returned by the GetRemainingStream method will ",(0,n.jsx)(t.strong,{children:"not"})," close the inner stream. You will need to call the inner stream's Close method yourself once you are finished with the returned stream."]}),"\n",(0,n.jsx)(t.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,n.jsx)(t.p,{children:"The following example demonstrates how to decompress appended chunks of compressed data contained within the same network stream."}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'  using Xceed.Compression;\r\n  using Xceed.FileSystem;\r\n  using System.IO;\r\n  using System.Net.Sockets;\r\n\r\n  using( TcpClient client = new TcpClient( "MyServer", 42 ) )\r\n  {\r\n     // The returned stream does not close the connection when closed.\r\n     // It does not have ownership of the socket.\r\n     using( NetworkStream stream = client.GetStream() )\r\n     {\r\n        UncompressNextChunk( stream, new DiskFolder( @"d:\\folder" ), 1 );\r\n     }\r\n  }\r\n\r\n  public static void UncompressNextChunk( Stream sourceStream,\r\n                                         DiskFolder destFolder,\r\n                                         int chunkCount )\r\n  {\r\n     // We want to decompress the next chunk from the source stream.\r\n     using( CompressedStream compStream = new CompressedStream( sourceStream ) )\r\n     {\r\n        // But since we\'ll want to access the data following the compressed\r\n        // data in that source stream, we don\'t want the compressed stream to\r\n        // close it.\r\n        compStream.Transient = true;\r\n        DiskFile destFile = ( DiskFile )destFolder.GetFile( "Chunk" + chunkCount.ToString() + ".txt" ); \r\n\r\n        if( !destFile.Exists )\r\n           destFile.Create(); \r\n\r\n        bool endOfStream = true; \r\n\r\n        using( Stream destStream = destFile.OpenWrite( true ) )\r\n        {\r\n           byte[] buffer = new byte[ 32768 ];\r\n           int read = 0; \r\n\r\n           while( ( read = compStream.Read( buffer, 0, buffer.Length ) ) > 0 )\r\n           {\r\n              endOfStream = false;\r\n              destStream.Write( buffer, 0, read );\r\n           }\r\n        }\r\n  \r\n     // If we could not decompress anything at all, we consider this the\r\n        // real end of stream.\r\n        if( endOfStream )\r\n           return; \r\n\r\n        // Before closing the compressed stream, we want to grab a stream on\r\n        // the rest of the data. We cannot simply take sourceStream, since the\r\n        // CompressedStream may have read more than the compressed data. And to\r\n        // avoid having too many resources "alive", we delay calling ourselves\r\n        // recursively after closing the compressed stream, though it would be\r\n        // perfectly valid to make the call right here.\r\n        sourceStream = compStream.GetRemainingStream();\r\n     } \r\n\r\n     // We call ourselves recursively, with the stream returned by GetRemainingStream.\r\n     UncompressNextChunk( sourceStream, destFolder, chunkCount + 1 );\r\n  }\n'})})}),(0,n.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-vb.NET",children:"  Imports Xceed.Compression\r\n  Imports Xceed.FileSystem\r\n  Imports System.IO\r\n  Imports System.Net.Sockets\r\n\r\n  Dim client As New  TcpClient( \"MyServer\", 42 )\r\n\r\n  ' The returned stream does not close the connection when closed.\r\n  ' It does not have ownership of the socket.\r\n  Dim stream As NetworkStream = client.GetStream()UncompressNextChunk( stream, _\r\n                                                      New DiskFolder( \"d:\\folder\" ), 1 )\r\n  stream.Close()client.Close()   \r\n\r\n  Public Sub UncompressNextChunk( ByVal sourceStream As Stream, _\r\n                                  ByVal destFolder As DiskFolder, _\r\n                                  ByVal chunkCount As Integer )\r\n\r\n    ' We want to decompress the next chunk from the source stream.\r\n    Dim compStream As New CompressedStream( sourceStream )\r\n\r\n    ' But since we'll want to access the data following the compressed\r\n    ' data in that source stream, we don't want the compressed stream to\r\n    ' close it.\r\n    compStream.Transient = True \r\n\r\n    Dim destFile As DiskFile = CType( destFolder.GetFile( \"Chunk\" + chunkCount.ToString() + \".txt\" ), _ DiskFile )\r\n\r\n    If Not destFile.Exists Then\r\n        destFile.Create()\r\n    End If \r\n\r\n    Dim endOfStream As Boolean = True\r\n    Dim destStream As Stream = destFile.OpenWrite( true )\r\n    Dim buffer( 32768 ) As Byte\r\n    Dim read As Integer = 0  \r\n\r\n    Doread = compStream.Read( buffer, 0, buffer.Length )\r\n\r\n    If read > 0 Then\r\n        endOfStream = False\r\n        destStream.Write( buffer, 0, read )\r\n    End If\r\n\r\n    Loop Until read = 0 destStream.Close() \r\n        ' If we could not decompress anything at all, we consider this the\r\n        ' real end of stream.\r\n        If endOfStream Then\r\n          return\r\n        End If\r\n\r\n        ' Before closing the compressed stream, we want to grab a stream on\r\n        ' the rest of the data. We cannot simply take sourceStream, since the\r\n        ' CompressedStream may have read more than the compressed data. And to\r\n        ' avoid having too many resources \"alive\", we delay calling ourselves\r\n        ' recursively after closing the compressed stream, though it would be\r\n        ' perfectly valid to make the call right here.\r\n        sourceStream = compStream.GetRemainingStream()compStream.Close() \r\n\r\n        ' We call ourselves recursively, with the stream returned by GetRemainingStream.\r\n        UncompressNextChunk( sourceStream, destFolder, chunkCount + 1 )End Sub\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var n=r(96540),a=r(34164),s=r(23104),o=r(56347),i=r(205),l=r(57485),c=r(31682),d=r(70679);function m(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,m]=p({queryString:r,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),g(e)}),[m,g,s]),tabValues:s}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:m,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function S(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(S,{...t,...e})]})}function x(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e,children:m(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);