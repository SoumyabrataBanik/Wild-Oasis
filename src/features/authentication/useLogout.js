import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success(`Logout successful`);
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: () => {
      toast.error(`Error occured during logging out.`);
    },
  });

  return { logout, isLoading };
}
