import React from "react";

const Experience = ({ data, update }) => {
    return (
        <section className="resume-section">
            <h2>Work Experience</h2>
            <input
                type="text"
                placeholder="Job Title"
                value={data.jobTitle}
                onChange={e => update("experience", "jobTitle", e.target.value)}
            />
            <input
                type="text"
                placeholder="Company Name"
                value={data.company}
                onChange={e => update("experience", "company", e.target.value)}
            />
            <input
                type="text"
                placeholder="Years Worked"
                value={data.yearsWorked}
                onChange={e => update("experience", "yearsWorked", e.target.value)}
            />
            <textarea
                placeholder="Job Description"
                value={data.jobDescription}
                onChange={e => update("experience", "jobDescription", e.target.value)}
            />
        </section>
    );
};

export default Experience;
