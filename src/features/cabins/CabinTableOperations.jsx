import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const filterOptions = [
      {value: "all", label: "All"},
      {value: "no-discount", label: "No Discount"},
      {value: "with-discount", label: "With Discount"}
]

const sortOptions = [
      {value: "name-asc", label: "Sort By Name (A-Z)"},
      {value: "name-desc", label: "Sort By Name (Z-A)"},
      {value: "regularPrice-asc", label: "Sort By Price (low to high)"},
      {value: "regularPrice-desc", label: "Sort By Price (high to low)"},
      {value: "maxCapacity-asc", label: "Sort By Capacity (low to high)"},
      {value: "maxCapacity-desc", label: "Sort By Capacity (high to low)"}
]

const CabinTableOperations = () => {
      return (
            <TableOperations>
                  <Filter filterField="discount" options={filterOptions} />
                  <SortBy options={sortOptions} />
            </TableOperations>
      );
}

export default CabinTableOperations;