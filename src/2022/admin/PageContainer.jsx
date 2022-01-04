import * as React from 'react'
import { Container, Flex } from '@chakra-ui/react'

const PageContainer = ({ children, ...flexProps }) => <Container
    p={0}
    maxW="container.xl"

>
    <Flex h="100vh" py={20}
        direction={['column', 'row']}
        {...flexProps}
    >
        {children}
    </Flex>
</Container>

export default PageContainer