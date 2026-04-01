import { DisplayAdCard } from "@/components/display-ad-card";
import { adRules, messageGroups } from "@/lib/display-ads-config";
import { generateDisplayAds } from "@/lib/generate-display-ads";

export default function DisplayAdsPage() {
  const ads = generateDisplayAds();

  return (
    <div className="flex h-full flex-col">
      <div className="border-b px-6 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Page
        </p>
        <div className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Display Ads</h2>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              One square concept per headline from the current messaging set, using
              configurable supporting-message combinations and brand-led visual
              variants.
            </p>
          </div>
          <div className="flex gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-3 py-1.5">
              {ads.length} ad concepts
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1.5">
              Max {adRules.maxSupportingMessages} support lines
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <section className="mx-auto w-full max-w-[1040px] space-y-6">
          {messageGroups.map((group, groupIndex) => {
            const groupAds = ads.filter((ad) => ad.groupId === group.id);

            return (
              <div
                key={group.id}
                className={groupIndex === 0 ? "space-y-6" : "space-y-6 border-t pt-6"}
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Message theme
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                    {group.prospectContext}
                  </p>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  {groupAds.map((ad) => (
                    <DisplayAdCard key={ad.id} ad={ad} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
