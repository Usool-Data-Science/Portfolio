import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Post = ({ post }) => {
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                mb={"1rem"}
                overflow='hidden'
                variant='outline'
            // width={"md"}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    src={post.thumbnail}
                    alt='Caffe Latte'
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