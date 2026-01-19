import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none tracking-wider uppercase font-mono",
    {
        variants: {
            variant: {
                neon: "bg-transparent border-2 border-neon-blue text-neon-blue shadow-neon-blue hover:bg-neon-blue hover:text-black hover:shadow-[0_0_30px_#00f3ff]",
                solid: "bg-neon-pink text-white border-2 border-neon-pink shadow-neon-pink hover:bg-transparent hover:text-neon-pink",
                ghost: "bg-transparent text-gray-400 hover:text-neon-green hover:bg-neon-green/10",
                hacker: "bg-black border border-neon-green text-neon-green hover:bg-neon-green hover:text-black shadow-neon-green"

            },
            size: {
                sm: "h-9 px-4 text-xs",
                md: "h-11 px-8 text-sm",
                lg: "h-14 px-10 text-base",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "neon",
            size: "md"
        }

    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";