"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[5671],{29865:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var t=n(74848),a=n(28453),r=n(11470),o=n(19365);const s={},l="Handling Unicode characters",d={id:"basic-concepts/handling-unicode-characters",title:"Handling Unicode characters",description:"The original Zip specification does not support non-ASCII, international characters. Thanks to extensions to the specification, Unicode, the widespread standard for the encoding, representation and handling of text expressed in most of the world's writing systems, is available to encode filenames and comments. Unicode support was added to the specification years after the original version. Because of this, Unicode support is not universal amongst zip tools. Some tools will not show or extract Unicode paths and files names correctly if at all.",source:"@site/zip/basic-concepts/handling-unicode-characters.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/handling-unicode-characters",permalink:"/xceed-libs-doc/zip/basic-concepts/handling-unicode-characters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Optimizing Batch Updates to a Folder",permalink:"/xceed-libs-doc/zip/basic-concepts/optimizing-batch-updates-to-folder"},next:{title:"AES Encryption",permalink:"/xceed-libs-doc/zip/basic-concepts/aes-ecryption"}},c={},h=[{value:"Types of Unicode support for zip archives with Xceed Zip components",id:"types-of-unicode-support-for-zip-archives-with-xceed-zip-components",level:2},{value:"Unicode interoperability",id:"unicode-interoperability",level:2},{value:"Zip archives created by 3rd party zip tools extracted by Xceed Zip for .NET",id:"zip-archives-created-by-3rd-party-zip-tools-extracted-by-xceed-zip-for-net",level:2},{value:"Zip archives created by Xceed Zip for .NET extracted by 3rd party zip tools",id:"zip-archives-created-by-xceed-zip-for-net-extracted-by-3rd-party-zip-tools",level:2},{value:"Default behavior",id:"default-behavior",level:2},{value:"Maximum interoperability",id:"maximum-interoperability",level:2},{value:"Unicode text encoding",id:"unicode-text-encoding",level:2},{value:"Conclusions &amp; best practices",id:"conclusions--best-practices",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"handling-unicode-characters",children:"Handling Unicode characters"})}),"\n",(0,t.jsxs)(i.p,{children:["The original Zip specification does not support non-ASCII, international characters. Thanks to extensions to the specification, ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Unicode",children:"Unicode"}),", the widespread standard for the encoding, representation and handling of text expressed in most of the world's writing systems, is available to encode filenames and comments. Unicode support was added to the specification years after the original version. Because of this, Unicode support is not universal amongst zip tools. Some tools will not show or extract Unicode paths and files names correctly if at all."]}),"\n",(0,t.jsx)(i.p,{children:"All Xceed Zip components handle Unicode characters automatically by default, so this is not an issue if an application uses Xceed components to create, update and extract zip archives. Issues can arise when 3rd party zip tools with varying support for Unicode are used in some operations. This becomes an interoperability problem."}),"\n",(0,t.jsx)(i.h2,{id:"types-of-unicode-support-for-zip-archives-with-xceed-zip-components",children:"Types of Unicode support for zip archives with Xceed Zip components"}),"\n",(0,t.jsx)(i.p,{children:"A zip archive contains, for each file, meta-data about the items in the archive: the name and path of file/folder, optional comment, dates, compression method, etc. It is in the text-based meta-data that Unicode can be applied."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"The path and filename of the zip file itself is not covered by the zip specification's Unicode support. The name of the zip file is determined by your application and is governed by the rules of your operating system."})}),"\n",(0,t.jsx)(i.p,{children:"A zip archive is made up of the items (files or folders) archived one after the other. Each item is made up of a header, followed with the item's compressed data. That header is made up of a standard set of fields followed by a sequence of optional extra headers. Meta-data is located in those headers. The most important field, with regards to Unicode is the filename field. That field is part of the standard set of fields for each item in an archive."}),"\n",(0,t.jsxs)(i.p,{children:["The Zip format has historically supported only the original IBM PC character encoding set, commonly referred to as ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Code_page_437",children:"IBM Code Page 437"}),". This limits storing file name characters to only those within the original MS-DOS range of values and does not properly support file names in other character encodings, or languages. To solve this, several independent solutions exist:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Xceed implemented an optional extra header definition where the file path and comment is read and/or written as Unicode (UTF-16, little endian), ignoring the value in the standard header. This solution is controlled by the ",(0,t.jsx)(i.code,{children:"ZipArchive.DefaultExtraHeaders"})," property with the Unicode value. The Xceed Unicode extra header is deprecated and should not be used in new code."]}),"\n",(0,t.jsxs)(i.li,{children:["Version 6.3.0 of the Zip specification added an option for Unicode (UTF-8) filename storage in the standard field, instead of using IBM character encoding. This solution is controlled by the ",(0,t.jsx)(i.code,{children:"ZipArchive.DefaultTextEncoding"})," property with the Unicode value."]}),"\n",(0,t.jsxs)(i.li,{children:["Version 6.3.2 of the Zip specification added an optional extra header definition where the file path and/or comment is read and/or written as Unicode (UTF-8), ignoring the value in the standard header. This solution is controlled by the ",(0,t.jsx)(i.code,{children:"ZipArchive.DefaultExtraHeaders"})," property with the UTF8Filename value."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Every flavor of Xceed Zip components support all these solutions. They can be activated (or not) independently of each other in any combination."}),"\n",(0,t.jsx)(i.h2,{id:"unicode-interoperability",children:"Unicode interoperability"}),"\n",(0,t.jsx)(i.p,{children:"Not every 3rd party zip tool support the Unicode options mentioned above. Some tools don't support any of them, some support some of them. Often, Unicode support is not clearly advertised and if it is, it's not clearly explained what method is used."}),"\n",(0,t.jsx)(i.p,{children:"Interoperability is the ability of making different systems work together. In the case of Zip and Unicode, it applies when zip archives are created with Xceed Zip for .NET and will be extracted by other zip tools. It also applies when zip archives created by other zip tools are extracted by Xceed Zip for .NET."}),"\n",(0,t.jsx)(i.h2,{id:"zip-archives-created-by-3rd-party-zip-tools-extracted-by-xceed-zip-for-net",children:"Zip archives created by 3rd party zip tools extracted by Xceed Zip for .NET"}),"\n",(0,t.jsx)(i.p,{children:"Xceed Zip for .NET (and all zip components from Xceed) supports all Unicode options defined in the Zip specification and a proprietary solution. This means that it should be able to automatically properly handle Unicode characters in any archive created by a 3rd party zip tool unless it uses a proprietary solution."}),"\n",(0,t.jsx)(i.h2,{id:"zip-archives-created-by-xceed-zip-for-net-extracted-by-3rd-party-zip-tools",children:"Zip archives created by Xceed Zip for .NET extracted by 3rd party zip tools"}),"\n",(0,t.jsx)(i.p,{children:"Because not every 3rd party zip tool supports Unicode options, interoperability problems are likely in this situation if filenames or comments contain non-ASCII characters. The symptoms will be that these filenames will contain incorrect characters when viewed or extracted by 3rd party tools that don't support Unicode."}),"\n",(0,t.jsx)(i.p,{children:"Even if some Unicode options are enabled when you create archives with Xceed Zip for .NET, if a 3rd party zip tool doesn't support that specific option, filenames will appear incorrectly."}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"Remember that Unicode issues only affect the meta data of an item, not the file data itself."})}),"\n",(0,t.jsx)(i.h2,{id:"default-behavior",children:"Default behavior"}),"\n",(0,t.jsx)(i.p,{children:'To show the effects of interoperability problems, we will use an example where a zip archive is created to contain two files. The first file will be named "FileNameWithNonASCIIStart\xc0\xc9\u044f\u30c6End.dat" and will have the comment "\u79c1\u306e\u30b3\u30e1\u30f3\u30c8". The second file\'s name will be, "FileNameWithOEMCharsStart\xe9\xe0\xf9\xefEnd.dat" and will not have any comment.'}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Code: Creating an archive using the default Unicode behavior"}),(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'  public static void DefaultBehavior()\r\n  {\r\n    /* The path and filename of the zip file itself is not covered by the zip specification\'s\r\n    * Unicode support. The name of the zip file is determined by your application and is\r\n    * governed by the rules of your operating system. */\r\n    AbstractFile zipFile = new DiskFile( "DefaultBehavior.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    string destinationPath;\r\n\r\n    AbstractFile sourceFile = new DiskFile( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt" );\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      /* We use "universal character names" like \\u00C0 instead of using character\r\n      * literals so that the code source file remains an ASCII file and can be read\r\n      * without issue by any editor. */\r\n\r\n      destinationPath = "FileNameWithNonASCIIStart\\u00C0\\u00C9\\u044F\\u30C6End.dat";\r\n\r\n      ZippedFile destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      // The string "My comment" in Japanese\r\n      destinationFile.Comment = "\\u79C1\\u306E\\u30B3\\u30E1\\u30F3\\u30C8";\r\n      sourceFile.CopyTo( destinationFile, true );\r\n\r\n      destinationPath = "FileNameWithOEMCharsStart\xe9\xe0\xf9\xefEnd.dat";\r\n      destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      sourceFile.CopyTo( destinationFile, true );\r\n    }\r\n  }\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-vb.NET",children:'  Public Shared Sub DefaultBehavior()\r\n\'       The path and filename of the zip file itself is not covered by the zip specification\'s\r\n\'       * Unicode support. The name of the zip file is determined by your application and is\r\n\'       * governed by the rules of your operating system. \r\n  Dim zipFile As AbstractFile = New DiskFile("DefaultBehavior.zip")\r\n\r\n  \' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  \' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  Dim destinationPath As String\r\n\r\n  Dim sourceFile As AbstractFile = New DiskFile("D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt")\r\n  Using batch As New AutoBatchUpdate(zip)\r\n\'         We use "universal character names" like \\u00C0 instead of using character\r\n\'         * literals so that the code source file remains an ASCII file and can be read\r\n\'         * without issue by any editor. \r\n\r\n    destinationPath = "FileNameWithNonASCIIStart" & ChrW(&H00C0).ToString() & ChrW(&H00C9).ToString() & ChrW(&H044F).ToString() & ChrW(&H30C6).ToString() & "End.dat"\r\n\r\n    Dim destinationFile As ZippedFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    \' The string "My comment" in Japanese\r\n    destinationFile.Comment = ChrW(&H79C1).ToString() & ChrW(&H306E).ToString() & ChrW(&H30B3).ToString() & ChrW(&H30E1).ToString() & ChrW(&H30F3).ToString() & ChrW(&H30C8).ToString()\r\n    sourceFile.CopyTo(destinationFile, True)\r\n\r\n    destinationPath = "FileNameWithOEMCharsStart\ufffd\ufffd\ufffd\ufffdEnd.dat"\r\n    destinationFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    sourceFile.CopyTo(destinationFile, True)\r\n  End Using\r\nEnd Sub\n'})})})]})]}),"\n",(0,t.jsx)(i.p,{children:"Using a modern 3rd party zip tool like WinZip, the archive shows 2 files and you see the names displayed correctly. This is because the default behavior of Xceed Zip for .NET is to create archives with the ExtraHeader.UTF8Filename and ExtraHeader.UTF8Comment options. These extra headers are supported by WinZip so the Unicode characters appear correctly."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Default behavior seen in WinZip"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Default behavior seen in WinZip",src:n(17853).A+"",width:"747",height:"213"})})]}),"\n",(0,t.jsx)(i.p,{children:"If we open the same zip file but, this time, with Windows Explorer on Windows 7, we see something completely different. The first thing we notice is that the \"FileNameWithNonASCIIStart\xc0\xc9\u044f\u30c6End.dat\" file seems to be gone. While it is present in the zip file, Explorer chooses not to display it because the file name was written as \"FileNameWithNonASCIIStart?\xc9??End.dat\" in the main header The non-ASCII characters were written as '?'. This is the standard behavior in .NET's %System.Text.Encoding% class. Windows Explorer does not support the Unicode (UTF8) extra header so it uses the filenames in the main header. The '?' character is illegal in filenames under Windows, so Windows Explorer chooses not to display the filename, a rather unfortunate behavior."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Default behavior seen in Windows Explorer 7"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Default behavior seen in Windows Explorer 7",src:n(20294).A+"",width:"892",height:"327"})})]}),"\n",(0,t.jsx)(i.p,{children:"In Windows 8, it appears Microsoft has improved the quality of its built-in Zip to support both Unicode extra headers and Unicode text encoding. So the default behavior from Xceed Zip for .NET produces the expected results."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Default behavior seen in Windows Explorer 8"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Default behavior seen in Windows Explorer 8",src:n(59311).A+"",width:"1076",height:"429"})})]}),"\n",(0,t.jsx)(i.h2,{id:"maximum-interoperability",children:"Maximum interoperability"}),"\n",(0,t.jsx)(i.p,{children:"Xceed Zip for .NET provides control over how non-ASCII characters are converted into ASCII. The ZipArchive.UnknownCharacterFallbackConversion property specifies what character ASCII should be used when a Unicode character cannot be expressed in ASCII when writing zip files. The default value is '?'."}),"\n",(0,t.jsx)(i.p,{children:"We can update the previous example to improve interoperability on Windows"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Code: Create a zip archive aiming for maximum interoperability"}),(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'  public static void MaximumInteroperability()\r\n  {\r\n    /* The path and filename of the zip file itself is not covered by the zip specification\'s\r\n    * Unicode support. The name of the zip file is determined by your application and is\r\n    * governed by the rules of your operating system. */\r\n    AbstractFile zipFile = new DiskFile( "MaximumInteroperability.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    // Disable the use of any OEM code page mandated by the local machine policy\r\n    zip.UseLocalMachineOEMCodePageForFilenames = false;\r\n\r\n    // Specify the \'_\' character for characters that can\'t be converted\r\n    zip.UnknownCharacterFallbackConversion = 0x5f; // \'_\'\r\n\r\n    string destinationPath;\r\n\r\n    AbstractFile sourceFile = new DiskFile( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt" );\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      /* We use "universal character names" like \\u00C0 instead of using character\r\n      * literals so that the code source file remains an ASCII file and can be read\r\n      * without issue by any editor. */\r\n\r\n      destinationPath = "FileNameWithNonASCIIStart\\u00C0\\u00C9\\u044F\\u30C6End.dat";\r\n\r\n      ZippedFile destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      // The string "My comment" in Japanese\r\n      destinationFile.Comment = "\\u79C1\\u306E\\u30B3\\u30E1\\u30F3\\u30C8";\r\n      sourceFile.CopyTo( destinationFile, true );\r\n\r\n      destinationPath = "FileNameWithOEMCharsStart\xe9\xe0\xf9\xefEnd.dat";\r\n      destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      sourceFile.CopyTo( destinationFile, true );\r\n    }\r\n  }\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-vb.NET",children:"  Public Shared Sub MaximumInteroperability()\r\n'       The path and filename of the zip file itself is not covered by the zip specification's\r\n'       * Unicode support. The name of the zip file is determined by your application and is\r\n'       * governed by the rules of your operating system. \r\n  Dim zipFile As AbstractFile = New DiskFile(\"MaximumInteroperability.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  ' Disable the use of any OEM code page mandated by the local machine policy\r\n  zip.UseLocalMachineOEMCodePageForFilenames = False\r\n\r\n  ' Specify the '_' character for characters that can't be converted\r\n  zip.UnknownCharacterFallbackConversion = &H5f ' '_'\r\n\r\n  Dim destinationPath As String\r\n\r\n  Dim sourceFile As AbstractFile = New DiskFile(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt\")\r\n  Using batch As New AutoBatchUpdate(zip)\r\n'         We use \"universal character names\" like \\u00C0 instead of using character\r\n'         * literals so that the code source file remains an ASCII file and can be read\r\n'         * without issue by any editor. \r\n\r\n    destinationPath = \"FileNameWithNonASCIIStart\" & ChrW(&H00C0).ToString() & ChrW(&H00C9).ToString() & ChrW(&H044F).ToString() & ChrW(&H30C6).ToString() & \"End.dat\"\r\n\r\n    Dim destinationFile As ZippedFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    ' The string \"My comment\" in Japanese\r\n    destinationFile.Comment = ChrW(&H79C1).ToString() & ChrW(&H306E).ToString() & ChrW(&H30B3).ToString() & ChrW(&H30E1).ToString() & ChrW(&H30F3).ToString() & ChrW(&H30C8).ToString()\r\n    sourceFile.CopyTo(destinationFile, True)\r\n\r\n    destinationPath = \"FileNameWithOEMCharsStart\ufffd\ufffd\ufffd\ufffdEnd.dat\"\r\n    destinationFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    sourceFile.CopyTo(destinationFile, True)\r\n  End Using\r\nEnd Sub\n"})})})]})]}),"\n",(0,t.jsx)(i.p,{children:'Windows Explorer now displays all the files. The name of "FileNameWithNonASCIIStart\xc0\xc9\u044f\u30c6End.dat" is still mangled but at least it can be extracted now. Other Zip tools, like WinZip, that support Unicode extra headers will continue to display the names properly. Because of this we consider this approach to provide the maximum interoperability while still preserving backward compatibility.'}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Maximum Interoperability seen in Windows Explorer 7"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Maximum Interoperability seen in Windows Explorer 7",src:n(63440).A+"",width:"892",height:"327"})})]}),"\n",(0,t.jsx)(i.p,{children:"On Windows 8, because of the good Unicode support, the archive displays items without issue."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Maximum Interoperability seen in Windows Explorer 8"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Maximum Interoperability seen in Windows Explorer 8",src:n(69689).A+"",width:"974",height:"430"})})]}),"\n",(0,t.jsx)(i.h2,{id:"unicode-text-encoding",children:"Unicode text encoding"}),"\n",(0,t.jsx)(i.p,{children:"Some Zip tools do not support Unicode extra headers. They do, however, support Unicode text encoding. Unicode text encoding means that filenames will be written in the zip archive encoded in Unicode (UTF-8) in the main headers."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Code: Create a zip archive using Unicode text encoding"}),(0,t.jsxs)(r.A,{children:[(0,t.jsx)(o.A,{value:"csharp",label:"C#",default:!0,children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csharp",children:'  public static void UnicodeTextEncoding()\r\n  {\r\n    /* The path and filename of the zip file itself is not covered by the zip specification\'s\r\n    * Unicode support. The name of the zip file is determined by your application and is\r\n    * governed by the rules of your operating system. */\r\n    AbstractFile zipFile = new DiskFile( "UnicodeTextEncoding.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    /* In this example, we will disable Unicode extra headers to show the effect with zip tools\r\n    * that support both Unicode extra headers and Unicode text encoding. But you can enable both\r\n    * at the same time without issue for increased interoperability. */\r\n\r\n    // Disable all types Unicode extra headers\r\n    ZipArchive.DefaultExtraHeaders = ExtraHeaders.FileTimes;\r\n\r\n    // Enable writing the meta-data in the main header as Unicode\r\n    zip.DefaultTextEncoding = TextEncoding.Unicode;\r\n\r\n    // By default, the meta-data will always be written in Unicode if the TextEncoding is enabled\r\n    //zip.DefaultUnicodeUsagePolicy = UnicodeUsagePolicy.Always;\r\n\r\n    // However, a policy can be enabled where the Unicode encoding will only be enabled\r\n    // if non-ASCII data is detected in the meta-data\r\n    //zip.DefaultUnicodeUsagePolicy = UnicodeUsagePolicy.NonASCIIOnly;\r\n\r\n    string destinationPath;\r\n\r\n    AbstractFile sourceFile = new DiskFile( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt" );\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      /* We use "universal character names" like \\u00C0 instead of using character\r\n      * literals so that the code source file remains an ASCII file and can be read\r\n      * without issue by any editor. */\r\n\r\n      destinationPath = "FileNameWithNonASCIIStart\\u00C0\\u00C9\\u044F\\u30C6End.dat";\r\n\r\n      ZippedFile destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      // The string "My comment" in Japanese\r\n      destinationFile.Comment = "\\u79C1\\u306E\\u30B3\\u30E1\\u30F3\\u30C8";\r\n      sourceFile.CopyTo( destinationFile, true );\r\n\r\n      destinationPath = "FileNameWithOEMCharsStart\xe9\xe0\xf9\xefEnd.dat";\r\n      destinationFile = ( ZippedFile ) zip.GetFile( destinationPath );\r\n      sourceFile.CopyTo( destinationFile, true );\r\n    }\r\n  }\n'})})}),(0,t.jsx)(o.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-vb.NET",children:"  Public Shared Sub UnicodeTextEncoding()\r\n'       The path and filename of the zip file itself is not covered by the zip specification's\r\n'       * Unicode support. The name of the zip file is determined by your application and is\r\n'       * governed by the rules of your operating system. \r\n  Dim zipFile As AbstractFile = New DiskFile(\"UnicodeTextEncoding.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n'       In this example, we will disable Unicode extra headers to show the effect with zip tools\r\n'       * that support both Unicode extra headers and Unicode text encoding. But you can enable both\r\n'       * at the same time without issue for increased interoperability. \r\n\r\n  ' Disable all types Unicode extra headers\r\n  ZipArchive.DefaultExtraHeaders = ExtraHeaders.FileTimes\r\n\r\n  ' Enable writing the meta-data in the main header as Unicode\r\n  zip.DefaultTextEncoding = TextEncoding.Unicode\r\n\r\n  ' By default, the meta-data will always be written in Unicode if the TextEncoding is enabled\r\n  'zip.DefaultUnicodeUsagePolicy = UnicodeUsagePolicy.Always;\r\n\r\n  ' However, a policy can be enabled where the Unicode encoding will only be enabled\r\n  ' if non-ASCII data is detected in the meta-data\r\n  'zip.DefaultUnicodeUsagePolicy = UnicodeUsagePolicy.NonASCIIOnly;\r\n\r\n  Dim destinationPath As String\r\n\r\n  Dim sourceFile As AbstractFile = New DiskFile(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\TinyFile1.txt\")\r\n  Using batch As New AutoBatchUpdate(zip)\r\n'         We use \"universal character names\" like \\u00C0 instead of using character\r\n'         * literals so that the code source file remains an ASCII file and can be read\r\n'         * without issue by any editor. \r\n\r\n    destinationPath = \"FileNameWithNonASCIIStart\" & ChrW(&H00C0).ToString() & ChrW(&H00C9).ToString() & ChrW(&H044F).ToString() & ChrW(&H30C6).ToString() & \"End.dat\"\r\n\r\n    Dim destinationFile As ZippedFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    ' The string \"My comment\" in Japanese\r\n    destinationFile.Comment = ChrW(&H79C1).ToString() & ChrW(&H306E).ToString() & ChrW(&H30B3).ToString() & ChrW(&H30E1).ToString() & ChrW(&H30F3).ToString() & ChrW(&H30C8).ToString()\r\n    sourceFile.CopyTo(destinationFile, True)\r\n\r\n    destinationPath = \"FileNameWithOEMCharsStart\ufffd\ufffd\ufffd\ufffdEnd.dat\"\r\n    destinationFile = CType(zip.GetFile(destinationPath), ZippedFile)\r\n    sourceFile.CopyTo(destinationFile, True)\r\n  End Using\r\nEnd Sub\n"})})})]})]}),"\n",(0,t.jsx)(i.p,{children:"The 7-Zip tool supports Unicode text encoding but not Unicode extra headers. When the zip file is viewed in the 7-Zip tool, the items are shown correctly."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Unicode text encoding seen in 7-Zip"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Unicode text encoding seen in 7-Zip",src:n(13602).A+"",width:"801",height:"248"})})]}),"\n",(0,t.jsx)(i.p,{children:"However when the zip file is viewed in Windows Explorer on Windows 7, we see the disadvantage of the Unicode text encoding options. It is not backwards compatible with tools that do not support it. Windows Explorer rightly expects to read file names encoded in the OEM code page because it's the only thing it knows about. But the main header file name field has been written in Unicode instead. So the filename shows up mangled."}),"\n",(0,t.jsx)(i.p,{children:"Comparatively, the Unicode extra header option is backwards compatible because the extra header mechanism is part of the original Zip specification and, by design, any unknown extra header is ignored. This is how Windows Explorer ignores the Unicode extra headers in previous examples. Here, the Unicode data cannot be ignored because it's part of the main header."}),"\n",(0,t.jsx)(i.p,{children:"For this reason, we do not consider using the Unicode text encoding option good for interoperability and only suggest its use if the situation warrants it."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Unicode text encoding seen in Windows Explorer 7"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Unicode text encoding seen in Windows Explorer 7",src:n(34731).A+"",width:"892",height:"327"})})]}),"\n",(0,t.jsx)(i.p,{children:"Windows Explorer in Windows 8, with its improved Unicode support, correctly handles the Unicode text encoding and the items show up as they should."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Image: Unicode text encoding seen in Windows Explorer 8"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Unicode text encoding seen in Windows Explorer 8",src:n(25244).A+"",width:"976",height:"430"})})]}),"\n",(0,t.jsx)(i.h2,{id:"conclusions--best-practices",children:"Conclusions & best practices"}),"\n",(0,t.jsx)(i.p,{children:"Because of the different Unicode options available and the awkward way they were introduced in the Zip specification, there is no universal, full-proof way to support non-ASCII characters in zip file meta data."}),"\n",(0,t.jsx)(i.p,{children:"If you are producing zip files meant to be consumed by Xceed Zip for .NET or another Zip component sold by Xceed Inc., the default behavior of the component is adequate and no special option needs to be enabled."}),"\n",(0,t.jsx)(i.p,{children:"If your zip files will be consumed by 3rd party zip tools, make a few tests using the examples above to determine what Unicode options they support and tailor your code to use the Unicode options that best fit the 3rd party tool."})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,i,n)=>{n.d(i,{A:()=>o});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:i,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,o),hidden:n,children:i})}},11470:(e,i,n)=>{n.d(i,{A:()=>T});var t=n(96540),a=n(34164),r=n(23104),o=n(56347),s=n(205),l=n(57485),d=n(31682),c=n(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:i,children:n}=e;return(0,t.useMemo)((()=>{const e=i??function(e){return h(e).map((e=>{let{props:{value:i,label:n,attributes:t,default:a}}=e;return{value:i,label:n,attributes:t,default:a}}))}(n);return function(e){const i=(0,d.XI)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,n])}function u(e){let{value:i,tabValues:n}=e;return n.some((e=>e.value===i))}function m(e){let{queryString:i=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:i=!1,groupId:n}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:i,groupId:n});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(a.location.search);i.set(r,e),a.replace({...a.location,search:i.toString()})}),[r,a])]}function f(e){const{defaultValue:i,queryString:n=!1,groupId:a}=e,r=p(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:i,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!u({value:i,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:r}))),[d,h]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:i}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(i),[a,r]=(0,c.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=d??f;return u({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,r]),tabValues:r}}var b=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:i,block:n,selectedValue:t,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const i=e.currentTarget,n=l.indexOf(i),a=s[n].value;a!==t&&(d(i),o(a))},h=e=>{let i=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;i=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;i=l[n]??l[l.length-1];break}}i?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},i),children:s.map((e=>{let{value:i,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,a.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function v(e){let{lazy:i,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==r})))})}function w(e){const i=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...i,...e}),(0,g.jsx)(v,{...i,...e})]})}function T(e){const i=(0,b.A)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(i))}},17853:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/01-60d44be69c8be5e16f6fa599f0c8e929.png"},20294:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/02-a93a70862cf1f5465081b7ef9f5ecb12.png"},59311:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/03-86bc8981c50ecd3fd630197248f0a55f.png"},63440:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/04-3e9e41dc2b7eb6c3a4d87c2e3194d73a.png"},69689:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/05-da616487a0ebc698917a45ca7ae3fac0.png"},13602:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/06-0a2ff5c9e79308c768951b9600874996.png"},34731:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/07-6edb73da514fc08c095ec60ad94b82e2.png"},25244:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/08-3852eb83bfc2f67a26f24cbd85634243.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(96540);const a={},r=t.createContext(a);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);