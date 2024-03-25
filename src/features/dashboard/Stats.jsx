import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";

import Stat from "./Stat";

const Stats = ({ bookings, confirmedStays }) => {
  const {numDays} = useRecentStays();
  const {cabins} = useCabins();

  // 1. Total Number of Bookings:
  const numBookings = bookings?.length;

  // 2. Total Sales:
  const totalSales = bookings?.reduce((acc, sale) => acc + sale.totalPrice, 0);

  // 3. Total Check ins
  const totalCheckins = confirmedStays?.filter(booking => booking.status === "checked-in").length;

  // 4. Total Occupancy Rate = (No. of Cabins occupied by guests) / (number of Nights * total number of cabins)
  const cabinCount = cabins?.length;
  const occupancyRate = confirmedStays?.reduce((acc, stays) => acc + stays.numNights, 0) / (numDays * cabinCount);

  return (
    <>
      <Stat
        title="No. of Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check Ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={totalCheckins}
      />
      <Stat
        title="Occupancy Rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={Math.round(occupancyRate * 100) + "%"}
      />
    </>
  );
};

export default Stats;
