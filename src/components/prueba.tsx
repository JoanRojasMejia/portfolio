import {
  Javascript,
  Typescript,
  React,
  Nextjs,
  Tailwindcss,
  Nodejs,
  Graphql,
  Apollo,
  MongoDB,
  Docker,
  Git,
  Golang,
  Astrojs
} from '../icons/icons-programming'
import Marquee from './marquee'

const list = [
  {
    title: 'JavaScript',
    Icon: Javascript,
    background: 'bg-amber-300',
    color: 'text-amber-900'
  },
  {
    title: 'TypeScript',
    Icon: Typescript,
    background: 'bg-blue-300',
    color: 'text-blue-900'
  },
  {
    title: 'React',
    Icon: React,
    background: 'bg-blue-300',
    color: 'text-blue-900'
  },
  {
    title: 'Next.js',
    Icon: Nextjs,
    background: 'bg-black',
    color: 'text-white'
  },
  {
    title: 'Tailwind CSS',
    Icon: Tailwindcss,
    background: 'bg-cyan-300',
    color: 'text-cyan-900'
  },
  {
    title: 'Node.js',
    Icon: Nodejs,
    background: 'bg-green-300',
    color: 'text-green-900'
  },
  {
    title: 'GraphQL',
    Icon: Graphql,
    background: 'bg-pink-300',
    color: 'text-pink-900'
  },
  {
    title: 'Apollo',
    Icon: Apollo,
    background: 'bg-blue-300',
    color: 'text-blue-900'
  },
  {
    title: 'MongoDB',
    Icon: MongoDB,
    background: 'bg-green-300',
    color: 'text-green-900'
  },
  {
    title: 'Docker',
    Icon: Docker,
    background: 'bg-blue-300',
    color: 'text-blue-900'
  },
  {
    title: 'Git',
    Icon: Git,
    background: 'bg-red-300',
    color: 'text-red-900'
  },
  {
    title: 'Golang',
    Icon: Golang,
    background: 'bg-blue-300',
    color: 'text-blue-900'
  },
  {
    title: 'Astro.js',
    Icon: Astrojs,
    background: 'bg-violet-300',
    color: 'text-violet-900'
  }
]

export const MarqueeDemo = () => {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3"
      id="prueba"
    >
      <Marquee className="[--duration:70s]">
        {list.map((item, index) => {
          const { title, Icon, background, color } = item
          return (
            <div
              key={index}
              className={`ml-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-[5px] ${background} rounded-full gap-1 opacity-85 ${color}`}
            >
              <Icon
                //  className="w-5 h-5 "
                className="w-5 h-5 fill-current"
              />
              {title}
            </div>
          )
        })}
      </Marquee>
    </div>
  )
}
