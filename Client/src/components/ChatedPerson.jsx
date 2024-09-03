import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material';
function ChatedPerson({
    name,
    message,
    src,

})
{
    
    return (
        <div>
            <Box component="section" 
            // onClick={}
            sx={{
                borderBottom: '0.5px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                height: '12vh',
                possition: 'relative',
                paddingX: 2,
                cursor: 'pointer'
            }}>
                <div
                 className='h-[8vh] w-14'
                >
                <Avatar alt="Remy Sharp"
                    src={src}
                    sx={{
                        margin: 'auto',
                        height: '100%',
                        width: '100%',
                    }}
                />
                </div>
                <Typography
                    sx={{
                        marginX: 2,
                    }}
                >
                    <h5 className='font-bold'>{name}</h5>
                    <p className='text-slate-400'>{message}</p>
                </Typography>
                <Typography className='text-slate-400 absolute right-4'>now</Typography>
            </Box>
        </div>
    )
}

export default ChatedPerson