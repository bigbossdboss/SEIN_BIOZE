import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-[#d5c4bf] bg-white px-3 text-sm text-[#5a343d] placeholder:text-[#b29b96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a2d3f]",
        className
      )}
      {...props}
    />
  );
}
