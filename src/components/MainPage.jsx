import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import '../css/main.css'
import CardsGrid from "./CardsGrid";
export default function MainPage() {
  return (
    <main>
      <div className="main-icons flex">
        <AppsIcon sx={{ width: "18px", height: "18px" }} />

        <ListIcon sx={{ color: "#3D8EDA" }} />
      </div>
      <CardsGrid />
    </main>
  );
}
