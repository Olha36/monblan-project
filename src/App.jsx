import "./App.css";
import Header from "./components/Header";
import logoDecoration from "./assets/logo-decoration.png";
import Card from "./components/MainPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
    <img src={logoDecoration} alt="logo decoration" className="logo-decoration" />
      <Header />
      <MainPage />
    </>
  );
}

export default App;
