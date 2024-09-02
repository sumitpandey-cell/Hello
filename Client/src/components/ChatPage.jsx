import { Box, TextField } from '@mui/material'
import React from 'react'
import AttachmentIcon from '@mui/icons-material/Attachment';

function ChatPage({
    className,
}) {
  return (
    <div className={` ${className}`}>
        <Box
        sx={{
            padding:2,
            '&:hover':{
                backgroundColor: 'white',
                borderRadius: '10%',
            }
        }}
        ><AttachmentIcon/></Box>
        <TextField fullWidth type="text"/>
    </div>
  )
}

export default ChatPage