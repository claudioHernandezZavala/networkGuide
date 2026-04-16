import React, { useState } from "react";

// --- COMPREHENSIVE STUDY DATA ---
const studyData = [
  {
    id: "intro",
    title: "Course Intro & Frameworks",
    sections: [
      {
        heading: "Cybersecurity Landscape & Workforce",
        explanation:
          "The cybersecurity field is experiencing massive growth. To organize this exploding industry, government agencies like NIST have created standardized frameworks (like NICE) to define exactly what tasks, skills, and knowledge are required for various security roles.",
        definitions: [
          {
            term: "Information Security Analyst",
            definition:
              "A specific cybersecurity role whose job market growth is projected by the BLS to be 29% from 2024 to 2034, much faster than the average for all occupations.",
          },
          {
            term: "NICE Cybersecurity Workforce Framework",
            definition:
              "National Initiative for Cybersecurity Education framework (NIST SP 800-181r1). It provides an exhaustive list of cybersecurity work roles, tasks, knowledge, skills, and abilities (TKSA).",
          },
          {
            term: "CISSP",
            definition:
              "Certified Information Systems Security Professional. A highly popular and widely recognized certification from (ISC)2.",
          },
        ],
        examples: [
          "Example: A hiring manager uses the NICE framework to write a job description, ensuring they ask for the correct 'Knowledge' and 'Skills' for a network defender.",
        ],
      },
    ],
    examTips: [
      "Remember the exceptionally high growth rate (29%) for Information Security Analysts.",
      "Know the four pillars of the NICE framework: Tasks, Knowledge, Skills, and Abilities (TKSA).",
    ],
    chapterSummary: [
      "Cybersecurity jobs are growing rapidly.",
      "The NICE framework standardizes job roles and requirements.",
      "CISSP is a premier industry certification.",
    ],
    quiz: [
      {
        q: "True or False: The NICE framework categorizes roles by Tasks, Knowledge, Skills, and Abilities.",
        a: "True.",
      },
    ],
  },
  {
    id: "basics",
    title: "Internet Basics & Networking",
    sections: [
      {
        heading: "Communications Paradigms & Protocols",
        explanation:
          "Before we can secure a network, we must understand how it sends data. The internet uses two main paradigms: one where a dedicated physical line is held open (Circuit), and another where data is chopped into pieces and sent over shared lines (Packet).",
        definitions: [
          {
            term: "Circuit Switching",
            definition:
              "A communication mechanism that establishes a point-to-point path between a sender and receiver with guaranteed isolation from paths used by others (e.g., traditional PSTN phone lines).",
          },
          {
            term: "Packet Switching",
            definition:
              "A system where data is broken into blocks (packets) and sent over a shared network via statistical multiplexing. No set-up is required before communication begins.",
          },
          {
            term: "Header",
            definition:
              "Information added to data as it passes down a layered model. It is removed as data passes up. Contains info like source/destination IPs and sequence numbers.",
          },
          {
            term: "Unicast",
            definition:
              "Communication addressed to a single, specific receiver (1-to-1).",
          },
          {
            term: "Multicast",
            definition:
              "Communication addressed to a specific group of receivers (1-to-Many).",
          },
          {
            term: "Broadcast",
            definition:
              "Communication addressed to all devices on a specific network segment (1-to-All).",
          },
          {
            term: "Anycast",
            definition:
              "Routing traffic to the nearest (or optimal) node in a group of potential receivers sharing the same IP address.",
          },
          {
            term: "DHCP",
            definition:
              "Dynamic Host Configuration Protocol. Used by a host to obtain an IP address. The requester broadcasts a DHCP DISCOVER packet including its MAC address.",
          },
          {
            term: "NAT Table",
            definition:
              "Network Address Translation table. Uses port numbers (ephemeral ports) as an index to map internal private IP addresses to an external public IP address.",
          },
          {
            term: "TCP (Transmission Control Protocol)",
            definition:
              "Reliable, connection-oriented transport protocol. Uses sequence numbers and flags to ensure all packets arrive in order.",
          },
          {
            term: "UDP (User Datagram Protocol)",
            definition:
              "Unreliable, connectionless transport protocol. Fast, with low overhead.",
          },
          {
            term: "IP (Internet Protocol)",
            definition:
              "The network layer protocol. It provides unreliable, best-effort delivery.",
          },
          {
            term: "Ephemeral Port",
            definition:
              "A short-lived port assigned dynamically by the OS when a client application initiates a connection.",
          },
        ],
        examples: [
          "Circuit Switching Example: A traditional landline phone call.",
          "Packet Switching Example: Loading a web page or sending an email.",
        ],
      },
    ],
    examTips: [
      "Understand that IP is fundamentally unreliable. TCP adds reliability on top of it.",
      "DHCP uses a BROADCAST to find a server because it doesn't have an IP address yet.",
      "Headers are ADDED as data goes down the stack, and REMOVED as it goes up.",
    ],
    chapterSummary: [
      "Circuit Switching = Dedicated Path. Packet Switching = Shared Path.",
      "Unicast (1:1), Multicast (1:Group), Broadcast (1:All), Anycast (1:Nearest).",
      "TCP = Reliable; UDP = Unreliable/Fast.",
      "NAT maps private IPs to public IPs using ephemeral port numbers.",
    ],
    quiz: [
      {
        q: "Which transport protocol would a streaming application most likely use, TCP or UDP?",
        a: "UDP, because occasional dropped frames are preferred over pausing the stream to wait for delayed packets.",
      },
      {
        q: "Fill in the blank: The network layer (IP) in the Internet is considered __________, meaning it offers 'best-effort' delivery without guarantees.",
        a: "Unreliable.",
      },
      {
        q: "Which header contains flags used to start and end a session?",
        a: "The TCP header.",
      },
    ],
  },
  {
    id: "ch1",
    title: "Chapter 1: Security Overview",
    sections: [
      {
        heading: "The CIA Triad & Core Concepts",
        explanation:
          "The CIA Triad is the absolute foundation of all cybersecurity. Every security measure is designed to protect at least one of these three principles.",
        definitions: [
          {
            term: "Computer Security",
            definition:
              "Measures and controls that ensure confidentiality, integrity, and availability of information processed and stored by a computer (NISTIR 7298).",
          },
          {
            term: "Confidentiality",
            definition:
              "Preserving authorized restrictions on information access and disclosure. Protecting personal privacy and proprietary info.",
          },
          {
            term: "Integrity",
            definition:
              "Guarding against improper information modification or destruction. Ensures non-repudiation and authenticity.",
          },
          {
            term: "Availability",
            definition:
              "Ensuring timely and reliable access to and use of information.",
          },
          {
            term: "Assets",
            definition:
              "Hardware, software, data, and telecommunications that require protection.",
          },
          {
            term: "Vulnerability",
            definition:
              "A flaw or weakness in a system's design, implementation, or operation and management.",
          },
          {
            term: "Threat",
            definition:
              "A potential for violation of security, which exists when there is a circumstance, capability, action, or event that could breach security.",
          },
          {
            term: "Attack Surface",
            definition:
              "The total sum of all the vulnerabilities that can be exploited in a given system.",
          },
          {
            term: "Attack Tree",
            definition:
              "A conceptual branching diagram showing how an asset, or target, might be systematically attacked.",
          },
          {
            term: "CVE",
            definition:
              "Common Vulnerabilities and Exposures. A dictionary/list of publicly known cybersecurity vulnerabilities.",
          },
        ],
        examples: [
          "Example: A misconfigured firewall is a Vulnerability. A hacker represents a Threat. The hacker exploiting the firewall is an Attack.",
        ],
      },
    ],
    examTips: [
      "Memorize the exact definitions of the CIA Triad. You will likely be asked to categorize an attack into one of the three.",
      "Understand the relationship: Threats exploit Vulnerabilities to compromise Assets.",
    ],
    chapterSummary: [
      "CIA Triad: Confidentiality, Integrity, Availability.",
      "Security Strategy: 1) What assets to protect? 2) How are they threatened? 3) How do we counter the threats?",
    ],
    quiz: [
      {
        q: "True or False: If a student illicitly alters their grades in the school's database, it is primarily a breach of Confidentiality.",
        a: "False. It is a breach of Integrity (unauthorized modification).",
      },
      {
        q: "Fill in the blank: The total sum of all the vulnerabilities that can be exploited in a given system is called the _________ _________.",
        a: "Attack Surface.",
      },
    ],
  },
  {
    id: "ch2",
    title: "Chapter 2: Cryptographic Tools",
    sections: [
      {
        heading: "Encryption Algorithms",
        explanation:
          "Encryption transforms readable data into ciphertext to guarantee Confidentiality. Symmetric encryption is fast but requires sharing a secret key. Asymmetric encryption uses a public/private key pair.",
        definitions: [
          {
            term: "Symmetric Encryption",
            definition:
              "Both sender and receiver use the exact same key to encrypt and decrypt data. Fast, but hard to share keys securely.",
          },
          {
            term: "Public-Key (Asymmetric) Encryption",
            definition:
              "Uses a public key (shared) and a private key (secret). Invented by Diffie and Hellman.",
          },
          {
            term: "Block Cipher",
            definition: "Encrypts data in fixed-size blocks (e.g., AES).",
          },
          {
            term: "Stream Cipher",
            definition:
              "Encrypts data continuously, one bit or byte at a time.",
          },
          {
            term: "Hash Function",
            definition:
              "A one-way algorithm mapping arbitrary data to a fixed-size bit string (message digest). Provides Integrity, not Confidentiality.",
          },
          {
            term: "Digital Signature",
            definition:
              "Uses public-key cryptography to authenticate the sender and ensure non-repudiation.",
          },
          {
            term: "Entropy",
            definition:
              "A measure of the randomness or unpredictability of data, crucial for generating strong cryptographic keys.",
          },
        ],
        examples: [
          "Asymmetric Example: Alice encrypts a message with Bob's Public Key. Only Bob's Private Key can decrypt it.",
        ],
      },
    ],
    examTips: [
      "Symmetric = 1 Key, Fast. Asymmetric = 2 Keys, Slow.",
      "Hash functions are ONE-WAY. They cannot be decrypted.",
      "Know Diffie and Hellman as the inventors of public-key cryptography.",
    ],
    chapterSummary: [
      "Symmetric encryption requires a securely shared key.",
      "Public-key relies on the mathematical impossibility of deriving the private key from the public key.",
    ],
    quiz: [
      {
        q: "Does a Hash Function provide Confidentiality or Integrity?",
        a: "Integrity. It proves the data hasn't changed, but it does not hide the original data.",
      },
      {
        q: "Who are credited as the inventors of Public-Key Cryptography?",
        a: "Whitfield Diffie and Martin E. Hellman.",
      },
    ],
  },
  {
    id: "ch3",
    title: "Chapter 3: User Authentication",
    sections: [
      {
        heading: "Identity and Verification",
        explanation:
          "Authentication is the gateway to access control. It verifies you are who you claim to be.",
        definitions: [
          {
            term: "Identification",
            definition:
              "The process of identifying users (e.g., providing a username).",
          },
          {
            term: "Authentication",
            definition:
              "Verifying the identities of users (e.g., providing a password).",
          },
          {
            term: "Multifactor Authentication (MFA)",
            definition:
              "Using two or more different factors to authenticate (Knowledge, Possession, Inherence).",
          },
          {
            term: "Password-based Authentication",
            definition:
              "Authenticating via a memorized secret. Must be hashed, not stored in plaintext.",
          },
          {
            term: "Token-based Authentication",
            definition:
              "Authenticating using a physical device like a smart card or hardware token.",
          },
          {
            term: "Biometric Authentication",
            definition:
              "Authenticating using physical characteristics like fingerprints or iris scans.",
          },
        ],
        examples: [
          "Identification: Swiping a bank card (claims identity). Authentication: Entering the PIN (proves identity).",
        ],
      },
    ],
    examTips: [
      "Be able to distinguish between Identification (the claim) and Authentication (the proof).",
      "Know the three factors: Knowledge (password), Possession (token), Inherence (biometric).",
    ],
    chapterSummary: [
      "NIST explicitly requires MFA for privileged accounts.",
      "Passwords must be hashed and ideally salted to prevent cracking.",
    ],
    quiz: [
      {
        q: "Using an RSA SecurID fob to log in is an example of which authentication factor?",
        a: "Something you have (Possession / Token-based).",
      },
      {
        q: "True or False: According to NIST derived security requirements, Multifactor Authentication is optional for local access to privileged accounts.",
        a: "False. It is required for privileged accounts.",
      },
    ],
  },
  {
    id: "ch6",
    title: "Chapter 6: Malicious Software (Malware)",
    sections: [
      {
        heading: "Malware Types & Terminology",
        explanation:
          "Malware is any software designed to compromise CIA. It has propagation methods (how it spreads) and payloads (what it does).",
        definitions: [
          {
            term: "Virus",
            definition:
              "Malware that infects other files and requires user action (like opening an attachment) to spread.",
          },
          {
            term: "Worm",
            definition:
              "Malware that propagates automatically across networks by exploiting vulnerabilities. No host file needed.",
          },
          {
            term: "Trojan Horse",
            definition:
              "Malware disguised as legitimate software to trick users into installing it.",
          },
          {
            term: "Logic Bomb",
            definition:
              "A destructive payload that lies dormant until a specific condition (date/event) is triggered.",
          },
          {
            term: "Advanced Persistent Threat (APT)",
            definition:
              "Highly sophisticated, stealthy hacking processes, often state-sponsored, directed at specific targets.",
          },
          {
            term: "Blended Attack",
            definition:
              "An attack that uses multiple methods of infection or propagation simultaneously (e.g., combining a virus, worm, and Trojan).",
          },
          {
            term: "Zero-Day Exploit",
            definition:
              "An attack that exploits a previously unknown vulnerability, meaning developers have had 'zero days' to fix it.",
          },
          {
            term: "Rootkit",
            definition:
              "Stealth malware designed to hide its presence and maintain deep, privileged (root) access.",
          },
          {
            term: "Drive-by-Download",
            definition:
              "Infection occurring simply by visiting a compromised website, without clicking anything.",
          },
          {
            term: "Watering Hole Attack",
            definition:
              "Targeting a specific group by infecting a website they are known to visit frequently.",
          },
          {
            term: "Clickjacking",
            definition:
              "Tricking a user into clicking on a transparent, overlaid webpage element.",
          },
          {
            term: "SCADA",
            definition:
              "Supervisory Control and Data Acquisition. Industrial control systems (like power grids) targeted by specialized malware like Stuxnet.",
          },
          {
            term: "Out-of-band Attack",
            definition:
              "An attack delivered through a secondary, often non-network channel (e.g., dropping infected USB drives in a parking lot).",
          },
          {
            term: "Air-gapped",
            definition:
              "A network physically isolated from unsecured networks (like the internet). Often targeted by out-of-band attacks.",
          },
        ],
        examples: [
          "Worm Example: The Morris Worm (1988) spread automatically.",
          "Stuxnet: A highly advanced worm designed to sabotage Iran's air-gapped SCADA nuclear centrifuges via infected USBs.",
        ],
      },
    ],
    examTips: [
      "Crucial distinction: A Virus requires a host/user interaction. A Worm is standalone and self-propagating.",
      "Understand the term 'Air-gapped' and how Stuxnet used Out-of-Band (USB drives) to cross it.",
    ],
    chapterSummary: [
      "Viruses infect files; Worms exploit networks automatically; Trojans trick users.",
      "Blended attacks mix techniques.",
      "Zero-days exploit unknown vulnerabilities.",
    ],
    quiz: [
      {
        q: "Multiple Choice: Which type of malware propagates automatically without requiring a host file or user interaction? A) Virus, B) Trojan, C) Worm, D) Logic Bomb",
        a: "C) Worm.",
      },
      {
        q: "Fill in the blank: An attack that exploits a vulnerability that the software vendor does not yet know about is called a __________ exploit.",
        a: "Zero-day.",
      },
      {
        q: "What is the term for a highly secure network that is physically disconnected from the internet?",
        a: "Air-gapped.",
      },
    ],
  },
  {
    id: "ch7",
    title: "Chapter 7: Denial-of-Service Attacks",
    sections: [
      {
        heading: "Availability Under Attack",
        explanation:
          "DoS attacks target the 'Availability' pillar by exhausting resources (bandwidth, memory, CPU).",
        definitions: [
          {
            term: "Denial-of-Service (DoS)",
            definition:
              "Action that prevents authorized use of networks/systems by exhausting CPU, memory, bandwidth, or disk space.",
          },
          {
            term: "DDoS",
            definition:
              "A massive DoS attack launched from multiple, distributed compromised systems (botnet).",
          },
          {
            term: "Source Address Spoofing",
            definition:
              "Forging the source IP address in a packet to hide the attacker's identity or redirect responses.",
          },
          {
            term: "TCP SYN Flood",
            definition:
              "Sending endless spoofed TCP SYN requests. The server allocates memory for 'half-open' connections until exhaustion.",
          },
          {
            term: "Reflection/Amplification Attack",
            definition:
              "Sending a small request to a third-party server with a spoofed victim IP. The third-party server sends a massive response to the victim.",
          },
          {
            term: "DNS Amplification",
            definition:
              "A specific reflection attack exploiting DNS responses to overwhelm a target.",
          },
        ],
        examples: [
          "DNS Amplification Example: Attacker sends a 60-byte DNS query spoofed as the victim. DNS server replies to the victim with a 3000-byte response.",
        ],
      },
    ],
    examTips: [
      "DoS isn't just about 'clogging the pipe' (bandwidth). It can target system memory (SYN flood) or application CPU.",
      "Understand Amplification: It requires Source Address Spoofing and an exploitable third-party protocol (like DNS).",
    ],
    chapterSummary: [
      "DoS destroys Availability.",
      "DDoS uses botnets.",
      "SYN Floods target memory tables by leaving connections half-open.",
    ],
    quiz: [
      {
        q: "True or False: A TCP SYN flood primarily attacks a network's bandwidth capacity.",
        a: "False. It primarily attacks system memory resources (connection tables).",
      },
      {
        q: "What technique must an attacker use for a Reflection/Amplification attack to work against a victim?",
        a: "Source Address Spoofing (forging the victim's IP as the source).",
      },
    ],
  },
  {
    id: "ch8",
    title: "Chapter 8: Intrusion Detection",
    sections: [
      {
        heading: "Detection Methodologies & Sensors",
        explanation:
          "Intrusion Detection Systems (IDS) catch hackers who slip past firewalls. They look for known bad things (Signatures) or abnormal behavior (Anomalies).",
        definitions: [
          {
            term: "Intrusion Detection System (IDS)",
            definition:
              "Hardware or software monitoring a network/system for malicious activity. Composed of sensors, analyzers, and UI.",
          },
          {
            term: "Base-Rate Fallacy",
            definition:
              "A statistical flaw: because actual attacks are rare, even a 1% false positive rate generates an overwhelming number of false alarms.",
          },
          {
            term: "Signature / Heuristic Detection",
            definition:
              "Comparing observed traffic against a database of known attack patterns. Highly accurate for known threats, fails on zero-days.",
          },
          {
            term: "Anomaly Detection",
            definition:
              "Establishing a baseline of 'normal' behavior and flagging deviations.",
          },
          {
            term: "Host-Based IDS (HIDS)",
            definition:
              "A sensor monitoring the internal characteristics and events of a single computer.",
          },
          {
            term: "Network-Based IDS (NIDS)",
            definition:
              "A sensor monitoring network traffic passing through specific network segments. Includes inline (blocks) and passive (monitors) sensors.",
          },
          {
            term: "Promiscuous Mode",
            definition:
              "A network interface controller mode allowing a sensor (like NIDS) to read all traffic passing on the network, not just traffic addressed to it.",
          },
          {
            term: "Honeypot",
            definition:
              "Decoy systems designed to lure attackers away from critical assets and gather intelligence.",
          },
          {
            term: "SNORT / Tripwire",
            definition:
              "Snort is a famous open-source NIDS. Tripwire is a famous file-integrity checking HIDS.",
          },
        ],
        examples: [
          "Quote: 'You can't defend. You can't prevent. The only thing you can do is detect and respond.' - Bruce Schneier",
        ],
      },
    ],
    examTips: [
      "Signature = Known bad. Anomaly = Deviates from baseline.",
      "Understand the Base-Rate Fallacy: it causes alert fatigue due to massive false positives.",
    ],
    chapterSummary: [
      "IDS is essential because prevention eventually fails.",
      "HIDS protects a host; NIDS protects the network pipe.",
      "Promiscuous mode allows NIDS to see all network traffic.",
    ],
    quiz: [
      {
        q: "Which IDS analysis approach would be most effective at catching a brand-new zero-day exploit: Signature detection or Anomaly detection?",
        a: "Anomaly detection, because there is no known signature for a zero-day.",
      },
      {
        q: "Fill in the blank: The statistical issue where a small percentage of false positives overwhelms analysts because the actual number of attacks is very low is called the __________ __________.",
        a: "Base-Rate Fallacy.",
      },
      {
        q: "What mode must a network card be put into for a NIDS to monitor all traffic on a segment?",
        a: "Promiscuous Mode.",
      },
    ],
  },
  {
    id: "ch9",
    title: "Chapter 9: Firewalls and IPS",
    sections: [
      {
        heading: "Perimeter Defense & 'Defense in Depth'",
        explanation:
          "Firewalls are the primary perimeter defense, enforcing an access policy based on rules. Implementing multiple layers of security is known as 'Defense in Depth'.",
        definitions: [
          {
            term: "Firewall Access Policy",
            definition:
              "The list of rules specifying which traffic is authorized to pass, based on addresses, ports, and protocols.",
          },
          {
            term: "Packet Filtering Firewall",
            definition:
              "Examines each IP packet independently based on header information (IP, port). Fast but easily fooled (e.g., by TCP fragment attacks).",
          },
          {
            term: "Stateful Inspection Firewall",
            definition:
              "Keeps track of the state of active TCP connections. Knows if a packet is part of an established flow.",
          },
          {
            term: "Application-Level Proxy",
            definition:
              "Acts as a relay for application-level traffic (HTTP), deeply inspecting the payload.",
          },
          {
            term: "Bastion Host",
            definition:
              "A highly secure, hardened computer designed to withstand attacks, often hosting the firewall.",
          },
          {
            term: "DMZ (Demilitarized Zone)",
            definition:
              "A subnetwork that contains and exposes an organization's external-facing services to the internet, separated from the internal network.",
          },
          {
            term: "Unified Threat Management (UTM)",
            definition:
              "A single appliance combining firewall, IPS, anti-virus, VPN, and other features.",
          },
          {
            term: "Raw Socket",
            definition:
              "A socket that allows direct access to lower-layer protocols (bypassing the OS TCP/IP stack), often used by attackers to craft custom malicious packets.",
          },
        ],
        examples: [
          "Firewall Design Goals: 1) All traffic must pass through it. 2) Only authorized traffic passes. 3) The firewall itself is immune to penetration.",
        ],
      },
    ],
    examTips: [
      "Know the types of firewalls: Packet Filtering (dumb, fast), Stateful (tracks connections), Application Proxy (deep inspection, slow).",
      "Understand the purpose of a DMZ: to host public-facing servers (like web servers) outside the protected internal LAN.",
    ],
    chapterSummary: [
      "Firewalls enforce access policy at a choke point.",
      "Defense in Depth relies on multiple layers (Firewall -> IPS -> HIDS).",
      "Packet filters are vulnerable to TCP fragmentation attacks.",
    ],
    quiz: [
      {
        q: "Multiple Choice: Which type of firewall keeps track of active connections to ensure incoming packets are part of a legitimate established session? A) Packet Filtering, B) Application Proxy, C) Stateful Inspection",
        a: "C) Stateful Inspection.",
      },
      {
        q: "What is the term for a highly hardened computer specifically designed to withstand attacks, often placed on the network perimeter?",
        a: "Bastion Host.",
      },
    ],
  },
];

