import { Box, Paper, TextField } from '@mui/material'
import React from 'react'

function SearchPage() {
  return (
    <Box component="section"
      sx={{
        position: "fixed",
        top: "15%",
        left: "35%",
        height: "400px",
        width: "400px",
        backgroundColor: "black",
        zIndex: "10",
        borderRadius: 1,
      }}
    >
      <Paper
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#ececec",
          borderRadius: 1,
        }}
      >
        <TextField component="search">

        </TextField>
      </Paper>
    </Box>
  )
}

export default SearchPage