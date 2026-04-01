import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DisplayAdCard } from "@/components/display-ad-card";
import { brandTheme } from "@/lib/brand-theme";
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

      <div className="grid flex-1 gap-6 p-6 lg:grid-cols-[minmax(0,1fr)_320px] 2xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-2">
            {ads.map((ad) => (
              <DisplayAdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </section>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <Card>
            <CardHeader>
              <CardTitle>Page details</CardTitle>
              <CardDescription>
                This route turns the messaging themes into quick ad previews for
                internal review.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-lg bg-secondary/80 p-4">
                <p className="font-medium text-foreground">Content source</p>
                <p className="mt-1">
                  Two message groups, six total headlines, and supporting-message
                  pools normalized into a typed config.
                </p>
              </div>
              <div className="rounded-lg bg-secondary/80 p-4">
                <p className="font-medium text-foreground">Combination rule</p>
                <p className="mt-1">
                  Each ad uses one headline and no more than three supporting
                  messages, with the count and style order kept configurable.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Brand translation</CardTitle>
              <CardDescription>
                The shell stays close to CRM, while the ads borrow more directly
                from the visual guide.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-2">
                {Object.entries(brandTheme.palette).map(([name, color]) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-black/10"
                      style={{ backgroundColor: color }}
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                <li>Clean surfaces, generous spacing, and restrained UI chrome.</li>
                <li>Dark-blue and white foundations with controlled blue or magenta accents.</li>
                <li>Gradient-backed circles, arcs, and beams instead of flat decoration.</li>
                <li>Headline-first square compositions with simple supporting copy blocks.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message groups</CardTitle>
              <CardDescription>
                The current ad set reflects every headline from the messaging file.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {messageGroups.map((group) => (
                <div key={group.id} className="rounded-lg bg-secondary/80 p-4">
                  <p className="font-medium text-foreground">{group.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {group.headlines.length} headlines, {group.supportingMessages.length}{" "}
                    supporting messages
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
