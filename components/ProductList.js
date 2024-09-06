export default function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    </div>
            ))}
        </div>
    );
}