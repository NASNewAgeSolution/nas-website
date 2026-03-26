@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 45% 4%;
    --foreground: 225 50% 97%;
    --card: 220 35% 8%;
    --card-foreground: 225 50% 97%;
    --popover: 220 35% 8%;
    --popover-foreground: 225 50% 97%;
    --primary: 220 100% 59%;
    --primary-foreground: 0 0% 100%;
    --secondary: 220 30% 12%;
    --secondary-foreground: 225 50% 97%;
    --muted: 220 25% 15%;
    --muted-foreground: 220 20% 65%;
    --accent: 220 100% 59%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 20% 15%;
    --input: 220 20% 15%;
    --ring: 220 100% 59%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
    background-color: #070B14;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.05;
  }
  
  .font-mono {
    font-family: 'IBM Plex Mono', monospace;
  }
}

@layer utilities {
  .text-gradient {
    background: linear-gradient(135deg, #F4F7FF 0%, #2D6BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .bg-navy-primary {
    background-color: #070B14;
  }
  
  .bg-navy-secondary {
    background-color: #0B1222;
  }
  
  .text-primary-light {
    color: #F4F7FF;
  }
  
  .text-secondary-light {
    color: #A7B3D1;
  }
  
  .border-hairline {
    border-color: rgba(244, 247, 255, 0.08);
  }
  
  .panel-shadow {
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  }
  
  .grain-overlay {
    position: relative;
  }
  
  .grain-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.04;
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 1;
  }
  
  .section-pinned {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  
  .geometric-panel {
    position: absolute;
    border: 1px solid rgba(244, 247, 255, 0.08);
  }
  
  .btn-primary {
    @apply inline-flex items-center justify-center px-6 py-3 bg-[#2D6BFF] text-white font-medium rounded-sm transition-all duration-200;
  }
  
  .btn-primary:hover {
    @apply transform -translate-y-0.5 scale-[1.02];
    box-shadow: 0 8px 30px rgba(45, 107, 255, 0.35);
  }
  
  .btn-primary:active {
    @apply scale-[0.98];
  }
  
  .btn-secondary {
    @apply inline-flex items-center justify-center px-6 py-3 border border-[rgba(244,247,255,0.2)] text-[#F4F7FF] font-medium rounded-sm transition-all duration-200;
  }
  
  .btn-secondary:hover {
    @apply border-[#2D6BFF] text-[#2D6BFF];
  }
  
  .headline-xl {
    font-size: clamp(44px, 5vw, 78px);
    line-height: 0.95;
    text-transform: uppercase;
  }
  
  .headline-lg {
    font-size: clamp(34px, 3.6vw, 56px);
    line-height: 1.05;
    text-transform: uppercase;
  }
  
  .body-text {
    font-size: clamp(15px, 1.2vw, 18px);
    line-height: 1.7;
    color: #A7B3D1;
  }
  
  .micro-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #A7B3D1;
  }
  
  .image-card {
    position: absolute;
    left: 18vw;
    top: 18vh;
    width: 64vw;
    height: 64vh;
    overflow: hidden;
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
  }
  
  .image-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.85) contrast(1.05);
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #070B14;
}

::-webkit-scrollbar-thumb {
  background: #1a2744;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2D6BFF;
}

/* Selection styling */
::selection {
  background: rgba(45, 107, 255, 0.3);
  color: #F4F7FF;
}
