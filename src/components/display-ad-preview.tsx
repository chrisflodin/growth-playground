import Image from "next/image";
import { adStyleVariants } from "@/lib/brand-theme";
import type { GeneratedDisplayAd } from "@/lib/generate-display-ads";

type DisplayAdPreviewProps = {
  ad: GeneratedDisplayAd;
};

export function DisplayAdPreview({ ad }: DisplayAdPreviewProps) {
  const variant =
    adStyleVariants.find((entry) => entry.id === ad.styleVariantId) ??
    adStyleVariants[0];
  const isDarkVariant = variant.surfaceClassName.includes("text-white");
  const supportLayouts =
    ad.supportingMessages.length === 1
      ? [
          {
            className:
              "left-5 right-5 bottom-4 min-h-[8.5rem] rounded-[999px] px-8 py-8",
            accentClassName: "bg-[#F4346F]/72",
          },
        ]
      : ad.supportingMessages.length === 2
        ? [
            {
              className:
                "left-4 bottom-4 min-h-[8.75rem] w-[15.5rem] rounded-[999px] px-7 py-7",
              accentClassName: "bg-[#F4346F]/72",
            },
            {
              className:
                "right-4 bottom-9 min-h-[6.25rem] w-[12rem] rounded-[999px] px-6 py-5",
              accentClassName: "bg-[#5085F7]/72",
            },
          ]
        : [
            {
              className:
                "left-4 bottom-4 min-h-[8.25rem] w-[14.5rem] rounded-[999px] px-7 py-7",
              accentClassName: "bg-[#F4346F]/72",
            },
            {
              className:
                "right-5 bottom-14 min-h-[5.75rem] w-[11rem] rounded-[999px] px-5 py-4",
              accentClassName: "bg-[#5085F7]/72",
            },
            {
              className:
                "right-8 bottom-1 min-h-[4.8rem] w-[9rem] rounded-[999px] px-5 py-4",
              accentClassName: isDarkVariant ? "bg-white/30" : "bg-[#0D1527]/18",
            },
          ];

  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-[1.75rem] border border-black/5 p-7 shadow-[0_24px_80px_-40px_rgba(13,21,39,0.45)] ${variant.surfaceClassName}`}
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
          <div className="h-6" />
          <Image
            src={variant.logoSrc}
            width={variant.logoWidth}
            height={variant.logoHeight}
            alt="Digiexam"
            className="opacity-95"
            style={{ height: "24px", width: "auto" }}
          />
        </div>

        <div className="mt-8 flex-1">
          <h3
            className={`max-w-[9ch] text-[3.15rem] leading-[0.94] font-semibold tracking-[-0.04em] sm:text-[3.45rem] ${variant.headlineClassName}`}
          >
            {ad.headline}
          </h3>
        </div>

        <div className="relative mt-auto h-[11.5rem]">
          {ad.supportingMessages.map((message, index) => (
            <div
              key={message}
              className={`absolute overflow-hidden backdrop-blur-[3px] ${supportLayouts[index]?.className ?? supportLayouts[0].className} ${
                variant.supportSurfaceClassName
              } ${
                isDarkVariant
                  ? "border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_40px_-24px_rgba(0,0,0,0.45)]"
                  : "border border-[#0D1527]/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_12px_40px_-24px_rgba(13,21,39,0.22)]"
              }`}
            >
              <div
                aria-hidden="true"
                className={`absolute -left-3 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full blur-sm ${
                  supportLayouts[index]?.accentClassName ??
                  supportLayouts[0].accentClassName
                }`}
              />
              <p
                className={`relative max-w-[12ch] text-[1.3rem] leading-[1.03] font-bold tracking-[-0.03em] ${variant.supportingClassName}`}
              >
                {message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
