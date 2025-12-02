// components/HighlightText.tsx

import { motion } from "motion/react";

export default function HighlightText({
  text,
  className = "",
  highlightColor = "primary",
  opacity = 1,
}: {
  text: string;
  className?: string;
  highlightColor?: "primary" | "black";
  opacity?: number;
}) {
  const variants = { rest: { width: "0%" }, hover: { width: "100%" } };

  return (
    <motion.span
      className="relative inline-block cursor-pointer align-baseline"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Base text - always visible, sets the container size */}
      <span
        className={`relative z-10 inline-block text-foreground ${className}`}
        style={{ whiteSpace: "pre-wrap", lineHeight: "inherit" }}
      >
        {text}
      </span>

      {/* Background highlight */}
      <motion.span
        variants={variants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute top-0 bottom-0 left-0 z-0 rounded-sm ${
          highlightColor === "black" ? "bg-black" : "bg-primary"
        }`}
        style={{
          opacity: opacity,
        }}
      />

      {/* Highlighted text overlay - positioned to match base text exactly */}
      <motion.span
        variants={variants}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-0 left-0 z-20 text-left"
        style={{
          height: "100%",
          lineHeight: "inherit",
          overflow: "hidden",
        }}
      >
        <span
          className={`inline-block text-left text-foreground ${className} ${
            highlightColor === "black"
              ? "text-white"
              : "text-primary-foreground"
          }`}
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "inherit",
          }}
        >
          {text}
        </span>
      </motion.span>
    </motion.span>
  );
}
