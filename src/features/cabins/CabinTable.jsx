import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import EnhancedSpinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const ErrorMessage = styled.div`
  color: var(--color-red-700);
  background-color: var(--color-red-100);
  border: 1px solid var(--color-red-200);
  border-radius: 7px;
  padding: 1.6rem 2.4rem;
  text-align: center;
`;

const EmptyMessage = styled.div`
  color: var(--color-grey-600);
  background-color: var(--color-grey-50);
  border-radius: 7px;
  padding: 2.4rem;
  text-align: center;
  font-size: 1.6rem;
`;

function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) return <EnhancedSpinner />;

  if (error) {
    console.error("Error fetching cabins:", error);
    return <ErrorMessage>Error loading cabins: {error.message}</ErrorMessage>;
  }

  if (!cabins || cabins.length === 0) {
    return (
      <EmptyMessage>
        No cabins found. Create your first cabin to get started!
      </EmptyMessage>
    );
  }

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  );
}

export default CabinTable;
