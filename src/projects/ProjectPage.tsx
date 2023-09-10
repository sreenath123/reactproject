import { useState } from "react"
import { MOCK_PROJECTS } from "./MockProject"
import { Project } from "./Project"
import ProjectList from "./ProjectList"

const ProjectPage = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
    function saveProject(project: Project) {
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p
        })
        setProjects(updatedProjects)
    }
    return (
        <>
            <h1>Project</h1>
            <ProjectList onSave={saveProject} project={projects} />
        </>
    )
}

export default ProjectPage