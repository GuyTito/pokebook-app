import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
