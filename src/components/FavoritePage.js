import React, { useState, useEffect } from "react";

const websiteList = [
  
  {
    title: "The Initiative For Cryptocurrencies & Contracts",
    link: "https://www.initc3.org/",
    description:
      "IC3 uniquely meets the blockchain community's urgent need for world-class expertise in computer science that spans cryptography, distributed systems, programming languages, game theory, and system security techniques.",
  },
  {
    title: "Blockchain At Berkeley",
    link: "https://blockchain.berkeley.edu/",
    description:
      "B@B, founded in 2016, is an organization that is considered to be the blockchain hub of the East Bay. B@B debuted the world’s first undergraduate university-accredited blockchain course, Blockchain Fundamentals, taught to about 50 students.",
  },
  {
    title: "Systopia",
    link: "https://systopia.cs.ubc.ca/",
    description:
      "The Systopia lab is part of the Department of Computer Science, at the University of British Columbia that conducts research on a variety of topics, including operating systems, distributed systems, security, and program analysis, having a strong track-record in publishing in top systems, networks, and security conferences and journals.",
  },
  {
    title: "CASLAB",
    link: "https://caslab.csl.yale.edu/",
    description:
      "CASLAB  projects cover a variety of computer architecture and security topics. Several research projects of theirs include Post-Quantum Cryptography, Cloud FPGA Security, Secure Processor Architectures, Hardware Security Verification, Physically Unclonable Functions, and Magnetic Side and Covert Channels.",
  },
  {
    title: "BRC (Blockchain Research Center)",
    link: "https://blockchain-research-center.de/",
    description:
      "BRC aims to study crypto-assets and investigate implications of blockchain technology, to facilitate a better understanding and development of digital economy. The BRC serves as a platform for academia and industry practitioners for scientific discussions and collaborations.",
  },
  {
    title: "BlockSocial",
    link: "https://www.blocksocial.com/",
    description:
      "BlockSocial's mission is to serve as a trusted resource and social community designed to educate, inform, and connect people all over the world in better understanding and capitalizing on this revolutionary and transformative technology, called blockchain.",
  },
];

function FavoritePage() {
  const [selectedSiteLink, setSelectedSiteLink] = useState("");

  const addAnimationDelay = (className, speed) => {
    let children = document.querySelector(className).children;
    for (let i = 0; i < children.length; i++) {
      let ele = children[i];
      ele.className += " custom-fade";
      ele.style.animationDelay = i / speed + "s";
    }
  };

  useEffect(() => {
    addAnimationDelay(".card-fade", 5);
  }, []);

  return (
    <div className="p-3">
      <div className="row fav-bg page-header text-white p-0 m-0 more-rounded mb-2">
        <h1 className="col-md-4 p-5">Research Interests</h1>
        <p
          className="col-md white-trans-bg p-5 m-0"
          style={{ fontSize: "20px" }}
        >
          “How rich we are in knowledge, and in all that lies around us yet to
          learn. Billionaires, all of us.” ― Ursula K. Le Guin
        </p>
      </div>
      <div className="card-fade d-flex flex-wrap">
        {websiteList.map((website) => (
          <div
            key={website.link}
            className=" zoom-hover col-md-3 p-2 cursor-pointer"
          >
            <div
              className="card shadow-sm w-100"
              style={{ height: "100%" }}
              onClick={() => setSelectedSiteLink(website.link)}
            >
              <div
                className="card-img-top purple-grad-bg"
                style={{ height: "5vh" }}
              ></div>
              <div className="card-body text-dark">
                <h3 className="card-title">{website.title}</h3>
                <div className="text-muted">{website.link}</div>
                <p className="card-text">{website.description}</p>
              </div>
              <div className="card-footer text-muted">Click to preview</div>
            </div>
          </div>
        ))}
        <div
          className={`custom-modal ${
            selectedSiteLink ? "show-custom-modal" : "hide-custom-modal"
          }`}
        >
          <div
            className={`p-3 d-flex flex-column bg-white more-rounded border shadow`}
            style={{ width: "80%", height: "90%" }}
          >
            <div className="d-flex flex-row justify-content-end mb-3">
              <a
                className="shadow-sm btn btn-outline-primary rounded-pill ms-2"
                href={selectedSiteLink}
                target="_blank"
              >
                Open in New Tab
              </a>
              <button
                className="shadow-sm btn btn-primary rounded-pill ms-2"
                onClick={() => setSelectedSiteLink("")}
              >
                Close
              </button>
            </div>
            <iframe
              className="flex-grow-1 border more-rounded shadow-sm"
              src={selectedSiteLink}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
