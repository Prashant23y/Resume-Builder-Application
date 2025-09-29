import React, { useState } from "react";

const SkillQuiz = ({ selectedSkills, setSelectedSkills }) => {
    const skillOptions = [
        "JavaScript",
        "React",
        "CSS",
        "Node.js",
        "Python",
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Leadership",
    ];

    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <div className="resume-section">
            <h2>Skill Assessment Quiz</h2>
            <p>Select your skills to add suggestions:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {skillOptions.map((skill) => (
                    <label key={skill} style={{ cursor: "pointer" }}>
                        <input
                            type="checkbox"
                            checked={selectedSkills.includes(skill)}
                            onChange={() => toggleSkill(skill)}
                        />{" "}
                        {skill}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default SkillQuiz;
