import { Button, ButtonGroup, Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react"
import SearchProject from "./SearchProject"
import ProjectGrid from "./ProjectGrid"

const Projects = ({ searchProject, setSearchProject, projects }) => {
  const handleSearch = (e) => {
    setSearchProject(e.target.innerText);
  };
  return (
    <Stack>
      <Text className="Description"
        style={{
          fontSize: "1.5rem", margin: "1rem", align: "justify"
        }}>
        As a dedicated software engineer, I am passionate about transforming ideas into impactful solutions through innovative technology. My experience spans a diverse range of projects, from backend systems to full-stack applications, where I leverage modern frameworks and best practices to deliver efficient, scalable, and user-friendly software. Below are some of my notable projects:
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
          <SearchProject
            searchProject={searchProject}
            setSearchProject={setSearchProject}
          />
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing='5'>
            <Button variant='solid' onClick={handleSearch}>Flask</Button>
            <Button variant='solid' onClick={handleSearch}>Python</Button>
            <Button variant='solid' onClick={handleSearch}>TypeScript</Button>
            <Button variant='solid' onClick={handleSearch}>JavaScript</Button>
            <Button variant='solid' onClick={handleSearch}>NodeJs</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <ProjectGrid projects={projects} searchProject={searchProject} />

    </Stack>
  )
}

export default Projects