import { Outlet } from "react-router-dom";
import { HeroProvider } from "./contexts/HeroContext";

function App() {
  return (
    <HeroProvider>
      <Outlet />
    </HeroProvider>
  );
}

export default App;
