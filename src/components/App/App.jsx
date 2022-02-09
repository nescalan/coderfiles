import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
  Home,
  Layout,
  NoPage,
} from "../../pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter to={process.env.PUBLIC_URL + "/"}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/coderfiles" element={<Home />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
          <Route path="/exercise3" element={<Exercise3 />} />
          <Route path="/exercise4" element={<Exercise4 />} />
          <Route path="/exercise5" element={<Exercise5 />} />
          <Route path="/exercise6" element={<Exercise6 />} />
          <Route path="/exercise7" element={<Exercise7 />} />
          <Route path="/exercise8" element={<Exercise8 />} />
          <Route path="/exercise9" element={<Exercise9 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
