import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetails({ product }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1 
    );
};

const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
    prevIndex === 0 ? product.images.length - 1 : prevIndex - 1 
);
};


}