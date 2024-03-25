import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      const fullname = user?.user?.user_metadata?.fullName || null;
      toast.success(`User ${fullname ? fullname : ""} added successfully. Please confirm your email.`);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("User could not be signed up.");
    },
  });

  return { signup, isSigningUp };
}
