import React from 'react'
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
        Homepage
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
