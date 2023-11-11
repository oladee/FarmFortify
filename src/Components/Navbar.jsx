import { Link, NavLink } from "react-router-dom";
import ham from "../assets/ham.svg";
// import closeIcon from "../assets/closeMenu.svg"
import Button from "./Buttton";
import About from "../Pages/aboutUs/About";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-7 py-6 md:px-16 lg:px-28 md:py-6 items-center">
        <h1 className="text-xl md:text-3xl text-[#1A7408] font-bold">
          EcoHarvest
        </h1>
        <div className="flex items-center gap-3 md:gap-10">
          <div>
            <select name="" id="" className="text-xl">
              <option value="En">En</option>
            </select>
          </div>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
      <Link>
        <nav className="bg-[#1A7408] py-2 md:py-5">
          <div className="text-white hidden md:flex justify-center lg:gap-24 md:gap-16 text-lg font-normal">
            <div>
              <NavLink to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/About">About Us</NavLink>
            </div>
            <div>
              <NavLink>Loans</NavLink>{" "}
            </div>
            <div>
              <NavLink>Resources</NavLink>
            </div>
            <div>
              <NavLink>Community</NavLink>
            </div>
          </div>
          <div className="flex md:hidden justify-center ">
            <img
              src={ham}
              className="w-11 bg-white rounded-xl"
              alt="ham Icon"
            />
          </div>
        </nav>
      </Link>
    </div>
  );
};

export default Navbar;
