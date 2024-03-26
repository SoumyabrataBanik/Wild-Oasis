import { useNavigate } from "react-router";
import styled from "styled-components";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guests = styled.div`
  font-weight: 500;
`;

export default function TodayItem({ activity }) {
  const navigate = useNavigate();

  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guests>{guests.fullName}</Guests>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && <Button size="small" variation="primary" onClick={() => navigate(`/checkin/${id}`)}>Check In</Button>}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}
