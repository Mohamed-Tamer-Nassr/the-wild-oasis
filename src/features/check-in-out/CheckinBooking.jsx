import styled from "styled-components";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";

import { useEffect, useState } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useBooking } from "../bookings/useBooking";
import { useSettings } from "../settings/useSettings";
import { useCheckin } from "./useCheckin";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  // Check for missing data
  if (!isLoading && !booking) {
    console.error("❌ NO BOOKING DATA FOUND");
    return (
      <div>
        ❌ Error: Booking not found. Check if the booking ID in the URL exists.
      </div>
    );
  }

  if (!isLoadingSettings && !settings) {
    console.error("❌ NO SETTINGS DATA FOUND");
    return (
      <div>
        ❌ Error: Settings not found. Check your settings configuration.
      </div>
    );
  }

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.BreakfastPrice * numNights * numGuests;

  function handleCheckin() {
    console.log("🚀 BUTTON CLICKED!");
    console.log("📊 Current state:", {
      confirmPaid,
      addBreakfast,
      bookingId,
      isCheckingIn,
    });

    if (!confirmPaid) {
      console.log("❌ Check-in blocked: Payment not confirmed");
      return;
    }

    if (addBreakfast) {
      const breakfastData = {
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      };
      checkin(breakfastData);
    } else {
      const basicData = { bookingId, breakfast: {} };
      checkin(basicData);
    }
  }

  // DEBUG: Check if button should be disabled
  const isButtonDisabled = !confirmPaid || isCheckingIn;
  console.log("🔘 Button disabled?", isButtonDisabled, "Reasons:", {
    notConfirmed: !confirmPaid,
    currentlyChecking: isCheckingIn,
  });

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {/* DEBUG INFO BOX */}
      <Box style={{ backgroundColor: "#f0f8ff", border: "2px solid #007bff" }}>
        <h4>🐛 DEBUG INFO</h4>
        <p>Booking ID: {bookingId}</p>
        <p>Confirm Paid: {confirmPaid ? "✅ YES" : "❌ NO"}</p>
        <p>Is Checking In: {isCheckingIn ? "⏳ YES" : "✅ NO"}</p>
        <p>Button Disabled: {isButtonDisabled ? "🔒 YES" : "🔓 NO"}</p>
        <p>Guest: {guests?.fullName}</p>
        <p>Total Price: {formatCurrency(totalPrice)}</p>
      </Box>

      {hasBreakfast ? null : (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={isCheckingIn}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
          {isCheckingIn && " (Loading...)"}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
