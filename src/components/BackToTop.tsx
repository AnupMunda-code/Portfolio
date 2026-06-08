"use client";

export function BackToTop() {
  const handleClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="transition-colors hover:text-accent"
    >
      Back to top ↑
    </button>
  );
}
