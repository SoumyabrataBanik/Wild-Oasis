import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      toast.success(`Login Successful`);
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
    },
    onError: () => {
      toast.error(`The given email and password are incorrect`);
    },
  });

  return { login, isLoggingIn };
}
