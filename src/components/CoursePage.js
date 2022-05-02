import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../App";

const courseData = [
  {
    sem: "2018/19 Sem 1",
    code: "AMA1104",
    title: "INTRODUCTORY PROBABILITY",
  },
  {
    sem: "2018/19 Sem 1",
    code: "COMP1001",
    title: "PROBLEM SOLVING METHODOLOGY IN INFORMATION TECHNOLOGY",
  },
  {
    sem: "2018/19 Sem 1",
    code: "ELC1013",
    title: "ENGLISH FOR UNIVERSITY STUDIES",
  },
  {
    sem: "2018/19 Sem 1",
    code: "ELC1A01",
    title: "SCIENCE FICTION AS A REFLECTION ON HUMANITY",
  },
  {
    sem: "2018/19 Sem 1",
    code: "MM1L01",
    title: "TANGO! MANAGING SELF & LEADING OTHERS",
  },
  {
    sem: "2018/19 Sem 1",
    code: "APSS1B17",
    title: "CONTEMPORARY CHINESE SOCIETY AND POPULAR CULTURE",
  },
  {
    sem: "2018/19 Sem 2",
    code: "COMP1003",
    title: "STATISTICAL TOOLS AND APPLICATIONS",
  },
  {
    sem: "2018/19 Sem 2",
    code: "COMP1011",
    title: "PROGRAMMING FUNDAMENTALS",
  },
  { sem: "2018/19 Sem 2", code: "COMP2012", title: "DISCRETE MATHEMATICS" },
  {
    sem: "2018/19 Sem 2",
    code: "CBS1151",
    title: "CHINESE I (FOR NON-CHINESE SPEAKING STUDENTS)",
  },
  { sem: "2019/20 Sem 1", code: "COMP2011", title: "DATA STRUCTURES" },
  {
    sem: "2019/20 Sem 1",
    code: "COMP2021",
    title: "OBJECT-ORIENTED PROGRAMMING",
  },
  { sem: "2019/20 Sem 1", code: "COMP2411", title: "DATABASE SYSTEMS" },
  {
    sem: "2019/20 Sem 1",
    code: "COMP2421",
    title: "COMPUTER ORGANIZATION",
  },
  {
    sem: "2019/20 Sem 1",
    code: "MM2021",
    title: "MANAGEMENT & ORGANISATION",
  },
  {
    sem: "2019/20 Sem 1",
    code: "GEC1B12",
    title: "INTERNATIONAL RELATIONS AND GLOBAL ISSUES",
  },
  {
    sem: "2019/20 Sem 2",
    code: "COMP2222",
    title: "INTRODUCTION TO HUMAN-COMPUTER INTERACTION METHODS",
  },
  { sem: "2019/20 Sem 2", code: "COMP3211", title: "SOFTWARE ENGINEERING" },
  { sem: "2019/20 Sem 2", code: "COMP3134", title: "BUSINESS INTELLIGENCE AND CUSTOMER RELATIONSHIP MANAGEMENT" },
  { sem: "2019/20 Sem 2", code: "AF2111", title: "ACCOUNTING FOR DECISION MAKING" },
  { sem: "2019/20 Sem 2", code: "MM4311", title: "STRATEGIC MANAGEMENT" },
  
  {
    sem: "2019/20 Sem 3",
    code: "APSS2S09S",
    title: "SERVICE LEADERSHIP THROUGH SERVING CHILDREN AND FAMILIES WITH SPECIAL NEEDS",
  },
  
  {
    sem: "2020/21 Sem 1",
    code: "COMP2121",
    title: "E-BUSINESS",
  },
  {
    sem: "2020/21 Sem 1",
    code: "COMP3122",
    title: "INFORMATION SYSTEMS DEVELOPMENT",
  },
  {
    sem: "2020/21 Sem 1",
    code: "COMP3235",
    title: "SOFTWARE PROJECT MANAGEMENT",
  },
  {
    sem: "2020/21 Sem 1",
    code: "MM2422",
    title: "MANAGING BUSINESS INFORMATION SYSTEMS & APPLICATIONS",
  },
  { sem: "2020/21 Sem 1", code: "MM3111", title: "HUMAN RESOURCE MANAGEMENT" },
  {
    sem: "2020/21 Sem 1",
    code: "MM4342",
    title: "GLOBAL BUSINESS MANAGEMENT",
  },

  { sem: "2020/21 Sem 2", code: "COMP2322", title: "COMPUTER NETWORKING" },
  { sem: "2020/21 Sem 2", code: "COMP3422", title: "CREATIVE DIGITAL MEDIA DESIGN" },
  { sem: "2020/21 Sem 2", code: "COMP3511", title: "LEGAL ASPECTS AND ETHICS OF COMPUTING" },
  { sem: "2020/21 Sem 2", code: "COMP3531", title: "IT ENTREPRENEURSHIP" },
  { sem: "2020/21 Sem 2", code: "MM2711", title: "INTRODUCTION TO MARKETING" },
  { sem: "2020/21 Sem 2", code: "MM4132", title: "REWARD & PERFORMANCE MANAGEMENT" },

  { sem: "2021/22 Sem 1", code: "COMP3000", title: "WORK INTEGRATED EDUCATION (WIE)" },
  { sem: "2021/22 Sem 1", code: "COMP4142", title: "E-PAYMENT AND CRYPTOCURRENCY" },
  { sem: "2021/22 Sem 1", code: "COMP4512", title: "INTELLECTUAL PROPERTY PROTECTION AND MANAGEMENT" },
  { sem: "2021/22 Sem 1", code: "COMP4913", title: "CAPSTONE PROJECT" },
  { sem: "2021/22 Sem 1", code: "ELC3524", title: "PROFESSIONAL COMMUNICATION FOR COMPUTING STUDENTS" },


];

