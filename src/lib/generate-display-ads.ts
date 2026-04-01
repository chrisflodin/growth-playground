import { adStyleVariants } from "@/lib/brand-theme";
import { adRules, messageGroups, unusedMessages } from "@/lib/display-ads-config";

export type GeneratedDisplayAd = {
  id: string;
  headline: string;
  subtitle: string | null;
  supportingMessages: string[];
  groupId: string;
  groupTitle: string;
  prospectContext: string;
  styleVariantId: string;
  globalIndex: number;
};

function pickSupportingMessages(
  supportingMessages: string[],
  startIndex: number,
  count: number
) {
  const uniqueMessages: string[] = [];
  const maxCount = Math.min(count, supportingMessages.length);

  for (let offset = 0; offset < supportingMessages.length; offset += 1) {
    if (uniqueMessages.length === maxCount) {
      break;
    }

    const message =
      supportingMessages[(startIndex + offset) % supportingMessages.length];

    if (!uniqueMessages.includes(message)) {
      uniqueMessages.push(message);
    }
  }

  return uniqueMessages;
}

export function generateDisplayAds(): GeneratedDisplayAd[] {
  return messageGroups.flatMap((group) =>
    group.headlines.map((headline, groupHeadlineIndex) => {
      const availableSupportingMessages = group.supportingMessages.filter(
        (message) =>
          !unusedMessages.some(
            (unusedMessage) =>
              unusedMessage.groupId === group.id &&
              unusedMessage.headline === headline &&
              unusedMessage.message === message
          )
      );
      const globalIndex = messageGroups
        .slice(0, messageGroups.findIndex((entry) => entry.id === group.id))
        .reduce((count, entry) => count + entry.headlines.length, 0) +
        groupHeadlineIndex;

      const supportingCount =
        adRules.supportMessageCountsByAdIndex[
          globalIndex % adRules.supportMessageCountsByAdIndex.length
        ];
      const styleVariantId =
        adRules.styleVariantOrder[
          globalIndex % adRules.styleVariantOrder.length
        ];
      return {
        id: `${group.id}-${groupHeadlineIndex + 1}`,
        headline,
        subtitle: group.subheadline,
        supportingMessages: pickSupportingMessages(
          availableSupportingMessages,
          groupHeadlineIndex,
          Math.min(supportingCount, adRules.maxSupportingMessages)
        ),
        groupId: group.id,
        groupTitle: group.title,
        prospectContext: group.prospectContext,
        styleVariantId:
          adStyleVariants.find((variant) => variant.id === styleVariantId)?.id ??
          adStyleVariants[0].id,
        globalIndex,
      };
    })
  );
}
