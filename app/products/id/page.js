import { notFound } from 'next/navigation';

async function getProduct(id) {
    const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    return res.json();
}