import classnames from "classnames";
import { Text } from "react-native";

function mapSizeToClassName(size: string) {
  switch (size) {
    case "5xl":
      return "text-5xl";
    case "4xl":
      return "text-4xl";
    case "3xl":
      return "text-3xl";
    case "2xl":
      return "text-2xl";
    case "xl":
      return "text-xl";
    default:
      return "text-4xl";
  }
}

function Heading({
  text,
  size = "4xl",
  variant = "title",
  color = "dark",
  className,
}: {
  text: string;
  size?: "5xl" | "4xl" | "3xl" | "2xl" | "xl";
  color?: "light" | "neutral" | "dark" | "black" | "white";
  variant?: "title" | "subtitle";
  className?: string;
}) {
  return (
    <Text
      className={classnames(
        color === "light"
          ? "text-light"
          : color === "dark"
            ? "text-dark"
            : color === "white"
              ? "text-white"
              : color === "neutral"
                ? "text-neutral-content"
                : "text-black",
        mapSizeToClassName(size),
        variant === "title"
          ? "font-bold"
          : "tracking-wide font-semibold",
        className,
      )}
    >
      {text}
    </Text>
  );
}

export default Heading;
