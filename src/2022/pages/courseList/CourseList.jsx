import * as React from 'react'
import classNames from 'classnames';
// no-defaults
import { Button, Select } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
//Assets

//Styles
import styles from './CourseList.module.css'
//Redux
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOutAction } from 'redux/userDuck';
import { CourseSearch } from '2022/primitives';
import { Nav } from '2022/parts/nav';
import { CourseCard } from '2022/primitives';
// instances
const { Option } = Select;

//components
const Cards = ({ courses, onClick }) => (
    <div className={classNames(styles.cardsContainer)}>
        {courses.map((course, index) => <CourseCard
            key={index}
            onClick={onClick}
            {...course} />)}
    </div>
)


const CourseList = ({ history, ...rest }) => {
    const courses = [{
        slug: 'introduccion_a_firebase',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    },
    {
        slug: 'introduccion_a_firebase',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    },
    {
        slug: 'mijo',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    },
    {
        slug: 'introduccion_a_firebase',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    },
    {
        slug: 'introduccion_a_firebase',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    },
    {
        slug: 'introduccion_a_firebase',
        title: 'Introducción a Firebase',
        description: 'Aprende a hostear tus proyectos y utilizar las bases de datos de Firebase.',
        available: true,
    }] // selector from redux

    const handleClick = (slug) => {
        history.push(`/courses/${slug}`)
    }

    return (<>
        <Nav />
        <section className={classNames(styles.container)}>
            <h2 className={classNames(styles.title)}>Cursos</h2>
            <div className={classNames(styles.filters)}>
                <CourseSearch size="large" />
                <Select
                    style={{ width: 250 }}
                    defaultValue="Filtrar por herramienta"
                    onChange={() => false}>
                    <Option value="ReactJS">ReactJS</Option>
                    <Option value="NodeJS">NodeJS</Option>
                    <Option value="disabled" disabled>
                        AngularJS
                    </Option>
                    <Option value="GraphQL">GraphQL</Option>
                    <Option value="JavaScript">JavaScript</Option>
                    <Option value="Typescript">Typescript</Option>
                    <Option value="Firebase">Firebase</Option>
                </Select>
            </div>
            <Cards onClick={handleClick} courses={courses} />
        </section>
    </>
    )
}

export default CourseList