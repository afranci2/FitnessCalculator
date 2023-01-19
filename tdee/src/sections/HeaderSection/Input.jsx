import React from "react";
import { Component } from "react";
import { useState } from "react";
import Form from "../../components/Form/Form"
import Activity from "../../components/Activity/Activity"


const Input = () => {
  return (
    <section className="navbar w-5/6 h-auto m-auto flex">
    <Form/>
    <Activity/>
    </section>
  );
};

export default Input;
