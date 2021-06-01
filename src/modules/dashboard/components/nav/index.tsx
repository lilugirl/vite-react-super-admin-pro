import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <NavLink to="/dashboard/user">User</NavLink>

      <NavLink to="/dashboard/product">Product</NavLink>
    </>
  );
};
export default Nav;
