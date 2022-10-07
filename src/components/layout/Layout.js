import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, set, dark }) {
  return (
    <div
      className={dark ? "dark" : ""}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header setDark={set} dark={dark} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;


