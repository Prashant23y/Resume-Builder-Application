import React from "react";

const Education = ({ data, update }) => {
    return (
        <section className="resume-section">
            <h2>Education</h2>
            <input
                type="text"
                placeholder="School / University"
                value={data.school}
                onChange={e => update("education", "school", e.target.value)}
            />
            <input
                type="text"
                placeholder="Degree"
                value={data.degree}
                onChange={e => update("education", "degree", e.target.value)}
            />
            <input
                type="text"
                placeholder="Year of Graduation"
                value={data.graduationYear}
                onChange={e => update("education", "graduationYear", e.target.value)}
            />
        </section>
    );
};

export default Education;
