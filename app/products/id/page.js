import { notFound } from 'next/navigation';

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
}