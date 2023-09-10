import { MOCK_PROJECTS } from "./MockProject"
import { Project } from "./Project"
import ProjectList from "./ProjectList"

const ProjectPage = () => {
    function saveProject(project: Project) {
        console.log("Saving project", project)
    }
    return (
        <>
            <h1>Project</h1>
            <ProjectList onSave={saveProject} project={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectPage