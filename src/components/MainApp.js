import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { browserHistory, Router, Route } from 'react-router';
import YoutubeEmbed from "./YoutubeEmbed";
//import "../index.css";

const weekdays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const pageInfo = [
  {
    name: "About Me",
    to: "/about",
    style: "col-xl-4",
    bg: "red-grad-bg text-white",
    info: "Why should you accept/hire me? Let me convince you!",
  },
  {
    name: "Courses",
    to: "/courses",
    style: "col-xl-4",
    bg: "blue-grad-bg text-white",
    info: "My undergraduate coursework is listed here.",
  },
  {
    type: "date",
    name: weekdays[new Date().getDay()],
    to: "/",
    style: "col-xl-4",
    info: new Date().getDate(),
  },
  {
    name: "Research Interests",
    to: "/favorite",
    style: "col-xl-6",
    bg: "purple-grad-bg text-white",
    info: "My career aspirations and the organisations/laboratories that I want to work at are listed here.",
  },
  {
    name: "Programming Knowledge",
    to: "/programming",
    style: "col-xl-6",
    bg: "green-grad-bg text-white",
    info: "Check out my proficiency level and projects that I've done in different programming languages here.",
  },
];

function MainApp() {

  const handleClick = () => {
    window.open("https://www.youtube.com/channel/UCFx68AvRvE8ARU3QXz8Gusw/videos");
  };

  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children
    for (let i = 0; i < children.length; i++) {
      let ele = children[i]
      ele.className += " custom-fade"
      ele.style.animationDelay = i/speed + 's'
    }
  }

  useEffect(() => {
    addAnimationDelay(".nav-tile", 5)
  }, [])

  return (
    <div className="row m-0 min-vh-100 p-0">
      <div className="col-md bg-white p-4 shadow-sm">
        <p className="display-2 mb-5">This is Muhammad!</p>
        <p className="display-4">
          <div className="App">
            <h2>Welcome to my personal portfoilio!</h2>
            <YoutubeEmbed embedId="Q68lk8kPskg" />
          </div>
        </p>
      </div>

      
      <div className="nav-tile col-md row align-self-center p-5">
        <h3 className="">Quick Links</h3>
        {pageInfo.map((page) => (
          <div key={page.name} className={`p-2 ${page.style}`}>
            <Link
              to={page.to}
              style={{ textDecoration: "none", height: "100%" }}
            >
              <div
                className={`${page.bg} cursor-pointer zoom-hover
                h-100 more-rounded p-3 shadow border`}
              >
                <div
                  className={`fw-bold mb-1 ${
                    page.type === "date" ? "text-center" : ""
                  }`}
                >
                  {page.name}
                </div>
                <p
                  className={`${
                    page.type === "date" ? "text-center display-1" : ""
                  }`}
                >
                  {page.info}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
