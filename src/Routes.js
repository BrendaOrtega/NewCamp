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
import Landing from "./components/home/Landing";
import ExamPage from './components/exam/ExamPage';
import Backend from "./components/bootcamp/Backend";
import BootcampPhp from "./components/bootcamp/BootcampPhp";
import BootcampDescriptReact from "./components/bootcamp/BootcampDescriptReact";
import BootcampReactPachuca from "./components/bootcamp/BootcampReactPachuca";
import PromoCiberMonday from './components/bootcamp/PromoCiberMonday';
import Ask from "./components/home/Ask"
import ShareLink from './components/profile/ShareLink';
import Feedback from './components/profile/Feedback';
import BootcampDescriptDocker from './components/bootcamp/BootcampDescriptDocker';
import Payment from './components/payment/Payment';


let PrivateRoute = ({ component, path, ...rest }) => {
    let user = localStorage.user
    if (!user) return <Redirect to={`/login?next=${path}`} />
    return <Route path={path} component={component} {...rest} />
}

export const Router = () => (
    <Switch>
             
        {/* Admin */}
        <Route path="/admin" component={AdminPage} />
        <Route path="/promo-diciembre" component={Landing} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/courses/detail" component={CoursesDetail} />
        <Route exact path="/" component={HomeContainer} />

        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route path="/preguntas-frecuentes" component={Ask} />
        <Route path="/bootcamp-descript" component={BootcampDescript} />
        <Route path="/bootcamp-descript-docker" component={BootcampDescriptDocker} />
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
        <Route path="/share-link" component={ShareLink} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/null" component={ProfileContainer} />
        {/* Secciones nuevas por bootcamp */}
        <Redirect path="/python" to="/bootcamp" />
        {/* Examen */}
        <Route path="/exam/:id" component={ExamPage} />
        {/* Redirecting everything */}
        {/* <PrivateRoute next="/preorden" to="/preorden" component={PromoCiberMonday} /> */}
        {/* <Route to="/gift" component={BuyForGift} /> */}
        {/* Fixter hibrid relaunch */}
        {/* <PrivateRoute next="/promo/id/:id" component={Payment}/> */}
   
        {/* <PrivateRoute next="/promo/" component={Payment}/> */}
        {/* <PrivateRoute next="/promo/:slug" component={Payment}/> */}
        <PrivateRoute path="/promo/:slug" component={Payment}/>
        


    </Switch>
)

export default Router;