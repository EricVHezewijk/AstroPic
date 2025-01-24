import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    console.log("handledToggle");
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("DATA\n", data);
      } catch {
        console.log(err.message);
      }
    }
  }, []);

  return (
    <>
      <Main />
      {showModal && <Sidebar handleToggleModal={handleToggleModal} />}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;
