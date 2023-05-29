import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar1.css'

export default function Navbar1() {
  return (
    <div>
        <header>
            <logo>
                <h1>Logo</h1>
            </logo>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
