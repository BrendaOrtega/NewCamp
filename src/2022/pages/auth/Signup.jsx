import * as React from 'react'

import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { PageContainer } from '2022/admin'
import { Image, Button, Heading, Text, useColorModeValue, VStack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import mascot from 'assets/roboGeek.png'
import { Nav } from '2022/parts/nav'

const Signup = () => {
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
                        // boxSize="300px"
                        objectFit="contain"
                        src={mascot}
                        alt="fixter mascot"
                    />
                    <Heading color={headingColor} >
                        Crea una cuenta
                    </Heading>
                    <FormControl>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <Input
                            placeholder="contacto@fixter.org" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Contraseña
                        </FormLabel>
                        <Input
                            placeholder="*********" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Confirma tu contraseña
                        </FormLabel>
                        <Input
                            placeholder="*********" />
                    </FormControl>
                    <VStack w="full" spacing={4}>
                        <Button
                            isFullWidth
                        >
                            Crear cuenta
                        </Button>
                        <Link to="/login">
                            <Text>
                                ¿Ya tienes cuenta? <strong>Inicia sesión</strong>
                            </Text>
                        </Link>
                    </VStack>
                </VStack>

            </PageContainer >
        </>
    )
}

export default Signup