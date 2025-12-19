import logo from "../assets/logo-img.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "./DateInput";
import { useState } from "react";
import '../css/header.css'
export default function Header() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  return (
    <header className="flex header">
      <img src={logo} alt="logo" />

      <div className="header-container">
        <div className="header-container__info">
          <h1>monblanproject</h1>
          <p>Start on 17-02-2016</p>
        </div>
        <div className="header-container__profile-header">
          <p>870 posts</p>
          <p>11,787 followers</p>
          <p>112 following</p>
        </div>
        <div className="header-container__date-picker flex">
          <p>Date</p>
          <div className="date-picker__box flex">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="from"
              dateFormat="dd_MM_yyyy"
              isClearable
            />

            <DateInput value={startDate} onClear={() => setStartDate(null)} />
          </div>

          <div className="date-picker__box flex">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd_MM_yyyy"
            />

            <DateInput value={endDate} onClear={() => setEndDate(null)} />
          </div>
        </div>
      </div>
    </header>
  );
}
