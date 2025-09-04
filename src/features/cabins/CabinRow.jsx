import styled from "styled-components";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useCreateCabin } from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1.6rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }
`;

const DuplicateButton = styled(ActionButton)`
  background-color: var(--color-blue-100, #dbeafe);
  color: var(--color-blue-700, #1d4ed8);

  &:hover:not(:disabled) {
    background-color: var(--color-blue-200, #bfdbfe);
  }
`;

const EditButton = styled(ActionButton)`
  background-color: var(--color-green-100, #dcfce7);
  color: var(--color-green-700, #15803d);

  &:hover:not(:disabled) {
    background-color: var(--color-green-200, #bbf7d0);
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: var(--color-red-100, #fee2e2);
  color: var(--color-red-700, #b91c1c);

  &:hover:not(:disabled) {
    background-color: var(--color-red-200, #fecaca);
  }
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row role="row">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <ButtonContainer>
        <DuplicateButton
          disabled={isCreating}
          onClick={handleDuplicate}
          title="Duplicate cabin"
        >
          <HiSquare2Stack />
        </DuplicateButton>

        <Modal>
          <Modal.Open opens="edit-cabin">
            <EditButton title="Edit cabin">
              <HiPencil />
            </EditButton>
          </Modal.Open>
          <Modal.Window name="edit-cabin">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens="delete-cabin">
            <DeleteButton title="Delete cabin">
              <HiTrash />
            </DeleteButton>
          </Modal.Open>
          <Modal.Window name="delete-cabin">
            <ConfirmDelete
              resourceName="cabin"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </ButtonContainer>
    </Table.Row>
  );
}

export default CabinRow;
