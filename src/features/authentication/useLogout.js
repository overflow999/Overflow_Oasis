import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isLoading: isLoginOut } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoginOut };
}
