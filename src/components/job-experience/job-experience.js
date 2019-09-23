import React from "react";
import JobExperienceData from "../../data/job-experience";
import "./job-experience.scss";

const JobExperienceElement = ({
  company,
  position,
  dates,
  description,
  keywords
}) => {
  return (
    <div className="job">
      <h3 className="job__title">{position}</h3>
      <span className="job__company">
        {company} / {dates}
      </span>
      <p className="job__description">{description}</p>
      <p className="job__keywords">
        {keywords.map((word, idx) => (
          <span key={`keyword-${idx}`}>{word + ", "} </span>
        ))}
      </p>
    </div>
  );
};

const JobExperience = () => {
  console.log(JobExperienceData);
  return (
    <section className="experience">
      {JobExperienceData.map((ExperienceData, idx) => (
        <JobExperienceElement key={`job-${idx}`} {...ExperienceData} />
      ))}
    </section>
  );
};

export default JobExperience;
