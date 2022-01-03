import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import img1 from './assets/_DSC0390.30157168.jpeg'
import img2 from './assets/14424919_1302624863134683_7580892335062101088_o.jpg'
import img3 from './assets/17492500_1522831704447330_3133267459982867769_o.jpg'
import img4 from './assets/17834072_1542858145778019_3295799447117516700_o.jpg'
import img5 from './assets/28698604_1973144766082686_589124668727305128_o.jpg'
import img6 from './assets/21105859_1384283821667002_3656915529923068437_n.jpg'
import useDevice from './tools/useDevice';

import BlogReader from './blog/BlogReader';
import Blog from './blog/Blog';
import PricingPage from './components/subscriptions/PricingPage';

//new camp 2021
import { Nav } from '2022/parts/nav'
import { CourseDetail as CourseDetail2022 } from '2022/pages/courseDetail'
import { CourseList } from '2022/pages/courseList'
import { CourseViewer } from '2022/pages/courseViewer';
import NotFoundPage from '2022/pages/NotFoundPage';
import VerticalWheelCarousel from 'experiments/VerticalWheelCarousel'
import { AdminPage } from '2022/admin'

const PlusOrEnrolledRoute = ({ children }) => {
    const user = localStorage.user
    // enrolled?
    if (!user || user.role === 'GUEST') { return <Navigate to='/pricing' /> }
    return children
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
{/* New fixter.camp 2021 subscription idea */ }
export const Router = () => {
    const navigate = useNavigate()
    return <Routes>
        <Route exact path="/" element={<CourseDetail2022 />} />
        <Route path="/courses/:slug/viewer" element={<PlusOrEnrolledRoute><CourseViewer /></PlusOrEnrolledRoute>} />
        <Route path="/courses/:slug" element={<CourseDetail2022 />} />
        <Route path="/courses" element={<CourseList history={{ push: navigate }} />} />

        {/* <Route path="/login" component={Login} />
            <Route path="/registro" component={Registro} /> */}
        {/* <Route path="/profile" component={ProfileContainer} /> */}
        <Route path="/pricing" element={<PricingPage />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Atrapa todo */}
        <Route path="*" element={<NotFoundPage />} />

    </Routes>
}

export default Router;