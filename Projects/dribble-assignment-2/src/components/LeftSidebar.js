import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='text-align-start bg-primary' id='left-sidebar'>
      <div className="header pt-5">
      <h2 className="lead text-center mb-5 fw-bold"><i class="bi bi-caret-right pe-2"></i> CFX</h2>
      </div>

      <div id="sidebar-items">
        <p className="text-center my-3 py-2"><i class="bi bi-house-door pe-2"></i> Home</p>

        <p className="text-center my-3 py-2"><i class="bi bi-grid pe-2"></i> Discover</p>

        <p className="text-center my-3 py-2"><i class="bi bi-pie-chart pe-2"></i> Popular</p>

        <p className="text-center my-3 py-2"><i class="bi bi-people pe-2"></i> Following</p>

        <p className="text-center my-3 py-2"><i class="bi bi-cast pe-2"></i> Streaming</p>

        <p className="text-center my-3 py-2"><i class="bi bi-clock pe-2"></i>History</p>

        <p className="text-center my-3 py-2"><i class="bi bi-heart pe-2"></i>Liked</p>
        
        <p className="text-center my-3 py-2"><i class="bi bi-gear pe-2"></i> Settings</p>
      </div>

    </div>
  )
}

export default LeftSidebar