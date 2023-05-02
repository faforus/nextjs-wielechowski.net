import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <main className="page-container">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
