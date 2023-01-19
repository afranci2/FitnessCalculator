import React from "react";
import { useState } from "react";
import classes from "./header.module.scss";
import Form from "../../components/Form/Form";
import Input from "./Input"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar w-full bg-red-900 drop-shadow-lg">
      <div className="text-sm crumbs flex place-content-left w-5/6 m-auto p-6">
        <p> Basal Metabolic Rate </p>
      </div>
      <Input/>
    </div>
  );
};

export default Navbar;
