import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

export default async function Home({ searchParams}) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const response = await fetch (`https://next-ecommerce-api.vercel.app/products?limit=${limit}&skip=${skip}`, { cache: 'no-store' });
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await response.json();

  return (
    <main className="conatiner mx-auto px-4">
      <h1>E-commerce Store</h1>
      <ProductList products={products} />
      <Pagination page={page} />
    </main>
  );
}
