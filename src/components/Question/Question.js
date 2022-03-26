import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="qna-container">
      <h1>How useState() Works :</h1>
      <p>
        useState() is an example built-in React hook.React useEffect hook performs side effect in react. useEffect is called only after the component rendered.Hooks make possible to use state and mutability inside function components.This is a great tool for migrating components from class to function form. <br /> It accepts an argument which is the initial value of the state property and returns the current value of state property and a method which is capable of updating that state property. <br />
        useState always returns an array, so we need to destructure it before using them. First value in the array is known as "state variable" and second value as "updater function". <br /> State variable is used to hold the value of state and we can update the state variable using updater function.
      </p>
      <h1>Different Between Props And State :</h1>
      <p>
        Props and State use to manage the data in the react components.
        <br /> <br />
        <b> Props </b>: Props use to pass data to child components.. The data is
        from the parent, so it can’t be modified in the child component. This
        means the Props is the property of the component.Props read only
        property.You can't change or modify this. Props is immutable data it
        means the property of the components.
        <br /> <br />
        <b>State </b>: State is used to handle fluid data within a component,
        and the data can be changed in a component.State is updatable data,
        thats means the state of component.State should not be accessed from
        child components.
      </p>
    </div>
  );
};

export default Question;
