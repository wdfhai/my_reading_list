import { BrowserRouter, Routes, Route} from "react-router-dom";
import { PageContainer } from "./pages/PageContainer/PageContainer";
import { Saved } from "./pages/Saved/Saved"
import { Search } from "./pages/Search/Search";
import { NotFound } from "./pages/NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PageContainer />}>
              <Route path="/" element={<Search />} />
              <Route path="/Saved" element={<Saved />} />
              <Route path="/Search" element={<Search />} />
              <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
