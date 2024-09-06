import ProductList from '../components/ProductList';
import Pagination from '../components/Paginatioin';

export default async function Home({ searchParams}) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;
  const skip = (page - 1) * limit;
}
