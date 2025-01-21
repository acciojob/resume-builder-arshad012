
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SkillsPage = () => {
    return (
        <div>
            <h1>Add your Skills</h1>

            <input type="text" name="skill" />

            <button>
                <Link to='/projects_section'>NEXT</Link>
            </button>
        </div>
    )
}

export default SkillsPage;