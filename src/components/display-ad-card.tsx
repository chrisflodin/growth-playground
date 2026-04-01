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
  const isCanvasSecurityConcept = ad.headline === "Canvas LMS. Now With Security.";
  const isLockdownBuiltForCanvas = ad.headline === "The lockdown browser built for Canvas";

  return (
    <Card className={isLockdownBuiltForCanvas ? "gap-0 overflow-hidden py-0" : "gap-5 overflow-hidden py-0"}>
      <div>
        <DisplayAdPreview ad={ad} />
      </div>
      <CardHeader className={isLockdownBuiltForCanvas ? "gap-0 px-0 pt-0 pb-0" : "px-4"}>
        <div
          className={
            isCanvasSecurityConcept
              ? "flex flex-col items-center gap-3 text-center"
              : "flex items-start justify-between gap-4"
          }
        >
          <div className={isCanvasSecurityConcept ? "space-y-2 text-center" : "space-y-2"}>
            <CardTitle className={isCanvasSecurityConcept ? "text-base text-center" : "text-base"}>
              {ad.headline}
            </CardTitle>
            <CardDescription>{ad.groupTitle}</CardDescription>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            {ad.supportingMessages.length} support line
            {ad.supportingMessages.length === 1 ? "" : "s"}
          </span>
        </div>
      </CardHeader>
      <CardContent className={isLockdownBuiltForCanvas ? "space-y-0 px-0 pb-0" : "space-y-4 px-4 pb-4"}>
        <div className="rounded-lg bg-secondary/80 p-3 text-sm text-muted-foreground">
          {ad.prospectContext}
        </div>
        {ad.subtitle ? (
          <div className="rounded-lg border border-border/80 bg-background px-3 py-2 text-sm text-foreground">
            {ad.subtitle}
          </div>
        ) : null}
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
