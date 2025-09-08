import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* === BRAND COLORS === */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    /* === LAYOUT & SPACING === */
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
    --border-radius-xl: 12px;
    --border-radius-full: 50%;

    /* === TYPOGRAPHY === */
    --font-family-primary: "Poppins", system-ui, -apple-system, sans-serif;
    --font-size-xs: 1.2rem;
    --font-size-sm: 1.4rem;
    --font-size-base: 1.6rem;
    --font-size-lg: 1.8rem;
    --font-size-xl: 2rem;
    --font-size-2xl: 2.4rem;
    --font-size-3xl: 3rem;
    
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    
    --line-height-tight: 1.25;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;

    /* === SPACING === */
    --space-1: 0.4rem;
    --space-2: 0.8rem;
    --space-3: 1.2rem;
    --space-4: 1.6rem;
    --space-5: 2rem;
    --space-6: 2.4rem;
    --space-8: 3.2rem;
    --space-10: 4rem;
    --space-12: 4.8rem;
    --space-16: 6.4rem;

    /* === TRANSITIONS === */
    --transition-fast: 150ms ease-in-out;
    --transition-normal: 300ms ease-in-out;
    --transition-slow: 500ms ease-in-out;

    /* === Z-INDEX SCALE === */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal-backdrop: 1040;
    --z-modal: 1050;
    --z-popover: 1060;
    --z-tooltip: 1070;
    --z-toast: 1080;

    /* === BREAKPOINTS (for use in JS) === */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
  }

  /* === LIGHT THEME === */
  :root,
  .light-mode {
    --color-background: #ffffff;
    --color-surface: #f9fafb;
    --color-surface-hover: #f3f4f6;
    
    /* Grey Scale */
    --color-grey-0: #ffffff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    /* Semantic Colors */
    --color-success-50: #dcfce7;
    --color-success-100: #bbf7d0;
    --color-success-600: #16a34a;
    --color-success-700: #15803d;

    --color-warning-50: #fef9c3;
    --color-warning-100: #fef3c7;
    --color-warning-600: #d97706;
    --color-warning-700: #a16207;

    --color-error-50: #fee2e2;
    --color-error-100: #fecaca;
    --color-error-600: #dc2626;
    --color-error-700: #b91c1c;
    --color-error-800: #991b1b;

    --color-info-50: #e0f2fe;
    --color-info-100: #bae6fd;
    --color-info-600: #0284c7;
    --color-info-700: #0369a1;

    /* Legacy color mappings for backward compatibility */
    --color-blue-100: var(--color-info-50);
    --color-blue-700: var(--color-info-700);
    --color-green-100: var(--color-success-50);
    --color-green-700: var(--color-success-700);
    --color-yellow-100: var(--color-warning-50);
    --color-yellow-700: var(--color-warning-700);
    --color-red-100: var(--color-error-50);
    --color-red-700: var(--color-error-700);
    --color-red-800: var(--color-error-800);
    --color-silver-100: var(--color-grey-200);
    --color-silver-700: var(--color-grey-700);
    --color-indigo-100: var(--color-brand-100);
    --color-indigo-700: var(--color-brand-700);

    /* Effects */
    --backdrop-color: rgba(255, 255, 255, 0.1);
    --overlay-color: rgba(0, 0, 0, 0.5);
    
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    
    --border-color: var(--color-grey-200);
    --border-color-hover: var(--color-grey-300);
    --focus-ring-color: var(--color-brand-500);
    
    --text-color-primary: var(--color-grey-900);
    --text-color-secondary: var(--color-grey-700);
    --text-color-muted: var(--color-grey-500);
    --text-color-inverse: var(--color-grey-0);

    /* Image filters */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  /* === DARK THEME === */
  .dark-mode {
    --color-background: #0f172a;
    --color-surface: #1e293b;
    --color-surface-hover: #334155;
    
    /* Inverted Grey Scale */
    --color-grey-0: #0f172a;
    --color-grey-50: #1e293b;
    --color-grey-100: #334155;
    --color-grey-200: #475569;
    --color-grey-300: #64748b;
    --color-grey-400: #94a3b8;
    --color-grey-500: #cbd5e1;
    --color-grey-600: #e2e8f0;
    --color-grey-700: #f1f5f9;
    --color-grey-800: #f8fafc;
    --color-grey-900: #ffffff;

    /* Darker semantic colors for better contrast */
    --color-success-50: #166534;
    --color-success-100: #15803d;
    --color-success-600: #22c55e;
    --color-success-700: #dcfce7;

    --color-warning-50: #854d0e;
    --color-warning-100: #a16207;
    --color-warning-600: #eab308;
    --color-warning-700: #fef9c3;

    --color-error-50: #fee2e2;
    --color-error-100: #fecaca;
    --color-error-600: #ef4444;
    --color-error-700: #b91c1c;
    --color-error-800: #991b1b;

    --color-info-50: #075985;
    --color-info-100: #0284c7;
    --color-info-600: #38bdf8;
    --color-info-700: #e0f2fe;

    /* Effects for dark mode */
    --backdrop-color: rgba(0, 0, 0, 0.8);
    --overlay-color: rgba(0, 0, 0, 0.75);
    
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.6);
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.8);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.6);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
    
    --border-color: var(--color-grey-200);
    --border-color-hover: var(--color-grey-300);
    --focus-ring-color: var(--color-brand-400);
    
    --text-color-primary: var(--color-grey-900);
    --text-color-secondary: var(--color-grey-700);
    --text-color-muted: var(--color-grey-500);
    --text-color-inverse: var(--color-grey-0);

    /* Image adjustments for dark mode */
    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /* === REDUCED MOTION === */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* === MODERN CSS RESET === */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
    scroll-behavior: smooth;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-normal);
    color: var(--text-color-primary);
    background-color: var(--color-background);
    transition: 
      color var(--transition-normal),
      background-color var(--transition-normal);
    min-height: 100vh;
    min-height: 100dvh; /* Dynamic viewport height */
    text-rendering: optimizeSpeed;
  }

  /* === FORM ELEMENTS === */
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
  }

  button {
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input,
  textarea,
  select {
    &:disabled {
      background-color: var(--color-grey-100);
      color: var(--text-color-muted);
      cursor: not-allowed;
      opacity: 0.7;
    }

    &::placeholder {
      color: var(--text-color-muted);
      opacity: 1;
    }
  }

  /* === FOCUS MANAGEMENT === */
  :focus {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  /* === INTERACTIVE ELEMENTS === */
  a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-brand-600);
    }

    &:focus-visible {
      color: var(--color-brand-600);
    }
  }

  button:has(svg) {
    line-height: 0;
  }

  /* === LISTS === */
  ul,
  ol {
    list-style: none;
  }

  /* === TYPOGRAPHY === */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text-color-primary);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-tight);
    text-wrap: balance;
  }

  p,
  li {
    color: var(--text-color-secondary);
    text-wrap: pretty;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  /* === MEDIA === */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  img {
    filter: 
      grayscale(var(--image-grayscale)) 
      opacity(var(--image-opacity));
    transition: filter var(--transition-normal);
  }

  svg {
    flex-shrink: 0;
  }

  /* === SCROLLBAR STYLING === */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-400);
    border-radius: var(--border-radius-full);
    
    &:hover {
      background: var(--color-grey-500);
    }
  }

  /* === SELECTION === */
  ::selection {
    background: var(--color-brand-200);
    color: var(--color-brand-900);
  }

  /* === UTILITY CLASSES === */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* === PRINT STYLES === */
  @media print {
    *,
    *::before,
    *::after {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    img {
      page-break-inside: avoid;
    }

    h2,
    h3,
    p {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;

export default GlobalStyles;
