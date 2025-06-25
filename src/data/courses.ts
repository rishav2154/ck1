export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'networking' | 'design' | 'formatting' | 'cybersecurity' | 'kali-linux';
  thumbnail: string;
  videoUrl: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  notesUrl: string;
  playlist?: PlaylistItem[];
  credits?: {
    channel: string;
    channelUrl: string;
    originalTitle?: string;
  };
}

export interface PlaylistItem {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
  completed?: boolean;
}

export const courses: Course[] = [
  // Networking Tutorials
  {
    id: '1',
    title: 'Network Fundamentals',
    description: 'Learn the basics of networking including OSI model, TCP/IP, and network protocols essential for cybersecurity professionals.',
    duration: '4:30:00',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/bj-Yfakjllc',
    instructor: 'NetworkChuck',
    level: 'Beginner',
    tags: ['networking', 'fundamentals', 'protocols'],
    notesUrl: '/notes/network-fundamentals.pdf',
    credits: {
      channel: 'NetworkChuck',
      channelUrl: 'https://www.youtube.com/@NetworkChuck',
      originalTitle: 'you need to learn Networking RIGHT NOW!! // FREE CCNA // EP 1'
    },
    playlist: [
      {
        id: '1-1',
        title: 'Introduction to Computer Networks',
        duration: '18:30',
        videoUrl: 'https://www.youtube.com/embed/bj-Yfakjllc',
        description: 'Basic introduction to computer networks and their importance'
      },
      {
        id: '1-2',
        title: 'Network Types and Topologies',
        duration: '22:15',
        videoUrl: 'https://www.youtube.com/embed/H7-NR3Q3BeI',
        description: 'Understanding different network types and topologies'
      },
      {
        id: '1-3',
        title: 'OSI Model - Part 1',
        duration: '19:45',
        videoUrl: 'https://www.youtube.com/embed/LkolbURrtTs',
        description: 'Introduction to the OSI 7-layer model'
      },
      {
        id: '1-4',
        title: 'OSI Model - Part 2',
        duration: '21:30',
        videoUrl: 'https://www.youtube.com/embed/0aGqGKrRE0g',
        description: 'Deep dive into OSI layers and their functions'
      },
      {
        id: '1-5',
        title: 'TCP/IP Protocol Suite',
        duration: '25:20',
        videoUrl: 'https://www.youtube.com/embed/gYN2qN11-wE',
        description: 'Understanding TCP/IP protocols and their implementation'
      },
      {
        id: '1-6',
        title: 'IP Addressing Fundamentals',
        duration: '20:45',
        videoUrl: 'https://www.youtube.com/embed/JI9Zm2tbUoE',
        description: 'IPv4 addressing, subnetting, and CIDR notation'
      },
      {
        id: '1-7',
        title: 'Subnetting and VLSM',
        duration: '28:15',
        videoUrl: 'https://www.youtube.com/embed/AhOU2eOpmX0',
        description: 'Advanced subnetting techniques and Variable Length Subnet Masking'
      },
      {
        id: '1-8',
        title: 'Routing Protocols',
        duration: '24:30',
        videoUrl: 'https://www.youtube.com/embed/G7GyWjJtjNs',
        description: 'Static and dynamic routing protocols explained'
      },
      {
        id: '1-9',
        title: 'Switching Concepts',
        duration: '22:45',
        videoUrl: 'https://www.youtube.com/embed/AzXys5kxpAM',
        description: 'Layer 2 switching, VLANs, and spanning tree protocol'
      },
      {
        id: '1-10',
        title: 'Network Security Basics',
        duration: '26:30',
        videoUrl: 'https://www.youtube.com/embed/Ep-x_6kggKA',
        description: 'Introduction to network security concepts and threats'
      },
      {
        id: '1-11',
        title: 'Wireless Networking',
        duration: '23:15',
        videoUrl: 'https://www.youtube.com/embed/zmxLg4jV0ts',
        description: 'WiFi standards, security, and wireless network design'
      },
      {
        id: '1-12',
        title: 'Network Troubleshooting',
        duration: '27:45',
        videoUrl: 'https://www.youtube.com/embed/E5bSumTAHZE',
        description: 'Tools and techniques for network troubleshooting'
      },
      {
        id: '1-13',
        title: 'Network Performance Optimization',
        duration: '25:30',
        videoUrl: 'https://www.youtube.com/embed/YJGGYKAV4pA',
        description: 'Optimizing network performance and bandwidth management'
      },
      {
        id: '1-14',
        title: 'Network Monitoring and Management',
        duration: '24:15',
        videoUrl: 'https://www.youtube.com/embed/ArXMa111x7A',
        description: 'Network monitoring tools and management best practices'
      },
      {
        id: '1-15',
        title: 'Future of Networking',
        duration: '20:30',
        videoUrl: 'https://www.youtube.com/embed/2iFFRqzX3yE',
        description: 'Emerging technologies and future networking trends'
      }
    ]
  },
  {
    id: '2',
    title: 'Computer Networks Deep Dive',
    description: 'Comprehensive understanding of computer networks, their architecture, and implementation.',
    duration: '45:30',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/n0iaPtsnmxQ',
    instructor: 'Gate Smashers',
    level: 'Intermediate',
    tags: ['computer networks', 'architecture', 'implementation'],
    notesUrl: '/notes/computer-networks.pdf',
    credits: {
      channel: 'Gate Smashers',
      channelUrl: 'https://www.youtube.com/@GateSmashers',
      originalTitle: 'Computer Networks Complete Course'
    }
  },
  {
    id: '3',
    title: 'Network Topologies',
    description: 'Understanding different network topologies, their advantages, disadvantages, and use cases.',
    duration: '35:20',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/gGTDFG2Q_UM',
    instructor: 'PowerCert Animated Videos',
    level: 'Beginner',
    tags: ['topologies', 'network design', 'infrastructure'],
    notesUrl: '/notes/network-topologies.pdf',
    credits: {
      channel: 'PowerCert Animated Videos',
      channelUrl: 'https://www.youtube.com/@PowerCertAnimatedVideos',
      originalTitle: 'Network Topologies (Star, Bus, Ring, Mesh, Ad hoc, Infrastructure, & Wireless Mesh Topology)'
    }
  },
  {
    id: '4',
    title: 'OSI and TCP/IP Models',
    description: 'Deep dive into OSI and TCP/IP models, understanding layers and protocols.',
    duration: '1:20:00',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/1msEo8PIcbw',
    instructor: 'Practical Networking',
    level: 'Intermediate',
    tags: ['osi model', 'tcp/ip', 'protocols', 'layers'],
    notesUrl: '/notes/osi-tcpip-models.pdf',
    credits: {
      channel: 'Practical Networking',
      channelUrl: 'https://www.youtube.com/@PracticalNetworking',
      originalTitle: 'OSI Model Explained | OSI Animation | Open System Interconnection Model | OSI 7 layers'
    },
    playlist: [
      {
        id: '4-1',
        title: 'OSI Model Explained',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/1msEo8PIcbw',
        description: 'Complete explanation of the OSI 7-layer model'
      },
      {
        id: '4-2',
        title: 'TCP/IP Model Deep Dive',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/GfaHdjApnhU',
        description: 'Understanding TCP/IP model and its practical applications'
      }
    ]
  },
  {
    id: '5',
    title: 'Network Protocols',
    description: 'Understanding essential network protocols and their functions in modern networks.',
    duration: '50:15',
    category: 'networking',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/aUYwx9bYlGY',
    instructor: 'NetworkChuck',
    level: 'Intermediate',
    tags: ['protocols', 'http', 'dns', 'dhcp'],
    notesUrl: '/notes/network-protocols.pdf',
    credits: {
      channel: 'NetworkChuck',
      channelUrl: 'https://www.youtube.com/@NetworkChuck',
      originalTitle: 'Network Protocols - ARP, FTP, SMTP, HTTP, SSL, TLS, HTTPS, DNS, DHCP - Networking Fundamentals - L6'
    }
  },

  // Cybersecurity Fundamentals
  {
    id: '6',
    title: 'What is Cybersecurity?',
    description: 'Introduction to cybersecurity concepts, importance, and career opportunities.',
    duration: '1:45:00',
    category: 'cybersecurity',
    thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA',
    instructor: 'Simplilearn',
    level: 'Beginner',
    tags: ['cybersecurity', 'introduction', 'career'],
    notesUrl: '/notes/cybersecurity-intro.pdf',
    credits: {
      channel: 'Simplilearn',
      channelUrl: 'https://www.youtube.com/@SimplilearnOfficial',
      originalTitle: 'Cybersecurity In 7 Minutes | What Is Cybersecurity: How It Works? | Cybersecurity Explained'
    },
    playlist: [
      {
        id: '6-1',
        title: 'Introduction to Cybersecurity',
        duration: '35:00',
        videoUrl: 'https://www.youtube.com/embed/inWWhr5tnEA',
        description: 'What is cybersecurity and why it matters'
      },
      {
        id: '6-2',
        title: 'Cybersecurity Career Paths',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/FzXWQqM5u-k',
        description: 'Different career opportunities in cybersecurity'
      },
      {
        id: '6-3',
        title: 'Cybersecurity Fundamentals',
        duration: '30:00',
        videoUrl: 'https://www.youtube.com/embed/nqylWDALBAs',
        description: 'Core concepts and principles of cybersecurity'
      }
    ]
  },
  {
    id: '7',
    title: 'Security Principles',
    description: 'Learn about CIA Triad, authentication, authorization, and core security principles.',
    duration: '1:10:00',
    category: 'cybersecurity',
    thumbnail: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/jZlWbLY0fQc',
    instructor: 'Professor Messer',
    level: 'Beginner',
    tags: ['cia triad', 'authentication', 'authorization', 'security principles'],
    notesUrl: '/notes/security-principles.pdf',
    credits: {
      channel: 'Professor Messer',
      channelUrl: 'https://www.youtube.com/@professormesser',
      originalTitle: 'Security+ SY0-601 Training Course'
    },
    playlist: [
      {
        id: '7-1',
        title: 'CIA Triad Explained',
        duration: '35:00',
        videoUrl: 'https://www.youtube.com/embed/jZlWbLY0fQc',
        description: 'Confidentiality, Integrity, and Availability principles'
      },
      {
        id: '7-2',
        title: 'Authentication vs Authorization',
        duration: '35:00',
        videoUrl: 'https://www.youtube.com/embed/B76BhEq1FN8',
        description: 'Understanding the difference and implementation'
      }
    ]
  },
  {
    id: '8',
    title: 'Threats and Attacks',
    description: 'Understanding different types of cyber threats, attacks, and attack vectors.',
    duration: '1:20:00',
    category: 'cybersecurity',
    thumbnail: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/Dk-ZqQ-bfy4',
    instructor: 'Cybrary',
    level: 'Intermediate',
    tags: ['threats', 'attacks', 'malware', 'phishing'],
    notesUrl: '/notes/threats-attacks.pdf',
    credits: {
      channel: 'Cybrary',
      channelUrl: 'https://www.youtube.com/@CybraryIT',
      originalTitle: 'Common Cyber Threats and Attack Vectors'
    },
    playlist: [
      {
        id: '8-1',
        title: 'Common Cyber Threats',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/Dk-ZqQ-bfy4',
        description: 'Overview of common cybersecurity threats'
      },
      {
        id: '8-2',
        title: 'Attack Vectors and Methods',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/y6E_CxkLLw8',
        description: 'Different ways attackers compromise systems'
      }
    ]
  },
  {
    id: '9',
    title: 'Firewalls and Network Security',
    description: 'Understanding firewalls, their types, configuration, and role in network security.',
    duration: '45:30',
    category: 'cybersecurity',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/hfyLjRZmEFc',
    instructor: 'PowerCert Animated Videos',
    level: 'Intermediate',
    tags: ['firewalls', 'network security', 'configuration'],
    notesUrl: '/notes/firewalls.pdf',
    credits: {
      channel: 'PowerCert Animated Videos',
      channelUrl: 'https://www.youtube.com/@PowerCertAnimatedVideos',
      originalTitle: 'Firewalls Explained | Cybersecurity'
    }
  },

  // Kali Linux (Advanced)
  {
    id: '10',
    title: 'Kali Linux Installation',
    description: 'Complete guide to installing Kali Linux for penetration testing and ethical hacking.',
    duration: '1:30:00',
    category: 'kali-linux',
    thumbnail: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/ZJFu0AoAY_g',
    instructor: 'NetworkChuck',
    level: 'Advanced',
    tags: ['kali linux', 'installation', 'setup'],
    notesUrl: '/notes/kali-installation.pdf',
    credits: {
      channel: 'NetworkChuck',
      channelUrl: 'https://www.youtube.com/@NetworkChuck',
      originalTitle: 'you need to learn Kali Linux RIGHT NOW!! // EP 1'
    },
    playlist: [
      {
        id: '10-1',
        title: 'Kali Linux Installation Guide',
        duration: '45:00',
        videoUrl: 'https://www.youtube.com/embed/ZJFu0AoAY_g',
        description: 'Step-by-step installation of Kali Linux'
      },
      {
        id: '10-2',
        title: 'Kali Linux Setup and Configuration',
        duration: '45:00',
        videoUrl: 'https://www.youtube.com/embed/wMmPtsASlGM',
        description: 'Post-installation setup and configuration'
      }
    ]
  },
  {
    id: '11',
    title: 'Complete Kali Linux Course',
    description: 'Comprehensive Kali Linux course covering all tools and techniques for ethical hacking.',
    duration: '12:00:00',
    category: 'kali-linux',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/M2D3rqd0x0Y',
    instructor: 'HackerSploit',
    level: 'Advanced',
    tags: ['kali linux', 'ethical hacking', 'penetration testing', 'tools'],
    notesUrl: '/notes/kali-complete-course.pdf',
    credits: {
      channel: 'HackerSploit',
      channelUrl: 'https://www.youtube.com/@HackerSploit',
      originalTitle: 'Complete Ethical Hacking Course - Network Penetration Testing for Beginners (2023)'
    },
    playlist: [
      {
        id: '11-1',
        title: 'Kali Linux Introduction and Overview',
        duration: '35:00',
        videoUrl: 'https://www.youtube.com/embed/M2D3rqd0x0Y',
        description: 'Introduction to Kali Linux and its capabilities'
      },
      {
        id: '11-2',
        title: 'Information Gathering Tools',
        duration: '42:00',
        videoUrl: 'https://www.youtube.com/embed/7vFU_hw4SPk',
        description: 'Using Kali tools for reconnaissance and information gathering'
      },
      {
        id: '11-3',
        title: 'Vulnerability Assessment',
        duration: '38:00',
        videoUrl: 'https://www.youtube.com/embed/1WEpuNesVV8',
        description: 'Identifying and assessing system vulnerabilities'
      },
      {
        id: '11-4',
        title: 'Web Application Testing',
        duration: '45:00',
        videoUrl: 'https://www.youtube.com/embed/kQcKUZjuRUM',
        description: 'Testing web applications for security flaws'
      },
      {
        id: '11-5',
        title: 'Database Assessment Tools',
        duration: '33:00',
        videoUrl: 'https://www.youtube.com/embed/0QN9mn9s3L0',
        description: 'Database security testing and assessment'
      },
      {
        id: '11-6',
        title: 'Password Attacks',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/JmvMleas6CU',
        description: 'Password cracking techniques and tools'
      },
      {
        id: '11-7',
        title: 'Wireless Attacks',
        duration: '37:00',
        videoUrl: 'https://www.youtube.com/embed/j50iGE7QZus',
        description: 'Wireless network security testing'
      },
      {
        id: '11-8',
        title: 'Reverse Engineering',
        duration: '41:00',
        videoUrl: 'https://www.youtube.com/embed/MK6BE4bEWk0',
        description: 'Reverse engineering tools and techniques'
      },
      {
        id: '11-9',
        title: 'Exploitation Tools',
        duration: '44:00',
        videoUrl: 'https://www.youtube.com/embed/QUh0YIZgFrM',
        description: 'Using exploitation frameworks and tools'
      },
      {
        id: '11-10',
        title: 'Sniffing and Spoofing',
        duration: '36:00',
        videoUrl: 'https://www.youtube.com/embed/Yl9xaZcrN4M',
        description: 'Network sniffing and spoofing techniques'
      },
      {
        id: '11-11',
        title: 'Post Exploitation',
        duration: '39:00',
        videoUrl: 'https://www.youtube.com/embed/yHjFAV_c9oo',
        description: 'Post-exploitation techniques and maintaining access'
      },
      {
        id: '11-12',
        title: 'Digital Forensics',
        duration: '43:00',
        videoUrl: 'https://www.youtube.com/embed/-8fai8fF5WU',
        description: 'Digital forensics tools and investigation techniques'
      },
      {
        id: '11-13',
        title: 'Reporting Tools',
        duration: '32:00',
        videoUrl: 'https://www.youtube.com/embed/J9cIB3BqM1Y',
        description: 'Creating professional penetration testing reports'
      },
      {
        id: '11-14',
        title: 'Social Engineering Toolkit',
        duration: '38:00',
        videoUrl: 'https://www.youtube.com/embed/2PczEgUBW9U',
        description: 'Social engineering attacks and awareness'
      },
      {
        id: '11-15',
        title: 'System Services and Tools',
        duration: '35:00',
        videoUrl: 'https://www.youtube.com/embed/rhEVEtOJRz4',
        description: 'Managing Kali Linux system services and tools'
      },
      {
        id: '11-16',
        title: 'Hardware Hacking',
        duration: '40:00',
        videoUrl: 'https://www.youtube.com/embed/ZZtkm7dEpRc',
        description: 'Hardware hacking tools and techniques'
      },
      {
        id: '11-17',
        title: 'Stress Testing',
        duration: '34:00',
        videoUrl: 'https://www.youtube.com/embed/HA-VhTLRIxw',
        description: 'Stress testing and DoS attack simulation'
      },
      {
        id: '11-18',
        title: 'Maintaining Access',
        duration: '37:00',
        videoUrl: 'https://www.youtube.com/embed/i3lWF_4Lrtc',
        description: 'Techniques for maintaining persistent access'
      },
      {
        id: '11-19',
        title: 'Advanced Exploitation',
        duration: '42:00',
        videoUrl: 'https://www.youtube.com/embed/HQbx-geTJg8',
        description: 'Advanced exploitation techniques and methodologies'
      },
      {
        id: '11-20',
        title: 'Kali Linux Best Practices',
        duration: '30:00',
        videoUrl: 'https://www.youtube.com/embed/4rSZ68MlxMk',
        description: 'Best practices and ethical considerations'
      }
    ]
  },

  // Design Skills
  {
    id: '12',
    title: 'UI/UX Design Principles',
    description: 'Learn fundamental design principles, user experience concepts, and create intuitive interfaces for security applications.',
    duration: '55:20',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    instructor: 'AJ&Smart',
    level: 'Beginner',
    tags: ['ui', 'ux', 'design principles'],
    notesUrl: '/notes/ui-ux-design-principles.pdf',
    credits: {
      channel: 'AJ&Smart',
      channelUrl: 'https://www.youtube.com/@AJSmart',
      originalTitle: 'UI/UX Design Tutorial – Wireframe, Mockup & Design in Figma'
    }
  },
  {
    id: '13',
    title: 'Security Dashboard Design',
    description: 'Design effective security dashboards and data visualization for threat monitoring and incident response.',
    duration: '42:30',
    category: 'design',
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/6t_dYhXyYjI',
    instructor: 'Flux',
    level: 'Intermediate',
    tags: ['dashboard', 'visualization', 'security'],
    notesUrl: '/notes/security-dashboard-design.pdf',
    credits: {
      channel: 'Flux',
      channelUrl: 'https://www.youtube.com/@FluxUI',
      originalTitle: 'How to Design a Dashboard - UI/UX Design Tutorial'
    }
  },

  // Document Formatting
  {
    id: '14',
    title: 'Professional Report Writing',
    description: 'Master the art of writing clear, concise security reports and incident documentation for stakeholders.',
    duration: '35:45',
    category: 'formatting',
    thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/mAM1oZZjdLs',
    instructor: 'Cybrary',
    level: 'Beginner',
    tags: ['writing', 'reports', 'documentation'],
    notesUrl: '/notes/professional-report-writing.pdf',
    credits: {
      channel: 'Cybrary',
      channelUrl: 'https://www.youtube.com/@CybraryIT',
      originalTitle: 'How to Write Professional Cybersecurity Reports'
    }
  },
  {
    id: '15',
    title: 'Technical Documentation Standards',
    description: 'Learn industry standards for technical documentation, formatting guidelines, and best practices.',
    duration: '41:20',
    category: 'formatting',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    videoUrl: 'https://www.youtube.com/embed/R6zeikbTgVc',
    instructor: 'Technical Writer HQ',
    level: 'Intermediate',
    tags: ['documentation', 'standards', 'formatting'],
    notesUrl: '/notes/technical-documentation-standards.pdf',
    credits: {
      channel: 'Technical Writer HQ',
      channelUrl: 'https://www.youtube.com/@TechnicalWriterHQ',
      originalTitle: 'Technical Writing 101: Introduction to Technical Writing'
    }
  }
];

export const categories = {
  networking: 'Networking Tutorials',
  cybersecurity: 'Cybersecurity Fundamentals',
  'kali-linux': 'Kali Linux (Advanced)',
  design: 'Designing Skills',
  formatting: 'Document Formatting'
};