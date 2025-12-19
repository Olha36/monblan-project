import logo from "../assets/logo-img.png";
import "react-datepicker/dist/react-datepicker.css";
import ClearableProp from "./DateInput";
import "../css/header.css";
export default function Header() {
  return (
    <header className="flex header">
      <img src={logo} alt="logo" />

      <div className="header-container">
        <div className="header-container__info flex">
          <p>monblanproject</p>
          <p>Start on 17-02-2016</p>
        </div>
        <div className="header-container__profile-header flex">
          <p>
            870 <span className="font-weight"> posts</span>
          </p>
          <p>
            11,787 <span className="font-weight">followers</span>
          </p>
          <p>
            112 <span className="font-weight">following</span>
          </p>
        </div>
        <div className="header-container__date-picker flex">
          <p>Date</p>
          <div className="date-picker__box flex">
          <ClearableProp />
          </div>

          <div className="date-picker__box flex">
           <ClearableProp />
          </div>
        </div>
      </div>
    </header>
  );
}
