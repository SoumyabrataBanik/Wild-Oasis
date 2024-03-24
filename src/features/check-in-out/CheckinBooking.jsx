import { useParams } from "react-router";
import styled from "styled-components";

import { useMoveBack } from "../../hooks/useMoveBack";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import BookingDataBox from "../bookings/BookingDataBox";
import Spinner from "../../ui/Spinner";
import { useBooking } from "../bookings/useBooking";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

export default function CheckinBooking() {
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { checkin, isCheckingIn } = useCheckin();

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
    setAddBreakfast(booking?.hasBreakfast ?? false);
  }, [booking?.isPaid, booking?.hasBreakfast]);

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice = settings?.breakfastPrice * numGuests * numNights;
  
  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({bookingId, breakfast: {
        hasBreakfast: true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice
      }})
    } else {
      checkin({bookingId});
    }
  }

  function addBreakfastHandler() {
    setAddBreakfast((add) => !add);
    setConfirmPaid(false);
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check In booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            id="breakfast"
            checked={addBreakfast}
            onChange={addBreakfastHandler}
          >
            Want to opt for breakfast for {formatCurrency(optionalBreakfastPrice)} only? Total Price = {formatCurrency(totalPrice + optionalBreakfastPrice)} ({formatCurrency(totalPrice)} + {formatCurrency(optionalBreakfastPrice)})
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          id="payment"
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that <strong>{guests.fullName}</strong> has paid the total
          amount.
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check In Booking No. {bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
