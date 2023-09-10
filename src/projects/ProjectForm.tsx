import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
    onCancel: () => void;
    onSave: (project: Project) => void;
    project: Project;
}
const ProjectForm = ({ onCancel, onSave, project: initialProject }: ProjectFormProps) => {
    const [project, setProject] = useState(initialProject)
    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        onSave(project)
    }

    function handleChange(event: any) {
        const { type, value, name, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;
        if (type === 'number') {
            updatedValue = Number(updatedValue)
        }
        const change = {
            [name]: updatedValue
        };
        let updatedProject: Project;
        setProject((p) => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        })
    }
    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input id="name" type="text" name="name" placeholder="enter name" value={project.name} onChange={handleChange} />
            <label htmlFor="description">Project Description</label>

            <textarea id="description" name="description" placeholder="enter description" value={project.description} onChange={handleChange}></textarea>
            <label htmlFor="budget">Project Budget</label>

            <input id="budget" type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={handleChange} />
            <label htmlFor="isActive">Active?</label>
            <input id="isActive" type="checkbox" name="isActive" checked={project.isActive} onChange={handleChange} />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button type="button" className="bordered medium" onClick={onCancel}>cancel</button>
            </div>
        </form>
    )
}

export default ProjectForm