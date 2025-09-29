import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import PersonalInfo from "../components/Resume/PersonalInfo";
import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import SkillQuiz from "../components/Resume/SkillQuiz";

import html2pdf from "html2pdf.js";

const Dashboard = () => {
    const { user } = useAuth();

    const [resumeData, setResumeData] = useState({
        personalInfo: {
            fullName: "",
            email: "",
            phone: "",
            linkedIn: "",
            portfolio: "",
        },
        education: {
            school: "",
            degree: "",
            graduationYear: "",
        },
        experience: {
            jobTitle: "",
            company: "",
            yearsWorked: "",
            jobDescription: "",
        },
        skills: "",
    });

    const [selectedSkills, setSelectedSkills] = useState([]);

    const previewRef = useRef(null);

    // Sync selectedSkills with resumeData.skills
    useEffect(() => {
        setResumeData((prev) => ({
            ...prev,
            skills: selectedSkills.join(", "),
        }));
    }, [selectedSkills]);

    const updateSection = (section, field, value) => {
        setResumeData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const downloadPdf = () => {
        const element = previewRef.current;
        if (!element) return;

        const options = {
            margin: 0.5,
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="dashboard-container" style={{ paddingTop: "100px" }}>
            {/* Resume form */}
            <div className="resume-form-container">
                <h1 style={{ textAlign: "center" }}>Resume Builder</h1>
                <p style={{ textAlign: "center", color: "#888" }}>
                    Logged in as <strong>{user?.email}</strong>
                </p>

                <PersonalInfo data={resumeData.personalInfo} update={updateSection} />
                <Education data={resumeData.education} update={updateSection} />
                <Experience data={resumeData.experience} update={updateSection} />

                {/* Skill Quiz */}
                <SkillQuiz
                    selectedSkills={selectedSkills}
                    setSelectedSkills={setSelectedSkills}
                />

                {/* Skills text area */}
                <Skills
                    data={resumeData.skills}
                    update={(value) =>
                        setResumeData((prev) => ({
                            ...prev,
                            skills: value,
                        }))
                    }
                />

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <button
                        onClick={downloadPdf}
                        style={{
                            cursor: "pointer",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            backgroundColor: "#273c75",
                            color: "white",
                            border: "none",
                        }}
                    >
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Resume Preview */}
            <div
                className="resume-preview-container"
                ref={previewRef}
                style={{ whiteSpace: "pre-line" }}
            >
                <h2>{resumeData.personalInfo.fullName || "Your Name"}</h2>
                <p>{resumeData.personalInfo.email}</p>
                <p>{resumeData.personalInfo.phone}</p>
                <p>{resumeData.personalInfo.linkedIn}</p>
                <p>{resumeData.personalInfo.portfolio}</p>

                <section>
                    <h3>Education</h3>
                    <p>{resumeData.education.school}</p>
                    <p>{resumeData.education.degree}</p>
                    <p>{resumeData.education.graduationYear}</p>
                </section>

                <section>
                    <h3>Work Experience</h3>
                    <p>
                        <strong>{resumeData.experience.jobTitle}</strong> at{" "}
                        {resumeData.experience.company}
                    </p>
                    <p>{resumeData.experience.yearsWorked} years</p>
                    <p>{resumeData.experience.jobDescription}</p>
                </section>

                <section>
                    <h3>Skills</h3>
                    <p>{resumeData.skills || "Add your skills above"}</p>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
