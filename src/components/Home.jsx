import { Avatar, Box, Button, Card, CardBody, CardHeader, Flex, Grid, Heading, Stack, Text, Tooltip } from '@chakra-ui/react'
import '../index.css'
import { FaAws, FaC, FaDocker, FaLinkedin, FaNodeJs, FaPython, FaReact, FaSquareGithub, FaStackOverflow } from 'react-icons/fa6'
import { SiD3Dotjs, SiDjango, SiFlask, SiGmail, SiGooglecloud, SiJquery, SiKubernetes, SiMongodb, SiMysql, SiPuppet, SiTensorflow, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FcLinux } from 'react-icons/fc'
import { FaFilePdf } from 'react-icons/fa'
const BASE_URL = import.meta.env.BASE_URL;

const Home = () => (
  <Stack className="Outlet">
    <Flex flexFlow={{ base: "column", lg: "row" }} justifyContent={"center"}
      alignItems={"center"} m={5} gap={10}>
      <Box className='Name'>
        <span className='Hero'>ADESHINA IBRAHIM</span>
        <span style={{ fontSize: "1.5rem" }}>Software Engineer</span>
        <ul>
          <li><a target="_blank"
            href="mailto:AdeshinaIbrahim10@gmail.com"><SiGmail />
          </a>
          </li>
          <li><a target="_blank"
            href="https://github.com/Usool-Data-Science"><FaSquareGithub /></a>
          </li>
          <li><a target="_blank"
            href="https://stackoverflow.com/users/19386218/adeshina-ibrahim"><FaStackOverflow /></a>
          </li>
          <li><a target="_blank" href="https://www.linkedin.com/in/adeshina-software-engineer/"><FaLinkedin /></a>
          </li>
        </ul>

        <Tooltip hasArrow label='View Resume' bg='gray.300' color='black'>
          <Button colorScheme='teal' size='lg' mt={5}>
            <Flex flexWrap={"nowrap"} gap={"5px"}
              alignItems={"center"}
            >
              <a href='https://drive.google.com/file/d/1aLOmREEl9BA4Y-tJ-xLSop_3_aXCGnjQ/view?usp=sharing' target='_blank'><FaFilePdf size={30} /></a>
              <span>My Resume</span>
            </Flex>


          </Button>
        </Tooltip>
      </Box>

      <div className='Description'>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>About Me</h1>
        <p>
          I am an innovative software engineer with a proven track record in designing and developing intelligent applications,
          efficient data processing solutions, and robust backend systems. My expertise lies in leveraging the following cutting-edge technologies
          to deliver high-quality, scalable, and maintainable software solutions that drive business success:
        </p>

        <div className='stack'>
          <span className='subHeading'>Programming Languages:</span>
          <FaPython size={40} />
          <IoLogoJavascript size={40} />
          <SiTypescript size={35} />
          <FaC size={38} />
        </div>

        <div className='stack'>
          <span className='subHeading'>Frameworks and Libraries:</span>
          <SiFlask />
          <SiDjango />
          <SiTensorflow />
          <FaReact />
          <FaNodeJs />
          <SiJquery />
          <SiD3Dotjs />
        </div>

        <div className='stack'>
          <span className='subHeading'>Databases:</span>
          <SiMysql />
          <SiMongodb />
          <BiLogoPostgresql />
          <DiRedis />
        </div>

        <div className='stack'>
          <span className='subHeading'>DevOps and Cloud:</span>
          <FaAws />
          <SiGooglecloud />
          <FaDocker />
          <SiKubernetes />
          <SiPuppet />
          <FcLinux />
        </div>
      </div>

    </Flex>

    <hr />
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
      mx={5}
      mb={7}
    >
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Saleem Anwar' src={BASE_URL + 'Images/saleem.jpg'} />
              <Box>
                <Heading size='sm'>Saleem Anwar</Heading>
                <Text>Developer, Anwar Globals.</Text>
              </Box>
            </Flex>
            <span className="fi fi-au"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            You have a natural talent for simplifying complicated tasks, and your ability to debug and resolve issues across both front-end and back-end is truly commendable.
          </Text>
        </CardBody>
      </Card>
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Maryam Teresti' src={BASE_URL + 'Images/teresti.jpg'} />
              <Box>
                <Heading size='sm'>Maryam Teresti</Heading>
                <Text>Biotechnician, Musoon Health.</Text>
              </Box>
            </Flex>
            <span className="fi fi-fr"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Your API integrations between the React front-end and Python backend are flawless. The seamless data flow and reliable communication between components truly enhance the user experience.
          </Text>
        </CardBody>
      </Card>
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Suzzana Polyanska' src={BASE_URL + 'Images/polyska1.jpg'} />
              <Box>
                <Heading size='sm'>Suzzana Polyanska</Heading>
                <Text>Data Analyst, Redeem Consult.</Text>
              </Box>
            </Flex>
            <span className="fi fi-my"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Your proactive approach to ensuring both code quality and user experience, combined with your attention to detail in security and performance, sets you apart as a top-tier engineer.
          </Text>
        </CardBody>
      </Card>
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Adeyemo Taofeeq' src='https://avatar.iran.liara.run/public/boy?username=Adeyemo Taofeeq' />
              <Box>
                <Heading size='sm'>Adeyemo Taofeeq</Heading>
                <Text>Manager, Albrighton Venture.</Text>
              </Box>
            </Flex>
            <span className="fi fi-gb"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Your React code is always clean, efficient, and follows best practices. It’s clear that you prioritize maintainability and scalability, making it easy for others to follow and build upon your work.
          </Text>
        </CardBody>
      </Card>
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Edgar Smith' src={BASE_URL + 'Images/edgar1.jpg'} />
              <Box>
                <Heading size='sm'>Edgar Smith</Heading>
                <Text>CEO, Ladkas Ltd.</Text>
              </Box>
            </Flex>
            <span className="fi fi-de"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Your proficiency in both React and Python backend development is outstanding! Your ability to bridge front-end and back-end seamlessly shows your deep understanding of full-stack development.
          </Text>
        </CardBody>
      </Card>
      <Card maxW='lg'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Qk Zalmi' src='https://avatar.iran.liara.run/public/boy?username=Qk Zalmi' />
              <Box>
                <Heading size='sm'>Qk Zalmi</Heading>
                <Text>CEO, Khan Tech Ltd.</Text>
              </Box>
            </Flex>
            <span className="fi fi-pk"></span>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            I’m consistently impressed by how quickly you solve complex issues on the Python backend. Your grasp of server-side logic and optimization really strengthens the overall system performance.
          </Text>
        </CardBody>
      </Card>
    </Grid>
  </Stack >
)

export default Home