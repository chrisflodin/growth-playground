import { adStyleVariants } from "@/lib/brand-theme";
import type { GeneratedDisplayAd } from "@/lib/generate-display-ads";

type DisplayAdPreviewProps = {
  ad: GeneratedDisplayAd;
};

export function DisplayAdPreview({ ad }: DisplayAdPreviewProps) {
  const variant =
    adStyleVariants.find((entry) => entry.id === ad.styleVariantId) ??
    adStyleVariants[0];

  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-[1.75rem] border border-black/5 p-6 shadow-[0_24px_80px_-40px_rgba(13,21,39,0.45)] ${variant.surfaceClassName}`}
      style={variant.backgroundStyle}
    >
      {variant.shapes.map((shape, index) => (
        <div
          key={`${variant.id}-${index}`}
          aria-hidden="true"
          className={`absolute ${shape.className}`}
          style={shape.style}
        />
      ))}

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${variant.eyebrowClassName}`}
          >
            Display Ad
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-75">
            Digiexam
          </span>
        </div>

        <div className="mt-10 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] opacity-75">
            {ad.adLabel}
          </p>
          <h3
            className={`max-w-[10ch] text-[2rem] leading-[1.02] font-semibold tracking-tight ${variant.headlineClassName}`}
          >
            {ad.headline}
          </h3>
        </div>

        <div className="mt-auto space-y-2.5">
          {ad.supportingMessages.map((message) => (
            <p
              key={message}
              className={`max-w-[18ch] text-sm leading-5 ${variant.supportingClassName}`}
            >
              {message}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
