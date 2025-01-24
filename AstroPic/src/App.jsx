import React from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    console.log("handledToggle");
    setShowModal(!showModal);
  }

  return (
    <>
      <Main />
        {showModal && (
          <Sidebar handleToggleModal={handleToggleModal}/>
        )}
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
