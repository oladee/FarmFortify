import { NavLink } from "react-router-dom";
import ham from "../assets/ham.svg";
import closeIcon from "../assets/closeMenu.svg";
import Button from "./Buttton";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [bodyScrollValue, setBodyScrollValue] = useState(0);
  const [elementscrollValue, setElementScrollValue] = useState(0);

  const [modalAppear, setModalApp] = useState(false);
  const [navAppear, setNavAppear] = useState(false)

  const [userWidth, setUserWidth] = useState(null)

  useEffect(()=>{
    setUserWidth(window.innerWidth)
    if(userWidth < 1024){
      setNavAppear(false)
    }else{
      return
    }
  },[userWidth])

  function handleNavAppear(e) {
    e.preventDefault();
    e.stopPropagation();
    setNavAppear(!navAppear);
  }

  function handleModalAppearance(e) {
    e.preventDefault();
    e.stopPropagation();
    setModalApp(!modalAppear);
  }

  useEffect(() => {
    const getScroll = () => {
      setBodyScrollValue(document.body.scrollTop);
      setElementScrollValue(document.documentElement.scrollTop);
      if (bodyScrollValue > 20 || elementscrollValue > 20) {
        document.getElementById("trans").style.top = "0";
      } else if (elementscrollValue < 10 || bodyScrollValue < 10) {
        document.getElementById("trans").style.top = "";
      }
    };

    window.addEventListener("scroll", getScroll);

    return () => window.removeEventListener("scroll", getScroll);
  }, [bodyScrollValue, elementscrollValue]);

  return (
    <div className="relative">
      <div className="flex justify-between px-7 py-6 md:px-16 lg:px-28 md:py-6 items-center">
        <h1 className="text-xl md:text-3xl text-[#1A7408] font-bold">
          FarmFortify
        </h1>
        <div className="flex items-center gap-3 md:gap-10">
          <div>
            <select name="" id="" className="text-xl">
              <option value="En">En</option>
            </select>
          </div>
          <div>
            <Button onClick={handleModalAppearance} setState={setModalApp}>Contact Us</Button>
          </div>
        </div>
      </div>
      <nav
        className="trans bg-[#1A7408] py-2 md:py-5 fixed w-full overflow-hidden z-30"
        id="trans"
      >
        <div className={navAppear ? "relative top-[-15px] bg-[#D3F5C6] z-50 h-full py-8 px-5 flex flex-col items-center gap-5" : "text-white hidden md:flex justify-center lg:gap-24 md:gap-16 text-lg font-[AeonikReg] font-thin"}>
          <div>
            <NavLink
            to="/"
            style={({isActive}) => {
              return{
                paddingBottom: isActive ?  "5px" : " ",
                borderBottom: isActive ? "3px solid white" : " "
              }
            } }
            >Home</NavLink>
          </div>
          <div>
            <NavLink
            to="/aboutUs"
            style={({isActive}) => {
              return{
                paddingBottom: isActive ? "5px" : " ",
                borderBottom: isActive ?  "3px solid white" : " "
              }
            } }
            >About Us</NavLink>
          </div>
          <div>
            <NavLink
            to="/loans"
            style={({isActive}) => {
              return{
                paddingBottom: isActive ? "5px" : " ",
                borderBottom: isActive ?  "3px solid white" : " "
              }
            } }
            >Loans</NavLink>{" "}
          </div>
          <div>
            <NavLink
            to="/resources"
            style={({isActive}) => {
              return{
                paddingBottom: isActive ? "5px" : " ",
                borderBottom: isActive ?  "3px solid white" : " "
              }
            } }
            >Resources</NavLink>
          </div>
          <div>
            <NavLink
            to="/community"
            style={({isActive}) => {
              return{
                paddingBottom: isActive ? "5px" : " ",
                borderBottom: isActive ?  "3px solid white" : " "
              }
            } }
            >Community</NavLink>
          </div>
        </div>
        <div className="flex md:hidden justify-center ">
          <img src={ham} className="w-11 bg-white rounded-xl" alt="ham Icon" onClick={handleNavAppear} />
        </div>
      </nav>
      <Modal modalAppearance={modalAppear} handleModalAppearance={handleModalAppearance}>
        <Contact handleModalAppearance={handleModalAppearance}/>
      </Modal>
    </div>
  );
};

export default Navbar;

const Contact = ({handleModalAppearance})=> {
  return(<>
  <div className="py-4 px-3">
          <div className="flex items-center justify-between">
          <h4>Contact Us</h4>
          <div>
            <img src={closeIcon} alt="" className="w-8 cursor-pointer" onClick={handleModalAppearance} />
          </div>
          </div>
        </div>
  </>)
}
