import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bil-gold/50 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-bil-gold text-white hover:bg-bil-gold-hover shadow-sm",
                outline:
                    "border border-bil-black/20 bg-transparent text-bil-black hover:border-bil-gold hover:text-bil-gold",
                ghost: "hover:bg-bil-neutral text-bil-text-primary",
                link: "text-bil-black underline-offset-4 hover:underline",
                white: "bg-white text-bil-black hover:bg-bil-neutral shadow-sm",
            },
            size: {
                default: "h-10 px-5 py-2",
                sm: "h-8 px-3 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, isLoading, children, ...props }, ref) => {
        return (
            <button
                className={clsx(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
