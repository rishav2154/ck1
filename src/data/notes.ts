export interface Note {
  id: string;
  title: string;
  description: string;
  category: 'networking' | 'design' | 'formatting' | 'general';
  downloadUrl: string;
  fileSize: string;
  lastUpdated: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    id: '1',
    title: 'Network Fundamentals Complete Guide',
    description: 'Comprehensive notes covering OSI model, TCP/IP stack, and essential networking protocols.',
    category: 'networking',
    downloadUrl: '/notes/network-fundamentals.pdf',
    fileSize: '2.4 MB',
    lastUpdated: '2024-01-15',
    tags: ['networking', 'fundamentals', 'protocols', 'osi-model']
  },
  {
    id: '2',
    title: 'Advanced Network Security Handbook',
    description: 'In-depth coverage of firewalls, IDS/IPS systems, and advanced security protocols.',
    category: 'networking',
    downloadUrl: '/notes/advanced-network-security.pdf',
    fileSize: '3.1 MB',
    lastUpdated: '2024-01-20',
    tags: ['security', 'firewall', 'intrusion-detection', 'advanced']
  },
  {
    id: '3',
    title: 'Network Troubleshooting Toolkit',
    description: 'Essential diagnostic tools and step-by-step troubleshooting methodologies.',
    category: 'networking',
    downloadUrl: '/notes/network-troubleshooting.pdf',
    fileSize: '1.8 MB',
    lastUpdated: '2024-01-18',
    tags: ['troubleshooting', 'diagnostics', 'tools', 'methodology']
  },
  {
    id: '4',
    title: 'UI/UX Design Principles Reference',
    description: 'Complete guide to design principles, user psychology, and interface best practices.',
    category: 'design',
    downloadUrl: '/notes/ui-ux-design-principles.pdf',
    fileSize: '2.7 MB',
    lastUpdated: '2024-01-22',
    tags: ['ui', 'ux', 'design-principles', 'user-experience']
  },
  {
    id: '5',
    title: 'Security Dashboard Design Guide',
    description: 'Best practices for creating effective security dashboards and data visualizations.',
    category: 'design',
    downloadUrl: '/notes/security-dashboard-design.pdf',
    fileSize: '2.2 MB',
    lastUpdated: '2024-01-25',
    tags: ['dashboard', 'visualization', 'security', 'design']
  },
  {
    id: '6',
    title: 'Responsive Web Design Cheat Sheet',
    description: 'Quick reference for responsive design techniques, breakpoints, and mobile-first approach.',
    category: 'design',
    downloadUrl: '/notes/responsive-web-design.pdf',
    fileSize: '1.5 MB',
    lastUpdated: '2024-01-19',
    tags: ['responsive', 'mobile', 'web-design', 'css']
  },
  {
    id: '7',
    title: 'Professional Report Writing Template',
    description: 'Templates and guidelines for writing professional cybersecurity reports and documentation.',
    category: 'formatting',
    downloadUrl: '/notes/professional-report-writing.pdf',
    fileSize: '1.9 MB',
    lastUpdated: '2024-01-16',
    tags: ['writing', 'reports', 'documentation', 'templates']
  },
  {
    id: '8',
    title: 'Technical Documentation Standards',
    description: 'Industry standards and best practices for technical documentation and formatting.',
    category: 'formatting',
    downloadUrl: '/notes/technical-documentation-standards.pdf',
    fileSize: '2.0 MB',
    lastUpdated: '2024-01-21',
    tags: ['documentation', 'standards', 'formatting', 'technical-writing']
  },
  {
    id: '9',
    title: 'Markdown & Wiki Quick Reference',
    description: 'Complete syntax guide for Markdown and wiki formatting with practical examples.',
    category: 'formatting',
    downloadUrl: '/notes/markdown-wiki-formatting.pdf',
    fileSize: '1.2 MB',
    lastUpdated: '2024-01-17',
    tags: ['markdown', 'wiki', 'syntax', 'formatting']
  },
  {
    id: '10',
    title: 'Cyber Knight Club Handbook',
    description: 'Official handbook covering club policies, procedures, and member guidelines.',
    category: 'general',
    downloadUrl: '/notes/cyber-knight-handbook.pdf',
    fileSize: '3.5 MB',
    lastUpdated: '2024-01-10',
    tags: ['handbook', 'policies', 'guidelines', 'club']
  }
];