import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import Bootcamp from "./components/bootcamp/Bootcamp";
import Courses from "./components/courses/Courses";
import Contacto from "./components/contacto/Contacto";
import Registro from "./components/login/Registro";
import Apply from "./components/bootcamp/Apply";
import ProfileContainer from "./components/profile/ProfileContainer";
import { CoursesDetail } from "./components/courses/CoursesDetail";
import { BootcampDetail } from "./components/bootcamp/BootcampDetail";
import Team from "./components/home/Team";
import Politicas from "./components/home/Politicas";
import Login from './components/login/Login';
import AdminPage from './components/admin/AdminPage';
<<<<<<< HEAD
import BootcampDescript from "./components/bootcamp/BootcampDescript";
import BootcampDescriptWeb from "./components/bootcamp/BootcampDescriptWeb";
=======
import Python from './components/bootcamp/Python';
>>>>>>> e4f3ec6a0ca81fe1ec1a5cad66cf4d2d4351ee74


export const Router = () => (
    <Switch>
        {/* Admin */}
        <Route path="/admin" component={AdminPage} />

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/courses/detail" component={CoursesDetail} />
        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route path="/bootcamp-descript" component={BootcampDescript}/>
            <Route path="/bootcamp-descript-web" component={BootcampDescriptWeb}/>
        <Route path="/bootcamp/detail/:id" component={BootcampDetail} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/politicas-de-privacidad-fixter" component={Politicas} />
        <Route path="/fixter-team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/apply" component={Apply} />
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/null" component={ProfileContainer} />
        {/* Secciones nuevas por bootcamp */}
        <Redirect path="/python" to="/bootcamp" />

    </Switch>
)

export default Router;