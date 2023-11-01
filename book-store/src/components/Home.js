import React from 'react'
import {Button,Typography,Box} from '@mui/material'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Button LinkComponent={Link} to="/books" sx={{marginTop: 15}} variant='contained'>
          <Typography variant='h3'>View all products</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home