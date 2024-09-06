import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';

export default async function Home({ searchParams}) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  const productsData = await fetch (`https://next-ecommerce-api.vercel.app/products?limit=${limit}&skip=${skip}`, { cache: 'no-store' });
  const products = await productsData.json();

  return (
    <main>
      <h1>E-commerce Store</h1>
      <ProductList products={products} />
      <Pagination page={page} />
    </main>
  );
}
