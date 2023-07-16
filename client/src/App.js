import { Routes, Router } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="text-[red]">
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
