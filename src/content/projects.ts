export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sales force',
    description: 'This is a description of project 1',
    image: '/project-1.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    id: '2',
    title: 'Dynamic components',
    description: 'This is a description of project 2',
    image: '/project-2.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    id: '3',
    title: 'Apolo UI',
    description: 'This is a description of project 2',
    image: '/project-3.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    id: '4',
    title: 'ASED',
    description: 'This is a description of project 2',
    image: '/project-4.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    id: '5',
    title: 'Ecuadorian registry',
    description: 'This is a description of project 2',
    image: '/project-5.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
  {
    id: '6',
    title: 'Backend Blog API',
    description: 'This is a description of project 2',
    image: '/project-6.webp',
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: 'https://github.com'
  },
]
