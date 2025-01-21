import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';

import styles from './css/Home.module.css';
import buttonsStyles from './css/buttons.module.css';
import { updateFirstPage } from '../redux/resumeSlice';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProfilePage = () => {
    const {firstPage} = useSelector(state => state.resume);
    const [formData, setFormData] = useState(firstPage);
    
    const dispatch = useDispatch();

    console.log('firstPage:', firstPage);

    const handleSubmit = () => {
        event.preventDefault();
    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        setFormData({...formData, [name] : value});
    }

    const save_continue = () => {
        // for(let key in formData) {
        //     if(formData[key] == '') return;
        // }
        dispatch(
            updateFirstPage(formData)
        )
    }

    const {fname, lname, phone, address, profile_image} = formData;

    return (
        <div>
            <p className={styles.heading}>Add your profile details</p>
            <div onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputs_container}>
                    <div>
                        <input type="text" name="fname" value={fname} placeholder="First Name" required onChange={handleInput} />
                    </div>
                    <div>
                        <input type="text" name="lname" value={lname} placeholder="Last Name" required onChange={handleInput} />
                    </div>
                    <div>
                        <input type="text" name="phone" value={phone} placeholder="Phone Number" required onChange={handleInput} />
                    </div>
                    <div>
                        <input type="text" name="address" value={address} placeholder="Address" required onChange={handleInput} />
                    </div>
                    <div>
                        <input type="file" name="profile_image" title="Profile Image" required onChange={handleInput} />
                    </div>
                </div>
                <div className={buttonsStyles.page_buttons}>
                    <button id="back" className={buttonsStyles.link_btn}>BACK</button>
                    <button id="next" className={buttonsStyles.normal_btn}>
                        <Link to='/education_section'>NEXT</Link>
                    </button>
                    <button type="submit" id="save_continue" className={buttonsStyles.normal_btn} onClick={save_continue}>SAVE AND CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;