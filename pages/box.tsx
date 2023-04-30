import {
    Container, Flex, VStack
} from '@chakra-ui/react';
import Details from '../src/sections/details';
import Cart from '../src/sections/cart';

const BoxPage = () => (

    <Container
        maxWidth="container.xl"
        padding={0}
    >
        <Flex
            height={{ base: 'auto', md: '100vh' }}
            paddingY={[0, 10, 20]}
            direction={{
                base: 'column-reverse',
                md: 'row'
            }}
        >   
            <Details />
            <Cart />

        </Flex>

    </Container>

);

export default BoxPage;