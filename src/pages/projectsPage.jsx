
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProjectsPage = () => {
    return (
        <div>
            <h1>Add your Mini Projects</h1>

            <input type="text" />
            <input type="text" />
            <input type="text" />


            <button>
                <Link to='/social_media_section'>NEXT</Link>
            </button>
        </div>
    )
}

export default ProjectsPage;