"use client"

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import getProduct from '../../api';



export default function ProductPage() {
    const [singleProduct, setSingleProduct] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    
 
    const { id } = useParams()

    const paramid = id

    console.log("Current id is:",paramid)

    useEffect(() => {
        if (!paramid) {
            console.error("ID is missing.");
            return;
        }
    
        const fetchData = async () => {
            setLoading(true);
            try {
                const product = await getProduct(paramid);
                console.log("API response:", product)
                if (product.error) {
                    setError(product.error);
                    console.error("Error fetching product:", product.error);
                } else {
                    setSingleProduct(product);
                    console.log("Fetched product:", response); // Log response data
                }
            } catch (err) {
                console.error("Fetch failed:", err.message); // Log any fetch failures
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [paramid]);

    
   


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    const images_image = !imageError && singleProduct.images && singleProduct.images.length >= 0 ? singleProduct.images : ['/placeholder-image.jpg'];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images_image.length - 1 ? 0 : prevIndex + 1 
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images_image.length - 1 : prevIndex - 1 
        );
    };

   
    if(error) {
        return (
            <div>
            <h2>Oops! something went wrong.</h2>
            <p>We couldnt load the product you requested. Please try again later.</p>
            </div>
        )
    }

    if(loading){
        return(
            <div>Loading product details...</div>
        )
    }
    

    return ( 
        <div className="container mx-auto px-4 py-8">
           <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
           ← Back to Products
           </Link>
           <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative h-96 card">
                    <Image 
                        src={images_image[currentImageIndex]} 
                        alt={singleProduct.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        onError={() => setImageError(true)}
                    />
                    {images_image.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                            <button onClick={prevImage} className="btn btn-secondary">Previous</button>
                            <button onClick={nextImage} className="btn btn-secondary">Next</button>
                        </div>
                    )}
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-4">{singleProduct.title}</h1>
                    <p className="text-2xl font-semibold text-accent mb-4">${singleProduct.price}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{singleProduct.description}</p>
                    <p className="mb-2"><span className="font-semibold">Category:</span> {singleProduct.category}</p>
                    <p className="mb-2"><span className="font-semibold">Rating:</span> {singleProduct.rating}/5</p>
                    <p className="mb-4">
                        <span className="font-semibold">Stock:</span> 
                        {singleProduct.stock > 0 ? `${singleProduct.stock} available` : 'Out of stock'}
                    </p>
                    <div className="mb-6">
                        <span className="font-semibold">Tags:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {singleProduct.tags && singleProduct.tags.lengh > 0 ? (
                            singleProduct.tags.map((tag, index) => (
                                <span key={index} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                          ))
                           ) : (
                            <p>No tags available</p>
                           )}
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2">
    <h2 className="text-2xl font-bold mb-6">Reviews</h2>
    {singleProduct.reviews && singleProduct.reviews.length > 0 ? (
        singleProduct.reviews.map((review, index) => (
            <div key={index} className="card p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{review.reviewerName}</span>
                    <span className="text-sm text-secondary">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="mb-2">{review.comment}</p>
                <p><span className="font-semibold">Rating:</span> {review.rating}/5</p>
            </div>
        ))
    ) : (
        <p>No reviews available</p> 
    )}
</div>

            </div>
        </div>
        </div>
    );
}