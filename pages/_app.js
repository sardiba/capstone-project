import "../styles/globals.css";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import { VendorProvider } from "../context/VendorContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header title={"Dream Day"} subtitle={"WEDDING PLANNER"} />
      <VendorProvider>
        <Component {...pageProps} />
      </VendorProvider>
      <Navbar />
    </>
  );
}

export default MyApp;
