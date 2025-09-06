import styled, { css } from "styled-components";

const Form = styled.form`
  /* Base styles for all forms */
  box-sizing: border-box;
  font-size: 1.4rem;

  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      // Added width for regular form
      /* min-width: 40rem; */
      margin: 0 auto;
      //Centering the form

      /* Box styling */
      background-color: var(--color-grey-0, #ffffff);
      border: 1px solid var(--color-grey-100, #e5e7eb);
      border-radius: var(--border-radius-md, 8px);
      /* Additional improvements */
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease;

      &:focus-within {
        border-color: var(--color-primary, #3b82f6);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      max-width: 90vw; /* Responsive improvement */
      padding: 3rem;
      background-color: var(--color-grey-0, #ffffff);
      border-radius: var(--border-radius-lg, 12px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `}
    
  /* Prevent overflow issues */
  overflow: hidden;

  /* Form element spacing */
  & > * + * {
    margin-top: 1.6rem;
  }

  /* Input and button improvements */
  input,
  textarea,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
