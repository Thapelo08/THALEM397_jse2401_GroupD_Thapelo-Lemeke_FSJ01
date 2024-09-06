import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductDetails from '../../../components/ProductList';

async function getProduct(id) {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    return res.json();
}

export default async function ProductPage({ params}) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return ( 
        <div className="container mx-auto px-4 py-8">
           <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
           ← Back to Products
           </Link>
           <ProductDetails products={product} />
        </div>
    );
}