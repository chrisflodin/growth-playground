import { adStyleVariants } from "@/lib/brand-theme";
import type { GeneratedDisplayAd } from "@/lib/generate-display-ads";
import Image from "next/image";

type DisplayAdPreviewProps = {
  ad: GeneratedDisplayAd;
};

function splitHeadline(headline: string) {
  if (headline === "Canvas LMS. Now With Security.") {
    return {
      leadLine: "Canvas LMS.",
      accentLine: "Now With Security.",
    };
  }

  const words = headline.trim().split(/\s+/);

  if (words.length <= 3) {
    return {
      leadLine: headline,
      accentLine: "",
    };
  }

  const splitIndex = Math.max(2, Math.ceil(words.length / 2));

  return {
    leadLine: words.slice(0, splitIndex).join(" "),
    accentLine: words.slice(splitIndex).join(" "),
  };
}

export function DisplayAdPreview({ ad }: DisplayAdPreviewProps) {
  const variant =
    adStyleVariants.find((entry) => entry.id === ad.styleVariantId) ??
    adStyleVariants[0];
  const isDarkVariant = variant.surfaceClassName.includes("text-white");
  const usesRightStackedSupports = ad.groupId === "better-lockdown-browser";
  const { leadLine, accentLine } = splitHeadline(ad.headline);
  const supportPills = ad.supportingMessages.slice(0, 3);
  const floatingSupportLayouts = [
    { className: "right-5 bottom-35 w-[7.2rem]", zIndex: 12 },
    { className: "right-16 bottom-15 w-[7.8rem]", zIndex: 11 },
    { className: "right-3 top-[2.9rem] w-[6.8rem]", zIndex: 20 },
  ];
  const leftAlignedSupportLayouts = [
    "left-4 top-1 max-w-[11.5rem]",
    "left-9 top-[4.4rem] max-w-[10.75rem]",
    "right-3 top-[7rem] max-w-[10rem]",
  ];
  const eyebrowClassName = isDarkVariant ? "text-white/70" : "text-[#55657A]";
  const bodyClassName = isDarkVariant ? "text-white/80" : "text-[#48596E]";
  const pillSurfaceClassName = isDarkVariant
    ? "border border-white/10 bg-white/6 text-white/88 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.55)]"
    : "border border-[#0D1527]/8 bg-white/82 text-[#203149] shadow-[0_18px_40px_-28px_rgba(13,21,39,0.22)]";
  const ctaClassName = isDarkVariant
    ? "border border-[#86AFFF]/25 bg-[#5085F7] text-white shadow-[0_16px_30px_-18px_rgba(80,133,247,0.95)]"
    : "border border-[#7BA5FF]/35 bg-[#5085F7] text-white shadow-[0_16px_30px_-20px_rgba(80,133,247,0.72)]";

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

      <div className="relative z-10 flex h-full flex-col px-2 pb-2">
        <div className="flex justify-start pl-4">
          <Image
            src={variant.logoSrc}
            width={variant.logoWidth}
            height={variant.logoHeight}
            alt="Digiexam"
            className="opacity-95"
            style={{ height: "24px", width: "auto" }}
          />
        </div>

        <div className="mt-7 px-4 text-left">
          <p
            className={`text-[0.72rem] font-medium tracking-[0.18em] uppercase ${eyebrowClassName}`}
          >
            Digiexam Lockdown
          </p>
          <h3
            className={`mt-3 max-w-[13ch] text-[3rem] leading-[0.94] font-semibold tracking-[-0.05em] sm:text-[3.25rem] ${variant.headlineClassName}`}
          >
            <span className="block">{leadLine}</span>
            {accentLine ? (
              <span className="mt-1 block whitespace-nowrap text-[#F4346F]">
                {accentLine}
              </span>
            ) : null}
          </h3>
          {ad.subtitle ? (
            <p
              className={`mt-3 max-w-[26ch] text-[1.02rem] leading-[1.15] ${bodyClassName}`}
            >
              {ad.subtitle}
            </p>
          ) : null}
          <div className={`${ad.subtitle ? "mt-5" : "mt-4"} flex justify-start`}>
            <div
              className={`inline-flex min-h-11 items-center rounded-[0.95rem] px-6 text-[0.98rem] font-medium ${ctaClassName}`}
            >
              Book a demo now
            </div>
          </div>
        </div>

        <div
          className={`relative mt-auto ${
            usesRightStackedSupports
              ? "min-h-[12.5rem] pt-4"
              : "min-h-[12.5rem] pt-4"
          }`}
        >
          {usesRightStackedSupports ? (
            <div className="absolute right-3 bottom-10 z-10 h-[7.25rem] w-[15.5rem]">
              {supportPills.map((message, index) => (
                <div
                  key={message}
                  className={`absolute overflow-hidden rounded-[1rem] px-3 py-2.5 text-[0.82rem] leading-[1.1] font-medium backdrop-blur-[4px] ${pillSurfaceClassName} ${
                    (
                      floatingSupportLayouts[index] ??
                      floatingSupportLayouts[floatingSupportLayouts.length - 1]
                    ).className
                  }`}
                  style={{
                    zIndex:
                      (
                        floatingSupportLayouts[index] ??
                        floatingSupportLayouts[floatingSupportLayouts.length - 1]
                      ).zIndex,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1.5 ${index === 1 ? "bg-[#5085F7]" : "bg-[#F4346F]"}`}
                  />
                  <p className="relative pl-1">{message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="absolute inset-x-0 bottom-0 z-10 h-[11.5rem]">
              {supportPills.map((message, index) => (
                <div
                  key={message}
                  className={`absolute overflow-hidden rounded-[1.15rem] px-4 py-3 text-[1rem] leading-[1.18] font-medium backdrop-blur-[4px] ${pillSurfaceClassName} ${
                    leftAlignedSupportLayouts[index] ?? leftAlignedSupportLayouts[leftAlignedSupportLayouts.length - 1]
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1.5 ${index === 1 ? "bg-[#5085F7]" : "bg-[#F4346F]"}`}
                  />
                  <p className="relative pl-1">{message}</p>
                </div>
              ))}
            </div>
          )}
          <div
            aria-hidden="true"
            className="absolute right-8 bottom-2 h-28 w-28 rounded-full bg-[#F4346F]/50 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute right-14 top-10 h-20 w-20 rounded-full bg-[#5085F7]/40 blur-xl"
          />
          <div
            aria-hidden="true"
            className={`absolute right-8 bottom-4 h-[8.5rem] w-[11.5rem] rounded-[2rem] border ${
              isDarkVariant ? "border-white/8 bg-white/4" : "border-[#0D1527]/8 bg-white/35"
            } backdrop-blur-[4px]`}
          />
          <div
            aria-hidden="true"
            className={`absolute right-0 bottom-0 h-[9rem] w-[9rem] rounded-full ${
              isDarkVariant ? "border border-white/10" : "border border-[#0D1527]/8"
            }`}
          />
          <div
            aria-hidden="true"
            className={`absolute right-20 top-8 h-[5rem] w-[5rem] rounded-full ${
              isDarkVariant ? "border border-white/10" : "border border-[#0D1527]/8"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
