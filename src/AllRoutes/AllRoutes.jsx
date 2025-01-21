import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfilePage from '../pages/profilePage';
import EducationPage from '../pages/educationPage';
import SkillsPage from '../pages/skillsPage';
import ProjectsPage from '../pages/projectsPage';
import SocialMediaPage from '../pages/socialMediaPage';
import Output from '../pages/output';

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={ProfilePage} />
            <Route path='/education_section' component={EducationPage} />
            <Route path='/skills_section' component={SkillsPage} />
            <Route path='/projects_section' component={ProjectsPage} />
            <Route path='/social_media_section' component={SocialMediaPage} />
            <Route path='/output' component={Output} />
        </Switch>
    )
}

export default AllRoutes;