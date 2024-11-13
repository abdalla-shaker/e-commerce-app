import { useSelector } from "react-redux";
import { CardDefault } from "../UI/Card";

const Products = () => {
  const products = useSelector((state) => state.product);

  console.log(products)
  
  return (
    <main>
      <ul className="container mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
        {products.map((product) => (
          <li key={product.id}>
            <CardDefault prod={product} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
