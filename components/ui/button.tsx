import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-brand-500 text-white hover:bg-brand-700",
        variant === "secondary" && "bg-brand-100 text-brand-700 hover:bg-[#e3bd8e]",
        variant === "ghost" && "border border-brand-100 text-brand-700 hover:bg-brand-50",
        className
      )}
      {...props}
    />
  );
}

