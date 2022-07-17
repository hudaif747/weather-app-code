import "./App.css";
import Homescreen from "./components/Homescreen";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <>
      <AppContextProvider>
        <Homescreen />
      </AppContextProvider>
    </>
  );
}

export default App;
