"use client";

type Direction = "left" | "right";

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

const ROW_1: TickerItem[] = [
  { symbol: "AAPL", price: "234.56", change: "+1.24%", up: true },
  { symbol: "MSFT", price: "428.90", change: "-0.34%", up: false },
  { symbol: "GOOGL", price: "175.23", change: "+2.11%", up: true },
  { symbol: "AMZN", price: "189.45", change: "+0.87%", up: true },
  { symbol: "NVDA", price: "138.67", change: "+3.45%", up: true },
  { symbol: "META", price: "566.78", change: "+0.98%", up: true },
  { symbol: "TSLA", price: "342.12", change: "-1.22%", up: false },
  { symbol: "BRK.B", price: "456.12", change: "+0.15%", up: true },
];

const ROW_2: TickerItem[] = [
  { symbol: "SPY", price: "587.23", change: "+0.45%", up: true },
  { symbol: "QQQ", price: "503.11", change: "+0.67%", up: true },
  { symbol: "VTI", price: "289.34", change: "+0.55%", up: true },
  { symbol: "DIA", price: "431.89", change: "+0.21%", up: true },
  { symbol: "IWM", price: "231.44", change: "-0.28%", up: false },
  { symbol: "VOO", price: "534.12", change: "+0.44%", up: true },
  { symbol: "VXUS", price: "62.87", change: "+0.19%", up: true },
  { symbol: "SCHD", price: "28.44", change: "+0.32%", up: true },
];

const ROW_3: TickerItem[] = [
  { symbol: "JPM", price: "234.56", change: "+0.89%", up: true },
  { symbol: "V", price: "306.45", change: "+1.12%", up: true },
  { symbol: "MA", price: "528.67", change: "+0.76%", up: true },
  { symbol: "JNJ", price: "167.23", change: "+0.34%", up: true },
  { symbol: "WMT", price: "94.31", change: "-0.11%", up: false },
  { symbol: "PG", price: "173.45", change: "+0.62%", up: true },
  { symbol: "KO", price: "68.92", change: "+0.28%", up: true },
  { symbol: "DIS", price: "112.34", change: "+1.55%", up: true },
];

const ROW_4: TickerItem[] = [
  { symbol: "COIN", price: "312.44", change: "+4.12%", up: true },
  { symbol: "HOOD", price: "34.55", change: "+2.87%", up: true },
  { symbol: "PLTR", price: "78.23", change: "+3.66%", up: true },
  { symbol: "AMD", price: "144.11", change: "+2.03%", up: true },
  { symbol: "NFLX", price: "789.23", change: "+0.98%", up: true },
  { symbol: "COST", price: "912.44", change: "+0.34%", up: true },
  { symbol: "UNH", price: "612.87", change: "-0.55%", up: false },
  { symbol: "XOM", price: "119.23", change: "+0.72%", up: true },
];

function Row({ items, duration, direction }: { items: TickerItem[]; duration: number; direction: Direction }) {
  const animationName = direction === "left" ? "ticker-left" : "ticker-right";
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap py-2">
      <div
        className="inline-flex items-center gap-8"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span key={`${item.symbol}-${i}`} className="inline-flex items-center gap-2 font-heading font-semibold text-[15px] md:text-[17px] tracking-wide">
            <span className="text-white/70">{item.symbol}</span>
            <span className="text-white/45 tabular-nums">{item.price}</span>
            <span className={`tabular-nums ${item.up ? "text-bg-green" : "text-gold-lt"}`}>
              {item.up ? "▲" : "▼"} {item.change.replace(/^[+-]/, "")}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StockTickerHero() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-dg-deep">
      {/* base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(76,175,80,.28), transparent 55%), linear-gradient(135deg, #0E3B14 0%, #082B0E 100%)",
        }}
      />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[.10]"
        style={{
          backgroundImage:
            "linear-gradient(#4CAF50 1px, transparent 1px), linear-gradient(90deg, #4CAF50 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ticker rows */}
      <div className="absolute inset-0 flex flex-col justify-around opacity-[.55]">
        <Row items={ROW_1} duration={45} direction="left" />
        <Row items={ROW_2} duration={70} direction="right" />
        <Row items={ROW_3} duration={55} direction="left" />
        <Row items={ROW_4} duration={80} direction="right" />
      </div>

      {/* fade edges for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14,59,20,.9) 0%, rgba(14,59,20,0) 12%, rgba(14,59,20,0) 88%, rgba(14,59,20,.9) 100%)",
        }}
      />

      {/* bottom fade so text reads clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,59,20,.55) 0%, rgba(14,59,20,.15) 40%, rgba(14,59,20,.55) 100%)",
        }}
      />
    </div>
  );
}
