import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a2d3f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-gradient-to-b from-[#923449] to-[#6b2434] text-white shadow-[0_10px_26px_rgba(106,36,52,0.28)] hover:brightness-110",
        variant === "secondary" && "border border-[#d8c2c0] bg-[#f7efea] text-[#5e3540] hover:bg-[#f1e4df]",
        variant === "ghost" && "border border-[#d6bdb9] bg-white text-[#60353f] hover:bg-[#f9f1ed]",
        className
      )}
      {...props}
    />
  );
}
