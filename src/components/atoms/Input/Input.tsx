import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const inputVariants = cva("flex -11 w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neon-blue focus-visible:border-neon-blue disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 font-mono",
    {
        variants: {
            variant: {
                default: "shadow-none",
                neon: "focus:shadow-[0_0_15px_#00f3ff] focus:border-neon-blue",
                error: "border-neon-pink focus:ring-neon-pink focus:border-neon-pink focus:shadoow-[0_0_15px_#bc13fe] text-neon-pink placeholder:text-neon-pink/50"
            },
        },
        defaultVariants: {
            variant: "neon"
        },
    },
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
    icon?: React.ReactNode;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, icon, ...props }, ref) => {
        return (
            <div className="relative flex items-center w-full max-w-sm group">
                {icon && (
                    <div className="absolute left-3 text-gray-500 group-focus-within:text-neon-blue transition-colors">
                        {icon}
                    </div>
                )}

                <input
                    className={cn(
                        inputVariants({ variant, className }),
                        icon && "pl-10"
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";
