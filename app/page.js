import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const response = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${limit}&skip=${skip}`, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const products = await response.json();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Discover Our Products</h1>
      <ProductGrid products={products} />
      <Pagination currentPage={page} />
    </div>
  );
}