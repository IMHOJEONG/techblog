### Explanation

- Chakra-ui has own design system

- every design system has designed tokens. which are colors, spacing units, fonts, sizes, etc

  - style props => access those design tokens that are part of Chakra UI

    - compiled to CSS properties 

---

- Chakra UI comes with a few useful React hooks

  - useColorMode hook

```jsx
<VStack
                width={"full"}
                height={"full"}
                padding={10}
                spacing={6}
                alignItems={"flex-start"}
                background={"gray.50"}
            >
            <VStack
                alignItems={"flex-start"}
                spacing={3}
            >
                <Heading size="2xl">
                    Your cart
                </Heading>
                <Text>
                    <Button
                        variant="link"
                        colorScheme="black"
                        onClick={toggleColorMode}
                    >
                        try changing the theme
                    </Button>
                </Text>
            </VStack>
```

- useColorMode hook을 주어도 변경되지 않는 이유?

  - 상위 컴포넌트의 background가 gray.50으로 고정되어 있기 때문

---

- Chakra UI에서의 반응형 디자인은 어떻게 적용하는가

  - ` paddingY={[0, 10, 20]}`

  - 0~479 pixels => 0

  - 480~767 pixels => 10 

  - 768~up pixels => 20

```jsx
direction={{
  base: 'column-reverse',
  md: 'row'
}}
```

- 0~767 pixels : column-reverse

- 768~up pixels : row

- useBreakPointValue hook?

  - 