import Project from "./Project"
import ProjectNotFound from "./ProjectNotFound"

const ProjectGrid = ({ projects, searchProject }) => {
    return (
        <div>
            {projects && projects.length > 0 ? (
                projects.map(project => (
                    <Project key={project.id} project={project} />
                ))
            ) : (
                <ProjectNotFound searchProject={searchProject} />
            )}
        </div>
    )
}

export default ProjectGrid