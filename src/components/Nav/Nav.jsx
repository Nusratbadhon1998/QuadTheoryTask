import React from "react";
import Container from "../Container";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";


import './style.css'
import { FaUser } from "react-icons/fa";

function Nav() {
  return (
    <Container>
      <div className="flex justify-around">
        <div className="font-bold open-sans text-2xl">pti.</div>
        <form className="flex gap-4 relative">
          <input placeholder="Search AudioBook" className=" w-96 rounded-lg pl-9 placeholder:font-semibold " type="text" name="" id="" />
          <IoSearchOutline className="absolute text-[#fd6011] left-3 top-4"/>
          <select className=" w-40 p-3 rounded-lg uppercase font-bold" name="menu" id="menu">
            <option className="uppercase" selected disabled value="Menu">
              Menu
            </option>
            <option value="Details">Details</option>
            <option value="Category">Category</option>
            <option value="My Favorite">My Favorites</option>
            <option value="Profile">Profile</option>
            <option value="Login">Login</option>
          </select>
        </form>
        <div className="bg-[#fd6011] size-11 rounded-full flex justify-center items-center">
          <FaRegUser className="text-white "/>
        </div>
      </div>
    </Container>
  );
}

export default Nav;
