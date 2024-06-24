import { technologies } from '../content/technologies'
import Marquee from './marquee'
import Tag from './tag'

export const MarqueeDemo = () => {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3"
      id="prueba"
    >
      <Marquee className="[--duration:70s]">
        {Object.values(technologies)
          .sort((a, b) => a.order - b.order)
          .map((item, index) => {
            const { title, Icon, background, color } = item
            return (
              <Tag
                key={index}
                title={title}
                Icon={Icon}
                background={background}
                color={color}
                className="ml-2"
              />
            )
          })}
      </Marquee>
    </div>
  )
}
