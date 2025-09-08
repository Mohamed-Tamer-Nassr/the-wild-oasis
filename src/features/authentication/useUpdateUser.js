import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: updateUser,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (updatedUser) => {
      toast.success("User account successfully updated");

      // Update the cache with the actual user object
      // updatedUser.user contains the updated user data
      queryClient.setQueryData(["user"], updatedUser.user);

      // Optionally invalidate to ensure fresh data
      queryClient.invalidateQueries({ queryKey: ["user"] });

      navigate("/");
    },
    onError: (err) => {
      console.error("Update user error:", err);
      toast.error(err.message || "Failed to update user account");
    },
  });

  return {
    updateUser,
    isUpdating,
    error,
  };
}
