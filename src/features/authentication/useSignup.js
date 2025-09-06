import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupAPI } from "../../services/apiAuth";

export function useSignup() {
  // Remove parameters from hook
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) => {
      // Match your API function parameter order
      return signupAPI({ email, password, fullName });
    },
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      toast.success("Signup successful! Please check your email to confirm.");
    },
    onError: (error) => {
      console.error("Signup error:", error);
      toast.error(error.message || "Signup failed. Please try again.");
    },
  });

  return { signup, isLoading };
}
