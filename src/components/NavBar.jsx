import React from "react";
import { Turn as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { toggleDrawer } from "../features/toggle/toggle";
const NavBar = () => {
  const openDrawer = useSelector((state) => state.toggle.openDrawer)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <div className="w-full flex justify-center bg-gray-900 ">
        <div className="w-full p-1 md:w-9/12 text-white flex items-center justify-between">
          <div className="w-64 text-xs flex justify-between">
            <Link to={'/'}>Health Info CRUD</Link>
          </div>
          <div>
            <Hamburger size={20} toggle={()=>{
              dispatch(toggleDrawer())
            }} toggled={openDrawer} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
