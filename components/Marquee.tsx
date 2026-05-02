
type MarqueeProps = {
  items:   string[]
  reverse?: boolean
  speed?:  'slow' | 'normal' | 'fast'
  className?: string
}

const speedMap = {
  slow:   'animate-marquee-slow',
  normal: 'animate-marquee',
  fast:   'animate-marquee-fast',
}

export default function Marquee({
  items,
  reverse = false,
  speed = 'normal',
  className = '',
}: MarqueeProps) {
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden border-y border-neutral-200 py-4 ${className}`}>
      <div
        className={`
          flex w-max gap-8
          ${speedMap[speed]}
          ${reverse ? '[animation-direction:reverse]' : ''}
          hover:[animation-play-state:paused]
        `}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xl font-medium text-neutral-800 
                       whitespace-nowrap after:content-['—'] 
                       after:ml-8 after:text-neutral-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}