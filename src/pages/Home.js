import React,{useState} from 'react'
import { Box } from '@mui/material'

import Herobanner from '../components/Herobanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <Herobanner/>
      <SearchExercise/>
      <Exercises/>


    </Box>
  )
}

export default Home