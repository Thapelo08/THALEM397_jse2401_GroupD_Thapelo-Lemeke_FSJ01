import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    retuen (
        <Link href={`/products/${product.id}`} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
                <Image 
                src={product.thunbnail}
                alt={product.title}
                fill style={{ objectFit: 'cover '}}
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
            </div>
        </Link>
    );
}