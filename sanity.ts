interface ContentBlockProps {
  heading?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function ContentBlock({ heading, children, variant = "light" }: ContentBlockProps) {
  const isDark = variant === "dark";
  return (
    <div
      style={{
        border: isDark ? "1px solid rgba(212,170,125,0.25)" : "1px solid rgba(62,95,68,0.18)",
        borderRadius: "0.625rem",
        padding: "1.125rem 1.25rem",
        marginBottom: "0.875rem",
        background: isDark ? "rgba(255,255,255,0.04)" : "var(--surface)",
      }}
    >
      {heading && (
        <h4
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.9375rem",
            fontWeight: 500,
            color: isDark ? "var(--sandy-clay)" : "var(--hunter-green)",
            marginBottom: "0.625rem",
          }}
        >
          {heading}
        </h4>
      )}
      <div
        style={{
          fontSize: "0.875rem",
          color: isDark ? "var(--sand-dune)" : "var(--shadow-grey)",
          lineHeight: 1.8,
          opacity: 0.9,
        }}
      >
        {children}
      </div>
    </div>
  );
}
