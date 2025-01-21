
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProjectsPage = () => {
    return (
        <div>
            <h1>Add your Mini Projects</h1>

            <input type="text" name="project" />
            <input type="text" name="techStack" />
            <input type="text" name="description" />

            <button id="next" class="qaf3t2qAXS8ibS7m7tvwI">...</button>

            <button>
                <Link to='/social_media_section'>NEXT</Link>
            </button>
        </div>
    )
}

export default ProjectsPage;