import * as React from 'react'
import classNames from 'classnames'
import { Card } from 'antd'

import rocket from 'assets/rocket.png'
import styles from './CourseCard.module.css'

const CourseCard = ({ onClick, slug, title, description, available }) => {
    return (
        <Card
            hoverable
            className={classNames(styles.container)}
            onClick={() => onClick(slug)}
        >
            <img className={classNames(styles.image)} src={rocket} alt="course pic" />
            <p className={classNames(styles.title)}>{title}</p>
            <p className={classNames(styles.description)}>{description}</p>
            <span className={classNames(styles.available)}>
                {available ? '!Disponible!' : 'No disponible'}
            </span>
        </Card>
    )
}

export default CourseCard