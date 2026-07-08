@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Vakatis Brand Colors */
  --vakatis-navy: oklch(0.18 0.05 240);
  --vakatis-blue: oklch(0.42 0.13 240);
  --vakatis-sky: oklch(0.72 0.10 220);
  --vakatis-gold: oklch(0.72 0.12 75);
  --vakatis-sand: oklch(0.97 0.01 80);
  --vakatis-white: oklch(1 0 0);
}

:root {
  --radius: 0.5rem;
  --background: oklch(0.99 0.002 240);
  --foreground: oklch(0.18 0.05 240);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.05 240);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.05 240);
  --primary: oklch(0.42 0.13 240);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.93 0.02 220);
  --secondary-foreground: oklch(0.18 0.05 240);
  --muted: oklch(0.95 0.01 220);
  --muted-foreground: oklch(0.52 0.04 240);
  --accent: oklch(0.72 0.12 75);
  --accent-foreground: oklch(0.18 0.05 240);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.88 0.02 220);
  --input: oklch(0.88 0.02 220);
  --ring: oklch(0.42 0.13 240);
  --chart-1: oklch(0.42 0.13 240);
  --chart-2: oklch(0.55 0.12 220);
  --chart-3: oklch(0.65 0.10 200);
  --chart-4: oklch(0.72 0.12 75);
  --chart-5: oklch(0.80 0.08 80);
  --sidebar: oklch(0.18 0.05 240);
  --sidebar-foreground: oklch(0.95 0.01 220);
  --sidebar-primary: oklch(0.72 0.12 75);
  --sidebar-primary-foreground: oklch(0.18 0.05 240);
  --sidebar-accent: oklch(0.25 0.06 240);
  --sidebar-accent-foreground: oklch(0.95 0.01 220);
  --sidebar-border: oklch(0.28 0.06 240);
  --sidebar-ring: oklch(0.42 0.13 240);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-height: 0;
    min-width: 0;
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1280px;
    }
  }

  /* Vakatis Custom Utilities */
  .font-display {
    font-family: 'Playfair Display', serif;
  }

  .font-body {
    font-family: 'DM Sans', sans-serif;
  }

  .font-mono-price {
    font-family: 'DM Mono', monospace;
  }

  .gold-line {
    height: 2px;
    background: linear-gradient(90deg, transparent, oklch(0.72 0.12 75), transparent);
  }

  .vakatis-gradient {
    background: linear-gradient(135deg, oklch(0.18 0.05 240) 0%, oklch(0.30 0.10 240) 50%, oklch(0.42 0.13 240) 100%);
  }

  .card-hover {
    transition: transform 200ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card-hover:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 20px 60px oklch(0.18 0.05 240 / 0.2);
  }

  .btn-primary {
    background: oklch(0.42 0.13 240);
    color: white;
    transition: all 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .btn-primary:hover {
    background: oklch(0.35 0.12 240);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px oklch(0.42 0.13 240 / 0.4);
  }

  .btn-primary:active {
    transform: scale(0.97);
  }

  .btn-gold {
    background: oklch(0.72 0.12 75);
    color: oklch(0.18 0.05 240);
    transition: all 160ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .btn-gold:hover {
    background: oklch(0.65 0.13 75);
    transform: translateY(-1px);
    box-shadow: 0 8px 24px oklch(0.72 0.12 75 / 0.4);
  }

  .btn-gold:active {
    transform: scale(0.97);
  }

  .section-enter {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 400ms cubic-bezier(0.23, 1, 0.32, 1), transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .section-enter.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .whatsapp-float {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 32px rgba(37, 211, 102, 0.6);
  }

  .whatsapp-float:active {
    transform: scale(0.97);
  }

  .activity-card {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 24px oklch(0.18 0.05 240 / 0.08);
    transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .activity-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 48px oklch(0.18 0.05 240 / 0.18);
  }

  .activity-card .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, oklch(0.18 0.05 240 / 0.85) 0%, oklch(0.18 0.05 240 / 0.2) 50%, transparent 100%);
    transition: opacity 250ms;
  }

  .activity-card:hover .card-overlay {
    background: linear-gradient(to top, oklch(0.18 0.05 240 / 0.92) 0%, oklch(0.18 0.05 240 / 0.4) 60%, transparent 100%);
  }

  .hero-text-shadow {
    text-shadow: 0 2px 20px rgba(0,0,0,0.5);
  }

  .nav-scrolled {
    background: oklch(0.18 0.05 240 / 0.97) !important;
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 20px oklch(0.18 0.05 240 / 0.3);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease forwards;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: oklch(0.95 0.01 220);
}
::-webkit-scrollbar-thumb {
  background: oklch(0.42 0.13 240);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: oklch(0.35 0.12 240);
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Image loading */
img {
  transition: opacity 0.3s ease;
}
