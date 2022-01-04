import { Button, Checkbox, Flex, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Spacer, Text, Textarea, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { MdBuild } from 'react-icons/md'
import { PageContainer } from '.'

const AdminPage = () => {
    const { toggleColorMode } = useColorMode()
    const bgColor = useColorModeValue('red.500', 'whiteAlpha.500')
    return (
        <PageContainer>
            <VStack
                w="full"
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
            // bg="red.500"
            >
                <VStack
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Heading color={bgColor}>
                        <Text>
                            Detalles de la lección
                        </Text>
                    </Heading>
                    <Text>
                        Completa la información del video
                    </Text>
                </VStack>
                <SimpleGrid
                    columns={2}
                    columnGap={3}
                    rowGap={6}
                    w="full"
                >
                    <GridItem colSpan={2} >
                        <FormControl>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <Input placeholder="How to create a dark mode switcher" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={[2, 1]} >
                        <FormControl>
                            <FormLabel>
                                Tweet text
                            </FormLabel>
                            <Input placeholder="Look what I found! " />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={[2, 1]} >
                        <FormControl>
                            <FormLabel>
                                Video length
                            </FormLabel>
                            <Input placeholder="4m 33s" />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <FormControl>
                            <FormLabel>
                                Technology
                            </FormLabel>
                            <Select>
                                <option value="React">React</option>
                                <option value="Node">Node</option>
                                <option value="JavaScript">JavaScript</option>
                            </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <FormControl>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <Textarea placeholder="How to create a dark mode switcher" />
                        </FormControl>
                    </GridItem>
                    <Spacer />
                    <GridItem colSpan={2} >
                        <Checkbox defaultChecked>
                            Available free?
                        </Checkbox>
                    </GridItem>
                    <GridItem colSpan={2} textAlign="center" >
                        <Button
                            leftIcon={<MdBuild />}
                            colorScheme="pink"
                            w="200px"
                            spinnerPlacement='end'
                            loadingText='Saving'
                            isLoading={false}
                            onClick={toggleColorMode}
                        >
                            Save
                        </Button>
                    </GridItem>

                </SimpleGrid>
            </VStack>
            <VStack
                w="full"
                h="full"
                p={10}
                spacing={10}
                alignItems="flex-start"
                bg={bgColor}
            >

            </VStack>
        </PageContainer >
    )
}

export default AdminPage