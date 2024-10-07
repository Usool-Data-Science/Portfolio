import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Post = ({ post }) => {
    const BASE_URL = import.meta.env.BASE_URL;
    console.log(BASE_URL)
    return (
        <>
            <Card
                direction={{ base: 'column', lg: 'row' }}
                mb={"1rem"}
                overflow='hidden'
                variant='outline'
            // width={"md"}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    alignSelf={"center"}
                    src={BASE_URL + post.thumbnail}
                    alt='post thumbnail'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'
                            pb={"1rem"}
                            fontSize={"2xl"}>
                            {post.title} [{post.datetime}]
                        </Heading>

                        <Text lineHeight={"2.5rem"} pt={"1rem"} fontSize={"20px"}
                            align={"justify"}>
                            {(post.headline).length > 100 ? `${(post.headline).slice(0,)}...` : post.headline}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            <a target="_blank" href={post.link}>Read Post</a>
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

        </>
    )
}

export default Post