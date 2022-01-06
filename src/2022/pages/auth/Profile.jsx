import {
    Container,
    Flex,
    Heading,
    Image,
    useColorMode,
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid, GridItem,

} from '@chakra-ui/react'
import * as React from 'react'

//assets
import cover from 'assets/cover2022.svg'
import { useSelector } from 'react-redux'
import { Nav } from '2022/parts/nav'

const Profile = () => {
    //hooks
    const { photoURL, displayName } = useSelector(({ user }) => user)
    const { colorMode } = useColorMode()

    return (
        <>
            <Nav variant="solid" />
            <div style={{
                height: '400px',
                width: '100%',
                backgroundImage: `url('${cover}')`,
                backgroundSize: 'cover',
                position: 'relative',
            }}></div>

            <Container
                p={0}
                maxW="container.lg"
                // position="relative"
                // top="-100px"
                marginTop="-100px"
                zIndex="999"
                position="relative"
            >
                <Flex
                    // h="100vh" 

                    py={0}
                    direction={['column', 'row']}
                >
                    <Grid

                        minH="200px"
                        maxH="300px"
                        templateRows={['repeat(3, 1fr)', 'repeat(2, 1fr)']}
                        templateColumns={['repeat(1,1fr)', 'repeat(3, 1fr)']}
                        gap="19px"
                        // border="2px solid red"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <GridItem
                            rowSpan={[1, 2]}
                            colSpan={1}
                            justifySelf={['center', 'left']}
                        >
                            <Image
                                width="170px"
                                rounded='full'
                                src={photoURL}
                                alt="user pic" />
                        </GridItem>
                        <GridItem
                            colSpan={[1, 2]}
                            justifySelf={['center', 'left']}
                            alignSelf="flex-end"
                        >
                            <Heading
                                // pb={10}
                                // paddingLeft="19px"
                                color={[colorMode === 'dark' ? '#fff' : '#000', '#fff']}
                            // color="tomato"
                            >
                                {displayName}
                            </Heading>
                        </GridItem>
                        <GridItem
                            colSpan={[1, 2]}
                            justifySelf={['center', 'left']}
                            alignSelf="flex-end"

                        >
                            <Tabs
                                // isFitted
                                colorScheme="brand"
                            >
                                <TabList>
                                    <Tab>Mi información</Tab>
                                    <Tab>Suscripción</Tab>
                                </TabList>
                            </Tabs>
                        </GridItem>
                    </Grid>

                </Flex>
            </Container>
            <Flex
                // position="relative"
                // top="-100px"
                bg={colorMode === 'dark' ? '#2E2E2E' : "#F2F2F2"}
                w="100%"
                // bg="#fff"
                // paddingTop="100px"
                justifyContent="center"
                paddingBottom="100px"

            >

                <Flex
                    borderRadius="16px"
                    justifyContent="center"
                    my="40px"
                    w="1008px"
                    h="150px"
                    bg={colorMode === 'dark' ? '#323232' : '#fff'}

                >
                    Blissi
                </Flex>
            </Flex>

        </>
    )
}

export default Profile