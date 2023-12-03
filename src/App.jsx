/* eslint-disable react/jsx-no-undef */

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routes from "./routes/index";
import Footer from "./Components/Footer/Footer";



const App = () => {

  return (
    <>
      <Navbar />
      <Routes />



      <Footer />
    </>

  );
};

export default App;