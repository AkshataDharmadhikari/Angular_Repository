import React from 'react';

function Home() {
    const developer = 'Nikhil Shah';
    const teamSize = 10;
    const teamMembers = ['Nikhil', 'Ankit', 'Vishal', 'Pankaj', 'Ravi'];

    const projectInfo = {
        projectName: 'Banking System',
        projectDuration: '2 months',
        projectStatus: 'Completed',
        projectTeamMembers: ['Nikhil', 'Ankit', 'Vishal', 'Ravi'],
        projectTeamSize: 10,
        projectDeveloper: 'Nikhil'
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>Developed by: {developer}</p>
            <p>Team size: {teamSize}</p>
            <p>Team members:</p>
            <ul>
                {teamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>

            <h1>Project Details</h1>
            <h2>{projectInfo.projectName}</h2>
            <p>Status: {projectInfo.projectStatus}</p>
            <p>Duration: {projectInfo.projectDuration}</p>
            <p>Developer: {projectInfo.projectDeveloper}</p>
            <p>Project Team Members:</p>
            <ul>
                {projectInfo.projectTeamMembers.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
            <ul>Team size: {projectInfo.projectTeamSize}</ul>
        </div>
    );
}

export default Home;