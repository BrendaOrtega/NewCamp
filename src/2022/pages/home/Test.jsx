import { Button, Flex, Heading, Text } from "@chakra-ui/react";

import bg1 from 'assets/2022/bg1.png'

const Test = () => {
    return (<Flex
        borderRadius="2xl"
        py={8}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={6}
        textAlign={["center", "center", "center", "left"]}
        backgroundSize="cover"
        boxShadow="rgba(0,0,0,0.4) 0 0 0 300px inset"
        style={{
            backgroundImage: `url('${bg1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
        }}
    >
        <Heading
            fontSize={["lg", "lg", "lg", "xl"]}
            color="white"
        >
            ¿No sabes por donde empezar?
        </Heading>
        <Text
            color="white"
            textAlign="left"
            px={6}
            fontSize={["sm", "sm", "md", "lg"]}
            maxW="1024px"
        >
            Sabemos que aprender a programar puede ser díficil, pero con la ayuda del equipo adecuado y los recursos correctos puede ser un interesante viaje. Si no sabes por donde empezar, responde el test y nos encargaremos de ayudarte.
        </Text>
        <Button
            px={8}
        >
        >_ Ir al test
        </Button>
    </Flex>);
}

export default Test;