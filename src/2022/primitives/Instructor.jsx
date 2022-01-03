import * as React from 'react'
import classNames from 'classnames'

import { Divider } from 'antd'

import reactLogo from 'assets/icons/reactLogo.svg'
import clock from 'assets/icons/clock.svg'
import shuttle from 'assets/icons/shuttle.svg'
import { LinkOutlined, TwitterOutlined } from '@ant-design/icons'

import styles from './Instructor.module.css'

const Instructor = ({ variant = 'default', avatar, name }) => ( // default | share
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: variant === 'share' ? 'row' : 'column',
        alignItems: variant === 'share' ? 'flex-end' : 'flex-start',
        justifyContent: variant === 'share' ? 'space-between' : 'flex-start',
    }}>
        <div className={classNames(styles.container)} >
            <img className={classNames(styles.avatar)} src={avatar} alt="instructor avatar" />
            <div className={classNames(styles.texts)} >
                <span>Instructor</span>
                <span className={classNames(styles.name)}>{name}</span>
            </div>
        </div>
        {variant === 'default' && <div className={classNames(styles.extraInfo)}>
            <div className={classNames(styles.iconGroup)}>
                <img src={reactLogo} alt="icon" />
                <span>React</span>
            </div>
            <div className={classNames(styles.iconGroup)}>
                <img src={clock} alt="icon" />
                <span>70 min</span>
            </div>
            <div className={classNames(styles.iconGroup)}>
                <Divider style={{ background: '#000' }} type="vertical" />
                <img src={shuttle} alt="icon" />
                <span>Nivel intermedio</span>
            </div>
            <div className={classNames(styles.iconGroup)}>
                <Divider style={{ background: '#000' }} type="vertical" />
                <span>Publicado hace 2 meses</span>
            </div>
        </div>}
        {variant === 'share' && <div>
            <div className={classNames(styles.share)}>
                <span className={styles.shareText}>
                    <TwitterOutlined style={{ fontSize: '16px' }} />
                    Compartir curso
                </span>
                {" "}
                <span className={styles.shareText}>
                    <LinkOutlined style={{ fontSize: '16px' }} />
                    Copiar link
                </span>
            </div>
        </div>}
    </div>
)

export default Instructor