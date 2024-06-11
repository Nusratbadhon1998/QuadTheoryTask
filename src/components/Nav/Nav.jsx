import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import "./style.css";
import Container from "../Container";

function Nav() {
  return (
    <Container >
      <nav className="flex justify-between items-center  pt-10">
      <div className="font-bold open-sans text-3xl">pti.</div>
      <form className="flex gap-1 lg:gap-4 relative">
        <input
          placeholder="Search AudioBook"
          className="border ml-3 w-50 lg:w-96 rounded-lg pl-9 placeholder:font-semibold "
          type="text"
          name=""
          id=""
        />
        <IoSearchOutline className="absolute text-[#fd6011] left-3 top-4" />
        <select
          className="border w-24 lg:w-40 p-3 rounded-lg uppercase font-bold"
          name="menu"
          id="menu"
        >
          <option className="sm:text-sm lg:text-xl uppercase" selected disabled value="Menu">
            Menu
          </option>
          <option value="Details">Details</option>
          <option value="Category">Category</option>
          <option value="My Favorite">My Favorites</option>
          <option value="Profile">Profile</option>
          <option value="Login">Login</option>
        </select>
      </form>
      <div className="hidden  bg-[#fd6011] size-11 rounded-full lg:flex justify-center items-center">
        <FaRegUser className="text-white " />
      </div>
      </nav>
     
    </Container>
  );
}

export default Nav;
