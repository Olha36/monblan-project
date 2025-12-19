import "./App.css";
import Header from "./components/Header";
import logoDecoration from "./assets/logo-decoration.png";

function App() {
  return (
    <>
    <img src={logoDecoration} alt="logo decoration" className="logo-decoration" />
      <Header />
    </>
  );
}

export default App;
