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

            <input type="text" name='courseName' />
            <input type="text" name='completionYear' />
            <input type="text" name='college' />
            <input type="text" name='percentage' />

            <button>
                <Link to='/skills_section'>NEXT</Link>
            </button>
        </div>
    )
}

export default EducationPage;