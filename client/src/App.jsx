import Button from "./components/CustomButton";
import NavBar from "./components/NavBar";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <div className="text-5xl text text-blue-600">
      <NavBar />
      <RegisterUser />
    </div>
  );
}

export default App;
