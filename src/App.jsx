import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  const TEST_VALUE = "test result";
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout value={TEST_VALUE}/>}>
          <Route index element={<Home />}/>
          <Route path='/blogs' element={<Blogs />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/resume' element={<Resume />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