// --- MAIN REACT COMPONENT ---
export default function StudyGuideApp() {
  const [activeChapterId, setActiveChapterId] = useState(studyData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [revealedAnswers, setRevealedAnswers] = useState({});

  const activeChapter = studyData.find((ch) => ch.id === activeChapterId);

  const toggleAnswer = (chapterId, qIndex) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [`${chapterId}-${qIndex}`]: !prev[`${chapterId}-${qIndex}`],
    }));
  };

  return (
    <div className="flex h-screen bg-[#faf8f5] font-sans text-stone-800">
      {/* SIDEBAR NAVIGATION - Espresso Theme */}
      <div
        className={`bg-[#3e2723] text-stone-200 transition-all duration-300 flex flex-col shadow-2xl z-10 ${isSidebarOpen ? "w-72" : "w-16"}`}
      >
        <div className="p-4 flex items-center justify-between border-b border-[#5d4037] bg-[#271816]">
          {isSidebarOpen && (
            <h1 className="font-extrabold text-lg tracking-wide text-[#d7ccc8]">
              ☕ Midterm Prep
            </h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 bg-[#4e342e] rounded hover:bg-[#5d4037] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
            title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {isSidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <ul className="py-4 space-y-1">
            {studyData.map((chapter) => (
              <li key={chapter.id}>
                <button
                  onClick={() => {
                    setActiveChapterId(chapter.id);
                    // Reset quiz answers when switching chapters
                    setRevealedAnswers({});
                  }}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 
                    ${
                      activeChapterId === chapter.id
                        ? "bg-[#5d4037] text-white border-l-4 border-[#d7ccc8] shadow-md"
                        : "text-stone-400 hover:bg-[#4e342e] hover:text-stone-200"
                    }`}
                >
                  {isSidebarOpen ? (
                    <span className="font-medium text-[15px]">
                      {chapter.title}
                    </span>
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
      <div className="flex-1 overflow-y-auto relative bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto p-8 md:p-12 min-h-screen pb-32">
          {/* Chapter Header */}
          <div className="mb-10 border-b-4 border-[#5d4037] pb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2723] tracking-tight">
              {activeChapter.title}
            </h1>
          </div>

          {/* Sections Loop */}
          <div className="space-y-16">
            {activeChapter.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#4e342e] border-b-2 border-[#d7ccc8] pb-2 mb-4">
                  {sec.heading}
                </h2>

                {/* MEDIUM EXPLANATION (Cappuccino Box) */}
                {sec.explanation && (
                  <div className="bg-[#f5f0e6] border-l-4 border-[#8d6e63] p-5 rounded-r-lg shadow-sm">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#8d6e63] mb-2 flex items-center">
                      <span className="mr-2">📝</span> Concept Overview
                    </h3>
                    <p className="text-[#5d4037] text-lg leading-relaxed font-medium">
                      {sec.explanation}
                    </p>
                  </div>
                )}

                {/* DEFINITIONS (Warm Latte / Serif Font) */}
                {sec.definitions && sec.definitions.length > 0 && (
                  <div className="bg-[#fff8e7] p-6 md:p-8 rounded-xl shadow-sm border border-[#eaddc5] mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#8d6e63] mb-6 flex items-center">
                      <span className="mr-2">📖</span> Key Definitions
                    </h3>
                    <dl className="space-y-6">
                      {sec.definitions.map((def, i) => (
                        <div key={i} className="group">
                          {/* Term: Bold Serif */}
                          <dt className="font-serif font-bold text-2xl text-[#3e2723] mb-1">
                            {def.term}
                          </dt>
                          {/* Definition: Serif */}
                          <dd className="font-serif text-[#5d4037] text-lg ml-4 border-l-4 border-[#d7ccc8] pl-5 py-1 leading-relaxed bg-[#ffffff80] rounded-r-md">
                            {def.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {/* EXAMPLES (Frosted Foam / Monospace & Italic Font) */}
                {sec.examples && sec.examples.length > 0 && (
                  <div className="bg-[#efebe5] p-5 md:p-6 rounded-lg border-l-4 border-[#bcaaa4] shadow-inner mt-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#8d6e63] mb-4 flex items-center">
                      <span className="mr-2">⚡</span> Examples in Practice
                    </h3>
                    <ul className="space-y-3">
                      {sec.examples.map((ex, i) => (
                        <li
                          key={i}
                          className="font-mono text-[15px] md:text-base text-[#4e342e] italic flex items-start"
                        >
                          <span className="text-[#a1887f] mr-3 not-italic">
                            ➔
                          </span>
                          <span className="leading-relaxed">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* EXAM TIPS SECTION (Cinnamon Highlight) */}
          {activeChapter.examTips && activeChapter.examTips.length > 0 && (
            <div className="mt-16 bg-[#fbe9e7] border-2 border-[#ffccbc] rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#bf360c] mb-4 flex items-center">
                <span className="text-3xl mr-3">💡</span> Midterm Exam Tips
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[#d84315] text-lg">
                {activeChapter.examTips.map((tip, idx) => (
                  <li key={idx} className="font-medium leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* END OF CHAPTER SUMMARY (Rich Coffee Gradient) */}
          {activeChapter.chapterSummary &&
            activeChapter.chapterSummary.length > 0 && (
              <div className="mt-16 bg-gradient-to-br from-[#4e342e] to-[#3e2723] text-[#efebe5] rounded-2xl p-8 md:p-10 shadow-xl">
                <h2 className="text-3xl font-bold border-b border-[#795548] pb-4 mb-6 flex items-center">
                  <span className="mr-3 text-[#d7ccc8]">📌</span> Chapter Cheat
                  Sheet
                </h2>
                <ul className="space-y-4 text-[#d7ccc8] text-lg">
                  {activeChapter.chapterSummary.map((sum, idx) => (
                    <li
                      key={idx}
                      className="flex items-start bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="text-[#a1887f] mr-3 font-bold text-xl">
                        ✓
                      </span>
                      <span className="leading-relaxed">{sum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* INTERACTIVE QUIZ SECTION */}
          {activeChapter.quiz && activeChapter.quiz.length > 0 && (
            <div className="mt-16 border-4 border-[#8d6e63] rounded-2xl p-8 shadow-md bg-white">
              <h2 className="text-2xl font-extrabold text-[#4e342e] mb-6 flex items-center">
                <span className="text-3xl mr-3">❓</span> Test Your Knowledge
              </h2>
              <p className="text-[#8d6e63] mb-6 italic">
                Click "Reveal Answer" to check your understanding.
              </p>

              <div className="space-y-6">
                {activeChapter.quiz.map((item, idx) => {
                  const isRevealed =
                    revealedAnswers[`${activeChapter.id}-${idx}`];
                  return (
                    <div
                      key={idx}
                      className="bg-[#f5f0e6] p-5 rounded-lg border border-[#d7ccc8]"
                    >
                      <p className="font-bold text-[#3e2723] text-lg mb-4">
                        Q: {item.q}
                      </p>

                      {isRevealed ? (
                        <div className="bg-[#fff8e7] p-4 rounded border-l-4 border-[#4caf50] mt-3 animate-fade-in">
                          <p className="font-bold text-[#2e7d32]">
                            A: {item.a}
                          </p>
                        </div>
                      ) : (
                        <button
                          onClick={() => toggleAnswer(activeChapter.id, idx)}
                          className="bg-[#5d4037] text-white px-4 py-2 rounded shadow hover:bg-[#4e342e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8d6e63] font-medium"
                        >
                          Reveal Answer
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
