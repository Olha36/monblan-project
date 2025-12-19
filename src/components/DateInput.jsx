import { forwardRef } from "react";
import close from "../assets/close.png";
import calendar from "../assets/calendar.png";

const DateInput = forwardRef(({ value, onClear }, ref) => {
  return (
    <div className="date-input" ref={ref}>
      <div className="date-input__icons">
        {value !== undefined && (
          <button
            type="button"
            className="date-input__clear"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            <img src={close} alt="close" />
          </button>
        )}

        <img className="date-input__calendar" src={calendar} alt="calendar" />
      </div>
    </div>
  );
});

export default DateInput;
