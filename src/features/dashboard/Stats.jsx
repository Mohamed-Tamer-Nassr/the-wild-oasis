import { differenceInDays } from "date-fns";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings.length;
  const Sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkIns = confirmedStays.length;
  const occupation =
    confirmedStays.reduce((acc, cur) => {
      // checked-in stays may continue after today, so their numNights will exceed period we try to process (from 7/30/90 days ago to today)
      // so for checked-in we only count days from startDate to today
      const numNights =
        cur.status === "checked-in"
          ? differenceInDays(new Date(), cur.startDate)
          : cur.numNights;

      return acc + numNights;
    }, 0) /
    (numDays * cabinsCount);
  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(Sales)}
      />
      <Stat
        title="check in"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
