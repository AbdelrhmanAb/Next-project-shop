
const Loading = () => {
  return (

      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-100 dark:bg-blue-900/30" />
          <div className="relative h-16 w-16 animate-spin rounded-full border-[3px] border-zinc-200 border-t-blue-500 dark:border-zinc-700 dark:border-t-blue-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
            Loading
          </span>
          <div className="flex gap-1">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                style={{ animationDelay: `${delay}ms` }}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400"
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Loading