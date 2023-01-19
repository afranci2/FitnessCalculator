import { useRef, React } from "react";
import { Component } from "react";
import { useState } from "react";
import Activity from "../Activity/Activity";

const Form = () => {
  const [gender, setGender] = useState();
  const [imperial, metric] = useState();

  const ageInputRef = useRef();
  const weightInputRef = useRef();
  const sexInputRef = useRef();
  const sex1InputRef = useRef();

  const heightInputRef = useRef();
  const bodyFatInputRef = useRef();

  let submitHandler = (event) => {
    event.preventDefault();
    const enteredUnits = imperial;
    const enteredAge = ageInputRef.current.value;
    const enteredWeight = weightInputRef.current.value;
    const enteredSex = gender;
    const enteredHeight = heightInputRef.current.value;
    const enteredBodyFat = bodyFatInputRef.current.value;

    const personData = {
      units: enteredUnits,
      age: enteredAge,
      weight: enteredWeight,
      sex: enteredSex,
      height: enteredHeight,
      bodyFat: enteredBodyFat,
    };

    console.log(personData);
  };

  let radioHandler = (event, data) => {
    console.log("hey");
  };

  return (
    <section>
      <form className="flex flex-col gap-4 p-4">
        <div className="something flex flex-col gap-4">
          <div className="unit flex gap-4 text-sm font-bold">
            <div className="option1 flex gap-2">
              <label htmlFor="imperial">Imperial</label>
              <input
                name="units"
                onBlur={(e) => metric(e.target.value)}
                className="rounded-sm"
                type="radio"
                value="Imperial"
              />
            </div>

            <div className="option2 flex gap-2">
              <label htmlFor="metril">Metric</label>
              <input
                name="units"
                onChange={(e) => metric(e.target.value)}
                className="rounded-sm"
                type="radio"
                value="Metric"
              />
            </div>
          </div>
          <label htmlFor="age">Age:</label>
          <input
            onChange={submitHandler}
            className="rounded-sm"
            type="number"
            required
            id="age"
            ref={ageInputRef}
          />
          <label htmlFor="weight">Weight:</label>
          <input
            onChange={submitHandler}
            className="rounded-sm"
            type="number"
            required
            id="Weight"
            ref={weightInputRef}
          />
          <div className="sex-options flex text-sm font-bold gap-2">
            <div className="option1 flex gap-2">
              <label htmlFor="sex">Male</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                className="rounded-sm"
                type="radio"
                required
                id="sex"
                ref={sexInputRef}
                name="sex"
                value="Male"
              />
            </div>
            <div className="option2 flex gap-2">
              <label htmlFor="sex">Female</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                className="rounded-sm"
                type="radio"
                required
                id="sex2"
                ref={sex1InputRef}
                name="sex"
                value="Female"
              />
            </div>
          </div>

          <label htmlFor="height">Height (in):</label>
          <input
            onBlur={submitHandler}
            className="rounded-sm"
            type="number"
            required
            id="height"
            ref={heightInputRef}
          />
          <label htmlFor="bodyFat">Body Fat %:</label>
          <input
            onBlur={submitHandler}
            className="rounded-sm"
            type="number"
            id="bodyFat"
            ref={bodyFatInputRef}
          />
        </div>
      </form>
    </section>
  );
};

export default Form;
