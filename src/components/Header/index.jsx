import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import imageProfile from "../../images/profile.jpg";

import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import i18next, { changeLanguage } from "i18next";

const Header = () => {
  const context = useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [lang, setLang] = useState("ar");
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setLang(lang);
    console.log(lang);
  }, [lang]);

  useEffect(() => {
    const fullName = localStorage.getItem("fullName");
    setFullName(fullName);
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fillName");
    context.setIsAuthorized(false);
  };

  const changLang = () => {
    changeLanguage(i18next.language === "en" ? "ar" : "en");
    localStorage.setItem("lang", i18next.language);
  };

  return (
    <div className="header">
      <img className="logo" src={imageProfile} alt="profile" />
      <p
        style={{
          marginLeft: "1.25rem",
          fontSize: "1.25rem",
          lineHeight: "4.5rem",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {fullName}
      </p>
      <ul>
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/about">about</NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/todoList">TodoList</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/counters">
            {({ isActive }) => (isActive ? "Counters Active" : "Counters")}
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/tasks">Tasks</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/Gifs">Gifs</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/PostsREducer">PostsREducer</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/MUI">MUI</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/ANT">ANT</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/REACT_BOOTSTRAP">REACT_BOOTSTRAP</NavLink>
        </li>
        <li>
          <button
            style={{ padding: "0.3125rem 0.9375rem", cursor: "pointer" }}
            onClick={() => changLang()}
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <button
            style={{ padding: "0.3125rem 0.9375rem", cursor: "pointer" }}
            onClick={() => logOut()}
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
