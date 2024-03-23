import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  /* filter = [
    {field: "status", value: filterValue, method: "eq"},
    {filed: "totalPrice", value: 5000, method: "lte"},
  ]*/

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
      // : { field: "totalPrice", value: 5000, method: "lte" };
      

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
