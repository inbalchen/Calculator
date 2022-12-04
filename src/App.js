import {Routes,Route,BrowserRouter} from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Login from "./components/Login";
import History from "./components/History";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Calculator />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  );
}