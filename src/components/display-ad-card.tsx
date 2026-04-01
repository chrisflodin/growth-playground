import { DisplayAdPreview } from "@/components/display-ad-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { GeneratedDisplayAd } from "@/lib/generate-display-ads";

type DisplayAdCardProps = {
  ad: GeneratedDisplayAd;
};

export function DisplayAdCard({ ad }: DisplayAdCardProps) {
  return (
    <Card className="gap-5 overflow-hidden py-0">
      <div className="p-4 pb-0">
        <DisplayAdPreview ad={ad} />
      </div>
      <CardHeader className="px-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-base">{ad.headline}</CardTitle>
            <CardDescription>{ad.groupTitle}</CardDescription>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            {ad.supportingMessages.length} support line
            {ad.supportingMessages.length === 1 ? "" : "s"}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-4 pb-4">
        <div className="rounded-lg bg-secondary/80 p-3 text-sm text-muted-foreground">
          {ad.prospectContext}
        </div>
        <div className="space-y-2">
          {ad.supportingMessages.map((message) => (
            <div
              key={message}
              className="rounded-lg border border-border/80 bg-background px-3 py-2 text-sm text-foreground"
            >
              {message}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
