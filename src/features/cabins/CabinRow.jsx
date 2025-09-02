import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeletingCabin } from "./useDeletingCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EditButton = styled(Button)`
  background-color: var(--color-blue-100);
  color: var(--color-blue-700);

  &:hover {
    background-color: var(--color-blue-200);
  }
`;

const DeleteButton = styled(Button)`
  background-color: var(--color-red-100);
  color: var(--color-red-700);

  &:hover {
    background-color: var(--color-red-200);
  }
`;

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  // Move hooks BEFORE any conditional returns
  const { isDeleting, deleteCabin } = useDeletingCabin();

  // Add safety check for cabin prop AFTER hooks
  if (!cabin) {
    console.error("CabinRow: cabin prop is required");
    return null;
  }

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const handleDelete = () => {
    if (!cabinId) {
      toast.error("Cannot delete cabin: Invalid cabin ID");
      return;
    }

    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteCabin(cabinId);
    }
  };

  const handleEdit = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <TableRow role="row">
        <Img
          src={image || "/default-cabin.jpg"}
          alt={name || "Cabin"}
          onError={(e) => {
            e.target.src = "/default-cabin.jpg";
          }}
        />
        <Cabin>{name || "Unknown Cabin"}</Cabin>
        <div>
          Fit up to <strong>{maxCapacity || 0}</strong> guests
        </div>
        <Price>{formatCurrency(regularPrice || 0)}</Price>
        <Discount>{discount ? formatCurrency(discount) : "—"}</Discount>
        <ButtonGroup>
          <EditButton onClick={handleEdit}>Edit</EditButton>
          <DeleteButton onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </DeleteButton>
        </ButtonGroup>
      </TableRow>
      {showForm && (
        <CreateCabinForm
          cabinToEdit={cabin}
          onCloseModal={() => setShowForm(false)}
          onSuccess={() => setShowForm(false)}
        />
      )}
    </>
  );
}

export default CabinRow;
