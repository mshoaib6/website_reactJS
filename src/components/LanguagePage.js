import React, { useEffect } from "react";
import PageSwitch from "./PageSwitch";

const langList = {
  "Programming Languages": [
    {
      C: {
        experience: [
          "Pointer Arithmetic",
          "Manipulation of text files and textual data.",
          "Multithreading",
          "Building and using C libraries"
      ],
        projects: [
          {
            title: "Production Line Scheduler",
            details:
              "Created an application to help a company to schedule production under best utilization of its plants.",
          }, {
            title: "Embedded Programming",
            details: "Used C to write the program for an embedded board."
          },
          {
            title: "Match-Three Puzzle Game",
            details:
              "Developed a user-unfriendly match-three puzzle (Candy Crush like) game.",
          }
        ],
      },
    },
    {
      "C++": {
        experience: [
          "STL",
          "Modern C++ (e.g. C++20)",
          "RAII",
          "Return Value Optimazation (RVO)"
        ],
        projects: [
          {
            title: "RMQ problem",
            details:
              "Implemented an algorithm for solving the RMQ problem with a time complexity of O(lg n).",
          },
          
        ],
      },
    },
    {
      Java: {
        experience: [
          "Object-oriented programming (OOP) concepts and patterns",
          "Abstract classes and interfaces",
          "Constructors",
          "File I/O and serialization",
          "Collections: lists, maps, sets"
        ],
        projects: [
          {
            title: "Jungle Game",
            details: "The program randomly initializes the N*M candy field with 6 candy types and prints it out. The program then checks if there are any possible swaps and provides the user with a hint to recognize the swap, that could either be from the hint or the other indexes. The scores are updated and displayed accordingly.",
          },
        ],
      },
    },
    {
      JavaScript: {
        experience: [
          "Microtasks and macrotasks",
          "Promise",
          "ES6"
        ],
        projects: [
          {
            title: "Live Web Chat Application",
            details: "Two users can chat with each other in real-time.",
          },
        ],
      },
    },
    {
      Python: {
        experience: [
          "Numpy, MatPlotlib, and Sickit Learn",
          "Pandas and torchvision libraries",
          "Tkinter",
          "Data Structures",
          "File Handling"
        ],
        projects: [
          {
            title: "CNN training model",
            details: "Implemented a CNN model with a 90%+ accuracy.",
          },
          {
            title: "DevOps Simulation",
            details: "The simulation is designed to help the user learn various techniques and judge the best choices to make the project release in time. The player is asked to pick the best possible scenarios - as the key decision maker of the DevOps team - aiming to develop a vacation rental online marketplace platform.",
          },
        ],
      },
    },
  ],

  "Web Related Technologies": [
    {
      "React.js": {
        experience: [
          "Class Components and Functional Components",
          "React Hooks",
        ],
        projects: [
          {
            title: "React Graph",
            details:
              "Implemented a Web Application and can handle simple data to display graphs.",
          },
        ],
      },
    },
    {
      "Node.js": {
        experience: [
          "Basic operations of Node.js",
          "Commonly used libraries (e.g. Express.js)",
          "Web Security middleware: Passport",
          "Bcrypt: hashing algorithm (npm package) for encryption"
        ],
        projects: [
          {
            title: "Backend Service",
            details:
              "Used Node.js to establish a backend server as an API server.",
          },
        ],
      },
    },
    {
      SQL: {
        experience: ["CRUD operations",
        "SQL Joins skills",
        "Indexing skills",
        "Related SQL system skills",
        "OLAP skills"
      ],
        projects: [
          {
            title: "Student Databse",
            details:
              "Implemented a Student Database to record the student's academic performances.",
          },
        ],
      },
    },
    {
      NoSQL: {
        experience: [
          "Simple CRUD operations",
          "Pipelining and aggregation",
          "Proficient in AWS DynamoDB"
        ],
        projects: [
          {
            title: "API server storage",
            details:
              "Implemented a database for storing the information of a web application and handling the API requests.",
          },
        ],
      },
    },
  ],
};

function LanguagePage() {
  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children;
    for (let i = 0; i < children.length; i++) {
      let ele = children[i];
      ele.className += " custom-fade";
      ele.style.animationDelay = i / speed + "s";
    }
  };

  useEffect(() => {
    addAnimationDelay(".select-fade", 2);
  }, []);

  return (
    <div className="p-3 d-flex flex-column">
      <div className="row lang-bg page-header text-white p-0 m-0 more-rounded mb-4">
        <h1 className="col-md-4 p-5"></h1>
        <p
          className="col-md white-trans-bg p-5 m-0"
          style={{ fontSize: "20px" }}
        >
          “Programs must be written for people to read, and only incidentally
          for machines to execute.” ― Harold Abelson, Structure and
          Interpretation of Computer Programs
        </p>
      </div>
      <div className="flex-grow-1">
        <PageSwitch pages={langList} defaultPage="C">
          {Object.keys(langList).map((section) => {
            return langList[section].map((langauge) => {
              let lang = Object.keys(langauge)[0];
              return (
                <div key={lang} className="flex-grow-1" pageValue={lang}>
                  <h1>{lang}</h1>
                  {langauge[lang].experience.length > 0 && <h3>Knowledge</h3>}
                  <ul>
                    {langauge[lang].experience.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                  <h3>Project</h3>
                  <div>
                    {langauge[lang].projects.map((project) => (
                      <div>
                        <h5>{project.title}</h5>
                        <p>{project.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            });
          })}
        </PageSwitch>
      </div>
    </div>
  );
}

export default LanguagePage;
