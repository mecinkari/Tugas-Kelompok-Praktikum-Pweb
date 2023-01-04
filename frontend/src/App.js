import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import Home from "./components/Home";

function App() {
  document.title = "Aplikasi CRUD dengan React.JS";
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambahdata" element={<AddForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
