"use client";

import { useEffect, useMemo, useRef } from "react";

type Node = { id: number; x: number; y: number; r: number };
type Edge = { a: number; b: number };

// Nodes distributed across a tall canvas.
// Two "clear zones" are respected for heading readability:
//   H1  (left-aligned):  x 30-700,  y 85-215
//   H2  (centered):      x 400-800, y 420-500
// Nodes surround these zones on all sides.
const BASE_NODES: Node[] = [
  // Above the H1 (y = 15-75) — denser on the left to fill the corner
  { id: 0, x: 20, y: 20, r: 3 },
  { id: 1, x: 90, y: 55, r: 4 },
  { id: 2, x: 180, y: 25, r: 3.5 },
  { id: 3, x: 260, y: 65, r: 3.5 },
  { id: 4, x: 350, y: 30, r: 4 },
  { id: 5, x: 460, y: 55, r: 3.5 },
  { id: 6, x: 560, y: 25, r: 3.5 },
  { id: 7, x: 650, y: 60, r: 4 },
  { id: 8, x: 750, y: 25, r: 3.5 },
  { id: 9, x: 890, y: 55, r: 5 },
  { id: 10, x: 1020, y: 25, r: 4 },
  { id: 11, x: 1130, y: 50, r: 3.5 },
  { id: 12, x: 1180, y: 20, r: 3 },

  // Right of the H1 (x = 720-1200, y = 90-210)
  { id: 13, x: 760, y: 130, r: 4 },
  { id: 14, x: 850, y: 95, r: 6 },
  { id: 15, x: 910, y: 180, r: 4 },
  { id: 16, x: 1000, y: 115, r: 5 },
  { id: 17, x: 1080, y: 195, r: 4 },
  { id: 18, x: 1160, y: 165, r: 3.5 },

  // Left margin — hugs the edge beside the H1
  { id: 19, x: 20, y: 105, r: 3 },
  { id: 20, x: 22, y: 175, r: 3.5 },

  // Just below the H1 underline (y = 230-265)
  { id: 21, x: 70, y: 245, r: 3.5 },
  { id: 22, x: 250, y: 260, r: 4 },
  { id: 23, x: 430, y: 245, r: 3.5 },
  { id: 24, x: 610, y: 265, r: 3.5 },

  // Descending transition band (y = 285-360) — denser
  { id: 25, x: 40, y: 310, r: 3 },
  { id: 26, x: 150, y: 325, r: 4 },
  { id: 27, x: 240, y: 285, r: 3 },
  { id: 28, x: 330, y: 300, r: 3.5 },
  { id: 29, x: 420, y: 350, r: 3 },
  { id: 30, x: 500, y: 335, r: 3.5 },
  { id: 31, x: 600, y: 305, r: 3.5 },
  { id: 32, x: 680, y: 340, r: 4 },
  { id: 33, x: 780, y: 300, r: 3 },
  { id: 34, x: 830, y: 345, r: 3.5 },
  { id: 35, x: 920, y: 320, r: 3 },
  { id: 36, x: 990, y: 300, r: 4 },
  { id: 37, x: 1070, y: 350, r: 3 },
  { id: 38, x: 1130, y: 335, r: 3.5 },

  // Between the transition band and the lower band (y = 375-415)
  { id: 39, x: 90, y: 400, r: 3 },
  { id: 40, x: 240, y: 385, r: 3.5 },
  { id: 41, x: 370, y: 405, r: 3 },

  // Lower band — outside the centered H2 clear zone (x 400-800)
  { id: 42, x: 60, y: 465, r: 3 },
  { id: 43, x: 160, y: 445, r: 3.5 },
  { id: 44, x: 260, y: 505, r: 3 },
  { id: 45, x: 340, y: 460, r: 3.5 },
  { id: 46, x: 880, y: 465, r: 3.5 },
  { id: 47, x: 970, y: 445, r: 3 },
  { id: 48, x: 1060, y: 500, r: 3.5 },
  { id: 49, x: 1150, y: 445, r: 3 },
];

const CONNECT_DISTANCE = 260;

function computeEdges(nodes: Node[]): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.hypot(dx, dy) <= CONNECT_DISTANCE) {
        edges.push({ a: nodes[i].id, b: nodes[j].id });
      }
    }
  }
  return edges;
}

const VIEW_W = 1200;
const VIEW_H = 560;

export default function NetworkHero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const edges = useMemo(() => computeEdges(BASE_NODES), []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodeEls = Array.from(svg.querySelectorAll<SVGCircleElement>(".net-node"));
    const edgeEls = Array.from(svg.querySelectorAll<SVGLineElement>(".net-edge"));
    let frame = 0;
    let t = 0;

    function tick() {
      t += 0.006;
      const positions = BASE_NODES.map((n, i) => ({
        x: n.x + Math.sin(t + i * 0.9) * 4.5,
        y: n.y + Math.cos(t * 0.85 + i * 1.3) * 4.5,
      }));

      nodeEls.forEach((el, i) => {
        el.setAttribute("cx", String(positions[i].x));
        el.setAttribute("cy", String(positions[i].y));
      });

      edgeEls.forEach((el, i) => {
        const edge = edges[i];
        const p1 = positions[edge.a];
        const p2 = positions[edge.b];
        el.setAttribute("x1", String(p1.x));
        el.setAttribute("y1", String(p1.y));
        el.setAttribute("x2", String(p2.x));
        el.setAttribute("y2", String(p2.y));
      });

      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [edges]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMin slice"
      className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="netNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D9A81F" stopOpacity=".55" />
          <stop offset="1" stopColor="#D9A81F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="#B8860B" strokeWidth="1" opacity=".26">
        {edges.map((e, i) => {
          const a = BASE_NODES[e.a];
          const b = BASE_NODES[e.b];
          return (
            <line
              key={i}
              className="net-edge"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              strokeLinecap="round"
            />
          );
        })}
      </g>

      <g>
        {BASE_NODES.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.r * 3} fill="url(#netNodeGlow)" />
            <circle
              className="net-node"
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="#B8860B"
              stroke="#F0DFA6"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
