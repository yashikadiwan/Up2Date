import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Contact us to know more'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Have questions about our societies? Contact us! We are here to help. Explore interests, join clubs, and enrich your university experience. Reach out for information and get involved today! 📩🌟'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;