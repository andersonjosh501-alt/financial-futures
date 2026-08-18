"use client";

import { useEffect, useMemo, useRef } from "react";

type Node = { id: number; x: number; y: number; r: number };
type Edge = { a: number; b: number };

const BASE_NODES: Node[] = [
  { id: 0, x: 90, y: 60, r: 4 },
  { id: 1, x: 190, y: 150, r: 5 },
  { id: 2, x: 260, y: 55, r: 4 },
  { id: 3, x: 340, y: 195, r: 3.5 },
  { id: 4, x: 420, y: 95, r: 6 },
  { id: 5, x: 510, y: 180, r: 4 },
  { id: 6, x: 580, y: 50, r: 3.5 },
  { id: 7, x: 640, y: 140, r: 5 },
  { id: 8, x: 720, y: 210, r: 4 },
  { id: 9, x: 780, y: 80, r: 6 },
  { id: 10, x: 860, y: 165, r: 4 },
  { id: 11, x: 940, y: 60, r: 5 },
  { id: 12, x: 990, y: 200, r: 3.5 },
  { id: 13, x: 1050, y: 110, r: 4 },
  { id: 14, x: 1130, y: 175, r: 4 },
  { id: 15, x: 1160, y: 60, r: 3.5 },
  { id: 16, x: 30, y: 180, r: 3.5 },
  { id: 17, x: 470, y: 40, r: 3.5 },
];

const CONNECT_DISTANCE = 180;

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

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    function handleMove(e: MouseEvent) {
      const rect = svg!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 1200;
      const y = ((e.clientY - rect.top) / rect.height) * 240;
      const glow = svg!.querySelector<SVGCircleElement>("#netMouseGlow");
      if (glow) {
        glow.setAttribute("cx", String(x));
        glow.setAttribute("cy", String(y));
        glow.setAttribute("opacity", "1");
      }
    }

    function handleLeave() {
      const glow = svg!.querySelector<SVGCircleElement>("#netMouseGlow");
      if (glow) glow.setAttribute("opacity", "0");
    }

    svg.addEventListener("mousemove", handleMove);
    svg.addEventListener("mouseleave", handleLeave);
    return () => {
      svg.removeEventListener("mousemove", handleMove);
      svg.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 240"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-auto"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="netMouseGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#4CAF50" stopOpacity=".35" />
          <stop offset="1" stopColor="#4CAF50" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="netNodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#D9A81F" stopOpacity=".55" />
          <stop offset="1" stopColor="#D9A81F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle id="netMouseGlow" cx="600" cy="120" r="150" fill="url(#netMouseGlowGrad)" opacity="0" style={{ transition: "opacity 0.4s" }} />

      <g stroke="#B8860B" strokeWidth="1" opacity=".28">
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
