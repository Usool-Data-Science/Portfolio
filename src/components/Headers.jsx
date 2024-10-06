import { Avatar, Box, Button, Tooltip, useColorMode, WrapItem } from '@chakra-ui/react';
import '../index.css';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

const Headers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="Header">
      <Box display={{ sm: "none", md: "block" }}>
        <a href='/#'>
          <WrapItem>
            <Avatar name='Adeshina Ibrahim' src='https://www.gravatar.com/avatar/062207723a592652be2a7961bcd34f69' />
          </WrapItem>
        </a>
      </Box>
      <div className='Navs'>
        <ul>
          <li><a href='/'> Home </a></li>
          <li><a href='/blogs'> Blogs </a></li>
          <li><a href='/projects'> Projects </a></li>
          <li><a target='_blank' href='https://calendar.app.google/Vcg7ud9XC2kGaPXM9'> Consult </a></li>
        </ul>
      </div>
      <Tooltip hasArrow label={`Switch to ${colorMode === 'light' ? 'Dark' : 'light'} Mode`} bg='gray.300' color='black' placement='right'>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
        </Button>
      </Tooltip>
    </div>
  )
}

export default Headers