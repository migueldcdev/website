import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";

function App() {

  const { theme } = useContext(ThemeContext)  
 
  return (
    <div className={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
