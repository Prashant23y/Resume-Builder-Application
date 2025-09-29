import React from "react";

const LivePreview = ({ data }) => {
    const { personalInfo, education, experience, skills } = data;

    return (
        <div className="resume-preview-container">
            <h2>{personalInfo.fullName || "Your Name"}</h2>
            <p>
                {personalInfo.email || "you@example.com"} | {personalInfo.phone || "123-456-7890"}
            </p>
            {personalInfo.linkedIn && <p>LinkedIn: {personalInfo.linkedIn}</p>}
            {personalInfo.portfolio && <p>Portfolio: {personalInfo.portfolio}</p>}

            <section>
                <h3>Education</h3>
                <p>
                    {education.degree} at {education.school} ({education.graduationYear})
                </p>
            </section>

            <section>
                <h3>Experience</h3>
                <p>
                    {experience.jobTitle} at {experience.company} ({experience.yearsWorked})
                </p>
                <p>{experience.jobDescription}</p>
            </section>

            <section>
                <h3>Skills</h3>
                <p>{skills}</p>
            </section>
        </div>
    );
};

export default LivePreview;
