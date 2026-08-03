import { NavLink } from "react-router-dom";

type Props = {

};

const Navigation = (props: Props) => {
  return (
      <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/about">About</NavLink>
      </nav>
  )
}

export default Navigation;
