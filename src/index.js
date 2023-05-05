import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DisplayPC from "./pages/DisplayPC";
import DisplayPS from "./pages/DisplayPS";
import DisplaySW from "./pages/DisplaySW";
import DisplayXB from "./pages/DisplayXB";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="switch" element={<DisplaySW />} />
          <Route path="xbox" element={<DisplayXB />} />
          <Route path="pc" element={<DisplayPC />} />
          <Route path="ps" element={<DisplayPS />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
