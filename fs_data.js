const FS = {
  root: {
    type: "folder",
    label: "C:\\\\Users\\\\AlexR\\\\",
    children: [
      "Desktop",
      "Documents",
      "Downloads",
      "Pictures",
      "Music",
      "Videos",
      "AppData",
      "Recycle_Bin",
    ],
  },
  Desktop: {
    type: "folder",
    label: "Desktop",
    children: [
      "sticky_notes",
      "TODO_general",
      "READ_ME_LAPTOP_NOTES",
      "screenshot_descriptions",
    ],
  },
  Documents: {
    type: "folder",
    label: "Documents",
    children: ["School", "Personal", "Projects"],
  },
  School: {
    type: "folder",
    label: "School",
    children: ["COMP101", "COMP210", "COMP305", "COMP318", "MATH201"],
  },
  COMP101: {
    type: "folder",
    label: "COMP101_Intro_to_IT",
    children: ["comp101_hw1", "comp101_hw2_draft", "comp101_week3_notes"],
  },
  COMP210: {
    type: "folder",
    label: "COMP210_Networking",
    children: ["comp210_lab2", "comp210_midterm"],
  },
  COMP305: {
    type: "folder",
    label: "COMP305_Database_Systems",
    children: ["comp305_assign3", "comp305_db_notes"],
  },
  COMP318: {
    type: "folder",
    label: "COMP318_Web_Development",
    children: ["comp318_proposal", "comp318_css"],
  },
  MATH201: {
    type: "folder",
    label: "MATH201_Discrete_Math",
    children: ["math201_hw8"],
  },
  Personal: {
    type: "folder",
    label: "Personal",
    children: [
      "Journal",
      "Finance",
      "email_drafts",
      "meeting_notes_march19",
      "misc_notes",
      "calendar_2026",
    ],
  },
  Journal: {
    type: "folder",
    label: "Journal",
    children: [
      "journal_jan",
      "journal_feb",
      "journal_mar",
      "journal_apr",
      "journal_may",
    ],
  },
  Finance: {
    type: "folder",
    label: "Finance",
    children: ["budget_2026", "textbook_receipts"],
  },
  Projects: {
    type: "folder",
    label: "Projects",
    children: ["Neptune", "old_projects"],
  },
  Neptune: {
    type: "folder",
    label: "Neptune (Project Files)",
    children: [
      "neptune_design_v1",
      "neptune_git_log",
      "neptune_prototype_notes",
      "neptune_one_pager_v1",
      "neptune_one_pager_v2",
      "neptune_timeline_unfinished",
      "harbor_tech_loi",
      "hackathon_notes",
    ],
  },
  old_projects: {
    type: "folder",
    label: "old_projects",
    children: ["weather_app_readme", "portfolio_about"],
  },
  Downloads: {
    type: "folder",
    label: "Downloads",
    children: ["installers_folder", "receipts_folder", "misc_folder"],
  },
  installers_folder: {
    type: "folder",
    label: "installers",
    children: ["installers_log"],
  },
  receipts_folder: {
    type: "folder",
    label: "receipts",
    children: ["receipt_techparts", "receipt_spotify"],
  },
  misc_folder: {
    type: "folder",
    label: "misc",
    children: ["misc_downloads_log", "random_links"],
  },
  Pictures: {
    type: "folder",
    label: "Pictures",
    children: ["Screenshots_folder", "Wallpapers_folder"],
  },
  Screenshots_folder: {
    type: "folder",
    label: "Screenshots",
    children: ["screenshots_log"],
  },
  Wallpapers_folder: {
    type: "folder",
    label: "Wallpapers",
    children: ["wallpapers_note"],
  },
  Music: {
    type: "folder",
    label: "Music",
    children: ["Playlists_folder"],
  },
  Playlists_folder: {
    type: "folder",
    label: "Playlists",
    children: ["playlist_study", "playlist_hype"],
  },
  Videos: {
    type: "folder",
    label: "Videos",
    children: ["videos_empty"],
  },
  AppData: {
    type: "folder",
    label: "AppData (System)",
    children: ["Firefox_folder", "Recent_folder", "Temp_folder"],
  },
  Firefox_folder: {
    type: "folder",
    label: "Firefox Profile",
    children: ["ff_history", "ff_bookmarks", "ff_searches"],
  },
  Recent_folder: {
    type: "folder",
    label: "Windows Recent Files",
    children: ["recent_files"],
  },
  Temp_folder: {
    type: "folder",
    label: "Temp",
    children: ["temp_empty"],
  },
  Recycle_Bin: {
    type: "folder",
    label: "Recycle Bin (Forensic Recovery)",
    children: ["recycle_log"],
  },
  sticky_notes: {
    type: "file",
    icon: "📝",
    label: "sticky_notes.txt",
    date: "May 16, 2026",
    content:
      '========================================\nSTICKY NOTE 1 (yellow)\n========================================\nbuy oat milk\ncall mom sunday\nreturn library book (OVERDUE)\nPriya - study session Thursday 6pm\n\n========================================\nSTICKY NOTE 2 (blue)\n========================================\nIT Help Desk shift:\nMon 10-2\nWed 10-2\nFri 2-5\n\n========================================\nSTICKY NOTE 3 (green)\n========================================\ngit commit -m "fix: buffer flush latency on large payloads"\ngit push origin main\ncheck CI passes\n\n========================================\nSTICKY NOTE 4 (pink) - partially covered\n========================================\nUSB - [text obscured]\nRen C - Harbor Dist\ndont forget the [torn]\n\n========================================\nSTICKY NOTE 5 (yellow)\n========================================\npasswords to change:\n- email (used same one too many places)\n- github\nDO NOT WRITE PASSWORDS HERE, ALEX\n\n========================================\nSTICKY NOTE 6 (orange)\n========================================\nMay 17 7:30\nwaterfront\n"come alone" - weird but ok',
  },
  TODO_general: {
    type: "file",
    icon: "✅",
    label: "TODO_general.txt",
    date: "May 16, 2026",
    content:
      "General To-Do List\nLast edited: May 16, 2026\n\nSCHOOL:\n[x] COMP305 Assignment 3 ER diagram\n[x] COMP210 midterm\n[ ] COMP318 final project - still working\n[ ] MATH201 homework week 10\n[ ] Study for COMP101 final (June 8)\n\nLIFE:\n[x] Renew bus pass\n[ ] Book dentist appointment (overdue)\n[ ] Return camping gear to Jamie\n[x] Cancel trial subscription before April 15\n[ ] Call mom (missed last Sunday)\n\nTECH / NEPTUNE:\n[x] Fix buffer latency bug\n[x] v0.4.0 milestone test\n[ ] Write project timeline summary document (IN PROGRESS)\n[ ] Transfer files to USB\n[ ] Contact Ren Calloway at Harbor District Legal Aid\n\nMISC:\n[ ] Find laptop battery replacement online\n[ ] Organise Downloads folder (embarrassing)",
  },
  READ_ME_LAPTOP_NOTES: {
    type: "file",
    icon: "📋",
    label: "READ ME - LAPTOP NOTES.txt",
    date: "Mar 3, 2026",
    content:
      "random notes i put here because i cant be bothered to file properly\n\nwifi password for apartment: Sunflower2024!\nlogin PIN for laptop: not writing that here\n\nIT help desk supervisor - Brenda - ext 4421\nCampus security non-emergency: 555-0192\n\nif laptop dies before i replace the battery:\n- most important stuff is on github (neptune repo)\n- journal files backed up to external monthly (last backup April 30)\n- school docs backed up to OneDrive\n\nPriya's number: 555-0847\nJamie (roommate): 555-0231\nMom: 555-0109",
  },
  screenshot_descriptions: {
    type: "file",
    icon: "🖼️",
    label: "screenshot_descriptions.txt",
    date: "May 16, 2026",
    content:
      'SCREENSHOT LOG (descriptions of image files on this desktop)\n\nScreenshot_2026-01-15_143022.png\n  Browser showing GitHub repo "neptune-core" - 34 commits, created June 12 2025.\n  Description: "Maritime environmental monitoring data pipeline - personal project."\n  Owner: alexr-dev. No collaborators listed.\n\nScreenshot_2026-02-17_210544.png\n  Discord thread. jmill_dev (Jordan): "hey btw showed neptune to someone today"\n  Alex: "who?" Jordan: "contact from last internship, don\'t worry about it yet"\n\nScreenshot_2026-03-19_174311.png\n  Email from marcus.tan@harbortechinnovations.com\n  Subject: "Following up on today\'s meeting - Neptune."\n  "Could you share the API documentation and database schema?"\n\nScreenshot_2026-04-15_093847.png\n  Google Doc "Neptune - Project Overview v3" - Project History section:\n  "Neptune began as a collaboration between Jordan Miller and Alex Rivera in late 2025..."\n\nScreenshot_2026-05-09_184422.png\n  Text thread. Jordan: "have you looked at the acquisition outline yet?"\n  Alex: "what outline? I haven\'t received anything"\n  Jordan: "Marcus sent it to our team email"\n  Alex: "we don\'t have a team email??"\n\nScreenshot_2026-05-12_223015.png\n  File explorer showing neptune_documentation folder.\n  USB drive labeled "KINGSTON 32GB" shown as drive E:.',
  },
  comp101_hw1: {
    type: "file",
    icon: "📄",
    label: "Assignment1_Hardware_Components.txt",
    date: "Feb 13, 2026",
    content:
      "COMP101 - Introduction to Information Technology\nAssignment 1: Hardware Components Essay\nStudent: Alex Rivera | Student ID: 20240847\nDue: February 14, 2026  |  Submitted: February 13, 2026\n\nA modern personal computer is made up of several interdependent hardware components.\nThe CPU acts as the brain of the system, executing instructions and performing calculations.\n\nThe motherboard connects all components. It houses the CPU socket, RAM slots, expansion\ncard slots, and provides connections for storage devices and peripherals.\n\nRAM provides fast, temporary storage for data the CPU is actively using. RAM loses its\ncontents when power is removed - volatile memory.\n\nSSDs provide non-volatile storage using NAND flash memory - significantly faster than HDDs.\n\nThe GPU handles rendering of visual output.\n\nGrade: 91/100",
  },
  comp101_hw2_draft: {
    type: "file",
    icon: "📄",
    label: "Assignment2_OS_Comparison_DRAFT.txt",
    date: "Mar 2, 2026",
    content:
      "COMP101 - Assignment 2 DRAFT - DO NOT SUBMIT\nOperating System Comparison: Windows vs Linux vs macOS\n\nstill working on this - need to add more about linux kernel\n\nWindows remains dominant in enterprise environments due to broad software compatibility.\nWindows 11 introduced a redesigned taskbar and improved virtual desktop support.\n\nmacOS runs exclusively on Apple hardware, built on a UNIX foundation (Darwin kernel).\nKnown for polish, stability, and tight hardware-software integration.\n\nLinux is open-source and free. Used in servers, development environments, embedded systems.\nDistributions: Ubuntu, Fedora, Arch Linux, Debian.\n\n[ADD SECTION: file system differences - NTFS vs ext4 vs APFS]\n[ADD SECTION: security model comparison]\n\nLast saved: auto-save 11:47 PM March 2 2026",
  },
  comp101_week3_notes: {
    type: "file",
    icon: "📄",
    label: "lecture_notes_week3.txt",
    date: "Feb 19, 2026",
    content:
      "COMP101 Week 3 - Binary and Data Representation\nProf: Dr. Huang | Room: Building C, Lab 204\n\nBinary number system - base 2 (only 0s and 1s)\nExample: 25 in binary = 16 + 8 + 1 = 11001\n\nHexadecimal - base 16. Uses 0-9 and A-F.\nUsed in memory addresses and color codes.\n\nASCII: 'A' = 65, 'a' = 97\n\nData sizes:\n8 bits = 1 byte\n1024 bytes = 1 KB\n1024 KB = 1 MB\n1024 MB = 1 GB\n\nEXAM TIP: know how to convert between decimal and binary up to 255\n\nHomework: chapter 3 exercises 1-10",
  },
  comp210_lab2: {
    type: "file",
    icon: "📄",
    label: "Lab2_Wireshark_Report.txt",
    date: "Mar 10, 2026",
    content:
      "COMP210 - Computer Networking\nLab 2: Packet Analysis with Wireshark\nStudent: Alex Rivera  |  Partner: Priya Nair\n\nOBJECTIVE: Capture and analyze network packets using Wireshark.\n\nOBSERVATIONS:\nHTTP Request observed in plaintext - GET /index.html HTTP/1.1\nUsername/password submitted via HTTP forms appear completely unencrypted.\n\nHTTPS: When navigating to https:// sites, payload encrypted via TLS 1.3.\nWireshark shows only handshake metadata, not content.\n\nCONCLUSION:\nHTTP transmits all data in plaintext - vulnerable to eavesdropping.\nHTTPS using TLS encryption protects content from interception.\n\nANSWERS:\n1. TCP three-way handshake: SYN -> SYN-ACK -> ACK\n2. TTL (Time to Live): Decremented by 1 at each router hop. Prevents infinite loops.\n3. Security risk: HTTP form submission exposed credentials in plaintext.\n\nGrade received: 88/100",
  },
  comp210_midterm: {
    type: "file",
    icon: "📄",
    label: "midterm_study_notes.txt",
    date: "Apr 20, 2026",
    content:
      "COMP210 Midterm Study Guide - April 2026\n\nOSI MODEL (memorize!)\nLayer 7 - Application (HTTP, FTP, SMTP, DNS)\nLayer 6 - Presentation (encryption, SSL/TLS)\nLayer 5 - Session\nLayer 4 - Transport (TCP, UDP)\nLayer 3 - Network (IP addresses, routing)\nLayer 2 - Data Link (MAC addresses, switches)\nLayer 1 - Physical (cables, signals, bits)\n\nCommon port numbers:\n22-SSH  25-SMTP  53-DNS  80-HTTP  443-HTTPS  3306-MySQL  3389-RDP\n\nTCP vs UDP:\nTCP - connection-oriented, reliable, ordered, slower\nUDP - connectionless, fast (streaming/gaming/DNS)\n\nDHCP - DORA: Discover > Offer > Request > Acknowledge\n\nExam: April 22nd, 9am, Room 104",
  },
  comp305_assign3: {
    type: "file",
    icon: "📄",
    label: "assignment3_ER_diagram_notes.txt",
    date: "Apr 4, 2026",
    content:
      "COMP305 - Database Systems\nAssignment 3: ER Diagram - University Enrollment System\n\nEntities: STUDENT, COURSE, INSTRUCTOR, ENROLLMENT\n\nCREATE TABLE Student (\n    StudentID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(100) NOT NULL,\n    Email VARCHAR(255) UNIQUE NOT NULL,\n    DOB DATE\n);\n\nCREATE TABLE Enrollment (\n    EnrollmentID INT PRIMARY KEY AUTO_INCREMENT,\n    StudentID INT,\n    CourseID VARCHAR(10),\n    Semester VARCHAR(20),\n    Grade CHAR(2),\n    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),\n    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)\n);\n\nTODO: draw ER diagram in draw.io, export as PNG\nDue Friday 11:59 PM",
  },
  comp305_db_notes: {
    type: "file",
    icon: "📄",
    label: "project_notes_db_schema.txt",
    date: "Mar 28, 2026",
    content:
      "DB schema planning for Neptune backend\nAlex - started March 28\n\nTables needed:\n- users (id, username, email, password_hash, role, created_at)\n- sessions (session_id, user_id, ip_address, created_at, expires_at)\n- data_packets (id, user_id, timestamp, payload_type, raw_data, processed)\n- audit_log (id, user_id, action, target_table, target_id, timestamp)\n\nThe audit_log table is important - Jordan kept saying we don't need it for the demo\nbut I think it's essential. Without it we can't reconstruct what happened if something\ngoes wrong.\n\nRole system:\n- admin: full access\n- contributor: can add/edit data packets\n- viewer: read only\n\nNOTE: Marcus's team asked about the schema during the March meeting.\nI shared a simplified version. They said it was for \"compatibility assessment.\"\nRe-reading this now, that was a strange request.",
  },
  comp318_proposal: {
    type: "file",
    icon: "📄",
    label: "final_project_proposal.txt",
    date: "Mar 20, 2026",
    content:
      "COMP318 - Web Development\nFinal Project Proposal: Campus Event Aggregator\nStudent: Alex Rivera | Submitted: March 20, 2026\n\nDESCRIPTION: A web app collecting and displaying events from university departments.\n\nTECH STACK: React 18, TypeScript, Node.js/Express, PostgreSQL, JWT auth, Docker\n\nTIMELINE:\nWeek 1-2: Database schema design, basic Express API\nWeek 3-4: React frontend scaffolding\nWeek 5-6: Authentication system\nWeek 7-8: Integration, testing\nWeek 9: Polish, deployment\n\nNOTE: This project is entirely separate from my Neptune work. The Neptune project\nwould not be appropriate to submit as a class project due to external stakeholder\ninvolvement.\n\nInstructor approval: PENDING",
  },
  comp318_css: {
    type: "file",
    icon: "📄",
    label: "css_cheatsheet.txt",
    date: "Apr 10, 2026",
    content:
      "CSS Quick Reference - personal cheatsheet\n\nFLEXBOX:\n  display: flex;\n  flex-direction: row | column;\n  justify-content: flex-start | center | space-between;\n  align-items: stretch | center | flex-end;\n  gap: 16px;\n\nGRID:\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n\nCENTERING:\n  .parent { display: flex; justify-content: center; align-items: center; }\n\nMEDIA QUERIES:\n  @media (max-width: 768px) { /* tablet */ }\n  @media (max-width: 480px) { /* mobile */ }\n\nBOX SIZING RESET (always include):\n  *, *::before, *::after { box-sizing: border-box; }\n\nColors I use:\n  Blue: #2563eb | Dark: #1e293b | Teal: #0d9488 | Light bg: #f8fafc",
  },
  math201_hw8: {
    type: "file",
    icon: "📄",
    label: "homework_week8.txt",
    date: "Apr 9, 2026",
    content:
      "MATH201 Discrete Mathematics - Homework Week 8\nDue April 9, 2026\n\n1. Prove sum of two even integers is even.\n   Let a=2m, b=2n. Then a+b = 2(m+n). QED.\n\n2. Induction: 1+2+...+n = n(n+1)/2\n   Base: n=1, LHS=1, RHS=1(2)/2=1 OK\n   Step: k(k+1)/2 + (k+1) = (k+1)(k+2)/2 OK\n\n3. Bit strings of length 8 with exactly three 1s? C(8,3) = 56\n\n4. Committee of 3 from 12? C(12,3) = 220\n\n5. Exactly 2 heads in 5 coin flips? 10/32 = 5/16 = 0.3125\n\n6. [skipped - don't understand Hamiltonian paths yet]",
  },
  journal_jan: {
    type: "file",
    icon: "📓",
    label: "jan_2026.txt",
    date: "Jan 31, 2026",
    content:
      "--- January 6 ---\nNew semester starts tomorrow. Feeling okay about it. Want to keep working on the\nNeptune prototype this term. Had a good break, spent Christmas with mom and Tio Carlos.\n\n--- January 12 ---\nCOMP318 looks interesting. Math is going to be hard. Need to stay on top of it.\n\nGot back to the Neptune codebase tonight. The data ingestion module still has that\nweird latency issue when payloads exceed 4KB.\n\n--- January 19 ---\nJordan reached out. Haven't talked much since the hackathon in November. He wants\nto \"reconnect and talk about Neptune.\" Met him for coffee Tuesday. He's enthusiastic.\nThinks Neptune has real commercial potential. Said I'd think about collaborating.\n\n--- January 24 ---\nResolved the 4KB latency issue - it was a buffer flush problem, embarrassingly simple.\n\nMixed feelings about Jordan. On one hand, a collaborator with frontend experience\nwould help. On the other hand, I've been building this alone for seven months.\nMom says to trust my gut.\n\n--- January 31 ---\nAgreed to bring Jordan in as a co-contributor on Neptune. We'll do a proper handoff\nthis weekend. He suggested writing up an informal agreement about roles. Good idea.",
  },
  journal_feb: {
    type: "file",
    icon: "📓",
    label: "feb_2026.txt",
    date: "Feb 28, 2026",
    content:
      '--- February 3 ---\nJordan and I went through the Neptune codebase Saturday. He picked up the data\npipeline logic faster than I expected. We wrote a rough "collaboration agreement."\nMostly: I own backend and data architecture, Jordan takes frontend and UI.\n\nWe did not write anything about ownership or IP. I didn\'t think about it at the time.\n\n--- February 11 ---\nNeptune: Jordan pushed his first real commit - a cleaned up dashboard UI.\nIt looks genuinely good. Better than what I had.\n\n--- February 17 ---\nJordan mentioned he\'d "shown the project to someone" who was interested.\nBeing kind of vague. Asked who, he said "a contact from an internship."\nDidn\'t push it. Probably nothing.\n\n--- February 25 ---\nBig milestone: Neptune successfully processed 10,000 synthetic data points end to end\nwith no errors. Really proud of this.\n\n--- February 28 ---\nGot an 88 on the Wireshark lab. Happy with that.\n\nJordan\'s been pushing commits that changed variable names and file structures\nI established. Not sure I like that but don\'t want to be controlling.',
  },
  journal_mar: {
    type: "file",
    icon: "📓",
    label: "mar_2026.txt",
    date: "Mar 30, 2026",
    content:
      '--- March 4 ---\nJordan asked me to "prepare a one-pager on Neptune\'s architecture and market position."\nMarket position? We\'re two students with a prototype. He said "just good practice\nfor pitching." Okay.\n\n--- March 11 ---\nWrote the one-pager. Jordan made edits - he changed "developed by Alex Rivera"\nto "developed by Rivera and Miller." I brought it up and he said "well we\'re\ncollaborators." I let it go. I don\'t know why I let it go.\n\n--- March 14 ---\nJordan set up a meeting with Marcus Tan, founder of Harbor Tech Innovations.\nMaritime and environmental data monitoring company. Can see why Neptune is relevant.\n\n--- March 19 ---\nMeeting with Marcus Tan today. Professional, asked a lot of technical questions -\nmostly directed at me. Jordan handled the "vision" talk.\n\nMarcus asked for DB schema and API docs. Jordan said sure. I said "we can put\nsomething together." Not the same as yes. But nobody noticed.\n\nWhy does he need the schema already? We haven\'t discussed terms. Seems premature.\n\n--- March 26 ---\nMarcus\'s team sent a "Letter of Interest." It says the project is "co-developed\nby Jordan Miller and Alex Rivera." Jordan\'s name is first.\n\nIs that significant? Am I being paranoid?\nGoing to keep a copy of everything from now on. Just in case.\n\n--- March 30 ---\nDidn\'t sleep well. I started Neptune in June 2025. Jordan joined in February 2026.\nThat\'s eight months later.\n\nI need to understand what "co-developer" means legally in the context of IP.',
  },
  journal_apr: {
    type: "file",
    icon: "📓",
    label: "apr_2026.txt",
    date: "Apr 30, 2026",
    content:
      '--- April 2 ---\nLooked up intellectual property and software co-authorship. Without a written\nagreement, contribution can create co-ownership claims, but original authorship\nstill matters. Need to talk to someone who actually knows this stuff.\n\nBooked appointment at the student legal advice clinic.\n\n--- April 8 ---\nMet with someone at the student legal clinic. She said: document everything.\nDates matter. Git history IS evidence but needs to be contextualized.\nShe gave me pamphlets on open source licensing. Said don\'t confront anyone yet.\n\n--- April 15 ---\nJordan sent a revised "Neptune Overview." The Project History section says the\nproject "began as a collaboration between Jordan Miller and Alex Rivera in late 2025."\n\nLate 2025. That is not accurate. I started Neptune in June 2025.\nJordan was not involved until February 2026.\n\nI didn\'t reply yet. Saved a copy of that document.\n\n--- April 22 ---\nMath midterm was rough. Think I passed.\n\n--- April 28 ---\nJordan mentioned Harbor Tech might want to move quickly. "Before summer."\nHe said this casually like it was good news. I haven\'t agreed to anything.\nHe keeps saying "we" about decisions I haven\'t been part of.\n\nMade a full backup of the Neptune repository. Local copy, not on any shared platform.\n\n--- April 30 ---\nI keep coming back to: the one-pager edit. The "late 2025" claim. The schema\nrequest before any agreement. These things don\'t add up.\n\nI need to figure out what to do and I need to do it carefully.',
  },
  journal_may: {
    type: "file",
    icon: "📓",
    label: "may_2026.txt",
    date: "May 16, 2026",
    content:
      "--- May 1 ---\nI've decided I'm not going to let this go. I've been too passive.\nThe project is mine - I can prove it. The git log doesn't lie.\n\nPlan:\n1. Pull together all documentation proving I originated Neptune\n2. Get it into a format someone else can evaluate\n3. Find someone trustworthy to give it to before anything is signed\n\n--- May 5 ---\nSpoke to Professor Okafor after class. He mentioned a contact at a legal aid\nnonprofit downtown: Ren Calloway. Student advocacy / digital rights.\nHarbor District Legal Aid.\n\n--- May 9 ---\nJordan texted asking if I'd \"reviewed the acquisition outline.\" I haven't received\nany acquisition outline. He said Marcus sent it to \"our team email.\"\nWe don't have a team email.\nReplied: \"Can you forward it?\" He said he would. He hasn't.\n\n--- May 12 ---\nBeen compiling files. Git history, version timestamps, original design document,\nscreenshot of first working prototype from August 2025.\nAlso started writing a timeline summary. Haven't finished it.\n\n--- May 15 ---\nReceived a message from an account I didn't recognize:\n\"You're doing the right thing. Be careful who you trust.\"\n\nDon't know who that was. Deleted it but it shook me.\n\n--- May 16 ---\nFinished compiling everything. Going to transfer it to the USB drive.\nI'll try to reach Ren Calloway this week. Prof Okafor said she's trustworthy.\n\nTomorrow evening I may meet someone. Replied to that message from May 15.\nThey responded with a time and location. Near the waterfront.\n\nI feel like I'm finally doing something instead of just worrying.\n\n--- [no further entries] ---",
  },
  budget_2026: {
    type: "file",
    icon: "💰",
    label: "budget_spring2026.txt",
    date: "Apr 1, 2026",
    content:
      "Monthly Budget - Spring Semester 2026\n\nINCOME:\n  Part-time job (IT help desk):  $680/month\n  Parents contribution:          $400/month\n  TOTAL:                       $1,080/month\n\nEXPENSES:\n  Rent (shared 3BR, my share):   $420\n  Groceries:                    ~$180\n  Phone plan:                    $45\n  Spotify:                       $10.99\n  Netflix (shared, my share):    $5\n  Bus pass:                      $35\n  Textbooks/supplies:           ~$30/month avg\n  Eating out/coffee:            ~$80\n  Miscellaneous:                 $40\n  TOTAL:                        ~$846\n\nSAVINGS: ~$234/month target. Actual: $190 (spent more on food).\n\nNotes:\n- Cancel free trial before April 15 or it charges\n- Paid rent Mar 31, next due May 1\n- Owe Jamie $20 for groceries",
  },
  textbook_receipts: {
    type: "file",
    icon: "🧾",
    label: "textbook_receipts_notes.txt",
    date: "Mar 31, 2026",
    content:
      'Textbook spending tracker 2026\n\nJanuary:\n- COMP318 "Web Development with React" - $74 (Campus Bookstore)\n- MATH201 "Discrete Mathematics" Rosen 8th ed - $89 (used copy, online)\n- COMP210 lab manual - $18 (split with Priya)\n\nFebruary: No new books.\nMarch: COMP305 supplementary (free PDF from course page)\nApril: Nothing yet.\n\nTotal so far: $190\n\nTIP: check library reserves first before buying',
  },
  email_drafts: {
    type: "file",
    icon: "✉️",
    label: "email_drafts.txt",
    date: "May 16, 2026",
    content:
      'SAVED EMAIL DRAFTS - NOT SENT\nExported from Gmail drafts folder\n\n================================================================\nDRAFT 1 - UNSENT (Apr 16, 11:43 PM)\nTo: [blank]  |  Subject: Neptune project - question about attribution\n\nHi Jordan,\n\nI wanted to ask about the project overview document you updated.\nIn the Project History section it now says the project started as a\ncollaboration in late 2025. But I started Neptune in June 2025, and\nyou joined in February 2026. I just want to make sure the history is\naccurate before we share it with Marcus\'s team.\n\nCan we get on a call this week to clarify?\n\nAlex\n\n[DRAFT NOT SENT - note: "too confrontational - rewrite later"]\n\n================================================================\nDRAFT 2 - UNSENT (Apr 17, 12:22 AM)\n\nHi Jordan,\n\nJust checking in - I noticed the project history section was updated.\nCould you send me a note about what was changed?\n\nAlex\n\n[DRAFT NOT SENT - note: "still not right. don\'t send either version yet."]\n\n================================================================\nDRAFT 3 - UNSENT (May 13, 2026)\nTo: ren.calloway@harbordistrictlegalaid.org\n\nDear Ms. Calloway,\n\nMy name is Alex Rivera. I\'m a second-year IT student. I was referred\nto you by Professor Emmanuel Okafor regarding a personal software project.\n\nI have been developing a data pipeline called Neptune since June 2025.\nI brought in a collaborator (Jordan Miller) for the frontend in early 2026.\nSince then, a company called Harbor Tech Innovations has expressed interest\nin acquiring the project.\n\nI have become concerned that the project\'s history and authorship are being\nmisrepresented. Their formal letter describes the project as "co-developed\nbeginning in late 2025" - which is not accurate.\n\nI have compiled documentation including git commit history and design documents\nestablishing my sole authorship of the core system prior to any collaboration.\n\nI would like to speak with someone about my options.\n\nAlex Rivera | alexrivera.student@gmail.com | 555-0847\n\n[DRAFT NOT SENT - note: "review before sending"]\n\n================================================================\nDRAFT 4 - UNSENT (May 16, 11:52 PM)\n[Identical to Draft 3 - last action before laptop was closed]',
  },
  meeting_notes_march19: {
    type: "file",
    icon: "📋",
    label: "meeting_notes_march19.txt",
    date: "Mar 19, 2026",
    content:
      'Meeting notes - Harbor Tech / Marcus Tan\nMarch 19, 2026, ~2:30 PM\nLocation: Harbor Tech Innovations office (waterfront precinct)\n\nAttendees: Marcus Tan (CEO), two Harbor Tech staff, Jordan Miller, Alex Rivera\n\nMarcus said Neptune is "exactly the kind of lightweight solution" they\'ve been looking for.\n\nTechnical questions came to me:\n- Ingestion handles malformed payloads via validation layer (rejects with 400)\n- Throughput tested to 10k, theoretical much higher with horizontal scaling\n- Why PostgreSQL over InfluxDB? Familiarity and flexibility.\n- Auth: session-based now, JWT planned.\n\nJordan answered "market positioning" and "business vision" questions.\n\nNear the end Marcus asked for: DB schema + Full API docs.\nJordan said yes. I said "we can put something together." Not the same as yes.\n\nAfterward I asked Jordan "I thought we were going to hold off on sharing the schema?"\nHe said "it\'s just for compatibility assessment, it\'s fine."\n\nNOTE added March 26:\nGot the Letter of Interest from Marcus.\n"Co-developed by Jordan Miller and Alex Rivera beginning in late 2025" - this is wrong.\nI need to address this.',
  },
  misc_notes: {
    type: "file",
    icon: "📋",
    label: "misc_notes.txt",
    date: "May 15, 2026",
    content:
      "Random stuff that doesn't belong anywhere else\n\nProf Okafor email: e.okafor@university.edu\nOffice hours: Mon/Wed 1-3pm, Room 312\n\nStudent Legal Clinic: Student Services Building, Room 108\nOpening hours: Tue-Thu 10am-4pm (book in advance)\n\nDentist: Dr. Sandra Yee, 555-0344 (overdue - call this week)\n\nBus to waterfront: Route 44 from campus, ~25 min.\n\nJamie is allergic to tree nuts (remember when ordering pizza)\n\nFrom April 8 legal clinic:\n- Document EVERYTHING\n- Dates matter\n- Written agreements matter\n- Git history IS evidence but needs to be contextualized\n- Without written IP agreement, default rules apply\n\nQuestions I still have:\n- Does the university own any of Neptune?\n- What would \"acquisition\" give Harbor Tech? All rights?\n- Does Jordan have any legal claim or just moral claim?\n\nNote May 15:\nGot a weird message. Someone knows what's going on.\nEither it's connected to this situation or it's a coincidence.\nGoing to be careful.",
  },
  calendar_2026: {
    type: "file",
    icon: "📅",
    label: "calendar_2026.txt",
    date: "May 18, 2026",
    content:
      'CALENDAR EXPORT - Alex Rivera (Google Calendar)\nForensic acquisition: May 18, 2026\n\nJANUARY 2026\nJan 12 - First day of semester\nJan 21 - Coffee with Jordan Miller [campus cafe]\nJan 31 - COMP101 Assignment 1 due\n\nFEBRUARY 2026\nFeb 01-02 - Neptune repo handoff with Jordan\nFeb 25 - COMP210 Lab 2 (Wireshark)\n\nMARCH 2026\nMar 08 - Priya study session (networking)\nMar 14 2:00 PM - Call with Jordan re: Harbor Tech intro\nMar 19 2:30 PM - MEETING: Harbor Tech Innovations [waterfront precinct office]\n  Note added: "dress ok, don\'t wear the gaming hoodie"\nMar 20 - COMP318 final project proposal due\n\nAPRIL 2026\nApr 08 2:00 PM - Student Legal Clinic appointment [Student Services Bldg, Room 108]\nApr 22 9:00 AM - MATH201 Midterm Exam, Room 104\nApr 28 - Neptune v0.4 backup and git log export\nApr 30 - Journal backup to external drive\n\nMAY 2026\nMay 01 - Rent due [paid]\nMay 05 - Talked to Prof Okafor after class re: IP question\nMay 06-08 - USB drive and battery delivery expected\nMay 09 - USB drive received (confirmed delivery)\nMay 12 - File organization, Neptune documentation\nMay 14 2:00-5:00 PM - IT Help Desk shift\nMay 16 - File transfer to USB [planned]\nMay 17 7:30 PM - [waterfront meeting]\n  Entry created May 16. Text: "7:30pm waterfront, near the old crane pier"\n\n[No calendar entries after May 17]',
  },
  neptune_design_v1: {
    type: "file",
    icon: "📐",
    label: "original_design_v1.txt",
    date: "Jun 15, 2025",
    content:
      'PROJECT NEPTUNE - Initial Design Document\nAuthor: Alex Rivera\nCreated: June 15, 2025\nVersion: 0.1 (pre-alpha)\n\nOVERVIEW\nNeptune is a lightweight data pipeline for real-time ingestion, processing, and\nvisualization of environmental sensor data. Initial focus: maritime and waterway monitoring.\n\nThe core idea grew from a summer placement observation: existing solutions for small-scale\nenvironmental monitoring are either too expensive (enterprise platforms) or too limited\n(hobbyist tools). Neptune aims to fill the gap.\n\nCORE COMPONENTS (planned)\n1. Ingestion Layer - REST or MQTT sensor endpoints, payload validation, queue\n2. Processing Pipeline - normalization, configurable transform rules, DB write\n3. Storage Layer - PostgreSQL, time-series schema, full audit trail\n4. Visualization Layer (later) - React dashboard, real-time graphs, alerts\n\nTECH STACK\nBackend: Node.js / Express\nDatabase: PostgreSQL\nFrontend: React (later)\nAuth: Session-based initially, JWT later\n\nWHY "NEPTUNE"?\nNamed after the Roman god of the sea. Initial use case is maritime water quality monitoring.\n\nPERSONAL NOTE\nThis is a personal project. Not affiliated with any course. Not currently collaborating\nwith anyone. All code will be my own work unless I decide otherwise later.\n\nI want to see how far I can take this on my own first.\n\n- Alex, June 15, 2025',
  },
  neptune_git_log: {
    type: "file",
    icon: "🔧",
    label: "git_log_export.txt",
    date: "Apr 28, 2026",
    content:
      "GIT LOG EXPORT - Repository: neptune-core\nExported: May 12, 2026  |  Branch: main\n\ncommit a1f3d8e  |  Jun 13 2025  |  Alex Rivera\n    Initial commit: project scaffolding and README\n\ncommit 3b72c1d  |  Jun 16 2025  |  Alex Rivera\n    feat: basic Express server and health endpoint\n\ncommit 7f2e9a1  |  Jun 19 2025  |  Alex Rivera\n    feat: PostgreSQL connection pool and initial schema\n\ncommit 9c1b4e7  |  Jun 28 2025  |  Alex Rivera\n    feat: data ingestion endpoint with payload validation\n\ncommit 2d5f8a1  |  Jul 8 2025   |  Alex Rivera\n    feat: processing pipeline v1 - normalization and transform rules\n\ncommit 4e7b0c3  |  Jul 20 2025  |  Alex Rivera\n    fix: race condition in queue worker\n\ncommit 8f1a4c7  |  Aug 1 2025   |  Alex Rivera\n    feat: audit logging on all write operations\n\ncommit 1a3c6e9  |  Aug 18 2025  |  Alex Rivera\n    v0.2.0: stable ingestion and processing pipeline - MILESTONE\n\ncommit 5c8e1b4  |  Sep 9 2025   |  Alex Rivera\n    feat: REST API documentation draft\n\ncommit 3e6a9c2  |  Oct 5 2025   |  Alex Rivera\n    feat: configurable alert thresholds\n\ncommit 7b0d3f6  |  Nov 14 2025  |  Alex Rivera\n    feat: MQTT subscriber prototype\n\ncommit 9d2f5a8  |  Dec 13 2025  |  Alex Rivera\n    refactor: clean up ingestion module, improve error handling\n\ncommit 2f5a8c1  |  Jan 22 2026  |  Alex Rivera\n    fix: buffer flush latency on large payloads (more than 4KB)\n\ncommit 4a7c0e3  |  Feb 1 2026   |  Alex Rivera\n    v0.3.0: performance improvements - MILESTONE\n\n=== COLLABORATOR ADDED: Jordan Miller - February 3, 2026 ===\n\ncommit 6c9e2b5  |  Feb 9 2026   |  Jordan Miller\n    feat: dashboard UI scaffolding (React)\n\ncommit 8e1b4d7  |  Feb 18 2026  |  Alex Rivera\n    feat: WebSocket support for real-time data push\n\ncommit 0b3d6f9  |  Feb 27 2026  |  Jordan Miller\n    feat: dashboard chart components and responsive layout\n\ncommit 2d5e8b1  |  Feb 28 2026  |  Alex Rivera\n    v0.4.0: 10k payload milestone test - all clear - MILESTONE\n\ncommit 4f7a0c3  |  Mar 10 2026  |  Jordan Miller\n    refactor: renamed several backend modules (cleanup)\n\ncommit 6a9c2e5  |  Mar 12 2026  |  Alex Rivera\n    fix: reverted unauthorized module renames - see comment",
  },
  neptune_prototype_notes: {
    type: "file",
    icon: "📐",
    label: "prototype_aug2025_notes.txt",
    date: "Aug 18, 2025",
    content:
      "August 18, 2025 - v0.2.0 milestone achieved\n\nfirst real working version. it actually works end to end.\n\nwhat it does right now:\n- REST endpoint accepts POST with sensor payload JSON\n- validates format (required fields: sensor_id, timestamp, reading_type, value, unit)\n- normalises timestamp to UTC ISO 8601\n- applies transform rules (unit conversion for temperature C/F)\n- writes to postgres - data_packets table\n- writes to audit_log table simultaneously\n- returns 201 with processed record ID\n\ntested with 1000 synthetic records today. all processed correctly.\nlatency: avg 48ms per record (single thread, no optimisation yet)\n\nbut it WORKS. 7 weeks from first commit to working prototype.\n\nthis is the furthest i've gotten on a personal project. feeling good.",
  },
  neptune_one_pager_v1: {
    type: "file",
    icon: "📄",
    label: "neptune_one_pager_v1_ORIGINAL.txt",
    date: "Mar 11, 2026",
    content:
      "NEPTUNE - Data Pipeline for Maritime Environmental Monitoring\nDeveloped by Alex Rivera\n\nOne-Page Overview | March 2026\n\nWHAT IS NEPTUNE?\nNeptune is a modular, real-time data pipeline designed to ingest, process, and\nvisualize environmental sensor data from maritime and waterway monitoring installations.\n\nCORE CAPABILITIES\n- Real-time ingestion via REST API and MQTT\n- Configurable data normalization and transformation rules\n- PostgreSQL time-series storage with full audit logging\n- Web dashboard for live visualization and threshold alerting\n- Role-based access control (admin / contributor / viewer)\n\nCURRENT STATUS\nVersion 0.4.0 (February 2026)\nSuccessfully tested with 10,000 plus synthetic sensor payloads\nCore pipeline: stable  |  Dashboard: functional prototype\n\nCONTACT\nAlex Rivera: alexrivera.student@gmail.com\n\n[This is the ORIGINAL version before Jordan's edits. Saved locally March 11. - AR]",
  },
  neptune_one_pager_v2: {
    type: "file",
    icon: "📄",
    label: "neptune_one_pager_v2.txt",
    date: "Mar 11, 2026",
    content:
      'NEPTUNE - Data Pipeline for Maritime Environmental Monitoring\nDeveloped by Rivera and Miller\n\nOne-Page Overview | March 2026\n\nWHAT IS NEPTUNE?\nNeptune is a modular, real-time data pipeline designed to ingest, process, and\nvisualize environmental sensor data from maritime and waterway monitoring installations.\nBuilt for operators who need enterprise-grade reliability at small-operator cost.\n\nCORE CAPABILITIES\n- Real-time ingestion via REST API and MQTT\n- Configurable data normalization and transformation rules\n- PostgreSQL time-series storage with full audit logging\n- Web dashboard for live visualization and threshold alerting\n- Role-based access control (admin / contributor / viewer)\n\nCURRENT STATUS\nVersion 0.4.0 (February 2026)\nSuccessfully tested with 10,000 plus synthetic sensor payloads\n\nCONTACT\nJordan Miller: jmiller.dev@gmail.com\nAlex Rivera: alexrivera.student@gmail.com\n\n[NOTE: Compare with _ORIGINAL version.\n"Developed by Rivera and Miller" was originally "Developed by Alex Rivera."\nJordan changed this. I didn\'t stop it at the time. - AR, May 12]',
  },
  neptune_timeline_unfinished: {
    type: "file",
    icon: "📄",
    label: "neptune_timeline_summary_UNFINISHED.txt",
    date: "May 16, 2026",
    content:
      'PROJECT NEPTUNE - TIMELINE AND AUTHORSHIP SUMMARY\nPrepared by: Alex Rivera\nStatus: DRAFT - INCOMPLETE\n\nPURPOSE: Clear factual record of Neptune\'s origins and development history.\nThis is NOT an accusation document. This is a factual record.\n\nSECTION 1: PROJECT ORIGINS\n\nNeptune was conceived and initiated by Alex Rivera in June 2025.\n- Not assigned by a university course\n- Not developed on university resources\n- Not collaborative at inception\n\nEvidence:\n- First git commit: June 13, 2025 (see git_log_export.txt)\n- Initial design document: June 15, 2025 (see original_design_v1.txt)\n- Version 0.2.0 milestone: August 18, 2025 - before any collaboration\n\nSECTION 2: JORDAN MILLER\'S INVOLVEMENT\n\nJordan Miller was added as a repository collaborator on February 3, 2026.\nPrior to that date, Jordan Miller made zero commits to the repository.\n\nInformal collaboration agreement established:\n- Alex Rivera: backend, data architecture, database layer\n- Jordan Miller: frontend, UI/dashboard\n\nNo written agreement regarding IP ownership, authorship credit, or financial arrangements.\n\nSECTION 3: HARBOR TECH INNOVATIONS\n\n[NOTE TO SELF: finish this section]\n- date of first contact\n- date of meeting (March 19)\n- what was shared (schema, one-pager)\n- the letter wording issue\n- the acquisition outline I never received\n\nSECTION 4: CONCERNS\n\nItems of concern:\n1. One-pager header changed from "Alex Rivera" to "Rivera and Miller" - March 11\n2. Project history rewritten to say "late 2025" collaboration - April 15\n3. Acquisition outline sent to unknown "team email" without my knowledge - May 9\n4.\n\n[document ends here - not finished]',
  },
  harbor_tech_loi: {
    type: "file",
    icon: "📧",
    label: "harbor_tech_letter_of_interest.txt",
    date: "Mar 26, 2026",
    content:
      "HARBOR TECH INNOVATIONS\nLetter of Interest\nIssued: March 25, 2026\n\nTo: Jordan Miller, Alex Rivera (Neptune Development Team)\nFrom: Marcus Tan, Founder and CEO, Harbor Tech Innovations\n\nSubject: Expression of Interest in Neptune Data Pipeline System\n\nDear Jordan and Alex,\n\nFollowing our productive meeting on March 19, we are pleased to express formal\ninterest in the Neptune system as a candidate for acquisition or exclusive licensing\nby Harbor Tech Innovations.\n\nNeptune's lightweight architecture and real-time data processing capabilities align\nstrongly with our operational needs in maritime environmental monitoring. Our technical\nteam has identified significant potential for integration with our HarborSense platform.\n\nWe propose to move forward with:\n(a) A technical due diligence process (estimated 3-4 weeks)\n(b) Negotiation of terms for either full acquisition or an exclusive commercial license\n(c) A potential partnership arrangement retaining the co-developers as consultants\n\nIn preparation for due diligence, we request:\n- Full source code access (read-only, via private repository invitation)\n- Complete API and database documentation\n- Any existing contracts, partnership agreements, or third-party commitments\n\nWe understand the Neptune system was co-developed by Jordan Miller and Alex Rivera\nbeginning in late 2025 and represents approximately six months of collaborative development.\n\nWe look forward to your response.\n\nMarcus Tan\nFounder and CEO, Harbor Tech Innovations\nmarcus.tan@harbortechinnovations.com",
  },
  hackathon_notes: {
    type: "file",
    icon: "📋",
    label: "hackathon_nov2025_notes.txt",
    date: "Nov 22, 2025",
    content:
      'Coastal Tech Hackathon - November 2025\nMy notes\n\nTeam: solo (registered as individual)\nTheme: "Smart Ocean" - sustainability and environmental monitoring\n\nIdea pitched: live water quality dashboard for small harbor operators.\nBasically a simplified version of what I\'m doing with Neptune.\n\nResults:\n1st: autonomous drone monitoring team\n2nd: beach cleanup gamification app\n3rd: algae bloom prediction ML model\nMe: "Honorable Mention - Technical Merit"\n\nPeople I met:\n- Priya (also in my networking class)\n- Jordan Miller - did a fintech project. Chatted about data pipelines.\n  He knows React well. Did internship at a maritime tech startup last summer.\n  Discord handle: jmill_dev\n\nWill probably not collaborate with him. Just a note in case.\n\nGood experience. Need to improve pitching, not just the technical side.',
  },
  weather_app_readme: {
    type: "file",
    icon: "📄",
    label: "weather_app_README.txt",
    date: "Apr 2025",
    content:
      "weather app - ABANDONED\nStarted: March 2025  |  Last worked on: April 2025\n\nWhat it was supposed to do:\n- fetch weather from open-meteo API (free)\n- display 7-day forecast\n- save favourite locations\n\nWhat I got done:\n- basic API fetch works\n- displays current temp\n- ugly UI placeholder\n\nWhy I stopped:\n- got busy with end-of-semester exams\n- Neptune became more interesting\n- also there are already a million weather apps",
  },
  portfolio_about: {
    type: "file",
    icon: "📄",
    label: "about_me_draft.txt",
    date: "Jan 2026",
    content:
      "PERSONAL PORTFOLIO - ABOUT ME DRAFT\n(haven't built the site yet, just wrote the copy)\n\nHi, I'm Alex Rivera - a second-year Information Technology student with a passion\nfor backend systems, data pipelines, and building things that work reliably.\n\nI grew up near the coast and developed an interest in environmental tech after\nspending time around working harbors as a kid.\n\nCurrently I'm building Neptune, a personal project that processes real-time sensor\ndata for maritime environmental monitoring. It started as a way to learn Node.js\nand PostgreSQL properly, but has grown into something I'm genuinely proud of.\n\nTechnical skills:\n- Languages: JavaScript/TypeScript, Python, SQL, some C, HTML/CSS\n- Backend: Node.js, Express\n- Databases: PostgreSQL, basic MySQL\n- Tools: Git, Docker (learning), Wireshark, VS Code\n- OS: Windows (daily), Ubuntu (dual boot)\n\nLooking for internship opportunities in backend development - summer 2026.",
  },
  installers_log: {
    type: "file",
    icon: "📦",
    label: "[installer files - binary]",
    date: "Various",
    content:
      "INSTALLER FILES (binary executables - not text readable)\n\nVSCode-win32-x64-1.87.2.exe        97.3 MB   Jan 8 2026\nnodejs-v22.3.0-x64.msi             31.6 MB   Jan 8 2026\nGit-2.44.0-64-bit.exe              63.8 MB   Jan 8 2026\nWireshark-4.2.3-x64.exe            82.1 MB   Mar 9 2026\nVLC-3.0.21-win64.exe               42.9 MB   Feb 14 2026\ndraw.io-24.2.5.exe                115.2 MB   Apr 3 2026\nobs-studio-30.1.2-installer.exe   213.7 MB   Mar 3 2026",
  },
  receipt_techparts: {
    type: "file",
    icon: "🧾",
    label: "online_purchase_apr2026.txt",
    date: "Apr 29, 2026",
    content:
      "ORDER CONFIRMATION - TechParts Direct\nOrder #: TPD-2026-04-88471\nDate: April 29, 2026\nCustomer: Alex Rivera\n\nItems Ordered:\n  Kingston DataTraveler 32GB USB 3.2 Flash Drive (Black) x1 ... $12.99\n  Lenovo IdeaPad battery replacement (L22L3PF3 compatible) x1 ... $47.99\n\nShipping: Standard (5-7 business days) ... $5.99\nTOTAL: $66.97\n\nPayment: Visa ending 4471\nEstimated delivery: May 6-8, 2026",
  },
  receipt_spotify: {
    type: "file",
    icon: "🧾",
    label: "spotify_receipt_apr2026.txt",
    date: "Apr 1, 2026",
    content:
      "Spotify AB - Receipt\nDate: April 1, 2026\n\nSpotify Premium Individual - Monthly\nAmount: $10.99 USD\nPayment method: Visa ending 4471\nNext billing date: May 1, 2026",
  },
  misc_downloads_log: {
    type: "file",
    icon: "📄",
    label: "downloaded_files_log.txt",
    date: "May 16, 2026",
    content:
      "DOWNLOADS - document files of note\n\nIP_law_students_guide.pdf                  2.1 MB   Apr 8 2026\nopen_source_licensing_explained.pdf        0.9 MB   Apr 8 2026\nwhistleblower_protections_guide_2025.pdf   1.7 MB   May 3 2026\nsoftware_copyright_FAQ.pdf                 0.6 MB   May 4 2026\ncomp210_lab2_instructions.pdf              1.2 MB   Mar 8 2026\nCOMP305_assignment3_brief.pdf              0.8 MB   Apr 1 2026\n\nProject backups:\n  neptune_v03_backup.zip    14.7 MB   Feb 28 2026\n  neptune_v04_backup.zip    18.2 MB   Apr 28 2026",
  },
  random_links: {
    type: "file",
    icon: "🔗",
    label: "random_links.txt",
    date: "Various",
    content:
      "links i saved to read later (never do)\n\nfreecodecamp.org/news/typescript-generics-explained/\ncss-tricks.com/a-complete-guide-to-flexbox/\nohshitgit.com/\nexplainshell.com/\narticle about PostgreSQL indexing best practices - lost the link\nnodejs stream documentation\nreddit thread about bcrypt vs argon2 for password hashing",
  },
  screenshots_log: {
    type: "file",
    icon: "🖼️",
    label: "screenshot_descriptions_folder.txt",
    date: "May 16, 2026",
    content:
      'PICTURES/SCREENSHOTS FOLDER CONTENTS\n\nscreenshot_2025-08-18_neptune_v020_test.png\n  Terminal showing Neptune v0.2.0 test: 1000 records, 0 errors, avg 48ms.\n  Timestamp: Mon Aug 18 20:47:33 2025. VS Code open in background.\n\nscreenshot_2025-11_coastal_hackathon_certificate.png\n  Certificate: "Coastal Tech Hackathon - Honorable Mention, Technical Merit"\n  Recipient: Alex Rivera  |  Date: November 22, 2025\n\nscreenshot_2026-02-28_neptune_v040_milestone.png\n  GitHub Actions CI run: 47/47 tests passing (green).\n  Commit: "v0.4.0: 10k payload milestone test - all clear - MILESTONE"\n\nscreenshot_2026-03-19_harbor_tech_office_view.png\n  Photo from Harbor Tech meeting room. Harbor visible through window.\n  Timestamp metadata: 2026-03-19 14:28:07\n\nscreenshot_2026-04-15_neptune_overview_v3_history.png\n  Google Doc Project History section.\n  Red highlight around "late 2025".\n  Annotation: "THIS IS WRONG - I started June 2025, Jordan joined Feb 2026"\n\nscreenshot_2026-05-16_usb_files_transferred.png\n  Windows File Explorer showing USB drive E: (KINGSTON 32GB)\n  Contents: neptune_documentation folder - 6 files, 47.3 KB total\n    git_log_export.txt\n    original_design_v1.txt\n    prototype_aug2025_notes.txt\n    hackathon_nov2025_notes.txt\n    harbor_tech_letter_of_interest.txt\n    neptune_timeline_summary_UNFINISHED.txt\n  Timestamp: May 16, 2026 11:37 PM',
  },
  wallpapers_note: {
    type: "file",
    icon: "🖼️",
    label: "[image files - not readable]",
    date: "Various",
    content:
      "Image files in this folder (binary - not text-readable):\n\nwallpaper_mountain_lake.jpg     4.1 MB   Feb 2 2026\nwallpaper_ocean_sunset.jpg      3.8 MB   Sep 2025\nwallpaper_dark_minimal.jpg      1.2 MB   Jan 2026",
  },
  playlist_study: {
    type: "file",
    icon: "🎵",
    label: "study_playlist.txt",
    date: "Mar 2026",
    content:
      'Spotify Playlist: "deep work mode"\n\nBrian Eno - Music For Airports\nNils Frahm - Says\nMax Richter - On the Nature of Daylight\nBonobo - Kong\nFour Tet - She Moves She\nTycho - Awake\nBonobo - Kiara\nExplosions in the Sky - Your Hand in Mine\nAphex Twin - Rhubarb\nMax Richter - Sleep\nJon Hopkins - Immunity\nOlafur Arnalds - Near Light',
  },
  playlist_hype: {
    type: "file",
    icon: "🎵",
    label: "hype_playlist.txt",
    date: "Nov 2025",
    content:
      "Spotify Playlist: \"when deep work mode isn't working\"\n\nKendrick Lamar - N95\nJungle - Keep Moving\nDaft Punk - Get Lucky\nLCD Soundsystem - All My Friends\nTame Impala - Let It Happen\nThe Strokes - Reptilia\nCaribou - Can't Do Without You\nJamie xx - Loud Places\nFrank Ocean - Pyramids\nRadiohead - 15 Step\nGorillaz - Feel Good Inc.\nVampire Weekend - A-Punk",
  },
  videos_empty: {
    type: "file",
    icon: "📂",
    label: "[empty folder]",
    date: "",
    content: "This folder is empty.",
  },
  ff_history: {
    type: "file",
    icon: "🌐",
    label: "browser_history.txt",
    date: "May 18, 2026",
    content:
      "FIREFOX BROWSER HISTORY EXPORT\nForensic acquisition: May 18, 2026\n14,847 total entries - filtered selection shown\n\nJANUARY 2026\nJan 08  | code.visualstudio.com/download    | Download VS Code\nJan 08  | nodejs.org/en/download            | Node.js Downloads\nJan 12  | github.com/alexr-dev/neptune-core | alexr-dev/neptune-core (GitHub)\nJan 19  | discord.com/app                   | Discord\n\nFEBRUARY 2026\nFeb 02  | github.com/.../contributors       | neptune-core Contributors\nFeb 03  | github.com/settings/access        | Repository Access Settings\nFeb 09  | github.com/jmiller-dev           | jmiller-dev GitHub Profile\nFeb 17  | discord.com/app                   | Discord\n\nMARCH 2026\nMar 03  | linkedin.com/in/marcus-tan-harbor | Marcus Tan LinkedIn\nMar 04  | harbortechinnovations.com         | Harbor Tech Innovations - Home\nMar 04  | harbortechinnovations.com/about   | About Us\nMar 04  | harbortechinnovations.com/harborsense | HarborSense Platform\nMar 26  | gmail.com                         | Gmail - Harbor Tech letter received\nMar 30  | reddit.com/r/legaladvice          | Can collaborator claim co-authorship? (Reddit)\n\nAPRIL 2026\nApr 01  | wikipedia.org/wiki/Intellectual_property | Intellectual property - Wikipedia\nApr 02  | law.cornell.edu/wex/copyright     | Copyright - Legal Information Institute\nApr 08  | university.edu/services/legal-clinic | Student Legal Advice Clinic\nApr 08  | choosealicense.com                | Choose an open source license\n\nMAY 2026\nMay 03  | aclu.org/know-your-rights/whistleblower | Whistleblower Protections - ACLU\nMay 03  | whistleblower.gov                 | Whistleblower Protection Program\nMay 04  | eff.org/issues/know-your-rights   | Know Your Rights - EFF\nMay 04  | nolo.com/.../software-copyright   | Software Copyright - Nolo\nMay 05  | university.edu/faculty/okafor     | Prof. Emmanuel Okafor - Staff Profile\nMay 16  | maps.google.com - waterfront      | Google Maps - Waterfront District\nMay 16  | harbordistrictlegalaid.org/contact| Contact - Harbor District Legal Aid\nMay 16  | gmail.com                         | Gmail [LAST RECORDED SESSION - 11:55 PM]",
  },
  ff_bookmarks: {
    type: "file",
    icon: "⭐",
    label: "bookmarks.txt",
    date: "May 18, 2026",
    content:
      'FIREFOX BOOKMARKS EXPORT\n\nTOOLBAR\n  University Portal | university.edu/student-portal\n  Gmail             | mail.google.com\n  GitHub            | github.com\n\nDEV RESOURCES\n  MDN Web Docs      | developer.mozilla.org\n  Stack Overflow    | stackoverflow.com\n  Node.js Docs      | nodejs.org/en/docs\n  PostgreSQL Docs   | postgresql.org/docs\n  CSS Tricks        | css-tricks.com\n  Oh Shit Git       | ohshitgit.com\n\nSCHOOL\n  Library Catalogue | library.university.edu\n  Grade Portal      | university.edu/portal/grades\n\nREADING LATER (mostly unread)\n  "So You Want to Be a Whistleblower" - EFF\n  Open Source Licensing Explained - choosealicense.com\n  "How Git Commit History Proves Authorship" - dev.to\n  ACLU Know Your Rights - Digital Privacy\n  Harbor District Legal Aid | harbordistrictlegalaid.org\n  Software Copyright for Developers - nolo.com\n\nHARBOR TECH (added March 4)\n  Harbor Tech Innovations | harbortechinnovations.com\n  HarborSense Platform    | harbortechinnovations.com/harborsense\n  Marcus Tan LinkedIn     | linkedin.com/in/marcus-tan-harbor',
  },
  ff_searches: {
    type: "file",
    icon: "🔍",
    label: "search_history.txt",
    date: "May 18, 2026",
    content:
      "FIREFOX SEARCH HISTORY - last 90 days\n\nMARCH 2026\nMar 03 | harbor tech innovations\nMar 04 | marcus tan harbor tech\nMar 30 | can someone claim co-authorship of my software\nMar 30 | software co-author rights without agreement\nMar 30 | open source git history legal evidence\n\nAPRIL 2026\nApr 01 | intellectual property software student project\nApr 02 | when does collaboration create co-ownership software\nApr 02 | what counts as co-authorship in software copyright\nApr 08 | student legal advice technology IP\nApr 15 | how to prove you wrote software before collaborator joined\nApr 15 | git commit history as legal proof\nApr 28 | how to preserve digital evidence\n\nMAY 2026\nMay 03 | whistleblower protection tech company\nMay 04 | how to report IP theft\nMay 04 | digital forensics file timestamps\nMay 05 | Ren Calloway legal aid\nMay 09 | harbor district legal aid contact\nMay 12 | how to export git log\nMay 14 | how to write to usb drive windows 11\nMay 15 | can anonymous tips be trusted\nMay 16 | waterfront district map\nMay 16 | Ren Calloway Harbor District Legal Aid",
  },
  recent_files: {
    type: "file",
    icon: "🕐",
    label: "recent_files_log.txt",
    date: "May 18, 2026",
    content:
      "WINDOWS RECENT FILES - Jump List Record\nForensic acquisition: May 18, 2026\nSorted by last access (most recent first)\n\n1.  may_2026.txt                          May 17 2026 6:44 PM  Documents/Personal/Journal/\n2.  TODO_general.txt                      May 17 2026 6:31 PM  Desktop/\n3.  neptune_documentation (folder)        May 16 2026 11:48 PM Documents/Projects/Neptune/\n4.  email_drafts.txt                      May 16 2026 11:52 PM Documents/Personal/\n5.  git_log_export.txt                    May 16 2026 10:05 PM Documents/Projects/Neptune/\n6.  sticky_notes.txt                      May 16 2026 9:55 PM  Desktop/\n7.  neptune_timeline_summary_UNFINISHED   May 16 2026 9:30 PM  Documents/Projects/Neptune/\n8.  budget_spring2026.txt                 May 14 2026 8:15 PM  Documents/Personal/Finance/\n9.  harbor_tech_letter_of_interest.txt    May 12 2026 9:18 PM  Documents/Projects/Neptune/\n10. neptune_one_pager_v1_ORIGINAL.txt     May 12 2026 9:15 PM  Documents/Projects/Neptune/\n11. neptune_one_pager_v2.txt              May 12 2026 9:12 PM  Documents/Projects/Neptune/\n12. apr_2026.txt                          May 12 2026 8:45 PM  Documents/Personal/Journal/\n13. whistleblower_protections_guide.pdf   May 3  2026 8:34 PM  Downloads/\n14. IP_law_students_guide.pdf             Apr 8  2026 5:12 PM  Downloads/\n15. software_copyright_FAQ.pdf            May 4  2026 8:20 PM  Downloads/",
  },
  temp_empty: {
    type: "file",
    icon: "📂",
    label: "[temp files cleared]",
    date: "",
    content:
      "AppData/Local/Temp - cleared on last startup. No recoverable temp files.",
  },
  recycle_log: {
    type: "file",
    icon: "🗑️",
    label: "deleted_files_log.txt",
    date: "May 18, 2026",
    content:
      'RECYCLE BIN - FORENSIC RECOVERY RECORD\nAcquisition: May 18, 2026\n\n=== RECOVERABLE FILES ===\n\nFILE: collaboration_agreement_draft.txt\nOriginal path: Documents/Projects/Neptune/\nDate deleted: March 15, 2026  |  Size: 1.8 KB  |  Status: RECOVERABLE\n\n--- RECOVERED CONTENT ---\nNeptune Project - Collaboration Agreement (INFORMAL DRAFT)\nPrepared: January 31, 2026\n\nThis is not a legal document. Just a record of what we agreed.\n\n1. Alex Rivera remains the primary architect and backend developer.\n   Alex\'s work predates this collaboration (project began June 2025).\n2. Jordan Miller joins as frontend/UI developer from Feb 2026 forward.\n3. We share equal credit for ongoing contributions from Feb 2026 forward.\n4. We will discuss commercial arrangements together.\n5. This does not address prior work. Alex\'s original contributions\n   (June 2025 - January 2026) are Alex\'s own.\n\nSigned: Alex Rivera (typed)\nSigned: Jordan Miller (typed)\n--- END RECOVERED FILE ---\n\nFILE: weird_message_screenshot.png\nOriginal path: Desktop/\nDate deleted: May 16, 2026 (same day created)  |  Status: RECOVERABLE\n\n--- IMAGE DESCRIPTION (recovered) ---\nScreenshot of email from anonymized ProtonMail account.\nTo: alexrivera.student@gmail.com\nBody: "You\'re doing the right thing. Be careful who you trust.\nNot everyone involved is acting in good faith.\nDon\'t meet anyone alone."\nReceived: May 15, 2026 9:47 PM\n--- END IMAGE DESCRIPTION ---\n\nFILE: jordan_discord_march.txt (PARTIAL RECOVERY)\nOriginal path: Documents/Personal/\nDate deleted: April 30, 2026  |  Status: PARTIAL\n\n--- PARTIAL RECOVERY ---\nDiscord log export, March 2026...\nJordan (Mar 14 11:22 AM): "so marcus is keen, he wants to move fast"\nAlex (Mar 14 11:29 AM): "how fast"\nJordan (Mar 14 11:31 AM): "before summer ideally. he said he already has a term sheet drafted"\nAlex (Mar 14 11:35 AM): "we haven\'t agreed to anything though"\nJordan (Mar 14 11:38 AM): "i know i know, it\'s just their side, we don\'t have to sign anything"\nAlex (Mar 14 11:43 AM): "Thursday the 19th, his office near the waterfront"\n(rest of file unrecoverable)\n--- END PARTIAL RECOVERY ---\n\n=== NON-RECOVERABLE (metadata only) ===\nphoto_christmas_2025.jpg   |  Jan 8 2026   |  OVERWRITTEN\nCOMP220_exam_notes.txt     |  Jan 8 2026   |  OVERWRITTEN\nold_resume_2024.docx       |  Feb 12 2026  |  OVERWRITTEN',
  },
};
