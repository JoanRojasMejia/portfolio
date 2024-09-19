import {
  Astrojs,
  Docker,
  Git,
  Golang,
  Graphql,
  Javascript,
  Laravel,
  MongoDB,
  Nextjs,
  Nodejs,
  Php,
  React,
  Sass,
  Tailwindcss,
  Typescript,
  Vue
} from '../icons/icons-programming'

type Technology = {
  title: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  background: string
  color: string
  order: number
}

export const technologies: Record<string, Technology> = {
  TypeScript: {
    title: 'TypeScript',
    Icon: Typescript,
    background: 'bg-blue-300',
    color: 'text-blue-900',
    order: 1
  },
  JavaScript: {
    title: 'JavaScript',
    Icon: Javascript,
    background: 'bg-amber-300',
    color: 'text-amber-900',
    order: 2
  },
  React: {
    title: 'React',
    Icon: React,
    background: 'bg-blue-300',
    color: 'text-blue-900',
    order: 3
  },
  Vue: {
    title: 'Vue',
    Icon: Vue,
    background: 'bg-green-300',
    color: 'text-green-900',
    order: 4
  },
  Nextjs: {
    title: 'Next.js',
    Icon: Nextjs,
    background: 'bg-zinc-700',
    color: 'text-white',
    order: 5
  },
  Tailwindcss: {
    title: 'Tailwind CSS',
    Icon: Tailwindcss,
    background: 'bg-cyan-300',
    color: 'text-cyan-900',
    order: 6
  },
  Nodejs: {
    title: 'Node.js',
    Icon: Nodejs,
    background: 'bg-green-300',
    color: 'text-green-900',
    order: 7
  },
  GraphQL: {
    title: 'GraphQL',
    Icon: Graphql,
    background: 'bg-pink-300',
    color: 'text-pink-900',
    order: 8
  },
  Php: {
    title: 'Php',
    Icon: Php,
    background: 'bg-fuchsia-300',
    color: 'text-fuchsia-900',
    order: 9
  },
  MongoDB: {
    title: 'MongoDB',
    Icon: MongoDB,
    background: 'bg-green-300',
    color: 'text-green-900',
    order: 10
  },
  Docker: {
    title: 'Docker',
    Icon: Docker,
    background: 'bg-blue-300',
    color: 'text-blue-900',
    order: 11
  },
  Git: {
    title: 'Git',
    Icon: Git,
    background: 'bg-red-300',
    color: 'text-red-900',
    order: 12
  },
  Golang: {
    title: 'Golang',
    Icon: Golang,
    background: 'bg-blue-300',
    color: 'text-blue-900',
    order: 13
  },
  Astrojs: {
    title: 'Astro.js',
    Icon: Astrojs,
    background: 'bg-violet-300',
    color: 'text-violet-900',
    order: 14
  },
  Sass: {
    title: 'Sass',
    Icon: Sass,
    background: 'bg-fuchsia-300',
    color: 'text-fuchsia-900',
    order: 15
  },
  Laravel: {
    title: 'Laravel',
    Icon: Laravel,
    background: 'bg-red-300',
    color: 'text-red-900',
    order: 16
  }
}
