import React, { useState } from "react";

// --- COMPREHENSIVE STUDY DATA ---
const studyData = [
  {
    id: "intro",
    title: "Course Intro & Getting Started",
    sections: [
      {
        heading: "Cybersecurity Landscape & Workforce",
        text: "The demand for cybersecurity professionals is growing rapidly, supported by government frameworks and international certifications.",
        definitions: [
          {
            term: "Information Security Analyst",
            definition:
              "A role whose growth is expected to be 29% from 2024 to 2034, much faster than average (U.S. Bureau of Labor Statistics).",
          },
          {
            term: "NICE Cybersecurity Workforce Framework",
            definition:
              "National Initiative for Cybersecurity Education framework (NIST SP 800-181r1) providing an exhaustive list of cybersecurity work roles, tasks, knowledge, skills, and abilities.",
          },
          {
            term: "CISSP",
            definition:
              "Certified Information Systems Security Professional. A popular certification from (ISC)2.",
          },
        ],
        examples: [
          "Example: Using the NICE framework to identify the specific 'Skills' and 'Abilities' required for a network defense role.",
        ],
      },
    ],
    examTips: [
      "Familiarize yourself with the NICE framework's breakdown: Tasks, Knowledge, Skills, and Abilities.",
      "Remember the high growth rate (29%) for InfoSec analysts as a context for industry demand.",
    ],
    chapterSummary: [
      "The Bureau of Labor Statistics (BLS) projects massive growth in security fields.",
      "NICE framework categorizes roles by Tasks, Knowledge, Skills, Abilities.",
      "CISSP is a major industry certification.",
    ],
  },
  {
    id: "basics",
    title: "Internet Basics & Networking",
    sections: [
      {
        heading: "Communications Paradigms",
        text: "The fundamental ways data is routed through a network.",
        definitions: [
          {
            term: "Circuit Switching",
            definition:
              "A communication mechanism establishing a dedicated path between a sender and receiver with guaranteed isolation from other paths (e.g., PSTN).",
          },
          {
            term: "Packet Switching",
            definition:
              "Data is broken into packets and sent over a shared network where paths are not dedicated.",
          },
        ],
        examples: [
          "Example (Circuit Switching): Placing a traditional phone call where the line is dedicated to the two parties until terminated.",
        ],
      },
      {
        heading: "Addressing & Protocols",
        text: "Methods for identifying devices and defining communication rules.",
        definitions: [
          {
            term: "Protocol Suite",
            definition:
              "A collection of protocols designed to work together, such as the TCP/IP 5-layer model.",
          },
          {
            term: "Header",
            definition:
              "Information added to data as it passes down a layered model. It is removed as data passes up.",
          },
          {
            term: "Unicast",
            definition:
              "Communication addressed to a single specific receiver.",
          },
          {
            term: "Multicast",
            definition:
              "Communication addressed to a specific group of receivers.",
          },
          {
            term: "Broadcast",
            definition:
              "Communication addressed to all devices on a network segment.",
          },
          {
            term: "DHCP",
            definition:
              "Dynamic Host Configuration Protocol. Used to obtain basic configuration info (like an IP address). The requester broadcasts a DHCP DISCOVER packet containing its MAC address.",
          },
          {
            term: "NAT Table",
            definition:
              "Network Address Translation table. Uses port numbers as an index to map internal private IP addresses to an external public IP.",
          },
        ],
        examples: [
          "Example: A host joining a network broadcasts a DHCP DISCOVER packet to find a server and get an IP.",
          "Example: A router uses a NAT table to translate an internal 10.0.0.1 IP to a public 150.210.155.146 IP.",
        ],
      },
      {
        heading: "Transport Layer Alternatives",
        text: "The choice of transport protocol depends on application requirements.",
        definitions: [
          {
            term: "TCP (Transmission Control Protocol)",
            definition:
              "Reliable, connection-oriented protocol. Uses sequence numbers and flags to start/end sessions.",
          },
          {
            term: "UDP (User Datagram Protocol)",
            definition:
              "Unreliable, connectionless protocol. Less overhead, used for streaming.",
          },
          {
            term: "IP (Internet Protocol)",
            definition:
              "The network layer protocol. It is inherently unreliable (best-effort delivery).",
          },
        ],
        examples: [
          "Example: A streaming video application would use UDP because speed is more important than recovering every lost packet.",
          "Example: Sequence numbers are found in the TCP header, while source IP addresses are found in the IP header.",
        ],
      },
    ],
    examTips: [
      "Differentiate Circuit (dedicated path, point-to-point) vs. Packet switching.",
      "Know exactly what DHCP does: it broadcasts a DISCOVER packet using its MAC address.",
      "TCP is for reliability; UDP is for speed/streaming. IP is an unreliable network layer.",
    ],
    chapterSummary: [
      "Circuit Switching establishes an isolated, point-to-point path (3 steps: establish, use, terminate).",
      "Headers are added on the way down the TCP/IP stack and removed on the way up.",
      "DHCP uses Broadcasts; NAT uses ports to map IPs.",
      "Unicast (1:1), Multicast (1:Many), Broadcast (1:All).",
    ],
  },
  {
    id: "ch1",
    title: "Chapter 1: Security Overview",
    sections: [
      {
        heading: "The Core Concepts (CIA Triad)",
        text: "The fundamental goals of computer security established by NIST (NISTIR 7298).",
        definitions: [
          {
            term: "Computer Security",
            definition:
              "Measures and controls that ensure confidentiality, integrity, and availability of information processed and stored by a computer.",
          },
          {
            term: "Confidentiality",
            definition:
              "Preserving authorized restrictions on information access and disclosure, protecting personal privacy and proprietary info.",
          },
          {
            term: "Integrity",
            definition:
              "Guarding against improper information modification or destruction, ensuring information non-repudiation and authenticity.",
          },
          {
            term: "Availability",
            definition:
              "Ensuring timely and reliable access to and use of information.",
          },
        ],
        examples: [
          "Example (Confidentiality): Encrypting a hard drive so stolen data cannot be read.",
          "Example (Integrity): Using hash functions to verify a file hasn't been altered.",
          "Example (Availability): Implementing backup servers to prevent a DoS attack from taking a system offline.",
        ],
      },
      {
        heading: "Assets, Threats, and Attacks",
        text: "Understanding what we protect, how it is threatened, and how to counter it.",
        definitions: [
          {
            term: "Assets",
            definition:
              "Hardware, software, firmware, information data, and telecommunications that need protection.",
          },
          {
            term: "Attack Surface",
            definition:
              "The total sum of vulnerabilities that can be exploited in a given system.",
          },
          {
            term: "Attack Tree",
            definition:
              "A conceptual diagram showing how an asset, or target, might be attacked.",
          },
        ],
        examples: [
          "Example: Closing unused network ports reduces the system's attack surface.",
        ],
      },
    ],
    examTips: [
      "Memorize the exact definitions of the CIA Triad (Confidentiality, Integrity, Availability). It is the foundation of the course.",
      "Be prepared to classify an incident. If data is changed without authorization, it's an Integrity loss.",
    ],
    chapterSummary: [
      "Computer Security ensures CIA: Confidentiality, Integrity, Availability.",
      "Security strategy requires understanding Assets, Threats, and Attacks.",
      "Focus is on three questions: What assets to protect? How are they threatened? How do we counter threats?",
    ],
  },
  {
    id: "ch2",
    title: "Chapter 2: Cryptographic Tools",
    sections: [
      {
        heading: "Encryption Algorithms",
        text: "Methods for providing confidentiality for transmitted or stored data.",
        definitions: [
          {
            term: "Symmetric Encryption",
            definition:
              "Also called conventional or single-key encryption. Both sender and receiver use the same key. Requires a strong algorithm and a securely shared key.",
          },
          {
            term: "Public-Key (Asymmetric) Encryption",
            definition:
              "Uses two keys (public and private). Invented by Whitfield Diffie and Martin Hellman.",
          },
          {
            term: "Stream Cipher",
            definition:
              "An encryption algorithm that encrypts data one bit or byte at a time.",
          },
          {
            term: "Block Cipher",
            definition:
              "An encryption algorithm that encrypts data in fixed-size blocks.",
          },
        ],
        examples: [
          "Example (Asymmetric): Alice encrypts a message with Bob's Public Key. Only Bob's Private Key can decrypt it.",
        ],
      },
      {
        heading: "Authentication and Integrity",
        text: "Tools used to prove identity and ensure data has not been altered.",
        definitions: [
          {
            term: "Hash Function",
            definition:
              "An algorithm that takes arbitrary data and produces a fixed-size string. Used for message authentication. A secure hash is computationally infeasible to reverse.",
          },
          {
            term: "Digital Signature",
            definition:
              "A mechanism that uses public-key cryptography to authenticate the sender of a message and ensure non-repudiation.",
          },
          {
            term: "Digital Envelope",
            definition:
              "A technique that uses asymmetric encryption to securely transmit a symmetric key.",
          },
        ],
        examples: [
          "Example: A file is downloaded along with its hash value. If computing the downloaded file's hash yields the same value, the file's integrity is verified.",
        ],
      },
    ],
    examTips: [
      "Symmetric = Single Key (Fast, hard to share). Asymmetric = Two Keys (Public/Private).",
      "Understand the inventors of Public Key crypto: Diffie and Hellman.",
      "Hash functions are one-way and provide Integrity, not Confidentiality.",
    ],
    chapterSummary: [
      "Symmetric encryption is the universal technique for providing confidentiality.",
      "Public-key systems require that it is computationally infeasible to determine the private key from the public key.",
      "Hash functions and digital signatures are critical for message authentication.",
    ],
  },
  {
    id: "ch3",
    title: "Chapter 3: User Authentication",
    sections: [
      {
        heading: "Identity and Authentication",
        text: "The process of proving who you are to a computer system (NIST SP 800-63-3).",
        definitions: [
          {
            term: "Digital Identity",
            definition:
              "A unique representation of a subject engaged in an online transaction.",
          },
          {
            term: "Identification",
            definition: "Identifying information system users or processes.",
          },
          {
            term: "Authentication",
            definition:
              "Verifying the identities of users or processes as a prerequisite to allowing access.",
          },
          {
            term: "Multifactor Authentication",
            definition:
              "Using two or more different methods to authenticate (e.g., a password and a hardware token).",
          },
        ],
        examples: [
          "Example: Entering a username is Identification. Entering the correct password is Authentication.",
        ],
      },
      {
        heading: "Authentication Methods",
        text: "The different categories of credentials used to authenticate users.",
        definitions: [
          {
            term: "Password-based Authentication",
            definition:
              "Authentication using a secret memorized string. Vulnerable to cracking; requires hashed storage.",
          },
          {
            term: "Token-based Authentication",
            definition:
              "Authentication using a physical device like a memory card, smart card, or hardware token.",
          },
          {
            term: "Biometric Authentication",
            definition:
              "Authentication using physical characteristics (e.g., an iris biometric system or fingerprint).",
          },
        ],
        examples: [
          "Example: A user logs into an ATM using a Token (the ATM card) and a Password/PIN.",
        ],
      },
    ],
    examTips: [
      "Distinguish between Identification (who you claim to be) and Authentication (proving it).",
      "Understand the derived security requirement: systems must use multifactor authentication for privileged accounts.",
      "Passwords must never be stored in plain text; they must be hashed.",
    ],
    chapterSummary: [
      "Digital identity uniquely represents a subject online.",
      "NIST requires multifactor authentication and replay-resistant mechanisms.",
      "Authentication types: Passwords (something you know), Tokens (something you have), Biometrics (something you are).",
    ],
  },
  {
    id: "ch6",
    title: "Chapter 6: Malicious Software (Malware)",
    sections: [
      {
        heading: "Malware Fundamentals",
        text: "Software designed to exploit vulnerabilities and damage systems.",
        definitions: [
          {
            term: "Malware",
            definition:
              "A program inserted covertly with the intent of compromising CIA or annoying the victim (NIST 800-83).",
          },
          {
            term: "Advanced Persistent Threat (APT)",
            definition:
              "Cybercrime directed at specific business/political targets over an extended period, often state-sponsored.",
          },
          {
            term: "Attack Kit",
            definition:
              "Set of tools for generating new malware automatically using supplied payloads.",
          },
          {
            term: "Adware",
            definition:
              "Advertising integrated into software, often causing pop-ups or browser redirection.",
          },
        ],
        examples: [
          "Example: The Morris Worm was an early, famous worm that propagated automatically across networks.",
        ],
      },
      {
        heading: "Types of Malware payloads & Propagation",
        text: "How malware spreads and what it does once inside a system.",
        definitions: [
          {
            term: "Virus",
            definition:
              "Malware that infects content (like macro/scripting viruses) and requires user action to spread.",
          },
          {
            term: "Worm",
            definition:
              "Malware that propagates automatically by exploiting vulnerabilities, discovering targets on its own.",
          },
          {
            term: "Trojan Horse",
            definition:
              "Malware disguised as legitimate software. Often propagates via social engineering.",
          },
          {
            term: "Logic Bomb",
            definition:
              "A payload that executes only when a specific condition or date is met.",
          },
          {
            term: "Ransomware",
            definition:
              "Payload that encrypts or locks data, demanding payment (often as Ransomware-as-a-Service).",
          },
          {
            term: "Keylogger / Spyware",
            definition:
              "Malware whose payload is information theft, capturing keystrokes or system data.",
          },
        ],
        examples: [
          "Example: Drive-by-downloads infect a user simply by visiting a compromised website, requiring no click.",
        ],
      },
    ],
    examTips: [
      "Know the difference between a Virus (needs a host file/user action) and a Worm (self-propagating).",
      "Understand that APTs (Advanced Persistent Threats) are highly sophisticated, patient, and usually state-funded.",
      "Hardware can be malicious too! (e.g., NSA's modified USB devices or tiny radio transmitters).",
    ],
    chapterSummary: [
      "Malware compromises Confidentiality, Integrity, or Availability.",
      "Propagation methods: Infected content (Viruses), Vulnerability exploit (Worms), Social Engineering (Trojans).",
      "Payloads include system corruption, data destruction, ransomware, info theft (keyloggers), and stealthing (rootkits).",
    ],
  },
  {
    id: "ch7",
    title: "Chapter 7: Denial-of-Service Attacks",
    sections: [
      {
        heading: "Understanding DoS",
        text: "Attacks targeting the Availability of systems.",
        definitions: [
          {
            term: "Denial-of-Service (DoS)",
            definition:
              "An action that prevents or impairs the authorized use of networks, systems, or applications by exhausting resources (CPU, memory, bandwidth, threads) (NIST definition).",
          },
          {
            term: "Source Address Spoofing",
            definition:
              "Forging the source IP address in a packet to hide the attacker's identity or redirect responses.",
          },
          {
            term: "Distributed DoS (DDoS)",
            definition:
              "A DoS attack launched from multiple, distributed compromised systems (zombies/bots) simultaneously.",
          },
        ],
        examples: [
          "Example: Exhausting threads in a thread pool. Even if threads are just blocked waiting, the server runs out of capacity.",
        ],
      },
      {
        heading: "Types of Flooding Attacks",
        text: "Specific techniques used to overwhelm a target.",
        definitions: [
          {
            term: "SYN Spoofing / TCP SYN Flood",
            definition:
              "Sending a massive amount of TCP SYN requests. The server allocates memory for half-open connections until it crashes.",
          },
          {
            term: "ICMP Flood",
            definition:
              "Overwhelming a target with ICMP Echo Request (ping) packets.",
          },
          {
            term: "UDP Flood",
            definition:
              "Overwhelming a target with UDP traffic to random ports.",
          },
          {
            term: "Amplification / Reflection Attack",
            definition:
              "Sending requests to third-party servers with a spoofed source address of the victim, causing the third-party to flood the victim with large responses (e.g., DNS amplification).",
          },
          {
            term: "Cyberslam (Application Attack)",
            definition:
              "Sending valid but highly complex requests to an application, causing it to consume massive CPU/Database resources.",
          },
        ],
        examples: [
          "Example: A DNS Amplification attack sends a small 60-byte request to a DNS server, which then sends a 3000-byte response to the spoofed victim's IP address.",
        ],
      },
    ],
    examTips: [
      "Remember that DoS doesn't just attack bandwidth; it can attack memory, CPU, or application resources (like thread pools).",
      "Understand the mechanics of a Reflection/Amplification attack: relying on a spoofed source IP and a third-party server.",
    ],
    chapterSummary: [
      "DoS attacks exhaust resources to destroy Availability.",
      "Network bandwidth, System resources, and Application resources are the main targets.",
      "Defenses require upstream ISP cooperation or mitigation services (Akamai, CloudFlare).",
    ],
  },
  {
    id: "ch8",
    title: "Chapter 8: Intrusion Detection",
    sections: [
      {
        heading: "Intruders and Intrusion Detection",
        text: "Identifying unauthorized activity in a network.",
        definitions: [
          {
            term: "Cyber Criminals",
            definition:
              "Individuals or groups motivated by financial reward (identity theft, data ransoming). Often operate on the Dark Web.",
          },
          {
            term: "Intrusion Detection System (IDS)",
            definition:
              "Hardware or software that monitors a network or system for malicious activity or policy violations.",
          },
          {
            term: "Base-Rate Fallacy",
            definition:
              "A statistical flaw in IDS where an extremely small percentage of actual attacks leads to a massive amount of false positives, overwhelming analysts.",
          },
          {
            term: "Honeypot",
            definition:
              "Decoy systems designed to lure attackers away from critical systems and gather intelligence on their methods.",
          },
        ],
        examples: [
          "Example: DARPA continually attempts to automate the search for vulnerabilities, exploiting them, and defending against the exploit.",
        ],
      },
      {
        heading: "Detection Methodologies",
        text: "How an IDS actually spots an attack.",
        definitions: [
          {
            term: "Anomaly Detection",
            definition:
              "Establishing a baseline of normal behavior and flagging any activity that significantly deviates from that baseline.",
          },
          {
            term: "Signature / Heuristic Detection",
            definition:
              "Comparing observed network traffic or system logs against a database of known attack patterns (signatures).",
          },
          {
            term: "Host-Based IDS (HIDS)",
            definition:
              "Monitors the characteristics of a single host and the events occurring within that host.",
          },
          {
            term: "Network-Based IDS (NIDS)",
            definition:
              "Monitors network traffic for particular network segments or devices.",
          },
        ],
        examples: [
          "Example: Anomaly detection might flag a user logging in at 3:00 AM if they normally only log in between 9 AM and 5 PM.",
        ],
      },
    ],
    examTips: [
      "Quote to remember: 'You can't defend. You can't prevent. The only thing you can do is detect and respond.' - Bruce Schneier",
      "Understand the difference between Signature (known bad patterns) and Anomaly (abnormal behavior) detection.",
    ],
    chapterSummary: [
      "Cyber criminals seek financial reward and trade tips on underground forums.",
      "IDS relies on Anomaly detection or Signature/Heuristic detection.",
      "HIDS protects a single machine; NIDS monitors network-wide traffic.",
      "Honeypots distract attackers and generate threat intel.",
    ],
  },
  {
    id: "ch9",
    title: "Chapter 9: Firewalls and IPS",
    sections: [
      {
        heading: "Firewall Fundamentals",
        text: "The primary perimeter defense mechanism.",
        definitions: [
          {
            term: "Firewall",
            definition:
              "A hardware or software choke point inserted between networks to establish a controlled link, imposing security and auditing.",
          },
          {
            term: "Firewall Access Policy",
            definition:
              "A critical list of the types of traffic authorized to pass, based on addresses, protocols, applications, and content.",
          },
          {
            term: "Bastion Host",
            definition:
              "A special purpose computer on a network specifically designed and configured to withstand attacks, often hosting the firewall.",
          },
          {
            term: "Unified Threat Management (UTM)",
            definition:
              "A single device that combines firewall, IPS, anti-virus, and other security features.",
          },
        ],
        examples: [
          "Example: All traffic from inside to outside, and vice versa, must pass through the firewall. Only authorized traffic passes.",
        ],
      },
      {
        heading: "Firewall Types & Actions",
        text: "Different firewall technologies operate at different layers.",
        definitions: [
          {
            term: "Packet Filtering Firewall",
            definition:
              "Examines each IP packet independently and makes decisions based on header information (IP, port).",
          },
          {
            term: "Stateful Inspection Firewall",
            definition:
              "Keeps track of the state of active connections and makes decisions based on the context of the traffic flow.",
          },
          {
            term: "Application-Level Gateway (ALG)",
            definition:
              "Also known as a proxy. Acts as a relay of application-level traffic, deeply inspecting the payload.",
          },
          {
            term: "Drop Action",
            definition:
              "The firewall rejects a packet based on rules and logs the result.",
          },
          {
            term: "Reject Action",
            definition:
              "The packet is rejected, logged, and an error message is returned to the sender (e.g., TCP Reset).",
          },
          {
            term: "Sdrop Action",
            definition: "The packet is rejected but NOT logged (stealth drop).",
          },
        ],
        examples: [
          "Example: A stealth scan might attempt to provoke a TCP Reset. A firewall configured to simply 'Drop' instead of 'Reject' prevents giving the attacker information.",
        ],
      },
    ],
    examTips: [
      "Know the three design goals of a firewall: 1) All traffic passes through it. 2) Only authorized traffic passes. 3) The firewall itself is immune to penetration.",
      "Understand the difference between Drop (log but no reply), Reject (log + send error), and Sdrop (no log, no reply).",
    ],
    chapterSummary: [
      "Firewalls act as a single choke point between the internal network and the internet.",
      "Access policy is built from risk assessments.",
      "Firewall types: Packet filtering, Stateful inspection, Application-level gateways, Circuit-level gateways.",
      "Note: NSA has implemented persistent backdoors for virtually all firewalls (Snowden leak).",
    ],
  },
];

