export default function HeroBackground({ tall = true }: { tall?: boolean }) {
  const viewBox = tall ? "0 0 1200 620" : "0 0 1200 240";

  return (
    <svg
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
          />
          <path
            d="M0 500 C170 470 250 420 380 430 C520 440 560 330 710 320 C860 310 900 200 1050 175 C1120 163 1170 150 1200 140"
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1600"
            style={{ animation: "ffrise 2.4s ease-out forwards" }}
          />
          <circle cx="380" cy="430" r="7" fill="#B8860B" stroke="#F0DFA6" strokeWidth="2" />
          <circle cx="710" cy="320" r="7" fill="#B8860B" stroke="#F0DFA6" strokeWidth="2" />
          <circle cx="1050" cy="175" r="9" fill="#D9A81F" stroke="#fff" strokeWidth="2" />
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
