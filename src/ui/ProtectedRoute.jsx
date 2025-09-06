import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";

const FullPageSpinner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  // Show spinner while loading
  if (isLoading) {
    return (
      <FullPageSpinner>
        <Spinner />
      </FullPageSpinner>
    );
  }

  // If authenticated, show the protected content
  if (isAuthenticated) {
    return children;
  }

  // This handles the case where not authenticated and not loading
  // The useEffect will redirect, but this prevents flash of content
  return null;
}

export default ProtectedRoute;
