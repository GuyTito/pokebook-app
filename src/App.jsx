import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./pages/HomeView";
import ListView from "./pages/ListView";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeView />} />
            <Route path="listview" element={<ListView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
