import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

const options = [
      {value: "all", label: "All"},
      {value: "no-discount", label: "No Discount"},
      {value: "with-discount", label: "With Discount"}
]

const CabinTableOperations = () => {
      return (
            <TableOperations>
                  <Filter filterField="discount"
                  options={options} />
            </TableOperations>
      );
}

export default CabinTableOperations;