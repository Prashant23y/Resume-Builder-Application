import React from "react";

const PersonalInfo = ({ data, update }) => {
    return (
        <section className="resume-section">
            <h2>Personal Information</h2>
            <input
                type="text"
                placeholder="Full Name"
                value={data.fullName}
                onChange={e => update("personalInfo", "fullName", e.target.value)}
            />
            <input
                type="email"
                placeholder="Email Address"
                value={data.email}
                onChange={e => update("personalInfo", "email", e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={data.phone}
                onChange={e => update("personalInfo", "phone", e.target.value)}
            />
            <input
                type="text"
                placeholder="LinkedIn Profile"
                value={data.linkedIn}
                onChange={e => update("personalInfo", "linkedIn", e.target.value)}
            />
            <input
                type="text"
                placeholder="Portfolio URL"
                value={data.portfolio}
                onChange={e => update("personalInfo", "portfolio", e.target.value)}
            />
        </section>
    );
};

export default PersonalInfo;
