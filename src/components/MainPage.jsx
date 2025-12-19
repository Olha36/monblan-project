import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import "../css/main.css";
import CardsGrid from "./CardsGrid";
import CardsColumn from "./CardsColumn";

export default function MainPage() {
  const [view, setView] = useState("column"); 

  return (
    <main>
      <div
        className="main-icons flex"
        style={{ gap: "10px", marginBottom: "20px" }}
      >
        <AppsIcon
          sx={{
            width: "18px",
            height: "18px",
            cursor: "pointer",
            color: view === "column" ? "#3D8EDA" : "black",
            transition: "color 0.3s",
          }}
          onClick={() => setView("column")}
        />
        <ListIcon
          sx={{
            width: "18px",
            height: "18px",
            cursor: "pointer",
            color: view === "grid" ? "#3D8EDA" : "black",
            transition: "color 0.3s",
          }}
          onClick={() => setView("grid")}
        />
      </div>

      <div
        className="cards-wrapper"
        style={{ position: "relative", minHeight: "400px" }}
      >
        <div
          className={`cards-view ${view === "column" ? "active" : ""}`}
          style={{
            position: view === "column" ? "relative" : "absolute",
            width: "100%",
            transition: "opacity 0.5s",
            opacity: view === "column" ? 1 : 0,
            pointerEvents: view === "column" ? "auto" : "none",
          }}
        >
          <CardsColumn />
        </div>

        <div
          className={`cards-view ${view === "grid" ? "active" : ""}`}
          style={{
            position: view === "grid" ? "relative" : "absolute",
            width: "100%",
            transition: "opacity 0.5s",
            opacity: view === "grid" ? 1 : 0,
            pointerEvents: view === "grid" ? "auto" : "none",
          }}
        >
          <CardsGrid />
        </div>
      </div>
    </main>
  );
}
