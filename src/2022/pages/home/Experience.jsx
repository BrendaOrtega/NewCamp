import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Container,
    Image,
    useColorMode,

} from '@chakra-ui/react'
//assets
import addFriend from 'assets/icons/addFriend.png'
import lupa from 'assets/icons/lupa.png'
import confetti from 'assets/icons/confetti.png'
import recent from 'assets/icons/recent.png'

const Experience = () => {
    const { colorMode } = useColorMode()
    return (
        <Flex
            bg={colorMode === 'dark' ? "#2D2D2D" : "#FBFBFB"}
            py={20}
            w="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={4}
        >
            <Heading
                textAlign="center"
            // fontWeight="normal" 
            >
                A life-changing experience
            </Heading>
            <Text
                textAlign="center"
                fontSize="xl"
            >
                Aprender las habilidades necesarias para convertirte en desarrollador, durante cada curso desarrollarás varios proyectos y ejercicios que pondrán a prueba lo que ha
            </Text>
            <Flex
                marginTop={10}
                flexDirection={["column", "column", "row"]}
                gap={20}
            >
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    textAlign="center"
                >
                    <Image
                        _hover={{ transform: "scale(1.2)" }}
                        w={20}
                        h={20}
                        src={addFriend} alt="friend icon" />
                    <Text fontSize="lg">
                        Crea tu cuenta y empieza a aprender de lo más de 10 cursos gratuitos.
                    </Text>
                </Flex>

                <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    textAlign="center"
                >
                    <Image
                        _hover={{ transform: "scale(1.2)" }}
                        w={20}
                        h={20}
                        src={lupa} alt="friend icon" />
                    <Text fontSize="lg">
                        Actualiza tu plan y accede al contenido Premium que tenemos para ti.                    </Text>
                </Flex>

                <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    textAlign="center"
                >
                    <Image
                        _hover={{ transform: "scale(1.2)" }}
                        w={20}
                        h={20}
                        src={confetti} alt="friend icon" />
                    <Text fontSize="lg">
                        Aprende las habilidades que necesita para impulsar tu carrera                    </Text>
                </Flex>

                <Flex
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    textAlign="center"
                >
                    <Image
                        transition=".3s"
                        _hover={{ transform: "scale(1.2)" }}
                        w={20}
                        h={20}
                        src={recent} alt="friend icon" />
                    <Text fontSize="lg">
                        Comparte tu certificado, asiste a eventos y se parte de nuestra comunidad.                    </Text>
                </Flex>

            </Flex>
        </Flex>
    );
}

export default Experience;