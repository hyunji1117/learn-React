import { RouterProvider } from "react-router";
// import router from "./routes";
import router from "./routes-lazy";
import './App.css';

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App
