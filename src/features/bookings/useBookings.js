import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  /* filter = [
    {field: "status", value: filterValue, method: "eq"},
    {filed: "totalPrice", value: 5000, method: "lte"},
  ]*/

  // FILTER:
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
      // : { field: "totalPrice", value: 5000, method: "lte" };
  
  
  // SORT:
  const sortByRaw = searchParams.get("sort-by") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction }

  //PAGINATION:
  const page = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const {
    isLoading,
    data: queryData,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const bookings = queryData?.data ? queryData.data : [];
  const count = queryData?.count ? queryData.count : 0;

  return { isLoading, bookings, count, error };
}
