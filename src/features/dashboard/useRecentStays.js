import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDays = subDays(new Date(), numDays).toISOString();
  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDays),
    queryKey: ["stays", `last-${numDays}`],
  });

  // Updated filter to include the actual status values you have
  // You may need to adjust these based on all possible statuses in your system
  const confirmedStays = stays?.filter(
    (stay) =>
      stay.status === "checked-in" ||
      stay.status === "checked-out" ||
      stay.status === "unconfirmed" ||
      stay.status === "confirmed" // Add other statuses as needed
  );

  return { isLoading, stays, confirmedStays, numDays };
}
