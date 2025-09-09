import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBooking } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

/*
We need to distinguish between two types of data here:
1) BOOKINGS: the actual sales. For example, in the last 30 days, the hotel might have sold 10 bookings online, but these guests might only arrive and check in in the far future (or not, as booking also happen on-site)
2) STAYS: the actual check-in of guests arriving for their bookings. We can identify stays by their startDate, together with a status of either 'checked-in' (for current stays) or 'checked-out' (for past stays)
*/

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBooking();
  const { isLoading: isLoading2, stays, confirmedStays } = useRecentStays();
  if (isLoading1 || isLoading2) return <Spinner />;
  console.log(bookings, stays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <div>statistics</div>
      <div>activity</div>
      <div>chart stay duration </div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
