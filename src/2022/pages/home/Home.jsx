import * as React from 'react'
import { Nav } from '2022/parts/nav'
import { Footer } from '2022/parts/footer'
import { Container } from '@chakra-ui/react'
import Hero from './Hero'
import Experience from './Experience'
import Curriculum from './Curriculum'
import Testimonials from './Testimonials'
import Test from './Test'
import AnimatedSection from '2022/parts/animated/AnimatedSection'

const HomePage = ({ children }) => {

    return (<>
        <Container
            minH="50vh"
            alignItems="stretch"
            py={[0, 0, 20]}
            maxW="container.xl"
        >
            <Nav />
            <AnimatedSection loop={false}>
                <Hero />
            </AnimatedSection>
            <AnimatedSection>
                <Experience />
            </AnimatedSection>

            <AnimatedSection from="left">
                <Curriculum />
            </AnimatedSection>

            <AnimatedSection from="left">
                <Testimonials />
            </AnimatedSection>

            <AnimatedSection>
                <Test />
            </AnimatedSection>
        </Container>
        {/* <Footer /> */}
    </>
    )
}

export default HomePage