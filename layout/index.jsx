import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  console.log();
  return (
    <div className="min-h-screen">
      <Header />

      {props.children}

      <Footer />
    </div>
  );
};

export default Layout;
