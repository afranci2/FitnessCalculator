import React from "react";
import { Component } from "react";
import { useState } from "react";
import FormDataList from "./FormDataList";

const ACTIVITY_LEVEL = [
  {
    id: "1",
    title:
      "Completely Paralyzed, Comatose, Unable to Move Without the aid of Others (1.0)",
    value: 1.0,
  },
  {
    id: "2",
    title:
      "Immobile, Stationary with Some Arm Movement, Bedridden, or Partially Paralyzed (1.05)",
    value: 1.05,
  },
  {
    id: "3",
    title:
      "Constricted Lifestyle, Movement is Limited to a Confined Space, Almost Always Sitting or Laying (1.1)",
    value: 1.1,
  },
  {
    id: "4",
    title:
      "Working From Home with Little to No Travel, No Exercise, Some Walking, Mostly Sitting or Laying (1.16)",
    value: 1.16,
  },
  {
    id: "5",
    title:
      "Sedentary Lifestyle, Little or No Exercise, Moderate Walking, Desk Job (Away from Home) (1.2)",
    value: 1.2,
  },
  {
    id: "6",
    title:
      "Lightly Active, Exercise or Moderate Sports 2 to 3 Days a Week, Light Jogging or Walking 5 to 7 Days a Week (1.425)",
    value: 1.425,
  },
  {
    id: "7",
    title:
      "Moderately Active, Physical Work, Exercise, or Sports 4 to 5 Days a Week, Construction Laborer (1.55)",
    value: 1.55,
  },
  {
    id: "8",
    title:
      "Very Active, Heavy Physical Work, Exercise, or Sports 6 to 7 Days a Week, Hard Laborer (1.75)",
    value: 1.75,
  },
  {
    id: "9",
    title:
      "Extremely Active, Very Heavy Physical Work or Exercise Every Day, Professional/Olympic Athlete (1.9)",
    value: 1.9,
  },
];

const Form = () => {
  return (
    <section className="navbar w-5/6  h-auto m-auto flex">
      <div className="hidden flex flex-col image bg-green-900 h-auto w-full font-bold pl-4 pr-4 pt-4 gap-2 text-sm">
        <div className="heading">
          <h2>Activity Level:</h2>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col gap-2">
            <li key={1} className="hover:bg-slate-200 hover:text-black p-2">
              <label>
                Completely Paralyzed, Comatose, Unable to Move Without the Aid
                of Others (1.0)
              </label>
            </li>
            <li key={1.05} className="tabs">
              <label>
                Immobile, Stationary with Some Arm Movement, Bedridden or
                Partially Paralyzed (1.05)
              </label>
            </li>
            <li key={1.1} className="tabs">
              <label>
                Constricted Lifestyle, Movement is Limited to a Confined Space,
                Almost Always Sitting or Laying (1.1)
              </label>
            </li>
            <li key={1.16} className="tabs">
              <label>
                Working From Home with Little to No Travel, No Exercise, Some
                Walking, Mostly Sitting or Laying (1.16)
              </label>
            </li>
            <li key={1.2} className="tabs">
              <label>
                Sedentary Lifestyle, Little or No Exercise, Moderate Walking,
                Desk Job (Away from Home) (1.2)
              </label>
            </li>
            <li key={1.425} className="tabs">
              <label>
                Lightly Active, Exercise or Moderate Sports 2 to 3 Days a Week,
                Light Jogging or Walking 5 to 7 Days a Week (1.425)
              </label>
            </li>
            <li key={1.55} className="tabs">
              <label>
                Moderately Active, Physical Work, Exercise, or Sports 4 to 5
                Days a Week, Construction Laborer (1.55)
              </label>
            </li>
            <li key={1.75} className="tabs">
              <label>
                Very Active, Heavy Physical Work, Exercise, or Sports 6 to 7
                Days a Week, Hard Laborer (1.75)
              </label>
            </li>
            <li key={1.9} className="tabs">
              <label>
                Extremely Active, Very Heavy Physical Work or Exercise Every
                Day, Professional/Olympic Athlete (1.9)
              </label>
            </li>
          </ul>
        </div>
      </div>
    <div>
    <section className="flex flex-col font-medium text-sm">
        <FormDataList activities={ACTIVITY_LEVEL} />
      </section>
    </div>


    </section>
  );
};

export default Form;
