/* eslint-disable react/prop-types */
import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color--grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  //1. LOAD THE AUTHENTICATED USER
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  //2. IF THERE IS NO AUTHENTICATED USER,REDIRECT TO THE LOGIN PAGE
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3.WHILE LOADING,SHOW SPINNER

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. IF THERE IS A USER ,RENDER THE APP
  if (isAuthenticated) return children;
}
