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
import Ask from "./components/home/Ask"
import ShareLink from './components/profile/ShareLink';
import Feedback from './components/profile/Feedback';
import BootcampDescriptDocker from './components/bootcamp/BootcampDescriptDocker';
import Payment from './components/payment/Payment';
import { CoursesDetailWeb } from './components/courses/CourseDetailWeb';
import { CoursesDetailReact } from './components/courses/CourseDetailReact';
import VerticalWheelCarousel from './experiments/VerticalWheelCarousel';

import img1 from './assets/_DSC0390.30157168.jpeg'
import img2 from './assets/14424919_1302624863134683_7580892335062101088_o.jpg'
import img3 from './assets/17492500_1522831704447330_3133267459982867769_o.jpg'
import img4 from './assets/17834072_1542858145778019_3295799447117516700_o.jpg'
import img5 from './assets/28698604_1973144766082686_589124668727305128_o.jpg'
import img6 from './assets/21105859_1384283821667002_3656915529923068437_n.jpg'
import useDevice from './tools/useDevice';
import DiciplineChallenge from './components/temp/DiciplineChallenge';
import BlogReader from './blog/BlogReader';
import Blog from './blog/Blog';
import PricingPage from './components/subscriptions/PricingPage';

let PrivateRoute = ({ component, path, ...rest }) => {
    let user = localStorage.user
    if (!user) return <Redirect to={`/login=${path}`} />
    return <Route path={path} component={component} {...rest} />
}

const Experimentcomponent = () => {

    const imgs = [
        img1, img2, img3, img4, img5,
        img6,
    ]

    return <div style={{ width: '100%', height: '90vh', display: 'flex', alignItems: 'center', maxWidth: 2000, margin: '0 auto' }}>
        <VerticalWheelCarousel flex="xl" sources={imgs} />
        <h1 className="desktopOnly" style={{ flex: 1, textAlign: 'center' }}>Title for the hero</h1>}
    </div>
}

export const Router = () => (
    <Switch>
        {/* Blog  */}
        <Route path="/blog/:slug" component={BlogReader} />
        <Route path="/blog" component={Blog} />

        {/* Pricing and subscription */}
        <Route path="/pricing" component={PricingPage} />

        {/* Admin */}
        <Route path="/admin" component={AdminPage} />
        <Route path="/promo-diciembre" component={Landing} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/detail/python" component={CoursesDetail} />
        <Route path="/detail/web" component={CoursesDetailWeb} />
        <Route path="/detail/react" component={CoursesDetailReact} />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path='/brendi' component={Experimentcomponent} />

        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route path="/preguntas-frecuentes" component={Ask} />
        <Route path="/bootcamp-descript" component={BootcampDescript} />
        <Route path="/bootcamp-descript-docker" component={BootcampDescriptDocker} />
        <Route path="/bootcamp-descript-web" component={BootcampDescriptWeb} />
        <Route path="/bootcamp-backend-nodejs" component={Backend} />
        <Route path="/bootcamp-react-redux" component={BootcampDescriptReact} />
        <Route path="/bootcamp-react-pachuca" component={BootcampReactPachuca} />

        <Route path="/bootcamp-php" component={BootcampPhp} />
        <Route path="/bootcamp/detail/:id" component={BootcampDetail} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/politicas-de-privacidad-fixter" component={Politicas} />
        <Route path="/fixter-team" component={Team} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/apply" component={Apply} />

        <Redirect path="/preorden" to="/bootcamp" />
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
        <PrivateRoute path="/promo/:slug" component={Payment} />
        {/* Sólo enero 2022 */}
        <PrivateRoute path="/discipline-challenge" component={DiciplineChallenge} />



    </Switch>
)

export default Router;