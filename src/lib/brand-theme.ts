import type { CSSProperties } from "react";

export type AdShape = {
  className: string;
  style: CSSProperties;
};

export type AdStyleVariant = {
  id: string;
  name: string;
  surfaceClassName: string;
  eyebrowClassName: string;
  headlineClassName: string;
  supportingClassName: string;
  backgroundStyle: CSSProperties;
  shapes: AdShape[];
};

export const brandTheme = {
  typography: {
    headlineFont: "Manrope",
    fallbackFont: "Arial",
  },
  palette: {
    darkBlue: "#0D1527",
    white: "#FFFFFF",
    lightGrey: "#F4F4F5",
    blue: "#5085F7",
    lightBlue: "#B6D0FF",
    magenta: "#F4346F",
  },
  gradients: {
    darkBlueToBlue: "linear-gradient(135deg, #0D1527 0%, #5085F7 100%)",
    magentaToDarkBlue: "linear-gradient(135deg, #F4346F 0%, #0D1527 100%)",
    magentaDarkBlueBlue:
      "linear-gradient(145deg, #F4346F 0%, #0D1527 52%, #5085F7 100%)",
  },
};

export const adStyleVariants: AdStyleVariant[] = [
  {
    id: "signal-dark",
    name: "Signal Dark",
    surfaceClassName: "text-white",
    eyebrowClassName: "bg-white/14 text-white/85",
    headlineClassName: "text-white",
    supportingClassName: "text-white/82",
    backgroundStyle: {
      background:
        "radial-gradient(circle at top right, rgba(182, 208, 255, 0.2), transparent 34%), linear-gradient(160deg, #0D1527 0%, #101C39 58%, #274E9D 100%)",
    },
    shapes: [
      {
        className: "rounded-full blur-2xl",
        style: {
          width: "44%",
          height: "44%",
          right: "-6%",
          top: "-5%",
          background:
            "radial-gradient(circle, rgba(182, 208, 255, 0.88) 0%, rgba(80, 133, 247, 0) 70%)",
        },
      },
      {
        className: "rounded-full",
        style: {
          width: "54%",
          height: "54%",
          left: "-16%",
          bottom: "-20%",
          background:
            "linear-gradient(145deg, rgba(244, 52, 111, 0.92) 0%, rgba(13, 21, 39, 0.05) 100%)",
        },
      },
    ],
  },
  {
    id: "quiet-paper",
    name: "Quiet Paper",
    surfaceClassName: "text-[#0D1527]",
    eyebrowClassName: "bg-[#0D1527]/6 text-[#0D1527]/70",
    headlineClassName: "text-[#0D1527]",
    supportingClassName: "text-[#405066]",
    backgroundStyle: {
      background:
        "linear-gradient(180deg, #FFFFFF 0%, #F7F8FB 100%)",
    },
    shapes: [
      {
        className: "rounded-full",
        style: {
          width: "62%",
          height: "62%",
          right: "-22%",
          top: "-18%",
          background:
            "linear-gradient(160deg, rgba(244, 52, 111, 0.12) 0%, rgba(182, 208, 255, 0.42) 100%)",
        },
      },
      {
        className: "rounded-full border border-[#0D1527]/10",
        style: {
          width: "46%",
          height: "46%",
          left: "-18%",
          bottom: "-16%",
          background: "rgba(255,255,255,0.5)",
        },
      },
    ],
  },
  {
    id: "frame-light",
    name: "Frame Light",
    surfaceClassName: "text-[#0D1527]",
    eyebrowClassName: "bg-[#5085F7]/12 text-[#0D1527]/75",
    headlineClassName: "text-[#0D1527]",
    supportingClassName: "text-[#46556A]",
    backgroundStyle: {
      background:
        "linear-gradient(180deg, #F4F4F5 0%, #FFFFFF 100%)",
    },
    shapes: [
      {
        className: "rounded-[2rem] border",
        style: {
          inset: "7%",
          borderColor: "rgba(13, 21, 39, 0.1)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.12) 100%)",
        },
      },
      {
        className: "rounded-full",
        style: {
          width: "26%",
          height: "26%",
          right: "10%",
          bottom: "16%",
          background:
            "linear-gradient(145deg, rgba(80, 133, 247, 0.9) 0%, rgba(182, 208, 255, 0.3) 100%)",
        },
      },
    ],
  },
  {
    id: "deep-arc",
    name: "Deep Arc",
    surfaceClassName: "text-white",
    eyebrowClassName: "bg-white/10 text-white/82",
    headlineClassName: "text-white",
    supportingClassName: "text-white/80",
    backgroundStyle: {
      background:
        "linear-gradient(180deg, #0D1527 0%, #18284B 100%)",
    },
    shapes: [
      {
        className: "rounded-full",
        style: {
          width: "84%",
          height: "84%",
          left: "-44%",
          top: "-24%",
          border: "1px solid rgba(182, 208, 255, 0.22)",
        },
      },
      {
        className: "rounded-full",
        style: {
          width: "84%",
          height: "84%",
          left: "-35%",
          top: "-15%",
          border: "1px solid rgba(244, 52, 111, 0.24)",
        },
      },
      {
        className: "rounded-full blur-2xl",
        style: {
          width: "40%",
          height: "40%",
          right: "-6%",
          bottom: "8%",
          background:
            "radial-gradient(circle, rgba(244, 52, 111, 0.92) 0%, rgba(244, 52, 111, 0) 74%)",
        },
      },
    ],
  },
  {
    id: "split-focus",
    name: "Split Focus",
    surfaceClassName: "text-[#0D1527]",
    eyebrowClassName: "bg-white/70 text-[#0D1527]/70",
    headlineClassName: "text-[#0D1527]",
    supportingClassName: "text-[#3D4B60]",
    backgroundStyle: {
      background:
        "linear-gradient(145deg, #FFFFFF 0%, #F7F8FB 58%, #EEF3FF 100%)",
    },
    shapes: [
      {
        className: "rounded-[2rem]",
        style: {
          width: "48%",
          height: "82%",
          right: "-8%",
          top: "-14%",
          transform: "rotate(18deg)",
          background:
            "linear-gradient(180deg, rgba(80, 133, 247, 0.22) 0%, rgba(182, 208, 255, 0.62) 100%)",
        },
      },
      {
        className: "rounded-full",
        style: {
          width: "30%",
          height: "30%",
          left: "10%",
          bottom: "10%",
          background:
            "linear-gradient(145deg, rgba(244, 52, 111, 0.88) 0%, rgba(244, 52, 111, 0.08) 100%)",
        },
      },
    ],
  },
  {
    id: "corner-beam",
    name: "Corner Beam",
    surfaceClassName: "text-white",
    eyebrowClassName: "bg-white/12 text-white/84",
    headlineClassName: "text-white",
    supportingClassName: "text-white/78",
    backgroundStyle: {
      background:
        "linear-gradient(135deg, #0D1527 0%, #162546 54%, #5085F7 100%)",
    },
    shapes: [
      {
        className: "rounded-full blur-2xl",
        style: {
          width: "58%",
          height: "58%",
          left: "-16%",
          bottom: "-20%",
          background:
            "radial-gradient(circle, rgba(182, 208, 255, 0.78) 0%, rgba(182, 208, 255, 0) 76%)",
        },
      },
      {
        className: "rounded-[1.5rem]",
        style: {
          width: "38%",
          height: "38%",
          right: "6%",
          top: "10%",
          transform: "rotate(45deg)",
          background:
            "linear-gradient(145deg, rgba(244, 52, 111, 0.82) 0%, rgba(255, 255, 255, 0.08) 100%)",
        },
      },
    ],
  },
];
