import { MOCK_PROJECTS } from "./MockProject"
import ProjectList from "./ProjectList"

const ProjectPage = () => {
    return (
        <>
            <h1>Project</h1>
            <ProjectList project={MOCK_PROJECTS} />
        </>
    )
}

export default ProjectPage