import styled, { keyframes } from "styled-components";

// Single optimized rotation animation
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Efficient pulsing animation using opacity only
const glow = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  position: relative;

  /* Main spinner ring - single gradient, single animation */
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    var(--color-brand-600) 25deg,
    var(--color-brand-500) 50deg,
    var(--color-brand-700) 75deg,
    transparent 100deg,
    transparent 360deg
  );

  /* Create the ring effect efficiently */
  mask: radial-gradient(circle, transparent 55%, black 60%);
  -webkit-mask: radial-gradient(circle, transparent 55%, black 60%);

  /* Single smooth animation */
  animation: ${spin} 1.2s linear infinite;

  /* Subtle glow effect using box-shadow only */
  &::after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      var(--color-brand-500) 0%,
      transparent 70%
    );
    animation: ${glow} 2s ease-in-out infinite;
    z-index: -1;
    filter: blur(8px);
  }

  /* Hover effect - just speed up rotation */
  &:hover {
    animation-duration: 0.8s;
  }
`;

export default Spinner;
