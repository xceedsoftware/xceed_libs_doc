"use strict";(self.webpackChunkxceed_docs_words=self.webpackChunkxceed_docs_words||[]).push([[4202],{81326:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var i=t(74848),n=t(28453),a=t(11470),s=t(19365);const l={},o="Zipping items using multiple threads",p={id:"basic-concepts/zipping/zipping-items-using-multiple-thread",title:"Zipping items using multiple threads",description:"Starting with version 6.1, it is possible to enable the use of multiple threads when zipping with the Deflate or Deflate64 compression methods.",source:"@site/zip/basic-concepts/zipping/zipping-items-using-multiple-thread.md",sourceDirName:"basic-concepts/zipping",slug:"/basic-concepts/zipping/zipping-items-using-multiple-thread",permalink:"/xceed-docs-words/zip/basic-concepts/zipping/zipping-items-using-multiple-thread",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebarzip",previous:{title:"Zipping items in memory",permalink:"/xceed-docs-words/zip/basic-concepts/zipping/zipping-items-located-memory"},next:{title:"Unzipping",permalink:"/xceed-docs-words/zip/category/unzipping"}},u={},h=[{value:"Typical usage example",id:"typical-usage-example",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Running ZipMultiThreadManager in the background",id:"running-zipmultithreadmanager-in-the-background",level:2},{value:"One multi-thread manager object used over multiple zip archives sequentially",id:"one-multi-thread-manager-object-used-over-multiple-zip-archives-sequentially",level:2},{value:"FileSystem progression events in a multi-thread context",id:"filesystem-progression-events-in-a-multi-thread-context",level:2},{value:"UserData",id:"userdata",level:3}];function d(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"zipping-items-using-multiple-threads",children:"Zipping items using multiple threads"})}),"\n",(0,i.jsx)(r.p,{children:"Starting with version 6.1, it is possible to enable the use of multiple threads when zipping with the Deflate or Deflate64 compression methods."}),"\n",(0,i.jsx)(r.p,{children:"Multiple threads must be explicitly enabled. Support is not active by default because of the large resources used. By default, the number of threads used will be the number of processors on the machine. A maximum of 32 threads can be specified."}),"\n",(0,i.jsx)(r.p,{children:"Multi-threading works by zipping multiple different files at the same time. The zipping order is not guaranteed to be maintained. The engine does not split single files into different threads. The threads are assigned on a per-file basis. This keeps the compression ratio as high as it can be."}),"\n",(0,i.jsx)(r.p,{children:"The Xceed.Zip.ZipMultiThreadManager class activates and controls multi threading. Once an instance of the class is assigned to the ZipArchive.MultiThreadManager property, multi threading can be used for zipping. Setting the property to null disables the use of multi threading for the next operations."}),"\n",(0,i.jsx)(r.p,{children:"The ZipMultiThreadManager object is by default passive. It performs its duties of assigning data to be zipped to running threads and writing zip headers to finished items only when ZipArchive is running. In most scenarios, this is sufficient as shown in the typical usage example below. However, in the scenario where files or folders will be queued for zipping and the application will not call ZipArchive to wait for the operation to complete or add new items for zipping for a significant amount of time, the ZipMultiThreadManager has an option to make itself run automatically in the background. It is not enabled by default."}),"\n",(0,i.jsx)(r.h2,{id:"typical-usage-example",children:"Typical usage example"}),"\n",(0,i.jsxs)(r.admonition,{type:"note",children:[(0,i.jsx)(r.p,{children:"Multi-threading has limitations. It is only active when Deflate or Deflate64 is used. Each thread uses, by default, 32MB of memory for buffering."}),(0,i.jsx)(r.p,{children:"For small zipping operations, where there are less files to zip than the number of threads, there will be no performance gain. The best performance gains come from scenarios where a large number of small to medium-sized files are zipped as this saturates the CPU cores. Because the threads are assigned at the file level, a scenario where a single very large file is zipped would not see a performance gain."})]}),"\n",(0,i.jsx)(r.h2,{id:"demonstration",children:"Demonstration"}),"\n",(0,i.jsx)(r.p,{children:"This example demonstrates how to copy a file located in memory to a zip file."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'  public static void ZipMultiThread()\r\n  {\r\n    AbstractFile zipFile = new DiskFile( "ZipMultiThread1.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    // Create the multi-thread manager\r\n    ZipMultiThreadManager zipMultiThreadManager = new ZipMultiThreadManager();\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    /* Having the use of multiple threads doesn\'t change typical zipping scenarios\r\n    * It is still highly desirable to batch zipping operations. In fact it is even more important\r\n    * when multiple threads are enabled as more items can be queued at the same time. */\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      // Select a source folder\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      \r\n      // Queue the files in the folder for zipping\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      /* Without a ZipMultiThreadManager object assigned to the ZipArchive, CopyFilesTo() would not return\r\n      * until all the source items data is compressed.\r\n      * \r\n      * Here, CopyFilesTo() will return immediately and the files and folders will instead be queued for zipping\r\n      * different threads will take charge of different files at the same time and compress the data. */\r\n\r\n      // Select a source file\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n\r\n      // Queue the file for zipping\r\n      sourceFile.CopyTo( zip, true );\r\n\r\n      /* The same effect happens with CopyTo() it will return immediately and the file will be queued for zipping. */\r\n\r\n      /* Here, as the batch operation completes, the zip archive will wait for all the queued items\r\n        to complete zipping before returning. */\r\n    }\r\n  }\n'})})}),(0,i.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-vb.NET",children:"  Public Shared Sub ZipMultiThread()\r\n  Dim zipFile As AbstractFile = New DiskFile(\"ZipMultiThread1.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  ' Create the multi-thread manager\r\n  Dim zipMultiThreadManager As New ZipMultiThreadManager()\r\n\r\n  ' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  ' Having the use of multiple threads doesn't change typical zipping scenarios\r\n  ' It is still highly desirable to batch zipping operations. In fact it is even more important\r\n  ' when multiple threads are enabled as more items can be queued at the same time. \r\n  Using batch As New AutoBatchUpdate(zip)\r\n    ' Select a source folder\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\\")\r\n\r\n    ' Queue the files in the folder for zipping\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    ' Without a ZipMultiThreadManager object assigned to the ZipArchive, CopyFilesTo() would not return\r\n    ' until all the source items data is compressed.\r\n    '\r\n    ' Here, CopyFilesTo() will return immediately and the files and folders will instead be queued for zipping\r\n    ' different threads will take charge of different files at the same time and compress the data. \r\n\r\n    ' Select a source file\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeFile.dat\")\r\n\r\n    ' Queue the file for zipping\r\n    sourceFile.CopyTo(zip, True)\r\n\r\n    ' The same effect happens with CopyTo() it will return immediately and the file will be queued for zipping. \r\n\r\n    ' Here, as the batch operation completes, the zip archive will wait for all the queued items\r\n    ' to complete zipping before returning. \r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"running-zipmultithreadmanager-in-the-background",children:"Running ZipMultiThreadManager in the background"}),"\n",(0,i.jsx)(r.p,{children:"The ZipMultiThreadManager constructor takes a Boolean parameter that specifies if the manager should run itself periodically (currently every 500ms). By default, the value if false. It is not currently possible to change the value after the object has been created."}),"\n",(0,i.jsx)(r.p,{children:"It is generally not necessary to enable background running of the manager as typical code patterns will make the manager run often enough. There is also a slight performance penalty if the option is enable without a real need. However, in scenarios where an application will queue items for zipping and then start a lengthy unrelated task, the manager will not have an opportunity to run. Then enabling background running becomes desirable and will dramatically improve performance."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'  public static void ZipMultiThread()\r\n  {\r\n    AbstractFile zipFile = new DiskFile( "ZipMultiThread4.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    // Create the multi-thread manager making it run periodically\r\n    ZipMultiThreadManager zipMultiThreadManager = new ZipMultiThreadManager( true );\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    /* Having the use of multiple threads doesn\'t change typical zipping scenarios\r\n    * It is still highly desirable to batch zipping operations. In fact it is even more important\r\n    * when multiple threads are enabled as more items can be queued at the same time. */\r\n    IDisposable batch = new AutoBatchUpdate( zip );\r\n\r\n    try\r\n    {\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      /* Let\'s assume the application will now perform a very length operation. Because ZipMultiThreadManager\r\n      * is by default passive, it would not run during this time and the compression would stall because\r\n      * no new files will be assigned to the threads.\r\n      * \r\n      * But since we created our ZipMultiThreadManager instance with the runPeriodically parameter to \'true\',\r\n      * the manager will run itself in a separate thread and keep the worker threads busy. */\r\n\r\n      // Perform a lengthy operation\r\n      System.Threading.Thread.Sleep( 5 * 1000 );\r\n\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n      sourceFile.CopyTo( zip, true );\r\n    }\r\n    finally\r\n    {\r\n      /* Here, as the batch operation completes, the zip archive will wait for all the queued items\r\n        to complete zipping before returning. */\r\n      batch.Dispose();\r\n    }\r\n  }\n'})})}),(0,i.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-vb.NET",children:"  Public Shared Sub ZipMultiThread()\r\n  Dim zipFile As AbstractFile = New DiskFile(\"ZipMultiThread4.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  ' Create the multi-thread manager making it run periodically\r\n  Dim zipMultiThreadManager As New ZipMultiThreadManager(True)\r\n\r\n  ' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  ' Having the use of multiple threads doesn't change typical zipping scenarios\r\n  ' It is still highly desirable to batch zipping operations. In fact it is even more important\r\n  ' when multiple threads are enabled as more items can be queued at the same time. \r\n  Dim batch As IDisposable = New AutoBatchUpdate(zip)\r\n\r\n  Try\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\\")\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    ' Let's assume the application will now perform a very length operation. Because ZipMultiThreadManager\r\n    ' is by default passive, it would not run during this time and the compression would stall because\r\n    ' no new files will be assigned to the threads.\r\n    ' \r\n    ' But since we created our ZipMultiThreadManager instance with the runPeriodically parameter to 'true',\r\n    ' the manager will run itself in a separate thread and keep the worker threads busy. \r\n\r\n    ' Perform a lengthy operation\r\n    System.Threading.Thread.Sleep(5 * 1000)\r\n\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeFile.dat\")\r\n    sourceFile.CopyTo(zip, True)\r\n  Finally\r\n    ' Here, as the batch operation completes, the zip archive will wait for all the queued items\r\n    ' to complete zipping before returning. \r\n    batch.Dispose()\r\n  End Try\r\nEnd Sub\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"one-multi-thread-manager-object-used-over-multiple-zip-archives-sequentially",children:"One multi-thread manager object used over multiple zip archives sequentially"}),"\n",(0,i.jsx)(r.p,{children:"In this example, the multi-thread manager object is used by multiple zip archives sequentially. This means that the multiple threads are only created once, saving some contiguous memory."}),"\n",(0,i.jsx)(r.p,{children:"Sharing the manager object between archives does not mean that they will share data. The manager is just the tool that owns the background threads and coordinates the compression workloads assigned to it."}),"\n",(0,i.jsx)(r.p,{children:"The ZipMultiThreadManager class is not meant to be used by multiple threads at the same time. Such usage will result in undefined behavior."}),"\n",(0,i.jsx)(r.p,{children:"The example also shows you can choose which zipping operation will use threads."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'  public static void ZipMultiThread()\r\n  {\r\n    // Create the multi-thread manager\r\n    // Using 0 as a parameter asks to use the maximum number of processors on the machine\r\n    ZipMultiThreadManager zipMultiThreadManager = new ZipMultiThreadManager( 0 );\r\n\r\n    AbstractFile zipFile;\r\n    ZipArchive zip;\r\n\r\n    zipFile = new DiskFile( "ZipMultiThread2_1.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    zip = new ZipArchive( zipFile );\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n      sourceFile.CopyTo( zip, true );\r\n    }\r\n\r\n    /* Now, let\'s create another zip file */\r\n\r\n    zipFile = new DiskFile( "ZipMultiThread2_2.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    zip = new ZipArchive( zipFile );\r\n\r\n    /* Notice how the multi-thread manager can be shared between multiple zip archives. */\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      AbstractFile sourceFile = new DiskFile( @"SomeOtherFile.dat" );\r\n      sourceFile.CopyTo( zip, true );\r\n    }\r\n\r\n    /* Let\'s create yet another zip file */\r\n\r\n    zipFile = new DiskFile( "ZipMultiThread2_3.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    zip = new ZipArchive( zipFile );\r\n\r\n    /* Notice how the multi-thread manager can be shared between multiple zip archives. */\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      sourceFolder.CopyFilesTo( zip, true, true );\r\n\r\n      // Don\'t use multiple threads for the following operation\r\n      zip.MultiThreadManager = null;\r\n\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n      sourceFile.CopyTo( zip, true );\r\n\r\n      // Use multiple threads again\r\n      zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n      sourceFile = new DiskFile( @"SomeOtherFile.dat" );\r\n      sourceFile.CopyTo( zip, true );\r\n    }\r\n  }\n'})})}),(0,i.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-vb.NET",children:"  Public Shared Sub ZipMultiThread()\r\n  ' Create the multi-thread manager\r\n  ' Using 0 as a parameter asks to use the maximum number of processors on the machine\r\n  Dim zipMultiThreadManager As New ZipMultiThreadManager(0)\r\n\r\n  Dim zipFile As AbstractFile\r\n  Dim zip As ZipArchive\r\n\r\n  zipFile = New DiskFile(\"ZipMultiThread2_1.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  zip = New ZipArchive(zipFile)\r\n\r\n  ' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\\")\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeFile.dat\")\r\n    sourceFile.CopyTo(zip, True)\r\n  End Using\r\n\r\n  ' Now, let's create another zip file \r\n\r\n  zipFile = New DiskFile(\"ZipMultiThread2_2.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  zip = New ZipArchive(zipFile)\r\n\r\n  ' Notice how the multi-thread manager can be shared between multiple zip archives. \r\n\r\n  ' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\\")\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeOtherFile.dat\")\r\n    sourceFile.CopyTo(zip, True)\r\n  End Using\r\n\r\n  ' Let's create yet another zip file \r\n\r\n  zipFile = New DiskFile(\"ZipMultiThread2_3.zip\")\r\n\r\n  ' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  ' Create a logical zip archive around the zip file\r\n  zip = New ZipArchive(zipFile)\r\n\r\n  ' Notice how the multi-thread manager can be shared between multiple zip archives. \r\n\r\n  ' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder(\"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\\")\r\n    sourceFolder.CopyFilesTo(zip, True, True)\r\n\r\n    ' Don't use multiple threads for the following operation\r\n    zip.MultiThreadManager = Nothing\r\n\r\n    Dim sourceFile As AbstractFile = New DiskFile(\"SomeFile.dat\")\r\n    sourceFile.CopyTo(zip, True)\r\n\r\n    ' Use multiple threads again\r\n    zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n    sourceFile = New DiskFile(\"SomeOtherFile.dat\")\r\n    sourceFile.CopyTo(zip, True)\r\n  End Using\r\nEnd Sub\n"})})})]}),"\n",(0,i.jsx)(r.h2,{id:"filesystem-progression-events-in-a-multi-thread-context",children:"FileSystem progression events in a multi-thread context"}),"\n",(0,i.jsx)(r.p,{children:"Events from the FileSystemEvents class are triggered when a zipping operation is performed under the ZipMultiThreadManager similar to single-threaded operation, with some differences."}),"\n",(0,i.jsx)(r.p,{children:"The ItemProgression event is triggered when an item is about to start to be compressed by the ZipMultiThreadManager."}),"\n",(0,i.jsx)(r.p,{children:"The ItemCompletion event is triggered when an item has completed the zipping process. You will get the event even if there is an exception and the chosen action is to 'ignore' the item and proceed with the next one."}),"\n",(0,i.jsx)(r.p,{children:"The ItemException event will be triggered if an exception occurs during processing. Even with the ZipMultiThreadManager, it is possible to Abort, Retry or Ignore the operation."}),"\n",(0,i.jsx)(r.p,{children:"The ByteProgression event is triggered as needed during zipping. An application can depend on getting a consistent trigger at 0% completion and at 100% completion."}),"\n",(0,i.jsx)(r.p,{children:"The ItemProgression, ItemCompletion and ItemException events will only be triggered from the main thread. Never from background threads. So the event handler code for these events does not need to be thread-safe."}),"\n",(0,i.jsx)(r.p,{children:"The ByteProgression event will be triggered from both background threads (during compression) and the main thread (the first 0% completion and last 100% completion call). So the code in the event handler might be executed by several different threads at the same time for different items. Therefore, the ByteProgression event handler code might need to be thread-safe."}),"\n",(0,i.jsx)(r.p,{children:"The progression events will correctly compute the progression numbers and percentages for both the 'current file' and 'all files. This includes the ByteProgression event. The 'Processed' value for the 'all files' tracking remains coherent even when multiple threads report byte progress at the same time."}),"\n",(0,i.jsx)(r.h3,{id:"userdata",children:"UserData"}),"\n",(0,i.jsx)(r.p,{children:"If the value of the UserData property is changed in one of the event handlers, the value will be propagated to the other event handlers regardless of the item, just like the single-threaded execution. Except for the ByteProgression event. For this event, each item has its own UserData value. It is initialized with the current value of the session's UserData just after the ItemProgression event is triggered for the item. After that, the UserData value included in the ByteProgression event handler for that item is independent. It may be changed in the event handler and it will be remembered, but only for the ByteProgression event for the item. It will not propagate to the other events."}),"\n",(0,i.jsx)(r.p,{children:"Because of this, it is safe to change the value of the UserData property in the ByteProgression event handler without using thread synchronization (like a lock() block for example)."}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"csharp",label:"C#",default:!0,children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-csharp",children:'  public static void ZipMultiThread()\r\n  {\r\n    AbstractFile zipFile = new DiskFile( "ZipMultiThread3.zip" );\r\n\r\n    // Delete any existing zip file\r\n    if( zipFile.Exists )\r\n      zipFile.Delete();\r\n\r\n    // Create a logical zip archive around the zip file\r\n    ZipArchive zip = new ZipArchive( zipFile );\r\n\r\n    // Create the multi-thread manager\r\n    ZipMultiThreadManager zipMultiThreadManager = new ZipMultiThreadManager();\r\n\r\n    // Assign the multi-thread manager to the archive so its operations use multiple threads\r\n    zip.MultiThreadManager = zipMultiThreadManager;\r\n\r\n    // Create a FileSystemEvents object\r\n    FileSystemEvents events = new FileSystemEvents();\r\n    object userData = null;\r\n\r\n    // Subscribe to progression and exception events\r\n    events.ByteProgression += new ByteProgressionEventHandler( OnByteProgression );\r\n    events.ItemProgression += new ItemProgressionEventHandler( OnItemProgression );\r\n    events.ItemException += new ItemExceptionEventHandler( OnItemException );\r\n    events.ItemCompletion += new ItemProgressionEventHandler( OnItemCompletion );\r\n\r\n    using( AutoBatchUpdate batch = new AutoBatchUpdate( zip ) )\r\n    {\r\n      /* Perform some zip operations using the events object to track progress */\r\n\r\n      AbstractFolder sourceFolder = new DiskFolder( @"D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\" );\r\n      sourceFolder.CopyFilesTo( events, userData, zip, true, true );\r\n\r\n      AbstractFile sourceFile = new DiskFile( @"SomeFile.dat" );\r\n      sourceFile.CopyTo( events, userData, zip, true );\r\n    }\r\n  }\r\n\r\n  static void OnItemProgression( object sender, ItemProgressionEventArgs e )\r\n  {\r\n    Console.WriteLine( "Item Progression: {0} / {1}. {2}%", e.CurrentItem, e.TargetItem, e.AllItems.Percent );\r\n  }\r\n\r\n  static void OnItemCompletion( object sender, ItemProgressionEventArgs e )\r\n  {\r\n    Console.WriteLine( "Completion: {0} / {1}. {2}%", e.CurrentItem, e.TargetItem, e.AllItems.Percent );\r\n  }\r\n\r\n  static void OnByteProgression( object sender, ByteProgressionEventArgs e )\r\n  {\r\n    /* This code can be called by multiple threads at the same time and for different files */\r\n\r\n    Console.WriteLine( "Byte Progression: {0} / {1}. {2}% / {3}%", e.CurrentItem, e.TargetItem, e.CurrentFileBytes.Percent, e.AllFilesBytes.Percent );\r\n\r\n    /* OPTIONAL: It is safe to change the value of UserData without a lock() block. The component keeps it independent for each file */\r\n    //e.UserData = 13;\r\n  }\r\n\r\n  static void OnItemException( object sender, ItemExceptionEventArgs e )\r\n  {\r\n    Console.WriteLine( "Exception: {0} / {1}", e.CurrentItem, e.TargetItem );\r\n\r\n    e.Action = ItemExceptionAction.Ignore;\r\n  }\n'})})}),(0,i.jsx)(s.A,{value:"vb.net",label:"Visual Basic .NET",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-vb.NET",children:'  Public Shared Sub ZipMultiThread()\r\n  Dim zipFile As AbstractFile = New DiskFile("ZipMultiThread3.zip")\r\n\r\n  \' Delete any existing zip file\r\n  If zipFile.Exists Then\r\n    zipFile.Delete()\r\n  End If\r\n\r\n  \' Create a logical zip archive around the zip file\r\n  Dim zip As New ZipArchive(zipFile)\r\n\r\n  \' Create the multi-thread manager\r\n  Dim zipMultiThreadManager As New ZipMultiThreadManager()\r\n\r\n  \' Assign the multi-thread manager to the archive so its operations use multiple threads\r\n  zip.MultiThreadManager = zipMultiThreadManager\r\n\r\n  \' Create a FileSystemEvents object\r\n  Dim events As New FileSystemEvents()\r\n  Dim userData As Object = Nothing\r\n\r\n  \' Subscribe to progression and exception events\r\n  AddHandler events.ByteProgression, AddressOf OnByteProgression\r\n  AddHandler events.ItemProgression, AddressOf OnItemProgression\r\n  AddHandler events.ItemException, AddressOf OnItemException\r\n  AddHandler events.ItemCompletion, AddressOf OnItemCompletion\r\n\r\n  Using batch As New AutoBatchUpdate(zip)\r\n    \' Perform some zip operations using the events object to track progress \r\n\r\n    Dim sourceFolder As AbstractFolder = New DiskFolder("D:\\Components\\NET40\\FileSystem\\Dev\\Trunk\\Tests\\UnitTesting\\Xceed.Zip.Tests\\Data\\")\r\n    sourceFolder.CopyFilesTo(events, userData, zip, True, True)\r\n\r\n    Dim sourceFile As AbstractFile = New DiskFile("SomeFile.dat")\r\n    sourceFile.CopyTo(events, userData, zip, True)\r\n  End Using\r\nEnd Sub\r\n\r\nPrivate Shared Sub OnItemProgression(ByVal sender As Object, ByVal e As ItemProgressionEventArgs)\r\n  Console.WriteLine("Item Progression: {0} / {1}. {2}%", e.CurrentItem, e.TargetItem, e.AllItems.Percent)\r\nEnd Sub\r\n\r\nPrivate Shared Sub OnItemCompletion(ByVal sender As Object, ByVal e As ItemProgressionEventArgs)\r\n  Console.WriteLine("Completion: {0} / {1}. {2}%", e.CurrentItem, e.TargetItem, e.AllItems.Percent)\r\nEnd Sub\r\n\r\nPrivate Shared Sub OnByteProgression(ByVal sender As Object, ByVal e As ByteProgressionEventArgs)\r\n  \' This code can be called by multiple threads at the same time and for different files \r\n\r\n  Console.WriteLine("Byte Progression: {0} / {1}. {2}% / {3}%", e.CurrentItem, e.TargetItem, e.CurrentFileBytes.Percent, e.AllFilesBytes.Percent)\r\n\r\n  \' OPTIONAL: It is safe to change the value of UserData without a lock() block. The component keeps it independent for each file \r\n  \'e.UserData = 13;\r\nEnd Sub\r\n\r\nPrivate Shared Sub OnItemException(ByVal sender As Object, ByVal e As ItemExceptionEventArgs)\r\n  Console.WriteLine("Exception: {0} / {1}", e.CurrentItem, e.TargetItem)\r\n\r\n  e.Action = ItemExceptionAction.Ignore\r\nEnd Sub\n'})})})]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var i=t(34164);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>w});var i=t(96540),n=t(34164),a=t(23104),s=t(56347),l=t(205),o=t(57485),p=t(31682),u=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:i,default:n}}=e;return{value:r,label:t,attributes:i,default:n}}))}(t);return function(e){const r=(0,p.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function c(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=d(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:a}))),[p,h]=m({queryString:t,groupId:n}),[g,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,u.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),b=(()=>{const e=p??g;return c({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=t(74848);function z(e){let{className:r,block:t,selectedValue:i,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.a_)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),n=l[t].value;n!==i&&(p(r),s(n))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>o.push(e),onKeyDown:h,onClick:u,...a,className:(0,n.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function F(e){const r=g(e);return(0,T.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,T.jsx)(z,{...r,...e}),(0,T.jsx)(v,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,T.jsx)(F,{...e,children:h(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var i=t(96540);const n={},a=i.createContext(n);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);