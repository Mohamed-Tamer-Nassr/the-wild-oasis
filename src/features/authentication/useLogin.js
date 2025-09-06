import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginAPI } from "../../services/apiAuth"; // Import your actual login function

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      // Use the imported loginAPI function instead of calling login
      return loginAPI({ email, password });
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      queryClient.setQueryData(["user"], data.user);
      toast.success("Login successful!");
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error("Your email or password is incorrect. Please try again.");
    },
  });

  return { login, isLoading };
}
