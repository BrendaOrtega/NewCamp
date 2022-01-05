import * as React from 'react'
import classNames from 'classnames';
// no-defaults
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { CourseSearch } from '2022/primitives';
import { NavLink, useNavigate } from 'react-router-dom'
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
    useColorMode, useColorModeValue, useMediaQuery, Image, Icon, Text
} from '@chakra-ui/react';
//Assets
import logo from "assets/geek_completo.png";
import avatar from 'assets/img-login.png'
import { ReactComponent as Laptop } from 'assets/icons/laptop.svg'
import { ReactComponent as Astro } from 'assets/icons/astro.svg'
import { ReactComponent as Robot } from 'assets/icons/robot.svg'
import { ReactComponent as Close } from 'assets/icons/close.svg'
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
    >
        {/* {icon && <Image src={icon} alt={`menu item icon`} />} */}
        {icon && <Icon boxSize={6}>
            {icon}
        </Icon>}
        <Text px="12px">
            {text}
        </Text>
    </ChakraMenuItem>)
}

const Nav = ({
    variant = "ghost"
}) => {
    // hooks
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const { toggleColorMode, colorMode } = useColorMode()
    const navigate = useNavigate()
    //redux
    const dispatch = useDispatch()
    const { loggedIn, displayName, photoURL } = useSelector(({ user }) => user)
    //state
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
        navigate("/login");
    }

    // elements
    const loggedInMenuList = (<MenuList>
        <Link style={{ color: 'inherit' }} to="/courses">
            <MenuItem icon={<Laptop stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Cursos" />
        </Link>
        <Link style={{ color: 'inherit' }} to="/perfil">
            <MenuItem icon={<Astro stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Perfil" />
        </Link>
        <MenuItem icon={<Robot stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Feedback" />
        <MenuItem
            onClick={logOut}
            icon={<Close stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Cerrar sesión" />
    </MenuList>)

    return (
        <Flex
            backgroundColor={
                variant !== 'solid' ?
                    'transparent'
                    : colorMode === 'dark' ?
                        '#323232'
                        :
                        '#fff'
            }
            h={20}
            w="full"
            as="nav"
            borderBottom={toggle ? 'none' : '1px solid #E6E6E6'}
            position="fixed"
            top={0}
            left={0}
            zIndex={999}
            transition="background-color .3s ease"
            alignItems="center"
        >
            <NavLink to="/" >
                <Image
                    h={16}
                    src={logo} alt="brand logo" />
            </NavLink>
            <Spacer />
            <HStack
                px={6}
                spacing={6}
            >
                {isLargerThan768 ? <>
                    {loggedIn ? <>
                        <Button variant="link">
                            <Text maxWidth={40} isTruncated>
                                {displayName}
                            </Text>
                        </Button>
                        <Menu>
                            <MenuButton>
                                <Image
                                    borderRadius='full'
                                    boxSize='64px'
                                    objectFit='cover'
                                    src={photoURL}
                                    alt={displayName}
                                />
                            </MenuButton>
                            {loggedInMenuList}
                        </Menu>

                    </> : <>
                        <Link to="/courses">
                            <Button variant="link">
                                Cursos
                            </Button>
                        </Link>
                        <Link to="/pricing">
                            <Button variant="solid">
                                {"{ }"} Suscribirme
                            </Button>
                        </Link>
                        <Center height='50px'>
                            <Divider orientation='vertical' />
                        </Center>
                        <Link to="/login">
                            <Button variant="link">
                                Login
                            </Button>
                        </Link>
                    </>}
                </> : <Menu>
                    <MenuButton>
                        <GiHamburgerMenu
                            style={{ fontSize: '2rem' }} />
                    </MenuButton>
                    {loggedIn ?
                        <>
                            {loggedInMenuList}
                        </>
                        : <>
                            <MenuList>
                                <Link to="/courses">
                                    <MenuItem icon={<Laptop stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Cursos" />
                                </Link>
                                <Link style={{ color: 'inherit' }} to="/login">
                                    <MenuItem icon={<Astro stroke={colorMode === 'dark' ? '#fff' : '#000'} />} text="Login" />
                                </Link>
                                <MenuItem text={<Button variant="solid">
                                    <Link style={{ color: 'inherit' }} to="/pricing">
                                        {"{ }"} Suscribirme
                                    </Link>
                                </Button>} />
                            </MenuList>
                        </>
                    }
                </Menu>
                }
                <Button
                    variant="outline"
                    onClick={toggleColorMode}>
                    {colorMode === 'light' ? <GiMoonBats /> : <BsFillSunFill />}
                </Button>

            </HStack>

        </Flex >
    )
}

export default Nav