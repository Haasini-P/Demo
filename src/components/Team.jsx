import React from 'react';

const teamMembers = [
    { name: "P.Haasini", role: "Founder, Management", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMmXyhRE_hpRHwK_TDEuH2aDCkat88s7NrQ&s" },
    { name: "P.Satvika", role: "Designing, Tech", imgSrc: "https://images.pexels.com/photos/7318930/pexels-photo-7318930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Syed Ameena", role: "Market, Engineering", imgSrc: "https://img.freepik.com/premium-photo/portrait-professional-muslim-woman-office-backdrop-wearing-hijab-religion-concept_590464-233829.jpg" }
];

const Team = () => {
    return (
        <section id="team" className="section">
            <h2>Meet the Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <div className="circle-image">
                            <img src={member.imgSrc} alt={member.name} />
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;