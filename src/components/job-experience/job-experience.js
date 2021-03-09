import React, {Fragment} from "react";
import JobExperienceData from "../../data/job-experience";
import "./job-experience.scss";

const Projects = ({projects, company}) => {
  return (projects.map((project, idx) => (
    <Fragment key={`${company}-project-${idx}`}>
      <span className="job__project-name">{project.name}</span>
      <p>{project.description}</p>
    </Fragment>
  )));
};

const JobExperienceElement = ({
  company,
  position,
  dates,
  description,
  keywords,
  projects
}) => {
  return (
    <div className="job">
      <h3 className="job__title">{position}</h3>
      <span className="job__company">
        {company}
        / {dates}
      </span>
      { 
        description.map((paragraph, idx) => (<p className="job__description" key={idx}>{paragraph}</p>))
      }
      {projects && projects.length > 0 && <Projects company={company} projects={projects}/>}

      <p className="job__keywords">
        {keywords.map((word, idx) => (
          <span key={`keyword-${idx}`}>{word + ", "}</span>
        ))}
      </p>
    </div>
  );
};

const JobExperience = () => {
  return (
    <section className="experience">
      {JobExperienceData.map((ExperienceData, idx) => (<JobExperienceElement key={`job-${idx}`} {...ExperienceData}/>))}
    </section>
  );
};

export default JobExperience;
