import { Box, Button, Link } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate()
    return (
        <Box>
            Hi there. Click to get select plans.
            <Button
                onClick={() => {
                    navigate("/plans");
                }}
                variant='contained'
            >Plans</Button>
        </Box>
    )
}
