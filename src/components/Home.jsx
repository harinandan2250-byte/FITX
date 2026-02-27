import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {

  const [activeSection, setActiveSection] = useState("");

  return (
    <div>
      <Navbar/>

      <div className="home-container">

        <h1>Welcome Back!</h1>
        <p>Track your fitness progress and stay motivated!</p>

        {/* CLICKABLE CARDS */}
        <div className="home-card-container">

          <div 
            className="home-card"
            onClick={() => setActiveSection("workout")}
          >
            <h3>Workout Split</h3>
          </div>

          <div 
            className="home-card"
            onClick={() => setActiveSection("suggestions")}
          >
            <h3>Suggestions</h3>
          </div>

          <div 
            className="home-card"
            onClick={() => setActiveSection("calories")}
          >
            <h3>Burn Calories</h3>
          </div>

        </div>

        {/* CONTENT SHOW AFTER CLICK */}

        {activeSection === "workout" && (
          <div className="result-box">
            <h2>Workout Split</h2>
            <p>Monday : Chest + Triceps</p>
            <p>Tuesday : Back + Biceps</p>
            <p>Wednesday : Shoulders</p>
            <p>Thursday : Legs</p>
            <p>Friday : Full Body</p>
          </div>
        )}

        {activeSection === "suggestions" && (
          <div className="result-box">
            <h2>Suggestions</h2>
            <p>Drink 3L Water Daily</p>
            <p>Sleep Minimum 7 Hours</p>
            <p>Stretch Before Workout</p>
            <p>Eat Protein Rich Food</p>
          </div>
        )}

        {activeSection === "calories" && (
          <div className="result-box">
            <h2>Burn Calories</h2>
            <p>Running - 300 kcal</p>
            <p>Cycling - 250 kcal</p>
            <p>Skipping - 200 kcal</p>
            <p>Walking - 150 kcal</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;