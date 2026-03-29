import { cn } from "@/lib/utils";

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
