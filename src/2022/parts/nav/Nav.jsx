import * as React from 'react'
import classNames from 'classnames';
// no-defaults
import { Button, Divider, Input } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { CourseSearch } from '2022/primitives';
import { NavLink } from 'react-router-dom'
import {
    Button as ChakraButton,
    //  Switch,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
//Assets
import logo from "assets/geek_completo.png";
import avatar from 'assets/img-login.png'
import laptop from 'assets/icons/laptop.svg'
import astro from 'assets/icons/astro.svg'
import robot from 'assets/icons/robot.svg'
import close from 'assets/icons/close.svg'
//Styles
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from 'redux/userDuck';
import { BsFillSunFill } from 'react-icons/bs';
import { GiMoonBats } from 'react-icons/gi';
// instances

//components
const suffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const MenuItem = ({ onClick, icon, text }) => <button
    onClick={onClick}
    className={classNames(styles.iconGroup)}>
    <img className={classNames(styles.icon)} src={icon} alt={`menu item icon`} />
    <span className={classNames(styles.iconText)}>
        {text}
    </span>
</button>

const Nav = ({ history }) => {
    // hooks
    const bgColor = useColorModeValue('#fff', 'transparent')
    const { toggleColorMode, colorMode } = useColorMode()

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state)
    const [toggle, setToggle] = React.useState()
    const [showMenu, setShowMenu] = React.useState(false)

    // listeners
    window.onscroll = (e) => {
        window.requestAnimationFrame(function () {
            if (window.scrollY > 100) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        });
    };

    const toggleMenu = () => {
        setShowMenu(val => !val)
    }

    const logOut = () => {
        dispatch(logOutAction())
        history.push("/login");
    }

    return (
        <nav
            style={{ backgroundColor: bgColor }}
            className={classNames(styles.container, {
                [styles.transparent]: toggle
            })}>
            <NavLink to="/" className={classNames(styles.child1)}>
                <img className={classNames(styles.logo)} src={logo} alt="brand logo" />
            </NavLink>
            <div className={classNames(styles.child2, {
                [styles.hide]: !user.loggedIn
            })} >
                {!toggle && <CourseSearch />}
            </div>
            <div className={classNames(styles.child3, {
                [styles.flexTwo]: !user.loggedIn
            })} >
                {user.loggedIn && <>
                    <span className={classNames(styles.username)}>
                        {user.displayName}
                    </span>
                    <img onClick={toggleMenu} className={classNames(styles.avatar)} src={user.photoURL || avatar} alt="profile picture" />
                    <div className={classNames(styles.menu, {
                        [styles.showMenu]: showMenu,
                    })}>

                        <Link to="/courses">
                            <MenuItem icon={laptop} text="Cursos" />
                        </Link>
                        <Link to="/profile">
                            <MenuItem icon={astro} text="Perfil" />
                        </Link>
                        <Link to="/feedback">
                            <MenuItem icon={robot} text="Feedback" />
                        </Link>
                        <MenuItem onClick={logOut} icon={close} text="Cerrar sesión" />

                    </div>
                </>}
                {!user.loggedIn && <div className={classNames(styles.buttons)}>
                    <Link to="/courses">
                        <Button
                            style={{
                                border: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Cursos
                        </Button>
                    </Link>
                    <Link to="/pricing">
                        <Button
                            type="primary"
                        >
                            {"{ }"} Suscribirme
                        </Button>
                    </Link>
                    <Divider
                        style={{
                            height: 54,
                            backgroundColor: '#979797',
                        }}
                        type="vertical" />
                    <Link to="/login">
                        <Button style={{
                            border: 'none',
                            fontWeight: 'bold',
                        }}>
                            Login
                        </Button>
                    </Link>
                </div>}
                <ChakraButton onClick={toggleColorMode}>
                    {colorMode === 'light' ? <GiMoonBats /> : <BsFillSunFill />}
                </ChakraButton>
                {/* <Switch isChecked={colorMode === 'dark'} colorScheme="blackAlpha.50">

                </Switch> */}
                <div
                    onClick={toggleMenu}
                    className={classNames(styles.hamburguer)}>
                    <MenuOutlined style={{ fontSize: '2.5rem', }} />
                    {user.loggedIn ?
                        <div className={classNames(styles.menu, {
                            [styles.showMenu]: showMenu,
                        })}>

                            <Link to="/courses">
                                <MenuItem icon={laptop} text="Cursos" />
                            </Link>
                            <Link to="/profile">
                                <MenuItem icon={astro} text="Perfil" />
                            </Link>
                            <Link to="/feedback">
                                <MenuItem icon={robot} text="Feedback" />
                            </Link>
                            <MenuItem onClick={logOut} icon={close} text="Cerrar sesión" />

                        </div>
                        :
                        <div className={classNames(styles.menu, {
                            [styles.showMenu]: showMenu,
                        })}>

                            <Link to="/courses">
                                <MenuItem icon={laptop} text="Cursos" />
                            </Link>
                            <Link to="/feedback">
                                <MenuItem icon={robot} text="Feedback" />
                            </Link>
                            <Link to="/login">
                                <MenuItem icon={astro} text="Login" />
                            </Link>
                            <Link to="/pricing">
                                <Button
                                    type="primary"
                                >
                                    {"{ }"} Suscribirme
                                </Button>
                            </Link>

                        </div>}

                </div>
            </div>

        </nav >
    )
}

export default Nav