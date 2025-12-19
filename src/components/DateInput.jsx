import { forwardRef } from "react";

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
            ✕
          </button>
        )}

        <span className="date-input__calendar">📅</span>
      </div>
    </div>
  );
});

export default DateInput;
