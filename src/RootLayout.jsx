import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayout() {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
        </ul>
      </nav>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Outlet />
    </>
  );
}
