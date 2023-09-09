import { Project } from "./Project"
import ProjectCard from "./ProjectCard"
import ProjectForm from "./ProjectForm"

interface ProjectListProps {
    project: Project[]
}
const ProjectList = ({ project }: ProjectListProps) => {
    return (
        <div className="cols-sm">
            {project.map((pro) => (
                <div key={pro.id} className="cols-sm">

                    <ProjectCard pro={pro} />
                    <ProjectForm />
                </div>
            ))}
        </div>
    )
}

export default ProjectList