import {
    Container,
    Flex,
    Heading,
    Image,
    useColorMode,
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
            }}>
                <Flex
                    flexDirection={['column', 'row']}
                    justifyContent={['center', 'flex-start']}
                    position="absolute"
                    bottom={['-30%', '-20%']}
                    right="0"
                    left={['0', '10%']}
                    alignItems="center"
                    gap={[3, 5]}
                >
                    <Image
                        width="170px"
                        rounded='full'
                        src={photoURL}
                        alt="user pic" />
                    <Heading
                        pb={10}
                        // paddingLeft="19px"
                        color={[colorMode === 'dark' ? '#fff' : '#000', '#fff']}>
                        {displayName}
                    </Heading>
                </Flex>
            </div>

            <Container
                p={0}
                maxW="container.xl"
            >
                <Flex h="100vh" py={20}
                    direction={['column', 'row']}
                >
                    Bliss
                </Flex>
            </Container>
        </>
    )
}

export default Profile