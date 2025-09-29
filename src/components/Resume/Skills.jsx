import React from "react";

const Skills = ({ data, update }) => {
    return (
        <section className="resume-section">
            <h2>Skills</h2>
            <input
                type="text"
                placeholder="Skill (e.g., React, Firebase)"
                value={data}
                onChange={e => update(e.target.value)}
            />
        </section>
    );
};

export default Skills;
