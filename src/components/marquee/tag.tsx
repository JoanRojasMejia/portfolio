import type React from 'react'

type props = {
  background: string
  color: string
  title: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  className?: string
}

const Tag: React.FC<props> = ({ background, color, title, Icon, className }) => {
  return (
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-4 py-[7px] ${background} rounded-full gap-1 opacity-85 ${color} ${className}`}
    >
      <Icon className="w-5 h-5 fill-current" />
      {title}
    </div>
  )
}

export default Tag
