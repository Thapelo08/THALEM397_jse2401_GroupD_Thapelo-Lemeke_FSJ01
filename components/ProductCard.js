import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    const getImageSrc = () => {
        if (product.thumbnail) return product.thumbnail;
        if (product.images && product.images.length > 0) return product.images[0];
        return 'placeholder-image.jpg';
    }
    return (
        <Link href={`/products/${product.id}`} className="card group">
            <div className="relative h-64 overflow-hidden">
                <Image 
                src={getImageSrc()}
                alt={product.title}
                fill style={{ objectFit: 'cover '}}
                className="group-hover: scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">{product.title}</h2>
                <p className="text-accent font-bold mb-2">${product.price.toFixed(2)}</p>
                <p className="text-sm text-secondary">{product.category}</p>
            </div>
        </Link>
    );
}