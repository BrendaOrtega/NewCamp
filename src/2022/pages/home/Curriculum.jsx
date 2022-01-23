import {
    Heading, Flex, Text, Image, Box,
    useMediaQuery,

} from "@chakra-ui/react";

//assets
import boyPexels from 'assets/boyPexels.png'

const Curriculum = () => {
    const [isTablet] = useMediaQuery('(min-width: 768px)')

    return (<Flex
        my={20}
        w="100%"
        justifyContent="center"
        flexDirection={["column"]}
        gap={6}
        textAlign={["center", "center", "left"]}
    >
        <Heading>
            A world class curriculum
        </Heading>
        <Text
            fontSize={["lg", "lg", "xl"]}
        >
            En cada curso, aprenderás las skills más demandadas en el mundo del desarrollo de software, de la mano de apasionados maestros y un plan de estudios práctico y actualizado. Si apenas estas iniciando o ya eres experto en programación, no te preocupes, encontrarás cursos de nivel básico, intermedio y avanzadado, así que seguramente encontrarás el ideal para ti.
        </Text>
        <Flex
            flexDirection={["column-reverse", "column-reverse", "row"]}
            alignItems="center"
        >
            <Flex
                flexDirection={["row"]}
                flexWrap="wrap"
                justifyContent="center"
                gap={[6, 6, 6, 20]}
            >

                <Box
                    w={["166px", "166px", "166px", "207px"]}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={["54px", "54px", "54px", "68px"]}
                        color="#AB202B"
                    >
                        +6
                    </Text>
                    <Text
                        fontSize={["md", "md", "lg"]}
                    >
                        Más de 5 años ofreciendo educación presencial y en línea.
                    </Text>
                </Box>

                <Box
                    w={["166px", "166px", "166px", "207px"]}
                >
                    <Text
                        fontWeight="bold"
                        color="#AB202B"
                        fontSize={["54px", "54px", "54px", "68px"]}
                    >
                        +300
                    </Text>
                    <Text
                        fontSize={["md", "md", "lg"]}
                    >
                        Alumnos graduados de nuestros cursos presenciales y en línea.
                    </Text>
                </Box>

                <Box
                    w={["166px", "166px", "166px", "207px"]}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={["54px", "54px", "54px", "68px"]}
                        color="#AB202B"
                    >
                        +15
                    </Text>
                    <Text
                        fontSize={["md", "md", "lg"]}
                    >
                        Más de 5 años ofreciendo educación presencial y en línea.
                    </Text>
                </Box>

                <Box
                    w={["166px", "166px", "166px", "207px"]}
                >
                    <Text
                        fontWeight="bold"
                        fontSize={["54px", "54px", "54px", "68px"]}
                        color="#AB202B"
                    >
                        +10
                    </Text>
                    <Text
                        fontSize={["md", "md", "lg"]}
                    >
                        Más de 5 años ofreciendo educación presencial y en línea.
                    </Text>
                </Box>

            </Flex>
            {isTablet && <Image
                borderRadius="3xl"
                h={["200px", "200px", "500px"]}
                w={["200px", "200px", "70%"]}
                src={boyPexels}
            />}
        </Flex>
    </Flex>);
}

export default Curriculum;