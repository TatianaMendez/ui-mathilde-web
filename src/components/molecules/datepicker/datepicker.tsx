import { Datepicker } from "flowbite-react";

export const DatePicker = ({
  minDate,
  maxDate,
}: {
  minDate: Date;
  maxDate: Date;
}) => (
  <Datepicker minDate={minDate} maxDate={maxDate} className='custom-datepicker' />
);
