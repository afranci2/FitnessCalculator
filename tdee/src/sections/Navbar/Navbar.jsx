import React from 'react'
import {useState} from 'react';
import classes from './navbar.module.scss';

const Navbar = () => {

    const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar w-full bg-[#242424] drop-shadow-lg">
    <div className=" h-auto flex mx-auto w-5/6 space-x-auto p-4 min-h-1/2 gap-10">
        <div className="my-auto mx-auto">
            <p>Hey</p>
        </div>
        <div className=" my-auto mx-auto ">
            <h1 className=' text-md font-bold text-center' >
                Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) Calculator and Treadmill Calculator
            </h1>
        </div>
        <div className=" my-auto mx-auto">
            <p>hey</p>
        </div>

    </div>
    </div>
  )
}

export default Navbar