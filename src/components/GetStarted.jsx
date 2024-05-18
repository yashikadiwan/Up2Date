import React from 'react';
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material';
import Title from './Title';
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    });
    
    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    });

    return (
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
            sx={{
                py: 10,
                px: 2,
            }}
        >
            {/* New Grid Item for "Events" text */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Events
                </Typography>
            </Grid>

            {/* First Grid Item for Mavericks */}
            <CustomGridItem item xs={12} sm={8} md={6} component='section'>
                <Box component='article' sx={{ px: 4 }}>
                    <Title text={'Mavericks-The Western Dance Society'} textAlign={'start'} />
                    <CustomTypography>
                        Auditions <br/>
                        🎶 Calling all students! Unleash your rhythm, grace, and creativity at our dance auditions. Join us for a chance to shine, express, and ignite the stage with your talent. Don't miss out! 🕺💃
                    </CustomTypography> 
                </Box>
            </CustomGridItem>
            
            {/* Second Grid Item for first image */}
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" style={{ width: '100%' }} />
            </Grid>

            {/* Third Grid Item for second image */}
            <Grid item xs={12} sm={4} md={6} sx={{ order: { xs: 4, sm: 4, md: 3 } }}>
                <img src={imgDetail2} alt="" style={{ width: "100%" }} />
            </Grid>

            {/* Fourth Grid Item for Kalam */}
            <CustomGridItem item xs={12} sm={8} md={6} sx={{ order: { xs: 3, sm: 3, md: 4 } }}>
                <Box component='article' sx={{ px: 4 }}>
                    <Title text={'Kalam-The Literary Society'} textAlign={'start'} />
                    <CustomTypography>
                        Debate Competition<br/>
                        🎙️ Attention, students! Step into the arena of ideas, persuasion, and eloquence. Join our debate competition auditions to hone your skills, voice your opinions, and shape tomorrow's discourse. Don't miss this chance! 🗣️🤝
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;
