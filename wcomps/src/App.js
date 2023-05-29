import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar1 from "./Pages/Components/Navbars/Navbar1";
import Test1 from "./Pages/Components/Tests/Test1";
import Test2 from "./Pages/Components/Tests/Test2";
import Test3 from "./Pages/Components/Tests/Test3";
import Test4 from "./Pages/Components/Tests/Test4";
import Test5 from "./Pages/Components/Tests/Test5";
import Test6 from "./Pages/Components/Tests/Test6";
import Test7 from "./Pages/Components/Tests/Test7";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="nav1" element={<Navbar1 />} />
        <Route path="test1" element={<Test1 />} />
        <Route path="test2" element={<Test2 />} />
        <Route path="test3" element={<Test3 />} />
        <Route path="test4" element={<Test4 />} />
        <Route path="test5" element={<Test5 />} />
        <Route path="test6" element={<Test6 />} />
        <Route path="test7" element={<Test7 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
