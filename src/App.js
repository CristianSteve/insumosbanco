import Nadvar from "./components/Nadvar";
import Vista from "./components/Vista";
import "./index.css";
import RouterApp from "./routers/RouterApp";

function App() {
  return (
    <Vista>
      <RouterApp />
      <Nadvar />
    </Vista>
  );
}

export default App;
