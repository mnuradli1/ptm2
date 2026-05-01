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
    "rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300",
    href && "hover:shadow-[0_0_30px_rgba(234,88,12,0.25)] hover:border-primary-300 hover:-translate-y-1",
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
