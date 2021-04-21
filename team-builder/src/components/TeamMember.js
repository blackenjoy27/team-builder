import React from "react";


const TeamMember = (prop)=>{

    const {teamMember} = prop;
    return (
        <div>
            <h1>{teamMember.name}</h1>
            <h2>{teamMember.email}</h2>
            <h3>{teamMember.role}</h3>
        </div>
    )
}

export default TeamMember;