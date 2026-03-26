import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-[#d5c4bf] bg-white px-3 py-2 text-sm text-[#5a343d] placeholder:text-[#b29b96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a2d3f]",
        className
      )}
      {...props}
    />
  );
}
