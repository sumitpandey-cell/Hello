import React from 'react'
import UpperNav from '../components/UpperNav'
import { alpha, Box, Container, Grid2, InputBase, styled, Typography } from '@mui/material'
import ChatedPerson from '../components/ChatedPerson'
import MainBox from '../components/MainBox'
import ChatPage from '../components/ChatPage'
import ChatMesssage from '../components/ChatMesssage'

function Home() {
  const [search, setSearch] = React.useState('')
  const user = ["Sumit pandey", "Anshu pandey", "Munna pandey", "Anjali pandey", "Gaurav upadyay", "Lucky tiwari", "Pranjal singh", "Vikash sharma", "Raj", "Ajay", "kali", "Roshan", "Kishan", "Krishana"]

  const message = ["Hello", "Hi", "How are you", "I am fine", "Kya hal chal hai", "nahi", "Polics", "sadnkaj", "asjndknf", "sknajf", "nahi", "Polics", "sadnkaj", "asjndknf", "sknajf", "lsnad", "asnjnf"]
  return (
    <>
      <UpperNav />
      <Container maxWidth="xl" style={{ height: "89vh", padding: 0 }}>
        <Grid2 container spacing={0} style={{ height: '100%' }}>

          {/* 1st main box */}
          <MainBox className='bg-white' width="25%">
            {user.map((name, index) => (
              <ChatedPerson key={index} name={name} message="Hello" />
            ))}
          </MainBox>

          {/* 2nd main box */}
          <MainBox
            width="50%"
            className="bg-white"
          >
            <Container
              sx={{
                height: "89%",
              }}
            >

            </Container>
            <ChatPage className="flex bottom-0" />
          </MainBox>

          {/* 3rd main box */}
          <MainBox className='bg-white' backgroundColor="#fff" width="25%">
          </MainBox>
        </Grid2>
      </Container>
    </>
  )
}

export default Home