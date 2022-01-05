import * as React from 'react'

import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { RiEyeCloseLine } from 'react-icons/ri'
import { ImEye } from 'react-icons/im'
import { FiMail } from 'react-icons/fi'
import PageContainer from '2022/pages/PageContainer'
import {
    Link as ChakraLink,
    Image, Button, Heading, Text, useColorModeValue, VStack, Input, FormControl, FormLabel, InputGroup, InputRightElement, Flex, Spacer, FormErrorMessage, useToast
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

import mascot from 'assets/roboGeek.png'
import { Nav } from '2022/parts/nav'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/userDuck'

export const PasswordInput = ({ name, onChange, value, ...props }) => {
    const [show, setShow] = React.useState(false)
    return (
        <InputGroup>
            <Input
                {...props}
                type={show ? 'text' : 'password'}
                value={value}
                onInputChange={onChange}
                onChange={onChange}
                name={name}
                placeholder='Escribe tu contraseña'
            />
            <InputRightElement width="4.5rem" >
                <Button
                    onClick={() => setShow(s => !s)}
                    variant="ghost">
                    {
                        show ?
                            <ImEye /> :
                            <RiEyeCloseLine />
                    }
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

const Login = () => {
    // redux
    const { loggedIn, fetching } = useSelector(({ user }) => user)
    const dispatch = useDispatch()
    //hooks
    const navigate = useNavigate()
    const headingColor = useColorModeValue('grey.500', 'white')
    const toast = useToast()
    //state
    const [error, setError] = React.useState({})
    const [emailLogin, setEmailLogin] = React.useState(false)
    const [auth, setAuth] = React.useState({ email: '', password: '' })
    // check this


    const _onChange = ({ target: { name, value } }) => setAuth({ ...auth, [name]: value })

    const signIn = () => {
        if (!auth.email || !auth.password || fetching) return
        dispatch(loginAction(auth))
            .then(({ error, success }) => {
                if (error) {
                    const { type } = error.response?.data
                    switch (type) {
                        case 'emailError':
                            setError({ email: 'No hay una cuenta relacionada a este correo' })
                            break;
                        case 'passwordError':
                            setError({ password: 'La contraseña es incorrecta' })
                            break;
                        default:
                            setError({ password: 'Email o contraseña incorrectos' })
                    }
                    toast({
                        title: 'Hay un problema 😔',
                        description: 'Email o contraseña incorrectos',
                        status: 'error',
                        duration: 9000,
                    })
                }
                else {
                    setError({})
                    toast({
                        title: '¡Bienvenid@!',
                        description: 'Se ha iniciado sesión correctamente',
                        status: 'success',
                        duration: 9000,
                    })
                    //redirect
                    navigate('/perfil')
                }
            })
    }

    const linkToSignup = (<Link style={{ color: 'inherit', }} to="/registro">
        <Text>
            ¿No tienes cuenta? <strong>Regístrate</strong>
        </Text>
    </Link >)

    return (
        <>
            <Nav />
            <PageContainer
                justifyContent="center"
                alignItems="center"
            >
                <VStack spacing={6}>
                    <Image
                        maxW="300px"
                        objectFit="contain"
                        src={mascot}
                        alt="fixter mascot"
                    />
                    <Heading >
                        Inicio de sesión
                    </Heading>

                    {emailLogin && <>
                        <FormControl isInvalid={error.email}>
                            <FormLabel>
                                Correo
                            </FormLabel>
                            <Input
                                onInputChange={_onChange}
                                value={auth.email} onChange={_onChange} name="email" placeholder='Escribe tu correo electrónico' />
                            <FormErrorMessage>{error?.email} 😱</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={error.password}>
                            <FormLabel>
                                <Flex alignItems="flex-end">
                                    <Text>
                                        Contraseña
                                    </Text>
                                    <Spacer />
                                    <Button variant="link">
                                        <Text fontSize="10px">
                                            ¿Olvidaste tu contraseña?
                                        </Text>
                                    </Button>
                                </Flex>
                            </FormLabel>
                            <PasswordInput onChange={_onChange} value={auth.password} name="password" />
                            <FormErrorMessage>{error?.password} 😱</FormErrorMessage>
                        </FormControl>
                        <VStack w="full" spacing={4}>
                            <Button
                                isLoading={fetching}
                                onClick={signIn}
                                isFullWidth
                                isDisabled={auth.email === '' || auth.password === ''}
                            >
                                Iniciar sesión
                            </Button>
                            {linkToSignup}
                        </VStack>

                    </>}

                    {!emailLogin && <>
                        <Button
                            isFullWidth
                            leftIcon={<FaFacebookF />}
                            // backgroundColor="#3479EA"
                            colorScheme="facebook"
                        >
                            Inicia sesión con Facebook
                        </Button>
                        <Button
                            isFullWidth
                            leftIcon={<FaGoogle />}
                            // backgroundColor="#58A55C"
                            colorScheme="google"
                        >
                            Inicia sesión con Google
                        </Button>
                        <VStack w="full" spacing={4}>
                            <Button
                                onClick={() => setEmailLogin(true)}
                                isFullWidth
                                leftIcon={<FiMail />}
                                colorScheme="local"
                            // backgroundColor="#F2994A"
                            >
                                Inicia sesión con Email
                            </Button>
                            {linkToSignup}
                        </VStack>
                    </>}
                </VStack>

            </PageContainer >
        </>
    )
}

export default Login