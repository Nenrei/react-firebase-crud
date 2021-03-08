import "./App.css";
import Loading from "./components/Loading";
import Results from "./components/Results";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Results />
      <Loading />
      <ToastContainer />
    </div>
  );
}

export default App;
