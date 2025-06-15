export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  startingPrice: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  overview: string;
  detailedDescription: string;
  keyFeatures: ServiceFeature[];
  pricingTiers: PricingTier[];
  process: ProcessStep[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonial?: {
    name: string;
    company: string;
    role: string;
    content: string;
    avatar: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: '1',
    slug: 'smart-contract-auditing',
    title: 'Smart Contract Auditing',
    tagline: 'Comprehensive security analysis for bulletproof smart contracts',
    startingPrice: '$2,500',
    category: 'Security',
    thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Professional smart contract security audits using industry-leading tools and manual review processes. Protect your protocol and users from vulnerabilities before deployment.',
    detailedDescription: 'Our comprehensive smart contract auditing service combines automated vulnerability detection with expert manual code review. We analyze your contracts for security flaws, gas optimization opportunities, and adherence to best practices. Each audit includes a detailed report with remediation guidance and post-fix verification.',
    keyFeatures: [
      {
        icon: '🔍',
        title: 'Vulnerability Detection',
        description: 'Identify critical security flaws using advanced static analysis tools and manual review'
      },
      {
        icon: '⚡',
        title: 'Gas Optimization',
        description: 'Reduce transaction costs with optimized code patterns and efficient algorithms'
      },
      {
        icon: '📊',
        title: 'Detailed Reports',
        description: 'Comprehensive documentation of findings with severity ratings and fix recommendations'
      },
      {
        icon: '🛡️',
        title: 'Best Practices',
        description: 'Ensure compliance with industry standards and security best practices'
      },
      {
        icon: '🔄',
        title: 'Re-audit Included',
        description: 'Free verification audit after fixes are implemented'
      },
      {
        icon: '📞',
        title: 'Expert Consultation',
        description: 'Direct access to security experts for questions and clarifications'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic Audit',
        price: '$2,500',
        features: [
          'Up to 500 lines of code',
          'Automated vulnerability scan',
          'Manual code review',
          'Basic security report',
          '1 round of fixes verification'
        ]
      },
      {
        name: 'Standard Audit',
        price: '$5,000',
        popular: true,
        features: [
          'Up to 1,500 lines of code',
          'Comprehensive vulnerability analysis',
          'Gas optimization review',
          'Detailed security report',
          '2 rounds of fixes verification',
          'Video walkthrough of findings'
        ]
      },
      {
        name: 'Enterprise Audit',
        price: '$10,000+',
        features: [
          'Unlimited lines of code',
          'Multi-contract system audit',
          'Economic model review',
          'Executive summary report',
          'Unlimited fix verifications',
          'Ongoing security consultation'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Discuss your project requirements and audit scope',
        duration: '1-2 days'
      },
      {
        step: 2,
        title: 'Code Review & Analysis',
        description: 'Comprehensive automated and manual security analysis',
        duration: '5-10 days'
      },
      {
        step: 3,
        title: 'Report Delivery',
        description: 'Detailed findings report with remediation guidance',
        duration: '1-2 days'
      },
      {
        step: 4,
        title: 'Fix Verification',
        description: 'Review and verify implemented security fixes',
        duration: '2-3 days'
      }
    ],
    technologies: ['Solidity', 'Slither', 'Mythril', 'Hardhat', 'Foundry', 'OpenZeppelin'],
    deliverables: [
      'Comprehensive security audit report',
      'Executive summary for stakeholders',
      'Gas optimization recommendations',
      'Fix verification report',
      'Security badge for audited contracts'
    ],
    timeline: '1-2 weeks',
    caseStudy: {
      title: 'DeFi Protocol Security Audit',
      description: 'Audited a major DeFi lending protocol with $50M+ TVL',
      results: [
        'Identified 12 critical vulnerabilities',
        'Prevented potential $2M+ exploit',
        'Reduced gas costs by 25%',
        'Achieved 100% test coverage'
      ]
    },
    faqs: [
      {
        question: 'How long does a smart contract audit take?',
        answer: 'Typically 1-2 weeks depending on code complexity and scope. Simple contracts may take 3-5 days, while complex DeFi protocols can take 2-3 weeks.'
      },
      {
        question: 'What happens if vulnerabilities are found?',
        answer: 'We provide detailed remediation guidance and offer free re-audit of fixed code. Our goal is to ensure your contracts are secure before deployment.'
      },
      {
        question: 'Do you provide ongoing security support?',
        answer: 'Yes, we offer retainer agreements for ongoing security consultation and can audit contract upgrades or new features.'
      }
    ],
    testimonial: {
      name: 'Sarah Chen',
      company: 'DeFiProtocol',
      role: 'CTO',
      content: 'Huzaifa\'s audit was thorough and professional. They identified critical issues we missed and provided clear guidance for fixes. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '2',
    slug: 'defi-protocol-development',
    title: 'DeFi Protocol Development',
    tagline: 'End-to-end DeFi solutions from concept to deployment',
    startingPrice: '$10,000',
    category: 'Development',
    thumbnail: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Build sophisticated DeFi protocols including DEXs, lending platforms, yield farms, and staking mechanisms with advanced tokenomics and security-first architecture.',
    detailedDescription: 'Our DeFi protocol development service covers the entire lifecycle from conceptualization to deployment. We specialize in building scalable, secure, and user-friendly DeFi applications that drive real value. Our team has experience with all major DeFi primitives and can help you innovate in the space.',
    keyFeatures: [
      {
        icon: '🏦',
        title: 'DEX Development',
        description: 'Build automated market makers and order book exchanges with advanced features'
      },
      {
        icon: '💰',
        title: 'Lending Protocols',
        description: 'Create secure lending and borrowing platforms with dynamic interest rates'
      },
      {
        icon: '🌾',
        title: 'Yield Farming',
        description: 'Implement liquidity mining and yield optimization strategies'
      },
      {
        icon: '🎯',
        title: 'Tokenomics Design',
        description: 'Design sustainable token economics and governance mechanisms'
      },
      {
        icon: '🔗',
        title: 'Cross-chain Support',
        description: 'Deploy across multiple blockchains with bridge integrations'
      },
      {
        icon: '📱',
        title: 'Frontend Development',
        description: 'Beautiful, responsive web applications for seamless user experience'
      }
    ],
    pricingTiers: [
      {
        name: 'MVP Protocol',
        price: '$10,000',
        features: [
          'Basic DeFi functionality',
          'Single-chain deployment',
          'Standard UI/UX',
          'Basic tokenomics',
          '3 months support'
        ]
      },
      {
        name: 'Advanced Protocol',
        price: '$25,000',
        popular: true,
        features: [
          'Complex DeFi features',
          'Multi-chain deployment',
          'Custom UI/UX design',
          'Advanced tokenomics',
          'Governance integration',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise Protocol',
        price: '$50,000+',
        features: [
          'Full-featured DeFi ecosystem',
          'Cross-chain architecture',
          'Premium UI/UX',
          'Complex tokenomics',
          'DAO governance',
          '12 months support',
          'Marketing support'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'Define requirements, tokenomics, and technical architecture',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Build and test core protocol smart contracts',
        duration: '4-8 weeks'
      },
      {
        step: 3,
        title: 'Frontend Development',
        description: 'Create user interface and integrate with contracts',
        duration: '3-6 weeks'
      },
      {
        step: 4,
        title: 'Testing & Deployment',
        description: 'Comprehensive testing, audit, and mainnet deployment',
        duration: '2-4 weeks'
      }
    ],
    technologies: ['Solidity', 'React', 'Web3.js', 'Hardhat', 'The Graph', 'IPFS'],
    deliverables: [
      'Complete smart contract suite',
      'Frontend web application',
      'Technical documentation',
      'Deployment scripts',
      'User guides and tutorials'
    ],
    timeline: '2-4 months',
    faqs: [
      {
        question: 'What DeFi protocols can you build?',
        answer: 'We can build any type of DeFi protocol including DEXs, lending platforms, yield farms, staking protocols, derivatives platforms, and more.'
      },
      {
        question: 'Do you handle the tokenomics design?',
        answer: 'Yes, we provide comprehensive tokenomics design including token distribution, vesting schedules, governance mechanisms, and economic incentives.'
      },
      {
        question: 'What about ongoing maintenance?',
        answer: 'We offer maintenance packages including bug fixes, feature updates, and protocol upgrades. Support terms vary by package.'
      }
    ]
  },
  {
    id: '3',
    slug: 'nft-marketplace-development',
    title: 'NFT Marketplace Development',
    tagline: 'Full-featured NFT platforms with advanced trading features',
    startingPrice: '$8,000',
    category: 'Development',
    thumbnail: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Create comprehensive NFT marketplaces with lazy minting, royalty distribution, auction systems, and multi-chain support for the next generation of digital assets.',
    detailedDescription: 'Our NFT marketplace development service provides everything needed to launch a successful NFT platform. From smart contracts to user interfaces, we handle the complete development process with focus on user experience and scalability.',
    keyFeatures: [
      {
        icon: '🎨',
        title: 'Lazy Minting',
        description: 'Allow creators to mint NFTs without upfront gas costs'
      },
      {
        icon: '💎',
        title: 'Royalty System',
        description: 'Automated royalty distribution to creators on secondary sales'
      },
      {
        icon: '🔨',
        title: 'Auction Mechanism',
        description: 'English auctions, Dutch auctions, and fixed-price sales'
      },
      {
        icon: '🌐',
        title: 'Multi-chain Support',
        description: 'Deploy on Ethereum, Polygon, BSC, and other networks'
      },
      {
        icon: '🔍',
        title: 'Advanced Search',
        description: 'Powerful filtering and discovery features'
      },
      {
        icon: '👥',
        title: 'Creator Tools',
        description: 'Comprehensive dashboard for artists and collectors'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic Marketplace',
        price: '$8,000',
        features: [
          'Basic NFT trading',
          'Single-chain support',
          'Standard UI',
          'Basic creator tools',
          '3 months support'
        ]
      },
      {
        name: 'Advanced Marketplace',
        price: '$15,000',
        popular: true,
        features: [
          'Full trading features',
          'Multi-chain support',
          'Custom branding',
          'Advanced creator tools',
          'Analytics dashboard',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise Marketplace',
        price: '$30,000+',
        features: [
          'White-label solution',
          'Custom features',
          'Premium UI/UX',
          'API integrations',
          'Marketing tools',
          '12 months support'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'Define marketplace features and user experience',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Build NFT contracts and marketplace logic',
        duration: '3-4 weeks'
      },
      {
        step: 3,
        title: 'Frontend Development',
        description: 'Create marketplace interface and user dashboards',
        duration: '4-6 weeks'
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Quality assurance testing and marketplace launch',
        duration: '1-2 weeks'
      }
    ],
    technologies: ['Solidity', 'React', 'Next.js', 'IPFS', 'The Graph', 'Web3.js'],
    deliverables: [
      'NFT smart contracts',
      'Marketplace smart contracts',
      'Frontend application',
      'Admin dashboard',
      'API documentation'
    ],
    timeline: '2-3 months',
    faqs: [
      {
        question: 'What blockchain networks do you support?',
        answer: 'We support all major EVM-compatible networks including Ethereum, Polygon, BSC, Avalanche, and others based on your requirements.'
      },
      {
        question: 'Can you integrate with existing NFT collections?',
        answer: 'Yes, we can integrate existing NFT collections and provide migration tools for moving from other platforms.'
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer: 'We can recommend hosting solutions and provide ongoing maintenance packages to keep your marketplace running smoothly.'
      }
    ]
  },
  {
    id: '4',
    slug: 'cross-chain-bridge-development',
    title: 'Cross-Chain Bridge Development',
    tagline: 'Secure asset transfer protocols across blockchain networks',
    startingPrice: '$15,000',
    category: 'Infrastructure',
    thumbnail: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Build secure cross-chain bridges enabling seamless asset transfers between different blockchain networks with atomic swaps and multi-signature security.',
    detailedDescription: 'Our cross-chain bridge development service creates secure infrastructure for moving assets between different blockchain networks. We implement industry-standard security practices and provide comprehensive testing to ensure safe cross-chain operations.',
    keyFeatures: [
      {
        icon: '🌉',
        title: 'Asset Bridging',
        description: 'Secure transfer of tokens and NFTs between chains'
      },
      {
        icon: '🔒',
        title: 'Multi-sig Security',
        description: 'Multi-signature validation for enhanced security'
      },
      {
        icon: '⚡',
        title: 'Fast Transfers',
        description: 'Optimized for speed with minimal confirmation times'
      },
      {
        icon: '💧',
        title: 'Liquidity Pools',
        description: 'Integrated liquidity management for smooth operations'
      },
      {
        icon: '🔄',
        title: 'Atomic Swaps',
        description: 'Trustless cross-chain atomic swap functionality'
      },
      {
        icon: '📊',
        title: 'Analytics Dashboard',
        description: 'Real-time monitoring and transaction analytics'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic Bridge',
        price: '$15,000',
        features: [
          '2-chain bridge',
          'Token transfers',
          'Basic security',
          'Standard UI',
          '3 months support'
        ]
      },
      {
        name: 'Advanced Bridge',
        price: '$30,000',
        popular: true,
        features: [
          'Multi-chain support',
          'NFT transfers',
          'Enhanced security',
          'Custom UI/UX',
          'Liquidity management',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise Bridge',
        price: '$50,000+',
        features: [
          'Unlimited chains',
          'Custom protocols',
          'Advanced security',
          'White-label solution',
          'Priority support',
          '12 months support'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Architecture Design',
        description: 'Design bridge architecture and security model',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Build bridge contracts for all supported chains',
        duration: '4-6 weeks'
      },
      {
        step: 3,
        title: 'Backend Infrastructure',
        description: 'Develop relayer network and monitoring systems',
        duration: '3-4 weeks'
      },
      {
        step: 4,
        title: 'Testing & Deployment',
        description: 'Comprehensive testing and mainnet deployment',
        duration: '2-3 weeks'
      }
    ],
    technologies: ['Solidity', 'Go', 'Node.js', 'Redis', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Bridge smart contracts',
      'Relayer infrastructure',
      'Frontend interface',
      'Monitoring dashboard',
      'Security documentation'
    ],
    timeline: '3-4 months',
    faqs: [
      {
        question: 'Which blockchains can you bridge?',
        answer: 'We can bridge any EVM-compatible chains and are expanding to support non-EVM chains like Solana, Cosmos, and others.'
      },
      {
        question: 'How do you ensure bridge security?',
        answer: 'We implement multi-signature validation, time delays, and comprehensive testing. All bridges undergo security audits before deployment.'
      },
      {
        question: 'What about bridge maintenance?',
        answer: 'We provide ongoing maintenance including relayer operations, security monitoring, and protocol upgrades as needed.'
      }
    ]
  },
  {
    id: '5',
    slug: 'token-launchpad-development',
    title: 'Token Launchpad Development',
    tagline: 'Complete ICO & IDO platforms with KYC and vesting',
    startingPrice: '$12,000',
    category: 'Platform',
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Create comprehensive token launchpad platforms with KYC integration, vesting schedules, multi-tier access systems, and compliance features for successful token launches.',
    detailedDescription: 'Our token launchpad development service provides everything needed to launch a professional fundraising platform. We handle the complete development process including smart contracts, KYC integration, and user interfaces.',
    keyFeatures: [
      {
        icon: '🚀',
        title: 'Token Sales',
        description: 'Multiple sale formats including public, private, and whitelist sales'
      },
      {
        icon: '🆔',
        title: 'KYC Integration',
        description: 'Seamless KYC/AML verification with trusted providers'
      },
      {
        icon: '⏰',
        title: 'Vesting Schedules',
        description: 'Flexible token vesting with cliff and linear release options'
      },
      {
        icon: '🎯',
        title: 'Tier Systems',
        description: 'Multi-tier access based on staking or allocation amounts'
      },
      {
        icon: '📊',
        title: 'Analytics Dashboard',
        description: 'Comprehensive analytics for projects and investors'
      },
      {
        icon: '🛡️',
        title: 'Security Features',
        description: 'Anti-bot measures and fair launch mechanisms'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic Launchpad',
        price: '$12,000',
        features: [
          'Basic token sales',
          'Simple KYC',
          'Basic vesting',
          'Standard UI',
          '3 months support'
        ]
      },
      {
        name: 'Professional Launchpad',
        price: '$25,000',
        popular: true,
        features: [
          'Advanced sale features',
          'Full KYC integration',
          'Complex vesting',
          'Custom branding',
          'Analytics dashboard',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise Launchpad',
        price: '$50,000+',
        features: [
          'White-label platform',
          'Custom features',
          'Premium compliance',
          'Multi-chain support',
          'Priority support',
          '12 months support'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Platform Design',
        description: 'Define launchpad features and compliance requirements',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Build sale contracts and vesting mechanisms',
        duration: '3-4 weeks'
      },
      {
        step: 3,
        title: 'Platform Development',
        description: 'Create launchpad interface and admin tools',
        duration: '4-6 weeks'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'KYC integration, testing, and platform launch',
        duration: '2-3 weeks'
      }
    ],
    technologies: ['Solidity', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'KYC APIs'],
    deliverables: [
      'Launchpad smart contracts',
      'Frontend platform',
      'Admin dashboard',
      'KYC integration',
      'Documentation'
    ],
    timeline: '2-3 months',
    faqs: [
      {
        question: 'What KYC providers do you integrate with?',
        answer: 'We integrate with major KYC providers like Jumio, Onfido, and Sumsub, or can work with your preferred provider.'
      },
      {
        question: 'Can you handle regulatory compliance?',
        answer: 'We build compliance features into the platform, but recommend working with legal counsel for specific regulatory requirements.'
      },
      {
        question: 'Do you support multiple token standards?',
        answer: 'Yes, we support ERC-20, BEP-20, and other token standards across multiple blockchain networks.'
      }
    ]
  },
  {
    id: '6',
    slug: 'dao-governance-development',
    title: 'DAO Governance Development',
    tagline: 'Decentralized governance systems with voting and treasury management',
    startingPrice: '$18,000',
    category: 'Governance',
    thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    heroImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: 'Build comprehensive DAO governance systems with proposal creation, voting mechanisms, treasury management, and delegation features for decentralized organizations.',
    detailedDescription: 'Our DAO governance development service creates complete decentralized governance infrastructure. We build secure, transparent, and user-friendly systems that enable communities to make collective decisions and manage resources effectively.',
    keyFeatures: [
      {
        icon: '🗳️',
        title: 'Voting Systems',
        description: 'Multiple voting mechanisms including token-weighted and quadratic voting'
      },
      {
        icon: '📝',
        title: 'Proposal Management',
        description: 'Structured proposal creation, discussion, and execution workflows'
      },
      {
        icon: '💰',
        title: 'Treasury Management',
        description: 'Secure multi-sig treasury with spending controls and transparency'
      },
      {
        icon: '👥',
        title: 'Delegation System',
        description: 'Vote delegation and representative democracy features'
      },
      {
        icon: '⏱️',
        title: 'Timelock Controls',
        description: 'Time-delayed execution for security and transparency'
      },
      {
        icon: '📊',
        title: 'Governance Analytics',
        description: 'Comprehensive voting analytics and participation metrics'
      }
    ],
    pricingTiers: [
      {
        name: 'Basic DAO',
        price: '$18,000',
        features: [
          'Basic voting system',
          'Simple proposals',
          'Basic treasury',
          'Standard UI',
          '3 months support'
        ]
      },
      {
        name: 'Advanced DAO',
        price: '$35,000',
        popular: true,
        features: [
          'Advanced voting mechanisms',
          'Complex proposals',
          'Multi-sig treasury',
          'Delegation system',
          'Custom interface',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise DAO',
        price: '$60,000+',
        features: [
          'Custom governance model',
          'Advanced features',
          'White-label solution',
          'Integration support',
          'Priority support',
          '12 months support'
        ]
      }
    ],
    process: [
      {
        step: 1,
        title: 'Governance Design',
        description: 'Design governance model and voting mechanisms',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Build governance and treasury contracts',
        duration: '4-6 weeks'
      },
      {
        step: 3,
        title: 'Interface Development',
        description: 'Create governance interface and member dashboards',
        duration: '3-5 weeks'
      },
      {
        step: 4,
        title: 'Testing & Deployment',
        description: 'Comprehensive testing and DAO launch',
        duration: '2-3 weeks'
      }
    ],
    technologies: ['Solidity', 'React', 'The Graph', 'IPFS', 'Gnosis Safe', 'Snapshot'],
    deliverables: [
      'Governance smart contracts',
      'Treasury management system',
      'Voting interface',
      'Member dashboard',
      'Governance documentation'
    ],
    timeline: '3-4 months',
    faqs: [
      {
        question: 'What voting mechanisms do you support?',
        answer: 'We support token-weighted voting, quadratic voting, conviction voting, and custom voting mechanisms based on your requirements.'
      },
      {
        question: 'How do you ensure governance security?',
        answer: 'We implement timelock controls, multi-sig requirements, and comprehensive testing. All governance contracts undergo security audits.'
      },
      {
        question: 'Can you integrate with existing tokens?',
        answer: 'Yes, we can integrate with existing ERC-20 tokens or create new governance tokens with custom features.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): ServiceData[] => {
  return servicesData.filter(service => service.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(servicesData.map(service => service.category)));
};