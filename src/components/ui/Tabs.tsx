"use client";

import { cn } from "@/lib/utils";

export default function Tabs({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
            activeTab === tab
              ? "bg-primary-500 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
