import { Link } from "react-router-dom";

export default function Pokemon() {
  return (
    <ul>
      <li>
        <Link to="/pokemon/pikachu">Pikachu</Link>
      </li>
      <li>
        <Link to="/pokemon/schiggy">Schiggy</Link>
      </li>
      <li>
        <Link to="/pokemon/glumanda">Glumanda</Link>
      </li>
      <li>
        <Link to="/pokemon/glurak">Glurak</Link>
      </li>
      <li>
        <Link to="/pokemon/pummeluff">Pummeluff</Link>
      </li>
    </ul>
  );
}
