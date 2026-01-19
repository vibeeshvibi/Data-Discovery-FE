import { IconRefresh } from "@tabler/icons-react";
import { Button } from "../ui/button";

interface LastRefreshSectionProps {
  className?: string;
}

export function LastRefreshSection({ className }: LastRefreshSectionProps) {
  return (
    <div className={`flex items-center gap-3 ${className || ''}`}>
      <span className="text-sm text-gray-500">
        Last Refreshed: {new Date().toLocaleString()}
      </span>
      <Button variant="ghost" size="sm" className="h-8 w-8">
        <IconRefresh className="h-4 w-4" color="var(--brand-primary)" />
      </Button>
    </div>
  );
}
