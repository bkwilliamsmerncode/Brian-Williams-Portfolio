import React from "react";
import "./ResumeContent.css";

const ResumeContent = () => {
  return (
    <>
      <div className="summary">
        <h2>Summary:</h2>
        <p>
          Detailed-oriented web developer with 2 years of experience in creating
          dynamic, user-friendly websites. Proficient in HTML, CSS, JavaScript,
          React, MongoDB, Express, Node.JS, MaterialUI, Tailwind.CSS. Strong
          problem solving skills with a passion for staying updated on emerging
          technologies. Proven track record in collaborating with
          cross-functional teams to deliver high-quality, responsive web
          solutions. Seeking to leverage expertise in SPA applications to drive
          innovation and elevate user experiances.
        </p>
        <br />
        <h3>Hard Skills:</h3>
        <p>
          Tools & Technologies: JavaScript | ES6 | HTML5 | CSS3 | React | JQuery
          | Bootstrap | Pug | Node.js | Agile Methodologies | Github | G-Suits |
          Jira | Confluence | Firebase | Scrum | Next.js | Tailwind.css |
          MaterialUI
        </p>
        <br />
        <h3>Soft Skills:</h3>
        <p>
          Communication | Creative Thinking | Adaptability | Problem Solving |
          Time Management | Client Relations | Networking | Leadership
        </p>
        <br />
        <h2>Work Experience:</h2>
        <h3>Banyan Labs, Remote - Web Developer</h3>
        <p>October 2023 - Present</p>
        <ul>
          <li>
            Developed responsive web applications from scratch, ensuring
            cross-browser compatibility and mobile responsiveness.
          </li>
          <li>
            Implemented UI/UX designs, collaborating closely with designers to
            achieve visually appealing and functional interfaces.
          </li>
          <li>
            Version control using Git and knowledge of related platforms like
            Github.
          </li>
        </ul>
        <br />
        <h3>Caption Call, Tucson, AZ - Team Lead Supervisor</h3>
        <p>October 2016 - Present</p>
        <ul>
          <li>
            {" "}
            Utilized Dragon speech to text software to relay a one sided
            conversation to the hearing impaired.
          </li>
          <li>
            {" "}
            Led and trained a team of 20 customer service representatives,
            trained them with company software achieving a goal of 100% accuracy
            on their calls, through consistent cycles of coaching and feedback.
          </li>
        </ul>
        <br />
        <h3>J Gilbert Footwear, Tucson, AZ - Manager</h3>
        <p>August 2013 - September 2016</p>
        <ul>
          <li>Shipped and received high end boots, shoes and clothing.</li>
          <li>
            Implemented Intuits point of sale software to handle inventory
          </li>
          <li>
            Set up and managed a new location where I oversaw I.T. department.
          </li>
        </ul>
        <br />
        <h3>Agero, Tucson, AZ - Customer Service Representative</h3>
        <p>September 2011 - July 2013</p>
        <ul>
          <li>
            Took inbound calls from stranded motorists and dispatched tow
            services.
          </li>
          <li>
            Within 6 months I advanced to a coaching position so I could train
            incoming employees to lower call times by 40%.
          </li>
          <li>
            Within a yeah I advanced to a supervisor role so I could continue to
            train and rate incoming employees on their calls.
          </li>
        </ul>
        <br />
        <h2>Education | Certification:</h2>
        <h3>
          Persevere Coding Boot Camp, Eloy, AZ - Full Stack Certification in
          MERN
        </h3>
        <p>October 2022 - November 2023</p>
        <p>
          Developed skills in HTML5, CSS3, and the javaScript programming
          language. Developed skills in front-end libraries such as React and
          Redux as well as learned to use the MongoDB database to create
          schemas, save user data to the database and spin up an Express server
          in a Node.js environment . As well as create and deploy full CRUD
          applications and websites.
        </p>
        <br />
        <h3>
          Pima Community College, Tucson, AZ - System Administration &
          Networking
        </h3>
        <p>August 2011 - May 2013</p>
        <p>
          Associates Degree in System Administration and Networking. Certified
          in Unix/Linux, windows 7/10, windows server 12/13, trained how to
          install and fix multiple operating systems and assemble a personal
          computer.
        </p>
        <br />
      </div>
    </>
  );
};

export default ResumeContent;