// --- MAIN REACT COMPONENT ---
export default function StudyGuideApp() {
  const [activeChapterId, setActiveChapterId] = useState(studyData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const activeChapter = studyData.find((ch) => ch.id === activeChapterId);

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-800">
      {/* SIDEBAR NAVIGATION */}
      <div
        className={`bg-slate-900 text-white transition-all duration-300 flex flex-col shadow-xl ${isSidebarOpen ? "w-72" : "w-16"}`}
      >
        <div className="p-4 flex items-center justify-between border-b border-slate-700 bg-slate-950">
          {isSidebarOpen && (
            <h1 className="font-extrabold text-lg tracking-wide text-blue-400">
              CSCI 493.75 Midterm
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isSidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <ul className="py-4 space-y-1">
            {studyData.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => setActiveChapterId(chapter.id)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 
                    ${
                      activeChapterId === chapter.id
                        ? "bg-blue-600 text-white border-l-4 border-blue-300 shadow-md"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                >
                  {isSidebarOpen ? (
                    <span className="font-medium">{chapter.title}</span>
                  ) : (
                    <span className="font-bold text-xs uppercase text-center block w-full">
                      {chapter.id.substring(0, 3)}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto bg-white relative">
        <div className="max-w-5xl mx-auto p-8 md:p-12 min-h-screen pb-32">
          {/* Chapter Header */}
          <div className="mb-10 border-b-4 border-blue-900 pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              {activeChapter.title}
            </h1>
          </div>

          {/* Sections Loop */}
          <div className="space-y-12">
            {activeChapter.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                {/* Section Heading & Text */}
                <div>
                  <h2 className="text-3xl font-bold text-blue-800 border-b-2 border-slate-100 pb-2 mb-4">
                    {sec.heading}
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {sec.text}
                  </p>
                </div>

                {/* DEFINITIONS (Serif Font) */}
                {sec.definitions && sec.definitions.length > 0 && (
                  <div className="bg-amber-50 p-6 md:p-8 rounded-xl shadow-sm border border-amber-200">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-800 mb-6 flex items-center">
                      <span className="mr-2">📖</span> Key Definitions
                    </h3>
                    <dl className="space-y-6">
                      {sec.definitions.map((def, i) => (
                        <div key={i} className="group">
                          {/* Term: Bold Serif */}
                          <dt className="font-serif font-bold text-xl text-slate-900 mb-1 group-hover:text-blue-800 transition-colors">
                            {def.term}
                          </dt>
                          {/* Definition: Serif */}
                          <dd className="font-serif text-slate-800 text-lg ml-4 border-l-4 border-amber-300 pl-5 py-1 leading-relaxed bg-white/50 rounded-r-md">
                            {def.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {/* EXAMPLES (Monospace & Italic Font) */}
                {sec.examples && sec.examples.length > 0 && (
                  <div className="bg-slate-50 p-5 md:p-6 rounded-lg border-l-4 border-slate-400 shadow-inner">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center">
                      <span className="mr-2">⚡</span> Examples in Practice
                    </h3>
                    <ul className="space-y-3">
                      {sec.examples.map((ex, i) => (
                        <li
                          key={i}
                          className="font-mono text-sm md:text-base text-slate-700 italic flex items-start"
                        >
                          <span className="text-slate-400 mr-3 not-italic">
                            ➔
                          </span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* EXAM TIPS SECTION */}
          {activeChapter.examTips && activeChapter.examTips.length > 0 && (
            <div className="mt-16 bg-red-50 border-2 border-red-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-red-800 mb-4 flex items-center">
                <span className="text-3xl mr-3">💡</span> Midterm Exam Tips
              </h2>
              <ul className="list-disc list-inside space-y-3 text-red-900 text-lg">
                {activeChapter.examTips.map((tip, idx) => (
                  <li key={idx} className="font-medium leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* END OF CHAPTER SUMMARY */}
          {activeChapter.chapterSummary &&
            activeChapter.chapterSummary.length > 0 && (
              <div className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-8 md:p-10 shadow-xl">
                <h2 className="text-3xl font-bold border-b border-blue-700 pb-4 mb-6 flex items-center">
                  <span className="mr-3">📌</span> Chapter Cheat Sheet
                </h2>
                <ul className="space-y-4 text-blue-100 text-lg">
                  {activeChapter.chapterSummary.map((sum, idx) => (
                    <li
                      key={idx}
                      className="flex items-start bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="text-green-400 mr-3 font-bold text-xl">
                        ✓
                      </span>
                      <span className="leading-relaxed">{sum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
