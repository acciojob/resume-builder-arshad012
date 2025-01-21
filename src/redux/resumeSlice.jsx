import { createSlice } from '@reduxjs/toolkit';

const resumeSlice = createSlice({
    name:'Resume',
    initialState: {
        firstPage: {
            fname:'',
            lname:'',
            phone:'',
            address:'',
            profile_image:''
        },
        secondPage: {
            course_name:'',
            completion_year:'',
            college_school:'',
            percentage:''
        },
        thirdPage: {
            skills:[]
        },
        fourthPage: {
            project_name:'',
            tech_stack:'',
            decription:''
        },
        fifthPage: {
            social_links:[]
        }
    },
    reducers: {
        updateFirstPage: (state, action) => {
            state.firstPage = {...state.firstPage, ...action.payload};
        },
        updateSecondPage: (state, action) => {
            state.secondPage = {...state.secondPage, ...action.payload};
        },
        updateThirdPage: (state, action) => {
            state.thirdPage.skills = [...action.payload];
        },
        updateFourthPage: (state, action) => {
            state.fourthPage = {...state.fourthPage, ...action.payload};
        },
        updateFifthPage: (state, action) => {
            state.fifthPage.social_links = [...action.payload];
        },
    }
})


export const {updateFirstPage, updateSecondPage, updateThirdPage, updateFourthPage, updateFifthPage} = resumeSlice.actions;
export default resumeSlice.reducer;