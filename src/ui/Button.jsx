import styled, { css, keyframes } from "styled-components";

// Animation keyframes
const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const sizes = {
  xs: css`
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    min-height: 2rem;
  `,
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    min-height: 2.4rem;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    min-height: 3.2rem;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    min-height: 4rem;
  `,
  xl: css`
    font-size: 1.8rem;
    padding: 1.6rem 3.2rem;
    font-weight: 500;
    min-height: 4.8rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    background-image: linear-gradient(
      135deg,
      var(--color-brand-600) 0%,
      var(--color-brand-700) 100%
    );

    &:hover:not(:disabled) {
      background-color: var(--color-brand-700);
      background-image: linear-gradient(
        135deg,
        var(--color-brand-700) 0%,
        var(--color-brand-800) 100%
      );
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);
    background-image: linear-gradient(
      135deg,
      var(--color-grey-0) 0%,
      var(--color-grey-50) 100%
    );

    &:hover:not(:disabled) {
      background-color: var(--color-grey-50);
      background-image: linear-gradient(
        135deg,
        var(--color-grey-50) 0%,
        var(--color-grey-100) 100%
      );
      border-color: var(--color-grey-300);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);
    background-image: linear-gradient(
      135deg,
      var(--color-red-700) 0%,
      var(--color-red-800) 100%
    );

    &:hover:not(:disabled) {
      background-color: var(--color-red-800);
      background-image: linear-gradient(
        135deg,
        var(--color-red-800) 0%,
        var(--color-red-900) 100%
      );
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
  success: css`
    color: var(--color-green-50);
    background-color: var(--color-green-600);
    background-image: linear-gradient(
      135deg,
      var(--color-green-600) 0%,
      var(--color-green-700) 100%
    );

    &:hover:not(:disabled) {
      background-color: var(--color-green-700);
      background-image: linear-gradient(
        135deg,
        var(--color-green-700) 0%,
        var(--color-green-800) 100%
      );
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
  warning: css`
    color: var(--color-yellow-900);
    background-color: var(--color-yellow-400);
    background-image: linear-gradient(
      135deg,
      var(--color-yellow-400) 0%,
      var(--color-yellow-500) 100%
    );

    &:hover:not(:disabled) {
      background-color: var(--color-yellow-500);
      background-image: linear-gradient(
        135deg,
        var(--color-yellow-500) 0%,
        var(--color-yellow-600) 100%
      );
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
  ghost: css`
    color: var(--color-grey-600);
    background: transparent;
    border: none;

    &:hover:not(:disabled) {
      background-color: var(--color-grey-100);
      color: var(--color-grey-700);
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      background-color: var(--color-grey-200);
    }
  `,
  outline: css`
    color: var(--color-brand-600);
    background: transparent;
    border: 2px solid var(--color-brand-600);

    &:hover:not(:disabled) {
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: var(--shadow-sm);
    }
  `,
};

const animationStyles = {
  bounce: css`
    animation: ${bounce} 1s ease-in-out;
  `,
  pulse: css`
    animation: ${pulse} 2s infinite;
  `,
  shake: css`
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
  `,
  ripple: css`
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transition: width 0.6s, height 0.6s;
    }

    &:active::before {
      width: 300px;
      height: 300px;
      animation: ${ripple} 0.6s ease-out;
    }
  `,
};

const Button = styled.button`
  /* Base styles */
  position: relative;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
  outline: none;

  /* Apply size and variant styles */
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variant]}

  /* Animation styles */
  ${(props) => props.animation && animationStyles[props.animation]}

  /* Loading state */
  ${(props) =>
    props.loading &&
    css`
      color: transparent;
      pointer-events: none;

      &::after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: ${pulse} 1s linear infinite;
      }
    `}

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: var(--shadow-sm) !important;
    pointer-events: none;
  }

  /* Focus styles for accessibility */
  &:focus-visible {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 2px;
  }

  /* Full width option */
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  /* Icon button styles */
  ${(props) =>
    props.iconOnly &&
    css`
      aspect-ratio: 1;
      padding: ${props.size === "small"
        ? "0.4rem"
        : props.size === "large"
        ? "1.2rem"
        : props.size === "xl"
        ? "1.6rem"
        : "1.2rem"};
    `}

  /* Rounded option */
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 50px;
    `}

  /* Elevated option */
  ${(props) =>
    props.elevated &&
    css`
      box-shadow: var(--shadow-lg);

      &:hover:not(:disabled) {
        box-shadow: var(--shadow-xl);
        transform: translateY(-4px);
      }
    `}

  /* Group button styles */
  ${(props) =>
    props.grouped &&
    css`
      border-radius: 0;

      &:first-child {
        border-top-left-radius: var(--border-radius-sm);
        border-bottom-left-radius: var(--border-radius-sm);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius-sm);
        border-bottom-right-radius: var(--border-radius-sm);
      }

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.2);
      }
    `}
`;

// Default props
Button.defaultProps = {
  size: "medium",
  variant: "primary",
  loading: false,
  disabled: false,
  fullWidth: false,
  iconOnly: false,
  rounded: false,
  elevated: false,
  grouped: false,
  animation: null,
};

export default Button;
