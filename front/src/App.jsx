import "./App.css";
import MainContext from "./context/Context";
import { useState } from "react";
import ROUTES from "./routes/route";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const router = createBrowserRouter(ROUTES)
  const [data, setData] = useState([]);
  const contextData = { data, setData };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
