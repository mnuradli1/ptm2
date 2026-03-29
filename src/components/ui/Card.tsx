import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200",
    href && "hover:shadow-lg hover:border-primary-200 hover:-translate-y-1",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
