import * as React from "react";
import { cn } from "../../utils/cn";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
