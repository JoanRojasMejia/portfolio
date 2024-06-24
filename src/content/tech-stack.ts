export interface TechnologyAndFramework {
  name: string
  logo: string
  url: string
  description: string
}

export const technologiesAndFrameworks: TechnologyAndFramework[] = [
  {
    name: 'React',
    logo: '/joan.webp',
    url: 'https://reactjs.org/',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    name: 'Next.js',
    logo: '/joan.webp',
    url: 'https://nextjs.org/',
    description: 'The React Framework for Production'
  },
  {
    name: 'Tailwind CSS',
    logo: '/joan.webp',
    url: 'https://tailwindcss.com/',
    description: 'A utility-first CSS framework'
  },
  {
    name: 'Node.js',
    logo: '/joan.webp',
    url: 'https://nodejs.org/',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine"
  },
  {
    name: 'GraphQL',
    logo: '/joan.webp',
    url: 'https://graphql.org/',
    description: 'A query language for your API'
  },
  {
    name: 'MongoDB',
    logo: '/joan.webp',
    url: 'https://www.mongodb.com/',
    description: 'The most popular database for modern apps'
  }
]

export const tools: TechnologyAndFramework[] = [
  {
    name: 'VS Code',
    logo: '/joan.webp',
    url: 'https://code.visualstudio.com/',
    description:
      'Code editor redefined and optimized for building and debugging modern web and cloud applications'
  },
  {
    name: 'GitHub',
    logo: '/joan.webp',
    url: '',
    description: 'A development platform inspired by the way you work'
  }
]

export const devices: TechnologyAndFramework[] = [
  {
    name: 'MacBook Pro',
    logo: '/joan.webp',
    url: '',
    description: 'The ultimate pro notebook, MacBook Pro'
  },
  {
    name: 'iPhone 12 Pro',
    logo: '/joan.webp',
    url: '',
    description: 'It’s a leap year'
  },
  {
    name: 'iPad Pro',
    logo: '/joan.webp',
    url: '',
    description: 'Supercharged by the Apple M1 chip'
  }
]
