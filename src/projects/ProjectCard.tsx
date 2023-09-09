import React from 'react'
import { Project } from './Project'

interface ProjectCardProp {
    pro: Project
}

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

const ProjectCard = ({ pro }: ProjectCardProp) => {

    const handleEditClick = (projectBeingEdited: Project) => {
        console.log(projectBeingEdited)
    }

    return (
        <div key={pro.id} className="card">
            <img src={pro.imageUrl} alt={pro.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{pro.name}</strong>
                </h5>
                <p>{formatDescription(pro.description)}</p>
                <p>Budget : {pro.budget.toLocaleString()}</p>
                <button onClick={() => handleEditClick(pro)} className="bordered">
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </section>
        </div>
    )
}

export default ProjectCard