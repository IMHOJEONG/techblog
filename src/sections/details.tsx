import {
    VStack, Heading, Text,
    SimpleGrid, GridItem,
    FormControl, FormLabel, Input,
    Select, Checkbox, Button,
    useBreakpointValue,

} from "@chakra-ui/react"


const Details = () => {

    const colSpan = useBreakpointValue({
        base: 2, md: 1
    })

    return (
        <VStack
        width={"full"}
        height={"full"}
        padding={10}
        spacing={10}
        alignItems={"flex-start"}
        >
            <VStack spacing={3}
                alignItems={"flex-start"}
            >
                <Heading
                    size='2xl'
                >
                    Your details
                </Heading>
                <Text>
                    Test
                </Text>
            </VStack>
            <SimpleGrid
                columns={2}
                columnGap={3}
                rowGap={6}
                width={"full"}
            >
                <GridItem
                    colSpan={colSpan}    
                >
                    <FormControl>
                        <FormLabel>
                            First Name
                        </FormLabel>
                        <Input
                            placeholder="John"
                        />
                    </FormControl>
                </GridItem>
                <GridItem
                    colSpan={colSpan}    
                >
                    <FormControl>
                        <FormLabel>
                            Last Name
                        </FormLabel>
                        <Input
                            placeholder="Doe"
                        />
                    </FormControl>
                </GridItem>
                <GridItem
                    colSpan={2}    
                >
                    <FormControl>
                        <FormLabel>
                            Address
                        </FormLabel>
                        <Input
                            placeholder="39ghwjd"
                        />
                    </FormControl>
                </GridItem>
                <GridItem
                    colSpan={colSpan}    
                >
                    <FormControl>
                        <FormLabel>
                            City
                        </FormLabel>
                        <Input
                            placeholder="Seoul"
                        />
                    </FormControl>
                </GridItem>
                <GridItem
                    colSpan={colSpan}    
                >
                    <FormControl>
                        <FormLabel>
                            Country
                        </FormLabel>
                        <Select>
                            <option value='korea'>korea</option>
                            <option value='china'>china</option>
                            <option value='japan'>japan</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox
                        defaultChecked
                    >
                        Ship to billing
                    </Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button
                        colorScheme="brand"
                        size="lg"
                        width="full"
                        variant={"primary"}
                    >
                        Place Order
                    </Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default Details;
