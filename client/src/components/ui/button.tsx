import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" +
    " transition-all duration-200 [&_svg]:transition-transform [&_svg]:duration-200" +
    " hover:font-bold hover:[&_svg]:scale-115" +
    " hover-elevate active-elevate-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground text-white border border-primary-border shadow-md shadow-black/60" +
          " hover:bg-primary/90 hover:shadow-lg hover:border-white hover:backdrop-blur-sm shadow-black/80" +
          " active:bg-primary/80 active:shadow-md shadow-black/60",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive-border shadow-lg shadow-black/60",
        outline:
          // Shows the background color of whatever card / sidebar / accent background it is inside of.
          // Inherits the current text color.
          " border [border-color:var(--button-outline)]  shadow-lg shadow-black/60 active:shadow-md shadow-black/50 ",
        secondary:
          "bg-white text-primary border border-primary/70 shadow-md shadow-black/50 hover:bg-white/95 hover:border-primary hover:shadow-lg active:bg-white/90",
        // Add a transparent border so that when someone toggles a border on later, it doesn't shift layout/size.
        ghost:
          "border border-gray-300/30 bg-gray-200/20 backdrop-blur-sm shadow-lg shadow-black/40 hover:bg-gray-200/30 hover:border-gray-300/40 active:bg-gray-200/25",
      },
      // Heights are set as "min" heights, because sometimes Ai will place large amount of content
      // inside buttons. With a min-height they will look appropriate with small amounts of content,
      // but will expand to fit large amounts of content.
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
