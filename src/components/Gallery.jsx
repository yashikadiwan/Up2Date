import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://c4.wallpaperflare.com/wallpaper/7/499/648/bar-club-dance-dancing-wallpaper-preview.jpg'
        },
        {
            alt: 'image2',
            url: 'https://blog.stucred.com/wp-content/uploads/2019/07/Youthvibe.jpg'
        },
        {
            alt: "image3",
            url: 'https://svmevents.in/wp-content/uploads/2020/06/IMG_1128-2-1-1-1.jpg'
        },
        {
            alt: "image4",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2clJCydQkfQi5fMy6EWTt_xDEEjEd2kKpfPYDRfame1VBjLJXogiHC2I42_EvQZp2EzA&usqp=CAU'
        },
        {
            alt: "image5",
            url: 'data:image/jpeg;base64,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'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Glimpse on the past'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                   
                </Typography>
                <Paragraph text={
                    'Immerse yourself in our captivating docity photo gallery, showcasing the essence and beauty of our campus and community. Let each image tell a story of inspiration and pride. Explore today! 📸🏞️'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery