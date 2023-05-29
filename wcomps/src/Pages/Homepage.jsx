import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      Homepage
      <div>
        <ul>
          <li>
            <Link to="nav1">Home</Link>
          </li>
          <li>
            <Link to="test1">Test 1</Link>
          </li>
          <li>
            <Link to="test2">Test 2</Link>
          </li>
          <li>
            <Link to="test3">Test 3</Link>
          </li>
          <li>
            <Link to="test4">Test 4</Link>
          </li>
          <li>
            <Link to="test5">Test 5</Link>
          </li>
          <li>
            <Link to="test6">Test 6</Link>
          </li>
          <li>
            <Link to="test7">Test 7</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
