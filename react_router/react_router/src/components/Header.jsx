import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div>
        <h1>logo</h1>
        </div> 
        <nav>
            <ul>
                <li>
                    <Link to={'about-us'}>
                    About us
                      </Link>
                </li>
                <li>
                    <Link to={'services'}>
                    Services
                      </Link>
                </li>
                <li>
                    <Link to={'contact-us'}>
                    Contact us
                    </Link>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default Header