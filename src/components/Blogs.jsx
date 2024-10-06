import { Button, ButtonGroup, Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react"
import SearchBlog from "./SearchBlog"
import BlogGrid from "./BlogGrid"

const Blogs = ({ searchPost, setSearchPost, blogPosts }) => {
  const handleSearch = (e) => {
    setSearchPost(e.target.innerText);
  }
  return (
    <Stack className="Outlet">
      <Text fontSize={"1.5rem"} mb={"1rem"} align={"justify"}>
        As a technical writer, I frequently write <a target="_blank" href="https://dev.to/usooldatascience" className="blogPost">blog</a> posts on topics that seems confusing to junior developers and refreshers for senior devs.
        My <a target="_blank" href="https://dev.to/usooldatascience" className="blogPost">blog</a> posts mostly relates to Fullstack development, Python, DevOps, Microservices and APIs.
      </Text>

      <Card
        direction={{ base: 'column', sm: 'row' }}
        alignItems={"center"}
        justifyContent={"center"}
        overflow='hidden'
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