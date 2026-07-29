import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-xl border border-brand-forest-dark/20 bg-white px-3.5 py-2 text-sm text-brand-forest-dark transition-colors placeholder:text-brand-forest-dark/40 focus-visible:border-brand-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-forest/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
