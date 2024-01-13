import { BrowserRouter } from "react-router-dom";
import Question4 from "./components/Question4/Question4";
function App() {
  return (
    <div className="bg-black min-h-screen py-5 text-green-500">
  <BrowserRouter>
  <Question4 />
  </BrowserRouter>
    </div>
  );
}

export default App;
