export const data ={
    "intents": [
      {
        "tag": "greeting",
        "pattern": "(hi|hello|hey|howdy|good morning|good afternoon|good evening|good night|good day|good evening|good afternoon|good morning)",
        "responses": [
          "Hello! How can I assist you today?",
          "Hey there, how can I help?",
          "Hi! What can I do for you?"
        ]
      },
      {
        "tag": "goodbye",
        "pattern": "(bye|goodbye|see you later|see ya|cya|talk to you later|ttyl|till later|till then|till next time)",
        "responses": [
          "Goodbye!",
          "Have a great day!",
          "See you later!"
        ]
      },
      {
        "tag": "thanks",
        "pattern": "(thanks|thank you|thank you so much|thanks a lot|thanks for that|thanks for your help|thannks for your time|thanks for your time)",
        "responses": [
          "You're welcome!",
          "No problem!",
          "Happy to help!"
        ]
      }
    ],
    "defaultResponses":[
      "I'm sorry, can you please rephrase that?",
    ],
    "definition":[
      
      {
        "pattern": "(what is data structures?)",
        "reply":"Data structures are ways of organizing and storing data in a computer program or system. They provide a way to efficiently manage and manipulate large amounts of data, allowing for faster access and processing of information. Common examples of data structures include arrays, linked lists, stacks, queues, trees, and graphs.Each type of data structure has its own set of operations that can be performed on it, such as adding, removing, or accessing elements. The choice of data structure often depends on the specific requirements of a program or algorithm, as well as the characteristics of the data being stored. Efficient use of data structures is critical for creating high-performance software systems that can handle large volumes of data efficiently.",
        "image":"datastructures.png"
        
      },
      {
        "pattern": "(computer architecture|computer architecture?)",
        "reply":"Computer architecture refers to the design and organization of computer systems, including their instruction sets, hardware components, and overall structure. It involves the study of how computer systems are constructed and how they function at a low level. Computer architecture is a broad field that covers a wide range of topics, including computer organization, microarchitecture, and logic design. It is also closely related to computer engineering, computer science, and electrical engineering. Computer architecture is a key component of computer engineering, which is the study of how computers are designed and built. Computer architecture is also a key component of computer science, which is the study of how computers work and how they can be used to solve problems. Computer architecture is a key component of electrical engineering, which is the study of how electrical circuits are designed and built. Computer architecture is a key component of computer engineering, which is the study of how computers are designed and built. Computer architecture is also a key component of computer science, which is the study of how computers work and how they can be used to solve problems. Computer architecture is a key component of electrical engineering, which is the study of how electrical circuits are designed and built.",
        "image":"computerarchitecture.png"
      },
      {
        "pattern": "(database management|database management?)",
        "reply":"Database management refers to the process of organizing, storing, manipulating, and retrieving data in a database. It involves the use of specialized software tools and techniques to create, maintain, and update databases and to ensure their integrity, security, and efficiency. Database management systems (DBMS) provide a centralized and structured approach to managing data in organizations. A DBMS is a software system that enables users to define, create, and manipulate databases, as well as control access to them. It provides mechanisms for storing, retrieving, and modifying data, as well as tools for managing data consistency, concurrency, and security. A DBMS is a software system that enables users to define, create, and manipulate databases, as well as control access to them. It provides mechanisms for storing, retrieving, and modifying data, as well as tools for managing data consistency, concurrency, and security. A DBMS is a software system that enables users to define, create, and manipulate databases, as well as control access to them. It provides mechanisms for storing, retrieving, and modifying data, as well as tools for managing data consistency, concurrency, and security.",
        "image":"dbms.jpeg"
      },
      {
        "pattern": "(software engineering|software engineering?)",
        "reply":"Software engineering is the process of designing, developing, testing, and maintaining software systems. It involves the use of principles, methods, and tools to create high-quality software that meets user needs and business requirements. Software engineering involves a range of activities, including requirements analysis, software design, coding, testing, and maintenance. It also includes project management and the use of software development methodologies, such as Agile or Waterfall, to ensure that software projects are completed on time, within budget, and to a high level of quality. Software engineering involves a range of activities, including requirements analysis, software design, coding, testing, and maintenance. It also includes project management and the use of software development methodologies, such as Agile or Waterfall, to ensure that software projects are completed on time, within budget, and to a high level of quality. Software engineering involves a range of activities, including requirements analysis, software design, coding, testing, and maintenance. It also includes project management and the use of software development methodologies, such as Agile or Waterfall, to ensure that software projects are completed on time, within budget, and to a high level of quality.",
        "image":"se.png"
      },
      {
        "pattern": "(artificial intelligence|artificial intelligence?)",
        "reply":"Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making. AI technology allows machines to learn from data, identify patterns, and make predictions based on that data. AI technology allows machines to learn from data, identify patterns, and make predictions based on that data. AI technology allows machines to learn from data, identify patterns, and make predictions based on that data. AI technology allows machines to learn from data, identify patterns, and make predictions based on that data.",
        "image":"ai.png"
      },
      {
        "pattern": "(computer graphics|computer graphics?)",
        "reply":"Computer graphics refers to the creation, manipulation, and display of visual content using computers. It involves the use of specialized software tools to create images, animations, and interactive content that can be used in a wide range of applications, such as gaming, film and television, advertising, and scientific visualization. Computer graphics refers to the creation, manipulation, and display of visual content using computers. It involves the use of specialized software tools to create images, animations, and interactive content that can be used in a wide range of applications, such as gaming, film and television, advertising, and scientific visualization. Computer graphics refers to the creation, manipulation, and display of visual content using computers. It involves the use of specialized software tools to create images, animations, and interactive content that can be used in a wide range of applications, such as gaming, film and television, advertising, and scientific visualization. Computer graphics refers to the creation, manipulation, and display of visual content using computers. It involves the use of specialized software tools to create images, animations, and interactive content that can be used in a wide range of applications, such as gaming, film and television, advertising, and scientific visualization.",
        "image":"cg.png"
      },
      {
        "pattern": "(operating system|operating system?)",
        "reply":"An operating system (OS) is a software program that manages computer hardware and software resources and provides services to applications. It is the interface between the computer hardware and the user, and it controls and coordinates the execution of software programs. An operating system (OS) is a software program that manages computer hardware and software resources and provides services to applications. It is the interface between the computer hardware and the user, and it controls and coordinates the execution of software programs. An operating system (OS) is a software program that manages computer hardware and software resources and provides services to applications. It is the interface between the computer hardware and the user, and it controls and coordinates the execution of software programs. An operating system (OS) is a software program that manages computer hardware and software resources and provides services to applications. It is the interface between the computer hardware and the user, and it controls and coordinates the execution of software programs.",
        "image":"os.png"
      },
      {
        "pattern": "(computer networks|computer networks?)",
        "reply":"Computer networks refer to a collection of computers and other devices that are interconnected to share resources and exchange information. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. There are many types of computer networks, including local area networks (LANs), wide area networks (WANs), and the Internet. LANs typically connect devices within a small geographic area, such as a single building or office, while WANs connect devices over a larger geographic area, such as a city, region, or country. The Internet is a global network that connects millions of devices and users around the world. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations. Computer networks can be used to facilitate communication, data sharing, and collaboration among users in different locations.",
        "image":"cn.png"
      },
      {
        "pattern": "(programming languages|programming languages?)",
        "reply":"A programming language is a formal language used to write software programs, scripts, and applications that can be executed by a computer. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. There are many different types of programming languages, including low-level languages, high-level languages, and scripting languages. Low-level languages are designed to be executed directly by a computer's hardware, while high-level languages are designed to be executed by a computer's operating system. Scripting languages are designed to be executed by a separate program, such as a web browser. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device. Programming languages are designed to provide a set of instructions that can be used to control the behavior of a computer or other device.",
        "image":"pl.png"
      },
      {
        "pattern": "(computer security|computer security?)",
        "reply":"Computer security refers to the protection of computer systems, networks, and data from unauthorized access, theft, damage, or disruption. It involves the use of hardware, software, and procedural measures to safeguard digital assets against various types of cyber threats. Computer security is essential for protecting sensitive information, such as personal data, financial information, and trade secrets, from being stolen or compromised. It involves a range of security measures, including access control, encryption, firewalls, intrusion detection and prevention, and security monitoring and incident response.",
        "image":"csec.png"
      },
      {
        "pattern": "(compiler design|compiler design?)",
        "reply":"Compiler design is the process of creating a software program that can translate source code written in a high-level programming language into machine code that a computer can understand and execute. The process of compiling involves several stages, including lexical analysis, syntax analysis, semantic analysis, code generation, and optimization. During lexical analysis, the compiler breaks the source code into a sequence of tokens, which are the basic building blocks of the language.",
        "image":"cd.png"
      },
      {
        "pattern": "(algorithm design|algorithm design?)",
        "reply":"Algorithm design refers to the process of creating a set of instructions or a procedure to solve a specific problem or accomplish a particular task. An algorithm is a step-by-step procedure for solving a problem or completing a task, which is typically implemented as a computer program. The process of designing an algorithm involves breaking down a complex problem into smaller, more manageable sub-problems, identifying the steps required to solve each sub-problem, and then combining the solutions to the sub-problems to produce a solution to the original problem",
        "image":"algdes.png"
      },
      {
        "pattern": "(computer organization|computer organization?)",
        "reply":"Computer organization refers to the way in which a computer system is structured and organized, including its hardware components, operating system, and the way in which data is stored and retrieved. It is concerned with the physical components of a computer system and their interconnections, as well as the way in which they are used to perform computational tasks. Computer organization includes the design of the computer's central processing unit (CPU), memory, input/output (I/O) devices, and other hardware components. It also involves the design and implementation of the computer's operating system, which manages the resources of the system and provides a user interface for interacting with the computer.",
        "image":"co.png"
      },
      {
        "pattern": "(computer hardware|computer hardware?)",
        "reply":"Computer hardware refers to the physical components of a computer system that can be touched and manipulated, including the central processing unit (CPU), memory, storage devices, input/output (I/O) devices, and other peripheral devices. These components work together to process and manipulate data, run software programs, and perform other computational tasks.",
        "image":"ch.png"
      },
      {
        "pattern": "(cryptography|cryptography?|what is cryptography|what is cryptography?)",
        "reply":"Cryptography is the practice of secure communication in the presence of third parties or adversaries. It involves the use of mathematical algorithms and protocols to ensure confidentiality, integrity, and authentication of information. Cryptography is used in a variety of applications, including secure communication over the internet, electronic commerce, and data storage.",
        "image":"cryptography.png"
      },
      {
        "pattern": "(web technology|web technology?)",
        "reply":"Web technology refers to the software, programming languages, tools, and platforms used to create and deploy websites and web applications. It encompasses a wide range of technologies, including markup languages such as HTML and XML, programming languages such as JavaScript and PHP, and server-side technologies such as web servers and application frameworks.",
        "image":"wt.png"
      },
      {
        "pattern": "(distributed systems|distributed systems?)",
        "reply":"Distributed systems refer to computer systems composed of multiple components, often connected through a network, that work together to achieve a common goal. These components may include computers, servers, databases, and software applications, and they are located in different physical locations. Distributed systems are designed to provide a high level of availability and reliability, as well as scalability and fault tolerance. They are used in a variety of applications, including cloud computing, e-commerce, and online banking.",
        "image":"ds.png"
      },
      {
        "pattern": "(mobile computing|mobile computing?)",
        "reply":"Mobile computing refers to the use of portable electronic devices, such as smartphones, tablets, laptops, and wearables, to access and process information while on the move. It involves the use of wireless communication technologies, such as Wi-Fi, cellular networks, and Bluetooth, to connect these devices to the internet or other devices. Mobile computing is used in a variety of applications, including e-commerce, online banking, and social media.",
        "image":"mc.png"
      },
      {
        "pattern": "(computer algorithms|computer algorithms?)",
        "reply":"A computer algorithm is a set of instructions or rules that are designed to solve a specific problem or perform a specific task. In other words, an algorithm is a step-by-step procedure for solving a problem or achieving a goal, often expressed in the form of a flowchart or pseudocode. Algorithms are used in a variety of applications, including computer programming, data science, and artificial intelligence.",
        "image":"ca.png"
      },
      
      {
        "pattern": "(digital signal processing|digital signal processing?)",
        "reply":"Digital Signal Processing (DSP) is a technique used to manipulate signals, such as sound, video, and images, using digital processing techniques. It involves the use of algorithms and mathematical techniques to transform and analyze signals, and it has numerous applications in fields such as telecommunications, audio processing, speech recognition, and image processing. DSP is used in a variety of applications, including digital audio and video recording, digital image processing, and digital signal processing. It is also used in a variety of applications, including digital audio and video recording, digital image processing, and digital signal processing.",
        "image":"digisig.png"
      },
      {
        "pattern": "(computer simulation|computer simulation?)",
        "reply":"Computer simulation is a technique for modeling real-world systems or processes using computer software. It involves creating a virtual representation of a system or process, and then running simulations to analyze how the system or process behaves under different conditions or scenarios. Computer simulations are used in a variety of applications, including engineering, medicine, and business.",
        "image":"simul.png"
      },
      {
        "pattern": "(human computer interaction|human computer interaction?)",
        "reply":"Human-Computer Interaction (HCI) is a field of study that focuses on the design, evaluation, and implementation of interactive computing systems that are usable, effective, and enjoyable for people to use. HCI is concerned with how people interact with technology, and how technology can be designed to improve human performance, satisfaction, and well-being.",
        "image":"chsim.png"
      },
      {
        "pattern": "(computer ethics|computer ethics?)",
        "reply":"Computer ethics is a branch of ethics that deals with the moral and social implications of computing technology. It is concerned with issues such as privacy, security, intellectual property, freedom of speech, and social justice, and how these issues intersect with computing technology. Computer ethics is a branch of ethics that deals with the moral and social implications of computing technology. It is concerned with issues such as privacy, security, intellectual property, freedom of speech, and social justice, and how these issues intersect with computing technology.",
        "image":"cethics.png"
      },
      {
        "pattern": "(computer aided design|computer aided design?)",
        "reply":"Computer-aided design (CAD) is the use of computer software to create, modify, analyze, and optimize designs for a wide range of products and systems. CAD software is used by engineers, architects, designers, and other professionals to create detailed 2D and 3D models of parts, components, structures, and systems. CAD software is used by engineers, architects, designers, and other professionals to create detailed 2D and 3D models of parts, components, structures, and systems.",
        "image":"cad.png"
      },
      {
        "pattern": "(computer vision|computer vision?)",
        "reply":"Computer vision is a field of artificial intelligence and computer science that deals with enabling machines to interpret and understand images and video. The goal of computer vision is to enable computers to recognize, analyze, and interpret visual data from the world around them, much like humans do. Computer vision is a field of artificial intelligence and computer science that deals with enabling machines to interpret and understand images and video. The goal of computer vision is to enable computers to recognize, analyze, and interpret visual data from the world around them, much like humans do.",
        "image":"cv.png"
      },
      {
        "pattern": "(natural language processing|natural language processing?)",
        "reply":"Natural Language Processing (NLP) is a branch of artificial intelligence that deals with the interaction between computers and human language. The goal of NLP is to enable machines to understand, interpret, and generate human language, both spoken and written. Natural Language Processing (NLP) is a branch of artificial intelligence that deals with the interaction between computers and human language. The goal of NLP is to enable machines to understand, interpret, and generate human language, both spoken and written.",
        "image":"nlp.png"
      },
      {
        "pattern": "(software maintenance|software maintenance?)",
        "reply":"Software maintenance refers to the process of modifying and updating software after it has been deployed in order to correct defects, improve performance, enhance features, or adapt to changing user needs or system requirements. Software maintenance is a critical part of the software development life cycle and is necessary to ensure that software remains reliable, usable, and relevant over time. Software maintenance is a critical part of the software development life cycle and is necessary to ensure that software remains reliable, usable, and relevant over time.",
        "image":"sm.png"
      },
      {
        "pattern": "(computer peripherals|computer peripherals?)",
        "reply":"Computer peripherals refer to external devices or components that are connected to a computer to enhance its functionality or usability. These devices can be classified into input, output, and storage peripherals based on their function. Computer peripherals refer to external devices or components that are connected to a computer to enhance its functionality or usability. These devices can be classified into input, output, and storage peripherals based on their function.",
        "image":"cphe.png"
      },
      {
        "pattern": "(multimedia computing|multimedia computing?)",
        "reply":"Multimedia computing is a field that involves the use of various media elements such as text, images, audio, video, and animations, to create and deliver interactive content. It combines principles of computer science, communication, and art to develop applications that incorporate multiple forms of media. Multimedia computing is a field that involves the use of various media elements such as text, images, audio, video, and animations, to create and deliver interactive content. It combines principles of computer science, communication, and art to develop applications that incorporate multiple forms of media.",
        "image":"mulc.png"
      },
      {
        "pattern": "(data mining|data mining?)",
        "reply":"Data mining is the process of discovering patterns, trends, and insights from large datasets using statistical, machine learning, and other computational techniques. It involves the extraction of useful information and knowledge from raw data, often with the goal of making data-driven decisions. Data mining is the process of discovering patterns, trends, and insights from large datasets using statistical, machine learning, and other computational techniques. It involves the extraction of useful information and knowledge from raw data, often with the goal of making data-driven decisions.", 
        "image":"dmine.png"
      }
      
   ]
}
  
export default data;
