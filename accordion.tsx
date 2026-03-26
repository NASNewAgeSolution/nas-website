/* App-specific styles */

/* Smooth page transitions */
.page-transition-enter {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 300ms, transform 300ms;
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}

/* Custom focus styles */
*:focus-visible {
  outline: 2px solid rgba(45, 107, 255, 0.6);
  outline-offset: 2px;
}

/* Image hover effects */
.image-hover-zoom {
  overflow: hidden;
}

.image-hover-zoom img {
  transition: transform 0.5s ease;
}

.image-hover-zoom:hover img {
  transform: scale(1.05);
}

/* Card hover lift effect */
.card-hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Text reveal animation helper */
.text-reveal {
  overflow: hidden;
}

.text-reveal span {
  display: inline-block;
  transform: translateY(100%);
  animation: textReveal 0.6s ease forwards;
}

@keyframes textReveal {
  to {
    transform: translateY(0);
  }
}

/* Stagger animation delays */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }

/* Gradient border effect */
.gradient-border {
  position: relative;
  background: linear-gradient(135deg, #070B14 0%, #0B1222 100%);
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, rgba(45, 107, 255, 0.3) 0%, transparent 50%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Animated underline */
.animated-underline {
  position: relative;
}

.animated-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2D6BFF;
  transition: width 0.3s ease;
}

.animated-underline:hover::after {
  width: 100%;
}

/* Pulse animation for indicators */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Shimmer loading effect */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

/* Responsive typography adjustments */
@media (max-width: 768px) {
  .headline-xl {
    font-size: clamp(32px, 8vw, 44px);
  }
  
  .headline-lg {
    font-size: clamp(28px, 6vw, 34px);
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
}
