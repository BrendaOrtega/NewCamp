import * as React from 'react'
import classNames from 'classnames';
// no-defaults
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { CourseSearch } from '2022/primitives';
import { NavLink } from 'react-router-dom'
import {
    Button,
    Center,
    Divider,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    Spacer,
    MenuItem as ChakraMenuItem,
    //  Switch,
    useColorMode, useColorModeValue, useMediaQuery, Image, Icon
} from '@chakra-ui/react';
//Assets
import logo from "assets/geek_completo.png";
import avatar from 'assets/img-login.png'
import { ReactComponent as Laptop } from 'assets/icons/laptop.svg'
import { ReactComponent as Astro } from 'assets/icons/astro.svg'
import robot from 'assets/icons/robot.svg'
import close from 'assets/icons/close.svg'
//Styles
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from 'redux/userDuck';
import { BsFillSunFill } from 'react-icons/bs';
import { GiHamburgerMenu, GiMoonBats } from 'react-icons/gi';
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

const MenuItem = ({ onClick, icon, text }) => {
    const { colorMode } = useColorMode()
    return (<ChakraMenuItem
        onClick={onClick}
        className={classNames(styles.iconGroup)}>
        {/* {icon && <Image src={icon} alt={`menu item icon`} />} */}
        {icon && <Icon boxSize={6}>
            {icon}
        </Icon>}
        <span >
            {text}
        </span>
    </ChakraMenuItem>)
}

const Nav = ({ history }) => {
    // hooks
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
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
        <Flex
            h={20}
            w="full"
            as="nav"
            borderBottom={toggle ? 'none' : '1px solid #E6E6E6'}
            position="fixed"
            transition="background-color .3s ease"
            alignItems="center"
        >
            <NavLink to="/" className={classNames(styles.child1)}>
                <img className={classNames(styles.logo)} src={logo} alt="brand logo" />
            </NavLink>
            <Spacer />
            <HStack
                px={6}
                spacing={6}
            >
                {isLargerThan768 ? <>
                    <Button variant="link">
                        Cursos
                    </Button>
                    <Button variant="solid">
                        {"{ }"} Suscribirme
                    </Button>
                    <Center height='50px'>
                        <Divider orientation='vertical' />
                    </Center>
                    <Button variant="link">
                        Login
                    </Button>
                    <Button
                        variant="outline"
                        onClick={toggleColorMode}>
                        {colorMode === 'light' ? <GiMoonBats /> : <BsFillSunFill />}
                    </Button>
                </> : <Menu>
                    <MenuButton>
                        <GiHamburgerMenu style={{ fontSize: '2rem' }} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem icon={<Laptop stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Cursos" />
                        <MenuItem icon={<Astro stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Login" />
                        <MenuItem text={<Button variant="solid">
                            {"{ }"} Suscribirme
                        </Button>} />
                    </MenuList>
                    <Button
                        variant="outline"
                        onClick={toggleColorMode}>
                        {colorMode === 'light' ? <GiMoonBats /> : <BsFillSunFill />}
                    </Button>
                </Menu>}
            </HStack>

        </Flex >
    )
}

export default Nav