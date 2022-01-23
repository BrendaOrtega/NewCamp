import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    useColorMode,
    useMediaQuery,

} from '@chakra-ui/react'
import { FaGithubSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

// assets
import oswaldo from 'assets/2022/os.png'

const Testimonials = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1024px)')
    const { colorMode } = useColorMode()
    return (<Flex
        bg={colorMode === 'dark' ? "#2D2D2D" : "#FBFBFB"}
        py={20}
        justifyContent="center"
        alignItems={["center", "center", "center", "flex-start"]}
        flexDirection={["column", "column", "column", "row"]}
        gap={6}
        textAlign={["center", "center", "center", "left"]}
    >
        <Flex
            flexDirection="column"
            alignItems="center"
        >
            <Heading
                fontSize="24px"
            >
                Fixter.camp te te cambia la vida
            </Heading>

            <Image
                pt={10}
                w={["50%", "50%", "50%", "80%"]}
                src={oswaldo} alt="ex alumno" />

        </Flex>

        <Flex
            flexDirection={["column"]}

        >
            {isDesktop &&
                <Flex
                    pt={20}
                    pb={4}
                    gap={8}
                >

                    <Image
                        borderRadius='full'
                        w={14}
                        src={oswaldo} alt="ex alumno" />
                    <Image
                        borderRadius='full'
                        w={14}
                        src={oswaldo} alt="ex alumno" />
                    <Image
                        borderRadius='full'
                        w={14}
                        src={oswaldo} alt="ex alumno" />
                    <Image
                        borderRadius='full'
                        w={14}
                        src={oswaldo} alt="ex alumno" />
                    <Image
                        borderRadius='full'
                        w={14}
                        src={oswaldo} alt="ex alumno" />

                </Flex>
            }
            <Heading
                my="0"
                py={4}
            >
                Oswaldo Martínez
                <Heading
                    color={colorMode === 'dark' ? "gray.300" : "#565656"}
                    fontSize="16px">
                    Software Engineer en Encora
                </Heading>
            </Heading>
            <Text
                fontSize={["md", "md", "xl", "xl"]}
            >
                Aprender a programar no es sencillo, enseñarlo tampoco. En fixter tuve la oportunidad de crearme una carrera como desarrollador profesional gracias a la metodología que usan y al acompañamiento que hasta la fecha tengo.
            </Text>

            <Flex
                py={6}
                gap={6}
                fontSize="32px"
                color={colorMode === 'dark' ? "#fff" : "#1C2226"}

                flexDirection="row"
                justifyContent={["center", "center", "center", "left"]}
            >
                <BsLinkedin />
                <FaGithubSquare />

            </Flex>

        </Flex>

    </Flex >);
}

export default Testimonials;