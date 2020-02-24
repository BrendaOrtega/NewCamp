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
import BootcampDescript from "./components/bootcamp/BootcampDescript";
import BootcampDescriptWeb from "./components/bootcamp/BootcampDescriptWeb";

import BootcampDescriptLaravel from "./components/bootcamp/BootcampDescriptLaravel";
import Landing from "./components/home/Landing";
import ExamPage from './components/exam/ExamPage';
import Backend from "./components/bootcamp/Backend";
import BootcampPhp from "./components/bootcamp/BootcampPhp";
import BootcampDescriptReact from "./components/bootcamp/BootcampDescriptReact";
import BootcampReactPachuca from "./components/bootcamp/BootcampReactPachuca";
import PromoCiberMonday from './components/bootcamp/PromoCiberMonday';


let PrivateRoute = ({ component, next, to, ...rest }) => {
    let user = localStorage.user
    if (!user) return <Redirect to={`/login?next=${next}`} />
    return <Route to={to} component={component} {...rest} />
}

export const Router = () => (
    <Switch>
        {/* Admin */}
        <Route path="/admin" component={AdminPage} />
        <Route path="/promo-diciembre" component={Landing} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/courses/detail" component={CoursesDetail} />


        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route path="/bootcamp-descript" component={BootcampDescript} />
        <Route path="/bootcamp-descript-laravel" component={BootcampDescriptLaravel} />
        <Route path="/bootcamp-descript-web" component={BootcampDescriptWeb} />
        <Route path="/bootcamp-backend-nodejs" component={Backend} />
        <Route path="/bootcamp-react-redux" component={BootcampDescriptReact}/>
        <Route path="/bootcamp-react-pachuca" component={BootcampReactPachuca}/>

        <Route path="/bootcamp-php" component={BootcampPhp} />
        <Route path="/bootcamp/detail/:id" component={BootcampDetail} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/politicas-de-privacidad-fixter" component={Politicas} />
        <Route path="/fixter-team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/apply" component={Apply} />
        <Redirect path="/preorden" to="/bootcamp"/>
        <Route path="/profile" component={ProfileContainer} />
        <Route path="/null" component={ProfileContainer} />
        {/* Secciones nuevas por bootcamp */}
        <Redirect path="/python" to="/bootcamp" />
        {/* Examen */}
        <Route path="/exam/:id" component={ExamPage} />
        {/* Redirecting everything */}
        <PrivateRoute next="/preorden" to="/preorden" component={PromoCiberMonday} />
        {/* <Route to="/gift" component={BuyForGift} /> */}


    </Switch>
)

export default Router;