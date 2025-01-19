import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
    name:'Resume',
    initialState: {
        name:'',
        email:'',
        phone:'',
        address:'',
        hobbies:[],
        skills:[],
        education: {
            graduation:'idle',
            percentage:'',
            completion_year:''
        }
    },
    reducers: {
        addName: (state, action) => {
            state.name = action.payload;
        }
    }
})


export const {addName} = resumeSlice.actions;
export default resumeSlice.reducer;