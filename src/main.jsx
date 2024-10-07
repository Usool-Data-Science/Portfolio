// import { StrictMode } from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Route, Router, Routes } from 'react-router-dom'
// // import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ChakraProvider>
//       <Router>
//         <Routes>
//           <Route path='/*' element={<App />}/>
//         </Routes>
//       </Router>
//     </ChakraProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for v6 routing
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter basename='/Usool-Data-Science/'>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
