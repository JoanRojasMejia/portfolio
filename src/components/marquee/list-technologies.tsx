import { technologies } from '../../content/technologies'
import Marquee from '../magic-ui/marquee'
import Tag from './tag'

export const ListTechnologies = () => {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3"
      id="list-technologies"
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
