import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./SupaCon";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
  <div className="navbar">

    <h2 className="logo">Fitness Tracker</h2>

    <div className="nav-links">

      <Link to="/home">Home</Link><br></br>

      <Link to="/dashboard">Dashboard</Link><br></br>

      <Link to="/workouts">Workouts</Link><br></br>

      <Link to="/goals">Goals</Link><br></br>

      <Link to="/profile">Profile</Link><br></br>

      <button onClick={handleLogout}>Log Out</button>

    </div>

  </div>
);
}

export default Navbar;