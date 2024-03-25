import styled from "styled-components";

import { useRecentBookings } from "./useRecentBookings";

import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { recentBookings, isFetchingRecentBookings } = useRecentBookings();
  const { recentStays, isFetchingRecentStays, confirmedStays } =
    useRecentStays();
  const { numDays } = useRecentStays();

  if (isFetchingRecentBookings) return <Spinner />;
  if (isFetchingRecentStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={recentBookings} confirmedStays={confirmedStays} />
      <div>Today's Activity</div>
      <div>Chart stay duration</div>
      <SalesChart bookings={recentBookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
