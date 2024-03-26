import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import { useNavigate } from "react-router";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export default function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { checkout } = useCheckout();
  const { deleteBooking } = useDeleteBooking();

  if (isLoading) return <Spinner />;

  if (!booking) return <Empty />

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  function handleDeleteBooking() {
    deleteBooking(bookingId);
    navigate(-1);
  }

  return (
    <Modal>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking No. {bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
          >
            Check Out
          </Button>
        )}

        <Modal.Open opens="delete">
          <Button variation="danger">
            Delete
          </Button>
        </Modal.Open>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>

      <Modal.Window name="delete">
        <ConfirmDelete resourceName={`Booking No. ${booking.id}`} onConfirm={handleDeleteBooking}/>
      </Modal.Window>
    </Modal>
  );
}
