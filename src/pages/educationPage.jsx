import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const EducationPage = () => {
    const {firstPage, secondPage} = useSelector(state => state.resume);
    console.log('firstPage:', firstPage)
    console.log('secondPage:', secondPage)

    return (
        <div>
            <h1>Add your Education Details</h1>

            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <button>
                <Link to='/skills_section'>NEXT</Link>
            </button>
        </div>
    )
}

export default EducationPage;