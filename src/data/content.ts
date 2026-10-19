import resumePdf from '@/assets/resume.pdf';

export type WritingBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'code'; code: string };

export type Writing = {
  date: string;
  year: string;
  readTime: string;
  title: string;
  url?: string;
  slug?: string;
  excerpt?: string;
  blocks?: WritingBlock[];
};

export type OssMilestone = { date: string; label: string; text: string };
export type OssEntry = {
  org: string;
  orgUrl: string;
  orgAvatar: string;
  description: string;
  role: string;
  milestones: OssMilestone[];
  contributions: { label: string; href: string }[];
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  repoUrl: string;
};

export type StackRow = {
  label: string;
  items: { name: string; icon: string }[];
};

export const content = {
  meta: {
    title: 'Shyam Kumar Reddy Kalla',
    // description: 'A little corner on the Internet that speaks about me.',
  },
  name: 'Shyam Kumar Reddy K',
  verified: true,
  tagline: 'SDE 1 @ AltiusHub',
  taglines: ['SDE 1 @ AltiusHub', 'LeetCode Knight (Top 5%)'],
  bio: "I build backend services and the tooling around them - mostly Python, TypeScript and Go. Currently SDE 1 at AltiusHub in Hyderabad.",
  avatarUrl: '/avatar.jpg',
  avatarAltUrl: '/pictures/pp2.jpg',
  links: { profile: 'https://github.com/JathinShyam' },
  location: 'Hyderabad, India',
  timezone: '+IST',
  socials: [
    { label: 'Github', href: 'https://github.com/JathinShyam', icon: 'github' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/jathinshyam', icon: 'linkedin' },
    { label: 'Leetcode', href: 'https://leetcode.com/JathinShyam', icon: 'leetcode' },
    { label: 'Medium', href: 'https://medium.com/@jathinshyam', icon: 'medium' },
    { label: 'Email', href: 'mailto:heyshyam.r@gmail.com', icon: 'mail' },
  ],
  hello: "I'm usually around on GitHub and LinkedIn, and always up for talking about backend systems, databases or Android mods.\nDrop me a message — happy to talk shop.",
  personal: {
    text: 'A bit about me, outside of tech.',
    links: [
      { label: 'anime', href: '/anime' },
      { label: 'books', href: '/books' },
      { label: 'manga', href: '/manga' },
    ],
  },
  quote: { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
  stackHeading: 'Stack',
  stack: [
    { label: '01 Language', items: [
      { name: 'Python', icon: 'python' },
      { name: 'Go', icon: 'go' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Java', icon: 'java' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'SQL', icon: 'sql' },
    ] },
    { label: '02 Backend', items: [
      { name: 'Django', icon: 'django' },
      { name: 'Django REST Framework', icon: 'drf' },
      { name: 'Celery', icon: 'celery' },
      { name: 'Celery Beat', icon: 'celerybeat' },
      { name: 'Flower', icon: 'flower' },
    ] },
    { label: '03 Data & Infra', items: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Prometheus', icon: 'prometheus' },
    ] },
    { label: '04 UI & Mobile', items: [
      { name: 'React', icon: 'react' },
      { name: 'React Native', icon: 'reactnative' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'Jetpack Compose', icon: 'compose' },
    ] },
    { label: '05 Tooling', items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub Actions', icon: 'ghactions' },
      { name: 'Locust', icon: 'locust' },
    ] },
  ] as StackRow[],
  // footerTagline: 'A little corner on the Internet that speaks about me.',
  resumeUrl: resumePdf,
  resumeFileName: 'Shyam_Kumar_Reddy_Kalla_Resume.pdf',

  writings: [
    {
      date: "26 Aug '26",
      year: '2026',
      readTime: '8 min',
      title: "I Wanted My OnePlus Nord 5 Side Button to Do My Shortcuts — Here's What It Took",
      url: 'https://medium.com/@jathinshyam/i-wanted-my-oneplus-nord-5-side-button-to-do-my-shortcuts-heres-what-it-took-506b6cb53f25',
      
      excerpt:
        'How OxygenOS swallows the Plus Key, why a normal accessibility remapper cannot see it, and what it took to build one that does.',
    },
    {
      date: "10 Jul '26",
      year: '2026',
      readTime: '6 min',
      title: 'The Invisible Auction: How Third-Party Ads Power (and Personalize) Your Apps and Websites',
      url: 'https://medium.com/@jathinshyam/the-invisible-auction-how-third-party-ads-power-and-personalize-your-apps-and-websites-dc5ed7b3cbc4',
      excerpt:
        'A plain-English look at real-time bidding, what data actually leaves your device, and why the same app shows different ads to different people.',
    },
  ] as Writing[],

  oss: [] as OssEntry[],

  projects: [
    {
      name: 'Pulse',
      description:
        'A production-grade, horizontally scalable notification system on Django/DRF, Celery, Redis and PostgreSQL. Multi-channel delivery (email, SMS, push) with priority queues and exponential-backoff retries; sustained 15K+ jobs/min in Locust load tests. Idempotency keys, Redis rate limiting (10 req/min per user/channel) and dead-letter queues, with Kubernetes HPA scaling 2–10 replicas to hold a <1% error rate under 200+ concurrent users.',
      tags: ['Python', 'Django/DRF', 'Celery', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'Prometheus'],
      repoUrl: 'https://github.com/JathinShyam/Pulse',
    },
    {
      name: 'SmartMigrate',
      description:
        'A custom Django management command that makes schema migrations resilient in branching and merging workflows. It identifies migrations with a hybrid key (app + cleaned name + content hash, ignoring the dependencies block), so renamed or renumbered files are still matched. Built to fix cross-environment migration drift in GitHub Actions deployments (21 edge cases handled), it cut DB migration time by 95%.',
      tags: ['Python', 'Django', 'PostgreSQL', 'CI/CD'],
      repoUrl: 'https://github.com/JathinShyam/SmartMigrate',
    },
    {
      name: 'Bhagavad Gita',
      description:
        'An offline-first, four-language (Telugu, English, Hindi, Tamil) scripture app covering all 18 chapters and 19 topic categories, with streaks, saved verses and share cards — no backend, no account. Includes a rolling 7-day local-notification scheduler with tap-to-verse deep links and a native Android home-screen widget (Kotlin AppWidget with a JS bridge) showing a deterministic verse of the day, guarded by Jest catalog-integrity tests and a GitHub Actions release-APK pipeline.',
      tags: ['TypeScript', 'React Native', 'Expo', 'Android'],
      repoUrl: 'https://github.com/JathinShyam/BagavadGitaApp',
    },
    {
      name: 'Keyforge',
      description:
        "Remaps the OnePlus Nord 5's Plus (AI) key into custom single, double and long-press shortcuts — no root, no Magisk, no cloud. Kotlin and Jetpack Compose with Hilt, Room and DataStore, plus an optional floating action menu.",
      tags: ['Kotlin', 'Jetpack Compose', 'Android'],
      repoUrl: 'https://github.com/JathinShyam/NordAIRemapper',
    },
  ] as Project[],

  books: {
    intro: "Everything I've finished.",
    read: [
      { title: 'Autobiography of a Yogi', author: 'Paramahansa Yogananda', genre: 'Spirituality' },
      { title: 'The Fountainhead', author: 'Ayn Rand', genre: 'Philosophy' },
      { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie', genre: 'Self-help' },
      { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', genre: 'Philosophy' },
      { title: 'She Erased Her', author: 'Himanshu Rai', genre: 'Thriller' },
      { title: 'God Is a Gamer', author: 'Ravi Subramanian', genre: 'Thriller' },
      { title: 'Harry Potter and the Cursed Child', author: 'J. K. Rowling, Jack Thorne, John Tiffany', genre: 'Fantasy' },
      { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', genre: 'Finance' },
      { title: 'Everyone Has a Story', author: 'Savi Sharma', genre: 'Fiction' },
      { title: 'A Twist in the Tale', author: 'Jeffrey Archer', genre: 'Short stories' },
      { title: 'Verity', author: 'Colleen Hoover', genre: 'Thriller' },
      { title: 'The Girl in Room 105', author: 'Chetan Bhagat', genre: 'Thriller' },
      { title: 'Deception Point', author: 'Dan Brown', genre: 'Thriller' },
      { title: 'Robinson Crusoe', author: 'Daniel Defoe', genre: 'Classic' },
      { title: 'The Diary of a Young Girl', author: 'Anne Frank', genre: 'Memoir' },
    ],
  },

  manga: {
    intro: 'Panels I keep coming back to.',
    items: [
      { title: 'Vagabond', author: 'Takehiko Inoue', genre: 'Seinen' },
      { title: 'Demon Slayer', author: 'Koyoharu Gotouge', genre: 'Shonen' },
      { title: 'Attack on Titan', author: 'Hajime Isayama', genre: 'Shonen' },
      { title: 'Solo Leveling', author: 'Chugong', genre: 'Manhwa' },
      { title: 'Homunculus', author: 'Hideo Yamamoto', genre: 'Seinen' },
      { title: "Omniscient Reader's Viewpoint", author: 'Sing Shong', genre: 'Manhwa' },
    ] as { title: string; author: string; genre: string }[],
  },

  favorites: [
    'Attack on Titan',
    'Naruto',
    'Death Note',
    'One Punch Man',
    'Blue Lock',
    'Haikyuu',
    'Monster',
    'My Hero Academia',
    'Classroom of the Elite',
    'Jujutsu Kaisen',
  ],

  resume: {
    experience: [
      {
        period: 'Nov 2024 – Present',
        role: 'Software Development Engineer 1',
        org: 'AltiusHub',
        stack: 'Python, Django, TypeScript, React, PostgreSQL, Celery, Azure',
        points: [
          'Architected microservice-based track-and-trace compliance from scratch for 6 markets (Saudi Arabia, Indonesia, Azerbaijan, Egypt, UAE, Bahrain), automating 26 regulatory report types per country and shipping one country per sprint for 4 enterprise customers.',
          'Led a 3-engineer pod (code reviews, mentoring), consistently shipping 3+ features per three-week release.',
          'Integrated the platform with Microsoft Dynamics 365 ERP, syncing 5K records/day and saving ~2 hrs/day of manual work for 3 enterprise clients.',
          'Built Smart Migrate, a Django management command that resolves cross-environment migration drift in GitHub Actions deployments (21 edge cases), cutting DB migration time by 95%.',
          'Cut p95 query latency from 3s to 2.4s on a 100M-row PostgreSQL table via partitioning, targeted indexes and ORM query tuning.',
          'Built serial-number scan pre-validation that blocks invalid traceability events upstream, cutting operator rework by 60%.',
        ],
      },
      {
        period: 'Jul 2023 – Dec 2023',
        role: 'Machine Learning Intern',
        org: 'Rockfort Labs',
        stack: 'Python, Deep Learning',
        points: [
          'Built predictive-maintenance anomaly-detection models for industrial boilers on real-time IIoT sensor streams, benchmarking 8 approaches and ranking them by precision/recall tradeoff.',
          'Productionized evaluation workflows (train/validation splits, thresholding, error analysis) to cut false alarms, reaching 98% accuracy per boiler on a held-out set.',
        ],
      },
    ],
    skills: {
      Languages: ['Python', 'Go', 'TypeScript/JavaScript', 'Java', 'SQL'],
      'Frameworks/Platforms': ['Django', 'Django REST Framework', 'React', 'React Native', 'Expo', 'Celery', 'Celery Beat'],
      'Data/Infra/Tools': ['PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Git', 'Azure', 'Prometheus', 'Flower', 'Streamlit'],
    } as Record<string, string[]>,
    education: [
      {
        period: '2020 – 2024',
        role: 'B.Tech, Computer Science (AI & Data Science)',
        org: 'SASTRA Deemed University',
        detail: 'CGPA 8.11 · Thanjavur, Tamil Nadu',
      },
    ],
    achievements: [
      'Solved 1050+ DSA problems on LeetCode — Knight badge, max rating 1854, top 5%.',
    ],
  },
};

export default content;
