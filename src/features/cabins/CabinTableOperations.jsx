import TableOperations from './../../ui/TableOperations';
import Filter from './../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
    return (
        <TableOperations>
            {/* <Filter filterField="discount">
                <Filter.Button param="all">All</Filter.Button>
                <Filter.Button param="no-discount">No Discount</Filter.Button>
                <Filter.Button param="with-discount">With Discount</Filter.Button>
            </Filter> */}
            <Filter filterField="discount" options={[
                {value: "all", label: "All"},
                {value: "no-discount", label: "No Discount"},
                {value: "with-discount", label: "With Discount"},
            ]}>
                </Filter>

                {/* <Filter    filterField="discount">
                    
                <Filter.Button param="all">All</Filter.Button>
                <Filter.Button param="no-discount">No Discount</Filter.Button>
                <Filter.Button param="with-discount">With Discount</Filter.Button>
            </Filter> */}
            <SortBy options={[
                {value:"name-asc", label:"Sort by name (A-Z)"},
                {value:"name-desc", label:"Sort by name (Z-A)"},
                {value:"regularPrice-asc", label:"Sort by price ascending"},
                {value:"regularPrice-desc", label:"Sort by price descending"},
                {value:"maxCapacity-asc", label:"Sort by max capacity ascending"},
                {value:"maxCapacity-desc", label:"Sort by max capacity descending"},
                // {value:"startDate-asc", label:"Sort by max capacity descending"},
                // {value:"startDate-desc", label:"Sort by max capacity descending"},
            ]}></SortBy>
        </TableOperations>
    )
}

export default CabinTableOperations