const semList = [
  "All Sememsters",
  "2018/19 Sem 1",
  "2018/19 Sem 2",
  "2019/20 Sem 1",
  "2019/20 Sem 2",
  "2019/20 Sem 3",
  "2020/21 Sem 1",
  "2020/21 Sem 2",
  "2021/22 Sem 1",
];

function CoursePage() {
  const [courseList, setCourseList] = useState(courseData);
  const [filterInput, setFilterInput] = useState("");
  const [semListFilter, setSemListFilter] = useState("All Sememsters");

  const filterList = () => {
    if (!filterInput && semListFilter === "All Sememsters")
      return setCourseList(courseData);

    let newList =
      courseData.filter((course) => {
        if (
          (course.code.match(`(${filterInput.toUpperCase()})`) ||
            course.title.match(`(${filterInput.toUpperCase()})`)) &&
          (course.sem === semListFilter || semListFilter === "All Sememsters")
        )
          return course;
      }) || [];

    setCourseList(newList);
  };

  useEffect(() => {
    filterList();
  }, [filterInput, semListFilter]);

  const theme = useContext(ThemeContext);
  const lightTheme = "text-dark table-light";
  const darkTheme = "text-white table-dark-theme";
  const checkTheme = () => {
    if (theme === "dark") return darkTheme;
    return lightTheme;
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
    addAnimationDelay(".table-row-fade", 10)
  }, [])

  return (
    <div className="p-3">
      <div className="row course-bg page-header text-white p-0 m-0 more-rounded mb-2">
        <h1 className="col-md-4 p-5">Courses</h1>
        <p
          className="col-md m-0 p-5 white-trans-bg"
          style={{ fontSize: "20px" }}
        >
          “Let us study things that are no more. It is necessary to understand
          them, if only to avoid them.” ― Victor Hugo, Les Misérables
        </p>
      </div>
      <div className="">
        <div className="d-flex flex-wrap">
          {semList.map((sem) => (
            <div
              key={sem}
              className={`${
                sem === semListFilter
                  ? "btn-primary blue-grad-bg"
                  : "btn-outline-primary"
              } rounded-pill btn me-2 mt-2`}
              onClick={() => setSemListFilter(sem)}
            >
              {sem}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="d-flex my-2">
          <input
            className="form-control rounded-pill"
            placeholder="Type the keywords (e.g. Course code, Title) to filter the list and see if I have taken this course"
            type="text"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-pill ms-2 blue-grad-bg"
            onClick={() => setFilterInput("")}
          >
            Clear
          </button>
        </div>
        <table
          className={`shadow-sm table more-rounded border table-hover ${checkTheme()}`}
        >
          <tbody className="table-row-fade">
            <tr className="overflow-hidden">
              <th style={{ width: "20%" }}>Code</th>
              <th>Title</th>
            </tr>
            {courseList.map((course) => (
              <tr key={course.code} className="zoom-hover shadow border">
                <td>{course.code}</td>
                <td>{course.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoursePage;
