import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Map2 from "./Map";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Map2 />
    </div>
  );
}

export default App;
