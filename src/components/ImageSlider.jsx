import React, { useState } from 'react';

const sliderImages = [
    { src: "https://images.pexels.com/photos/9744735/pexels-photo-9744735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "image1" },
    { src: "https://images.pexels.com/photos/17777833/pexels-photo-17777833/free-photo-of-man-in-a-tailors-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 2" },
    { src: "https://st2.depositphotos.com/6672578/10090/i/450/depositphotos_100907956-stock-photo-artisan-carefully-sanding-chair-frame.jpg", alt: "Image 3" },
    { src: "https://cdn.pixabay.com/photo/2017/03/27/14/33/ancient-2179091_1280.jpg", alt: "Image 4" },
    { src: "https://images.pexels.com/photos/15390906/pexels-photo-15390906/free-photo-of-artisans-sitting-in-a-workshop-and-working-on-cooper-patterned-trays.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Image 5" },
    { src: "https://authindia.com/wp-content/uploads/2023/02/Rajasthan-Pottery-8-1536x864.jpg", alt: "image6" },
    { src: "https://images.pexels.com/photos/7205810/pexels-photo-7205810.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "image7" },
    { src: "https://images.pexels.com/photos/6713039/pexels-photo-6713039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "image8" },
    { src: "https://images.pexels.com/photos/848205/pexels-photo-848205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "image9" },
    { src: "https://indian.handicrafts.gov.in/files/scheme_file/g18.jpg", alt: "image10" },
    { src: "https://images.pexels.com/photos/19179109/pexels-photo-19179109/free-photo-of-potter-sitting-and-working-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "image11" },
    { src: "https://images.pexels.com/photos/2153135/pexels-photo-2153135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "image12" }
];

const ImageSlider = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const imageWidth = 310; // 300px width + 10px margin-right
    const visibleImages = 4; // Number of images visible at a time (approx)
    
    const moveSlide = (direction) => {
        // direction is -1 for next, 1 for prev
        let newPosition = currentPosition + (direction * imageWidth);
        
        // Boundary checks
        const maxPosition = 0;
        const minPosition = -(imageWidth * (sliderImages.length - visibleImages));

        if (newPosition > maxPosition) {
            newPosition = minPosition; // Loop to the end
        }
        if (newPosition < minPosition) {
            newPosition = maxPosition; // Loop to the beginning
        }

        setCurrentPosition(newPosition);
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={() => moveSlide(1)}>❮</button>
            <div className="image-row" style={{ transform: `translateX(${currentPosition}px)` }}>
                {sliderImages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
            <button className="next" onClick={() => moveSlide(-1)}>❯</button>
        </div>
    );
};

export default ImageSlider;