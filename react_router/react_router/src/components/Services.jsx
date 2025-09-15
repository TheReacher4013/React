import React from 'react'
import { Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
        <div>
            <h2>Services1</h2>
        </div>
          <div>
              <h2>Services2</h2>
          </div>
          <div>
              <h2>Services</h2>
          </div>
          <div>
              <h2>Services</h2>
          </div>
          <div>
              <h2>Services</h2>
          </div>
          <div>
            <Outlet />
          </div>
    </div>
  )
}

export default Services