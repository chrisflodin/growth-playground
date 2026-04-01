export type MessageGroup = {
  id: string;
  title: string;
  prospectContext: string;
  headlines: string[];
  supportingMessages: string[];
};

export type UnusedMessage = {
  id: string;
  groupId: string;
  headline: string;
  message: string;
};

export const messageGroups: MessageGroup[] = [
  {
    id: "secure-in-canvas",
    title: "Secure assessments in Canvas instead of exam platform",
    prospectContext:
      "The prospect is looking for any secure assessment platforms, not specifically a lockdown browser.",
    headlines: [
      "Secure Assessments in Canvas",
      "Canvas LMS. Now With Security.",
      "The lockdown browser built for Canvas",
    ],
    supportingMessages: [
      "Running secure assessments in Canvas shouldn't be hard.",
      "Keep everything in Canvas",
      "Teacher-eye-roll-free",
    ],
  },
  {
    id: "better-lockdown-browser",
    title: "A better lockdown browser",
    prospectContext:
      "The prospect wants to try Respondus Lockdown Browser, or is already using Lockdown Browser with discontent.",
    headlines: [
      "A lockdown browser that just works",
      "A hassle free lockdown browser",
      "A simpler lockdown browser for Canvas schools",
    ],
    supportingMessages: [
      "Simple to use",
      "Quizzes AND Assignments",
      "Feels native to Canvas",
      "A familiar assessment experience",
      "Running secure assessments in Canvas shouldn't be hard.",
    ],
  },
];

export const unusedMessages: UnusedMessage[] = [
  {
    id: "secure-in-canvas-keep-everything",
    groupId: "secure-in-canvas",
    headline: "Canvas LMS. Now With Security.",
    message: "Keep everything in Canvas",
  },
];

export const adRules = {
  maxSupportingMessages: 3,
  supportMessageCountsByAdIndex: [2, 3, 2, 1, 2, 3],
  styleVariantOrder: [
    "signal-dark",
    "quiet-paper",
    "frame-light",
    "deep-arc",
    "split-focus",
    "corner-beam",
  ],
};
