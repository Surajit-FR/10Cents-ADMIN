// import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/Navbar";
import AllRoutes from "./routes/AllRoutes";

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <Header />

      <main className="nxl-container">
        <div className="nxl-content">
          <AllRoutes />
        </div>

        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;