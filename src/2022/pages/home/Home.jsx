import * as React from 'react'
import classNames from 'classnames'
import { Button, Divider } from 'antd'
import { Nav } from '2022/parts/nav'
import { useSelector } from 'react-redux'

import rocket from 'assets/rocket.png'
import blissito from 'assets/Jk6JaJzJ_400x400.jpg'
import colorRobot from 'assets/icons/colorRobot.svg'

import styles from './CourseViewer.module.css'
import Instructor from '2022/primitives/Instructor'
import { Footer } from '2022/parts/footer'

const fullDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eros, morbi morbi massa aenean tortor gravida ultrices consectetur. Mollis sodales in ut risus vel accumsan, mauris, tempus magna. Et vel scelerisque leo, duis. Gravida arcu sollicitudin tincidunt varius. Blandit aliquam eu, pulvinar volutpat lectus in molestie sit dapibus. Quam eget suspendisse adipiscing massa diam pellentesque mi. Tristique suspendisse arcu rutrum vitae, lectus eleifend sed arcu.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra`

const CourseViewer = () => {
    const aprender = 'lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato'
    return (<>
        <section style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 160, maxWidth: 1400, margin: '0 auto' }}>
            <Nav />

        </section>
        <Footer />
    </>
    )
}

export default CourseViewer