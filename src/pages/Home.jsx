import React, {useState} from "react";
import PageChangingButton from "../components/PageChangingButton";

const Home = () => {
    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        phone:'',
        address:'',
        file:''       
    })

    const handleSubmit = () => {
        event.preventDefault();
    }

    const handleInput = (e) => {
        const {value, name} = e.target;
        
        setFormData({...formData, [name] : value});
    }

    const save_continue = () => {
        for(let key in formData) {
            if(formData[key] == '') {
                alert('Please fill all input fields...');
                return;
            }
        }
    }

    return (
        <div>
            <p className="heading">Add your profile details</p>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input type="text" name="fname" placeholder="First Name" onInput={handleInput} />
                </div>
                <div>
                    <input type="text" name="lname" placeholder="Last Name" onInput={handleInput} />
                </div>
                <div>
                    <input type="text" name="phone" placeholder="Phone Number" onInput={handleInput} />
                </div>
                <div>
                    <input type="text" name="address" placeholder="Address" onInput={handleInput} />
                </div>
                <div>
                    <input type="file" name="file" onInput={handleInput} />
                </div>
            </form>
            <PageChangingButton onclickFunc={save_continue} />
        </div>
    )
}

export default Home;