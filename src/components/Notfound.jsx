import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Notfound = ({ searchPost }) => {
    const QUERY = searchPost.length ? (searchPost).toLowerCase() : '';
    return (
        <>
            <Card maxW='lg' display={"flex"} alignItems={"center"} fontSize={"1.5rem"} p={"5px"}>
                <CardBody alignItems={"center"}>
                    <Stack mt='6' spacing='3'>
                        <Heading >No blog post on {QUERY} yet!</Heading>
                        <Text>
                            How about I write a post on {QUERY}, would it be great?
                        </Text>
                    </Stack>
                </CardBody>
                <CardFooter >
                    <Image
                        src='src/Images/thinking.png'
                        alt='Thinking about writing new blog'
                        borderRadius='lg'
                    />

                </CardFooter>
                <Text pb={"1rem"}>
                    You can find all my blog posts <a href="https://dev.to/usooldatascience" style={{ textDecoration: "underline" }}>here</a> anyways!
                </Text>
            </Card>
        </>
    )
}

export default Notfound