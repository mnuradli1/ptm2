import { cn } from "@/lib/utils";

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  glow = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          glow
            ? "bg-gradient-to-r from-primary-700 via-primary-500 to-secondary-500 bg-clip-text text-transparent"
            : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
