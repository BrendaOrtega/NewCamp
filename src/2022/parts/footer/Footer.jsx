import * as React from 'react'
import classNames from 'classnames';
// no-defaults
//Assets
import { FacebookOutlined, LinkedinOutlined, GithubOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import logo from "assets/geek_completo.png";
//Styles
import styles from './Footer.module.css'

//Redux

// instances

//components

const Footer = () => {
    // hooks
    return (
        <nav className={classNames(styles.container)}>
            <div className={classNames(styles.main)}>
                <div className={classNames(styles.child1)}>
                    <img width={118} src={logo} alt="logo icon" />
                    <p className={classNames(styles.description)}>
                        Information is separate from both knowledge and data, and lies nebulously between them. It is information about objects.
                    </p>
                </div>
                <div className={classNames(styles.child2)}>
                    <div className={classNames(styles.aboutGroup)}>
                        <p>
                            Sobre Nosotros
                        </p>
                        <span>
                            Equipo
                        </span>
                        <span>
                            Preguntas Frecuentes
                        </span>
                        <span>
                            Contacto
                        </span>
                    </div>
                    <div className={classNames(styles.aboutGroup)}>
                        <p>
                            Recursos
                        </p>
                        <span>
                            Blog
                        </span>
                        <span>
                            Podcast
                        </span>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.social)}>
                <div className={classNames(styles.icons)}>
                    <FacebookOutlined style={{ fontSize: '24px' }} />
                    <LinkedinOutlined style={{ fontSize: '24px' }} />
                    <GithubOutlined style={{ fontSize: '24px' }} />
                    <TwitterOutlined style={{ fontSize: '24px' }} />
                    <InstagramOutlined style={{ fontSize: '24px' }} />
                </div>
                <span>
                    Política de Privacidad {"   "} Términos y condiciones
                </span>
                <p>
                    © 2021 FixterGeek
                </p>
            </div>
        </nav >
    )
}

export default Footer