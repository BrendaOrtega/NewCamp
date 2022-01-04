import * as React from 'react'

import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { PageContainer } from '2022/admin'
import { Image, Button, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import mascot from 'assets/roboGeek.png'
import { Nav } from '2022/parts/nav'

const Login = () => {
    const headingColor = useColorModeValue('grey.500', 'white')
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
                    <Button
                        isFullWidth
                        leftIcon={<FaFacebookF />}
                        backgroundColor="#3479EA"
                    >
                        Inicia sesión con Facebook
                    </Button>
                    <Button
                        isFullWidth
                        leftIcon={<FaGoogle />}
                        backgroundColor="#58A55C">
                        Inicia sesión con Google
                    </Button>
                    <VStack w="full" spacing={4}>
                        <Button
                            isFullWidth
                            leftIcon={<FiMail />}
                            backgroundColor="#F2994A">
                            Inicia sesión con Email
                        </Button>
                        <Link to="/registro">
                            <Text>
                                ¿No tienes cuenta? <strong>Regístrate</strong>
                            </Text>
                        </Link>
                    </VStack>
                </VStack>

            </PageContainer >
        </>
    )
}

export default Login