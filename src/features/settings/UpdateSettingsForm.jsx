import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSetting } from "./useEditSetting";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const { isEdditing, editSetting } = useEditSetting();
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    editSetting({ [field]: value });
  }
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          disabled={isEdditing}
          type="number"
          id="min-nights"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
          defaultValue={maxGuestPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
