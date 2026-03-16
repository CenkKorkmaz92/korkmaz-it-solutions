export default function CyberChip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Glow filter */}
        <filter id="chip-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="chip-glow-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Pulse gradient */}
        <linearGradient id="pulse-h" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pulse-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Circuit traces (static dim lines) ── */}
      <g stroke="#00d4ff" strokeOpacity="0.12" strokeWidth="1" fill="none">
        {/* Top pins */}
        <line x1="145" y1="145" x2="145" y2="60" />
        <line x1="165" y1="145" x2="165" y2="20" />
        <line x1="185" y1="145" x2="185" y2="40" />
        <line x1="215" y1="145" x2="215" y2="20" />
        <line x1="235" y1="145" x2="235" y2="60" />
        <line x1="255" y1="145" x2="255" y2="40" />
        {/* Bottom pins */}
        <line x1="145" y1="255" x2="145" y2="340" />
        <line x1="165" y1="255" x2="165" y2="380" />
        <line x1="185" y1="255" x2="185" y2="360" />
        <line x1="215" y1="255" x2="215" y2="380" />
        <line x1="235" y1="255" x2="235" y2="340" />
        <line x1="255" y1="255" x2="255" y2="360" />
        {/* Left pins */}
        <line x1="145" y1="145" x2="60" y2="145" />
        <line x1="145" y1="165" x2="20" y2="165" />
        <line x1="145" y1="185" x2="40" y2="185" />
        <line x1="145" y1="215" x2="20" y2="215" />
        <line x1="145" y1="235" x2="60" y2="235" />
        <line x1="145" y1="255" x2="40" y2="255" />
        {/* Right pins */}
        <line x1="255" y1="145" x2="340" y2="145" />
        <line x1="255" y1="165" x2="380" y2="165" />
        <line x1="255" y1="185" x2="360" y2="185" />
        <line x1="255" y1="215" x2="380" y2="215" />
        <line x1="255" y1="235" x2="340" y2="235" />
        <line x1="255" y1="255" x2="360" y2="255" />
        {/* Corner extended traces */}
        <polyline points="60,145 30,145 30,110" />
        <polyline points="20,165 10,165 10,130" />
        <polyline points="60,235 30,235 30,270" />
        <polyline points="340,145 370,145 370,110" />
        <polyline points="380,165 390,165 390,130" />
        <polyline points="340,235 370,235 370,270" />
        <polyline points="145,60 145,30 110,30" />
        <polyline points="165,20 165,10 130,10" />
        <polyline points="255,60 255,30 290,30" />
        <polyline points="145,340 145,370 110,370" />
        <polyline points="165,380 165,390 130,390" />
        <polyline points="255,340 255,370 290,370" />
      </g>

      {/* ── Chip body ── */}
      <rect
        x="145" y="145" width="110" height="110" rx="6"
        stroke="#00d4ff" strokeOpacity="0.35" strokeWidth="1.5"
        fill="#00d4ff" fillOpacity="0.03"
        filter="url(#chip-glow)"
      />

      {/* Inner die lines */}
      <g stroke="#00d4ff" strokeOpacity="0.2" strokeWidth="0.75" fill="none">
        <rect x="158" y="158" width="84" height="84" rx="3" />
        <line x1="200" y1="158" x2="200" y2="242" />
        <line x1="158" y1="200" x2="242" y2="200" />
        <rect x="170" y="170" width="60" height="60" rx="2" />
        <rect x="182" y="182" width="36" height="36" rx="1" />
      </g>

      {/* Center core pulse */}
      <circle cx="200" cy="200" r="10" fill="#00d4ff" fillOpacity="0.15">
        <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="4" fill="#00d4ff" fillOpacity="0.8">
        <animate attributeName="fillOpacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* ── Pin pads (static) ── */}
      <g fill="#00d4ff" fillOpacity="0.3">
        {[145,165,185,215,235,255].map(x => (
          <rect key={`pt${x}`} x={x-3} y={142} width={6} height={6} rx={1} />
        ))}
        {[145,165,185,215,235,255].map(x => (
          <rect key={`pb${x}`} x={x-3} y={252} width={6} height={6} rx={1} />
        ))}
        {[145,165,185,215,235,255].map(y => (
          <rect key={`pl${y}`} x={142} y={y-3} width={6} height={6} rx={1} />
        ))}
        {[145,165,185,215,235,255].map(y => (
          <rect key={`pr${y}`} x={252} y={y-3} width={6} height={6} rx={1} />
        ))}
      </g>

      {/* ── Animated pulses traveling along traces ── */}
      {/* Top traces pulse */}
      <rect x="143" y="145" width="4" height="12" rx="2" fill="url(#pulse-v)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="y" values="145;20;145" dur="2.4s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <rect x="213" y="145" width="4" height="12" rx="2" fill="url(#pulse-v)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="y" values="145;20;145" dur="3.1s" begin="0.7s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="3.1s" begin="0.7s" repeatCount="indefinite" />
      </rect>
      <rect x="253" y="145" width="4" height="12" rx="2" fill="url(#pulse-v)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="y" values="145;40;145" dur="2.7s" begin="1.4s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.7s" begin="1.4s" repeatCount="indefinite" />
      </rect>

      {/* Bottom traces pulse */}
      <rect x="163" y="255" width="4" height="12" rx="2" fill="url(#pulse-v)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="y" values="255;370;255" dur="2.8s" begin="0.3s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.8s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="233" y="255" width="4" height="12" rx="2" fill="url(#pulse-v)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="y" values="255;340;255" dur="2.2s" begin="1.1s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
      </rect>

      {/* Left traces pulse */}
      <rect x="145" y="143" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="145;20;145" dur="3s" begin="0.5s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </rect>
      <rect x="145" y="213" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="145;20;145" dur="2.5s" begin="1.5s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="145" y="253" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="145;40;145" dur="2.9s" begin="0.9s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.9s" begin="0.9s" repeatCount="indefinite" />
      </rect>

      {/* Right traces pulse */}
      <rect x="255" y="163" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="255;370;255" dur="2.6s" begin="0.2s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.6s" begin="0.2s" repeatCount="indefinite" />
      </rect>
      <rect x="255" y="213" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="255;380;255" dur="3.2s" begin="1.2s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="3.2s" begin="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="255" y="253" width="12" height="4" rx="2" fill="url(#pulse-h)" filter="url(#chip-glow-strong)" opacity="0.9">
        <animate attributeName="x" values="255;360;255" dur="2.1s" begin="0.6s" repeatCount="indefinite" calcMode="ease-in-out" />
        <animate attributeName="opacity" values="0;0.9;0" dur="2.1s" begin="0.6s" repeatCount="indefinite" />
      </rect>

      {/* Corner node dots that flash */}
      <circle cx="30" cy="110" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="3.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="130" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="2.8s" begin="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="370" cy="110" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="3.1s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="390" cy="130" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="2.4s" begin="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="30" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="3.3s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="10" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="2.6s" begin="2.1s" repeatCount="indefinite" />
      </circle>
      <circle cx="290" cy="30" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="3.7s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="370" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="2.9s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="290" cy="370" r="2.5" fill="#00d4ff">
        <animate attributeName="fillOpacity" values="0.1;0.9;0.1" dur="3.4s" begin="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
