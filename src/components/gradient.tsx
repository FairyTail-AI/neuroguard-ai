import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        // 'bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145',
        // 'bg-linear-115 from-[#00578a] from-28% via-[#ee87cb] via-70% to-black sm:bg-linear-145',
        // "bg-linear-115 from-green-400 to-blue-500"
        // 'bg-linear-115 from-black via-gray-900 to-teal-800'
        'bg-gradient-to-tl from-black via-gray-900/90 to-black'
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-linear-115 from-[#00578A] from-28% via-[#809bd6] via-70% to-black',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
