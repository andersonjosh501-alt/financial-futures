"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground({ tall = true }: { tall?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const viewBox = tall ? "0 0 1200 620" : "0 0 1200 240";

  useEffect(() => {
    if (!tall) return;
    const svg = svgRef.current;
    if (!svg) return;

    const dots = svg.querySelectorAll<SVGCircleElement>(".float-dot");
    let frame: number;
    let t = 0;

    function animate() {
      t += 0.012;
      dots.forEach((dot, i) => {
        const baseY = parseFloat(dot.dataset.baseY || "0");
        const offset = Math.sin(t + i * 1.8) * 10;
        dot.setAttribute("cy", String(baseY + offset));
      });
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [tall]);

  useEffect(() => {
    if (!tall) return;
    const svg = svgRef.current;
    if (!svg) return;

    function handleMove(e: MouseEvent) {
      const rect = svg!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 1200;
      const y = ((e.clientY - rect.top) / rect.height) * 620;
      const glow = svg!.querySelector<SVGCircleElement>("#mouseGlow");
      if (glow) {
        glow.setAttribute("cx", String(x));
        glow.setAttribute("cy", String(y));
        glow.setAttribute("opacity", "1");
      }
    }

    function handleLeave() {
      const glow = svg!.querySelector<SVGCircleElement>("#mouseGlow");
      if (glow) glow.setAttribute("opacity", "0");
    }

    svg.addEventListener("mousemove", handleMove);
    svg.addEventListener("mouseleave", handleLeave);
    return () => {
      svg.removeEventListener("mousemove", handleMove);
      svg.removeEventListener("mouseleave", handleLeave);
    };
  }, [tall]);

  return (
    <svg
      ref={svgRef}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0E3B14" />
          <stop offset=".55" stopColor="#0E3B14" />
          <stop offset="1" stopColor="#082B0E" />
        </linearGradient>
        <radialGradient id="heroGlow" cx=".82" cy=".16" r=".7">
          <stop offset="0" stopColor="#4CAF50" stopOpacity=".38" />
          <stop offset="1" stopColor="#4CAF50" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4CAF50" stopOpacity=".28" />
          <stop offset="1" stopColor="#4CAF50" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroLine" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4CAF50" />
          <stop offset="1" stopColor="#6FCF73" />
        </linearGradient>
        {tall && (
          <radialGradient id="mouseGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#4CAF50" stopOpacity=".18" />
            <stop offset="1" stopColor="#4CAF50" stopOpacity="0" />
          </radialGradient>
        )}
      </defs>
      <rect width="1200" height={tall ? 620 : 240} fill="url(#heroBg)" />
      <rect width="1200" height={tall ? 620 : 240} fill="url(#heroGlow)" />
      <g stroke="#4CAF50" strokeWidth="1" opacity=".10">
        {tall ? (
          <path d="M0 155h1200M0 310h1200M0 465h1200M200 0v620M400 0v620M600 0v620M800 0v620M1000 0v620" />
        ) : (
          <path d="M0 80h1200M0 160h1200M300 0v240M600 0v240M900 0v240" />
        )}
      </g>
      {tall ? (
        <>
          <path
            d="M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140 L1200 620 L0 620 Z"
            fill="url(#heroArea)"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140 L1200 620 L0 620 Z;
                M0 490 C170 460 250 430 380 420 C520 410 560 340 710 330 C860 320 900 210 1050 165 C1120 153 1170 140 1200 130 L1200 620 L0 620 Z;
                M0 510 C170 480 250 410 380 440 C520 450 560 320 710 310 C860 300 900 190 1050 180 C1120 170 1170 160 1200 150 L1200 620 L0 620 Z;
                M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140 L1200 620 L0 620 Z
              "
            />
          </path>
          <path
            d="M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140"
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1600"
            style={{ animation: "ffrise 2.4s ease-out forwards" }}
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140;
                M0 490 C170 460 250 430 380 420 C520 410 560 340 710 330 C860 320 900 210 1050 165 C1120 153 1170 140 1200 130;
                M0 510 C170 480 250 410 380 440 C520 450 560 320 710 310 C860 300 900 190 1050 180 C1120 170 1170 160 1200 150;
                M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140
              "
            />
          </path>
          <circle className="float-dot" data-base-y="430" cx="380" cy="430" r="7" fill="#B8860B" stroke="#F0DFA6" strokeWidth="2" />
          <circle className="float-dot" data-base-y="320" cx="710" cy="320" r="7" fill="#B8860B" stroke="#F0DFA6" strokeWidth="2" />
          <circle className="float-dot" data-base-y="175" cx="1050" cy="175" r="9" fill="#D9A81F" stroke="#fff" strokeWidth="2" />
          <circle id="mouseGlow" cx="600" cy="300" r="180" fill="url(#mouseGlowGrad)" opacity="0" style={{ transition: "opacity 0.4s" }} />
        </>
      ) : (
        <>
          <path
            d="M0 190 C250 170 420 120 640 130 C880 141 980 70 1200 55"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="640" cy="130" r="6" fill="#B8860B" stroke="#F0DFA6" strokeWidth="2" />
          <circle cx="1150" cy="58" r="8" fill="#D9A81F" stroke="#fff" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}
