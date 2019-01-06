import React from 'react';
import ProjectCard from './partials/ProjectCard.js'

const cards = [
  {
    projectTitle: "Forest Fire",
    subTitle: "React, NPM and Webpack",
    content: `An application created as an introduction to React.js.
        uses the HTML5 canvas to create a completely responsive animation.`,
    link: "https://github.com/Liannus/Forest-Fire-Simulation",
    imgSide: "left",
    status: "Complete"
  }, {
    projectTitle: "Recipe Repo",
    subTitle: "NodeJS, MongoDB and Express",
    content: `A dynamic website which features CRUD functions allowing
        users to sign-up, login and submit or edit their own recipes.`,
    link: 1,
    imgSide: "right",
    status: "In Development"
  }, {
    projectTitle: "Warframe Tracker",
    subTitle: "OpenCV, Electron, Redux and Jest",
    content: `A desktop application using OpenCV to read from the screen
        and Electron to display profile data.`,
    link: 1,
    imgSide: "left",
    status: "Planned"
  }, {
    projectTitle: "Path of Tools",
    subTitle: "Python, Django, ?",
    content: `A central repository containing recommendations, tools and
        information relating to the game Path of Exile`,
    link: 1,
    imgSide: "right",
    status: "Planned"
  }
];
const Projects = (props) => {
  return (<div>
    <h2>Projects</h2>
    <div className="row">
      {
        cards.map(i => {
          return (<div key={i.projectTitle} className="col-md-6">
            <ProjectCard key={i.projectTitle} projectTitle={i.projectTitle} subTitle={i.subTitle} content={i.content} link={i.link} status={i.status} imgSide={i.imgSide}/>

          </div>);
        })
      }
    </div>
    <style jsx="jsx">
      {
        ` h2 {
          text-align: center;
          color: #fcfaf9;
          margin-bottom: 28px;
        }
         `;
      }</style>
  </div>);
};

export default Projects;
