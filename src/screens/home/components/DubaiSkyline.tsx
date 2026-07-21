/**
 * Stylized Dubai night skyline (Burj Khalifa centered) drawn as an SVG
 * silhouette — no image asset needed. Sits at the bottom of the hero.
 */
export function DubaiSkyline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 340"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="bld" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1c4a" />
          <stop offset="100%" stopColor="#0b0716" />
        </linearGradient>
        <linearGradient id="burj" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b3aa6" />
          <stop offset="100%" stopColor="#150b2c" />
        </linearGradient>
      </defs>

      {/* back layer buildings */}
      <g fill="url(#bld)" opacity="0.6">
        <rect x="40" y="220" width="70" height="120" />
        <rect x="130" y="180" width="54" height="160" />
        <rect x="210" y="240" width="80" height="100" />
        <rect x="320" y="200" width="46" height="140" />
        <rect x="1090" y="210" width="70" height="130" />
        <rect x="1180" y="180" width="52" height="160" />
        <rect x="1260" y="230" width="90" height="110" />
        <rect x="1370" y="200" width="50" height="140" />
      </g>

      {/* front layer buildings */}
      <g fill="url(#bld)">
        <rect x="90" y="250" width="60" height="90" />
        <rect x="170" y="215" width="64" height="125" />
        <rect x="255" y="255" width="70" height="85" />
        <rect x="360" y="225" width="58" height="115" />
        <rect x="440" y="260" width="70" height="80" />
        <rect x="520" y="230" width="54" height="110" />
        <rect x="600" y="255" width="48" height="85" />
        <rect x="820" y="248" width="52" height="92" />
        <rect x="890" y="228" width="60" height="112" />
        <rect x="965" y="258" width="70" height="82" />
        <rect x="1045" y="232" width="52" height="108" />
        <rect x="1150" y="256" width="60" height="84" />
        <rect x="1235" y="226" width="58" height="114" />
        <rect x="1320" y="252" width="64" height="88" />
      </g>

      {/* Burj Khalifa — tall central spire */}
      <g fill="url(#burj)">
        <path d="M712 40 L720 20 L728 40 L726 120 L732 120 L730 190 L738 190 L735 260 L742 260 L740 340 L700 340 L698 260 L705 260 L702 190 L710 190 L708 120 L714 120 Z" />
      </g>
      {/* spire tip glow */}
      <circle cx="720" cy="18" r="3" fill="#c9a8ff" className="twinkle" />

      {/* window / city lights */}
      <g fill="#e9c56b" opacity="0.85">
        {[
          [185, 250], [200, 280], [185, 300], [376, 260], [376, 300],
          [455, 290], [905, 260], [905, 300], [980, 290], [1250, 260],
          [1250, 300], [1335, 290], [110, 290], [275, 290], [535, 270],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.6"
            className="twinkle"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
