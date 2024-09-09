export default async function getProduct(productId) {
    try {
        const res = await fetch(`https://next-ecommerce-api.vercel.app/products/${productId}`);
        if (!res.ok) {
            throw new Error('Failed to fetch product');
        }
        const data = await res.json();
        console.log(data)
        return data
    } catch (error) {
        console.error("Error in getProduct:", error);
        return {error} ;
    }
}