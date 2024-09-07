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

return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-96">
        <Image 
          src={product.images[currentImageIndex]} 
          alt={product.title}
          fill
          style={{ objectFit: 'contain' }}
        />
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button onClick={prevImage} className="bg-gray-800 text-white px-2 py-1 rounded">Previous</button>
            <button onClick={nextImage} className="bg-gray-800 text-white px-2 py-1 rounded">Next</button>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="mb-2"><span className="font-semibold">Category:</span> {product.category}</p>
        <p className="mb-2"><span className="font-semibold">Rating:</span> {product.rating}/5</p>
        <p className="mb-2"><span className="font-semibold">Stock:</span> {product.stock} available</p>
        <div className="mb-4">
          <span className="font-semibold">Tags:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {product.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{review.reviewerName}</span>
              <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <p className="mb-2">{review.comment}</p>
            <p><span className="font-semibold">Rating:</span> {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}