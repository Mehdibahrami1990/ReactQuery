import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Product from "../components/Product";
import { fetchProducts } from "../api/products.api";
import Sleep from "../utils/Sleep";
const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      await Sleep(2000);
      return fetchProducts();
    },
  });

  //   const [isLoading, setIsLoading] = useState(false);
  //   const [products, setProducts] = useState<ProductType[]>([]);
  //   useEffect(() => {
  //     const callToApi = async () => {
  //       setIsLoading(true);
  //       await Sleep(2000)                                               //************************OLD PRACTICE ************************ */
  //       const products = await fetchProducts();
  //       setProducts(products);
  //       setIsLoading(false);
  //     };
  //     callToApi();
  //   }, []);
  const renderProducts = useMemo(() => {
    if (products) {
      return products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        );
      });
    }
    return null;
  }, [products]);
  if (isError) {
    console.log(error)
    return (
      <div>
        <p className="t">Some error happened</p>
      </div>
    );
  }
  return (
    <div>{isLoading ? <p className="t">Loading...</p> : renderProducts}</div>
  );
};

export default Products;
