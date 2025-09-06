import { useQuery } from "@tanstack/react-query"; // Change this import
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    isLoading,
    user,
    isAuthenticated: !!user, // Simply check if user exists
  };
}

export default useUser;
