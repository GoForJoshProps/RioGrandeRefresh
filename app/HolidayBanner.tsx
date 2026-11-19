"use client";

import { useEffect, useState } from "react";

// Reusable seasonal display: add future holidays here without editing the website layout.
// Dates use the visitor's local calendar and the banner disappears automatically.
const holidays = [
  {
    id: "thanksgiving-2026",
    start: "2026-11-18",
    end: "2026-11-27",
    title: "Happy Thanksgiving",
    message: "From Rio Grande Refresh — grateful for the New Mexico businesses and teams we serve.",
    symbols: "🍂 🦃 🍁",
  },
];

export default function HolidayBanner() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const now = new Date();
    const local = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    setToday(local);
  }, []);
  const holiday = holidays.find((item) => today && today >= item.start && today <= item.end);
  if (!holiday) return null;

  return (
    <>
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" style={{ contain: "layout style" }}>
      {Array.from({ length: 21 }, (_, i) => (
        <span key={i} className="holiday-falling-leaf absolute top-0 select-none" style={{ left: `${(i * 37 + 11) % 100}%`, fontSize: `${i < 16 ? 29 + (i % 4) * 6 : 34 + ((i - 16) % 3) * 7}px`, opacity: 0.65 + (i % 3) * 0.1, animationDuration: `${11 + (i % 6) * 2.2 + (i >= 16 ? 3 : 0)}s`, animationDelay: `${-i * 2.7}s`, ["--leaf-drift" as string]: `${(i % 2 ? -1 : 1) * (35 + i * 9)}px`, ["--leaf-rotate" as string]: `${(i % 2 ? -1 : 1) * (280 + i * 29)}deg` }}>
          {i < 16 ? ["🍁", "🍂", "🍁", "🍂"][i % 4] : ["🍃", "🍂", "🍁", "🍃", "🍂"][i - 16]}
        </span>
      ))}
    </div>
    <style>{`
      @keyframes holidayLeafFall {
        0% { transform: translate3d(0, -12vh, 0) rotate(0deg); }
        50% { transform: translate3d(calc(var(--leaf-drift) * 0.65), 50vh, 0) rotate(calc(var(--leaf-rotate) * 0.55)); }
        100% { transform: translate3d(var(--leaf-drift), 112vh, 0) rotate(var(--leaf-rotate)); }
      }
      .holiday-falling-leaf { animation-name: holidayLeafFall; animation-timing-function: linear; animation-iteration-count: infinite; will-change: transform; }
      @media (prefers-reduced-motion: reduce) { .holiday-falling-leaf { display: none; } }
    `}</style>
    <aside aria-label={holiday.title} className="relative overflow-hidden border-y border-orange-300/30 bg-gradient-to-r from-[#572b20] via-[#8e4c27] to-[#572b20] px-4 py-3 text-center text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, #f7b85d 0, transparent 28%), radial-gradient(circle at 85% 50%, #f7b85d 0, transparent 28%)" }} />
      <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <span aria-hidden="true" className="text-xl">{holiday.symbols}</span>
        <strong className="text-base font-extrabold tracking-wide sm:text-lg">{holiday.title}!</strong>
        <span className="text-sm text-orange-50">{holiday.message}</span>
        <span aria-hidden="true" className="text-xl">{holiday.symbols}</span>
      </div>
    </aside>
    </>
  );
}
