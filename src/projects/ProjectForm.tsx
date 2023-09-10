import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
    onCancel: () => void;
    onSave: (project: Project) => void;
    project: Project;
}
const ProjectForm = ({ onCancel, onSave, project: initialProject }: ProjectFormProps) => {
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState({ name: "", description: "", budget: "" })
    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        if (!isValid()) return;
        onSave(project)
    }

    function validate(project: Project) {
        let errors: any = { name: "", description: "", budget: "" };
        let { name, description, budget } = project;
        if (name.length === 0) {
            errors.name = "Name is required"
        }
        if (name.length && name.length < 3) {
            errors.name = "Name should be atleast 3 characters"
        }
        if (description.length === 0) {
            errors.description = 'Description is required.';
        }
        if (budget === 0) {
            errors.budget = 'Budget must be more than $0.';
        }
        return errors
    }

    function isValid() {
        return (
            errors.name.length === 0 &&
            errors.description.length === 0 &&
            errors.budget.length === 0
        );
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
        setErrors(() => validate(updatedProject))
    }
    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input id="name" type="text" name="name" placeholder="enter name" value={project.name} onChange={handleChange} />
            {errors.name.length > 0 && (
                <div className="card error">
                    <p>{errors.name}</p></div>
            )}
            <label htmlFor="description">Project Description</label>

            <textarea id="description" name="description" placeholder="enter description" value={project.description} onChange={handleChange}></textarea>
            {errors.description.length > 0 && (
                <div className="card error">
                    <p>{errors.description}</p></div>
            )}
            <label htmlFor="budget">Project Budget</label>

            <input id="budget" type="number" name="budget" placeholder="enter budget" value={project.budget} onChange={handleChange} />
            {errors.budget.length > 0 && (
                <div className="card error">
                    <p>{errors.budget}</p></div>
            )}
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