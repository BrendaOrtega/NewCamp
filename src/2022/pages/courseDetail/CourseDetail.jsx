import * as React from 'react'
import classNames from 'classnames'
import { Divider } from 'antd'
import { Nav } from '2022/parts/nav'
import { useSelector } from 'react-redux'
import { Footer } from '2022/parts/footer'
import { Link } from 'react-router-dom'
import rocket from 'assets/rocket.png'
import blissito from 'assets/Jk6JaJzJ_400x400.jpg'
import colorRobot from 'assets/icons/colorRobot.svg'

import styles from './CourseDetail.module.css'
import Instructor from '2022/primitives/Instructor'
import { Button, Heading } from '@chakra-ui/react'


const fullDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eros, morbi morbi massa aenean tortor gravida ultrices consectetur. Mollis sodales in ut risus vel accumsan, mauris, tempus magna. Et vel scelerisque leo, duis. Gravida arcu sollicitudin tincidunt varius. Blandit aliquam eu, pulvinar volutpat lectus in molestie sit dapibus. Quam eget suspendisse adipiscing massa diam pellentesque mi. Tristique suspendisse arcu rutrum vitae, lectus eleifend sed arcu.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra.
Hac purus orci justo at. Semper sapien, at massa nunc adipiscing enim. Neque lacus at tellus morbi ultrices commodo. Massa erat tellus magnis at. Ultrices aliquet sem libero sed massa iaculis iaculis. Habitasse amet fermentum orci molestie diam felis. Egestas viverra sed lectus consequat feugiat. Adipiscing gravida egestas nec faucibus amet congue. Malesuada semper duis turpis suspendisse pharetra sit neque. Mi dui nisi pellentesque imperdiet diam pulvinar. Tristique morbi est aenean viverra`

const CourseDetail = ({ slug = 'instroduccion_a_firebase' }) => {
    const aprender = 'lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato, lorem ipusm achichincle mujigato'

    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (<>
        <section style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 160, maxWidth: 1200, margin: '0 auto' }}>
            <Nav />
            <Heading >
                Fundamentos de Programación con Python
            </Heading>
            <section className={classNames(styles.container)}>
                <div className={classNames(styles.child1)}>
                    <Instructor
                        name="HéctorBliss"
                        avatar={blissito}
                    />
                    <p className={classNames(styles.description)} >
                        {fullDescription}
                    </p>
                </div>
                <div className={classNames(styles.child2)}>
                    <img className={classNames(styles.image)} src={rocket} alt="course pic" />
                    <Link to={`/courses/${slug}/viewer`}>
                        <Button
                            colorScheme="brand"
                        >
                            {'</>'} Ver curso
                        </Button>
                    </Link>
                </div>
            </section>

            <article className={styles.info}>
                <Divider
                    style={{
                        minWidth: '60%',
                        width: '61%',
                        marginLeft: '18px',
                    }} />
                <p className={styles.title}>
                    ¿Qué vas a aprender?
                </p>
                {aprender.split(',').map((text, index) => (
                    <div key={index}>
                        <img width="24px" src={colorRobot} alt="icon robot" />
                        {" "}
                        {text}
                    </div>
                ))}
            </article>

        </section>
        <Footer />
    </>
    )
}

export default CourseDetail