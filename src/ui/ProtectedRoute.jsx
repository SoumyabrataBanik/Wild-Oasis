import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // STEP 1: Load the authoricated user
  const { isLoading, user, isAuthenticated } = useUser();
  
  //STEP 3: If there is no authenticated user, redirect to the Login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate])

  // STEP 2: While loading, show the spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // STEP 4: If there IS a user, redirect to the dashboard
  if (isAuthenticated) return children;
}
