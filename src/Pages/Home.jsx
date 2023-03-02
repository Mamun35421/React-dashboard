import React from 'react'
import Sidebar from '../Components/Navbar'
import Box from '@mui/material/Box';

const Home = () => {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <Sidebar/>
  <div>Home</div>

</Box>

</>
  )
}

export default Home