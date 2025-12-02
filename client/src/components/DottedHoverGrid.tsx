import React, { useRef, useEffect } from "react";

export default function DottedHoverGrid({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  let ticking = false;

  useEffect(() => {
    // Find the parent section
    const section = ref.current?.closest("section") as HTMLElement;
    if (!section) return;

    // Initialize CSS variables
    section.style.setProperty("--x", "-1000px");
    section.style.setProperty("--y", "-1000px");

    // Attach mouse event listeners to document to capture all mouse movements
    // This ensures we capture mouse movements even when over navbar, text, buttons, etc.
    const updatePos = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      // Calculate position relative to the section (for the grid background)
      const x = e.clientX - sectionRect.left;
      const y = e.clientY - sectionRect.top;

      // Calculate position relative to viewport (for overlay that covers navbar)
      const viewportX = e.clientX;
      const viewportY = e.clientY;

      // Show effect if mouse is within the section bounds
      const isOverSection =
        x >= 0 && x <= sectionRect.width && y >= 0 && y <= sectionRect.height;

      if (isOverSection) {
        if (!ticking) {
          requestAnimationFrame(() => {
            // For section-based grid, use section-relative coordinates
            section.style.setProperty("--x", `${x}px`);
            section.style.setProperty("--y", `${y}px`);
            if (ref.current) {
              ref.current.style.setProperty("--x", `${x}px`);
              ref.current.style.setProperty("--y", `${y}px`);
            }
            // For overlay, use section-relative coordinates to align with grid background
            // Since overlay is now absolute within section, it scrolls with the grid
            if (overlayRef.current && isOverSection) {
              overlayRef.current.style.setProperty("--x", `${x}px`);
              overlayRef.current.style.setProperty("--y", `${y}px`);
            }
            ticking = false;
          });
          ticking = true;
        }
      } else {
        // Hide effect when outside section and navbar
        clearPos();
      }
    };

    const clearPos = () => {
      section.style.setProperty("--x", "-1000px");
      section.style.setProperty("--y", "-1000px");
      if (ref.current) {
        ref.current.style.setProperty("--x", "-1000px");
        ref.current.style.setProperty("--y", "-1000px");
      }
      if (overlayRef.current) {
        overlayRef.current.style.setProperty("--x", "-1000px");
        overlayRef.current.style.setProperty("--y", "-1000px");
      }
    };

    // Listen to document mousemove to capture events over navbar too
    document.addEventListener("mousemove", updatePos);
    // Also listen to section mouseleave as a fallback
    section.addEventListener("mouseleave", clearPos);

    return () => {
      document.removeEventListener("mousemove", updatePos);
      section.removeEventListener("mouseleave", clearPos);
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`grid-bg w-full overflow-x-hidden ${className}`}
      >
        {children}
      </div>
      <div
        ref={overlayRef}
        className="grid-hover-overlay absolute inset-0 pointer-events-none z-5"
        style={
          {
            "--x": "-1000px",
            "--y": "-1000px",
          } as React.CSSProperties
        }
      />
    </>
  );
}
