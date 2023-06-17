import React from "react";
import logo from "./logo.svg";
import "./App.css";
import withDataLoader from "./components/withDataLoader";
import Bored from "./components/Bored";
import University from "./components/University";

const UniversityWithDataLoader = withDataLoader({
  WrappedComponent: University,
  dataUrl: "http://universities.hipolabs.com/search?country=India",
});

const BoredWithDataLoader = withDataLoader({
  WrappedComponent: Bored,
  dataUrl: "http://www.boredapi.com/api/activity",
});

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <BoredWithDataLoader />
      <UniversityWithDataLoader />
    </div>
  );
}

export default App;
