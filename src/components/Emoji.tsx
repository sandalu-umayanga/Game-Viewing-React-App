import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: { label: string; ariaLabel: string } } = {
    3: { label: "😐", ariaLabel: "meh" },
    4: { label: "👍", ariaLabel: "recommended" },
    5: { label: "🎯", ariaLabel: "exceptional" },
  };

  const emoji = emojiMap[rating];

  return (
    <Text fontSize="25px" marginTop={1} aria-label={emoji.ariaLabel} role="img">
      {emoji.label}
    </Text>
  );
};

export default Emoji;
