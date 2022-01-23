import * as React from 'react'
import { Nav } from '2022/parts/nav'
import { Footer } from '2022/parts/footer'
import { Container } from '@chakra-ui/react'
import Hero from './Hero'
import Experience from './Experience'

const HomePage = ({ children }) => {
    return (<>
        <Container
            minH="50vh"
            alignItems="stretch"
            py={[0, 0, 20]}
            maxW="container.xl"
        >
            <Nav />
            <Hero />
            <Experience />
        </Container>
        {/* <Footer /> */}
    </>
    )
}

export default HomePage