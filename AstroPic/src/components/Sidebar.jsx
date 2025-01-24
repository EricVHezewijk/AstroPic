import React from 'react'

export default function Sidebar( {handleToggleModal} ) {
  return (
    <div className='sidebar'>
      <div className='bgOverlay' onClick={handleToggleModal}></div>
        <div className="sidebarContents">
          <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur porro nemo unde suscipit, officiis possimus eos deserunt culpa numquam.</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}
