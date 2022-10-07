import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/shared/ScrollToTop";
import NotFound from "./components/shared/NotFound";
import "./assets/css/main.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Layout set={setDark} dark={dark}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
