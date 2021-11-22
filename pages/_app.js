import "../styles/globals.css";
import { VendorProvider } from "../context/VendorContext";
import Header from "../components/layout/header";
import Navbar from "../components/layout/Navbar";

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
