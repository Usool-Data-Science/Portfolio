import { Button, ButtonGroup, Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react"
import SearchBlog from "./SearchBlog"
import BlogGrid from "./BlogGrid"

const Blogs = ({ searchPost, setSearchPost, blogPosts }) => {
  const handleSearch = (e) => {
    setSearchPost(e.target.innerText);
  }
  return (
    <Stack >
      <Text className="Description"
        style={{
          fontSize: "1.5rem", margin: "1rem", align: "justify"
        }}
      >
        As a technical writer, I frequently write <a target="_blank" href="https://dev.to/usooldatascience" className="blogPost">blog</a> posts on topics that seems confusing to junior developers and refreshers for senior devs.
        My <a target="_blank" href="https://dev.to/usooldatascience" className="blogPost">blog</a> posts mostly relates to fullstack development, Python, DevOps, Microservices and APIs.
      </Text>

      <Card
        direction={{ base: 'column', md: 'row' }}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        flexFlow={"wrap"}
        variant='outline'
        alignSelf={"flex-start"}
        mb={"1rem"}
      // width={"md"}
      >
        <CardBody>
          <SearchBlog
            searchPost={searchPost}
            setSearchPost={setSearchPost}
          />
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='5'>
            <Button variant='solid' onClick={handleSearch}>Flask</Button>
            <Button variant='solid' onClick={handleSearch}>Python</Button>
            <Button variant='solid' onClick={handleSearch}>GitHub</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <BlogGrid blogPosts={blogPosts} searchPost={searchPost} />
    </Stack>
  )
}

export default Blogs