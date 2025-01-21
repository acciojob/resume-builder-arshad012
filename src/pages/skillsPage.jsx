
import React, {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SkillsPage = () => {
    const [text, setText] = useState('');
    const [skills, setSkills] = useState([]);

    const handleAddSkill = () => {
        setSkills(prev => [text, ...prev]);
        setText('');
    }

    return (
        <div>
            <h1>Add your Skills</h1>

            <input type="text" name="skill" value={text} onChange={e => setText(e.target.value)} />

            <button onClick={handleAddSkill}>Add Skill</button>

            <Link to='/projects_section'>
                <button id="next" class="qaf3t2qAXS8ibS7m7tvwI">NEXT</button>
            </Link>

            <ul>
                {
                    skills.map((skill,i) => <li key={i}>{skill}</li>)
                }
            </ul>
        </div>
    )
}

export default SkillsPage;