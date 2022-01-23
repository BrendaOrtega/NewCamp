import { Box, Button, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Hero = () => {
    const [isTablet] = useMediaQuery('(min-width: 768px)')
    return (<Flex
        h={[500, 820]}
        justifyContent="center">
        {isTablet && <Box bg="red.500"
            w="100%                 "
        >
            Image
        </Box>}
        <Flex
            w="100%"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
            paddingStart={[0, 0, 14]}
            gap={4}
        >
            <Heading fontWeight="normal" >
                Aprende las {" "}
                <strong>
                    herramientas y frameworks
                </strong>
                {" "}que usan los profesionales de la industria
            </Heading>
            <Text
                fontSize="xl"
            >
                Cursos, botocamps, eventos y más.
            </Text>
            <Button size="lg" >
            >_ Explorar
            </Button>
        </Flex>
    </Flex >);
}

export default Hero;