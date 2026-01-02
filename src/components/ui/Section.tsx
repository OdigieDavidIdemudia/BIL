import * as React from "react";
import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    background?: "white" | "neutral" | "black";
    container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, background = "white", container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={clsx(
                    "py-16 md:py-24",
                    {
                        "bg-bil-white": background === "white",
                        "bg-bil-neutral": background === "neutral",
                        "bg-bil-black text-white": background === "black",
                    },
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
