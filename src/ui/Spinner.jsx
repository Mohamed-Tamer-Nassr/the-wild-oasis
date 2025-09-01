import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0.3; }
  100% { opacity: 1; }
`;

const SpinnerContainer = styled.div`
  margin: 4.8rem auto;
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
`;

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        var(--color-brand-600) 94%,
        transparent
      )
      top/12px 12px no-repeat,
    conic-gradient(transparent 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 12px),
    #000 0
  );
  mask: radial-gradient(farthest-side, transparent calc(100% - 12px), #000 0);
  animation: ${rotate} 1.2s infinite linear;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: conic-gradient(
      transparent 30%,
      rgba(var(--color-brand-600-rgb, 59, 130, 246), 0.2)
    );
    -webkit-mask: radial-gradient(
      farthest-side,
      transparent calc(100% - 2px),
      #000 0
    );
    mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0);
    animation: ${rotate} 2s infinite linear reverse,
      ${fadeIn} 1.5s ease-in-out infinite alternate;
    z-index: -1;
  }
`;

const EnhancedSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default EnhancedSpinner;
