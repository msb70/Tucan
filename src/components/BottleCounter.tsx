"use client";
import { useEffect, useState } from "react";

interface BottleCounterProps {
  remaining: number;
  total: number;
  lang: "es" | "en";
  large?: boolean;
}

export default function BottleCounter({ remaining, total, lang, large = false }: BottleCounterProps) {
  const [count, setCount] = useState(0);
  const percent = (remaining / total) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= remaining) {
            clearInterval(interval);
            return remaining;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 200);
    return () => clearTimeout(timer);
  }, [remaining]);

  return (
    <div className={`${large ? "py-2" : ""}`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className={`${large ? "text-sm" : "text-xs"} text-[#F2E3C6]/50`}>
          {lang === "es" ? "Botellas restantes" : "Remaining bottles"}
        </span>
        <span
          className={`font-display counter-pulse ${large ? "text-2xl" : "text-base"} text-[#E86A17]`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {count} / {total}
        </span>
      </div>
      <div className="w-full bg-[#0D0F14] rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${percent}%`,
            background: percent > 50
              ? "linear-gradient(90deg, #3F6B2A, #D9A320)"
              : percent > 20
              ? "linear-gradient(90deg, #D9A320, #E86A17)"
              : "linear-gradient(90deg, #A92118, #E86A17)",
          }}
        />
      </div>
    </div>
  );
}
