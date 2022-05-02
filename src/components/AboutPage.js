import React, { useEffect } from "react";


function AboutPage() {
  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children;
    for (let i = 0; i < children.length; i++) {
      let ele = children[i];
      ele.className += " custom-fade";
      ele.style.animationDelay = i / speed + "s";
    }
  };

  useEffect(() => {
    addAnimationDelay(".fade-pic", 5);
  }, []);

  return (
    <div className="about-bg row min-vh-150 p-0 m-0">
      <div className="col-md bg-dark text-white p-5">
      <h1>About Me</h1>
      <p>Hello, I'm Muhammad. A final year Computing student at PolyU.</p>
      <p>
        I'm a cautious person who is also good at logical thinking and
        problem-solving. My research interests lie primarily in Computer and Network Security, spanning Cryptography, Secure Computation and more specifically, Blockchain Security. 
        My currently ongoing research work – as a part of my capstone project – at my home university is concentrated on Blockchain Security and Performance Analysis.
        I aspire to pursue a Ph.D. in Computer Science with the objective of becoming a professor and being able to teach and conduct research at a university. 
      </p>
      <p>
      During my summer exchange at the University of Cambridge, I led a team of undergraduates to perform penetration testing on the Tallinn University of Technology’s servers. Through reconnaissance, an intelligent vulnerability assessment, and adherence to regulatory requirements, we were successfully able to help TalTech identify vulnerabilities within their organizational servers. 
      My performance in the program was applauded by Professor Kieren Niĉolas Lovell, who later invited me to attend a cyber-security summit at the Tallinn University of Technology. 
      </p>
      <p>
      As a first-generation college student from a working class Pakistani household, I consider myself lucky to have encountered some life tribulations that have shaped my perspective. Receiving a high-quality education has proven to be a struggle for me throughout the years. It was unfortunate that my secondary schooling took place during a period in which my father's business experienced a setback.
      Throughout the years that followed, my subconscious has reminded me to put up my best effort in school in order to reduce the financial burden on my family. 
      </p>



      <p>
      My experience hanging around the UG Summer Research Abroad Program at the MIT Hong Kong Node and my capstone project in Blockchain Systems Security has kindled my desire to pursue advanced study.
      To know more about the research institutions and laboratories I want to work at, head over to the 'Research Interests' section.
      </p>
      </div>
      <div
        className="fade-pic col-md row m-auto d-flex flex-row align-items-center m-5 p-5"
      >

      </div>
    </div>
  );
}

export default AboutPage;
