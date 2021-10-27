import "../styles/globals.css";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header title={"Dream Day"} subtitle={"WEDDING PLANNER"} />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;
