import { useState } from "react"
import { Project } from "./Project"
import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"

interface ProjectListProps {
    project: Project[];
    onSave: (project: Project) => void;
}
const ProjectList = ({ project, onSave }: ProjectListProps) => {

    const [projectEdited, setProjectEdited] = useState({})
    function handleEdit(projectBeingEdited: Project) {
        setProjectEdited(projectBeingEdited)
    }
    function cancelEditing() {
        setProjectEdited({})
    }
    return (
        <div className="cols-sm">
            {project.map((pro) => (
                <div key={pro.id} className="cols-sm">
                    {
                        pro === projectEdited ? (<ProjectForm project={pro} onSave={onSave} onCancel={cancelEditing} />) : (<ProjectCard pro={pro} onEdit={handleEdit} />)
                    }
                </div>
            ))}
        </div>
    )
}

export default ProjectList